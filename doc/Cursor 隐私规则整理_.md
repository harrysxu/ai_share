

# **Cursor隐私大揭秘：你的代码，谁的“数据”？一份给UP主的详尽分析报告**

## **第一章 Cursor的诱人承诺：你的AI编码伙伴**

在AI编码工具的浪潮中，Cursor以一种“AI优先”的姿态脱颖而出，迅速抓住了全球开发者的目光 1。它并非简单地在现有编辑器中加入AI插件，而是将AI深度整合为工作流的核心。作为一个基于VS Code的复刻版本，Cursor为开发者提供了无与伦比的便利性：只需一键，即可导入所有熟悉的扩展、主题和快捷键，极大地降低了学习和迁移成本 3。

这种设计催生了一种被称为“Vibe Coding”（氛围编码）的全新开发体验 4。开发者不再需要逐字逐句地编写代码，而是可以通过自然语言描述他们的意图——无论是构建一个新功能还是修改现有逻辑，Cursor都能理解并生成相应的代码 1。这种从指令式到对话式的转变，正是Cursor感觉如此“次世代”的关键所在。

其核心差异化功能进一步强化了这种体验：

* **代码库全局上下文**：Cursor能够索引并理解整个项目的代码库。这意味着它可以回答复杂的、跨文件的问题，例如“项目中的用户认证逻辑在哪里实现的？”，并执行涉及多个文件的重构操作。这是早期AI助手难以企及的能力 2。  
* **强大的“代理模式”（Agent Mode）**：该模式赋予了AI更强的自主性。它可以根据一份产品需求文档（PRD）来独立实现新功能，跨文件调试复杂问题，甚至自动生成测试和文档 2。  
* **无缝的上下文集成**：通过@符号指令，如@File、@Code、@Terminal、@web和@git，开发者可以精确地控制提供给AI的上下文信息，从而使其生成的代码更加精准和强大 2。  
* **卓越的性能与速度**：在社区的反馈中，一个普遍的共识是Cursor在应用代码变更时的速度明显快于其主要竞争对手，例如GitHub Copilot，这带来了显著的用户体验优势 10。

然而，正是这些令人惊叹的“魔法”功能，引出了一个至关重要的问题：这一切是如何实现的？答案在于其架构设计。这些强大的功能，如全局代码库理解和多文件修改，需要巨大的处理能力和对项目的整体洞察 2。官方文档明确指出，用户的代码数据会被发送到Cursor的服务器，以支持其

*所有*的AI功能，而关键的提示词构建（prompt building）环节也在其后端完成 12。因此，这些看似神奇的功能并非完全在用户的本地机器上发生，而是一项依赖于后端服务器处理的服务。用户的编辑器客户端，本质上是通往Cursor强大云端处理能力的门户。这种架构在赋予Cursor强大能力的同时，也成为了其隐私争议的核心来源。它将我们直接引向了下一个关键问题：为了获得这些功能，用户需要付出怎样的“隐私代价”？

## **第二章 隐私的代价：Cursor到底收集了什么？**

当开发者沉浸于Cursor带来的高效体验时，一个潜在的“陷阱”却常常被忽略。对于免费（Hobby）和专业版（Pro）用户而言，一个关键的默认设置是：“隐私模式”（Privacy Mode）处于关闭状态 14。这意味着，在用户主动更改设置之前，Cursor会默认收集大量数据。

### **默认设置下收集的数据明细**

在“隐私模式”关闭的情况下，Cursor收集的数据范围相当广泛，主要包括以下几类：

* **代码库数据**：这是最敏感的部分。Cursor的隐私政策明确表示，他们会收集“提示（prompts）、编辑器行为、代码片段、仓库中的文件，以及对这些代码进行的编辑” 16。这几乎涵盖了开发者在编辑器内的一切代码相关活动。  
* **遥测与使用数据**：为了分析产品性能，Cursor会生成一个用户ID用于追踪，并收集页面浏览、ping信号和使用次数等数据 16。此外，还包括用户的IP地址、设备类型和浏览器设置等信息 17。  
* **个人信息**：在创建账户和处理支付时，Cursor会收集标准的个人身份信息（PII），如姓名、电子邮件地址和支付信息。支付信息由第三方服务商Stripe处理 12。

