import React from 'react'
import { Button, Tooltip, message } from 'antd'
import { CopyOutlined, CheckOutlined } from '@ant-design/icons'

interface CopyPromptButtonProps {
  componentName: string
  componentType: string
}

const CopyPromptButton: React.FC<CopyPromptButtonProps> = ({
  componentName,
}) => {
  const [copied, setCopied] = React.useState(false)

  const generatePrompt = () => {
    const prompts: Record<string, string> = {
      // 数据录入类
      'Form': `【动作：执行修改】
目标：使用 Ant Design 的 Form 组件创建表单。

需求详情：
1. 创建包含用户名、邮箱、密码字段的表单
2. 添加表单验证规则（必填、格式验证）
3. 实现表单提交和重置功能
4. 使用垂直布局

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Form、Input、Button 组件
- 添加适当的类型定义

验收标准：
1. 表单验证正常工作
2. 提交时输出表单值到控制台
3. 样式美观，符合 Ant Design 规范`,

      'Input': `【动作：执行修改】
目标：使用 Ant Design 的 Input 组件实现多种输入框。

需求详情：
1. 基础输入框带字符计数
2. 密码输入框带可见性切换
3. 搜索输入框带搜索按钮
4. 文本域支持自动调整高度
5. 带前缀后缀的输入框（如金额输入）

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Input 组件
- 实现受控组件模式

验收标准：
1. 所有输入框类型正常显示
2. 搜索功能有反馈提示
3. 样式美观，响应式布局`,

      'Select': `【动作：执行修改】
目标：使用 Ant Design 的 Select 组件实现选择器。

需求详情：
1. 单选选择器带搜索功能
2. 多选选择器带标签显示
3. 标签模式（可输入自定义值）
4. 分组选择器（按类别分组）

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Select 组件
- 支持清除和禁用状态

验收标准：
1. 选择器功能完整
2. 搜索过滤正常工作
3. 多选时显示标签数量限制`,

      'DatePicker': `【动作：执行修改】
目标：使用 Ant Design 的 DatePicker 组件实现日期选择。

需求详情：
1. 基础日期选择器
2. 日期范围选择器
3. 日期时间选择器
4. 月份和年份选择器

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 DatePicker 组件
- 中文化显示

验收标准：
1. 各种日期选择器正常显示
2. 日期格式正确
3. 支持清除操作`,

      'Checkbox': `【动作：执行修改】
目标：使用 Ant Design 的 Checkbox 组件实现多选功能。

需求详情：
1. 多选框组（带禁用选项）
2. 全选/反选功能
3. 显示已选择数量

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Checkbox 组件
- 状态管理使用 useState

验收标准：
1. 多选功能正常
2. 全选功能正常工作
3. 禁用选项不可选`,

      'Radio': `【动作：执行修改】
目标：使用 Ant Design 的 Radio 组件实现单选功能。

需求详情：
1. 单选按钮组（按钮样式）
2. 单选框组（垂直布局）
3. 带禁用选项

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Radio 组件
- 实现受控组件

验收标准：
1. 单选功能正常
2. 选中状态正确显示
3. 禁用选项不可选`,

      'Switch': `【动作：执行修改】
目标：使用 Ant Design 的 Switch 组件实现开关功能。

需求详情：
1. 基础开关（带加载状态）
2. 带文字描述的开关（开/关）
3. 不同尺寸的开关

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Switch 组件
- 添加切换回调

验收标准：
1. 开关切换正常
2. 加载状态显示正确
3. 切换时有反馈提示`,

      'Slider': `【动作：执行修改】
目标：使用 Ant Design 的 Slider 组件实现滑块。

需求详情：
1. 基础滑块（显示当前值）
2. 范围滑块（双滑块）
3. 带标记点的滑块
4. 带步长的滑块

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Slider 组件
- 自定义提示格式

验收标准：
1. 滑块拖动正常
2. 值显示正确
3. 标记点显示正确`,

      'Rate': `【动作：执行修改】
目标：使用 Ant Design 的 Rate 组件实现评分功能。

需求详情：
1. 基础评分（带工具提示）
2. 半星评分
3. 只读评分
4. 自定义字符和数量

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Rate 组件
- 显示当前评分值

验收标准：
1. 评分功能正常
2. 悬停显示提示
3. 选中状态正确`,

      'Upload': `【动作：执行修改】
目标：使用 Ant Design 的 Upload 组件实现文件上传。

需求详情：
1. 点击上传（带文件列表管理）
2. 拖拽上传区域
3. 上传进度模拟

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Upload 组件
- 实现上传状态管理

验收标准：
1. 文件选择正常
2. 上传功能有反馈
3. 支持多文件上传`,

      'Transfer': `【动作：执行修改】
目标：使用 Ant Design 的 Transfer 组件实现穿梭框。

需求详情：
1. 基础穿梭框（带搜索）
2. 全选/清空功能
3. 显示已选择数量

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Transfer 组件
- 实现数据筛选

验收标准：
1. 数据转移正常
2. 搜索过滤工作
3. 操作按钮功能正常`,

      // 数据展示类
      'Table': `【动作：执行修改】
目标：使用 Ant Design 的 Table 组件实现数据表格。

需求详情：
1. 基础表格（带列排序）
2. 行选择功能
3. 分页功能

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Table 组件
- 定义数据类型接口

验收标准：
1. 表格显示正常
2. 选择功能工作
3. 分页切换正常`,

      'Card': `【动作：执行修改】
目标：使用 Ant Design 的 Card 组件实现卡片布局。

需求详情：
1. 基础卡片（带标题和额外操作）
2. 带图片的卡片（悬停效果）
3. 加载中状态卡片

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Card 组件
- 添加交互效果

验收标准：
1. 卡片样式美观
2. 悬停效果正常
3. 加载状态显示正确`,

      'Tree': `【动作：执行修改】
目标：使用 Ant Design 的 Tree 组件实现树形控件。

需求详情：
1. 可勾选的树
2. 默认展开指定节点
3. 父子节点关联

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Tree 组件
- 定义树形数据结构

验收标准：
1. 树形结构显示正确
2. 勾选功能正常
3. 展开/收起正常`,

      'List': `【动作：执行修改】
目标：使用 Ant Design 的 List 组件实现列表。

需求详情：
1. 基础列表（带头尾）
2. 带头像和描述的列表
3. 带边框的列表

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 List 和 Avatar 组件
- 使用图标增强显示

验收标准：
1. 列表显示正常
2. 头像和描述对齐
3. 悬停效果正常`,

      'Calendar': `【动作：执行修改】
目标：使用 Ant Design 的 Calendar 组件实现日历。

需求详情：
1. 基础日历（非全屏）
2. 日期单元格自定义
3. 月份切换

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Calendar 组件
- 中文化显示

验收标准：
1. 日历显示正确
2. 月份切换正常
3. 样式美观`,

      'Descriptions': `【动作：执行修改】
目标：使用 Ant Design 的 Descriptions 组件实现描述列表。

需求详情：
1. 基础描述列表
2. 带边框的描述列表
3. 多列布局

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Descriptions 组件
- 响应式布局

验收标准：
1. 描述列表显示正常
2. 边框样式正确
3. 响应式适配`,

      'Empty': `【动作：执行修改】
目标：使用 Ant Design 的 Empty 组件实现空状态。

需求详情：
1. 基础空状态
2. 自定义描述文字
3. 带操作按钮的空状态

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Empty 组件
- 添加自定义样式

验收标准：
1. 空状态显示正常
2. 图标和文字对齐
3. 操作按钮可点击`,

      'Image': `【动作：执行修改】
目标：使用 Ant Design 的 Image 组件实现图片展示。

需求详情：
1. 基础图片（带预览）
2. 图片组（可切换预览）
3. 不同尺寸的图片

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Image 组件
- 实现预览功能

验收标准：
1. 图片显示正常
2. 预览功能工作
3. 图片组切换正常`,

      'Carousel': `【动作：执行修改】
目标：使用 Ant Design 的 Carousel 组件实现轮播图。

需求详情：
1. 自动播放轮播
2. 手动切换轮播
3. 自定义轮播内容

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Carousel 组件
- 添加切换指示器

验收标准：
1. 轮播自动播放
2. 手动切换正常
3. 指示器显示正确`,

      'Collapse': `【动作：执行修改】
目标：使用 Ant Design 的 Collapse 组件实现折叠面板。

需求详情：
1. 基础折叠面板
2. 手风琴模式（同时只展开一个）
3. 默认展开指定面板

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Collapse 组件
- 添加动画效果

验收标准：
1. 折叠展开正常
2. 手风琴模式工作
3. 动画流畅`,

      'Statistic': `【动作：执行修改】
目标：使用 Ant Design 的 Statistic 组件实现统计数值。

需求详情：
1. 基础统计数值（带前缀后缀）
2. 倒计时组件
3. 多个统计数值并排

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Statistic 组件
- 格式化数值显示

验收标准：
1. 数值显示正确
2. 倒计时正常工作
3. 布局整齐`,

      'QRCode': `【动作：执行修改】
目标：使用 Ant Design 的 QRCode 组件实现二维码。

需求详情：
1. 基础二维码
2. 不同状态的二维码（加载中、已过期）
3. 自定义样式

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 QRCode 组件
- 设置合适的尺寸

验收标准：
1. 二维码生成正常
2. 状态显示正确
3. 可扫描识别`,

      'Badge': `【动作：执行修改】
目标：使用 Ant Design 的 Badge 组件实现徽标。

需求详情：
1. 基础徽标（数字）
2. 小红点徽标
3. 独立使用的徽标

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Badge 组件
- 结合 Avatar 使用

验收标准：
1. 徽标显示正确
2. 数字溢出处理正常
3. 小红点样式正确`,

      'Tag': `【动作：执行修改】
目标：使用 Ant Design 的 Tag 组件实现标签。

需求详情：
1. 多种颜色的标签
2. 可关闭的标签
3. 动态添加删除标签

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Tag 组件
- 管理标签状态

验收标准：
1. 标签颜色多样
2. 关闭功能正常
3. 动态操作正常`,

      'Timeline': `【动作：执行修改】
目标：使用 Ant Design 的 Timeline 组件实现时间轴。

需求详情：
1. 基础时间轴
2. 自定义节点图标和颜色
3. 交替显示模式

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Timeline 组件
- 使用图标增强显示

验收标准：
1. 时间轴显示正确
2. 自定义图标正常
3. 交替布局正常`,

      // 反馈类
      'Modal': `【动作：执行修改】
目标：使用 Ant Design 的 Modal 组件实现对话框。

需求详情：
1. 基础对话框（信息确认）
2. 不同类型的对话框（成功、错误、警告）
3. 自定义页脚的对话框

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Modal 组件
- 管理对话框状态

验收标准：
1. 对话框显示正常
2. 类型区分明显
3. 关闭和确认功能正常`,

      'Message': `【动作：执行修改】
目标：使用 Ant Design 的 Message 组件实现消息提示。

需求详情：
1. 不同类型的消息（成功、错误、信息、警告）
2. 加载中消息
3. 自定义持续时间

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Message 组件
- 全局配置

验收标准：
1. 消息提示显示正常
2. 自动关闭功能正常
3. 类型样式正确`,

      'Drawer': `【动作：执行修改】
目标：使用 Ant Design 的 Drawer 组件实现抽屉。

需求详情：
1. 基础抽屉（右侧滑出）
2. 不同位置的抽屉（左、上、下）
3. 带表单的抽屉

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Drawer 组件
- 管理抽屉状态

验收标准：
1. 抽屉滑出正常
2. 遮罩层显示正确
3. 关闭功能正常`,

      'Alert': `【动作：执行修改】
目标：使用 Ant Design 的 Alert 组件实现警告提示。

需求详情：
1. 不同类型的警告（成功、信息、警告、错误）
2. 可关闭的警告
3. 带描述的警告

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Alert 组件
- 添加图标

验收标准：
1. 警告样式正确
2. 关闭功能正常
3. 图标显示正确`,

      'Notification': `【动作：执行修改】
目标：使用 Ant Design 的 Notification 组件实现通知提醒。

需求详情：
1. 不同类型的通知
2. 自定义通知位置
3. 带操作按钮的通知

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Notification 组件
- 配置通知参数

验收标准：
1. 通知显示正常
2. 位置正确
3. 自动关闭功能正常`,

      'Popconfirm': `【动作：执行修改】
目标：使用 Ant Design 的 Popconfirm 组件实现气泡确认。

需求详情：
1. 基础气泡确认
2. 带描述的气泡确认
3. 自定义按钮文字

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Popconfirm 组件
- 处理确认和取消回调

验收标准：
1. 气泡显示正常
2. 确认取消功能正常
3. 按钮文字正确`,

      'Popover': `【动作：执行修改】
目标：使用 Ant Design 的 Popover 组件实现气泡卡片。

需求详情：
1. 基础气泡卡片
2. 带标题的气泡卡片
3. 自定义内容

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Popover 组件
- 控制显示位置

验收标准：
1. 气泡显示正常
2. 内容样式正确
3. 位置控制准确`,

      'Progress': `【动作：执行修改】
目标：使用 Ant Design 的 Progress 组件实现进度条。

需求详情：
1. 线性进度条
2. 圆形进度条
3. 仪表盘进度条

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Progress 组件
- 动态更新进度

验收标准：
1. 进度条显示正常
2. 百分比正确
3. 动画流畅`,

      'Result': `【动作：执行修改】
目标：使用 Ant Design 的 Result 组件实现结果页。

需求详情：
1. 成功结果页
2. 失败结果页
3. 带操作按钮的结果页

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Result 组件
- 自定义图标

验收标准：
1. 结果页显示正常
2. 图标和文字对齐
3. 操作按钮可点击`,

      'Skeleton': `【动作：执行修改】
目标：使用 Ant Design 的 Skeleton 组件实现骨架屏。

需求详情：
1. 基础骨架屏
2. 带头像和段落的骨架屏
3. 特定组件骨架屏（按钮、输入框）

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Skeleton 组件
- 控制动画效果

验收标准：
1. 骨架屏显示正常
2. 动画效果流畅
3. 不同变体正确`,

      'Spin': `【动作：执行修改】
目标：使用 Ant Design 的 Spin 组件实现加载中状态。

需求详情：
1. 基础加载中
2. 带提示文字的加载
3. 包裹内容的加载

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Spin 组件
- 控制加载状态

验收标准：
1. 加载动画正常
2. 提示文字显示正确
3. 内容遮罩正常`,

      // 导航类
      'Menu': `【动作：执行修改】
目标：使用 Ant Design 的 Menu 组件实现导航菜单。

需求详情：
1. 水平导航菜单
2. 垂直导航菜单
3. 内嵌菜单（带子菜单）

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Menu 组件
- 管理选中状态

验收标准：
1. 菜单显示正常
2. 子菜单展开正常
3. 选中状态正确`,

      'Pagination': `【动作：执行修改】
目标：使用 Ant Design 的 Pagination 组件实现分页。

需求详情：
1. 基础分页
2. 带每页数量选择的分页
3. 快速跳转分页

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Pagination 组件
- 处理分页事件

验收标准：
1. 分页显示正常
2. 页码切换正常
3. 快速跳转功能正常`,

      'Steps': `【动作：执行修改】
目标：使用 Ant Design 的 Steps 组件实现步骤条。

需求详情：
1. 基础步骤条
2. 垂直步骤条
3. 带描述的步骤条

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Steps 组件
- 管理当前步骤

验收标准：
1. 步骤条显示正常
2. 步骤切换正常
3. 描述文字显示正确`,

      'Tabs': `【动作：执行修改】
目标：使用 Ant Design 的 Tabs 组件实现标签页。

需求详情：
1. 基础标签页
2. 卡片式标签页
3. 可编辑的标签页

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Tabs 组件
- 管理激活标签

验收标准：
1. 标签页显示正常
2. 切换标签正常
3. 可编辑功能正常`,

      'Breadcrumb': `【动作：执行修改】
目标：使用 Ant Design 的 Breadcrumb 组件实现面包屑。

需求详情：
1. 基础面包屑
2. 带图标的面包屑
3. 带下拉菜单的面包屑

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Breadcrumb 组件
- 使用图标增强

验收标准：
1. 面包屑显示正常
2. 图标对齐正确
3. 下拉菜单功能正常`,

      'Dropdown': `【动作：执行修改】
目标：使用 Ant Design 的 Dropdown 组件实现下拉菜单。

需求详情：
1. 基础下拉菜单
2. 不同位置的下拉菜单
3. 按钮下拉菜单

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Dropdown 组件
- 处理菜单点击事件

验收标准：
1. 下拉菜单显示正常
2. 位置正确
3. 菜单项可点击`,

      'Anchor': `【动作：执行修改】
目标：使用 Ant Design 的 Anchor 组件实现锚点导航。

需求详情：
1. 基础锚点
2. 水平锚点
3. 滚动监听锚点

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Anchor 组件
- 配置锚点目标

验收标准：
1. 锚点显示正常
2. 点击跳转正常
3. 滚动监听正常`,

      // 布局类
      'Grid': `【动作：执行修改】
目标：使用 Ant Design 的 Grid 组件实现栅格布局。

需求详情：
1. 基础 24 栅格
2. 响应式栅格
3. 栅格间隔和偏移

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Row、Col 组件
- 响应式断点配置

验收标准：
1. 栅格布局正确
2. 响应式适配正常
3. 间隔和偏移正确`,

      'Layout': `【动作：执行修改】
目标：使用 Ant Design 的 Layout 组件实现页面布局。

需求详情：
1. 基础布局（头-内容-尾）
2. 侧边栏布局
3. 混合布局

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Layout 组件
- 配置布局结构

验收标准：
1. 布局结构正确
2. 侧边栏显示正常
3. 响应式适配`,

      'Space': `【动作：执行修改】
目标：使用 Ant Design 的 Space 组件实现间距布局。

需求详情：
1. 基础间距
2. 垂直间距
3. 自定义间距大小

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Space 组件
- 控制间距方向

验收标准：
1. 间距显示正确
2. 方向控制正常
3. 对齐方式正确`,

      'Divider': `【动作：执行修改】
目标：使用 Ant Design 的 Divider 组件实现分割线。

需求详情：
1. 水平分割线
2. 带文字的分割线
3. 垂直分割线

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Divider 组件
- 自定义样式

验收标准：
1. 分割线显示正常
2. 文字对齐正确
3. 样式自定义正常`,

      // 其他类
      'Affix': `【动作：执行修改】
目标：使用 Ant Design 的 Affix 组件实现固钉效果。

需求详情：
1. 顶部固钉
2. 底部固钉
3. 固定偏移量

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Affix 组件
- 监听滚动事件

验收标准：
1. 固钉效果正常
2. 偏移量控制准确
3. 滚动监听正常`,

      'BackTop': `【动作：执行修改】
目标：使用 Ant Design 的 BackTop 组件实现回到顶部。

需求详情：
1. 基础回到顶部
2. 自定义按钮样式
3. 设置可见高度

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 BackTop 组件
- 自定义样式

验收标准：
1. 回到顶部功能正常
2. 按钮样式自定义成功
3. 可见高度控制正常`,

      'Watermark': `【动作：执行修改】
目标：使用 Ant Design 的 Watermark 组件实现水印。

需求详情：
1. 文字水印
2. 多行水印
3. 图片水印

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Watermark 组件
- 配置水印样式

验收标准：
1. 水印显示正常
2. 覆盖整个区域
3. 样式自定义正常`,

      'Tour': `【动作：执行修改】
目标：使用 Ant Design 的 Tour 组件实现漫游式引导。

需求详情：
1. 基础漫游引导
2. 多步骤引导
3. 自定义步骤内容

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 Tour 组件
- 管理引导状态

验收标准：
1. 引导步骤显示正常
2. 目标元素高亮正确
3. 导航按钮功能正常`,
    }

    return prompts[componentName] || `【动作：执行修改】
目标：使用 Ant Design 的 ${componentName} 组件实现功能。

需求详情：
1. 基础 ${componentName} 组件
2. 添加交互功能
3. 自定义样式

技术要求：
- 使用 React + TypeScript
- 使用 Ant Design 的 ${componentName} 组件
- 实现完整功能

验收标准：
1. 组件显示正常
2. 功能完整
3. 样式美观`
  }

  const handleCopy = async () => {
    const prompt = generatePrompt()
    try {
      await navigator.clipboard.writeText(prompt)
      setCopied(true)
      message.success('提示词已复制到剪贴板！')
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      message.error('复制失败，请手动复制')
    }
  }

  return (
    <Tooltip title={copied ? '已复制！' : '复制 AI 提示词'}>
      <Button
        type="link"
        size="small"
        icon={copied ? <CheckOutlined style={{ color: '#52c41a' }} /> : <CopyOutlined />}
        onClick={handleCopy}
        style={{ marginLeft: 8 }}
      >
        {copied ? '已复制' : '复制提示词'}
      </Button>
    </Tooltip>
  )
}

export default CopyPromptButton
