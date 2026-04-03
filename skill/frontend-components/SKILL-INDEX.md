# 前端功能模块 Skill 索引

> AI 自动调用索引表 - 用于快速匹配用户意图和子 Skill

---

## 🔍 关键词映射表

### 数据展示类 (data-display/)

| 关键词 | 匹配权重 | 子 Skill 文件 | 常用场景 |
|--------|----------|---------------|----------|
| 表格, Table, table, 数据表格, 列表展示 | 100% | `table.md` | 数据列表、后台管理 |
| 列表, List, list, 数据列表 | 100% | `list.md` | 简单列表、文章列表 |
| 卡片, Card, card | 100% | `card.md` | 信息展示、商品卡片 |
| 树形, Tree, tree, 树形控件, 树组件 | 100% | `tree.md` | 组织架构、分类层级 |
| 日历, Calendar, calendar, 日期选择 | 90% | `calendar.md` | 日程管理、日期选择 |
| 时间轴, Timeline, timeline | 100% | `timeline.md` | 历史记录、流程展示 |
| 统计, Statistic, statistic, 数据统计 | 100% | `statistic.md` | 数据指标、仪表盘 |
| 二维码, QRCode, qrcode, 扫码 | 100% | `qrcode.md` | 扫码、分享 |
| 图片, Image, image, 图片展示 | 90% | `image.md` | 图片预览、画廊 |
| 轮播, Carousel, carousel, 走马灯 | 100% | `carousel.md` | Banner、商品轮播 |
| 折叠面板, Collapse, collapse | 100% | `collapse.md` | 内容折叠、FAQ |
| 描述列表, Descriptions, descriptions | 100% | `descriptions.md` | 详情展示 |
| 空状态, Empty, empty | 100% | `empty.md` | 无数据提示 |
| 标签, Tag, tag | 90% | `tag.md` | 标记、分类 |
| 徽标, Badge, badge | 100% | `badge.md` | 消息数、状态标记 |

### 数据录入类 (data-entry/)

| 关键词 | 匹配权重 | 子 Skill 文件 | 常用场景 |
|--------|----------|---------------|----------|
| 表单, Form, form, 表单验证 | 100% | `form.md` | 数据提交、用户注册 |
| 输入框, Input, input, 文本输入 | 100% | `input.md` | 文本输入、搜索框 |
| 选择器, Select, select, 下拉选择 | 100% | `select.md` | 下拉选择、级联选择 |
| 日期选择, DatePicker, datepicker, 日期 | 100% | `date-picker.md` | 日期选择、范围选择 |
| 时间选择, TimePicker, timepicker | 100% | `time-picker.md` | 时间选择 |
| 上传, Upload, upload, 文件上传, 图片上传 | 100% | `upload.md` | 文件上传、图片上传 |
| 多选, Checkbox, checkbox, 复选框 | 100% | `checkbox.md` | 多选、勾选 |
| 单选, Radio, radio, 单选框 | 100% | `radio.md` | 单选、选项卡 |
| 开关, Switch, switch | 100% | `switch.md` | 状态切换 |
| 滑块, Slider, slider | 100% | `slider.md` | 数值范围选择 |
| 穿梭框, Transfer, transfer | 100% | `transfer.md` | 数据转移 |
| 提及, Mentions, mentions | 100% | `mentions.md` | @提及功能 |

### 反馈类 (feedback/)

| 关键词 | 匹配权重 | 子 Skill 文件 | 常用场景 |
|--------|----------|---------------|----------|
| 弹窗, Modal, modal, 对话框, Dialog, dialog | 100% | `modal.md` | 对话框、确认框 |
| 抽屉, Drawer, drawer, 侧边栏, 侧滑 | 100% | `drawer.md` | 侧边栏、详情展示 |
| 消息, Message, message, 消息提示 | 100% | `message.md` | 操作提示、成功失败 |
| 通知, Notification, notification | 100% | `notification.md` | 系统通知、消息推送 |
| 进度条, Progress, progress | 100% | `progress.md` | 上传进度、任务进度 |
| 加载, Loading, loading, Spin, spin, 加载中 | 100% | `spin.md` | 数据加载、等待状态 |
| 骨架屏, Skeleton, skeleton | 100% | `skeleton.md` | 内容加载占位 |
| 气泡卡片, Popover, popover | 100% | `popover.md` | 信息提示 |
| 气泡确认, Popconfirm, popconfirm | 100% | `popconfirm.md` | 确认操作 |
| 结果页, Result, result | 100% | `result.md` | 操作结果展示 |

### 导航类 (navigation/)

