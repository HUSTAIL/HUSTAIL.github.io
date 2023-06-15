import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as l,e as i,a as s,b as a,f as n}from"./app-67ac138a.js";const m="/assets/images/posts/2023-6/gpt_1.png",r="/assets/images/posts/2023-6/gpt_2.png",c="/assets/images/posts/2023-6/gpt_3.png",o="/assets/images/posts/2023-6/gpt_4.png",p="/assets/images/posts/2023-6/gpt_5.png",g="/assets/images/posts/2023-6/gpt_6.png",h={},d=s("h1",{id:"gpt论文",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#gpt论文","aria-hidden":"true"},"#"),a(" GPT论文")],-1),u=s("p",null,"论文标题：Improving Language Understanding by Generative Pre-Training",-1),_=n('<h2 id="_1-模型架构" tabindex="-1"><a class="header-anchor" href="#_1-模型架构" aria-hidden="true">#</a> 1 模型架构</h2><figure><img src="'+m+'" alt="图1-1 GPT架构图" tabindex="0" loading="lazy"><figcaption>图1-1 GPT架构图</figcaption></figure><h2 id="_2-训练框架" tabindex="-1"><a class="header-anchor" href="#_2-训练框架" aria-hidden="true">#</a> 2 训练框架</h2><h3 id="_2-1-非监督预训练" tabindex="-1"><a class="header-anchor" href="#_2-1-非监督预训练" aria-hidden="true">#</a> 2.1 非监督预训练</h3>',4),f=s("p",null,[a("给定一个无监督的token语料库"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"U"),s("mo",null,"="),s("mo",{stretchy:"false"},"{"),s("mi",null,"u"),s("mn",null,"1"),s("mtext",null,"，"),s("mo",null,"…"),s("mtext",null,"，"),s("mi",null,"u"),s("mi",null,"n"),s("mo",{stretchy:"false"},"}")]),s("annotation",{encoding:"application/x-tex"},"U=\\{u1，…，un\\}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"U"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"{"),s("span",{class:"mord mathnormal"},"u"),s("span",{class:"mord"},"1"),s("span",{class:"mord cjk_fallback"},"，"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},"…"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord cjk_fallback"},"，"),s("span",{class:"mord mathnormal"},"u"),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},"}")])])]),a("，作者使用标准语言建模目标来最大化以下概率。")],-1),y=s("figure",null,[s("img",{src:r,alt:"公式",tabindex:"0",loading:"lazy"}),s("figcaption",null,"公式")],-1),x=s("p",null,"其中k是上下文窗口的大小，条件概率P使用具有参数Θ的神经网络来建模。使用随机梯度下降训练这些参数。",-1),k=s("p",null,"在作者的实验中，作者将多层Transformer decoder用于语言模型，这是Transformer的变体。该模型在输入上下文token上应用multi-headed self-attention操作，然后是position-wise前馈层，以在目标token上产生输出分布。",-1),b=s("figure",null,[s("img",{src:c,alt:"公式",tabindex:"0",loading:"lazy"}),s("figcaption",null,"公式")],-1),U=s("p",null,[a("其中"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"U"),s("mo",null,"="),s("mo",{stretchy:"false"},"("),s("mi",null,"U"),s("mo",null,"−"),s("mi",null,"k"),s("mtext",null,"，"),s("mo",null,"…"),s("mtext",null,"，"),s("mi",null,"U"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"U=(U−k，…，U−1)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"U"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"U"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7778em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"mord cjk_fallback"},"，"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},"…"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord cjk_fallback"},"，"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"U"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])]),a("是token的上下文向量，n是层数，是token嵌入矩阵，Wp是position嵌入矩阵。")],-1),w=n('<h3 id="_2-2-监督微调" tabindex="-1"><a class="header-anchor" href="#_2-2-监督微调" aria-hidden="true">#</a> 2.2 监督微调</h3><p>在预训练之后，作者将参数调整为受监督的目标任务。假设有一个标记的数据集C，其中每个实例由一系列输入token以及标签。输入通过作者的预训练模型，以获得最终Transformer块的激活，然后将其送到添加的具有参数的线性输出层来以预测。</p><figure><img src="'+o+'" alt="公式" tabindex="0" loading="lazy"><figcaption>公式</figcaption></figure><p>因此，优化目标变成了以下式子。</p><figure><img src="'+p+'" alt="公式" tabindex="0" loading="lazy"><figcaption>公式</figcaption></figure><p>作者还发现，将语言建模作为微调的辅助目标，通过</p><p>（1）改进监督模型的泛化；</p><p>（2）加速收敛，有助于学习。</p><p>之前的工作也观察到了这种辅助目标的改进性能。具体而言，作者优化了以下目标（带参数λ）。</p><figure><img src="'+g+'" alt="公式" tabindex="0" loading="lazy"><figcaption>公式</figcaption></figure>',10);function v(T,z){return e(),l("div",null,[d,u,i(" more "),_,f,y,x,k,b,U,w])}const j=t(h,[["render",v],["__file","gpt.html.vue"]]);export{j as default};
