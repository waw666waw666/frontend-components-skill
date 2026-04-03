# Table 表格组件 Skill

> 数据展示的核心组件，用于展示行列数据，支持排序、筛选、分页等功能

---

## 🎯 触发条件

当用户提到以下关键词时调用：
- 表格、Table、数据表格
- 列表展示、数据列表
- 表格排序、表格筛选
- 分页表格、可编辑表格
- 树形表格、嵌套表格

---

## 📋 功能描述

### 基础功能
- 展示行列数据
- 表头固定
- 行选择（单选/多选）
- 行展开（嵌套展示）

### 高级功能
- 排序（单列/多列）
- 筛选（列筛选、全局搜索）
- 分页（前端/后端）
- 编辑（行内编辑、弹窗编辑）
- 树形数据展示
- 虚拟滚动（大数据量）
- 列拖拽调整宽度
- 列固定（左/右）

---

## 🛠️ 技术方案

### React 生态

| 库 | 特点 | 适用场景 |
|----|------|----------|
| **TanStack Table** | 无样式、高度可定制 | 复杂表格、自定义UI |
| **ag-Grid** | 功能最全、企业级 | 企业应用、复杂需求 |
| **Ant Design Table** | 开箱即用、生态完善 | 快速开发、中后台 |
| **MUI DataGrid** | Material Design | MUI 项目 |

### Vue 生态

| 库 | 特点 | 适用场景 |
|----|------|----------|
| **vxe-table** | 功能强大、性能优秀 | 复杂表格、大数据 |
| **Element Plus Table** | 简单易用 | 快速开发 |
| **Ant Design Vue Table** | 功能完善 | 企业应用 |

---

## 💻 基础用法

### React + TanStack Table

```bash
npm install @tanstack/react-table
```

```jsx
import { useReactTable, getCoreRowModel } from '@tanstack/react-table';

function BasicTable() {
  const data = [
    { id: 1, name: '张三', age: 28, email: 'zhangsan@example.com' },
    { id: 2, name: '李四', age: 32, email: 'lisi@example.com' },
  ];

  const columns = [
    { accessorKey: 'name', header: '姓名' },
    { accessorKey: 'age', header: '年龄' },
    { accessorKey: 'email', header: '邮箱' },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {header.column.columnDef.header}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>{cell.getValue()}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

### Vue + vxe-table

```bash
npm install vxe-table
```

```vue
<template>
  <vxe-table :data="tableData">
    <vxe-column field="name" title="姓名" />
    <vxe-column field="age" title="年龄" />
    <vxe-column field="email" title="邮箱" />
  </vxe-table>
</template>

<script setup>
const tableData = [
  { id: 1, name: '张三', age: 28, email: 'zhangsan@example.com' },
  { id: 2, name: '李四', age: 32, email: 'lisi@example.com' },
];
</script>
```

---

## 🚀 高级特性

### 1. 排序功能

```jsx
import { getSortedRowModel } from '@tanstack/react-table';

const table = useReactTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(), // 添加排序
  state: { sorting: [{ id: 'age', desc: true }] },
  onSortingChange: setSorting,
});
```

### 2. 分页功能

```jsx
import { getPaginationRowModel } from '@tanstack/react-table';

const table = useReactTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  initialState: { pagination: { pageSize: 10 } },
});

// 分页控件
<div>
  <button onClick={() => table.previousPage()}>上一页</button>
  <span>第 {table.getState().pagination.pageIndex + 1} 页</span>
  <button onClick={() => table.nextPage()}>下一页</button>
</div>
```

### 3. 行选择

```jsx
import { getFilteredRowModel } from '@tanstack/react-table';

const columns = [
  {
    id: 'select',
    header: ({ table }) => (
      <input
        type="checkbox"
        checked={table.getIsAllRowsSelected()}
        onChange={table.getToggleAllRowsSelectedHandler()}
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        checked={row.getIsSelected()}
        onChange={row.getToggleSelectedHandler()}
      />
    ),
  },
  // ...其他列
];
```

### 4. 虚拟滚动（大数据量）

```jsx
import { useVirtualizer } from '@tanstack/react-virtual';

function VirtualTable() {
  const { rows } = table.getRowModel();
  
  const virtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => 35,
  });

  return (
    <div ref={tableContainerRef} style={{ height: '400px', overflow: 'auto' }}>
      <div style={{ height: `${virtualizer.getTotalSize()}px` }}>
        {virtualizer.getVirtualItems().map(virtualRow => (
          <div key={virtualRow.key} style={{ height: `${virtualRow.size}px` }}>
            {rows[virtualRow.index].getVisibleCells().map(cell => (
              <span key={cell.id}>{cell.getValue()}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

## 💡 最佳实践

### 性能优化
1. **使用虚拟滚动** - 数据量超过 1000 条时启用
2. **分页加载** - 大数据量使用后端分页
3. **memo 优化** - 使用 React.memo 避免不必要渲染
4. **列宽度固定** - 避免布局抖动

### 用户体验
1. **加载状态** - 数据加载时显示骨架屏
2. **空状态** - 无数据时显示友好提示
3. **响应式** - 移动端横向滚动或卡片式展示
4. **操作反馈** - 删除、编辑后给出提示

---

## 📝 提示词模板

### 基础表格
```markdown
【动作：执行修改】
目标：实现基础数据表格展示功能。

需求详情：
1. 展示行列数据（姓名、年龄、邮箱、状态）
2. 表头固定
3. 数据从 API 获取
4. 加载状态显示

技术要求：
- 使用 React + TanStack Table
- 支持响应式布局
- 空状态友好提示

验收标准：
1. 表格正常展示数据
2. 加载时有骨架屏
3. 无数据时显示空状态
4. 提供完整代码
```

### 高级表格（排序+筛选+分页）
```markdown
【动作：执行修改】
目标：实现功能完整的数据表格。

需求详情：
1. 数据展示（10+ 列）
2. 列排序（点击表头排序）
3. 列筛选（下拉筛选）
4. 分页功能（每页 20 条）
5. 行选择（多选）
6. 批量操作（删除、导出）

技术要求：
- 使用 React + TanStack Table
- 后端分页、后端排序
- 选中行高亮显示

验收标准：
1. 所有功能正常工作
2. 性能流畅（1000+ 数据）
3. 提供完整代码
```

### 可编辑表格
```markdown
【动作：执行修改】
目标：实现行内编辑的数据表格。

需求详情：
1. 点击单元格进入编辑模式
2. 支持输入框、下拉选择、日期选择
3. 编辑后自动保存或手动保存
4. 新增行、删除行功能
5. 表单验证

技术要求：
- 使用 React + TanStack Table
- 集成 React Hook Form
- 支持撤销/重做

验收标准：
1. 行内编辑流畅
2. 验证错误提示
3. 数据同步更新
4. 提供完整代码
```

---

## 🔗 相关链接

- [TanStack Table 文档](https://tanstack.com/table/latest)
- [vxe-table 文档](https://vxetable.cn/)
- [ag-Grid 文档](https://www.ag-grid.com/)
