# Select 选择器组件 Skill

> 下拉选择器，支持单选、多选、搜索、远程加载等功能

---

## 🎯 触发条件

当用户提到以下关键词时调用：
- 选择器、Select、下拉选择
- 下拉菜单、Dropdown Select
- 多选框、标签选择
- 级联选择、Cascader
- 远程搜索、异步选择

---

## 📋 功能描述

### 基础功能
- 单选/多选
- 下拉选项
- 默认选中
- 禁用选项

### 高级功能
- 搜索过滤
- 远程加载
- 虚拟滚动（大数据量）
- 分组显示
- 自定义渲染
- 级联选择

---

## 🛠️ 技术方案

### React 生态

| 库 | 特点 | 适用场景 |
|----|------|----------|
| **react-select** | 最流行、功能全 | 各种场景 |
| **Ant Design Select** | 开箱即用 | Ant Design 项目 |
| **MUI Select** | Material Design | MUI 项目 |
| **rc-select** | 底层组件 | 高度定制 |

### Vue 生态

| 库 | 特点 | 适用场景 |
|----|------|----------|
| **Element Plus Select** | 功能完善 | Element Plus 项目 |
| **vue-select** | 轻量 | 简单场景 |

---

## 💻 基础用法

### React + react-select

```bash
npm install react-select
```

```jsx
import Select from 'react-select';

const options = [
  { value: 'apple', label: '苹果' },
  { value: 'banana', label: '香蕉' },
  { value: 'orange', label: '橙子' },
];

function MySelect() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Select
      options={options}
      value={selectedOption}
      onChange={setSelectedOption}
      placeholder="请选择水果"
    />
  );
}
```

### 多选模式

```jsx
<Select
  isMulti
  options={options}
  value={selectedOptions}
  onChange={setSelectedOptions}
/>
```

### Vue + Element Plus

```vue
<template>
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
const options = [
  { value: 'option1', label: '选项1' },
  { value: 'option2', label: '选项2' },
];
</script>
```

---

## 🚀 高级特性

### 1. 远程搜索

```jsx
import AsyncSelect from 'react-select/async';

function AsyncSearchSelect() {
  const loadOptions = (inputValue) => {
    return fetch(`/api/search?q=${inputValue}`)
      .then(res => res.json())
      .then(data => data.map(item => ({
        value: item.id,
        label: item.name,
      })));
  };

  return (
    <AsyncSelect
      cacheOptions
      loadOptions={loadOptions}
      defaultOptions
      placeholder="搜索..."
    />
  );
}
```

### 2. 级联选择

```jsx
import { Cascader } from 'antd';

const options = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [
          { value: 'xihu', label: '西湖' },
        ],
      },
    ],
  },
];

function CascaderSelect() {
  return <Cascader options={options} placeholder="请选择地区" />;
}
```

---

## 💡 最佳实践

### 用户体验
1. **默认提示** - 使用 placeholder 提示用户
2. **搜索优化** - 支持拼音搜索、模糊匹配
3. **空状态** - 无选项时显示友好提示
4. **加载状态** - 远程加载时显示 loading

---

## 📝 提示词模板

### 基础选择器
```markdown
【动作：执行修改】
目标：实现下拉选择器功能。

需求详情：
1. 支持单选
2. 支持下拉搜索
3. 选项从 API 获取
4. 支持清空选择

技术要求：
- 使用 React + react-select
- 远程加载选项
- 防抖搜索

验收标准：
1. 选择器正常显示
2. 搜索过滤正常
3. 远程加载正常
4. 提供完整代码
```