### **数据收集的目的与流向**

Cursor官方声明，收集这些数据的目的是为了“评估和改进我们的AI功能” 16。换言之，用户的代码被直接用于训练和优化其AI模型。

这些数据并不仅仅停留在Cursor内部。数据流显示，用户的代码首先被发送到Cursor部署在AWS上的基础设施，然后可能被转发给其合作的语言模型供应商，如Fireworks、OpenAI、Anthropic和Google 12。虽然Cursor声称与这些合作伙伴签订了“零数据保留”协议（针对开启隐私模式的用户），但对于关闭隐私模式的用户，情况则不那么明朗。例如，其推理服务提供商Fireworks在隐私模式关闭时，

*可能*会收集用户的提示来提升推理速度 16。

### **“选择退出”引发的社区风波**

这种“默认收集，选择退出（Opt-out）”的模式在开发者社区引发了巨大争议。一个在Reddit上广为流传的案例极具代表性：一位使用Pro计划的开发者被同事严厉指责，因为他没有意识到自己公司的专有代码正被用于训练Cursor的AI模型 15。

社区的情绪很明确：对于一个付费产品，隐私保护应该是“选择加入（Opt-in）”而非“选择退出”。正如一位用户评论道：“我们付费是为了使用产品，而不是付费来帮助你们改进产品” 15。这揭示了公司政策与用户期望之间的根本性脱节。

进一步分析其商业模式可以发现，这种隐私设置并非偶然。Cursor的隐私策略呈现出明显的双轨制，这本身就是一种商业策略。Pro计划（每月20美元）默认收集数据，而价格更高的团队版（每用户每月40美元）和企业版则允许组织强制开启隐私模式，并且对于商业版用户，隐私模式是默认开启的 14。

这种设计的背后逻辑清晰可见。企业客户对数据和知识产权安全有着严格的法律要求，如果默认收集数据，将无法打开企业市场。因此，“有保障的隐私”被打包成了一项专供企业客户的付费增值服务。相比之下，个人开发者群体更加分散，对风险的承受能力也更高。通过将数据收集设为个人用户的默认选项，Cursor得以从海量的、多样化的代码中获取宝贵的训练数据，以不断强化其自研模型，从而建立起核心的竞争壁垒 12。

这最终导向一个深刻的结论：对于个人Pro用户而言，他们不仅仅是消费者，在不知情的情况下，他们也成为了数据贡献者。他们付费使用的产品，正通过他们自己的知识产权在不断迭代和完善。

## **第三章 “隐私模式”护盾：你的三级控制权**

为了应对用户的隐私顾虑，Cursor提供了名为“隐私模式”的核心控制机制。近期，该机制被进一步细化为三个层级，为用户提供了不同程度的数据保护。理解这三个模式的区别，对于做出明智选择至关重要 13。

### **隐私模式的三种选择**

这三个选项可以被视为一个“好、更好、最好”的隐私保护层级体系：

1. 第一级：共享数据（隐私模式关闭）  
   这是所有免费和Pro用户的默认设置。在此模式下，Cursor会存储并利用用户的提示、代码和遥测数据进行模型训练。官方的说法是，这可以“帮助我们为所有人改进Cursor” 13。  
2. 第二级：带存储的隐私模式（不训练）  
   这是一个中间选项。启用此模式后，用户的代码不会被Cursor或任何第三方用于模型训练。然而，为了支持某些需要持久化上下文的功能（如“后台代理”），部分代码数据仍会被存储在Cursor的服务器上 13。这是一个需要特别注意的关键区别。  
3. 第三级：完全隐私模式（不训练，不存储）  
   这是最安全的选项。在此模式下，用户的代码绝不会被存储或用于训练。所有数据在请求处理完毕后立即被删除 14。其代价是，那些需要远程存储代码的高级功能（如“后台代理”）将被禁用 13。

