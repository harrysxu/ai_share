// Settings页面专用JavaScript

// 配置弹窗数据
const configData = {
    enterprise: {
        title: '企业策略配置',
        content: `
            <div class="modal-section">
                <h4>配置说明</h4>
                <p>由系统管理员统一配置的强制性设置，个人用户无法覆盖。这是最高优先级的配置层级，确保企业安全策略的执行。</p>
            </div>
            
            <div class="modal-section">
                <h4>配置文件位置</h4>
                <div class="modal-grid">
                    <div class="modal-card">
                        <h5>macOS</h5>
                        <p>/Library/Application Support/ClaudeCode/managed-settings.json</p>
                    </div>
                    <div class="modal-card">
                        <h5>Linux/WSL</h5>
                        <p>/etc/claude-code/managed-settings.json</p>
                    </div>
                    <div class="modal-card">
                        <h5>Windows</h5>
                        <p>C:\\ProgramData\\ClaudeCode\\managed-settings.json</p>
                    </div>
                </div>
            </div>
            
            <div class="modal-section">
                <h4>配置示例</h4>
                <div class="modal-code-block">
                    <div class="modal-code-header">managed-settings.json</div>
                    <pre>{
  "permissions": {
    "allow": ["Read", "Write"],
    "deny": ["Bash", "WebFetch"]
  },
  "model": "claude-3-5-sonnet-20241022",
  "maxTokens": 4096,
  "forceLoginMethod": "console"
}</pre>
                </div>
            </div>

            <div class="modal-highlight">
                <strong>注意：</strong>企业策略配置只能由系统管理员修改，用户无法通过其他方式覆盖这些设置。
            </div>
        `
    },
    cmdline: {
        title: '命令行参数配置',
        content: `
            <div class="modal-section">
                <h4>配置说明</h4>
                <p>通过命令行参数传递的设置，仅对当前会话有效，优先级最高。</p>
            </div>
            
            <div class="modal-section">
                <h4>常用命令行参数</h4>
                <div class="modal-code-block">
                    <div class="modal-code-header">CLI参数示例</div>
                    <pre># 设置模型
claude --model claude-3-5-sonnet-20241022

# 设置允许的工具
claude --allowedTools "Read" "Write" "Edit"

# 设置权限模式
claude --permission-mode auto</pre>
                </div>
            </div>
            
            <div class="modal-section">
                <h4>参数优先级</h4>
                <p>命令行参数具有最高优先级，会覆盖所有其他配置文件中的相同设置。</p>
            </div>
        `
    },
    local: {
        title: '本地项目配置',
        content: `
            <div class="modal-section">
                <h4>配置说明</h4>
                <p>本地项目特定的个人配置，不会提交到版本控制。</p>
            </div>
            
            <div class="modal-section">
                <h4>配置文件位置</h4>
                <p><strong>.claude/settings.local.json</strong> (项目根目录)</p>
            </div>
            
            <div class="modal-section">
                <h4>示例配置</h4>
                <div class="modal-code-block">
                    <div class="modal-code-header">settings.local.json</div>
                    <pre>{
  "env": {
    "API_KEY": "local-dev-key",
    "DEBUG": "true"
  },
  "permissions": {
    "allow": [
      "Bash(npm run dev)",
      "Edit(src/**/*.test.ts)"
    ]
  }
}</pre>
                </div>
            </div>
            
            <div class="modal-section">
                <h4>注意事项</h4>
                <ul class="modal-list">
                    <li><strong>Git忽略：</strong> <span>文件会自动添加到.gitignore</span></li>
                    <li><strong>使用场景：</strong> <span>适合存放个人密钥和调试配置</span></li>
                    <li><strong>优先级：</strong> <span>高于共享项目配置</span></li>
                </ul>
            </div>
        `
    },
    project: {
        title: '共享项目配置',
        content: `
            <div class="modal-section">
                <h4>配置说明</h4>
                <p>项目级别的配置，团队成员共享，存储在项目根目录。</p>
            </div>
            
            <div class="modal-section">
                <h4>配置文件位置</h4>
                <p><strong>.claude/settings.json</strong> (项目根目录)</p>
            </div>
            
            <div class="modal-section">
                <h4>示例配置</h4>
                <div class="modal-code-block">
                    <div class="modal-code-header">settings.json</div>
                    <pre>{
  "model": "claude-3-5-sonnet-20241022",
  "permissions": {
    "allow": [
      "Bash(npm run test)",
      "Bash(git status)",
      "Edit(src/**/*.ts)"
    ],
    "deny": [
      "Bash(rm -rf *)",
      "Bash(sudo *)"
    ]
  },
  "env": {
    "NODE_ENV": "development"
  }
}</pre>
                </div>
            </div>
            
            <div class="modal-section">
                <h4>最佳实践</h4>
                <ul class="modal-list">
                    <li><strong>版本控制：</strong> <span>提交到版本控制系统</span></li>
                    <li><strong>团队协作：</strong> <span>统一的权限策略</span></li>
                    <li><strong>安全性：</strong> <span>避免包含敏感信息</span></li>
                </ul>
            </div>
        `
    },
    user: {
        title: '用户全局配置',
        content: `
            <div class="modal-section">
                <h4>配置说明</h4>
                <p>用户个人的全局默认设置，应用于所有项目。</p>
            </div>
            
            <div class="modal-section">
                <h4>配置文件位置</h4>
                <p><strong>~/.claude/settings.json</strong></p>
            </div>
            
            <div class="modal-section">
                <h4>示例配置</h4>
                <div class="modal-code-block">
                    <div class="modal-code-header">用户全局settings.json</div>
                    <pre>{
  "model": "claude-3-5-sonnet-20241022",
  "theme": "暗色",
  "verbose": false,
  "autoUpdates": true,
  "permissions": {
    "defaultMode": "交互式"
  }
}</pre>
                </div>
            </div>
            
            <div class="modal-section">
                <h4>命令行配置</h4>
                <div class="modal-code-block">
                    <div class="modal-code-header">CLI配置命令</div>
                    <pre># 通过CLI配置用户全局设置
claude config set -g theme dark
claude config set -g model claude-3-5-sonnet-20241022
claude config list -g  # 查看全局配置</pre>
                </div>
            </div>
        `
    }
};

