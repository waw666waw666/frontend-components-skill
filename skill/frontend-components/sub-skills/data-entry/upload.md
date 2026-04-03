# Upload 文件上传组件 Skill

> 用于文件选择和上传，支持单文件、多文件、拖拽上传、图片裁剪等功能

---

## 🎯 触发条件

当用户提到以下关键词时调用：
- 上传、Upload、文件上传、图片上传
- 拖拽上传、批量上传
- 头像上传、图片裁剪
- 大文件上传、断点续传
- 上传进度、上传列表

---

## 📋 功能描述

### 基础功能
- 点击选择文件
- 支持多文件选择
- 文件类型限制
- 文件大小限制
- 上传进度显示

### 高级功能
- 拖拽上传
- 图片预览
- 图片裁剪
- 大文件分片上传
- 断点续传
- 上传列表管理
- 上传到云存储（OSS/S3）

---

## 🛠️ 技术方案

### React 生态

| 库 | 特点 | 适用场景 |
|----|------|----------|
| **react-dropzone** | 拖拽上传专业库 | 拖拽上传场景 |
| **antd Upload** | 功能完善 | Ant Design 项目 |
| **react-uploady** | 现代化、可扩展 | 复杂上传需求 |
| **react-cropper** | 图片裁剪 | 头像上传 |

### Vue 生态

| 库 | 特点 | 适用场景 |
|----|------|----------|
| **Element Plus Upload** | 开箱即用 | Element Plus 项目 |
| **vue-cropper** | 图片裁剪 | 头像裁剪 |
| **ant-design-vue Upload** | 功能完善 | Ant Design Vue |

---

## 💻 基础用法

### React + react-dropzone

```bash
npm install react-dropzone
```

```jsx
import { useDropzone } from 'react-dropzone';

function FileUpload() {
  const onDrop = useCallback((acceptedFiles) => {
    // 处理上传的文件
    const formData = new FormData();
    acceptedFiles.forEach((file) => {
      formData.append('files', file);
    });
    
    // 上传到服务器
    fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
    },
    maxSize: 5 * 1024 * 1024, // 5MB
  });

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>放开以上传文件...</p>
      ) : (
        <p>拖拽文件到这里，或点击选择文件</p>
      )}
    </div>
  );
}
```

### 带进度显示的上传

```jsx
import { useState } from 'react';
import axios from 'axios';

function UploadWithProgress() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('idle');

  const handleUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    setStatus('uploading');

    try {
      await axios.post('/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(percentCompleted);
        },
      });
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => handleUpload(e.target.files[0])}
      />
      {status === 'uploading' && (
        <div className="progress-bar">
          <div style={{ width: `${progress}%` }}>{progress}%</div>
        </div>
      )}
    </div>
  );
}
```

### Vue + Element Plus

```vue
<template>
  <el-upload
    action="/api/upload"
    :on-success="handleSuccess"
    :on-error="handleError"
    :before-upload="beforeUpload"
    :file-list="fileList"
  >
    <el-button type="primary">点击上传</el-button>
  </el-upload>
</template>

<script setup>
import { ref } from 'vue';

const fileList = ref([]);

const beforeUpload = (file) => {
  const isJPG = file.type === 'image/jpeg';
  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isJPG) {
    ElMessage.error('只支持 JPG 格式!');
  }
  if (!isLt2M) {
    ElMessage.error('图片大小不能超过 2MB!');
  }
  return isJPG && isLt2M;
};

const handleSuccess = (response) => {
  ElMessage.success('上传成功!');
};

const handleError = () => {
  ElMessage.error('上传失败!');
};
</script>
```

---

## 🚀 高级特性

### 1. 图片裁剪上传

```jsx
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

function AvatarUpload() {
  const [image, setImage] = useState(null);
  const cropperRef = useRef(null);

  const onCrop = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      // 获取裁剪后的图片（base64）
      const croppedImage = cropper.getCroppedCanvas().toDataURL();
      // 上传到服务器
      uploadAvatar(croppedImage);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files[0];
          const reader = new FileReader();
          reader.onload = () => setImage(reader.result);
          reader.readAsDataURL(file);
        }}
      />
      {image && (
        <Cropper
          ref={cropperRef}
          src={image}
          style={{ height: 400, width: '100%' }}
          aspectRatio={1}
          guides={false}
        />
      )}
      <button onClick={onCrop}>裁剪并上传</button>
    </div>
  );
}
```

