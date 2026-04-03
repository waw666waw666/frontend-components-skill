// 全局类型定义

/**
 * 菜单项类型
 */
export interface MenuItem {
  key: string
  icon?: React.ReactNode
  label: string
  children?: MenuItem[]
}

/**
 * 组件分类
 */
export type ComponentCategory = 
  | 'data-entry' 
  | 'data-display' 
  | 'feedback' 
  | 'navigation' 
  | 'layout' 
  | 'other'
  | 'drag-sort'

/**
 * 组件信息
 */
export interface ComponentInfo {
  name: string
  type: ComponentCategory
  description?: string
}

/**
 * API 响应格式
 */
export interface ApiResponse<T = unknown> {
  code: number
  data: T
  message: string
  success: boolean
}

/**
 * 分页数据
 */
export interface PaginatedData<T> {
  list: T[]
  total: number
  page: number
  pageSize: number
}