// 设置详情弹窗数据
const settingData = {
    permissions: {
        title: '权限设置详解',
        content: `
            <div class="modal-section">
                <h4>权限控制系统</h4>
                <p>Claude Code使用精细的权限规则来控制AI可以执行的操作，确保安全性和可控性。</p>
            </div>
            
            <div class="modal-section">
                <h4>权限规则格式</h4>
                <div class="modal-code-block">
                    <div class="modal-code-header">permissions 配置示例</div>
                    <pre>{
  "permissions": {
    "allow": [
      "Read",                    // 允许读取所有文件
      "Edit(src/**/*.ts)",       // 允许编辑TypeScript文件
      "Bash(git:*)",            // 允许所有git命令
      "Bash(npm run test:*)"     // 允许测试相关npm脚本
    ],
    "deny": [
      "Bash(rm -rf *)",         // 禁止删除命令
      "Bash(sudo *)",           // 禁止sudo命令
      "WebFetch"                // 禁止网络请求
    ],
    "defaultMode": "interactive"
  }
}</pre>
                </div>
            </div>
            
            <div class="modal-section">
                <h4>权限模式</h4>
                <div class="modal-grid">
                    <div class="modal-card">
                        <h5>interactive</h5>
                        <p>每次操作都请求用户确认，最安全的模式</p>
                    </div>
                    <div class="modal-card">
                        <h5>acceptEdits</h5>
                        <p>自动允许文件编辑操作，但其他操作需要确认</p>
                    </div>
                    <div class="modal-card">
                        <h5>plan</h5>
                        <p>只制定计划，不执行任何实际操作</p>
                    </div>
                </div>
            </div>
            
            <div class="modal-section">
                <h4>可用工具权限</h4>
                <ul class="modal-list">
                    <li><strong>Bash:</strong> <span>执行shell命令，支持通配符模式匹配</span></li>
                    <li><strong>Edit:</strong> <span>编辑现有文件内容</span></li>
                    <li><strong>Read:</strong> <span>读取文件内容</span></li>
                    <li><strong>Write:</strong> <span>创建新文件或覆写现有文件</span></li>
                    <li><strong>WebFetch:</strong> <span>获取网络内容和资源</span></li>
                    <li><strong>WebSearch:</strong> <span>执行网络搜索操作</span></li>
                    <li><strong>MultiEdit:</strong> <span>对单个文件执行多重编辑</span></li>
                    <li><strong>TodoWrite:</strong> <span>创建和管理任务列表</span></li>
                </ul>
            </div>

            <div class="modal-highlight">
                <strong>安全建议：</strong>建议在生产环境中使用 deny 规则明确禁止危险操作，如系统删除、权限提升等命令。
            </div>
        `
    },
    apiKeyHelper: {
        title: 'API密钥获取脚本',
        content: `
            <div class="modal-section">
                <h4>功能说明</h4>
                <p>apiKeyHelper允许您配置一个自定义脚本来动态获取API密钥。这对于使用密钥管理工具或需要从安全存储中获取密钥的场景特别有用。</p>
            </div>
            
            <div class="modal-section">
                <h4>配置方式</h4>
                <div class="modal-code-block">
                    <div class="modal-code-header">apiKeyHelper 配置示例</div>
                    <pre>{
  "apiKeyHelper": "security-cli get-api-key anthropic"
}</pre>
                </div>
            </div>
            
            <div class="modal-section">
                <h4>常用场景</h4>
                <div class="modal-grid">
                    <div class="modal-card">
                        <h5>环境变量读取</h5>
                        <p><code>"echo $ANTHROPIC_API_KEY"</code></p>
                    </div>
                    <div class="modal-card">
                        <h5>密钥管理工具</h5>
                        <p><code>"op read op://vault/anthropic/apikey"</code></p>
                    </div>
                    <div class="modal-card">
                        <h5>AWS Secrets Manager</h5>
                        <p><code>"aws secretsmanager get-secret-value --secret-id anthropic-key"</code></p>
                    </div>
                    <div class="modal-card">
                        <h5>Azure Key Vault</h5>
                        <p><code>"az keyvault secret show --vault-name vault --name api-key"</code></p>
                    </div>
                </div>
            </div>
            
            <div class="modal-section">
                <h4>执行要求</h4>
                <ul class="modal-list">
                    <li><strong>输出格式：</strong> <span>脚本必须将API密钥输出到stdout</span></li>
                    <li><strong>错误处理：</strong> <span>如果脚本失败，Claude Code会回退到其他认证方式</span></li>
                    <li><strong>执行权限：</strong> <span>确保脚本有执行权限且在PATH中可访问</span></li>
                    <li><strong>安全性：</strong> <span>避免在脚本中硬编码密钥</span></li>
                </ul>
            </div>

            <div class="modal-highlight">
                <strong>最佳实践：</strong>使用成熟的密钥管理工具（如1Password CLI、AWS CLI等）来确保密钥的安全存储和获取。
            </div>
        `
    },
    hooks: {
        title: '工具执行钩子',
        content: `
            <div class="modal-section">
                <h4>钩子系统</h4>
                <p>Hooks允许您在Claude Code执行工具前后运行自定义脚本，实现日志记录、安全检查、环境准备等功能。</p>
            </div>
            
            <div class="modal-section">
                <h4>可用钩子类型</h4>
                <div class="modal-grid">
                    <div class="modal-card">
                        <h5>PreToolUse</h5>
                        <p>在工具执行之前运行，可用于环境准备、权限检查等</p>
                    </div>
                    <div class="modal-card">
                        <h5>PostToolUse</h5>
                        <p>在工具执行之后运行，可用于清理、日志记录等</p>
                    </div>
                </div>
            </div>
            
            <div class="modal-section">
                <h4>配置示例</h4>
                <div class="modal-code-block">
                    <div class="modal-code-header">hooks 完整配置</div>
                    <pre>{
  "hooks": {
    "PreToolUse": {
      "Bash": "echo '[AUDIT] Executing bash command at $(date)'",
      "Edit": "echo '[INFO] About to edit file: $FILE_PATH'",
      "*": "echo '[TOOL] Using tool: $TOOL_NAME'"
    },
    "PostToolUse": {
      "Bash": "echo '[AUDIT] Bash command completed'",
      "Edit": "git add $FILE_PATH && echo '[GIT] File staged'",
      "*": "echo '[TOOL] Tool $TOOL_NAME finished'"
    }
  }
}</pre>
                </div>
            </div>
            
            <div class="modal-section">
                <h4>支持的工具类型</h4>
                <ul class="modal-list">
                    <li><strong>Bash:</strong> <span>shell命令执行</span></li>
                    <li><strong>Edit:</strong> <span>文件编辑操作</span></li>
                    <li><strong>Read:</strong> <span>文件读取操作</span></li>
                    <li><strong>Write:</strong> <span>文件写入操作</span></li>
                    <li><strong>WebFetch:</strong> <span>网络请求</span></li>
                    <li><strong>*:</strong> <span>通配符，匹配所有工具类型</span></li>
                </ul>
            </div>
            
            <div class="modal-section">
                <h4>可用变量</h4>
                <ul class="modal-list">
                    <li><strong>$TOOL_NAME:</strong> <span>当前执行的工具名称</span></li>
                    <li><strong>$FILE_PATH:</strong> <span>操作的文件路径（Edit/Read/Write）</span></li>
                    <li><strong>$COMMAND:</strong> <span>执行的命令内容（Bash）</span></li>
                    <li><strong>$PROJECT_ROOT:</strong> <span>项目根目录路径</span></li>
                </ul>
            </div>

            <div class="modal-highlight">
                <strong>注意：</strong>钩子脚本的执行时间会影响整体性能，建议保持脚本简洁高效。
            </div>
        `
    },
    forceLoginMethod: {
        title: '强制登录方式',
        content: `
            <div class="modal-section">
                <h4>登录方式控制</h4>
                <p>forceLoginMethod允许您强制指定Claude Code使用特定的登录认证方式，覆盖默认的自动检测逻辑。</p>
            </div>
            
            <div class="modal-section">
                <h4>可用登录方式</h4>
                <div class="modal-grid">
                    <div class="modal-card">
                        <h5>claudeai</h5>
                        <p>使用Claude.ai网站的会话令牌进行认证</p>
                    </div>
                    <div class="modal-card">
                        <h5>console</h5>
                        <p>使用Anthropic Console的API密钥进行认证</p>
                    </div>
                </div>
            </div>
            
            <div class="modal-section">
                <h4>配置示例</h4>
                <div class="modal-code-block">
                    <div class="modal-code-header">forceLoginMethod 配置</div>
                    <pre>{
  "forceLoginMethod": "console"
}</pre>
                </div>
            </div>
            
            <div class="modal-section">
                <h4>使用场景</h4>
                <ul class="modal-list">
                    <li><strong>企业环境：</strong> <span>强制使用console模式确保API密钥管理的一致性</span></li>
                    <li><strong>自动化脚本：</strong> <span>确保在CI/CD环境中使用稳定的认证方式</span></li>
                    <li><strong>团队协作：</strong> <span>统一团队成员的认证方式</span></li>
                    <li><strong>故障排除：</strong> <span>当自动检测失败时手动指定认证方式</span></li>
                </ul>
            </div>
            
            <div class="modal-section">
                <h4>认证方式对比</h4>
                <div class="modal-grid">
                    <div class="modal-card">
                        <h5>Claude.ai 方式</h5>
                        <p><strong>优点：</strong>易于设置，使用现有会话<br>
                        <strong>缺点：</strong>会话可能过期，不适合自动化</p>
                    </div>
                    <div class="modal-card">
                        <h5>Console 方式</h5>
                        <p><strong>优点：</strong>稳定可靠，适合自动化<br>
                        <strong>缺点：</strong>需要API密钥管理</p>
                    </div>
                </div>
            </div>

            <div class="modal-highlight">
                <strong>建议：</strong>在生产环境和自动化场景中使用console方式，在个人开发中可以使用claudeai方式以获得更便捷的体验。
            </div>
        `
    },
    env: {
        title: '环境变量配置',
        content: `
            <div class="modal-section">
                <h4>环境变量系统</h4>
                <p>Claude Code支持丰富的环境变量来控制行为和集成外部服务。可以在settings.json的env字段中配置。</p>
            </div>
            
            <div class="modal-section">
                <h4>认证相关</h4>
                <ul class="modal-list">
                    <li><strong>ANTHROPIC_API_KEY:</strong> <span>API密钥，用于直接API访问</span></li>
                    <li><strong>ANTHROPIC_AUTH_TOKEN:</strong> <span>自定义认证令牌，添加Bearer前缀</span></li>
                    <li><strong>AWS_BEARER_TOKEN_BEDROCK:</strong> <span>Bedrock API密钥认证</span></li>
                    <li><strong>ANTHROPIC_CUSTOM_HEADERS:</strong> <span>自定义请求头部信息</span></li>
                </ul>
            </div>
            
            <div class="modal-section">
                <h4>模型配置</h4>
                <ul class="modal-list">
                    <li><strong>ANTHROPIC_MODEL:</strong> <span>自定义模型名称</span></li>
                    <li><strong>ANTHROPIC_SMALL_FAST_MODEL:</strong> <span>用于后台任务的Haiku级模型</span></li>
                    <li><strong>CLAUDE_CODE_MAX_OUTPUT_TOKENS:</strong> <span>设置最大输出token数量</span></li>
                    <li><strong>MAX_THINKING_TOKENS:</strong> <span>强制设置模型思考token预算</span></li>
                </ul>
            </div>
            
            <div class="modal-section">
                <h4>Bash控制</h4>
                <ul class="modal-list">
                    <li><strong>BASH_DEFAULT_TIMEOUT_MS:</strong> <span>长时间运行bash命令的默认超时时间</span></li>
                    <li><strong>BASH_MAX_TIMEOUT_MS:</strong> <span>模型可设置的最大超时时间</span></li>
                    <li><strong>BASH_MAX_OUTPUT_LENGTH:</strong> <span>bash输出截断前的最大字符数</span></li>
                    <li><strong>CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR:</strong> <span>每次bash命令后返回原工作目录</span></li>
                </ul>
            </div>
            
            <div class="modal-section">
                <h4>系统控制</h4>
                <div class="modal-grid">
                    <div class="modal-card">
                        <h5>更新控制</h5>
                        <p><strong>DISABLE_AUTOUPDATER:</strong> 禁用自动更新功能</p>
                    </div>
                    <div class="modal-card">
                        <h5>隐私控制</h5>
                        <p><strong>DISABLE_TELEMETRY:</strong> 禁用Statsig遥测数据收集</p>
                    </div>
                    <div class="modal-card">
                        <h5>错误报告</h5>
                        <p><strong>DISABLE_ERROR_REPORTING:</strong> 禁用Sentry错误报告</p>
                    </div>
                    <div class="modal-card">
                        <h5>网络控制</h5>
                        <p><strong>CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC:</strong> 禁用非必要网络流量</p>
                    </div>
                </div>
            </div>
            
            <div class="modal-section">
                <h4>MCP相关</h4>
                <ul class="modal-list">
                    <li><strong>MCP_TIMEOUT:</strong> <span>MCP服务器启动超时时间（毫秒）</span></li>
                    <li><strong>MCP_TOOL_TIMEOUT:</strong> <span>MCP工具执行超时时间（毫秒）</span></li>
                    <li><strong>MAX_MCP_OUTPUT_TOKENS:</strong> <span>MCP工具响应允许的最大token数（默认25000）</span></li>
                </ul>
            </div>
            
            <div class="modal-section">
                <h4>配置示例</h4>
                <div class="modal-code-block">
                    <div class="modal-code-header">env 配置示例</div>
                    <pre>{
  "env": {
    "NODE_ENV": "development",
    "ANTHROPIC_MODEL": "claude-3-5-sonnet-20241022",
    "BASH_DEFAULT_TIMEOUT_MS": "30000",
    "DISABLE_TELEMETRY": "1",
    "MCP_TIMEOUT": "10000",
    "CLAUDE_CODE_DISABLE_TERMINAL_TITLE": "1"
  }
}</pre>
                </div>
            </div>
        `
    }
};