### **“索引”与“存储”的技术细节**

为了更准确地理解隐私保护的程度，必须厘清“代码索引”和“代码存储”这两个概念之间的技术差异：

* **索引（Indexing）**：即使用户开启了“完全隐私模式”，当选择索引整个代码库以获得全局上下文时，Cursor仍会将代码分块上传至其服务器。在服务器上，代码的向量表示（embeddings）被计算出来。关键在于，原始的明文代码在请求生命周期结束后即被销毁，只有这些向量化的嵌入数据和经过混淆处理的文件元数据会被保留在数据库中 13。  
* **存储（Storing）**：这指的是对明文代码片段的持久化保存。这种情况主要发生在“带存储的隐私模式”下，目的是为了支持像“后台代理”这样需要长期记忆和上下文的复杂功能 13。

此外，为了增加用户的信任度，Cursor强调其通过了SOC 2 Type II认证，这是一个业界公认的数据安全与合规标准 4。同时，他们承诺每年进行第三方渗透测试 12。当用户删除账户时，所有相关的索引代码库数据保证在30天内被彻底清除 17。

分析这三级隐私模式的设计可以发现，它并非一个简单的开关，而是一种刻意的设计，旨在引导用户在“高级功能”和“最高隐私”之间做出权衡。Cursor最前沿、最具吸引力的自主代理功能，如“后台代理”，需要长期上下文，因此依赖于远程代码存储 18。希望获得最高级别隐私保护的用户，必须放弃使用这些高级功能 13。而那些对尖端功能最感兴趣的用户，则被巧妙地引向了隐私保护程度稍低的“带存储的隐私模式”。

这表明，在Cursor当前的设计范式中，“完整的功能体验”与“彻底的隐私保护”是相互排斥的。这并非一个设计缺陷，而是一个核心的架构选择。用户必须根据自己项目的敏感性和风险承受能力，来决定愿意为了功能牺牲多少隐私，或者为了隐私放弃多少功能。

## **第四章 终极对决：Cursor与GitHub Copilot的隐私之战**

在AI编码助手的竞技场上，Cursor和GitHub Copilot是两位无可争议的重量级选手。它们功能强大且多有重叠，开发者的选择往往归结于工作流整合、成本，以及一个越来越关键的因素——隐私 10。

### **GitHub Copilot的隐私策略转向**

近年来，GitHub Copilot的隐私政策发生了一次重大转变，这使其在与Cursor的对比中获得了显著优势。对于个人用户（包括免费版和Pro版），GitHub现在明确声明：**默认情况下，用户的提示、建议和代码片段不会被用于AI模型训练，并且此设置无法被用户手动开启** 22。这一“默认不训练，且不可选择加入”的策略，是其在隐私保护方面最强有力的竞争壁垒。

对于企业级客户，两大平台都提供了强大的零数据保留隐私保障。Copilot Business版的提示和建议在返回后即被丢弃 25。Cursor的商业版则默认开启隐私模式 14。在这个层面上，两者的隐私承诺非常相似。

真正的差异体现在对个人付费用户的态度上。下面的表格将两者的隐私政策进行了直观的对比。

### **隐私政策对决：Cursor vs. GitHub Copilot**

| 功能 / 政策 | Cursor (Pro计划) | GitHub Copilot (个人/Pro计划) | Cursor (商业/企业版) | GitHub Copilot (商业/企业版) |
| :---- | :---- | :---- | :---- | :---- |
| **默认是否用用户代码训练** | **是** (隐私模式默认关闭) 15 | **否** (默认不训练，且无法选择加入) 22 | **否** (隐私模式默认开启) 14 | **否** (提示/建议不用于训练) 25 |
| **选择加入/退出机制** | **选择退出** (用户需手动开启隐私模式) 13 | **不适用** (默认不训练，无加入选项) 22 | **选择加入** (管理员可关闭隐私模式) | **不适用** (默认不训练) |
| **提示与建议保留** | 若隐私模式关闭则**存储**，开启则**丢弃** 13 | IDE内补全/聊天**丢弃**，其他用途(如CLI)保留**28天** 26 | **丢弃** 13 | **丢弃** 25 |
| **组织级隐私强制** | 支持 (团队版/企业版) 18 | 支持 (商业版/企业版) 26 | 支持 | 支持 |
| **关键信息来源** | 13 | 22 | 13 | 25 |

