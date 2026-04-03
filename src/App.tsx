import { useState, useRef } from 'react'
import { Layout, Menu, Typography, Drawer, Button, Tour, BackTop, Space } from 'antd'
import {
  FormOutlined,
  TableOutlined,
  NotificationOutlined,
  MenuOutlined,
  LayoutOutlined,
  AppstoreOutlined,
  DragOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons'
import DataEntryDemo from './demos/DataEntryDemo'
import DataDisplayDemo from './demos/DataDisplayDemo'
import FeedbackDemo from './demos/FeedbackDemo'
import NavigationDemo from './demos/NavigationDemo'
import LayoutDemo from './demos/LayoutDemo'
import OtherDemo from './demos/OtherDemo'
import DragSortDemo from './demos/DragSortDemo'

const { Header, Content } = Layout
const { Title } = Typography

function App() {
  const [selectedCategory, setSelectedCategory] = useState('data-entry')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [tourOpen, setTourOpen] = useState(false)
  const [tourCurrent, setTourCurrent] = useState(0)

  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const menuItems = [
    { key: 'data-entry', icon: <FormOutlined />, label: '数据录入 (10个)' },
    { key: 'data-display', icon: <TableOutlined />, label: '数据展示 (15个)' },
    { key: 'feedback', icon: <NotificationOutlined />, label: '反馈 (11个)' },
    { key: 'navigation', icon: <MenuOutlined />, label: '导航 (7个)' },
    { key: 'layout', icon: <LayoutOutlined />, label: '布局 (4个)' },
    { key: 'other', icon: <AppstoreOutlined />, label: '其他 (4个)' },
    { key: 'drag-sort', icon: <DragOutlined />, label: '拖动排序 (7个)' },
  ]

  const tourSteps: any = [
    {
      title: '打开菜单',
      description: '点击"菜单"按钮打开组件分类导航抽屉',
      target: () => menuButtonRef.current,
    },
    {
      title: '项目标题',
      description: '这是 Frontend Components Skill 官方演示项目',
      target: () => titleRef.current,
    },
    {
      title: '选择组件',
      description: '从菜单中选择要查看的组件分类，每个分类包含多个组件演示',
      target: null,
    },
    {
      title: '开始探索',
      description: '选择分类后，下方会显示对应的组件演示效果，点击可复制 AI 提示词',
      target: () => contentRef.current,
    },
  ]

  const handleMenuClick = (key: string) => {
    setSelectedCategory(key)
    setDrawerOpen(false)
  }

  const handleTourClose = () => {
    setTourOpen(false)
    setTourCurrent(0)
  }

  const renderContent = () => {
    switch (selectedCategory) {
      case 'data-entry':
        return <DataEntryDemo />
      case 'data-display':
        return <DataDisplayDemo />
      case 'feedback':
        return <FeedbackDemo />
      case 'navigation':
        return <NavigationDemo />
      case 'layout':
        return <LayoutDemo />
      case 'other':
        return <OtherDemo />
      case 'drag-sort':
        return <DragSortDemo />
      default:
        return <DataEntryDemo />
    }
  }

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ background: '#fff', borderBottom: '1px solid #f0f0f0', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
          <Button
            ref={menuButtonRef}
            type="primary"
            icon={<MenuOutlined />}
            onClick={() => setDrawerOpen(true)}
          >
            菜单
          </Button>
          <Title ref={titleRef} level={3} style={{ margin: 0, flex: 1 }}>
            🎨 Frontend Components Skill 展示项目
          </Title>
          <Button
            type="text"
            icon={<QuestionCircleOutlined />}
            onClick={() => setTourOpen(true)}
          >
            使用引导
          </Button>
        </Header>
        <Content ref={contentRef} style={{ padding: '24px', overflow: 'auto' }}>
          {renderContent()}
        </Content>

        <Drawer
          title="组件菜单"
          placement="left"
          onClose={() => setDrawerOpen(false)}
          open={drawerOpen}
          size={280}
        >
          <Menu
            mode="inline"
            selectedKeys={[selectedCategory]}
            items={menuItems}
            onClick={({ key }) => handleMenuClick(key)}
            style={{ borderRight: 0 }}
          />
        </Drawer>

        <BackTop style={{ right: 24, bottom: 24 }} />
      </Layout>

      <Tour
        open={tourOpen}
        onClose={handleTourClose}
        current={tourCurrent}
        onChange={(current) => setTourCurrent(current)}
        steps={tourSteps}
        mask={{ style: { filter: 'blur(2px)' } }}
        getPopupContainer={() => document.body}
        indicatorsRender={(current, total) => (
          <Space>
            <Button 
              size="small" 
              onClick={handleTourClose}
              style={{ marginRight: 8 }}
            >
              退出引导
            </Button>
            <span>
              {current + 1} / {total}
            </span>
            <Button 
              type="primary"
              size="small"
              onClick={() => {
                if (current < total - 1) {
                  setTourCurrent(current + 1)
                } else {
                  handleTourClose()
                }
              }}
            >
              {current < total - 1 ? '下一步' : '完成'}
            </Button>
          </Space>
        )}
      />
    </>
  )
}

export default App
