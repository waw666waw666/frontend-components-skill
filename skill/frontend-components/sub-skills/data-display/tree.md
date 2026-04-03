# Tree 树形组件 Skill

> 用于展示层级结构的数据，支持展开/折叠、选择、拖拽排序等功能

---

## 🎯 触发条件

当用户提到以下关键词时调用：
- 树形、Tree、树组件
- 树形菜单、树形选择
- 组织架构、部门树
- 分类树、目录树
- 树形控件、可勾选树

---

## 📋 功能描述

### 基础功能
- 展开/折叠节点
- 节点选择（单选/多选）
- 节点图标
- 异步加载子节点

### 高级功能
- 节点拖拽排序
- 节点搜索/过滤
- 虚拟滚动（大数据量）
- 节点编辑（重命名、删除）
- 节点右键菜单

---

## 🛠️ 技术方案

### React 生态

| 库 | 特点 | 适用场景 |
|----|------|----------|
| **react-complex-tree** | 功能强大 | 复杂树形需求 |
| **antd Tree** | 开箱即用 | Ant Design 项目 |
| **react-arborist** | 现代化 | 文件树、大纲 |

### Vue 生态

| 库 | 特点 | 适用场景 |
|----|------|----------|
| **Element Plus Tree** | 功能完善 | Element Plus 项目 |
| **vue3-tree** | Vue3 专用 | Vue 3 项目 |

---

## 💻 基础用法

### React + Ant Design

```jsx
import { Tree } from 'antd';

const treeData = [
  {
    title: '父节点1',
    key: '0-0',
    children: [
      {
        title: '子节点1-1',
        key: '0-0-1',
      },
      {
        title: '子节点1-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: '父节点2',
    key: '0-1',
  },
];

function MyTree() {
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  const onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

  return (
    <Tree
      treeData={treeData}
      onSelect={onSelect}
      onCheck={onCheck}
      checkable
      defaultExpandAll
    />
  );
}
```

### Vue + Element Plus

```vue
<template>
  <el-tree
    :data="data"
    show-checkbox
    node-key="id"
    :default-expanded-keys="[2, 3]"
    :default-checked-keys="[5]"
    :props="defaultProps"
  />
</template>

<script setup>
const data = [
  {
    id: 1,
    label: '一级 1',
    children: [
      {
        id: 4,
        label: '二级 1-1',
      },
    ],
  },
  {
    id: 2,
    label: '一级 2',
  },
];

const defaultProps = {
  children: 'children',
  label: 'label',
};
</script>
```

---

## 🚀 高级特性

### 1. 异步加载

```jsx
import { Tree } from 'antd';

function AsyncTree() {
  const onLoadData = ({ key, children }) => {
    if (children) {
      return Promise.resolve();
    }

    return fetch(`/api/tree/${key}`)
      .then(res => res.json())
      .then(data => {
        // 更新树节点数据
      });
  };

  return <Tree loadData={onLoadData} treeData={treeData} />;
}
```

### 2. 可搜索树

```jsx
import { Tree, Input } from 'antd';
import { useState } from 'react';

function SearchableTree() {
  const [searchValue, setSearchValue] = useState('');

  const filterTree = (tree, value) => {
    if (!value) return tree;
    
    return tree.map(node => {
      if (node.title.includes(value)) {
        return node;
      }
      if (node.children) {
        const filtered = filterTree(node.children, value);
        if (filtered.length) {
          return { ...node, children: filtered };
        }
      }
      return null;
    }).filter(Boolean);
  };

  const filteredData = filterTree(treeData, searchValue);

  return (
    <div>
      <Input
        placeholder="搜索节点"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
      <Tree treeData={filteredData} />
    </div>
  );
}
```

---

## 💡 最佳实践

### 用户体验
1. **默认展开** - 默认展开第一级或重要节点
2. **搜索高亮** - 搜索结果高亮显示
3. **选中状态** - 清晰显示当前选中节点
4. **空状态** - 无数据时显示友好提示

### 性能优化
1. **虚拟滚动** - 节点数超过 1000 时使用
2. **异步加载** - 大数据量时分层加载
3. **节点缓存** - 已加载的节点数据缓存

---

## 📝 提示词模板

### 基础树形
```markdown
【动作：执行修改】
目标：实现树形菜单组件。

需求详情：
1. 展示组织架构树
2. 支持展开/折叠
3. 支持节点选择
4. 异步加载子节点

技术要求：
- 使用 React + Ant Design Tree
- 点击节点加载子节点
- 选中节点高亮显示

验收标准：
1. 树形正常显示
2. 异步加载正常
3. 选中状态正确
4. 提供完整代码
```
