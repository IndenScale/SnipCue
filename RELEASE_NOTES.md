# SnipCue v0.1.2

SnipCue 是一款 macOS 菜单栏截图工具，支持截图、滚动截屏、标注、文字提取与翻译。本次更新将应用标识与本地签名名称统一为 SnipCue。

## 下载与安装

下载附件 `SnipCue-0.1.2-macos-arm64.dmg`，打开镜像，把 `SnipCue.app` 拖到“应用程序”，等待复制完成后弹出镜像，再从“应用程序”打开。支持 **macOS 15 或更新版本、Apple 芯片**；本次没有 Intel 版。

当前安装包采用本地签名，**尚未经过 Apple Developer ID 签名和公证**。在其他 Mac 上首次打开时，macOS 可能阻止启动。确认安装包来自本 GitHub 发布页后，可在尝试打开后前往“系统设置 → 隐私与安全性”选择“仍要打开”。详见 [Apple 官方说明](https://support.apple.com/zh-cn/102445)。

DMG SHA-256：`c95b6feb87c949ee3157a66bc42dd26696d5c186bb12c1768dcfa9fba3b15e7a`

## 使用说明

- [官网](https://indenscale.github.io/SnipCue/) · [两分钟上手指南](https://indenscale.github.io/SnipCue/guide.html)
- 默认快捷键：全屏 `⇧⌘3`、窗口 `⇧⌘4`、选取区域 `⇧⌘5`。
- OCR 在本机完成；翻译使用 macOS 语言包，首次下载新语言包需要联网。
- 滚动截屏依赖可辨认的位置证据；复杂页面可能无法形成完整长图，工具会在无法可靠定位时给出提示。
