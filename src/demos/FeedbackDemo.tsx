import { useState } from 'react'
import {
  Modal,
  message,
  Drawer,
  Alert,
  notification,
  Popconfirm,
  Popover,
  Progress,
  Result,
  Skeleton,
  Spin,
  Button,
  Space,
  Card,
} from 'antd'
import {
  SmileOutlined,
} from '@ant-design/icons'
import CopyPromptButton from '../components/CopyPromptButton'

const FeedbackDemo: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  const showMessage = (type: 'success' | 'error' | 'info' | 'warning') => {
    switch (type) {
      case 'success':
        message.success('操作成功！')
        break
      case 'error':
        message.error('操作失败！')
        break
      case 'info':
        message.info('这是一条信息提示')
        break
      case 'warning':
        message.warning('这是一条警告提示')
        break
    }
  }

  const openNotification = (type: 'success' | 'info' | 'warning' | 'error') => {
    notification[type]({
      message: '通知标题',
      description: '这是通知的详细描述内容，可以包含更多信息。',
    })
  }

  const startLoading = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 3000)
  }

  const startProgress = () => {
    setProgress(0)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 500)
  }

  return (
    <div className="demo-container">
      <h1>反馈类组件 (11个)</h1>

      {/* Modal 对话框 */}
      <div className="demo-section">
        <h2>1. Modal 对话框<CopyPromptButton componentName="Modal" componentType="feedback" /></h2>
        <div className="demo-item">
          <Space wrap>
            <Button type="primary" onClick={() => setModalOpen(true)}>
              打开基础对话框
            </Button>
            <Button onClick={() => Modal.info({ title: '信息', content: '这是一条信息' })}>
              信息对话框
            </Button>
            <Button onClick={() => Modal.success({ title: '成功', content: '操作成功' })}>
              成功对话框
            </Button>
            <Button onClick={() => Modal.error({ title: '错误', content: '操作失败' })}>
              错误对话框
            </Button>
            <Button onClick={() => Modal.warning({ title: '警告', content: '请注意' })}>
              警告对话框
            </Button>
            <Button onClick={() => Modal.confirm({ title: '确认', content: '确定要删除吗？' })}>
              确认对话框
            </Button>
          </Space>
          <Modal
            title="基础对话框"
            open={modalOpen}
            onOk={() => setModalOpen(false)}
            onCancel={() => setModalOpen(false)}
          >
            <p>这是对话框的内容</p>
          </Modal>
        </div>
      </div>

      {/* Message 消息提示 */}
      <div className="demo-section">
        <h2>2. Message 消息提示<CopyPromptButton componentName="Message" componentType="feedback" /></h2>
        <div className="demo-item">
          <Space wrap>
            <Button onClick={() => showMessage('success')}>成功</Button>
            <Button onClick={() => showMessage('error')}>错误</Button>
            <Button onClick={() => showMessage('info')}>信息</Button>
            <Button onClick={() => showMessage('warning')}>警告</Button>
            <Button onClick={() => message.loading('加载中...', 2)}>加载中</Button>
          </Space>
        </div>
      </div>

      {/* Drawer 抽屉 */}
      <div className="demo-section">
        <h2>3. Drawer 抽屉<CopyPromptButton componentName="Drawer" componentType="feedback" /></h2>
        <div className="demo-item">
          <Space>
            <Button type="primary" onClick={() => setDrawerOpen(true)}>
              打开抽屉
            </Button>
          </Space>
          <Drawer
            title="抽屉标题"
            placement="right"
            onClose={() => setDrawerOpen(false)}
            open={drawerOpen}
          >
            <p>抽屉内容</p>
            <p>可以放置表单或其他内容</p>
          </Drawer>
        </div>
      </div>

      {/* Alert 警告提示 */}
      <div className="demo-section">
        <h2>4. Alert 警告提示<CopyPromptButton componentName="Alert" componentType="feedback" /></h2>
        <div className="demo-item">
          <Space orientation="vertical" style={{ width: '100%' }}>
            <Alert message="成功提示" type="success" showIcon />
            <Alert message="信息提示" type="info" showIcon />
            <Alert message="警告提示" type="warning" showIcon closable />
            <Alert message="错误提示" type="error" showIcon />
            <Alert
              message="带描述的警告"
              description="这是详细的描述内容"
              type="info"
              showIcon
            />
          </Space>
        </div>
      </div>

      {/* Notification 通知提醒框 */}
      <div className="demo-section">
        <h2>5. Notification 通知提醒框<CopyPromptButton componentName="Notification" componentType="feedback" /></h2>
        <div className="demo-item">
          <Space wrap>
            <Button onClick={() => openNotification('success')}>成功通知</Button>
            <Button onClick={() => openNotification('info')}>信息通知</Button>
            <Button onClick={() => openNotification('warning')}>警告通知</Button>
            <Button onClick={() => openNotification('error')}>错误通知</Button>
          </Space>
        </div>
      </div>

      {/* Popconfirm 气泡确认框 */}
      <div className="demo-section">
        <h2>6. Popconfirm 气泡确认框<CopyPromptButton componentName="Popconfirm" componentType="feedback" /></h2>
        <div className="demo-item">
          <Space>
            <Popconfirm
              title="删除确认"
              description="确定要删除这条记录吗？"
              onConfirm={() => message.success('已删除')}
              onCancel={() => message.info('已取消')}
              okText="确定"
              cancelText="取消"
            >
              <Button danger>删除</Button>
            </Popconfirm>
            <Popconfirm title="确认操作吗？">
              <Button type="primary">操作</Button>
            </Popconfirm>
          </Space>
        </div>
      </div>

      {/* Popover 气泡卡片 */}
      <div className="demo-section">
        <h2>7. Popover 气泡卡片<CopyPromptButton componentName="Popover" componentType="feedback" /></h2>
        <div className="demo-item">
          <Space>
            <Popover content={<div>这是气泡内容</div>} title="标题">
              <Button type="primary">悬停查看</Button>
            </Popover>
            <Popover content={<div>更多详细信息...</div>} title="详细信息">
              <Button>查看详情</Button>
            </Popover>
          </Space>
        </div>
      </div>

      {/* Progress 进度条 */}
      <div className="demo-section">
        <h2>8. Progress 进度条<CopyPromptButton componentName="Progress" componentType="feedback" /></h2>
        <div className="demo-item">
          <Space orientation="vertical" style={{ width: '100%' }}>
            <Progress percent={30} />
            <Progress percent={50} status="active" />
            <Progress percent={70} status="exception" />
            <Progress percent={100} />
            <Progress percent={progress} />
            <Button onClick={startProgress}>开始进度</Button>
            <Progress type="circle" percent={75} />
            <Progress type="dashboard" percent={45} />
          </Space>
        </div>
      </div>

      {/* Result 结果页 */}
      <div className="demo-section">
        <h2>9. Result 结果页<CopyPromptButton componentName="Result" componentType="feedback" /></h2>
        <div className="demo-item">
          <Space orientation="vertical" style={{ width: '100%' }}>
            <Result
              status="success"
              title="操作成功"
              subTitle="您的操作已成功完成"
              extra={[
                <Button type="primary" key="console">查看详情</Button>,
                <Button key="buy">返回</Button>,
              ]}
            />
            <Result
              status="error"
              title="操作失败"
              subTitle="请检查您的网络连接"
            />
            <Result
              status="info"
              title="信息提示"
              subTitle="这是一条信息"
            />
            <Result
              status="warning"
              title="警告提示"
              subTitle="请注意此警告"
            />
            <Result
              icon={<SmileOutlined />}
              title="自定义图标"
              subTitle="使用自定义图标"
            />
          </Space>
        </div>
      </div>

      {/* Skeleton 骨架屏 */}
      <div className="demo-section">
        <h2>10. Skeleton 骨架屏<CopyPromptButton componentName="Skeleton" componentType="feedback" /></h2>
        <div className="demo-item">
          <Space orientation="vertical" style={{ width: '100%' }}>
            <Skeleton active />
            <Skeleton avatar paragraph={{ rows: 4 }} active />
            <Skeleton.Button active />
            <Skeleton.Input active />
            <Skeleton.Image active />
          </Space>
        </div>
      </div>

      {/* Spin 加载中 */}
      <div className="demo-section">
        <h2>11. Spin 加载中<CopyPromptButton componentName="Spin" componentType="feedback" /></h2>
        <div className="demo-item">
          <Space orientation="vertical" style={{ width: '100%' }}>
            <Spin />
            <Spin size="large" />
            <Spin tip="加载中..." />
            <Card>
              <Spin spinning={loading}>
                <p>内容区域</p>
                <p>点击按钮开始加载</p>
              </Spin>
            </Card>
            <Button onClick={startLoading}>开始加载 (3秒)</Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default FeedbackDemo
