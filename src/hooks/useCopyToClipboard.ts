import { useState, useCallback } from 'react'

interface UseCopyToClipboardReturn {
  copied: boolean
  copy: (text: string) => Promise<boolean>
}

/**
 * 复制文本到剪贴板的 Hook
 * @returns {UseCopyToClipboardReturn} 包含复制状态和复制函数
 * @example
 * const { copied, copy } = useCopyToClipboard()
 * const handleCopy = () => copy('要复制的文本')
 */
export function useCopyToClipboard(): UseCopyToClipboardReturn {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(async (text: string): Promise<boolean> => {
    if (!navigator.clipboard) {
      // 降级方案：使用 document.execCommand
      try {
        const textarea = document.createElement('textarea')
        textarea.value = text
        textarea.style.position = 'fixed'
        textarea.style.left = '-999999px'
        document.body.appendChild(textarea)
        textarea.select()
        const success = document.execCommand('copy')
        document.body.removeChild(textarea)
        
        if (success) {
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        }
        return success
      } catch {
        return false
      }
    }

    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      return true
    } catch {
      return false
    }
  }, [])

  return { copied, copy }
}