这张表格清晰地揭示了两家公司在对待个人用户数据上截然不同的哲学。

这种差异并非偶然，而是市场力量作用下的结果。开发者社区对知识产权和数据隐私问题高度敏感 5。作为市场领导者和微软旗下的产品，GitHub Copilot在推出初期因数据处理问题而面临严格审视 29。作为回应，GitHub实施了目前市场上对个人用户最友好的隐私政策之一，此举旨在平息争议并建立用户信任 22。

这一战略性举措，实际上是将隐私作为一种竞争武器。现在，任何默认隐私保护级别低于GitHub Copilot的竞争对手（如Cursor），都在舆论和用户信任的战场上处于不利地位。这意味着，Cursor未来可能面临巨大的市场压力，迫使其重新考虑对Pro用户的“选择退出”默认策略。虽然当前的模式有助于其快速获取训练数据，但正日益成为其市场营销和品牌信任的一大负债。

## **第五章 高级隐私神话：BYOK与本地LLM的真相**

在技术圈内，流传着一些关于如何通过高级配置来“绕过”Cursor数据收集的说法。然而，这些看似聪明的解决方案，在深入分析Cursor的架构后，被证明是普遍存在的误解。本节旨在揭穿这些神话，为用户提供清晰的事实。

### **神话一：“使用我自己的API密钥（BYOK）能保护代码隐私”**

* **普遍假设**：许多用户认为，通过在Cursor中配置自己的OpenAI、Anthropic或Azure API密钥，他们就能建立一条从本地编辑器到LLM供应商的直接通道，从而完全绕过Cursor的服务器，避免自己的代码被Cursor处理 30。  
* **残酷现实**：这是一个彻底的误解。Cursor的官方文档和安全页面都明确无误地指出：“**即使你使用自己的API密钥，你的请求仍然会通过我们的后端！**” 12。  
* **架构原因**：这种设计是其功能实现的核心。Cursor的后端服务器是其进行“最终提示词构建”、从代码库索引中注入上下文（RAG技术）以及执行其他专有“魔法”的地方 32。如果没有这一步，Cursor将退化为一个简单的API封装工具，失去其核心竞争力。  
* **BYOK的真正优势**：使用自己的API密钥，其真正的好处在于**成本控制**、**更高的请求频率限制**和**模型选择的灵活性**，而并非增强针对Cursor本身的数据隐私 30。

### **神话二：“使用本地LLM（如Ollama）意味着数据完全离线”**

* **普遍假设**：在自己的硬件上运行一个大型语言模型，被认为是终极的隐私解决方案，可以确保任何代码都不会离开本地计算机 34。  
* **残酷现实**：要让本地LLM与Cursor协同工作，需要一套复杂的变通方案。这通常涉及到使用ngrok等工具，为本地运行的服务创建一个面向公网的URL通道 34。  
* **暴露的数据流**：根据社区论坛的讨论，实际的数据流是这样的：用户的请求从Cursor客户端发送到Cursor的云端服务器进行索引和提示预处理。然后，Cursor的服务器向公网的ngrok URL发起调用，该调用通过隧道被转发回用户的本地机器，由本地LLM进行推理。最后，响应再沿着原路返回 34。  
* **深层影响**：  
  1. **并非离线**：这套设置需要持续的互联网连接才能工作，真正的离线使用是不可能的 34。  
  2. **代码仍被发送至Cursor**：用户的代码数据依然被发送到Cursor的服务器进行关键的预处理。所谓的“本地”，仅仅指的是最终的LLM推理步骤在本地执行 34。  
  3. **核心隐私优势丧失**：使用本地LLM最主要的目的——防止敏感代码接触任何第三方服务器——被Cursor的这种架构设计完全破坏了。

