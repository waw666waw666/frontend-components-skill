import { useState, useRef } from 'react'
import {
  Affix,
  Watermark,
  Tour,
  Button,
  Card,
  Typography,
  Space,
} from 'antd'
import CopyPromptButton from '../components/CopyPromptButton'

const { Title, Paragraph, Text } = Typography

const OtherDemo: React.FC = () => {
  const [tourOpen, setTourOpen] = useState(false)
  const [tourCurrent, setTourCurrent] = useState(0)
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)

  const tourSteps = [
    {
      title: '欢迎使用',
      description: '这是 Frontend Components Skill 展示项目',
      target: () => ref1.current,
    },
    {
      title: '功能丰富',
      description: '包含 51 个常用前端组件的完整展示',
      target: () => ref2.current,
    },
    {
      title: '易于使用',
      description: '基于 Ant Design，开箱即用',
      target: () => ref3.current,
    },
  ]

  const handleTourClose = () => {
    setTourOpen(false)
    setTourCurrent(0)
  }

  return (
    <div className="demo-container">
      <h1>其他功能类组件 (4个)</h1>

      {/* Affix 固钉 */}
      <div className="demo-section">
        <h2>1. Affix 固钉<CopyPromptButton componentName="Affix" componentType="other" /></h2>
        <div className="demo-item">
          <h4>基础用法</h4>
          <Affix offsetTop={10}>
            <Button type="primary">固定在顶部 (offsetTop: 10)</Button>
          </Affix>
          <div style={{ height: 200, background: '#f0f0f0', marginTop: 16, padding: 16 }}>
            滚动页面查看效果
          </div>

          <h4 style={{ marginTop: 16 }}>固定在底部</h4>
          <div style={{ height: 100, background: '#f0f0f0', marginBottom: 16, padding: 16 }}>
            滚动页面查看效果
          </div>
          <Affix offsetBottom={10}>
            <Button>固定在底部 (offsetBottom: 10)</Button>
          </Affix>
        </div>
      </div>

      {/* BackTop 回到顶部 */}
      <div className="demo-section">
        <h2>2. BackTop 回到顶部<CopyPromptButton componentName="BackTop" componentType="other" /></h2>
        <div className="demo-item">
          <p>页面已全局集成 BackTop 回到顶部按钮，位于右下角。滚动页面时会出现。</p>
          <Card>
            <Title level={4}>功能说明</Title>
            <Paragraph>
              <ul>
                <li>默认位置：页面右下角</li>
                <li>触发条件：滚动高度超过 400px 时显示</li>
                <li>点击按钮可快速回到页面顶部</li>
              </ul>
            </Paragraph>
            <Title level={4}>代码示例</Title>
            <pre style={{ background: '#f5f5f5', padding: 16, borderRadius: 8 }}>
{`<BackTop style={{ right: 24, bottom: 24 }} />
`}
            </pre>
          </Card>
        </div>
      </div>

      {/* Watermark 水印 */}
      <div className="demo-section">
        <h2>3. Watermark 水印<CopyPromptButton componentName="Watermark" componentType="other" /></h2>
        <div className="demo-item">
          <h4>基础水印</h4>
          <Watermark content="Ant Design">
            <div style={{ height: 200, background: '#f0f0f0', padding: 16 }}>
              <p>这是一段内容</p>
              <p>页面上会有水印覆盖</p>
            </div>
          </Watermark>

          <h4 style={{ marginTop: 16 }}>多行水印</h4>
          <Watermark content={['Ant Design', 'Happy Coding']}>
            <div style={{ height: 200, background: '#f0f0f0', padding: 16 }}>
              <p>多行水印内容</p>
            </div>
          </Watermark>

          <h4 style={{ marginTop: 16 }}>自定义样式</h4>
          <Watermark
            content="机密文件"
            font={{ color: 'red', fontSize: 20 }}
            rotate={-30}
            gap={[50, 50]}
          >
            <div style={{ height: 200, background: '#f0f0f0', padding: 16 }}>
              <p>自定义样式的水印</p>
            </div>
          </Watermark>

          <h4 style={{ marginTop: 16 }}>图片水印</h4>
          <Watermark
            height={30}
            width={130}
            content=""
            image="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbySc0YAAAAAAAAAAAAADrJ8AQ/original"
          >
            <div style={{ height: 200, background: '#f0f0f0', padding: 16 }}>
              <p>图片水印</p>
            </div>
          </Watermark>
        </div>
      </div>

      {/* Tour 漫游式引导 */}
      <div className="demo-section">
        <h2>4. Tour 漫游式引导<CopyPromptButton componentName="Tour" componentType="other" /></h2>
        <div className="demo-item">
          <Button type="primary" onClick={() => setTourOpen(true)}>
            开始漫游引导
          </Button>

          <div style={{ marginTop: 24 }}>
            <Card ref={ref1} title="卡片 1" style={{ marginBottom: 16 }}>
              <Paragraph>
                <Text strong>欢迎使用</Text>
                <br />
                这是 Frontend Components Skill 展示项目
              </Paragraph>
            </Card>

            <Card ref={ref2} title="卡片 2" style={{ marginBottom: 16 }}>
              <Paragraph>
                <Text strong>功能丰富</Text>
                <br />
                包含 51 个常用前端组件的完整展示
              </Paragraph>
            </Card>

            <Card ref={ref3} title="卡片 3">
              <Paragraph>
                <Text strong>易于使用</Text>
                <br />
                基于 Ant Design，开箱即用
              </Paragraph>
            </Card>
          </div>

          <Tour
            open={tourOpen}
            onClose={handleTourClose}
            current={tourCurrent}
            onChange={(current) => setTourCurrent(current)}
            steps={tourSteps}
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
        </div>
      </div>

      {/* 说明 */}
      <div className="demo-section">
        <h2>组件说明</h2>
        <div className="demo-item">
          <Card>
            <Title level={4}>其他功能类组件</Title>
            <Paragraph>
              <ul>
                <li>
                  <Text strong>Affix 固钉</Text>：将页面元素固定在可视区域，常用于导航栏
                </li>
                <li>
                  <Text strong>BackTop 回到顶部</Text>：返回页面顶部的操作按钮
                </li>
                <li>
                  <Text strong>Watermark 水印</Text>：为页面或区域添加水印，用于版权保护
                </li>
                <li>
                  <Text strong>Tour 漫游式引导</Text>：用于引导用户了解产品功能的新手引导
                </li>
              </ul>
            </Paragraph>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default OtherDemo
