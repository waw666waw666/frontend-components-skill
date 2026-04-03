# Form 表单组件 Skill

> 数据录入的核心组件，用于收集、验证和提交用户输入

---

## 🎯 触发条件

当用户提到以下关键词时调用：
- 表单、Form
- 表单验证、表单提交
- 输入框、选择器
- 登录表单、注册表单
- 动态表单、多步骤表单

---

## 📋 功能描述

### 基础功能
- 表单布局（水平、垂直、行内）
- 表单控件（Input、Select、Checkbox 等）
- 数据收集和提交
- 表单重置

### 高级功能
- 表单验证（同步/异步）
- 动态表单字段
- 表单联动（字段间依赖）
- 多步骤表单（Wizard）
- 表单草稿（自动保存）
- 嵌套表单（数组字段）

---

## 🛠️ 技术方案

### React 生态

| 库 | 特点 | 适用场景 |
|----|------|----------|
| **React Hook Form** | 性能最好、体积小 | 复杂表单、大量字段 |
| **Formik** | 生态丰富、文档好 | 中小型表单 |
| **Ant Design Form** | 开箱即用 | Ant Design 项目 |
| **React Final Form** | 灵活、可扩展 | 高度定制需求 |

### Vue 生态

| 库 | 特点 | 适用场景 |
|----|------|----------|
| **VeeValidate** | 最流行、功能全 | 各种规模项目 |
| **FormKit** | 现代化、易用 | Vue 3 项目 |
| **Element Plus Form** | 开箱即用 | Element Plus 项目 |

### 验证方案

| 库 | 特点 |
|----|------|
| **Yup** | 声明式、链式 API |
| **Zod** | TypeScript 友好 |
| **Joi** | 功能强大、成熟 |
| **Valibot** | 轻量、模块化 |

---

## 💻 基础用法

### React + React Hook Form + Zod

```bash
npm install react-hook-form @hookform/resolvers zod
```

```jsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  username: z.string().min(2, '用户名至少2个字符'),
  email: z.string().email('请输入有效的邮箱'),
  password: z.string().min(6, '密码至少6个字符'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: '两次输入的密码不一致',
  path: ['confirmPassword'],
});

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    // 提交到后端
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>用户名</label>
        <input {...register('username')} />
        {errors.username && <span>{errors.username.message}</span>}
      </div>

      <div>
        <label>邮箱</label>
        <input type="email" {...register('email')} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label>密码</label>
        <input type="password" {...register('password')} />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <div>
        <label>确认密码</label>
        <input type="password" {...register('confirmPassword')} />
        {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? '提交中...' : '提交'}
      </button>
    </form>
  );
}
```

### Vue + VeeValidate

```bash
npm install vee-validate yup
```

```vue
<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <Field name="username" v-slot="{ field, errors }">
      <input v-bind="field" placeholder="用户名" />
      <span v-if="errors.length">{{ errors[0] }}</span>
    </Field>

    <Field name="email" v-slot="{ field, errors }">
      <input v-bind="field" type="email" placeholder="邮箱" />
      <span v-if="errors.length">{{ errors[0] }}</span>
    </Field>

    <button type="submit">提交</button>
  </Form>
</template>

<script setup>
import { Form, Field } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
  username: yup.string().required('用户名必填').min(2, '至少2个字符'),
  email: yup.string().required('邮箱必填').email('邮箱格式不正确'),
});

const onSubmit = (values) => {
  console.log(values);
};
</script>
```

---

## 🚀 高级特性

### 1. 动态表单字段

```jsx
import { useFieldArray } from 'react-hook-form';

function DynamicForm() {
  const { control, register } = useForm({
    defaultValues: {
      items: [{ name: '', quantity: 1 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  return (
    <form>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input {...register(`items.${index}.name`)} placeholder="商品名" />
          <input {...register(`items.${index}.quantity`)} type="number" />
          <button type="button" onClick={() => remove(index)}>删除</button>
        </div>
      ))}
      <button type="button" onClick={() => append({ name: '', quantity: 1 })}>
        添加商品
      </button>
    </form>
  );
}
```

