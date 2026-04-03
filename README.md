# 🎯 frontend-components-skill

> 基于 React + TypeScript + Ant Design + SortableJS 的 **前端组件 Skill** 官方演示项目

[![GitHub Pages](https://img.shields.io/badge/🖥️%20在线演示-Live-brightgreen?logo=github)](https://waw666waw666.github.io/frontend-components-demo/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Ant Design](https://img.shields.io/badge/Ant%20Design-5.x-1677FF?logo=antdesign)](https://ant.design/)
[![GitHub stars](https://img.shields.io/github/stars/waw666waw666/frontend-components-demo?style=social)](https://github.com/waw666waw666/frontend-components-demo)

---

## ⭐ 项目简介

本项目是 **frontend-components Skill** 的官方演示应用，旨在展示 AI 编程助手中的前端组件技能。

### 什么是 Skill？

**Skill** 是一种结构化的 AI 技能知识库，包含：
- 📚 组件功能描述
- 📖 常用属性说明
- 💻 代码示例
- ✨ 最佳实践

### 核心亮点

| 亮点 | 说明 |
|------|------|
| 🗂️ **完整 Skill 文档** | 55 个文件，覆盖 51+ 组件 |
| 🎨 **交互式演示** | 可直接在页面体验组件效果 |
| 🤖 **AI 提示词模板** | 点击复制提示词，快速接入 AI 编程 |
| 📱 **响应式设计** | 适配桌面端和移动端 |

---

## 🖥️ 在线演示

**🌐 点击访问**: [https://waw666waw666.github.io/frontend-components-demo/](https://waw666waw666.github.io/frontend-components-demo/)

---

## 📂 Skill 文档结构

本项目包含完整的 `frontend-components` Skill，位于 `skill/` 目录：

```
skill/frontend-components/
├── SKILL.md                    # Skill 总纲
├── CATALOG.md                  # 功能模块速查表
├── SKILL-INDEX.md              # 技能索引
└── sub-skills/                # 子技能目录
    ├── data-entry/             # 数据录入类 (10个)
    │   ├── form.md            # Form 表单
    │   ├── input.md           # Input 输入框
    │   ├── select.md          # Select 选择器
    │   ├── checkbox-radio.md  # Checkbox/Radio
    │   ├── switch.md          # Switch 开关
    │   ├── slider.md          # Slider 滑块
    │   ├── date-picker.md     # DatePicker 日期选择
    │   ├── rate.md            # Rate 评分
    │   ├── upload.md          # Upload 上传
    │   └── transfer.md        # Transfer 穿梭框
    │
    ├── data-display/          # 数据展示类 (15个)
    │   ├── table.md           # Table 表格
    │   ├── list.md            # List 列表
    │   ├── card.md            # Card 卡片
    │   ├── tree.md            # Tree 树形
    │   ├── calendar.md        # Calendar 日历
    │   ├── timeline.md        # Timeline 时间轴
    │   ├── statistic.md       # Statistic 统计
    │   ├── qrcode.md          # QRCode 二维码
    │   ├── image.md           # Image 图片
    │   ├── carousel.md        # Carousel 走马灯
    │   ├── collapse.md        # Collapse 折叠面板
    │   ├── descriptions.md    # Descriptions 描述列表
    │   ├── empty.md          # Empty 空状态
    │   ├── badge.md           # Badge 徽标
    │   └── tag.md             # Tag 标签
    │
    ├── feedback/              # 反馈类 (11个)
    │   ├── modal.md          # Modal 对话框
    │   ├── drawer.md         # Drawer 抽屉
    │   ├── message.md        # Message 消息
    │   ├── notification.md   # Notification 通知
    │   ├── progress.md       # Progress 进度条
    │   ├── spin.md           # Spin 加载
    │   ├── skeleton.md       # Skeleton 骨架屏
    │   ├── popover.md        # Popover 气泡卡片
    │   ├── popconfirm.md     # Popconfirm 气泡确认
    │   ├── result.md         # Result 结果
    │   └── alert.md          # Alert 警告提示
    │
    ├── navigation/            # 导航类 (7个)
    │   ├── menu.md           # Menu 导航菜单
    │   ├── tabs.md           # Tabs 标签页
    │   ├── breadcrumb.md     # Breadcrumb 面包屑
    │   ├── dropdown.md       # Dropdown 下拉菜单
    │   ├── pagination.md     # Pagination 分页
    │   ├── steps.md          # Steps 步骤条
    │   └── anchor.md         # Anchor 锚点
    │
    ├── layout/               # 布局类 (4个)
    │   ├── grid.md           # Grid 栅格
    │   ├── layout.md         # Layout 布局
    │   ├── space.md          # Space 间距
    │   └── divider.md        # Divider 分割线
    │
    └── other/                # 其他功能类 (4个)
        ├── avatar.md         # Avatar 头像
        ├── tour.md           # Tour 漫游式引导
        ├── watermark.md     # Watermark 水印
        └── affix.md          # Affix 固钉
        └── back-top.md       # BackTop 返回顶部
        └── drag-sort.md      # DragSort 拖拽排序 ⭐
```

---

## ✨ 功能特性

本项目展示 **51+ 个 Ant Design 组件** 的实战用法：

### 📋 数据录入 (10个)
Form | Input | Select | Checkbox | Radio | Switch | Slider | DatePicker | Upload | Rate

### 📊 数据展示 (15个)
Table | List | Card | Tree | Calendar | Timeline | Statistic | QRCode | Image | Carousel | Collapse | Descriptions | Empty | Badge | Tag

### 🔔 反馈 (11个)
Modal | Drawer | Message | Notification | Progress | Spin | Skeleton | Popover | Popconfirm | Result | Alert

### 🧭 导航 (7个)
Menu | Tabs | Breadcrumb | Dropdown | Pagination | Steps | Anchor

### 📐 布局 (4个)
Grid | Layout | Space | Divider

### 🧩 其他 (4个)
Avatar | Tour | Watermark | Affix | BackTop

### 🎯 拖拽排序 (7个) ⭐ 特色
基于 **SortableJS**：
- 📋 基础列表排序
- 🔲 网格排序
- 📊 看板系统
- 🔄 跨列表拖拽
- 📄 克隆拖拽
- ☰ 手柄拖拽
- 🌳 嵌套排序

---

## 🛠️ 技术栈

| 技术 | 说明 |
|------|------|
| React 18 | 前端框架 |
| TypeScript 5 | 类型系统 |
| Vite | 构建工具 |
| Ant Design 5 | UI 组件库 |
| SortableJS | 拖拽排序 |

---

## 🚀 快速开始

```bash
# 克隆项目
git clone https://github.com/waw666waw666/frontend-components-demo.git
cd frontend-components-demo

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

---

## 📖 Skill 使用指南

### 方式一：在线演示
访问演示网站，点击任意组件查看效果和提示词模板。

### 方式二：本地文档
查看 `skill/` 目录下的 Markdown 文件，学习每个组件的用法。

### 方式三：AI 集成
每个组件演示都有**提示词模板**，复制后可在 AI 编程助手中使用：

```
【动作：执行修改】
目标：实现 xxx 组件功能

需求详情：
1. ...
2. ...

技术要求：
- 使用 Ant Design
- ...

验收标准：
1. ...
2. ...
```

---

## 🌐 部署

本项目已配置 GitHub Actions 自动部署，每次推送到 `master` 分支自动部署。

---

## 📄 许可证

[MIT](LICENSE) © 2024

---

<div align="center">

**⭐ Star 本项目，支持 Skill 生态发展！**

[🖥️ 在线演示](https://waw666waw666.github.io/frontend-components-demo/) · 
[📂 GitHub 仓库](https://github.com/waw666waw666/frontend-components-demo) · 
[🐛 报告问题](https://github.com/waw666waw666/frontend-components-demo/issues)

</div>
