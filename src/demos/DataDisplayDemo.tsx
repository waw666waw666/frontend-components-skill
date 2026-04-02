import React, { useState } from 'react'
import {
  Table,
  Card,
  Tree,
  List,
  Calendar,
  Descriptions,
  Empty,
  Image,
  Carousel,
  Collapse,
  Statistic,
  QRCode,
  Badge,
  Tag,
  Timeline,
  Space,
  Row,
  Col,
  Avatar,
} from 'antd'
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  UserOutlined,
} from '@ant-design/icons'
import CopyPromptButton from '../components/CopyPromptButton'

const { Meta } = Card
const { Panel } = Collapse

const DataDisplayDemo: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

  // Table 数据
  const tableColumns = [
    { title: '姓名', dataIndex: 'name', key: 'name' },
    { title: '年龄', dataIndex: 'age', key: 'age' },
    { title: '地址', dataIndex: 'address', key: 'address' },
  ]
  const tableData = [
    { key: '1', name: '张三', age: 32, address: '北京市朝阳区' },
    { key: '2', name: '李四', age: 28, address: '上海市浦东新区' },
    { key: '3', name: '王五', age: 35, address: '广州市天河区' },
  ]

  // Tree 数据
  const treeData = [
    {
      title: '父节点 1',
      key: '0-0',
      children: [
        { title: '子节点 1-1', key: '0-0-0' },
        { title: '子节点 1-2', key: '0-0-1' },
      ],
    },
    {
      title: '父节点 2',
      key: '0-1',
      children: [
        { title: '子节点 2-1', key: '0-1-0' },
      ],
    },
  ]

  // List 数据
  const listData = [
    { title: '标题 1', description: '这是描述 1' },
    { title: '标题 2', description: '这是描述 2' },
    { title: '标题 3', description: '这是描述 3' },
  ]

  return (
    <div className="demo-container">
      <h1>数据展示类组件 (15个)</h1>

      {/* Table 表格 */}
      <div className="demo-section">
        <h2>1. Table 表格<CopyPromptButton componentName="Table" componentType="data-display" /></h2>
        <div className="demo-item">
          <Table
            rowSelection={{
              selectedRowKeys,
              onChange: setSelectedRowKeys,
            }}
            columns={tableColumns}
            dataSource={tableData}
          />
        </div>
      </div>

      {/* Card 卡片 */}
      <div className="demo-section">
        <h2>2. Card 卡片<CopyPromptButton componentName="Card" componentType="data-display" /></h2>
        <div className="demo-item">
          <Row gutter={16}>
            <Col span={8}>
              <Card title="基础卡片" extra={<a href="#">更多</a>}>
                <p>卡片内容</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                hoverable
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta title="带图片的卡片" description="www.example.com" />
              </Card>
            </Col>
            <Col span={8}>
              <Card loading title="加载中">
                内容
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* Tree 树形控件 */}
      <div className="demo-section">
        <h2>3. Tree 树形控件<CopyPromptButton componentName="Tree" componentType="data-display" /></h2>
        <div className="demo-item">
          <Tree checkable defaultExpandedKeys={['0-0']} treeData={treeData} />
        </div>
      </div>

      {/* List 列表 */}
      <div className="demo-section">
        <h2>4. List 列表<CopyPromptButton componentName="List" componentType="data-display" /></h2>
        <div className="demo-item">
          <List
            header={<div>列表头部</div>}
            footer={<div>列表底部</div>}
            bordered
            dataSource={listData}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar icon={<UserOutlined />} />}
                  title={item.title}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </div>
      </div>

      {/* Calendar 日历 */}
      <div className="demo-section">
        <h2>5. Calendar 日历<CopyPromptButton componentName="Calendar" componentType="data-display" /></h2>
        <div className="demo-item">
          <Calendar fullscreen={false} />
        </div>
      </div>

      {/* Descriptions 描述列表 */}
      <div className="demo-section">
        <h2>6. Descriptions 描述列表<CopyPromptButton componentName="Descriptions" componentType="data-display" /></h2>
        <div className="demo-item">
          <Descriptions title="用户信息" bordered>
            <Descriptions.Item label="姓名">张三</Descriptions.Item>
            <Descriptions.Item label="电话">13800138000</Descriptions.Item>
            <Descriptions.Item label="地址">北京市朝阳区</Descriptions.Item>
            <Descriptions.Item label="备注">无</Descriptions.Item>
          </Descriptions>
        </div>
      </div>

      {/* Empty 空状态 */}
      <div className="demo-section">
        <h2>7. Empty 空状态<CopyPromptButton componentName="Empty" componentType="data-display" /></h2>
        <div className="demo-item">
          <Empty description="暂无数据" />
        </div>
      </div>

      {/* Image 图片 */}
      <div className="demo-section">
        <h2>8. Image 图片<CopyPromptButton componentName="Image" componentType="data-display" /></h2>
        <div className="demo-item">
          <Image.PreviewGroup>
            <Space>
              <Image width={100} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
              <Image width={100} src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />
            </Space>
          </Image.PreviewGroup>
        </div>
      </div>

      {/* Carousel 轮播图 */}
      <div className="demo-section">
        <h2>9. Carousel 轮播图<CopyPromptButton componentName="Carousel" componentType="data-display" /></h2>
        <div className="demo-item">
          <Carousel autoplay style={{ background: '#364d79', color: '#fff' }}>
            <div style={{ height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <h3>1</h3>
            </div>
            <div style={{ height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <h3>2</h3>
            </div>
            <div style={{ height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <h3>3</h3>
            </div>
          </Carousel>
        </div>
      </div>

      {/* Collapse 折叠面板 */}
      <div className="demo-section">
        <h2>10. Collapse 折叠面板<CopyPromptButton componentName="Collapse" componentType="data-display" /></h2>
        <div className="demo-item">
          <Collapse defaultActiveKey={['1']}>
            <Panel header="面板 1" key="1">
              <p>这是面板 1 的内容</p>
            </Panel>
            <Panel header="面板 2" key="2">
              <p>这是面板 2 的内容</p>
            </Panel>
          </Collapse>
        </div>
      </div>

      {/* Statistic 统计数值 */}
      <div className="demo-section">
        <h2>11. Statistic 统计数值<CopyPromptButton componentName="Statistic" componentType="data-display" /></h2>
        <div className="demo-item">
          <Row gutter={16}>
            <Col span={6}>
              <Statistic title="活跃用户" value={112893} />
            </Col>
            <Col span={6}>
              <Statistic title="销售额" value={112893} prefix="¥" />
            </Col>
            <Col span={6}>
              <Statistic title="增长率" value={11.28} suffix="%" />
            </Col>
            <Col span={6}>
              <Statistic.Countdown title="倒计时" value={Date.now() + 1000 * 60 * 60 * 24} />
            </Col>
          </Row>
        </div>
      </div>

      {/* QRCode 二维码 */}
      <div className="demo-section">
        <h2>12. QRCode 二维码<CopyPromptButton componentName="QRCode" componentType="data-display" /></h2>
        <div className="demo-item">
          <Space>
            <QRCode value="https://ant.design" />
            <QRCode value="https://ant.design" status="loading" />
            <QRCode value="https://ant.design" status="expired" />
          </Space>
        </div>
      </div>

      {/* Badge 徽标 */}
      <div className="demo-section">
        <h2>13. Badge 徽标<CopyPromptButton componentName="Badge" componentType="data-display" /></h2>
        <div className="demo-item">
          <Space>
            <Badge count={5}>
              <Avatar shape="square" size="large" />
            </Badge>
            <Badge count={0} showZero>
              <Avatar shape="square" size="large" />
            </Badge>
            <Badge dot>
              <Avatar shape="square" size="large" />
            </Badge>
            <Badge count={99} overflowCount={10}>
              <Avatar shape="square" size="large" />
            </Badge>
          </Space>
        </div>
      </div>

      {/* Tag 标签 */}
      <div className="demo-section">
        <h2>14. Tag 标签<CopyPromptButton componentName="Tag" componentType="data-display" /></h2>
        <div className="demo-item">
          <Space wrap size="small">
            <Tag>默认标签</Tag>
            <Tag color="magenta">洋红</Tag>
            <Tag color="red">红色</Tag>
            <Tag color="volcano">火山</Tag>
            <Tag color="orange">橙色</Tag>
            <Tag color="gold">金色</Tag>
            <Tag color="green">绿色</Tag>
            <Tag color="cyan">青色</Tag>
            <Tag color="blue">蓝色</Tag>
            <Tag color="geekblue">极客蓝</Tag>
            <Tag color="purple">紫色</Tag>
            <Tag closable>可关闭</Tag>
          </Space>
        </div>
      </div>

      {/* Timeline 时间轴 */}
      <div className="demo-section">
        <h2>15. Timeline 时间轴<CopyPromptButton componentName="Timeline" componentType="data-display" /></h2>
        <div className="demo-item">
          <Timeline
            items={[
              {
                children: '创建项目 2024-01-01',
                dot: <CheckCircleOutlined style={{ color: 'green' }} />,
              },
              {
                children: '开发阶段 2024-02-01',
                dot: <ClockCircleOutlined style={{ color: 'blue' }} />,
              },
              {
                children: '测试阶段 2024-03-01',
                dot: <ExclamationCircleOutlined style={{ color: 'orange' }} />,
              },
              {
                children: '上线发布 2024-04-01',
                dot: <CloseCircleOutlined style={{ color: 'red' }} />,
              },
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default DataDisplayDemo