// 配置弹窗函数
function showConfigModal(type) {
    const modal = document.getElementById('configModal');
    const title = document.getElementById('modalTitle');
    const content = document.getElementById('modalContent');
    
    const data = configData[type];
    if (data) {
        title.textContent = data.title;
        content.innerHTML = data.content;
        modal.style.display = 'block';
    }
}

// 设置详情弹窗函数
function showSettingModal(setting) {
    const modal = document.getElementById('settingModal');
    const title = document.getElementById('settingModalTitle');
    const content = document.getElementById('settingModalContent');
    
    const data = settingData[setting];
    if (data) {
        title.textContent = data.title;
        content.innerHTML = data.content;
        modal.style.display = 'block';
    }
}

// 关闭弹窗事件监听
document.addEventListener('DOMContentLoaded', function() {
    const configModal = document.getElementById('configModal');
    const settingModal = document.getElementById('settingModal');
    const closeBtns = document.querySelectorAll('.modal-close');
    
    // 关闭按钮事件
    closeBtns.forEach(btn => {
        btn.onclick = function() {
            configModal.style.display = 'none';
            settingModal.style.display = 'none';
        }
    });
    
    // 点击背景关闭
    window.onclick = function(event) {
        if (event.target === configModal) {
            configModal.style.display = 'none';
        }
        if (event.target === settingModal) {
            settingModal.style.display = 'none';
        }
    }

    // ESC键关闭
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            configModal.style.display = 'none';
            settingModal.style.display = 'none';
        }
    });
}); 