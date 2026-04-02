import {
  Row,
  Col,
  Layout,
  Space,
  Divider,
  Button,
} from 'antd'
import CopyPromptButton from '../components/CopyPromptButton'

const { Header, Sider, Content, Footer } = Layout

const LayoutDemo: React.FC = () => {

  return (
    <div className="demo-container">
      <h1>布局类组件 (4个)</h1>

      {/* Grid 栅格 */}
      <div className="demo-section">
        <h2>1. Grid 栅格系统<CopyPromptButton componentName="Grid" componentType="layout" /></h2>
        <div className="demo-item">
          <h4>基础 24 栅格</h4>
          <Row>
            <Col span={24} style={{ background: '#1890ff', color: '#fff', padding: '8px' }}>col-24</Col>
          </Row>
          <Row style={{ marginTop: 8 }}>
            <Col span={12} style={{ background: '#40a9ff', color: '#fff', padding: '8px' }}>col-12</Col>
            <Col span={12} style={{ background: '#69c0ff', color: '#fff', padding: '8px' }}>col-12</Col>
          </Row>
          <Row style={{ marginTop: 8 }}>
            <Col span={8} style={{ background: '#1890ff', color: '#fff', padding: '8px' }}>col-8</Col>
            <Col span={8} style={{ background: '#40a9ff', color: '#fff', padding: '8px' }}>col-8</Col>
            <Col span={8} style={{ background: '#69c0ff', color: '#fff', padding: '8px' }}>col-8</Col>
          </Row>
          <Row style={{ marginTop: 8 }}>
            <Col span={6} style={{ background: '#1890ff', color: '#fff', padding: '8px' }}>col-6</Col>
            <Col span={6} style={{ background: '#40a9ff', color: '#fff', padding: '8px' }}>col-6</Col>
            <Col span={6} style={{ background: '#69c0ff', color: '#fff', padding: '8px' }}>col-6</Col>
            <Col span={6} style={{ background: '#91d5ff', color: '#fff', padding: '8px' }}>col-6</Col>
          </Row>

          <h4 style={{ marginTop: 16 }}>间隔</h4>
          <Row gutter={16}>
            <Col span={6}>
              <div style={{ background: '#1890ff', color: '#fff', padding: '8px' }}>col-6</div>
            </Col>
            <Col span={6}>
              <div style={{ background: '#40a9ff', color: '#fff', padding: '8px' }}>col-6</div>
            </Col>
            <Col span={6}>
              <div style={{ background: '#69c0ff', color: '#fff', padding: '8px' }}>col-6</div>
            </Col>
            <Col span={6}>
              <div style={{ background: '#91d5ff', color: '#fff', padding: '8px' }}>col-6</div>
            </Col>
          </Row>

          <h4 style={{ marginTop: 16 }}>左右偏移</h4>
          <Row>
            <Col span={8} style={{ background: '#1890ff', color: '#fff', padding: '8px' }}>col-8</Col>
            <Col span={8} offset={8} style={{ background: '#40a9ff', color: '#fff', padding: '8px' }}>col-8 offset-8</Col>
          </Row>

          <h4 style={{ marginTop: 16 }}>响应式布局</h4>
          <Row>
            <Col xs={24} sm={12} md={8} lg={6} xl={4} style={{ background: '#1890ff', color: '#fff', padding: '8px' }}>
              响应式
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} xl={4} style={{ background: '#40a9ff', color: '#fff', padding: '8px' }}>
              响应式
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} xl={4} style={{ background: '#69c0ff', color: '#fff', padding: '8px' }}>
              响应式
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} xl={4} style={{ background: '#91d5ff', color: '#fff', padding: '8px' }}>
              响应式
            </Col>
          </Row>
        </div>
      </div>

      {/* Layout 布局 */}
      <div className="demo-section">
        <h2>2. Layout 页面布局<CopyPromptButton componentName="Layout" componentType="layout" /></h2>
        <div className="demo-item">
          <h4>基础布局</h4>
          <Layout style={{ background: '#f0f2f5' }}>
            <Header style={{ background: '#1890ff', color: '#fff', textAlign: 'center' }}>Header</Header>
            <Content style={{ padding: 24, minHeight: 120, background: '#fff' }}>Content</Content>
            <Footer style={{ background: '#001529', color: '#fff', textAlign: 'center' }}>Footer</Footer>
          </Layout>

          <h4 style={{ marginTop: 16 }}>侧边布局</h4>
          <Layout style={{ background: '#f0f2f5' }}>
            <Sider style={{ background: '#001529', color: '#fff', textAlign: 'center', padding: 16 }}>Sider</Sider>
            <Layout>
              <Header style={{ background: '#1890ff', color: '#fff', textAlign: 'center' }}>Header</Header>
              <Content style={{ padding: 24, minHeight: 120, background: '#fff' }}>Content</Content>
              <Footer style={{ background: '#001529', color: '#fff', textAlign: 'center' }}>Footer</Footer>
            </Layout>
          </Layout>

          <h4 style={{ marginTop: 16 }}>顶部-侧边布局</h4>
          <Layout style={{ background: '#f0f2f5' }}>
            <Header style={{ background: '#1890ff', color: '#fff', textAlign: 'center' }}>Header</Header>
            <Layout>
              <Sider style={{ background: '#001529', color: '#fff', textAlign: 'center', padding: 16 }}>Sider</Sider>
              <Content style={{ padding: 24, minHeight: 120, background: '#fff' }}>Content</Content>
            </Layout>
          </Layout>
        </div>
      </div>

      {/* Space 间距 */}
      <div className="demo-section">
        <h2>3. Space 间距<CopyPromptButton componentName="Space" componentType="layout" /></h2>
        <div className="demo-item">
          <h4>基础用法</h4>
          <Space>
            <Button type="primary">按钮 1</Button>
            <Button>按钮 2</Button>
            <Button>按钮 3</Button>
          </Space>

          <h4 style={{ marginTop: 16 }}>垂直间距</h4>
          <Space orientation="vertical">
            <Button type="primary">按钮 1</Button>
            <Button>按钮 2</Button>
            <Button>按钮 3</Button>
          </Space>

          <h4 style={{ marginTop: 16 }}>自定义间距大小</h4>
          <Space size="small">
            <Button type="primary">小间距</Button>
            <Button>小间距</Button>
          </Space>
          <br />
          <Space size="middle" style={{ marginTop: 8 }}>
            <Button type="primary">中间距</Button>
            <Button>中间距</Button>
          </Space>
          <br />
          <Space size="large" style={{ marginTop: 8 }}>
            <Button type="primary">大间距</Button>
            <Button>大间距</Button>
          </Space>
          <br />
          <Space size={32} style={{ marginTop: 8 }}>
            <Button type="primary">32px 间距</Button>
            <Button>32px 间距</Button>
          </Space>

          <h4 style={{ marginTop: 16 }}>自动换行</h4>
          <Space wrap>
            {Array.from({ length: 20 }, (_, i) => (
              <Button key={i}>按钮 {i + 1}</Button>
            ))}
          </Space>

          <h4 style={{ marginTop: 16 }}>对齐方式</h4>
          <Space align="start">
            <Button type="primary">start</Button>
            <div style={{ height: 50, background: '#f0f0f0', padding: 8 }}>高元素</div>
          </Space>
          <br />
          <Space align="center" style={{ marginTop: 8 }}>
            <Button type="primary">center</Button>
            <div style={{ height: 50, background: '#f0f0f0', padding: 8 }}>高元素</div>
          </Space>
          <br />
          <Space align="end" style={{ marginTop: 8 }}>
            <Button type="primary">end</Button>
            <div style={{ height: 50, background: '#f0f0f0', padding: 8 }}>高元素</div>
          </Space>
        </div>
      </div>

      {/* Divider 分割线 */}
      <div className="demo-section">
        <h2>4. Divider 分割线<CopyPromptButton componentName="Divider" componentType="layout" /></h2>
        <div className="demo-item">
          <h4>水平分割线</h4>
          <p>这是一段文字</p>
          <Divider />
          <p>这是另一段文字</p>

          <h4 style={{ marginTop: 16 }}>带文字的分割线</h4>
          <Divider>文字</Divider>
          <Divider>左对齐</Divider>
          <Divider>右对齐</Divider>
          <Divider>左边距为 0</Divider>

          <h4 style={{ marginTop: 16 }}>虚线</h4>
          <Divider dashed>虚线</Divider>

          <h4 style={{ marginTop: 16 }}>垂直分割线</h4>
          <div>
            文字 <Divider type="vertical" /> 文字 <Divider type="vertical" /> 文字
          </div>

          <h4 style={{ marginTop: 16 }}>不同样式</h4>
          <Divider style={{ borderColor: '#7cb305' }}>绿色分割线</Divider>
          <Divider style={{ borderColor: '#ff4d4f' }}>红色分割线</Divider>
        </div>
      </div>
    </div>
  )
}

export default LayoutDemo
