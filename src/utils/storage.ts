/**
 * 本地存储工具函数
 */

export const storage = {
  /**
   * 设置 localStorage
   * @param key - 键名
   * @param value - 值
   */
  set<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      console.error('Error saving to localStorage:', e)
    }
  },

  /**
   * 获取 localStorage
   * @param key - 键名
   * @param defaultValue - 默认值
   * @returns 存储的值或默认值
   */
  get<T>(key: string, defaultValue?: T): T | undefined {
    try {
      const item = localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : defaultValue
    } catch (e) {
      console.error('Error reading from localStorage:', e)
      return defaultValue
    }
  },

  /**
   * 移除 localStorage
   * @param key - 键名
   */
  remove(key: string): void {
    try {
      localStorage.removeItem(key)
    } catch (e) {
      console.error('Error removing from localStorage:', e)
    }
  },

  /**
   * 清空 localStorage
   */
  clear(): void {
    try {
      localStorage.clear()
    } catch (e) {
      console.error('Error clearing localStorage:', e)
    }
  },
}

export const session = {
  /**
   * 设置 sessionStorage
   * @param key - 键名
   * @param value - 值
   */
  set<T>(key: string, value: T): void {
    try {
      sessionStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      console.error('Error saving to sessionStorage:', e)
    }
  },

  /**
   * 获取 sessionStorage
   * @param key - 键名
   * @param defaultValue - 默认值
   * @returns 存储的值或默认值
   */
  get<T>(key: string, defaultValue?: T): T | undefined {
    try {
      const item = sessionStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : defaultValue
    } catch (e) {
      console.error('Error reading from sessionStorage:', e)
      return defaultValue
    }
  },

  /**
   * 移除 sessionStorage
   * @param key - 键名
   */
  remove(key: string): void {
    try {
      sessionStorage.removeItem(key)
    } catch (e) {
      console.error('Error removing from sessionStorage:', e)
    }
  },

  /**
   * 清空 sessionStorage
   */
  clear(): void {
    try {
      sessionStorage.clear()
    } catch (e) {
      console.error('Error clearing sessionStorage:', e)
    }
  },
}
