const e=JSON.parse('{"key":"v-60ef646e","path":"/zh/posts/llm/ByteTransformer.html","title":"大幅优化推理速度-ByteTransformer","lang":"zh-CN","frontmatter":{"author":"猞猁-zlj","icon":"pen-to-square","date":"2023-06-05T00:00:00.000Z","shortTitle":"ByteTransformer优化推理速度","title":"大幅优化推理速度-ByteTransformer","category":["语言模型"],"tag":["Transformer","优化","字节"],"description":"大幅优化推理速度-ByteTransformer 论文提出了字节跳动的GPU Transformer推理库——ByteTransformer。针对自然语言处理常见的可变长输入，论文提出了一套优化算法，这些算法在保证运算正确性的前提下，成功避免了传统实现中的冗余运算，实现了端到端的推理过程的大幅优化。","head":[["meta",{"property":"og:url","content":"https://github.com/HUSTAI/HUSTAI.github.io/zh/posts/llm/ByteTransformer.html"}],["meta",{"property":"og:site_name","content":"知识分享"}],["meta",{"property":"og:title","content":"大幅优化推理速度-ByteTransformer"}],["meta",{"property":"og:description","content":"大幅优化推理速度-ByteTransformer 论文提出了字节跳动的GPU Transformer推理库——ByteTransformer。针对自然语言处理常见的可变长输入，论文提出了一套优化算法，这些算法在保证运算正确性的前提下，成功避免了传统实现中的冗余运算，实现了端到端的推理过程的大幅优化。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-01T06:15:32.000Z"}],["meta",{"property":"article:author","content":"猞猁-zlj"}],["meta",{"property":"article:tag","content":"Transformer"}],["meta",{"property":"article:tag","content":"优化"}],["meta",{"property":"article:tag","content":"字节"}],["meta",{"property":"article:published_time","content":"2023-06-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-01T06:15:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"大幅优化推理速度-ByteTransformer\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-05T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-01T06:15:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"猞猁-zlj\\"}]}"]]},"headers":[{"level":2,"title":"1 介绍","slug":"_1-介绍","link":"#_1-介绍","children":[]},{"level":2,"title":"2 优化算法","slug":"_2-优化算法","link":"#_2-优化算法","children":[{"level":3,"title":"2.1 Remove padding 算法","slug":"_2-1-remove-padding-算法","link":"#_2-1-remove-padding-算法","children":[]},{"level":3,"title":"2.2 融合的多头注意力","slug":"_2-2-融合的多头注意力","link":"#_2-2-融合的多头注意力","children":[]},{"level":3,"title":"2.3 CUTLASS grouped GEMM","slug":"_2-3-cutlass-grouped-gemm","link":"#_2-3-cutlass-grouped-gemm","children":[]}]},{"level":2,"title":"3 变种 Transformer 支持","slug":"_3-变种-transformer-支持","link":"#_3-变种-transformer-支持","children":[]}],"git":{"createdTime":1686823822000,"updatedTime":1698819332000,"contributors":[{"name":"sheli00","email":"44807582+sheli00@users.noreply.github.com","commits":6},{"name":"Liu Xiao","email":"42756849+liuxiaocs7@users.noreply.github.com","commits":4}]},"readingTime":{"minutes":4.02,"words":1207},"filePathRelative":"zh/posts/llm/ByteTransformer.md","localizedDate":"2023年6月5日","excerpt":"<h1> 大幅优化推理速度-ByteTransformer</h1>\\n<p>论文提出了字节跳动的GPU Transformer推理库——ByteTransformer。针对自然语言处理常见的<strong>可变长输入</strong>，论文提出了一套优化算法，这些算法在保证运算正确性的前提下，成功避免了传统实现中的冗余运算，实现了端到端的推理过程的大幅优化。</p>\\n","autoDesc":true}');export{e as data};
