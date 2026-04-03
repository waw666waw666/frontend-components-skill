# Steps 步骤条组件 Skill

> 引导用户按照流程完成任务的分步导航器，支持水平、垂直等多种方向

---

## 🎯 触发条件

当用户提到以下关键词时调用：
- 步骤条、Steps、Step
- 流程、向导、Wizard
- 分步表单、分步操作
- 进度条、流程引导
- 步骤导航

---

## 📋 功能描述

### 基础功能
- 水平步骤条
- 垂直步骤条
- 步骤状态（等待、进行中、完成、错误）
- 点击切换步骤
- 步骤标题和描述

### 高级功能
- 带图标的步骤
- 可点击切换
- 步骤验证
- 动态步骤
- 迷你版步骤条

---

## 🛠️ 技术方案

### React 生态

| 库 | 特点 | 适用场景 |
|----|------|----------|
| **Ant Design Steps** | 功能完善 | Ant Design 项目 |
| **MUI Stepper** | Material Design | MUI 项目 |
| **react-step-wizard** | 向导式表单 | 复杂表单 |

### Vue 生态

| 库 | 特点 | 适用场景 |
|----|------|----------|
| **Element Plus Steps** | 开箱即用 | Element Plus 项目 |
| **Ant Design Vue Steps** | 企业级 | 企业应用 |

---

## 💻 基础用法

### React + Ant Design

```bash
npm install antd
```

```jsx
import { Steps } from 'antd';
import { UserOutlined, SolutionOutlined, SmileOutlined } from '@ant-design/icons';

const { Step } = Steps;

function MySteps() {
  const [current, setCurrent] = useState(0);

  const steps = [
    {
      title: '第一步',
      description: '填写基本信息',
      icon: <UserOutlined />,
      content: <Step1Form />,
    },
    {
      title: '第二步',
      description: '验证身份',
      icon: <SolutionOutlined />,
      content: <Step2Form />,
    },
    {
      title: '第三步',
      description: '完成注册',
      icon: <SmileOutlined />,
      content: <Step3Success />,
    },
  ];

  return (
    <div>
      <Steps current={current}>
        {steps.map((step, index) => (
          <Step
            key={index}
            title={step.title}
            description={step.description}
            icon={step.icon}
          />
        ))}
      </Steps>

      <div className="steps-content">{steps[current].content}</div>

      <div className="steps-action">
        {current > 0 && (
          <button onClick={() => setCurrent(current - 1)}>上一步</button>
        )}
        {current < steps.length - 1 && (
          <button onClick={() => setCurrent(current + 1)}>下一步</button>
        )}
        {current === steps.length - 1 && (
          <button onClick={() => message.success('完成!')}>完成</button>
        )}
      </div>
    </div>
  );
}
```

### Vue + Element Plus

```vue
<template>
  <el-steps :active="active" finish-status="success">
    <el-step title="步骤 1" description="填写信息" />
    <el-step title="步骤 2" description="验证身份" />
    <el-step title="步骤 3" description="完成注册" />
  </el-steps>

  <div class="step-content">
    <Step1 v-if="active === 0" />
    <Step2 v-if="active === 1" />
    <Step3 v-if="active === 2" />
  </div>

  <el-button @click="prev" :disabled="active === 0">上一步</el-button>
  <el-button @click="next" type="primary">{{ active === 2 ? '完成' : '下一步' }}</el-button>
</template>

<script setup>
import { ref } from 'vue';

const active = ref(0);

const next = () => {
  if (active.value++ > 2) active.value = 0;
};

const prev = () => {
  if (active.value-- < 0) active.value = 0;
};
</script>
```

---

## 🚀 高级特性

### 1. 带验证的步骤条

```jsx
function ValidatedSteps() {
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const validateStep = (step) => {
    const newErrors = {};
    if (step === 0 && !formData.name) {
      newErrors.name = '请输入姓名';
    }
    if (step === 1 && !formData.email) {
      newErrors.email = '请输入邮箱';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(current)) {
      setCurrent(current + 1);
    }
  };

  return (
    <div>
      <Steps current={current} status={errors[current] ? 'error' : 'process'}>
        <Step title="基本信息" />
        <Step title="联系方式" />
        <Step title="确认提交" />
      </Steps>
      {/* 表单内容 */}
    </div>
  );
}
```

### 2. 垂直步骤条

```jsx
<Steps direction="vertical" current={current}>
  <Step title="填写信息" description="请填写基本信息" />
  <Step title="验证身份" description="上传身份证照片" />
  <Step title="完成" description="注册成功" />
</Steps>
```

---

## 💡 最佳实践

### 用户体验
1. **步骤数量** - 通常 3-5 步，过多会分散注意力
2. **可返回** - 允许用户返回修改
3. **保存进度** - 长表单自动保存草稿
4. **明确状态** - 清晰显示当前步骤和完成状态

### 使用场景
1. **注册流程** - 分步收集用户信息
2. **表单提交** - 复杂表单分步填写
3. **购买流程** - 购物车 → 地址 → 支付 → 完成
4. **任务引导** - 新用户引导、功能教程

---

## 📝 提示词模板

### 基础步骤条
```markdown
【动作：执行修改】
目标：实现分步骤表单功能。

需求详情：
1. 3 个步骤：基本信息 → 详细信息 → 确认
2. 每步有独立表单
3. 可以返回上一步修改
4. 最后一步汇总显示
5. 提交后显示成功

技术要求：
- 使用 React + Ant Design Steps
- 表单使用 React Hook Form
- 步骤数据跨步骤保持

验收标准：
1. 步骤切换流畅
2. 数据不丢失
3. 验证分步进行
4. 提供完整代码
```

---

## 🔗 相关链接

- [Ant Design Steps](https://ant.design/components/steps-cn)
- [Element Plus Steps](https://element-plus.org/zh-CN/component/steps.html)
