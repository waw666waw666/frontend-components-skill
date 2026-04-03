# Menu 导航菜单组件 Skill

> 为页面提供导航功能的菜单列表，支持水平、垂直、内嵌等多种模式

---

## 🎯 触发条件

当用户提到以下关键词时调用：
- 菜单、Menu、导航菜单
- 侧边栏、Sidebar
- 导航、Navigation
- 顶部导航、水平菜单
- 垂直菜单、内嵌菜单
- 折叠菜单、递归菜单

---

## 📋 功能描述

### 基础功能
- 水平菜单（顶部导航）
- 垂直菜单（侧边栏）
- 内嵌子菜单
- 菜单项点击跳转
- 当前选中状态

### 高级功能
- 菜单折叠/展开
- 递归渲染（多级菜单）
- 权限控制（根据角色显示）
- 动态菜单（从后端获取）
- 菜单搜索
- 菜单拖拽排序

---

## 🛠️ 技术方案

### React 生态

| 库 | 特点 | 适用场景 |
|----|------|----------|
| **Ant Design Menu** | 功能完善 | Ant Design 项目 |
| **react-router-dom** | 路由集成 | 单页应用导航 |
| **@tanstack/react-router** | 现代化路由 | 新项目 |

### Vue 生态

| 库 | 特点 | 适用场景 |
|----|------|----------|
| **Element Plus Menu** | 开箱即用 | Element Plus 项目 |
| **vue-router** | 路由集成 | Vue 单页应用 |
| **Ant Design Vue Menu** | 企业级 | 企业应用 |

---

## 💻 基础用法

### React + Ant Design

```bash
npm install antd
```

```jsx
import { Menu } from 'antd';
import { HomeOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';

const items = [
  {
    key: '/',
    icon: <HomeOutlined />,
    label: '首页',
  },
  {
    key: '/users',
    icon: <UserOutlined />,
    label: '用户管理',
    children: [
      { key: '/users/list', label: '用户列表' },
      { key: '/users/roles', label: '角色管理' },
    ],
  },
  {
    key: '/settings',
    icon: <SettingOutlined />,
    label: '系统设置',
  },
];

function AppMenu() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Menu
      mode="inline" // vertical | horizontal | inline
      theme="dark"
      selectedKeys={[location.pathname]}
      items={items}
      onClick={({ key }) => navigate(key)}
    />
  );
}
```

### Vue + Element Plus

```vue
<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-vertical"
    :collapse="isCollapse"
    @select="handleSelect"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>导航一</span>
      </template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-sub-menu>
    
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <span>导航二</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const activeIndex = ref(route.path);
const isCollapse = ref(false);

const handleSelect = (index) => {
  router.push(index);
};
</script>
```

---

## 🚀 高级特性

### 1. 递归渲染多级菜单

```jsx
// 递归菜单组件
function RecursiveMenu({ items, level = 0 }) {
  return (
    <>
      {items.map((item) => (
        <div key={item.key} style={{ paddingLeft: level * 16 }}>
          {item.children ? (
            <>
              <div className="menu-item">{item.label}</div>
              <RecursiveMenu items={item.children} level={level + 1} />
            </>
          ) : (
            <div className="menu-item" onClick={() => navigate(item.key)}>
              {item.label}
            </div>
          )}
        </div>
      ))}
    </>
  );
}

// 使用
const menuData = [
  {
    key: 'system',
    label: '系统管理',
    children: [
      {
        key: 'user',
        label: '用户管理',
        children: [
          { key: 'user-list', label: '用户列表' },
          { key: 'user-role', label: '角色管理' },
        ],
      },
    ],
  },
];

<RecursiveMenu items={menuData} />
```

### 2. 权限控制菜单

```jsx
function AuthMenu({ userRoles }) {
  // 根据角色过滤菜单
  const filterMenuByRole = (items, roles) => {
    return items.filter((item) => {
      // 检查当前项是否有权限
      if (item.roles && !item.roles.some((r) => roles.includes(r))) {
        return false;
      }
      // 递归过滤子菜单
      if (item.children) {
        item.children = filterMenuByRole(item.children, roles);
      }
      return true;
    });
  };

  const allMenuItems = [
    { key: '/', label: '首页', roles: ['admin', 'user'] },
    { key: '/admin', label: '管理后台', roles: ['admin'] },
    { key: '/user', label: '个人中心', roles: ['admin', 'user'] },
  ];

  const filteredItems = filterMenuByRole(allMenuItems, userRoles);

  return <Menu items={filteredItems} />;
}
```

### 3. 动态菜单（从后端获取）

```jsx
function DynamicMenu() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try {
      const response = await fetch('/api/menu');
      const data = await response.json();
      // 转换后端数据为菜单格式
      const formattedItems = formatMenuData(data);
      setMenuItems(formattedItems);
    } catch (error) {
      console.error('获取菜单失败:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatMenuData = (data) => {
    return data.map((item) => ({
      key: item.path,
      icon: getIcon(item.icon),
      label: item.name,
      children: item.children ? formatMenuData(item.children) : undefined,
    }));
  };

  if (loading) return <div>加载菜单...</div>;

  return <Menu mode="inline" items={menuItems} />;
}
```

---

## 💡 最佳实践

### 用户体验
1. **当前选中高亮** - 清晰显示当前所在页面
2. **展开状态保持** - 刷新后保持菜单展开状态
3. **折叠按钮** - 提供菜单折叠/展开按钮
4. **面包屑配合** - 菜单与面包屑导航配合使用

### 性能优化
1. **菜单懒加载** - 大量菜单项时虚拟滚动
2. **图标按需加载** - 只加载使用的图标
3. **菜单数据缓存** - 缓存菜单数据避免重复请求

---

## 📝 提示词模板

### 基础导航菜单
```markdown
【动作：执行修改】
目标：实现侧边栏导航菜单。

需求详情：
1. 垂直菜单模式
2. 支持多级嵌套
3. 点击菜单跳转路由
4. 当前页面菜单高亮
5. 支持折叠展开

技术要求：
- 使用 React + Ant Design Menu
- 集成 react-router-dom
- 深色主题

验收标准：
1. 菜单正常显示
2. 点击正确跳转
3. 当前页面高亮
4. 提供完整代码
```

### 权限控制菜单
```markdown
【动作：执行修改】
目标：实现根据角色显示不同菜单。

需求详情：
1. 不同角色看到不同菜单
2. 管理员看到所有菜单
3. 普通用户只看到部分菜单
4. 菜单从后端获取

技术要求：
- 使用 React
- 菜单数据包含 roles 字段
- 根据用户角色过滤菜单

验收标准：
1. 权限过滤正常
2. 菜单正确显示
3. 无权限菜单不显示
4. 提供完整代码
```

---

## 🔗 相关链接

- [Ant Design Menu 文档](https://ant.design/components/menu-cn)
- [Element Plus Menu 文档](https://element-plus.org/zh-CN/component/menu.html)
- [react-router 文档](https://reactrouter.com/)
