# Browser Homepage

一个可自定义的浏览器起始页，包含星空暗色 UI、多引擎搜索、仪表盘组件和交互式终端。

## 功能特性

- 多引擎搜索：`Bing`、`Google`、`Scholar`、`Gemini`、`Copilot`、`Translate`
- Gemini 快捷流程：先复制查询内容到剪贴板，再在新标签页打开 Gemini
- 仪表盘组件：
  - 时钟/日期
  - 网络延迟面板（YouTube/Scholar/Gemini/Bilibili）
  - 命令终端
- Dock 快捷入口与文件夹式弹出链接
- 星空暗色主题背景
- 终端命令系统支持历史记录（`ArrowUp`/`ArrowDown`）
- 终端支持 `Tab` 自动补全（`Shift+Tab` 反向切换）

## 终端命令

- `help` 显示分组帮助
- `clear` 清空终端输出
- `cal <expr>` 计算表达式（支持 `+ - * / ^`、括号、`log2`）
- `weather` 查询北京当前天气（Open-Meteo）
- `ping <url>` 测试延迟
- `open <alias|url>` 在新标签页打开目标
- `search <engine> <query>` 使用指定引擎搜索
- `theme [name|list|reset]` 切换/列出主题
- `time [zone|alias|list]` 按时区显示当前时间

### `open` 别名

- `yt`、`youtube`
- `gh`、`github`
- `bili`、`bilibili`
- `notion`
- `gemini`
- `pku`

### `theme` 预设

- `stars`（默认）
- `aurora`
- `ember`

主题选择会持久化保存到 `localStorage`，键名为 `homepage_theme`。

### `time` 别名示例

- `local`、`beijing`、`shanghai`、`tokyo`、`seoul`、`singapore`
- `london`、`paris`、`ny`、`newyork`、`la`、`losangeles`、`utc`
- 也可以直接传入标准 IANA 时区，例如 `Europe/Berlin`。

## Tab 自动补全行为

- `Tab` 会补全命令或参数，并在候选项中循环切换
- `Shift+Tab` 反向循环
- 支持的补全上下文：
  - 命令名
  - `open` 目标
  - `search` 引擎
  - `theme` 选项
  - `time` 别名

## 项目结构

```text
.
|- index.html
|- README.md
`- assets/
   |- css/
   |  `- style.css
   `- js/
      `- main.js
```

## 运行方式

可直接打开 `index.html`，或启动本地静态服务器：

```bash
python -m http.server 8080
```

然后访问 `http://localhost:8080`。

## 注意事项

- 天气与延迟相关命令依赖外部网络可用性。
- 浏览器安全策略/CORS 行为可能影响延迟测量结果。
- 剪贴板权限会影响 Gemini 的“先复制再打开”流程。
