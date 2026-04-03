# Card 卡片组件 Skill

> 将信息聚合在卡片容器中展示，支持封面、操作按钮、加载状态等功能

---

## 🎯 触发条件

当用户提到以下关键词时调用：
- 卡片、Card
- 信息卡片、商品卡片
- 图片卡片、图文卡片
- 卡片列表、卡片布局

---

## 📋 功能描述

### 基础功能
- 标题和额外操作
- 封面图片
- 内容区域
- 底部操作按钮
- 边框/阴影样式

### 高级功能
- 加载状态
- 可折叠
- 悬停效果
- 网格布局
- 响应式适配

---

## 🛠️ 技术方案

### React 生态

| 库 | 特点 | 适用场景 |
|----|------|----------|
| **Ant Design Card** | 功能完善 | Ant Design 项目 |
| **MUI Card** | Material Design | MUI 项目 |
| **Chakra UI Card** | 简洁易用 | Chakra UI 项目 |

### Vue 生态

| 库 | 特点 | 适用场景 |
|----|------|----------|
| **Element Plus Card** | 开箱即用 | Element Plus 项目 |
| **Ant Design Vue Card** | 企业级 | 企业应用 |

---

## 💻 基础用法

### React + Ant Design

```bash
npm install antd
```

```jsx
import { Card, Button } from 'antd';

function ProductCard() {
  return (
    <Card
      title="商品标题"
      extra={<a href="#">更多</a>}
      cover={<img alt="example" src="https://example.com/image.jpg" />}
      actions={[
        <Button key="buy">购买</Button>,
        <Button key="cart">加入购物车</Button>,
      ]}
    >
      <p>商品描述内容...</p>
      <p>¥ 199.00</p>
    </Card>
  );
}
```

### Vue + Element Plus

```vue
<template>
  <el-card :body-style="{ padding: '0px' }">
    <img src="https://example.com/image.jpg" class="image" />
    <div style="padding: 14px">
      <span>商品标题</span>
      <div class="bottom">
        <time class="time">{{ currentDate }}</time>
        <el-button text class="button">操作按钮</el-button>
      </div>
    </div>
  </el-card>
</template>

<script setup>
import { ref } from 'vue';
const currentDate = ref(new Date());
</script>
```

---

## 🚀 高级特性

### 1. 卡片网格布局

```jsx
import { Card, Row, Col } from 'antd';

function CardGrid() {
  const products = [
    { id: 1, title: '商品1', price: 199 },
    { id: 2, title: '商品2', price: 299 },
    { id: 3, title: '商品3', price: 399 },
  ];

  return (
    <Row gutter={[16, 16]}>
      {products.map(product => (
        <Col span={8} key={product.id}>
          <Card title={product.title}>
            <p>¥ {product.price}</p>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
```

### 2. 加载状态

```jsx
import { Card, Skeleton } from 'antd';

function LoadingCard({ loading }) {
  return (
    <Card loading={loading}>
      <p>卡片内容...</p>
    </Card>
  );
}
```

---

## 💡 最佳实践

### 用户体验
1. **图片比例** - 保持统一的图片比例
2. **文字截断** - 标题和描述过长时截断显示
3. **悬停效果** - 鼠标悬停时有阴影或放大效果
4. **响应式** - 移动端单列，桌面端多列

---

## 📝 提示词模板

### 基础卡片
```markdown
【动作：执行修改】
目标：实现商品卡片展示。

需求详情：
1. 显示商品图片、标题、价格
2. 底部有操作按钮
3. 悬停有阴影效果
4. 响应式网格布局

技术要求：
- 使用 React + Ant Design Card
- 网格布局（桌面3列，平板2列，手机1列）
- 图片懒加载

验收标准：
1. 卡片正常显示
2. 悬停效果流畅
3. 响应式适配
4. 提供完整代码
```
