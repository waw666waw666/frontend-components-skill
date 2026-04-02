# 🎨 Frontend Components Skill

> 一站式前端组件功能解决方案 - 基于 React + TypeScript + Ant Design + SortableJS

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen?logo=github)](https://你的用户名.github.io/frontend-components-demo/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Ant Design](https://img.shields.io/badge/Ant%20Design-5.x-1677FF?logo=antdesign)](https://ant.design/)
[![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?logo=vite)](https://vitejs.dev/)

---

## 🔗 在线演示

**🌐 点击访问**: [https://你的用户名.github.io/frontend-components-demo/](https://你的用户名.github.io/frontend-components-demo/)

![项目预览](https://img.shields.io/badge/Preview-Available-success)

---

## ✨ 功能特性

本项目是一个完整的前端组件功能展示平台，涵盖 **6 大类 51 个组件** 的实战演示：

### 📋 数据录入 (10个)
Form 表单、Input 输入框、Select 选择器、Checkbox 多选框、Radio 单选框、Switch 开关、Slider 滑块、DatePicker 日期选择、Upload 上传、Rate 评分

### 📊 数据展示 (15个)
Table 表格、List 列表、Card 卡片、Tree 树形、Calendar 日历、Timeline 时间轴、Statistic 统计数值、QRCode 二维码、Image 图片、Carousel 走马灯、Collapse 折叠面板、Descriptions 描述列表、Empty 空状态、Badge 徽标、Tag 标签

### 🔔 反馈 (11个)
Modal 对话框、Drawer 抽屉、Message 消息提示、Notification 通知提醒框、Progress 进度条、Spin 加载中、Skeleton 骨架屏、Popover 气泡卡片、Popconfirm 气泡确认框、Result 结果、Alert 警告提示

### 🧭 导航 (7个)
Menu 导航菜单、Tabs 标签页、Breadcrumb 面包屑、Dropdown 下拉菜单、Pagination 分页、Steps 步骤条、Anchor 锚点

### 📐 布局 (4个)
Grid 栅格、Layout 布局、Space 间距、Divider 分割线

### 🧩 其他 (4个)
Badge 徽标、Tag 标签、Avatar 头像、Tour 漫游式引导

### 🎯 拖动排序 (8个) - 特色功能
基于 **SortableJS** 实现：
- 📋 基础列表排序
- 🔲 网格排序
- 📊 看板系统（类似 Trello）
- 🔄 跨列表拖拽
- 📄 克隆拖拽
- ☰ 手柄拖拽
- 🌳 嵌套排序
- 🔀 交换模式

---

## 🛠️ 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| React | 18.x | 前端框架 |
| TypeScript | 5.x | 类型系统 |
| Vite | Latest | 构建工具 |
| Ant Design | 5.x | UI 组件库 |
| SortableJS | Latest | 拖拽排序库 |
| @ant-design/icons | Latest | 图标库 |

---

## 🚀 快速开始

### 在线体验
直接访问 [GitHub Pages 演示站点](https://你的用户名.github.io/frontend-components-demo/)，无需安装即可体验所有组件。

### 本地开发

```bash
# 克隆项目
git clone https://github.com/你的用户名/frontend-components-demo.git
cd frontend-components-demo

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

---

## 📁 项目结构

```
frontend-components-demo/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 自动部署
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/                 # 静态资源
│   ├── components/
│   │   └── CopyPromptButton.tsx
│   ├── demos/                  # 组件演示页面
│   │   ├── DataEntryDemo.tsx   # 数据录入组件
│   │   ├── DataDisplayDemo.tsx # 数据展示组件
│   │   ├── FeedbackDemo.tsx    # 反馈组件
│   │   ├── NavigationDemo.tsx  # 导航组件
│   │   ├── LayoutDemo.tsx      # 布局组件
│   │   ├── OtherDemo.tsx       # 其他组件
│   │   └── DragSortDemo.tsx    # 拖动排序（SortableJS）
│   ├── App.tsx                 # 主应用组件
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts              # Vite 配置（含 GitHub Pages base）
└── README.md                   # 本文件
```

---

## 🎯 核心亮点

### 1️⃣ 完整的组件演示
每个组件都包含：
- ✅ 基础用法展示
- ✅ 常用变体示例
- ✅ 交互状态演示
- ✅ 可直接复制的提示词模板

### 2️⃣ 特色的拖拽排序
基于 SortableJS 实现 8 种拖拽场景：
- 看板系统支持跨列拖拽
- 克隆拖拽保留源数据
- 手柄拖拽精准控制
- 嵌套排序支持树形结构

### 3️⃣ 响应式设计
- 桌面端：侧边抽屉菜单
- 移动端：自适应布局
- 所有组件支持触摸操作

### 4️⃣ AI 提示词集成
每个演示都附带提示词模板，点击即可复制，方便在 AI 编程助手（如 Cursor、GitHub Copilot）中使用。

---

## 📚 相关 Skill

本项目是 `frontend-components` Skill 的实战演示：

| Skill | 说明 | 路径 |
|-------|------|------|
| `frontend-components` | 前端功能模块总 Skill | `d:\VsCodeProjects\frontend-components\` |
| `sortablejs-drag-sort` | 拖拽排序专项 Skill | `d:\VsCodeProjects\sortablejs-demo\` |

### Skill 功能模块分类

```
frontend-components/
├── SKILL.md              # 总纲
├── CATALOG.md            # 功能模块速查表
└── sub-skills/           # 子 Skill 目录
    ├── data-entry/       # 数据录入类 (10个)
    ├── data-display/     # 数据展示类 (15个)
    ├── feedback/         # 反馈类 (11个)
    ├── navigation/       # 导航类 (7个)
    ├── layout/           # 布局类 (4个)
    └── other/            # 其他功能类 (4个)
```

---

## 🌐 部署到 GitHub Pages

本项目已配置 GitHub Actions 自动部署。

### 自动部署
每次推送到 `main` 或 `master` 分支会自动触发部署。

### 手动触发
进入仓库 Actions → Deploy to GitHub Pages → Run workflow

### 部署配置说明

**vite.config.ts**:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/frontend-components-demo/',  // GitHub Pages 路径
})
```

**.github/workflows/deploy.yml**:
- 使用 GitHub Actions 官方 Pages 部署
- 自动构建并上传 dist 目录
- 支持自定义域名（可选）

---

## 🤝 贡献指南

欢迎提交 Issue 和 PR！

### 提交规范
- 🐛 **Bug 修复**: `fix: 修复xxx问题`
- ✨ **新功能**: `feat: 添加xxx组件`
- 📚 **文档**: `docs: 更新README`
- 💄 **样式**: `style: 优化样式`

---

## 📄 许可证

[MIT](LICENSE) © 2024

---

## 🙏 致谢

- [Ant Design](https://ant.design/) - 企业级 UI 设计语言
- [SortableJS](https://sortablejs.github.io/Sortable/) - 强大的拖拽排序库
- [Vite](https://vitejs.dev/) - 下一代前端构建工具
- [React](https://react.dev/) - 用于构建用户界面的 JavaScript 库

---

<div align="center">

**⭐ Star 本项目，支持前端组件技能生态！**

[在线演示](https://你的用户名.github.io/frontend-components-demo/) · [报告问题](../../issues) · [提交功能请求](../../issues)

</div>
