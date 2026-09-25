# SnipCue v0.1.1

ScreenMark 更名为 SnipCue。截图、滚动截屏、标注、文字提取与翻译功能继续提供，应用和安装包现使用新名称。

## 下载与安装

下载附件 `SnipCue-0.1.1-macos-arm64.zip`，解压后将 `SnipCue.app` 拖入“应用程序”。支持 **macOS 15 或更新版本、Apple 芯片**；本次没有 Intel 版。

如果已安装旧版 ScreenMark，请先从菜单栏退出旧应用，再移除旧的 `ScreenMark.app`，然后安装 `SnipCue.app`。原有设置和 macOS 授权使用同一内部应用标识，通常可以沿用；如果系统再次提示授权，请按提示完成。旧截图不会被删除。此前使用默认保存位置的用户，新截图会保存在 `~/Pictures/ScreenShots/SnipCue/`，旧截图仍留在 `~/Pictures/ScreenShots/ScreenMark/`；自选保存位置不变。

当前安装包采用本地签名，**尚未经过 Apple Developer ID 签名和公证**。在其他 Mac 上首次打开时，macOS 可能阻止启动。确认安装包来自本 GitHub 发布页后，可在尝试打开后前往“系统设置 → 隐私与安全性”选择“仍要打开”。详见 [Apple 官方说明](https://support.apple.com/zh-cn/102445)。

安装包 SHA-256：`815ed84b40ddc6fd61019c4c53cb878d15fa1851af8aa932da1588028319c427`

## 使用说明

- [官网](https://indenscale.github.io/SnipCue/) · [两分钟上手指南](https://indenscale.github.io/SnipCue/guide.html)
- 默认快捷键：全屏 `⇧⌘3`、窗口 `⇧⌘4`、选取区域 `⇧⌘5`。
- OCR 在本机完成；翻译使用 macOS 语言包，首次下载新语言包需要联网。
- 滚动截屏依赖可辨认的位置证据；复杂页面可能无法形成完整长图，工具会在无法可靠定位时给出提示。
