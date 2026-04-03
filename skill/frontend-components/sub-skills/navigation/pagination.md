# Pagination 分页组件 Skill

> 用于将大量数据分隔成多页展示，支持页码跳转、每页条数切换等功能

---

## 🎯 触发条件

当用户提到以下关键词时调用：
- 分页、Pagination
- 页码、翻页
- 数据分页、列表分页
- 前端分页、后端分页
- 无限滚动、加载更多

---

## 📋 功能描述

### 基础功能
- 页码导航（上一页/下一页）
- 跳转到指定页
- 显示当前页/总页数
- 每页条数切换

### 高级功能
- 简洁模式（只显示上一页/下一页）
- 快速跳转（输入页码跳转）
- 显示总数据量
- 改变每页条数
- 前端分页 vs 后端分页

---

## 🛠️ 技术方案

### React 生态

| 库 | 特点 | 适用场景 |
|----|------|----------|
| **react-paginate** | 轻量、可定制 | 自定义样式 |
| **Ant Design Pagination** | 功能完善 | Ant Design 项目 |
| **MUI Pagination** | Material Design | MUI 项目 |
| **TanStack Table** | 表格内置 | 表格分页 |

### Vue 生态

| 库 | 特点 | 适用场景 |
|----|------|----------|
| **Element Plus Pagination** | 开箱即用 | Element Plus 项目 |
| **vue-awesome-paginate** | 现代化 | Vue 3 项目 |
| **Ant Design Vue Pagination** | 企业级 | 企业应用 |

---

## 💻 基础用法

### React + 自定义分页

```jsx
import { useState } from 'react';

function Pagination({ total, pageSize = 10, current, onChange }) {
  const totalPages = Math.ceil(total / pageSize);
  
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="pagination">
      <button 
        disabled={current === 1}
        onClick={() => onChange(current - 1)}
      >
        上一页
      </button>
      
      {getPageNumbers().map(page => (
        <button
          key={page}
          className={current === page ? 'active' : ''}
          onClick={() => onChange(page)}
        >
          {page}
        </button>
      ))}
      
      <button
        disabled={current === totalPages}
        onClick={() => onChange(current + 1)}
      >
        下一页
      </button>
      
      <span>共 {total} 条</span>
    </div>
  );
}

// 使用
function DataList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const pageSize = 10;

  useEffect(() => {
    fetchData(currentPage, pageSize);
  }, [currentPage]);

  return (
    <div>
      {/* 数据列表 */}
      <Pagination
        total={100}
        pageSize={pageSize}
        current={currentPage}
        onChange={setCurrentPage}
      />
    </div>
  );
}
```

### 后端分页实现

```jsx
function BackendPagination() {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (page, pageSize) => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/data?page=${page}&pageSize=${pageSize}`
      );
      const result = await response.json();
      setData(result.data);
      setPagination({
        current: page,
        pageSize,
        total: result.total,
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page, pageSize) => {
    fetchData(page, pageSize);
  };

  return (
    <div>
      <Table data={data} loading={loading} />
      <Pagination
        {...pagination}
        onChange={handlePageChange}
        showSizeChanger
        showTotal={(total) => `共 ${total} 条`}
      />
    </div>
  );
}
```

### Vue + Element Plus

```vue
<template>
  <div>
    <el-table :data="tableData">
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="age" label="年龄" />
    </el-table>
    
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 50, 100]"
      :total="total"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const currentPage = ref(1);
const pageSize = ref(10);
const total = ref(0);
const tableData = ref([]);

const fetchData = async () => {
  const res = await fetch(
    `/api/list?page=${currentPage.value}&size=${pageSize.value}`
  );
  const data = await res.json();
  tableData.value = data.list;
  total.value = data.total;
};

const handleSizeChange = (val) => {
  pageSize.value = val;
  currentPage.value = 1;
  fetchData();
};

const handleCurrentChange = (val) => {
  currentPage.value = val;
  fetchData();
};

onMounted(fetchData);
</script>
```

---

## 🚀 高级特性

### 1. 前端分页

```jsx
function FrontendPagination({ data, pageSize = 10 }) {
  const [currentPage, setCurrentPage] = useState(1);
  
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, currentPage, pageSize]);

  return (
    <div>
      <List data={paginatedData} />
      <Pagination
        total={data.length}
        pageSize={pageSize}
        current={currentPage}
        onChange={setCurrentPage}
      />
    </div>
  );
}
```

### 2. 无限滚动

```jsx
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';

function InfiniteScroll() {
  const { ref, inView } = useInView();
  
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['items'],
    queryFn: ({ pageParam = 1 }) =>
      fetch(`/api/items?page=${pageParam}`).then(res => res.json()),
    getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <div>
      {data?.pages.map((page, i) => (
        <div key={i}>
          {page.items.map(item => (
            <Item key={item.id} {...item} />
          ))}
        </div>
      ))}
      <div ref={ref}>
        {isFetchingNextPage && '加载更多...'}
      </div>
    </div>
  );
}
```

---

## 💡 最佳实践

### 用户体验
1. **默认页码** - 通常显示 5-7 个页码
2. **快速跳转** - 数据量大时提供输入框跳转
3. **每页条数** - 提供 10/20/50/100 选项
4. **总数量显示** - 显示 "共 X 条"

### 性能优化
1. **后端分页** - 大数据量必须使用后端分页
2. **防抖处理** - 快速切换页码时防抖
3. **缓存数据** - 已加载的页码数据缓存

---

## 📝 提示词模板

### 基础分页
```markdown
【动作：执行修改】
目标：实现列表分页功能。

需求详情：
1. 显示页码导航
2. 上一页/下一页
3. 跳转到指定页
4. 显示总数据量

技术要求：
- 使用 React
- 后端分页接口
- 每页 10 条

验收标准：
1. 分页组件正常显示
2. 切换页码加载数据
3. 页码状态正确
4. 提供完整代码
```

---

## 🔗 相关链接

- [Ant Design Pagination](https://ant.design/components/pagination-cn)
- [Element Plus Pagination](https://element-plus.org/zh-CN/component/pagination.html)