### 2. 大文件分片上传

```jsx
function ChunkUpload() {
  const CHUNK_SIZE = 1024 * 1024; // 1MB 一片

  const uploadFile = async (file) => {
    const chunks = Math.ceil(file.size / CHUNK_SIZE);
    const uploadId = generateUploadId(); // 生成唯一上传ID

    for (let i = 0; i < chunks; i++) {
      const start = i * CHUNK_SIZE;
      const end = Math.min(start + CHUNK_SIZE, file.size);
      const chunk = file.slice(start, end);

      const formData = new FormData();
      formData.append('chunk', chunk);
      formData.append('index', i);
      formData.append('total', chunks);
      formData.append('uploadId', uploadId);

      await axios.post('/api/upload-chunk', formData);
    }

    // 合并分片
    await axios.post('/api/merge-chunks', {
      uploadId,
      filename: file.name,
    });
  };

  return <input type="file" onChange={(e) => uploadFile(e.target.files[0])} />;
}
```

### 3. 上传到阿里云 OSS

```jsx
import OSS from 'ali-oss';

function OSSUpload() {
  const client = new OSS({
    region: 'oss-cn-hangzhou',
    accessKeyId: 'your-access-key',
    accessKeySecret: 'your-secret',
    bucket: 'your-bucket',
  });

  const uploadToOSS = async (file) => {
    const result = await client.put(file.name, file);
    console.log('上传成功:', result.url);
    return result.url;
  };

  return <input type="file" onChange={(e) => uploadToOSS(e.target.files[0])} />;
}
```

---

## 💡 最佳实践

### 用户体验
1. **拖拽区域** - 明显的拖拽区域，支持点击和拖拽两种方式
2. **文件预览** - 图片文件显示缩略图，其他文件显示图标
3. **进度反馈** - 实时显示上传进度
4. **错误处理** - 上传失败给出明确错误信息
5. **取消上传** - 支持取消正在上传的文件

### 安全性
1. **文件类型校验** - 前后端都要校验文件类型
2. **文件大小限制** - 防止上传过大文件
3. **文件名处理** - 防止特殊字符和路径遍历
4. **病毒扫描** - 重要场景后端进行病毒扫描

---

## 📝 提示词模板

### 基础文件上传
```markdown
【动作：执行修改】
目标：实现基础文件上传功能。

需求详情：
1. 支持点击选择文件
2. 支持图片预览
3. 显示上传进度
4. 限制文件类型（图片）和大小（5MB）

技术要求：
- 使用 React + react-dropzone
- 上传到后端 API
- 显示上传进度条

验收标准：
1. 可以选择文件
2. 图片有预览
3. 进度条显示正常
4. 提供完整代码
```

### 头像裁剪上传
```markdown
【动作：执行修改】
目标：实现头像裁剪上传功能。

需求详情：
1. 选择图片后显示裁剪框
2. 支持缩放、旋转、移动
3. 固定 1:1 比例
4. 裁剪后上传到服务器
5. 显示上传进度

技术要求：
- 使用 react-cropper
- 圆形裁剪预览
- 支持 JPG/PNG

验收标准：
1. 裁剪功能正常
2. 预览效果正确
3. 上传成功返回 URL
4. 提供完整代码
```

### 大文件分片上传
```markdown
【动作：执行修改】
目标：实现大文件分片上传功能。

需求详情：
1. 支持大文件（>100MB）上传
2. 分片上传，每片 1MB
3. 断点续传功能
4. 上传进度显示
5. 失败重试机制

技术要求：
- 前端分片处理
- 后端合并分片
- 支持暂停/继续

验收标准：
1. 大文件可以上传
2. 断点续传正常
3. 进度显示准确
4. 提供完整代码
```

---

## 🔗 相关链接

- [react-dropzone 文档](https://react-dropzone.js.org/)
- [react-cropper 文档](https://github.com/roadmanfong/react-cropper)
- [阿里云 OSS JavaScript SDK](https://help.aliyun.com/document_detail/64041.html)