这两个神话的破灭揭示了Cursor架构的一个核心特征：一个“后端瓶颈”。其所有AI请求都必须经过中心化的服务器端处理。这个架构决策是其强大、上下文感知功能的基础，但也从根本上限制了用户实现真正的数据主权。这意味着，无论用户如何配置自己的模型端点，只要他们想使用Cursor的智能功能，就无法避免将代码发送到Cursor的服务器。

这导向一个非常明确的结论：对于那些将“专有代码绝不离开本地网络”作为最高、最绝对优先级的用户或组织而言，**当前形态的Cursor，无论采用何种设置或变通方案，都是一个根本上不合适的工具**。

## **第六章 你的行动手册：加固Cursor隐私设置**

了解了Cursor的隐私机制和潜在风险后，开发者可以采取一系列具体措施来主动控制数据暴露，在享受AI便利的同时最大限度地保护自己的代码。以下是一份可操作的实践指南。

### **第一步：明智地选择你的隐私模式**

根据项目性质，选择最合适的隐私级别是首要任务。可以遵循以下决策树：

* 处理敏感、专有或客户代码？  
  必须使用“完全隐私模式”（Full Privacy Mode） 37。接受这将禁用某些高级功能的现实。  
* 开发个人项目，希望使用高级功能但不想代码被用于训练？  
  选择“带存储的隐私模式”（Privacy Mode with Storage） 13。这是一个功能与隐私之间的平衡点。  
* 从事开源或非敏感项目，并愿意帮助改进工具？  
  可以保持默认设置（隐私模式关闭） 13。

### **第二步：掌握.cursorignore文件**

这个文件类似于.gitignore，可以告诉Cursor不要将某些文件或目录纳入AI请求的上下文中 21。

* **如何使用**：在项目根目录下创建一个名为.cursorignore的文件，并列出需要忽略的路径。  
* **推荐忽略内容**：  
  * node\_modules/  
  * .env 及所有包含密钥的文件  
  * \*.log  
  * secrets/ 或 config/ 等敏感目录  
* **重要警告**：需要警惕这可能带来的“虚假安全感”。.cursorignore很可能只阻止文件被用作*后台上下文*。如果你主动打开并编辑一个被忽略的文件（例如.env），Cursor几乎肯定仍会处理其内容以提供服务 38。因此，最安全的做法是，如果对隐私极度敏感，就根本不要在Cursor中打开包含机密信息的文件。

### **第三步：利用项目规则提升安全性**

Cursor的“项目规则”（Project Rules，位于.cursor/rules目录）功能，允许用户为特定项目设置持久化的系统级指令 11。这可以用来引导AI生成更安全的代码。

* **安全规则示例**：  
  * “始终使用参数化查询以防止SQL注入。”  
  * “为所有新API端点确保应用了身份验证中间件。”  
  * “禁止在客户端代码中硬编码API密钥。”

通过设定这些规则，可以在源头上减少AI引入常见安全漏洞的风险 5。

### **第四步：坚持人工代码审查**

AI是强大的助手，但绝非不会犯错的神。AI生成的代码可能包含严重的安全漏洞，如SQL注入（SQLi）、跨站脚本（XSS），甚至直接泄露硬编码的密钥 5。

* **核心原则**：所有由Cursor生成的、尤其是将要部署到生产环境的代码，**必须经过严格的人工审查** 17。绝不能盲目信任AI的输出。  
* **数据佐证**：第三方安全公司的研究为这一警告提供了数据支持。一项针对GitHub Copilot的分析发现，启用了该工具的仓库中，有6.4%存在密钥泄露问题，这一比例显著高于平均水平 29。这充分说明了AI编码工具引入安全风险的现实性。

### **第五步：了解VS Code复刻版的权衡**