| 关键词 | 匹配权重 | 子 Skill 文件 | 常用场景 |
|--------|----------|---------------|----------|
| 菜单, Menu, menu, 导航菜单 | 100% | `menu.md` | 侧边导航、顶部导航 |
| 标签页, Tabs, tabs, Tab | 100% | `tabs.md` | 内容切换、多标签 |
| 面包屑, Breadcrumb, breadcrumb | 100% | `breadcrumb.md` | 路径导航、层级展示 |
| 分页, Pagination, pagination | 100% | `pagination.md` | 列表分页、数据分页 |
| 步骤条, Steps, steps, 步骤, 流程 | 100% | `steps.md` | 流程引导、分步操作 |
| 下拉菜单, Dropdown, dropdown | 100% | `dropdown.md` | 操作菜单、更多选项 |
| 锚点, Anchor, anchor | 100% | `anchor.md` | 页面内跳转 |

### 布局类 (layout/)

| 关键词 | 匹配权重 | 子 Skill 文件 | 常用场景 |
|--------|----------|---------------|----------|
| 栅格, Grid, grid | 100% | `grid.md` | 页面布局、响应式 |
| 布局, Layout, layout | 100% | `layout.md` | 整体页面结构 |
| 间距, Space, space | 100% | `space.md` | 元素间距、对齐 |
| 分割线, Divider, divider | 100% | `divider.md` | 内容分隔 |

### 通用类 (general/)

| 关键词 | 匹配权重 | 子 Skill 文件 | 常用场景 |
|--------|----------|---------------|----------|
| 按钮, Button, button, btn | 100% | `button.md` | 操作按钮 |
| 图标, Icon, icon | 100% | `icon.md` | 图标展示 |
| 排版, Typography, typography, 文字排版 | 100% | `typography.md` | 文字样式 |

### 其他功能类 (other/)

| 关键词 | 匹配权重 | 子 Skill 文件 | 常用场景 |
|--------|----------|---------------|----------|
| 水印, Watermark, watermark | 100% | `watermark.md` | 版权保护、敏感信息 |
| 回到顶部, BackTop, backtop | 100% | `back-top.md` | 长页面滚动 |
| 引导, Tour, tour, 新手引导, 漫游式引导 | 100% | `tour.md` | 新功能引导、用户教程 |
| 固钉, Affix, affix | 100% | `affix.md` | 固定元素 |
| 全局配置, ConfigProvider, configprovider | 100% | `config-provider.md` | 主题配置 |
| 浮动按钮, FloatButton, floatbutton | 100% | `float-button.md` | 快捷操作 |
| 拖拽排序, 拖动排序, DragSort, dragsort, sortable | 100% | `sub-skills/other/drag-sort.md` | 列表排序、看板 |

---

## 🎯 场景映射表

### 后台管理系统场景
```
用户说：后台管理、CRUD、数据管理、增删改查
↓
自动推荐：Table + Form + Modal + Menu + Pagination + Message
```

### 表单提交场景
```
用户说：登录、注册、提交、填写、录入
↓
自动推荐：Form + Input + Select + DatePicker + Upload + Checkbox/Radio
```

### 信息展示场景
```
用户说：展示、详情、信息、数据、统计
↓
自动推荐：Card + Descriptions + Statistic + Timeline + Tag + Badge
```

### 流程引导场景
```
用户说：流程、步骤、向导、引导、新手
↓
自动推荐：Steps + Tour + Modal
```

### 反馈交互场景
```
用户说：提示、通知、确认、加载、进度
↓
自动推荐：Message + Notification + Modal + Progress + Spin + Skeleton
```

---

## 🤖 AI 调用规则

### 规则 1：精确匹配优先
如果用户提到具体组件名（如"表格"），**直接调用**对应子 Skill，不要询问。

### 规则 2：场景分析
如果用户描述场景（如"后台管理"），根据场景映射表**推荐多个组件**。

### 规则 3：技术栈识别
自动识别用户技术栈（React/Vue/Angular），提供对应代码示例。

### 规则 4：直接输出代码
调用子 Skill 后，**直接输出完整实现代码**，不要只给说明。

### 规则 5：提示词模板
每个子 Skill 都包含提示词模板，可以指导用户如何描述需求。

---

## 📋 调用示例

### 示例 1：精确匹配
```
用户：我要做个表格
AI：检测到关键词"表格" → 调用 table.md → 输出 Table 实现代码
```

### 示例 2：模糊匹配
```
用户：需要个弹窗表单
AI：检测到"弹窗" → 调用 modal.md
    检测到"表单" → 同时引用 form.md
    输出：带表单的弹窗实现
```

### 示例 3：场景匹配
```
用户：做个后台管理系统
AI：检测到场景"后台管理" → 推荐 Table + Form + Modal
    询问：需要哪些具体功能？
    用户：数据列表和新增
    AI：输出 Table + Modal(Form) 完整代码
```

---

## 🔗 快速链接

- [主 Skill 文档](./SKILL.md)
- [速查表](./CATALOG.md)
- [表格组件](./sub-skills/data-display/table.md)
- [表单组件](./sub-skills/data-entry/form.md)
- [弹窗组件](./sub-skills/feedback/modal.md)
