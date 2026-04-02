import { useState } from 'react'
import {
  Menu,
  Pagination,
  Steps,
  Tabs,
  Breadcrumb,
  Dropdown,
  Anchor,
  Button,
  Space,
  message,
} from 'antd'
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  DownOutlined,
  UserOutlined,
  HomeOutlined,
} from '@ant-design/icons'
import CopyPromptButton from '../components/CopyPromptButton'

const NavigationDemo: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0)

  const menuItems = [
    { key: 'mail', icon: <MailOutlined />, label: '导航一' },
    { key: 'app', icon: <AppstoreOutlined />, label: '导航二' },
    {
      key: 'sub1',
      icon: <SettingOutlined />,
      label: '导航三 - 子菜单',
      children: [
        { key: '5', label: '选项 1' },
        { key: '6', label: '选项 2' },
        { key: '7', label: '选项 3' },
      ],
    },
  ]

  const stepsItems = [
    { title: '第一步', description: '填写信息' },
    { title: '第二步', description: '验证身份' },
    { title: '第三步', description: '完成注册' },
  ]

  const tabItems = [
    { key: '1', label: '标签页 1', children: '内容 1' },
    { key: '2', label: '标签页 2', children: '内容 2' },
    { key: '3', label: '标签页 3', children: '内容 3' },
  ]

  const dropdownItems = [
    { key: '1', label: '菜单项 1' },
    { key: '2', label: '菜单项 2' },
    { key: '3', label: '菜单项 3', danger: true },
  ]

  const anchorItems = [
    { key: '1', href: '#components-anchor-demo-basic', title: '基础用法' },
    { key: '2', href: '#components-anchor-demo-static', title: '静态位置' },
    { key: '3', href: '#components-anchor-demo-line', title: '线条样式' },
  ]

  return (
    <div className="demo-container">
      <h1>导航类组件 (7个)</h1>

      {/* Menu 导航菜单 */}
      <div className="demo-section">
        <h2>1. Menu 导航菜单<CopyPromptButton componentName="Menu" componentType="navigation" /></h2>
        <div className="demo-item">
          <h4>水平菜单</h4>
          <Menu mode="horizontal" items={menuItems} defaultSelectedKeys={['mail']} />
          <h4 style={{ marginTop: 16 }}>垂直菜单</h4>
          <Menu mode="vertical" items={menuItems} style={{ width: 256 }} />
          <h4 style={{ marginTop: 16 }}>内嵌菜单</h4>
          <Menu mode="inline" items={menuItems} style={{ width: 256 }} />
        </div>
      </div>

      {/* Pagination 分页 */}
      <div className="demo-section">
        <h2>2. Pagination 分页<CopyPromptButton componentName="Pagination" componentType="navigation" /></h2>
        <div className="demo-item">
          <Space orientation="vertical">
            <Pagination defaultCurrent={1} total={50} />
            <Pagination defaultCurrent={1} total={50} showSizeChanger />
            <Pagination defaultCurrent={6} total={500} showQuickJumper />
            <Pagination simple defaultCurrent={2} total={50} />
            <Pagination
              total={85}
              showTotal={(total) => `共 ${total} 条`}
              defaultPageSize={20}
              defaultCurrent={1}
            />
          </Space>
        </div>
      </div>

      {/* Steps 步骤条 */}
      <div className="demo-section">
        <h2>3. Steps 步骤条<CopyPromptButton componentName="Steps" componentType="navigation" /></h2>
        <div className="demo-item">
          <Steps current={currentStep} items={stepsItems} />
          <div style={{ marginTop: 24 }}>
            {currentStep < stepsItems.length - 1 && (
              <Button type="primary" onClick={() => setCurrentStep(currentStep + 1)}>
                下一步
              </Button>
            )}
            {currentStep === stepsItems.length - 1 && (
              <Button type="primary" onClick={() => message.success('完成!')}>
                完成
              </Button>
            )}
            {currentStep > 0 && (
              <Button style={{ margin: '0 8px' }} onClick={() => setCurrentStep(currentStep - 1)}>
                上一步
              </Button>
            )}
          </div>
          <h4 style={{ marginTop: 24 }}>垂直步骤条</h4>
          <Steps orientation="vertical" current={1} items={stepsItems} />
          <h4 style={{ marginTop: 24 }}>小型步骤条</h4>
          <Steps size="small" current={1} items={stepsItems} />
        </div>
      </div>

      {/* Tabs 标签页 */}
      <div className="demo-section">
        <h2>4. Tabs 标签页<CopyPromptButton componentName="Tabs" componentType="navigation" /></h2>
        <div className="demo-item">
          <Tabs items={tabItems} />
          <h4 style={{ marginTop: 16 }}>卡片式标签页</h4>
          <Tabs type="card" items={tabItems} />
          <h4 style={{ marginTop: 16 }}>可编辑标签页</h4>
          <Tabs type="editable-card" items={tabItems} />
        </div>
      </div>

      {/* Breadcrumb 面包屑 */}
      <div className="demo-section">
        <h2>5. Breadcrumb 面包屑<CopyPromptButton componentName="Breadcrumb" componentType="navigation" /></h2>
        <div className="demo-item">
          <Breadcrumb
            items={[
              { title: '首页' },
              { title: '应用中心' },
              { title: '应用列表' },
              { title: '某应用' },
            ]}
          />
          <h4 style={{ marginTop: 16 }}>带图标的面包屑</h4>
          <Breadcrumb
            items={[
              { href: '', title: <HomeOutlined /> },
              { href: '', title: <><UserOutlined /><span>用户</span></> },
              { title: '详情' },
            ]}
          />
          <h4 style={{ marginTop: 16 }}>带下拉菜单的面包屑</h4>
          <Breadcrumb
            items={[
              { title: '首页' },
              {
                title: '应用中心',
                menu: { items: [{ key: '1', label: '应用 1' }, { key: '2', label: '应用 2' }] },
              },
              { title: '应用列表' },
            ]}
          />
        </div>
      </div>

      {/* Dropdown 下拉菜单 */}
      <div className="demo-section">
        <h2>6. Dropdown 下拉菜单<CopyPromptButton componentName="Dropdown" componentType="navigation" /></h2>
        <div className="demo-item">
          <Space wrap>
            <Dropdown menu={{ items: dropdownItems }} placement="bottomLeft">
              <Button>
                左下角 <DownOutlined />
              </Button>
            </Dropdown>
            <Dropdown menu={{ items: dropdownItems }} placement="bottom">
              <Button>
                底部 <DownOutlined />
              </Button>
            </Dropdown>
            <Dropdown menu={{ items: dropdownItems }} placement="bottomRight">
              <Button>
                右下角 <DownOutlined />
              </Button>
            </Dropdown>
          </Space>
          <h4 style={{ marginTop: 16 }}>按钮下拉菜单</h4>
          <Dropdown.Button menu={{ items: dropdownItems }}>下拉菜单</Dropdown.Button>
        </div>
      </div>

      {/* Anchor 锚点 */}
      <div className="demo-section">
        <h2>7. Anchor 锚点<CopyPromptButton componentName="Anchor" componentType="navigation" /></h2>
        <div className="demo-item">
          <Anchor
            direction="horizontal"
            items={anchorItems}
          />
          <h4 style={{ marginTop: 16 }}>垂直锚点</h4>
          <Anchor
            items={anchorItems}
          />
        </div>
      </div>
    </div>
  )
}

export default NavigationDemo