最后，用户应意识到Cursor作为VS Code复刻版所带来的一些安全差异。为了实现其核心功能和避免与自身隐私模式混淆，Cursor默认禁用了VS Code的一些安全特性，例如“工作区信任”（Workspace Trust）和“扩展签名验证” 12。这意味着用户在安装第三方扩展时，可能需要比在标准VS Code环境中更加谨慎。

### **最终结论与建议**

* **对于业余爱好者和开源贡献者**：Cursor是一个极其强大的工具。在不处理敏感数据的前提下，关闭隐私模式可以帮助改进这个工具，形成良性循环。  
* **对于从事个人项目的专业开发者**：Pro计划性价比很高，但**必须手动开启“完全隐私模式”或“带存储的隐私模式”**，以保护个人知识产权。  
* **对于企业级应用**：**只有团队版（Teams）或企业版（Enterprise）是合适的选择**。这些计划提供了强制全员开启隐私模式的策略管理功能，这是处理公司专有代码的底线要求。  
* **对于高安全性或气隙环境**：由于其“后端瓶颈”的核心架构，Cursor目前**不是一个可行的选项**。它要求持续的互联网连接，并将代码发送到其服务器进行处理，这与高安全环境的要求背道而驰。

#### **引用的著作**

1. Cursor – Welcome, 访问时间为 七月 7, 2025， [https://docs.cursor.com/welcome](https://docs.cursor.com/welcome)  
2. Introduction \- Cursor Docs, 访问时间为 七月 7, 2025， [https://docs.cursor.com/get-started/introduction](https://docs.cursor.com/get-started/introduction)  
3. Cursor \- The AI Code Editor, 访问时间为 七月 7, 2025， [https://cursor.com/](https://cursor.com/)  
4. Cursor (code editor) \- Wikipedia, 访问时间为 七月 7, 2025， [https://en.wikipedia.org/wiki/Cursor\_(code\_editor)](https://en.wikipedia.org/wiki/Cursor_\(code_editor\))  
5. Cursor code security (in prod?) \+ Future employment worries? \- Reddit, 访问时间为 七月 7, 2025， [https://www.reddit.com/r/cursor/comments/1jwa2pt/cursor\_code\_security\_in\_prod\_future\_employment/](https://www.reddit.com/r/cursor/comments/1jwa2pt/cursor_code_security_in_prod_future_employment/)  
6. How To Use Cursor AI: A Complete Guide With Practical Example | Codecademy, 访问时间为 七月 7, 2025， [https://www.codecademy.com/article/how-to-use-cursor-ai-a-complete-guide-with-practical-examples](https://www.codecademy.com/article/how-to-use-cursor-ai-a-complete-guide-with-practical-examples)  
7. Cursor AI: A Guide With 10 Practical Examples \- DataCamp, 访问时间为 七月 7, 2025， [https://www.datacamp.com/tutorial/cursor-ai-code-editor](https://www.datacamp.com/tutorial/cursor-ai-code-editor)  
8. Mastering Cursor IDE: 10 Best Practices (Building a Daily Task Manager App) \- Medium, 访问时间为 七月 7, 2025， [https://medium.com/@roberto.g.infante/mastering-cursor-ide-10-best-practices-building-a-daily-task-manager-app-0b26524411c1](https://medium.com/@roberto.g.infante/mastering-cursor-ide-10-best-practices-building-a-daily-task-manager-app-0b26524411c1)  
9. Using LLMs and Cursor to become a finisher \- zabirauf || Zohaib, 访问时间为 七月 7, 2025， [https://zohaib.me/using-llms-and-cursor-for-finishing-projects-productivity/](https://zohaib.me/using-llms-and-cursor-for-finishing-projects-productivity/)  
10. GitHub Copilot vs Cursor in 2025: Why I'm paying half price for the ..., 访问时间为 七月 7, 2025， [https://www.reddit.com/r/GithubCopilot/comments/1jnboan/github\_copilot\_vs\_cursor\_in\_2025\_why\_im\_paying/](https://www.reddit.com/r/GithubCopilot/comments/1jnboan/github_copilot_vs_cursor_in_2025_why_im_paying/)  
11. Resources / Best Practices for Using PRDs with Cursor \- ChatPRD, 访问时间为 七月 7, 2025， [https://www.chatprd.ai/resources/PRD-for-Cursor](https://www.chatprd.ai/resources/PRD-for-Cursor)  
12. Security | Cursor \- The AI Code Editor, 访问时间为 七月 7, 2025， [https://cursor.com/security](https://cursor.com/security)  
13. Privacy & Security \- Cursor Docs, 访问时间为 七月 7, 2025， [https://docs.cursor.com/privacy/privacy](https://docs.cursor.com/privacy/privacy)  
14. Question regarding cursor's code privacy \- Discussions \- Cursor \- Community Forum, 访问时间为 七月 7, 2025， [https://forum.cursor.com/t/question-regarding-cursors-code-privacy/52875](https://forum.cursor.com/t/question-regarding-cursors-code-privacy/52875)  
15. PSA: Cursor is training on your code on the PRO plan. if you don't ..., 访问时间为 七月 7, 2025， [https://www.reddit.com/r/ChatGPTCoding/comments/1iome0w/psa\_cursor\_is\_training\_on\_your\_code\_on\_the\_pro/](https://www.reddit.com/r/ChatGPTCoding/comments/1iome0w/psa_cursor_is_training_on_your_code_on_the_pro/)  
16. Privacy Policy | Cursor \- The AI Code Editor, 访问时间为 七月 7, 2025， [https://www.cursor.com/ja/privacy](https://www.cursor.com/ja/privacy)  
17. Data Privacy Considerations with Cursor in Software Development \- Arsturn, 访问时间为 七月 7, 2025， [https://www.arsturn.com/blog/exploring-data-privacy-considerations-using-cursor-software-projects](https://www.arsturn.com/blog/exploring-data-privacy-considerations-using-cursor-software-projects)  
18. Pricing | Cursor \- The AI Code Editor, 访问时间为 七月 7, 2025， [https://cursor.com/pricing](https://cursor.com/pricing)  
19. Terms of Service \- Cursor \- Community Forum, 访问时间为 七月 7, 2025， [https://forum.cursor.com/tos](https://forum.cursor.com/tos)  
20. Models \- Cursor, 访问时间为 七月 7, 2025， [https://docs.cursor.com/models](https://docs.cursor.com/models)  
21. Security | Cursor \- The AI Code Editor, 访问时间为 七月 7, 2025， [https://www.cursor.com/security](https://www.cursor.com/security)  
22. Managing Copilot policies as an individual subscriber \- GitHub Docs, 访问时间为 七月 7, 2025， [https://docs.github.com/en/copilot/how-tos/manage-your-account/managing-copilot-policies-as-an-individual-subscriber](https://docs.github.com/en/copilot/how-tos/manage-your-account/managing-copilot-policies-as-an-individual-subscriber)  
23. Privacy: Does GitHub use data for AI training (Copilot Pro)? : r/GithubCopilot \- Reddit, 访问时间为 七月 7, 2025， [https://www.reddit.com/r/GithubCopilot/comments/1jgztn0/privacy\_does\_github\_use\_data\_for\_ai\_training/](https://www.reddit.com/r/GithubCopilot/comments/1jgztn0/privacy_does_github_use_data_for_ai_training/)  
24. Does GitHub Copilot use any code from individual users to train GitHub's model (or any successor model)? · community · Discussion \#152229, 访问时间为 七月 7, 2025， [https://github.com/orgs/community/discussions/152229](https://github.com/orgs/community/discussions/152229)  
25. GitHub Copilot Business Privacy Statement, 访问时间为 七月 7, 2025， [https://github.net.cn/zh/site-policy/privacy-policies/github-copilot-business-privacy-statement](https://github.net.cn/zh/site-policy/privacy-policies/github-copilot-business-privacy-statement)  
26. GitHub Copilot · Your AI pair programmer, 访问时间为 七月 7, 2025， [https://github.com/features/copilot](https://github.com/features/copilot)  
27. FAQ \- GitHub Copilot Trust Center, 访问时间为 七月 7, 2025， [https://copilot.github.trust.page/faq](https://copilot.github.trust.page/faq)  
28. Trae AI IDE Has Major Privacy and Data Extraction Concerns – Read Before You Use : r/cursor \- Reddit, 访问时间为 七月 7, 2025， [https://www.reddit.com/r/cursor/comments/1ltmpfy/trae\_ai\_ide\_has\_major\_privacy\_and\_data\_extraction/](https://www.reddit.com/r/cursor/comments/1ltmpfy/trae_ai_ide_has_major_privacy_and_data_extraction/)  
29. GitHub Copilot Security and Privacy Concerns: Understanding the Risks and Best Practices, 访问时间为 七月 7, 2025， [https://blog.gitguardian.com/github-copilot-security-and-privacy/](https://blog.gitguardian.com/github-copilot-security-and-privacy/)  
30. How to Set Up Custom API Keys in Cursor: Complete Guide for 2025, 访问时间为 七月 7, 2025， [https://www.cursor-ide.com/blog/cursor-custom-api-key-guide-2025](https://www.cursor-ide.com/blog/cursor-custom-api-key-guide-2025)  
31. Can I Use Cursor with My Own API Key? A Comprehensive Guide for Developers \- BytePlus, 访问时间为 七月 7, 2025， [https://www.byteplus.com/en/topic/465497](https://www.byteplus.com/en/topic/465497)  
32. API Keys \- Cursor Docs, 访问时间为 七月 7, 2025， [https://docs.cursor.com/settings/api-keys](https://docs.cursor.com/settings/api-keys)  
33. Cursor Privacy Mode with API keys \- Discussions \- Cursor ..., 访问时间为 七月 7, 2025， [https://forum.cursor.com/t/cursor-privacy-mode-with-api-keys/58967](https://forum.cursor.com/t/cursor-privacy-mode-with-api-keys/58967)  
34. Using Local LLMs with Cursor: Is it Possible? \- Feature Requests ..., 访问时间为 七月 7, 2025， [https://forum.cursor.com/t/using-local-llms-with-cursor-is-it-possible/15494](https://forum.cursor.com/t/using-local-llms-with-cursor-is-it-possible/15494)  
35. Use Local LLM with Cursor and Ollama \- DEV Community, 访问时间为 七月 7, 2025， [https://dev.to/0xkoji/use-local-llm-with-cursor-2h4i](https://dev.to/0xkoji/use-local-llm-with-cursor-2h4i)  
36. Local LLM \- Keeping us down \- Discussion \- Cursor \- Community Forum, 访问时间为 七月 7, 2025， [https://forum.cursor.com/t/local-llm-keeping-us-down/97990](https://forum.cursor.com/t/local-llm-keeping-us-down/97990)  
37. How to Keep Your Code Private with Cursor AI | Instructa Courses, 访问时间为 七月 7, 2025， [https://www.instructa.ai/blog/cursor-ai/how-to-keep-your-code-private-with-cursor-ai](https://www.instructa.ai/blog/cursor-ai/how-to-keep-your-code-private-with-cursor-ai)  
38. GitHub Copilot privacy in VSCode \- here's what I found \- Reddit, 访问时间为 七月 7, 2025， [https://www.reddit.com/r/vscode/comments/1k79uah/github\_copilot\_privacy\_in\_vscode\_heres\_what\_i/](https://www.reddit.com/r/vscode/comments/1k79uah/github_copilot_privacy_in_vscode_heres_what_i/)  
39. Rules \- Cursor Docs, 访问时间为 七月 7, 2025， [https://docs.cursor.com/context/rules](https://docs.cursor.com/context/rules)  
40. Ensuring code made with Cursor is secure \- Reddit, 访问时间为 七月 7, 2025， [https://www.reddit.com/r/cursor/comments/1ixbh9u/ensuring\_code\_made\_with\_cursor\_is\_secure/](https://www.reddit.com/r/cursor/comments/1ixbh9u/ensuring_code_made_with_cursor_is_secure/)