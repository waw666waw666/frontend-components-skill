/**
 * 复制文本到剪贴板
 * @param text - 要复制的文本
 * @returns Promise<boolean> - 是否复制成功
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (!navigator.clipboard) {
    // 降级方案
    return fallbackCopyToClipboard(text)
  }

  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    console.error('Failed to copy:', err)
    return false
  }
}

/**
 * 降级复制方案（兼容旧浏览器）
 * @param text - 要复制的文本
 * @returns boolean - 是否复制成功
 */
function fallbackCopyToClipboard(text: string): boolean {
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.style.position = 'fixed'
  textarea.style.left = '-999999px'
  textarea.style.top = '0'
  document.body.appendChild(textarea)
  
  try {
    textarea.focus()
    textarea.select()
    const successful = document.execCommand('copy')
    document.body.removeChild(textarea)
    return successful
  } catch (err) {
    console.error('Fallback copy failed:', err)
    document.body.removeChild(textarea)
    return false
  }
}