### 2. 表单联动

```jsx
import { useForm, useWatch } from 'react-hook-form';

function LinkedForm() {
  const { register, control, setValue } = useForm();

  // 监听省份变化
  const province = useWatch({ control, name: 'province' });

  // 省份变化时重置城市
  useEffect(() => {
    setValue('city', '');
  }, [province, setValue]);

  const cityOptions = {
    beijing: ['朝阳区', '海淀区'],
    shanghai: ['浦东新区', '徐汇区'],
  };

  return (
    <form>
      <select {...register('province')}>
        <option value="">选择省份</option>
        <option value="beijing">北京</option>
        <option value="shanghai">上海</option>
      </select>

      <select {...register('city')}>
        <option value="">选择城市</option>
        {cityOptions[province]?.map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
    </form>
  );
}
```

### 3. 多步骤表单

```jsx
import { useForm, FormProvider } from 'react-hook-form';

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const methods = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      console.log('最终数据:', data);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}

        <div>
          {step > 1 && (
            <button type="button" onClick={() => setStep(step - 1)}>
              上一步
            </button>
          )}
          <button type="submit">
            {step === 3 ? '提交' : '下一步'}
          </button>
        </div>
      </form>
    </FormProvider>
  );
}
```

---

## 💡 最佳实践

### 性能优化
1. **使用 React Hook Form** - 非受控组件，减少重渲染
2. **延迟验证** - 使用 `mode: 'onBlur'` 或 `mode: 'onChange'`
3. **字段拆分** - 大表单拆分为多个小表单
4. **虚拟列表** - 大量选择项使用虚拟滚动

### 用户体验
1. **即时反馈** - 输入时实时验证
2. **错误提示** - 清晰显示错误信息和位置
3. **自动保存** - 长表单自动保存草稿
4. **键盘导航** - 支持 Tab 键切换字段

---

## 📝 提示词模板

### 基础表单
```markdown
【动作：执行修改】
目标：实现用户注册表单。

需求详情：
1. 字段：用户名、邮箱、密码、确认密码
2. 表单验证（必填、格式、长度）
3. 错误提示
4. 提交按钮（带加载状态）

技术要求：
- 使用 React + React Hook Form
- 使用 Zod 进行验证
- 响应式布局

验收标准：
1. 所有字段有验证
2. 错误信息清晰显示
3. 提交时显示加载状态
4. 提供完整代码
```

### 动态表单
```markdown
【动作：执行修改】
目标：实现动态添加字段的表单。

需求详情：
1. 可以动态添加/删除表单项
2. 每个项包含：商品名、数量、单价
3. 自动计算总价
4. 验证每个字段

技术要求：
- 使用 React Hook Form 的 useFieldArray
- 实时计算总价
- 支持删除确认

验收标准：
1. 动态增删字段正常
2. 总价实时更新
3. 验证正常工作
4. 提供完整代码
```

### 多步骤表单
```markdown
【动作：执行修改】
目标：实现分步骤填写的表单。

需求详情：
1. 分 3 步：基本信息 → 详细信息 → 确认
2. 每步有独立验证
3. 可以返回上一步修改
4. 最后一步汇总显示
5. 提交后显示结果

技术要求：
- 使用 React Hook Form
- 步骤条显示进度
- 表单数据跨步骤保持

验收标准：
1. 步骤切换流畅
2. 数据不丢失
3. 验证分步进行
4. 提供完整代码
```

---

## 🔗 相关链接

- [React Hook Form 文档](https://react-hook-form.com/)
- [VeeValidate 文档](https://vee-validate.logaretm.com/)
- [Zod 文档](https://zod.dev/)
- [Yup 文档](https://github.com/jquense/yup)
