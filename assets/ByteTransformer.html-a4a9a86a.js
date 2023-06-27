import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as i,c as d,e as f,a as e,b as t,d as a,f as o}from"./app-700cc7d9.js";const l="/assets/images/llm/bytetransformer1.png",c="/assets/images/llm/bytetransformer2.png",h="/assets/images/llm/bytetransformer3.png",p="/assets/images/llm/bytetransformer4.png",m={},_=o('<h1 id="大幅优化推理速度-bytetransformer" tabindex="-1"><a class="header-anchor" href="#大幅优化推理速度-bytetransformer" aria-hidden="true">#</a> 大幅优化推理速度-ByteTransformer</h1><p>本文贡献：</p><ul><li>设计和开发了ByteTransformer，这是一种针对<strong>可变长度输入</strong>优化的高性能 GPU加速transformer。</li><li>提出了一种<strong>padding-free</strong>算法，将输入张量与可变长度序列打包，并计算所有变换器操作的定位偏移向量以进行索引，从而使整个变换器管道免于填充和计算零令牌</li><li>提出了一个<strong>融合的多头注意力</strong>来降低中间矩阵的内存开销，中间矩阵是序列长度的二次方。</li></ul>',3),g=e("figure",null,[e("img",{src:l,alt:"论文截图",tabindex:"0",loading:"lazy"}),e("figcaption",null,"图1 论文信息")],-1),u={href:"https://arxiv.org/abs/2210.03052",target:"_blank",rel:"noopener noreferrer"},b=e("br",null,null,-1),T={href:"https://github.com/bytedance/ByteTransformer",target:"_blank",rel:"noopener noreferrer"},M=o('<h2 id="_1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-介绍" aria-hidden="true">#</a> 1 介绍</h2><p>现有的一些深度学习框架，如Tensorflow，PyTorch，TVM以及NVIDIA TensorRT等，要求输入序列长度相同，才能利用批处理加速Transformer计算。然而，在实际场景中，输入序列通常是变长的，而零填充会引入大量的额外计算开销。字节跳动AML团队先前提出的“effective Transformer”<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>，通过对输入的重排列，实现了 QKV projection 和 MLP 的 padding free，但 self attention 部分仍然需要 padding。<br> 为了解决这个问题，字节跳动 AML 团队提出了 ByteTransformer，它实现了变长输入的 padding free 计算，并且实现了全面的 kernel fusion 以进一步提高性能。</p><h2 id="_2-优化算法" tabindex="-1"><a class="header-anchor" href="#_2-优化算法" aria-hidden="true">#</a> 2 优化算法</h2><h3 id="_2-1-remove-padding-算法" tabindex="-1"><a class="header-anchor" href="#_2-1-remove-padding-算法" aria-hidden="true">#</a> 2.1 Remove padding 算法</h3><p>这个算法源自字节跳动 AML 团队之前的工作 &quot;effective Transformer&quot;，在 NVIDIA 开源 FasterTransformer 中也有集成。ByteTransformer 同样使用该算法去除对 attention 外矩阵乘的额外计算。</p><figure><img src="'+c+'" alt="padding free" tabindex="0" loading="lazy"><figcaption>图2 Remove padding 算法</figcaption></figure><p>算法步骤如下。</p><p>（1）计算 attention mask 的前缀和，作为 offsets。</p><p>（2）根据 offsets 把输入张量从 [batch_size, seqlen, hidden_size] 重排列为 [valid_seqlen, hidden_size] ，再参与后续的矩阵乘计算，实现 padding free。</p><h3 id="_2-2-融合的多头注意力fmha-fused-multi-head-attention" tabindex="-1"><a class="header-anchor" href="#_2-2-融合的多头注意力fmha-fused-multi-head-attention" aria-hidden="true">#</a> 2.2 融合的多头注意力FMHA (Fused Multi-Head Attention)</h3><p>旧版的多头注意力：多头注意力 (Multi-Head)，具体是在计算时对注意力做一些变形，每个输入产生多组 Q、K、V（生成几组就是几个头），每组各自计算互不影响，最后把输出拼接在一起作为总输出（可能要再乘一个矩阵来调整形状）。</p><p>为了优化 attention 部分的性能，ByteTransformer 中实现了 fused multi-head attention 算子。对于 seqlen 长度，以 384 为界划分为两种实现方式。</p><p>（1）对于短 seqlen, 因为可以把 QK 整行放在共享内存进行 softmax 操作，通过手写 kernel 的方式实现，矩阵乘通过调用 wmma 接口使用 TensorCore 保证高性能。</p><p>（2）对于长 seqlen, 因为共享内存大小限制，不能在一个手写 kernel 中完成所有操作。基于高性能的 CUTLASS<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup> grouped GEMM, 分成两个 gemm kernel 实现，并把 add_bias, softmax 等操作 fused 到 GEMM kernel 中。</p><h3 id="_2-3-cutlass-grouped-gemm" tabindex="-1"><a class="header-anchor" href="#_2-3-cutlass-grouped-gemm" aria-hidden="true">#</a> 2.3 CUTLASS grouped GEMM</h3><p>NVIDIA 开发的 grouped GEMM 可以在一个 kernel 中完成多个独立矩阵乘问题的计算，利用这个性质可以实现 Attention 中的 padding free。</p><p>（1）Attention 中的两次矩阵乘操作，都可以拆解为 batch_size x head_num 个独立的矩阵乘子问题。</p><p>（2）每个矩阵乘子问题，把问题大小传入到 grouped GEMM，其中 seqlen 传递真实的 valid seqlen 即可。</p><p>grouped GEMM 原理：kernel 中每个 threadblock (CTA) 固定分块大小，每个矩阵乘子问题根据问题大小和分块大小，拆解为不同数量的待计算块，再把这些块平均分配到每个 threadblock 中进行计算。</p><figure><img src="'+h+'" alt="grouped GEMM 原理图" tabindex="0" loading="lazy"><figcaption>图3 grouped GEMM 原理</figcaption></figure><p>使用 grouped GEMM 实现 attention 时，由于子问题的数量 batch_size x head_num 通常较大，读取子问题参数会有不小的开销，因为从线程角度看，每个线程都需要遍历读取所有的子问题大小。为了解决这个问题，ByteTransformer 对 grouped GEMM 中读取子问题参数进行了性能优化，使其可以忽略不计。</p><p>（1）共享子问题参数。对同一个输入，不同 head 的 valid seqlen 相同，problem size 也相同，通过共享使参数存储量从 batch_size x head_num 减少到 batch_size。</p><p>（2）warp prefetch. 原始实现中，每个 CUDA thread 依次读取所有的子问题 problem size，效率很低。改为一个 warp 内线程读取连续的 32 个子问题参数，然后通过 warp 内线程通信交换数据，每个线程的读取次数降低到 1/32。</p><figure><img src="'+p+'" alt="warp prefetch 示意图" tabindex="0" loading="lazy"><figcaption>图4 warp prefetch</figcaption></figure><h2 id="_3-变种-transformer-支持" tabindex="-1"><a class="header-anchor" href="#_3-变种-transformer-支持" aria-hidden="true">#</a> 3 变种 Transformer 支持</h2><p>目前，字节跳动 AML 团队已经在 GitHub 上开源了 ByteTransformer 的标准 BERT 实现。除此之外，字节内部版本还支持了许多 Transformer 变种，比如 Deberta, Roformer，T5 等等。代码实现易于拓展，并且上述各种优化手段也可以方便地应用到变种 Transformer 中。</p><h2 id="_4-参考" tabindex="-1"><a class="header-anchor" href="#_4-参考" aria-hidden="true">#</a> 4 参考</h2><hr class="footnotes-sep">',28),y={class:"footnotes"},x={class:"footnotes-list"},k={id:"footnote1",class:"footnote-item"},A={href:"https://github.com/bytedance/effective_transformer",target:"_blank",rel:"noopener noreferrer"},v=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),B={id:"footnote2",class:"footnote-item"},E={href:"https://github.com/NVIDIA/cutlass",target:"_blank",rel:"noopener noreferrer"},I=e("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1);function V(z,G){const r=s("ExternalLinkIcon");return i(),d("div",null,[_,f(" more "),g,e("p",null,[t("论文地址："),e("a",u,[t("https://arxiv.org/abs/2210.03052"),a(r)]),b,t(" 代码地址："),e("a",T,[t("https://github.com/bytedance/ByteTransformer"),a(r)])]),M,e("section",y,[e("ol",x,[e("li",k,[e("p",null,[t("ByteDance "),e("a",A,[t("https://github.com/bytedance/effective_transformer"),a(r)]),t(),v])]),e("li",B,[e("p",null,[t("NVIDIA "),e("a",E,[t("https://github.com/NVIDIA/cutlass"),a(r)]),t(),I])])])])])}const D=n(m,[["render",V],["__file","ByteTransformer.html.vue"]]);export{D as default};
