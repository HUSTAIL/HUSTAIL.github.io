const t=JSON.parse('{"key":"v-e581d6e0","path":"/zh/posts/llm/ppo.html","title":"PPO：从策略梯度算法到近端策略优化算法","lang":"zh-CN","frontmatter":{"author":"最后的开神-wkyc","icon":"pen-to-square","date":"2023-06-28T00:00:00.000Z","shortTitle":"近端策略优化算法","category":["语言模型"],"tag":["模型","强化学习"],"description":"PPO：从策略梯度算法到近端策略优化算法 PPO（Proximal Policy Optimization）是一种策略梯度优化算法，它对标准的策略梯度方法做了改进，使得训练更加稳定。PPO的主要思想是：在每个更新步骤中，我们要确保当前的策略参数不会偏离旧策略参数太远。","head":[["meta",{"property":"og:url","content":"https://github.com/HUSTAI/HUSTAI.github.io/zh/posts/llm/ppo.html"}],["meta",{"property":"og:site_name","content":"知识分享"}],["meta",{"property":"og:title","content":"PPO：从策略梯度算法到近端策略优化算法"}],["meta",{"property":"og:description","content":"PPO：从策略梯度算法到近端策略优化算法 PPO（Proximal Policy Optimization）是一种策略梯度优化算法，它对标准的策略梯度方法做了改进，使得训练更加稳定。PPO的主要思想是：在每个更新步骤中，我们要确保当前的策略参数不会偏离旧策略参数太远。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-29T07:52:39.000Z"}],["meta",{"property":"article:author","content":"最后的开神-wkyc"}],["meta",{"property":"article:tag","content":"模型"}],["meta",{"property":"article:tag","content":"强化学习"}],["meta",{"property":"article:published_time","content":"2023-06-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-29T07:52:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PPO：从策略梯度算法到近端策略优化算法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-28T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-29T07:52:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"最后的开神-wkyc\\"}]}"]]},"headers":[{"level":2,"title":"1 策略梯度算法","slug":"_1-策略梯度算法","link":"#_1-策略梯度算法","children":[]},{"level":2,"title":"2 重要性采样","slug":"_2-重要性采样","link":"#_2-重要性采样","children":[]},{"level":2,"title":"3 优势函数","slug":"_3-优势函数","link":"#_3-优势函数","children":[]},{"level":2,"title":"4 KL散度的外在约束","slug":"_4-kl散度的外在约束","link":"#_4-kl散度的外在约束","children":[]},{"level":2,"title":"5 KL惩罚","slug":"_5-kl惩罚","link":"#_5-kl惩罚","children":[]},{"level":2,"title":"6 PPO裁剪（clip）","slug":"_6-ppo裁剪-clip","link":"#_6-ppo裁剪-clip","children":[]}],"git":{"createdTime":1687937785000,"updatedTime":1688025159000,"contributors":[{"name":"RankKCodeTalker","email":"93417472+RankKCodeTalker@users.noreply.github.com","commits":8}]},"readingTime":{"minutes":5.51,"words":1652},"filePathRelative":"zh/posts/llm/ppo.md","localizedDate":"2023年6月28日","excerpt":"<h1> PPO：从策略梯度算法到近端策略优化算法</h1>\\n<p>PPO（Proximal Policy Optimization）是一种策略梯度优化算法，它对标准的策略梯度方法做了改进，使得训练更加稳定。PPO的主要思想是：在每个更新步骤中，我们要确保当前的策略参数不会偏离旧策略参数太远。</p>\\n","autoDesc":true}');export{t as data};
