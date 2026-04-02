# Browser Homepage

一个单文件（`index.html`）实现的浏览器主页，包含搜索、仪表盘小组件和 Dock 快捷入口。

## 功能

- 多搜索引擎切换：`Bing`、`Google`、`Scholar`、`Gemini`、`Copilot`、`Translate`
- Gemini 专用交互：输入内容后自动复制到剪贴板并打开 Gemini 页面
- 实时时钟与日期展示
- 天气卡片（基于 Open-Meteo API，默认海淀区坐标）
- Reminders 待办事项（本地 `localStorage` 持久化）
- 网络延迟面板（定时探测 YouTube/Scholar/Gemini/Bilibili）
- 底部 Dock 与文件夹式弹出快捷链接
- 玻璃拟态 UI 与亮/暗色模式适配

## 项目结构

```text
.
├── index.html     # 页面、样式、脚本全部在这里
└── README.md
```

## 使用方式

1. 直接双击打开 `index.html`。
2. 或在当前目录启动一个静态服务器再访问（推荐，便于后续扩展）：

```bash
# Python 3
python -m http.server 8080
```

然后访问 `http://localhost:8080`。

## 可配置项

当前配置集中在 `index.html` 内，可按需修改：

- 搜索引擎：`const engines = { ... }`
- 默认引擎：`let currentEngine = 'bing'`
- 问候语：`Hello, Zhiyuan`
- 天气位置：`lat = 39.96`、`lon = 116.30`
- 网络延迟监测站点：`const sites = [...]`
- Dock 快捷链接：底部 `<div class="dock"> ... </div>`

## 数据存储

- 待办数据使用浏览器 `localStorage`
- 键名：`macTodos`

## 注意事项

- 天气与网络延迟依赖外部网络，请求失败时会显示离线/错误状态。
- 由于浏览器安全策略，部分网络探测结果可能受跨域策略与缓存行为影响。
- Gemini 的自动复制依赖 `Clipboard API`，若浏览器禁用权限会影响该功能。

## License

当前仓库未包含许可证文件。如需开源发布，建议补充 `LICENSE`。
