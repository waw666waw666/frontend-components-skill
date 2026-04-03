# 🎨 Frontend Components Skill 演示项目

> 基于 React + TypeScript + Ant Design + SortableJS 的前端组件功能展示平台

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen?logo=github)](https://waw666waw666.github.io/frontend-components-demo/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Ant Design](https://img.shields.io/badge/Ant%20Design-5.x-1677FF?logo=antdesign)](https://ant.design/)
[![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?logo=vite)](https://vitejs.dev/)
[![GitHub stars](https://img.shields.io/github/stars/waw666waw666/frontend-components-demo?style=social)](https://github.com/waw666waw666/frontend-components-demo)

---

## 🔗 在线演示

**🌐 点击访问**: [https://waw666waw666.github.io/frontend-components-demo/](https://waw666waw666.github.io/frontend-components-demo/)

---

## ✨ 功能特性

本项目是一个完整的**前端组件功能展示平台**，涵盖 **6 大类 51+ 个组件** 的实战演示：

### 📋 数据录入 (10个)
Form 表单 | Input 输入框 | Select 选择器 | Checkbox 多选框 | Radio 单选框 | Switch 开关 | Slider 滑块 | DatePicker 日期选择 | Upload 上传 | Rate 评分

### 📊 数据展示 (15个)
Table 表格 | List 列表 | Card 卡片 | Tree 树形 | Calendar 日历 | Timeline 时间轴 | Statistic 统计 | QRCode 二维码 | Image 图片 | Carousel 走马灯 | Collapse 折叠面板 | Descriptions 描述列表 | Empty 空状态 | Badge 徽标 | Tag 标签

### 🔔 反馈 (11个)
Modal 对话框 | Drawer 抽屉 | Message 消息提示 | Notification 通知提醒 | Progress 进度条 | Spin 加载中 | Skeleton 骨架屏 | Popover 气泡卡片 | Popconfirm 气泡确认框 | Result 结果 | Alert 警告提示

### 🧭 导航 (7个)
Menu 导航菜单 | Tabs 标签页 | Breadcrumb 面包屑 | Dropdown 下拉菜单 | Pagination 分页 | Steps 步骤条 | Anchor 锚点

### 📐 布局 (4个)
Grid 栅格 | Layout 布局 | Space 间距 | Divider 分割线

### 🧩 其他 (4个)
Badge 徽标 | Tag 标签 | Avatar 头像 | Tour 漫游式引导

### 🎯 拖动排序 (7个) ⭐ 特色功能
基于 **SortableJS** 实现：
- 📋 基础列表排序
- 🔲 网格排序
- 📊 看板系统（类 Trello，支持跨列拖拽）
- 🔄 跨列表拖拽
- 📄 克隆拖拽
- ☰ 手柄拖拽
- 🌳 嵌套排序

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
直接访问 👆 上方的演示地址，无需安装即可体验所有组件！

### 本地开发

```bash
# 克隆项目
git clone https://github.com/waw666waw666/frontend-components-demo.git
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
│       └── deploy.yml              # GitHub Actions 自动部署
├── public/
│   └── favicon.svg
├── skill/
│   └── frontend-components/        # Skill 文档（55个文件）
│       ├── SKILL.md               # 总纲
│       ├── CATALOG.md             # 功能模块速查表
│       └── sub-skills/            # 子 Skill 目录
│           ├── data-entry/        # 数据录入类
│           ├── data-display/      # 数据展示类
│           ├── feedback/          # 反馈类
│           ├── navigation/        # 导航类
│           ├── layout/            # 布局类
│           └── other/             # 其他功能类
├── src/
│   ├── assets/                    # 静态资源
│   ├── components/
│   │   └── CopyPromptButton.tsx  # 提示词复制按钮
│   ├── demos/                     # 组件演示页面
│   │   ├── DataEntryDemo.tsx     # 数据录入组件
│   │   ├── DataDisplayDemo.tsx    # 数据展示组件
│   │   ├── FeedbackDemo.tsx       # 反馈组件
│   │   ├── NavigationDemo.tsx     # 导航组件
│   │   ├── LayoutDemo.tsx         # 布局组件
│   │   ├── OtherDemo.tsx          # 其他组件
│   │   └── DragSortDemo.tsx       # 拖动排序（SortableJS）
│   ├── App.tsx                    # 主应用组件
│   └── main.tsx                   # 入口文件
├── index.html
├── package.json
├── vite.config.ts                 # Vite 配置
└── README.md                      # 本文件
```

---

## 🎯 核心亮点

### 1️⃣ 完整的组件演示
每个组件都包含：
- ✅ 基础用法展示
- ✅ 常用变体示例
- ✅ 交互状态演示
- ✅ **可直接复制的 AI 提示词模板** 🤖

### 2️⃣ 特色拖拽排序
基于 SortableJS 实现 7 种拖拽场景：
- 看板系统支持跨列拖拽
- 克隆拖拽保留源数据
- 手柄拖拽精准控制
- 嵌套排序支持树形结构

### 3️⃣ 响应式设计
- 桌面端：抽屉菜单
- 移动端：自适应布局
- 所有组件支持触摸操作

### 4️⃣ AI 提示词集成
每个演示都附带提示词模板，点击即可复制，方便在 AI 编程助手（如 Cursor、GitHub Copilot）中使用。

---

## 📚 Skill 文档

本项目包含完整的 `frontend-components` Skill 文档，位于 `skill/` 目录：

### 功能模块分类

| 分类 | 数量 | 说明 |
|------|------|------|
| data-entry | 10 | 数据录入类组件 |
| data-display | 15 | 数据展示类组件 |
| feedback | 11 | 反馈类组件 |
| navigation | 7 | 导航类组件 |
| layout | 4 | 布局类组件 |
| other | 4 | 其他功能类组件 |

每个子 Skill 包含：
- 组件功能描述
- 常用属性说明
- 代码示例
- 最佳实践

---

## 🌐 部署到 GitHub Pages

本项目已配置 **GitHub Actions 自动部署** 🚀

### 自动部署
每次推送到 `master` 分支会自动触发部署（约 1-2 分钟）

### 手动触发
1. 进入仓库 [Actions](https://github.com/waw666waw666/frontend-components-demo/actions)
2. 点击 "Deploy to GitHub Pages"
3. 点击 "Run workflow"

### 部署配置

**vite.config.ts**:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/frontend-components-demo/',
})
```

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

[在线演示](https://waw666waw666.github.io/frontend-components-demo/) · [GitHub 仓库](https://github.com/waw666waw666/frontend-components-demo) · [报告问题](https://github.com/waw666waw666/frontend-components-demo/issues)

</div>
