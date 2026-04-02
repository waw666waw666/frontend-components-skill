import { useState } from 'react'
import {
  Form,
  Input,
  Select,
  DatePicker,
  Switch,
  Slider,
  Rate,
  Checkbox,
  Radio,
  Upload,
  Button,
  Transfer,
  Space,
  message,
  Card,
  Divider,
  Tag,
  Tooltip,
} from 'antd'
import { UploadOutlined, SearchOutlined, UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons'
import type { UploadFile } from 'antd/es/upload/interface'
import CopyPromptButton from '../components/CopyPromptButton'

const { Option } = Select
const { RangePicker } = DatePicker

const DataEntryDemo: React.FC = () => {
  const [form] = Form.useForm()
  const [transferTargetKeys, setTransferTargetKeys] = useState<string[]>(['1', '2'])
  const [fileList, setFileList] = useState<UploadFile[]>([])
  const [uploading, setUploading] = useState(false)
  const [switchLoading, setSwitchLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [sliderValue, setSliderValue] = useState(30)
  const [rateValue, setRateValue] = useState(3)
  const [checkboxValue, setCheckboxValue] = useState<string[]>(['苹果'])
  const [radioValue, setRadioValue] = useState('a')

  const transferData = [
    { key: '1', title: '选项 1', description: '这是选项 1' },
    { key: '2', title: '选项 2', description: '这是选项 2' },
    { key: '3', title: '选项 3', description: '这是选项 3' },
    { key: '4', title: '选项 4', description: '这是选项 4' },
    { key: '5', title: '选项 5', description: '这是选项 5' },
  ]

  const onFinish = (values: any) => {
    console.log('表单值:', values)
    message.success('表单提交成功！')
  }

  const onFinishFailed = (errorInfo: any) => {
    message.error('表单验证失败，请检查输入')
    console.log('Failed:', errorInfo)
  }

  const handleUpload = () => {
    setUploading(true)
    setTimeout(() => {
      setUploading(false)
      message.success('文件上传成功！')
      setFileList([])
    }, 2000)
  }

  const handleSwitchChange = (checked: boolean) => {
    setSwitchLoading(true)
    setTimeout(() => {
      setSwitchLoading(false)
      message.info(`开关状态: ${checked ? '开启' : '关闭'}`)
    }, 500)
  }

  const handleSearch = (value: string) => {
    if (value) {
      message.info(`搜索: ${value}`)
    } else {
      message.warning('请输入搜索内容')
    }
  }

  const props = {
    onRemove: (file: UploadFile) => {
      const index = fileList.indexOf(file)
      const newFileList = fileList.slice()
      newFileList.splice(index, 1)
      setFileList(newFileList)
    },
    beforeUpload: (file: UploadFile) => {
      setFileList([...fileList, file])
      return false
    },
    fileList,
  }

  return (
    <div className="demo-container">
      <h1>数据录入类组件 (10个)</h1>

      {/* Form 表单 */}
      <div className="demo-section">
        <h2>1. Form 表单<CopyPromptButton componentName="Form" componentType="data-entry" /></h2>
        <div className="demo-item">
          <Card title="用户注册表单" extra={<Tag color="blue">实时验证</Tag>}>
            <Form 
              form={form} 
              onFinish={onFinish} 
              onFinishFailed={onFinishFailed}
              layout="vertical"
              autoComplete="off"
            >
              <Form.Item 
                label="用户名" 
                name="username" 
                rules={[{ required: true, message: '请输入用户名' }, { min: 3, message: '至少3个字符' }]}
                tooltip="用户名用于登录系统"
              >
                <Input 
                  prefix={<UserOutlined />} 
                  placeholder="请输入用户名" 
                  allowClear
                  showCount
                  maxLength={20}
                />
              </Form.Item>
              <Form.Item 
                label="邮箱" 
                name="email" 
                rules={[{ required: true, type: 'email', message: '请输入有效邮箱' }]}
              >
                <Input 
                  prefix={<MailOutlined />} 
                  placeholder="请输入邮箱" 
                  allowClear
                />
              </Form.Item>
              <Form.Item 
                label="密码" 
                name="password" 
                rules={[{ required: true, message: '请输入密码' }, { min: 6, message: '至少6个字符' }]}
              >
                <Input.Password 
                  prefix={<LockOutlined />} 
                  placeholder="请输入密码" 
                />
              </Form.Item>
              <Form.Item 
                label="确认密码" 
                name="confirmPassword" 
                dependencies={['password']}
                rules={[
                  { required: true, message: '请确认密码' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve()
                      }
                      return Promise.reject(new Error('两次输入的密码不一致'))
                    },
                  }),
                ]}
              >
                <Input.Password 
                  prefix={<LockOutlined />} 
                  placeholder="请确认密码" 
                />
              </Form.Item>
              <Form.Item>
                <Space>
                  <Button type="primary" htmlType="submit" size="large">提交</Button>
                  <Button htmlType="reset" onClick={() => form.resetFields()}>重置</Button>
                </Space>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>

      {/* Input 输入框 */}
      <div className="demo-section">
        <h2>2. Input 输入框<CopyPromptButton componentName="Input" componentType="data-entry" /></h2>
        <div className="demo-item">
          <Card title="输入框变体">
            <Space orientation="vertical" style={{ width: '100%' }} size="middle">
              <Input 
                placeholder="基础输入框" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                allowClear
                showCount
                maxLength={100}
              />
              <Input.Password 
                placeholder="密码输入框" 
                visibilityToggle
              />
              <Input.Search 
                placeholder="搜索输入框" 
                enterButton={<><SearchOutlined /> 搜索</>}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onSearch={handleSearch}
                loading={false}
              />
              <Input.TextArea 
                rows={3} 
                placeholder="文本域 - 支持自动调整高度"
                autoSize={{ minRows: 2, maxRows: 6 }}
                showCount
                maxLength={200}
              />
              <Input 
                prefix="¥" 
                suffix="RMB" 
                placeholder="带前缀后缀"
                type="number"
              />
              <Space.Compact>
                <Input style={{ width: '20%' }} defaultValue="+86" disabled />
                <Input style={{ width: '80%' }} placeholder="电话号码" />
              </Space.Compact>
            </Space>
          </Card>
        </div>
      </div>

      {/* Select 选择器 */}
      <div className="demo-section">
        <h2>3. Select 选择器<CopyPromptButton componentName="Select" componentType="data-entry" /></h2>
        <div className="demo-item">
          <Card title="选择器变体">
            <Space orientation="vertical" style={{ width: '100%' }} size="middle">
              <Select 
                placeholder="单选 - 可搜索" 
                style={{ width: '100%' }}
                showSearch
                optionFilterProp="children"
                allowClear
              >
                <Option value="jack">Jack (开发工程师)</Option>
                <Option value="lucy">Lucy (产品经理)</Option>
                <Option value="tom">Tom (设计师)</Option>
                <Option value="jerry">Jerry (测试工程师)</Option>
              </Select>
              <Select 
                mode="multiple" 
                placeholder="多选 - 带标签" 
                style={{ width: '100%' }}
                allowClear
                maxTagCount={3}
              >
                <Option value="red">红色</Option>
                <Option value="green">绿色</Option>
                <Option value="blue">蓝色</Option>
                <Option value="yellow">黄色</Option>
                <Option value="purple">紫色</Option>
              </Select>
              <Select 
                mode="tags" 
                placeholder="标签模式 - 可输入自定义值" 
                style={{ width: '100%' }}
              >
                <Option value="html">HTML</Option>
                <Option value="css">CSS</Option>
                <Option value="javascript">JavaScript</Option>
              </Select>
              <Select 
                placeholder="带分组的选择器" 
                style={{ width: '100%' }}
              >
                <Select.OptGroup label="前端">
                  <Option value="react">React</Option>
                  <Option value="vue">Vue</Option>
                </Select.OptGroup>
                <Select.OptGroup label="后端">
                  <Option value="node">Node.js</Option>
                  <Option value="java">Java</Option>
                </Select.OptGroup>
              </Select>
            </Space>
          </Card>
        </div>
      </div>

      {/* DatePicker 日期选择 */}
      <div className="demo-section">
        <h2>4. DatePicker 日期选择<CopyPromptButton componentName="DatePicker" componentType="data-entry" /></h2>
        <div className="demo-item">
          <Card title="日期选择器">
            <Space direction="vertical" style={{ width: '100%' }} size="middle">
              <DatePicker 
                placeholder="选择日期" 
                style={{ width: '100%' }}
                showToday
                allowClear
              />
              <RangePicker 
                placeholder={['开始日期', '结束日期']} 
                style={{ width: '100%' }}
                showTime
              />
              <DatePicker 
                showTime 
                placeholder="选择日期时间" 
                style={{ width: '100%' }}
                format="YYYY-MM-DD HH:mm:ss"
              />
              <DatePicker 
                picker="month" 
                placeholder="选择月份" 
                style={{ width: '100%' }}
              />
              <DatePicker 
                picker="year" 
                placeholder="选择年份" 
                style={{ width: '100%' }}
              />
            </Space>
          </Card>
        </div>
      </div>

      {/* Checkbox & Radio */}
      <div className="demo-section">
        <h2>5. Checkbox / Radio 选择<CopyPromptButton componentName="Checkbox" componentType="data-entry" /><CopyPromptButton componentName="Radio" componentType="data-entry" /></h2>
        <div className="demo-item">
          <Card title="多选框">
            <Checkbox.Group 
              options={[
                { label: '苹果', value: '苹果' },
                { label: '香蕉', value: '香蕉' },
                { label: '橙子', value: '橙子' },
                { label: '葡萄', value: '葡萄', disabled: true },
              ]} 
              value={checkboxValue}
              onChange={(checkedValues) => setCheckboxValue(checkedValues as string[])}
            />
            <Divider />
            <Space>
              <Checkbox indeterminate={checkboxValue.length > 0 && checkboxValue.length < 3} 
                checked={checkboxValue.length === 3}
                onChange={(e) => {
                  if (e.target.checked) {
                    setCheckboxValue(['苹果', '香蕉', '橙子'])
                  } else {
                    setCheckboxValue([])
                  }
                }}
              >
                全选
              </Checkbox>
              <Tag color="blue">已选择: {checkboxValue.length} 项</Tag>
            </Space>
          </Card>
          <Card title="单选框" style={{ marginTop: 16 }}>
            <Radio.Group 
              value={radioValue}
              onChange={(e) => setRadioValue(e.target.value)}
            >
              <Radio.Button value="a">选项 A</Radio.Button>
              <Radio.Button value="b">选项 B</Radio.Button>
              <Radio.Button value="c">选项 C</Radio.Button>
              <Radio.Button value="d" disabled>选项 D (禁用)</Radio.Button>
            </Radio.Group>
            <Divider />
            <Radio.Group value={radioValue} onChange={(e) => setRadioValue(e.target.value)}>
              <Space direction="vertical">
                <Radio value="a">选项 A - 详细描述</Radio>
                <Radio value="b">选项 B - 详细描述</Radio>
                <Radio value="c">选项 C - 详细描述</Radio>
              </Space>
            </Radio.Group>
          </Card>
        </div>
      </div>

      {/* Switch 开关 */}
      <div className="demo-section">
        <h2>6. Switch 开关<CopyPromptButton componentName="Switch" componentType="data-entry" /></h2>
        <div className="demo-item">
          <Card title="开关变体">
            <Space size="large" wrap>
              <Tooltip title="点击切换">
                <Switch 
                  defaultChecked 
                  onChange={handleSwitchChange}
                  loading={switchLoading}
                />
              </Tooltip>
              <Switch 
                checkedChildren="开" 
                unCheckedChildren="关" 
                onChange={(checked) => message.info(`状态: ${checked ? '开' : '关'}`)}
              />
              <Switch 
                checkedChildren="启用" 
                unCheckedChildren="禁用"
                defaultChecked
              />
              <Switch size="small" />
              <Switch disabled />
              <Switch loading />
            </Space>
          </Card>
        </div>
      </div>

      {/* Slider 滑块 */}
      <div className="demo-section">
        <h2>7. Slider 滑块<CopyPromptButton componentName="Slider" componentType="data-entry" /></h2>
        <div className="demo-item">
          <Card title="滑块变体">
            <Space direction="vertical" style={{ width: '100%' }} size="large">
              <div>
                <div style={{ marginBottom: 8 }}>基础滑块 - 当前值: {sliderValue}</div>
                <Slider 
                  value={sliderValue}
                  onChange={setSliderValue}
                  tooltip={{ formatter: (value) => `${value}%` }}
                />
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>范围滑块</div>
                <Slider 
                  range 
                  defaultValue={[20, 50]} 
                  marks={{
                    0: '0°C',
                    26: '26°C',
                    37: '37°C',
                    100: '100°C',
                  }}
                />
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>带步长的滑块</div>
                <Slider 
                  step={10} 
                  defaultValue={30}
                  dots
                  marks={{
                    0: '0',
                    25: '25',
                    50: '50',
                    75: '75',
                    100: '100',
                  }}
                />
              </div>
              <Slider defaultValue={30} disabled />
            </Space>
          </Card>
        </div>
      </div>

      {/* Rate 评分 */}
      <div className="demo-section">
        <h2>8. Rate 评分<CopyPromptButton componentName="Rate" componentType="data-entry" /></h2>
        <div className="demo-item">
          <Card title="评分组件">
            <Space direction="vertical" size="middle">
              <div>
                <span style={{ marginRight: 16 }}>基础评分:</span>
                <Rate 
                  value={rateValue}
                  onChange={setRateValue}
                  tooltips={['极差', '失望', '一般', '满意', '惊喜']}
                />
                <Tag color="gold" style={{ marginLeft: 16 }}>{rateValue} 星</Tag>
              </div>
              <div>
                <span style={{ marginRight: 16 }}>半星评分:</span>
                <Rate allowHalf defaultValue={2.5} />
              </div>
              <div>
                <span style={{ marginRight: 16 }}>只读:</span>
                <Rate disabled defaultValue={2} />
              </div>
              <div>
                <span style={{ marginRight: 16 }}>自定义字符:</span>
                <Rate 
                  character="A" 
                  style={{ color: '#1890ff' }}
                />
              </div>
              <div>
                <span style={{ marginRight: 16 }}>自定义数量:</span>
                <Rate count={10} defaultValue={7} />
              </div>
            </Space>
          </Card>
        </div>
      </div>

      {/* Upload 上传 */}
      <div className="demo-section">
        <h2>9. Upload 上传<CopyPromptButton componentName="Upload" componentType="data-entry" /></h2>
        <div className="demo-item">
          <Card title="上传组件">
            <Space direction="vertical" style={{ width: '100%' }} size="middle">
              <div>
                <div style={{ marginBottom: 8 }}>点击上传:</div>
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>选择文件</Button>
                </Upload>
                <Button
                  type="primary"
                  onClick={handleUpload}
                  disabled={fileList.length === 0}
                  loading={uploading}
                  style={{ marginTop: 16 }}
                >
                  {uploading ? '上传中' : '开始上传'}
                </Button>
              </div>
              <Divider />
              <div>
                <div style={{ marginBottom: 8 }}>拖拽上传:</div>
                <Upload.Dragger 
                  name="file"
                  multiple
                  action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                  onChange={(info) => {
                    const { status } = info.file
                    if (status === 'done') {
                      message.success(`${info.file.name} 上传成功`)
                    } else if (status === 'error') {
                      message.error(`${info.file.name} 上传失败`)
                    }
                  }}
                >
                  <p className="ant-upload-drag-icon">
                    <UploadOutlined />
                  </p>
                  <p className="ant-upload-text">点击或拖拽文件到此处上传</p>
                  <p className="ant-upload-hint">
                    支持单个或批量上传，严禁上传敏感数据
                  </p>
                </Upload.Dragger>
              </div>
            </Space>
          </Card>
        </div>
      </div>

      {/* Transfer 穿梭框 */}
      <div className="demo-section">
        <h2>10. Transfer 穿梭框<CopyPromptButton componentName="Transfer" componentType="data-entry" /></h2>
        <div className="demo-item">
          <Card 
            title="数据转移" 
            extra={<Tag color="green">已选择 {transferTargetKeys.length} 项</Tag>}
          >
            <Transfer
              dataSource={transferData}
              targetKeys={transferTargetKeys}
              onChange={(keys) => setTransferTargetKeys(keys as string[])}
              render={(item) => item.title}
              showSearch
              filterOption={(inputValue, item) =>
                item.title!.indexOf(inputValue) !== -1 ||
                item.description!.indexOf(inputValue) !== -1
              }
              style={{ width: '100%' }}
              actions={['添加', '移除']}
            />
            <Divider />
            <Space>
              <Button onClick={() => setTransferTargetKeys(['1', '2', '3', '4', '5'])}>
                全选
              </Button>
              <Button onClick={() => setTransferTargetKeys([])}>
                清空
              </Button>
              <Button 
                type="primary" 
                onClick={() => message.success(`已选择: ${transferTargetKeys.join(', ')}`)}
              >
                确认选择
              </Button>
            </Space>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default DataEntryDemo
