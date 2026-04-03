# Message 消息提示组件 Skill

> 全局展示操作反馈信息，提供成功、警告、错误等提示

---

## 🎯 触发条件

当用户提到以下关键词时调用：
- 消息提示、Message、Toast
- 成功提示、错误提示、警告提示
- 通知消息、操作反馈
- 轻提示、全局提示

---

## 📋 功能描述

### 基础功能
- 成功提示（Success）
- 错误提示（Error）
- 警告提示（Warning）
- 信息提示（Info）
- 加载提示（Loading）

### 高级功能
- 自定义持续时间
- 自定义图标
- 自定义内容（支持 HTML）
- 消息队列管理
- 关闭回调
- 全局配置（默认持续时间、最大数量）

---

## 🛠️ 技术方案

### React 生态

| 库 | 特点 | 适用场景 |
|----|------|----------|
| **react-hot-toast** | 现代化、动画流畅 | 新项目首选 |
| **react-toastify** | 功能丰富、成熟稳定 | 各种规模项目 |
| **sonner** | 美观、体验好 | 追求视觉效果 |
| **antd Message** | 与 Ant Design 集成 | Ant Design 项目 |

### Vue 生态

| 库 | 特点 | 适用场景 |
|----|------|----------|
| **Element Plus Message** | 开箱即用 | Element Plus 项目 |
| **vue-toastification** | 功能丰富 | Vue 3 项目 |
| **Ant Design Vue Message** | 企业级 | 企业应用 |

---

## 💻 基础用法

### React + react-hot-toast

```bash
npm install react-hot-toast
```

```jsx
import { Toaster, toast } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Toaster position="top-center" />
      <button onClick={() => toast.success('操作成功！')}>
        显示成功消息
      </button>
      <button onClick={() => toast.error('操作失败！')}>
        显示错误消息
      </button>
    </div>
  );
}
```

### 不同类型的消息

```jsx
// 成功
toast.success('保存成功！');

// 错误
toast.error('保存失败，请重试！');

// 警告
toast('请注意，这是一条警告', {
  icon: '⚠️',
});

// 加载中
const loadingToast = toast.loading('正在保存...');

// 更新消息
toast.success('保存成功！', {
  id: loadingToast,
});

// 自定义持续时间
toast.success('3秒后消失', {
  duration: 3000,
});

// 不自动关闭
toast('点击关闭', {
  duration: Infinity,
});
```

### Promise 自动处理

```jsx
const saveData = () => fetch('/api/save', { method: 'POST' });

// 自动显示 loading、success、error
toast.promise(
  saveData(),
  {
    loading: '正在保存...',
    success: '保存成功！',
    error: '保存失败',
  }
);
```

### Vue + Element Plus

```vue
<template>
  <el-button @click="showSuccess">成功</el-button>
  <el-button @click="showError">错误</el-button>
  <el-button @click="showLoading">加载</el-button>
</template>

<script setup>
import { ElMessage, ElMessageBox } from 'element-plus';

const showSuccess = () => {
  ElMessage.success('操作成功！');
};

const showError = () => {
  ElMessage.error('操作失败！');
};

const showLoading = async () => {
  const loading = ElMessage({
    message: '正在加载...',
    type: 'info',
    duration: 0,
  });
  
  await fetchData();
  
  loading.close();
  ElMessage.success('加载完成！');
};
</script>
```

---

## 🚀 高级特性

### 1. 自定义消息内容

```jsx
import toast from 'react-hot-toast';

toast.custom((t) => (
  <div
    className={`${t.visible ? 'animate-enter' : 'animate-leave'} bg-white shadow-lg rounded-lg p-4`}
  >
    <div className="flex items-center gap-3">
      <span className="text-2xl">🎉</span>
      <div>
        <h4 className="font-bold">恭喜！</h4>
        <p className="text-gray-600">你完成了所有任务</p>
      </div>
      <button onClick={() => toast.dismiss(t.id)}>✕</button>
    </div>
  </div>
));
```

### 2. 全局配置

```jsx
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // 默认配置
        className: '',
        duration: 3000,
        style: {
          background: '#363636',
          color: '#fff',
        },
        // 不同类型配置
        success: {
          duration: 3000,
          theme: {
            primary: 'green',
            secondary: 'black',
          },
        },
      }}
    />
  );
}
```

### 3. 消息队列管理

```jsx
// 移除所有消息
toast.remove();

// 移除特定消息
toast.remove(toastId);

// 检查消息是否可见
toast.visible(toastId);

// 暂停消息计时
toast.pause(toastId);

// 恢复消息计时
toast.resume(toastId);
```

---

## 💡 最佳实践

### 用户体验
1. **位置合理** - 通常放在顶部中央或右上角
2. **持续时间** - 成功 2-3 秒，错误可稍长或需手动关闭
3. **避免堆叠** - 限制同时显示的消息数量
4. **操作反馈** - 用户操作后立即给出反馈

### 使用场景
1. **成功提示** - 保存、提交、删除成功
2. **错误提示** - 网络错误、验证失败
3. **警告提示** - 需要用户注意但不阻断操作
4. **加载提示** - 长时间操作时显示

---

## 📝 提示词模板

### 基础消息提示
```markdown
【动作：执行修改】
目标：实现全局消息提示功能。

需求详情：
1. 成功、错误、警告三种类型
2. 顶部中央显示
3. 自动关闭（2秒）
4. 支持手动关闭

技术要求：
- 使用 React + react-hot-toast
- 全局配置默认参数
- 支持自定义持续时间

验收标准：
1. 三种类型消息正常显示
2. 动画流畅
3. 可以全局调用
4. 提供完整代码
```

### 异步操作反馈
```markdown
【动作：执行修改】
目标：实现异步操作的消息反馈。

需求详情：
1. 请求开始时显示 loading
2. 成功时显示成功消息
3. 失败时显示错误消息
4. 自动处理 Promise

技术要求：
- 使用 react-hot-toast 的 promise API
- 显示请求进度
- 错误时显示详细信息

验收标准：
1. loading 状态正确显示
2. 成功/失败自动切换
3. 错误信息清晰
4. 提供完整代码
```

---

## 🔗 相关链接

- [react-hot-toast 文档](https://react-hot-toast.com/)
- [react-toastify 文档](https://fkhadra.github.io/react-toastify/introduction)
- [sonner 文档](https://sonner.emilkowal.ski/)
