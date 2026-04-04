import { useState, useRef } from 'react'
import {
  Affix,
  Watermark,
  Tour,
  Button,
  Card,
  Typography,
} from 'antd'
import CopyPromptButton from '../components/CopyPromptButton'

const { Paragraph, Text } = Typography

const OtherDemo: React.FC = () => {
  const [tourOpen, setTourOpen] = useState(false)
  const [tourCurrent, setTourCurrent] = useState(0)

  const card1Ref = useRef<HTMLDivElement>(null)
  const card2Ref = useRef<HTMLDivElement>(null)
  const card3Ref = useRef<HTMLDivElement>(null)

  const tourSteps: any = [
    {
      title: '欢迎使用',
      description: '这是 Frontend Components Skill 展示项目',
      target: () => card1Ref.current,
      nextButtonProps: { children: '下一步' },
    },
    {
      title: '功能丰富',
      description: '包含 51 个常用前端组件的完整展示',
      target: () => card2Ref.current,
      prevButtonProps: { children: '上一步' },
      nextButtonProps: { children: '下一步' },
    },
    {
      title: '易于使用',
      description: '基于 Ant Design，开箱即用',
      target: () => card3Ref.current,
      prevButtonProps: { children: '上一步' },
      nextButtonProps: { children: '完成', type: 'primary' },
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
          <Affix offsetTop={10}>
            <Button type="primary">固定在顶部 10px</Button>
          </Affix>
          <div style={{ height: 200 }} />
        </div>
      </div>

      {/* Watermark 水印 */}
      <div className="demo-section">
        <h2>2. Watermark 水印<CopyPromptButton componentName="Watermark" componentType="other" /></h2>
        <div className="demo-item">
          <Watermark content="Frontend Skill" zIndex={1}>
            <div style={{ height: 200, background: '#f5f5f5', padding: 16 }}>
              <p>图片水印</p>
            </div>
          </Watermark>
          <div style={{ height: 16 }} />
          <Watermark content="Frontend Skill" zIndex={1} font={{ color: '#1890ff' }}>
            <div style={{ height: 200, background: '#f5f5f5', padding: 16 }}>
              <p>自定义样式的水印</p>
            </div>
          </Watermark>
        </div>
      </div>

      {/* Tour 漫游式引导 */}
      <div className="demo-section">
        <h2>3. Tour 漫游式引导<CopyPromptButton componentName="Tour" componentType="other" /></h2>
        <div className="demo-item">
          <Button
            type="primary"
            onClick={() => {
              // 延迟打开 Tour，确保 DOM 已准备好
              setTimeout(() => setTourOpen(true), 100)
            }}
          >
            开始漫游引导
          </Button>

          <div style={{ marginTop: 24 }}>
            <div ref={card1Ref}>
              <Card title="卡片 1" style={{ marginBottom: 16 }}>
                <Paragraph>
                  <Text strong>欢迎使用</Text>
                  <br />
                  这是 Frontend Components Skill 展示项目
                </Paragraph>
              </Card>
            </div>

            <div ref={card2Ref}>
              <Card title="卡片 2" style={{ marginBottom: 16 }}>
                <Paragraph>
                  <Text strong>功能丰富</Text>
                  <br />
                  包含 51 个常用前端组件的完整展示
                </Paragraph>
              </Card>
            </div>

            <div ref={card3Ref}>
              <Card title="卡片 3">
                <Paragraph>
                  <Text strong>易于使用</Text>
                  <br />
                  基于 Ant Design，开箱即用
                </Paragraph>
              </Card>
            </div>
          </div>

          <Tour
            open={tourOpen}
            onClose={handleTourClose}
            current={tourCurrent}
            onChange={setTourCurrent}
            steps={tourSteps}
            mask
            zIndex={9999}
          />
        </div>
      </div>

      {/* 说明 */}
      <div className="demo-section">
        <h2>组件说明</h2>
        <div className="demo-item">
          <Card>
            <Paragraph>
              <Text strong>Tour 漫游式引导</Text>：用于向用户展示产品功能或操作流程的组件。
              通过逐步高亮指定元素，引导用户了解产品功能。
            </Paragraph>
            <Paragraph>
              <Text strong>主要特性：</Text>
            </Paragraph>
            <ul>
              <li>支持多步骤引导</li>
              <li>可高亮指定元素</li>
              <li>支持自定义内容</li>
              <li>响应式设计</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default OtherDemo
