# Claude Code 五大核心功能 - 文件说明

这是对原始 `claude-code-ui-redesign.html` 文件的拆分版本，将一个大文件分解为多个独立的HTML页面。所有文件都可以通过双击直接在浏览器中打开，无需启动服务器。

## 📁 文件结构

```
claude/
├── index.html              # 主页 - 五大功能概览
├── cli.html                # CLI命令详解页面
├── slash.html              # 斜杠命令详解页面
├── settings.html           # Settings设置详解页面
├── memory.html             # 内存管理详解页面
├── mcp.html                # MCP协议详解页面
├── common.css              # 公共样式文件
├── common.js               # 公共JavaScript文件
├── settings-styles.css     # Settings页面专用样式
├── settings-scripts.js     # Settings页面专用脚本
└── README.md               # 本说明文件
```

## 🚀 使用方法

### 方法一：直接双击打开
1. 双击任意 `.html` 文件即可在默认浏览器中打开
2. 所有页面都有完整的导航栏，可以在不同页面间自由跳转
3. 所有资源都是相对路径，文件间可以正常链接

### 方法二：本地服务器（推荐）
如果遇到跨域问题，可以启动本地服务器：

```bash
# 方法1：使用Python
cd claude
python -m http.server 8000

# 方法2：使用Node.js
cd claude
npx serve

# 方法3：使用VS Code Live Server扩展
# 在VS Code中右键index.html，选择"Open with Live Server"
```

然后访问 `http://localhost:8000`

## 📄 页面功能说明

### 🏠 index.html - 主页
- **功能**：五大核心功能的概览和导航入口
- **特色**：响应式设计，展示Claude Code的整体架构
- **链接**：提供到各个详细页面的导航

### 🖥️ cli.html - CLI命令
- **功能**：详细介绍所有CLI命令和参数
- **内容**：命令表格、使用示例、最佳实践
- **特色**：完整的命令参考手册

### ⚡ slash.html - 斜杠命令
- **功能**：介绍内置、自定义和MCP斜杠命令
- **特色**：标签页切换设计，分类展示不同类型命令
- **内容**：命令列表、自定义方法、使用示例

### ⚙️ settings.html - Settings设置
- **功能**：深度解析五层配置体系
- **特色**：交互式配置层级可视化、模态框详情展示
- **内容**：配置优先级、详细设置项、完整示例

### 🧠 memory.html - 内存管理
- **功能**：CLAUDE.md文件系统和内存管理
- **内容**：文件类型、管理命令、最佳实践
- **特色**：完整的项目记忆管理指南

### 🌐 mcp.html - MCP协议
- **功能**：模型上下文协议的详细介绍
- **内容**：架构原理、配置方法、服务器开发
- **特色**：技术深度和实用性并重

## 🎨 技术特性

### 共享资源
- **common.css**：统一的样式系统，包含响应式设计
- **common.js**：共享的交互功能（平滑滚动、返回顶部等）

### 特殊功能
- **settings-styles.css**：Settings页面的专用样式
- **settings-scripts.js**：Settings页面的模态框交互逻辑

### 设计特点
- ✅ 完全响应式设计，支持移动端
- ✅ 现代化UI设计，渐变背景和卡片布局
- ✅ 平滑动画和交互效果
- ✅ 代码高亮和语法展示
- ✅ 模态框详情展示
- ✅ 无障碍设计考虑

## 🔧 技术实现

### CSS特性
- 现代CSS Grid和Flexbox布局
- CSS变量和渐变效果
- 响应式断点设计
- 动画和过渡效果

### JavaScript功能
- 平滑滚动导航
- 标签页切换
- 模态框管理
- 滚动动画观察器
- 返回顶部功能

### 兼容性
- 支持现代浏览器（Chrome 60+, Firefox 55+, Safari 12+）
- 移动端友好设计
- 无需外部依赖

## 📝 维护说明

### 添加新内容
1. 在对应HTML文件中添加内容
2. 如需新样式，在`common.css`中添加
3. 特殊功能可创建专用CSS/JS文件

### 修改样式
- 全局样式：编辑 `common.css`
- 特定页面：创建对应的专用CSS文件

### 更新导航
- 在所有HTML文件的导航栏中保持一致性
- 确保所有链接正确指向对应页面

## 🌟 使用建议

1. **开发环境**：建议使用本地服务器避免跨域问题
2. **部署**：可直接上传到任何静态网站托管服务
3. **定制**：可根据需要修改样式和内容
4. **扩展**：遵循现有结构添加新页面

## 📞 技术支持

如有问题或建议，请参考：
- [Claude Code 官方文档](https://docs.anthropic.com/zh-CN/docs/claude-code)
- [MCP 协议官网](https://modelcontextprotocol.io/)

---

**注意**：这些文件是从原始HTML文件拆分而来，保持了完整的功能和样式，可以独立使用。 