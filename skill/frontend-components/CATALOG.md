# 前端功能模块速查表

> 快速查找和定位所需功能模块

---

## 🔍 按功能查找

### 数据展示
| 功能 | 文件路径 | 常用场景 |
|------|----------|----------|
| **Table 表格** | `sub-skills/data-display/table.md` | 数据列表、后台管理 |
| **List 列表** | `sub-skills/data-display/list.md` | 简单列表、文章列表 |
| **Card 卡片** | `sub-skills/data-display/card.md` | 信息展示、商品卡片 |
| **Tree 树形** | `sub-skills/data-display/tree.md` | 组织架构、分类层级 |
| **Calendar 日历** | `sub-skills/data-display/calendar.md` | 日程管理、日期选择 |
| **Timeline 时间轴** | `sub-skills/data-display/timeline.md` | 历史记录、流程展示 |
| **Statistic 统计** | `sub-skills/data-display/statistic.md` | 数据指标、仪表盘 |
| **QRCode 二维码** | `sub-skills/data-display/qrcode.md` | 扫码、分享 |

### 数据录入
| 功能 | 文件路径 | 常用场景 |
|------|----------|----------|
| **Form 表单** | `sub-skills/data-entry/form.md` | 数据提交、用户注册 |
| **Input 输入框** | `sub-skills/data-entry/input.md` | 文本输入、搜索框 |
| **Select 选择器** | `sub-skills/data-entry/select.md` | 下拉选择、级联选择 |
| **DatePicker 日期** | `sub-skills/data-entry/date-picker.md` | 日期选择、范围选择 |
| **Upload 上传** | `sub-skills/data-entry/upload.md` | 文件上传、图片上传 |
| **Checkbox 多选** | `sub-skills/data-entry/checkbox.md` | 多选、勾选 |
| **Radio 单选** | `sub-skills/data-entry/radio.md` | 单选、选项卡 |

### 反馈交互
| 功能 | 文件路径 | 常用场景 |
|------|----------|----------|
| **Modal 弹窗** | `sub-skills/feedback/modal.md` | 对话框、确认框 |
| **Drawer 抽屉** | `sub-skills/feedback/drawer.md` | 侧边栏、详情展示 |
| **Message 消息** | `sub-skills/feedback/message.md` | 操作提示、成功失败 |
| **Notification 通知** | `sub-skills/feedback/notification.md` | 系统通知、消息推送 |
| **Progress 进度条** | `sub-skills/feedback/progress.md` | 上传进度、任务进度 |
| **Loading 加载** | `sub-skills/feedback/spin.md` | 数据加载、等待状态 |
| **Skeleton 骨架屏** | `sub-skills/feedback/skeleton.md` | 内容加载占位 |

### 导航
| 功能 | 文件路径 | 常用场景 |
|------|----------|----------|
| **Menu 菜单** | `sub-skills/navigation/menu.md` | 侧边导航、顶部导航 |
| **Tabs 标签页** | `sub-skills/navigation/tabs.md` | 内容切换、多标签 |
| **Breadcrumb 面包屑** | `sub-skills/navigation/breadcrumb.md` | 路径导航、层级展示 |
| **Pagination 分页** | `sub-skills/navigation/pagination.md` | 列表分页、数据分页 |
| **Steps 步骤条** | `sub-skills/navigation/steps.md` | 流程引导、分步操作 |
| **Dropdown 下拉菜单** | `sub-skills/navigation/dropdown.md` | 操作菜单、更多选项 |

### 布局
| 功能 | 文件路径 | 常用场景 |
|------|----------|----------|
| **Grid 栅格** | `sub-skills/layout/grid.md` | 页面布局、响应式 |
| **Layout 布局** | `sub-skills/layout/layout.md` | 整体页面结构 |
| **Space 间距** | `sub-skills/layout/space.md` | 元素间距、对齐 |

### 其他功能
| 功能 | 文件路径 | 常用场景 |
|------|----------|----------|
| **Watermark 水印** | `sub-skills/other/watermark.md` | 版权保护、敏感信息 |
| **BackTop 回到顶部** | `sub-skills/other/back-top.md` | 长页面滚动 |
| **Tour 引导** | `sub-skills/other/tour.md` | 新功能引导、用户教程 |
| **DragSort 拖拽排序** | `sub-skills/other/drag-sort.md` | 列表排序、看板 |

---

## 🎯 按场景查找

### 后台管理系统常用
- **Table 表格** - 数据展示
- **Form 表单** - 数据录入
- **Modal 弹窗** - 新增/编辑
- **Menu 菜单** - 导航
- **Breadcrumb 面包屑** - 路径
- **Pagination 分页** - 数据分页
- **Message 消息** - 操作反馈

### 电商网站常用
- **Card 卡片** - 商品展示
- **Carousel 轮播** - 商品轮播
- **QRCode 二维码** - 扫码购买
- **Statistic 统计** - 销量展示
- **Timeline 时间轴** - 订单跟踪

### 企业官网常用
- **Menu 菜单** - 网站导航
- **Carousel 轮播** - Banner
- **Timeline 时间轴** - 公司历程
- **QRCode 二维码** - 联系方式
- **BackTop 回到顶部** - 长页面

### SaaS 产品常用
- **Table 表格** - 数据管理
- **Form 表单** - 配置设置
- **Steps 步骤条** - 开通流程
- **Tour 引导** - 新用户引导
- **Drawer 抽屉** - 详情展示
- **Notification 通知** - 系统消息

---

## 📦 技术栈对应

### React 项目
| 功能 | 推荐库 |
|------|--------|
| 表格 | TanStack Table / ag-Grid |
| 表单 | React Hook Form |
| 弹窗 | Radix Dialog |
| 验证 | Zod / Yup |
| 拖拽 | dnd-kit |

### Vue 项目
| 功能 | 推荐库 |
|------|--------|
| 表格 | vxe-table |
| 表单 | VeeValidate |
| 弹窗 | Element Plus |
| 验证 | Yup / Zod |
| 拖拽 | Vue.Draggable |

---

## 📝 快速提示词

### 表格场景
```
我需要实现一个 [基础/高级/可编辑] 表格，
技术栈是 [React/Vue]，
需要 [排序/筛选/分页/行选择] 功能。
```

### 表单场景
```
我需要实现一个 [登录/注册/动态/多步骤] 表单，
技术栈是 [React/Vue]，
需要验证字段：[字段列表]。
```

### 弹窗场景
```
我需要实现一个 [基础/确认/表单] 弹窗，
技术栈是 [React/Vue]，
用于 [新增/编辑/删除/详情] 操作。
```

---

## 🔗 相关资源

- [Ant Design 组件总览](https://ant-design.antgroup.com/components/overview-cn)
- [Element Plus 组件](https://element-plus.org/zh-CN/component/button.html)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)
- [Headless UI](https://headlessui.com/)
