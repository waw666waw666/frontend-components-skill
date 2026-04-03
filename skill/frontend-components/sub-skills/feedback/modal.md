# Modal 对话框组件 Skill

> 在当前页面打开浮层，承载相关操作或提示信息

---

## 🎯 触发条件

当用户提到以下关键词时调用：
- 弹窗、Modal、对话框
- 确认框、提示框
- 弹层、浮层
- 新增弹窗、编辑弹窗
- 详情弹窗

---

## 📋 功能描述

### 基础功能
- 信息提示
- 确认操作
- 表单提交
- 详情展示

### 高级功能
- 拖拽移动
- 调整大小
- 多层嵌套
- 全屏模式
- 侧边抽屉（Drawer）

---

## 🛠️ 技术方案

### React 生态

| 库 | 特点 | 适用场景 |
|----|------|----------|
| **Radix Dialog** | 无样式、可访问性好 | 自定义UI |
| **Headless UI** | Tailwind 官方 | Tailwind 项目 |
| **Ant Design Modal** | 开箱即用 | Ant Design 项目 |
| **MUI Dialog** | Material Design | MUI 项目 |
| **React-Modal** | 简单易用 | 快速开发 |

### Vue 生态

| 库 | 特点 | 适用场景 |
|----|------|----------|
| **Element Plus Dialog** | 功能完善 | Element Plus 项目 |
| **Ant Design Vue Modal** | 企业级 | 企业应用 |
| **Naive UI Modal** | 现代化 | Vue 3 项目 |

---

## 💻 基础用法

### React + Radix Dialog

```bash
npm install @radix-ui/react-dialog
```

```jsx
import * as Dialog from '@radix-ui/react-dialog';

function MyModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button>打开弹窗</button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="modal-overlay" />
        <Dialog.Content className="modal-content">
          <Dialog.Title>弹窗标题</Dialog.Title>
          <Dialog.Description>弹窗描述内容</Dialog.Description>
          
          <div>弹窗内容...</div>
          
          <Dialog.Close asChild>
            <button>关闭</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
```

### Vue + Element Plus

```vue
<template>
  <el-button @click="dialogVisible = true">打开弹窗</el-button>
  
  <el-dialog
    v-model="dialogVisible"
    title="弹窗标题"
    width="500px"
  >
    <span>弹窗内容</span>
    <template #footer>
      <el-button @click="dialogVisible = false">取消</el-button>
      <el-button type="primary" @click="handleConfirm">确认</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from 'vue';
const dialogVisible = ref(false);

const handleConfirm = () => {
  console.log('确认');
  dialogVisible.value = false;
};
</script>
```

---

## 🚀 高级特性

### 1. 确认对话框

```jsx
function ConfirmModal({ isOpen, onConfirm, onCancel, title, content }) {
  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="modal-overlay" />
        <Dialog.Content className="modal-content confirm-modal">
          <Dialog.Title>{title}</Dialog.Title>
          <p>{content}</p>
          <div className="modal-actions">
            <button onClick={onCancel}>取消</button>
            <button onClick={onConfirm} className="danger">确认</button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

// 使用
const handleDelete = () => {
  if (confirm('确定要删除吗？')) {
    deleteItem();
  }
};
```

### 2. 表单弹窗

```jsx
function FormModal({ isOpen, onClose, onSubmit, initialData }) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: initialData,
  });

  // 关闭时重置表单
  useEffect(() => {
    if (!isOpen) reset();
  }, [isOpen, reset]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="modal-overlay" />
        <Dialog.Content className="modal-content">
          <Dialog.Title>{initialData ? '编辑' : '新增'}</Dialog.Title>
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('name')} placeholder="名称" />
            <input {...register('email')} placeholder="邮箱" />
            
            <div className="modal-actions">
              <button type="button" onClick={onClose}>取消</button>
              <button type="submit">保存</button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
```

### 3. 抽屉组件（Drawer）

```jsx
function Drawer({ isOpen, onClose, title, children }) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="drawer-overlay" />
        <Dialog.Content className="drawer-content">
          <div className="drawer-header">
            <Dialog.Title>{title}</Dialog.Title>
            <button onClick={onClose}>✕</button>
          </div>
          <div className="drawer-body">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
```

---

## 💡 最佳实践

### 用户体验
1. **关闭方式** - 支持点击遮罩、ESC键、关闭按钮
2. **聚焦管理** - 打开时聚焦第一个输入框
3. **滚动锁定** - 打开时禁止背景滚动
4. **动画过渡** - 打开/关闭有平滑动画

### 可访问性
1. **ARIA 属性** - 正确使用 role="dialog"
2. **焦点陷阱** - Tab 键在弹窗内循环
3. **屏幕阅读器** - 正确朗读标题和内容

---

## 📝 提示词模板

### 基础弹窗
```markdown
【动作：执行修改】
目标：实现基础对话框组件。

需求详情：
1. 点击按钮打开弹窗
2. 显示标题和内容
3. 支持关闭按钮和点击遮罩关闭
4. 打开/关闭有动画效果

技术要求：
- 使用 React + Radix Dialog
- 支持 ESC 键关闭
- 打开时锁定背景滚动

验收标准：
1. 弹窗正常打开和关闭
2. 动画流畅
3. 可访问性良好
4. 提供完整代码
```

### 确认对话框
```markdown
【动作：执行修改】
目标：实现确认操作对话框。

需求详情：
1. 显示警告图标和确认信息
2. 确认按钮（红色）和取消按钮
3. 点击确认执行删除操作
4. 操作成功后关闭并提示

技术要求：
- 使用 React + Radix Dialog
- 支持异步操作
- 按钮有加载状态

验收标准：
1. 确认后执行操作
2. 异步操作有加载状态
3. 操作成功有反馈
4. 提供完整代码
```

### 表单弹窗
```markdown
【动作：执行修改】
目标：实现带表单的对话框。

需求详情：
1. 新增/编辑共用同一个弹窗
2. 表单字段：名称、描述、状态
3. 表单验证
4. 提交后关闭弹窗并刷新列表

技术要求：
- 使用 React Hook Form
- 集成到表格组件
- 支持初始数据回填

验收标准：
1. 新增和编辑都正常
2. 表单验证工作
3. 数据正确提交
4. 提供完整代码
```

---

## 🔗 相关链接

- [Radix Dialog 文档](https://www.radix-ui.com/primitives/docs/components/dialog)
- [Headless UI Dialog](https://headlessui.com/react/dialog)
- [Ant Design Modal](https://ant.design/components/modal-cn)
