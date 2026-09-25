# ScreenMark v0.1.0

ScreenMark 的首个公开预览版本。

## 可以做什么

- 截取全屏、窗口或自选区域，默认快捷键分别为 `⇧⌘3`、`⇧⌘4`、`⇧⌘5`。
- 在选区内标注、添加文字、使用马赛克，或提取文字、翻译。
- 在选区中启动滚动截屏，预览拼接长图，随后编辑、另存为或完成。
- 默认完成后复制并保存 PNG，按本地日期存入 `~/Pictures/ScreenShots/ScreenMark/`。
- 首次启动提供截图方式、系统权限和保存位置的三步指引。

## 下载与安装

下载附件 `ScreenMark-0.1.0-macos-arm64.zip`，解压后将 `ScreenMark.app` 拖入“应用程序”。支持 **macOS 15 或更新版本、Apple 芯片**；本次没有 Intel 版。

当前安装包采用本地签名，**尚未经过 Apple Developer ID 签名和公证**。在其他 Mac 上首次打开时，macOS 可能阻止启动。确认安装包来自本 GitHub 发布页后，可在尝试打开后前往“系统设置 → 隐私与安全性”选择“仍要打开”。详见 [Apple 官方说明](https://support.apple.com/zh-cn/102445)。

安装包 SHA-256：`a83ef2caa5f5b2ee4d23d2ef45f8ebfb0306262ad24d3b6d5f51adcbac9580be`

## 使用说明与已知边界

- [官网](https://indenscale.github.io/ScreenMark/) · [两分钟上手指南](https://indenscale.github.io/ScreenMark/guide.html)
- OCR 在本机完成。翻译使用 macOS 语言包，首次下载新语言包需要联网。
- 滚动截屏依赖可辨认的位置证据；复杂页面可能无法形成完整长图，工具会在无法可靠定位时给出提示。
