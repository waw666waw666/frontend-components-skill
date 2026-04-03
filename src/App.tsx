import { useState } from 'react'
import { Layout, Menu, Typography, Drawer, Button, FloatButton } from 'antd'
import {
  FormOutlined,
  TableOutlined,
  NotificationOutlined,
  MenuOutlined,
  LayoutOutlined,
  AppstoreOutlined,
  DragOutlined,
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

  const menuItems = [
    { key: 'data-entry', icon: <FormOutlined />, label: '数据录入 (10个)' },
    { key: 'data-display', icon: <TableOutlined />, label: '数据展示 (15个)' },
    { key: 'feedback', icon: <NotificationOutlined />, label: '反馈 (11个)' },
    { key: 'navigation', icon: <MenuOutlined />, label: '导航 (7个)' },
    { key: 'layout', icon: <LayoutOutlined />, label: '布局 (4个)' },
    { key: 'other', icon: <AppstoreOutlined />, label: '其他 (4个)' },
    { key: 'drag-sort', icon: <DragOutlined />, label: '拖动排序 (7个)' },
  ]

  const handleMenuClick = (key: string) => {
    setSelectedCategory(key)
    setDrawerOpen(false)
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
            type="primary"
            icon={<MenuOutlined />}
            onClick={() => setDrawerOpen(true)}
          >
            菜单
          </Button>
          <Title level={3} style={{ margin: 0, flex: 1 }}>
            🎨 Frontend Components Skill 展示项目
          </Title>
        </Header>
        <Content style={{ padding: 24, overflow: 'auto' }}>
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

        <FloatButton.BackTop style={{ right: 24, bottom: 24 }} />
      </Layout>
    </>
  )
}

export default App
