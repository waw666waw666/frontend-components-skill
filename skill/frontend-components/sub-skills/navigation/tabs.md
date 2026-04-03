# Tabs 标签页组件 Skill

> 用于在同一区域切换显示不同内容，支持横向、纵向等多种模式

---

## 🎯 触发条件

当用户提到以下关键词时调用：
- 标签页、Tabs、Tab
- 选项卡、切换卡
- 标签切换、内容切换
- 可关闭标签、动态标签

---

## 📋 功能描述

### 基础功能
- 横向标签页
- 纵向标签页
- 点击切换内容
- 当前标签高亮

### 高级功能
- 可关闭标签
- 动态添加/删除标签
- 标签拖拽排序
- 懒加载内容
- 标签图标

---

## 🛠️ 技术方案

### React 生态

| 库 | 特点 | 适用场景 |
|----|------|----------|
| **Ant Design Tabs** | 功能完善 | Ant Design 项目 |
| **MUI Tabs** | Material Design | MUI 项目 |
| **radix-tabs** | 无样式、可定制 | 自定义UI |

### Vue 生态

| 库 | 特点 | 适用场景 |
|----|------|----------|
| **Element Plus Tabs** | 开箱即用 | Element Plus 项目 |
| **Ant Design Vue Tabs** | 企业级 | 企业应用 |

---

## 💻 基础用法

### React + Ant Design

```bash
npm install antd
```

```jsx
import { Tabs } from 'antd';

const items = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];

function MyTabs() {
  const onChange = (key) => {
    console.log(key);
  };

  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
}
```

### Vue + Element Plus

```vue
<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="User" name="first">User</el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
  </el-tabs>
</template>

<script setup>
import { ref } from 'vue';

const activeName = ref('first');

const handleClick = (tab) => {
  console.log(tab.props.name);
};
</script>
```

---

## 🚀 高级特性

### 1. 可关闭标签

```jsx
import { Tabs } from 'antd';
import { useState } from 'react';

function ClosableTabs() {
  const [items, setItems] = useState([
    { key: '1', label: 'Tab 1', children: 'Content 1' },
    { key: '2', label: 'Tab 2', children: 'Content 2' },
  ]);

  const onEdit = (targetKey, action) => {
    if (action === 'add') {
      const newKey = String(items.length + 1);
      setItems([
        ...items,
        { key: newKey, label: `Tab ${newKey}`, children: `Content ${newKey}` },
      ]);
    } else {
      setItems(items.filter(item => item.key !== targetKey));
    }
  };

  return (
    <Tabs
      type="editable-card"
      items={items}
      onEdit={onEdit}
    />
  );
}
```

### 2. 懒加载

```jsx
import { Tabs } from 'antd';

function LazyTabs() {
  return (
    <Tabs>
      <Tabs.TabPane tab="Tab 1" key="1">
        {activeKey === '1' && <HeavyComponent1 />}
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tab 2" key="2" forceRender>
        <HeavyComponent2 />
      </Tabs.TabPane>
    </Tabs>
  );
}
```

---

## 💡 最佳实践

### 用户体验
1. **默认激活** - 默认激活第一个或最重要的标签
2. **状态保持** - 切换标签时保持表单状态
3. **响应式** - 标签过多时支持滚动或下拉
4. **图标辅助** - 使用图标增强识别度

### 使用场景
1. **内容分类** - 同一页面不同分类内容
2. **表单分组** - 长表单分组填写
3. **多文档** - 类似浏览器的多标签
4. **设置页面** - 不同设置分类

---

## 📝 提示词模板

### 基础标签页
```markdown
【动作：执行修改】
目标：实现标签页切换功能。

需求详情：
1. 3 个标签：基本信息/详细信息/设置
2. 点击切换内容
3. 当前标签高亮
4. 内容区域懒加载

技术要求：
- 使用 React + Ant Design Tabs
- 切换时保持状态
- 动画过渡效果

验收标准：
1. 标签切换正常
2. 内容正确显示
3. 状态保持正确
4. 提供完整代码
```
