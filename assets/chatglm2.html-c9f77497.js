const t=JSON.parse('{"key":"v-129844b1","path":"/zh/posts/llm/chatglm2.html","title":"ChatGLM2架构升级","lang":"zh-CN","frontmatter":{"author":"最后的开神-wkyc","icon":"pen-to-square","date":"2023-07-06T00:00:00.000Z","category":["LLM"],"tag":["语言模型"],"description":"ChatGLM2架构升级 ChatGLM2-6B使用了GLM的混合目标函数，经过了 1.4T 中英标识符的预训练与人类偏好对齐训练，评测结果显示，相比于初代模型，ChatGLM2-6B在MMLU（+23%）、CEval（+33%）、GSM8K（+571%）、BBH（+60%）等数据集上的性能取得了大幅度的提升，在同尺寸开源模型中具有较强的竞争力。","head":[["meta",{"property":"og:url","content":"https://github.com/HUSTAI/HUSTAI.github.io/zh/posts/llm/chatglm2.html"}],["meta",{"property":"og:site_name","content":"知识分享"}],["meta",{"property":"og:title","content":"ChatGLM2架构升级"}],["meta",{"property":"og:description","content":"ChatGLM2架构升级 ChatGLM2-6B使用了GLM的混合目标函数，经过了 1.4T 中英标识符的预训练与人类偏好对齐训练，评测结果显示，相比于初代模型，ChatGLM2-6B在MMLU（+23%）、CEval（+33%）、GSM8K（+571%）、BBH（+60%）等数据集上的性能取得了大幅度的提升，在同尺寸开源模型中具有较强的竞争力。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-06T02:30:42.000Z"}],["meta",{"property":"article:author","content":"最后的开神-wkyc"}],["meta",{"property":"article:tag","content":"语言模型"}],["meta",{"property":"article:published_time","content":"2023-07-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-06T02:30:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ChatGLM2架构升级\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-06T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-06T02:30:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"最后的开神-wkyc\\"}]}"]]},"headers":[{"level":2,"title":"1 基座模型的升级","slug":"_1-基座模型的升级","link":"#_1-基座模型的升级","children":[{"level":3,"title":"1.1 Transformer架构","slug":"_1-1-transformer架构","link":"#_1-1-transformer架构","children":[]},{"level":3,"title":"1.2 词汇表大小","slug":"_1-2-词汇表大小","link":"#_1-2-词汇表大小","children":[]},{"level":3,"title":"1.3 模型结构","slug":"_1-3-模型结构","link":"#_1-3-模型结构","children":[]}]},{"level":2,"title":"2 FlashAttention","slug":"_2-flashattention","link":"#_2-flashattention","children":[]},{"level":2,"title":"3 Multi-Query Attention","slug":"_3-multi-query-attention","link":"#_3-multi-query-attention","children":[]},{"level":2,"title":"4 测试结果","slug":"_4-测试结果","link":"#_4-测试结果","children":[]}],"git":{"createdTime":1688610466000,"updatedTime":1688610642000,"contributors":[{"name":"RankKCodeTalker","email":"1073931273@qq.com","commits":2}]},"readingTime":{"minutes":6.09,"words":1828},"filePathRelative":"zh/posts/llm/chatglm2.md","localizedDate":"2023年7月6日","excerpt":"<h1> ChatGLM2架构升级</h1>\\n<p>ChatGLM2-6B使用了GLM的混合目标函数，经过了 1.4T 中英标识符的预训练与人类偏好对齐训练，评测结果显示，相比于初代模型，ChatGLM2-6B在MMLU（+23%）、CEval（+33%）、GSM8K（+571%）、BBH（+60%）等数据集上的性能取得了大幅度的提升，在同尺寸开源模型中具有较强的竞争力。</p>\\n","autoDesc":true}');export{t as data};
