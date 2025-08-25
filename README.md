2024-11-25 开源 MCP

- 连接 AI 助手 （AI assistants） <---> 数据所在系统 : 内容存储的仓库、业务工具、开发环境

- 目标：帮助前沿模型生成更好、更相关的回应

- 困境：即使是最先进的模型也受限于其与数据的隔离、每接入一个新的数据源都需要单独的定制化实现，使得真正互联互通的系统难以扩展

- 单一协议取代了原本零散的集成方式

- MCP 服务器公开其数据 MCP servers

- 构建连接到这些服务器的人工智能应用程序（MCP 客户端）MCP clients


applications provide context to LLMs / 应用程序如何向 LLMs 提供上下文

将 AI 模型连接到不同的数据源和工具

开放的协议

使用模型上下文协议将 Claude Code 连接到你的工具

实现问题跟踪 JIRA

分析监控数据

查询数据库

自动化工作流

本地的 Stdio

本地进程，在计算机上运行：系统访问 或者 自定义脚本的工具

## Stdio server

在本机以进程形式运行的 MCP 服务器

在 Claude Code 中，stdio server 作为普通本地进程运行，通过标准输入/输出 (stdin/stdout) 与 Claude Code 交换数据。由于直接运行在你的电脑上，它最适合需要访问文件系统、调用脚本或使用自定义逻辑的工具。你启动什么程序，它就是什么工具的“服务器”；Claude Code 只把它当作符合 MCP 协议的伙伴来对话

基本命令 claude mcp add

`<name>` – 给服务器起的内部别名

`<command>` – 你要执行的可执行文件或脚本

`[args...]` – 传递给该可执行文件的参数

--env KEY=value 在启动服务器进程前，向其环境中注入变量。可多次出现。

--scope {local|project|user}`

local（默认）仅当前项目对你可见

project 写入项目根目录 ‎`.mcp.json` 供团队共享

user 跨项目、仅当前操作系统用户可见

分隔 Claude CLI 自身的参数与要执行的服务器命令。‎`--` 之后的内容原样传给服务器，避免二者的旗标冲突。
 ▫ 示例：
 ⁃ ‎`claude mcp add myserver -- npx server` → 最终执行 ‎`npx server`
 ⁃ ‎`claude mcp add myserver --env KEY=1 -- python srv.py --port 8080` → 执行 ‎`python srv.py --port 8080` 并带上环境变量 ‎`KEY=1`。

claude mcp add airtable --env AIRTABLE_API_KEY=YOUR_KEY -- npx -y airtable-mcp-server

• 指定别名 ‎`airtable`
• 通过 ‎`--env` 注入 API 密钥
• ‎`--` 后使用 ‎`npx` 拉起社区提供的 ‎`airtable-mcp-server` 包。

# Figma

访问设计，导出资源
