# Drawer 抽屉组件 Skill

> 从屏幕边缘滑出的浮层面板，用于展示详情或进行表单操作

---

## 🎯 触发条件

当用户提到以下关键词时调用：
- 抽屉、Drawer、侧边栏
- 侧滑、滑出面板
- 详情抽屉、编辑抽屉
- 右侧抽屉、左侧抽屉

---

## 📋 功能描述

### 基础功能
- 从四边滑出（上/下/左/右）
- 显示标题和内容
- 关闭按钮
- 点击遮罩关闭

### 高级功能
- 多层抽屉
- 自定义宽度/高度
- 底部操作栏
- 表单抽屉
- 详情展示

---

## 🛠️ 技术方案

### React 生态

| 库 | 特点 | 适用场景 |
|----|------|----------|
| **Ant Design Drawer** | 功能完善 | Ant Design 项目 |
| **MUI Drawer** | Material Design | MUI 项目 |
| **vaul** | 现代化、美观 | 移动端优先 |

### Vue 生态

| 库 | 特点 | 适用场景 |
|----|------|----------|
| **Element Plus Drawer** | 开箱即用 | Element Plus 项目 |
| **Ant Design Vue Drawer** | 企业级 | 企业应用 |

---

## 💻 基础用法

### React + Ant Design

```bash
npm install antd
```

```jsx
import { Drawer, Button } from 'antd';
import { useState } from 'react';

function MyDrawer() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        打开抽屉
      </Button>
      <Drawer title="基本信息" onClose={onClose} open={open}>
        <p>内容...</p>
      </Drawer>
    </>
  );
}
```

### Vue + Element Plus

```vue
<template>
  <el-button @click="drawer = true">打开抽屉</el-button>
  
  <el-drawer
    v-model="drawer"
    title="我是标题"
    direction="rtl"
    size="50%"
  >
    <span>内容区域</span>
  </el-drawer>
</template>

<script setup>
import { ref } from 'vue';
const drawer = ref(false);
</script>
```

---

## 🚀 高级特性

### 1. 表单抽屉

```jsx
import { Drawer, Form, Input, Button } from 'antd';

function FormDrawer({ open, onClose, onSubmit, initialValues }) {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    const values = await form.validateFields();
    onSubmit(values);
    form.resetFields();
  };

  return (
    <Drawer
      title="编辑信息"
      width={500}
      onClose={onClose}
      open={open}
      footer={
        <div style={{ textAlign: 'right' }}>
          <Button onClick={onClose} style={{ marginRight: 8 }}>
            取消
          </Button>
          <Button onClick={handleSubmit} type="primary">
            保存
          </Button>
        </div>
      }
    >
      <Form form={form} layout="vertical" initialValues={initialValues}>
        <Form.Item name="name" label="姓名" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="邮箱" rules={[{ required: true, type: 'email' }]}>
          <Input />
        </Form.Item>
      </Form>
    </Drawer>
  );
}
```

### 2. 详情抽屉

```jsx
import { Drawer, Descriptions } from 'antd';

function DetailDrawer({ open, onClose, data }) {
  return (
    <Drawer title="详情信息" width={600} onClose={onClose} open={open}>
      <Descriptions column={1}>
        <Descriptions.Item label="姓名">{data.name}</Descriptions.Item>
        <Descriptions.Item label="邮箱">{data.email}</Descriptions.Item>
        <Descriptions.Item label="电话">{data.phone}</Descriptions.Item>
        <Descriptions.Item label="地址">{data.address}</Descriptions.Item>
      </Descriptions>
    </Drawer>
  );
}
```

---

## 💡 最佳实践

### 用户体验
1. **宽度设置** - 表单 400-500px，详情 600-800px
2. **关闭方式** - 支持关闭按钮、点击遮罩、ESC键
3. **表单抽屉** - 底部固定操作按钮
4. **多层抽屉** - 最多两层，避免过深

### 使用场景
1. **表单编辑** - 新增/编辑数据
2. **详情展示** - 查看详细信息
3. **筛选面板** - 高级筛选条件
4. **设置面板** - 系统设置

---

## 📝 提示词模板

### 基础抽屉
```markdown
【动作：执行修改】
目标：实现抽屉组件功能。

需求详情：
1. 点击按钮打开抽屉
2. 从右侧滑出
3. 显示标题和关闭按钮
4. 点击遮罩可关闭

技术要求：
- 使用 React + Ant Design Drawer
- 宽度 500px
- 动画流畅

验收标准：
1. 抽屉正常打开/关闭
2. 动画效果流畅
3. 关闭方式正常
4. 提供完整代码
```

### 表单抽屉
```markdown
【动作：执行修改】
目标：实现表单抽屉功能。

需求详情：
1. 点击编辑打开抽屉
2. 抽屉内显示表单
3. 表单字段：姓名、邮箱、电话
4. 底部有保存/取消按钮
5. 保存后关闭抽屉并刷新列表

技术要求：
- 使用 Ant Design Drawer + Form
- 表单验证
- 底部固定按钮栏

验收标准：
1. 表单正常显示
2. 验证正常工作
3. 保存后正确关闭
4. 提供完整代码
```
