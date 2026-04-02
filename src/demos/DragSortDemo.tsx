import { useEffect, useRef } from 'react'
import Sortable from 'sortablejs'
import { Tabs } from 'antd'

// 工具函数：复制提示词
function copyPrompt(element: HTMLElement) {
  const preElement = element.querySelector('pre')
  const text = preElement?.textContent || ''
  navigator.clipboard.writeText(text).then(() => {
    element.classList.add('copied')
    const hint = element.querySelector('.copy-hint')
    if (hint) {
      hint.textContent = '✓ 已复制!'
      setTimeout(() => {
        element.classList.remove('copied')
        hint.textContent = '点击复制'
      }, 2000)
    }
  }).catch(() => {
    const textarea = document.createElement('textarea')
    textarea.value = text
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    element.classList.add('copied')
    setTimeout(() => element.classList.remove('copied'), 2000)
  })
}

// 1. 基础列表示例
function BasicListDemo() {
  const listRef = useRef<HTMLUListElement>(null)
  useEffect(() => {
    if (!listRef.current) return
    const sortable = new Sortable(listRef.current, {
      animation: 150,
      ghostClass: 'sortable-ghost',
      chosenClass: 'sortable-chosen',
      dragClass: 'sortable-drag',
      onStart: (evt) => console.log('🚀 拖拽开始:', evt.oldIndex),
      onEnd: (evt) => console.log('✅ 拖拽结束:', evt.oldIndex, '->', evt.newIndex),
    })
    return () => sortable.destroy()
  }, [])

  return (
    <div className="demo-content-wrapper">
      <div className="list-container">
        <h3>任务列表</h3>
        <ul ref={listRef} className="sortable-list">
          <li data-id="1"><span className="item-icon">📧</span><span className="item-text">处理邮件</span></li>
          <li data-id="2"><span className="item-icon">📊</span><span className="item-text">数据报表</span></li>
          <li data-id="3"><span className="item-icon">🎨</span><span className="item-text">UI设计</span></li>
          <li data-id="4"><span className="item-icon">💻</span><span className="item-text">代码审查</span></li>
          <li data-id="5"><span className="item-icon">📝</span><span className="item-text">撰写文档</span></li>
        </ul>
      </div>
      <div className="info-section">
        <div className="prompt-block">
          <h4>💬 提示词模板（点击复制）</h4>
          <div className="prompt-content" onClick={(e) => copyPrompt(e.currentTarget)}>
            <pre>【动作：执行修改】目标：实现基础列表拖拽排序功能。需求：1.创建可拖拽排序列表 2.列表项可上下调整顺序 3.拖拽时有视觉反馈 4.控制台输出新顺序。技术：使用SortableJS，动画150ms。验收：流畅拖拽、ghost效果、输出index。</pre>
            <span className="copy-hint">点击复制</span>
          </div>
        </div>
        <div className="code-block">
          <h4>⚙️ 配置代码</h4>
          <pre><code>{`new Sortable(el, {
  animation: 150,
  ghostClass: 'sortable-ghost',
  chosenClass: 'sortable-chosen',
  dragClass: 'sortable-drag'
});`}</code></pre>
        </div>
      </div>
    </div>
  )
}

// 2. 网格排序示例
function GridSortDemo() {
  const gridRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!gridRef.current) return
    const sortable = new Sortable(gridRef.current, {
      animation: 150,
      ghostClass: 'sortable-ghost',
    })
    return () => sortable.destroy()
  }, [])

  const items = [
    { id: '1', icon: '🎨', label: '设计' },
    { id: '2', icon: '💻', label: '开发' },
    { id: '3', icon: '📊', label: '数据' },
    { id: '4', icon: '📝', label: '文档' },
    { id: '5', icon: '🧪', label: '测试' },
    { id: '6', icon: '🚀', label: '部署' },
    { id: '7', icon: '🔧', label: '维护' },
    { id: '8', icon: '📈', label: '分析' },
  ]

  return (
    <div className="demo-content-wrapper">
      <div ref={gridRef} className="grid-container">
        {items.map((item) => (
          <div key={item.id} className="grid-item" data-id={item.id}>
            <div className="grid-icon">{item.icon}</div>
            <div className="grid-label">{item.label}</div>
          </div>
        ))}
      </div>
      <div className="info-section">
        <div className="prompt-block">
          <h4>💬 提示词模板</h4>
          <div className="prompt-content" onClick={(e) => copyPrompt(e.currentTarget)}>
            <pre>【动作：执行修改】目标：实现网格布局拖拽排序。需求：1.创建网格布局 2.网格项可拖拽重排 3.支持响应式 4.悬停放大效果。技术：SortableJS + CSS Grid。</pre>
            <span className="copy-hint">点击复制</span>
          </div>
        </div>
        <div className="code-block">
          <h4>⚙️ 配置代码</h4>
          <pre><code>{`new Sortable(el, {
  animation: 150,
  ghostClass: 'sortable-ghost'
});`}</code></pre>
        </div>
      </div>
    </div>
  )
}

// 3. 看板系统示例
function KanbanDemo() {
  const todoRef = useRef<HTMLDivElement>(null)
  const doingRef = useRef<HTMLDivElement>(null)
  const doneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sortables: Sortable[] = []
    ;[todoRef, doingRef, doneRef].forEach((ref) => {
      if (!ref.current) return
      sortables.push(new Sortable(ref.current, {
        group: 'kanban',
        animation: 150,
        ghostClass: 'sortable-ghost',
        dragClass: 'sortable-drag',
      }))
    })
    return () => sortables.forEach((s) => s.destroy())
  }, [])

  const columns = [
    { ref: todoRef, title: '📝 待办事项', count: 3, cards: [
      { id: 'k1', tag: 'urgent', tagText: '紧急', title: '修复登录bug', meta: '今天' },
      { id: 'k2', tag: 'normal', tagText: '普通', title: '优化首页加载', meta: '明天' },
      { id: 'k3', tag: 'low', tagText: '低优先级', title: '更新依赖包', meta: '本周' },
    ]},
    { ref: doingRef, title: '🚀 进行中', count: 2, cards: [
      { id: 'k4', tag: 'urgent', tagText: '紧急', title: '设计新功能原型', meta: '今天' },
      { id: 'k5', tag: 'normal', tagText: '普通', title: '编写单元测试', meta: '明天' },
    ]},
    { ref: doneRef, title: '✅ 已完成', count: 2, cards: [
      { id: 'k6', tag: 'normal', tagText: '普通', title: '部署测试环境', meta: '昨天' },
      { id: 'k7', tag: 'low', tagText: '低优先级', title: '整理文档', meta: '昨天' },
    ]},
  ]

  return (
    <div className="demo-content-wrapper">
      <div className="kanban-board">
        {columns.map((col, idx) => (
          <div key={idx} className="kanban-column">
            <div className="column-header">
              <h4>{col.title}</h4>
            </div>
            <div ref={col.ref} className="kanban-list">
              {col.cards.map((card) => (
                <div key={card.id} className="kanban-card" data-id={card.id}>
                  <span className={`card-tag ${card.tag}`}>{card.tagText}</span>
                  <div className="card-title">{card.title}</div>
                  <div className="card-meta">{card.meta}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="info-section">
        <div className="prompt-block">
          <h4>💬 提示词模板</h4>
          <div className="prompt-content" onClick={(e) => copyPrompt(e.currentTarget)}>
            <pre>【动作：执行修改】目标：实现Trello式看板系统。需求：1.三列看板 2.卡片可跨列拖拽 3.显示卡片数量 4.卡片含标签和日期。技术：SortableJS group配置。</pre>
            <span className="copy-hint">点击复制</span>
          </div>
        </div>
        <div className="code-block">
          <h4>⚙️ 配置代码</h4>
          <pre><code>{`new Sortable(el, {
  group: 'kanban',
  animation: 150,
  ghostClass: 'sortable-ghost'
});`}</code></pre>
        </div>
      </div>
    </div>
  )
}

// 4. 跨列表拖拽示例
function CrossListDemo() {
  const crossARef = useRef<HTMLUListElement>(null)
  const crossBRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (!crossARef.current || !crossBRef.current) return
    const sortableA = new Sortable(crossARef.current, {
      group: { name: 'cross', pull: true, put: false },
      animation: 150,
      ghostClass: 'sortable-ghost',
    })
    const sortableB = new Sortable(crossBRef.current, {
      group: { name: 'cross', pull: false, put: true },
      animation: 150,
      ghostClass: 'sortable-ghost',
    })
    return () => {
      sortableA.destroy()
      sortableB.destroy()
    }
  }, [])

  return (
    <div className="demo-content-wrapper">
      <div className="cross-container">
        <div className="cross-list-wrapper">
          <h4>列表 A（只能拖出）</h4>
          <ul ref={crossARef} className="cross-list">
            <li data-id="a1">📱 手机</li>
            <li data-id="a2">💻 笔记本</li>
            <li data-id="a3">🖥️ 台式机</li>
          </ul>
        </div>
        <div className="cross-arrow">➡️</div>
        <div className="cross-list-wrapper">
          <h4>列表 B（只能拖入）</h4>
          <ul ref={crossBRef} className="cross-list">
            <li data-id="b1">⌚ 手表</li>
            <li data-id="b2">🎧 耳机</li>
          </ul>
        </div>
      </div>
      <div className="info-section">
        <div className="prompt-block">
          <h4>💬 提示词模板</h4>
          <div className="prompt-content" onClick={(e) => copyPrompt(e.currentTarget)}>
            <pre>【动作：执行修改】目标：实现单向跨列表拖拽。需求：1.列表A只能拖出 2.列表B只能拖入 3.支持克隆或移动模式。技术：SortableJS group配置pull/put。</pre>
            <span className="copy-hint">点击复制</span>
          </div>
        </div>
        <div className="code-block">
          <h4>⚙️ 配置代码</h4>
          <pre><code>{`// 列表A - 只能拖出
new Sortable(crossA, {
  group: { name: 'cross', pull: true, put: false }
});

// 列表B - 只能拖入
new Sortable(crossB, {
  group: { name: 'cross', pull: false, put: true }
});`}</code></pre>
        </div>
      </div>
    </div>
  )
}

// 5. 克隆拖拽示例
function CloneDragDemo() {
  const cloneSourceRef = useRef<HTMLUListElement>(null)
  const cloneTargetRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (!cloneSourceRef.current || !cloneTargetRef.current) return
    const sortableSource = new Sortable(cloneSourceRef.current, {
      group: { name: 'clone', pull: 'clone', put: false },
      animation: 150,
      ghostClass: 'sortable-ghost',
      sort: false,
    })
    const sortableTarget = new Sortable(cloneTargetRef.current, {
      group: { name: 'clone', pull: false, put: true },
      animation: 150,
      ghostClass: 'sortable-ghost',
      onAdd: (evt) => {
        const placeholder = cloneTargetRef.current?.querySelector('.placeholder')
        placeholder?.remove()
        const item = evt.item
        if (!item.querySelector('.delete-btn')) {
          const deleteBtn = document.createElement('button')
          deleteBtn.className = 'delete-btn'
          deleteBtn.innerHTML = '✕'
          deleteBtn.onclick = () => {
            item.remove()
            if (cloneTargetRef.current?.children.length === 0) {
              const newPlaceholder = document.createElement('li')
              newPlaceholder.className = 'placeholder'
              newPlaceholder.textContent = '拖拽组件到这里'
              cloneTargetRef.current.appendChild(newPlaceholder)
            }
          }
          item.appendChild(deleteBtn)
        }
      },
    })
    return () => {
      sortableSource.destroy()
      sortableTarget.destroy()
    }
  }, [])

  return (
    <div className="demo-content-wrapper">
      <div className="clone-container">
        <div className="clone-source">
          <h4>组件库（拖拽复制）</h4>
          <ul ref={cloneSourceRef} className="clone-list">
            <li data-id="c1"><span className="component-icon">📝</span><span>文本输入</span></li>
            <li data-id="c2"><span className="component-icon">☑️</span><span>复选框</span></li>
            <li data-id="c3"><span className="component-icon">📊</span><span>下拉选择</span></li>
            <li data-id="c4"><span className="component-icon">📅</span><span>日期选择</span></li>
          </ul>
        </div>
        <div className="clone-target">
          <h4>表单区域（接收克隆）</h4>
          <ul ref={cloneTargetRef} className="clone-list target">
            <li className="placeholder">拖拽组件到这里</li>
          </ul>
        </div>
      </div>
      <div className="info-section">
        <div className="prompt-block">
          <h4>💬 提示词模板</h4>
          <div className="prompt-content" onClick={(e) => copyPrompt(e.currentTarget)}>
            <pre>【动作：执行修改】目标：实现组件库克隆拖拽。需求：1.左侧组件库 2.右侧画布区 3.克隆拖拽保留源 4.可删除画布组件。技术：SortableJS clone模式。</pre>
            <span className="copy-hint">点击复制</span>
          </div>
        </div>
        <div className="code-block">
          <h4>⚙️ 配置代码</h4>
          <pre><code>{`// 源列表 - 克隆模式
new Sortable(cloneSource, {
  group: { name: 'clone', pull: 'clone', put: false }
});

// 目标列表 - 接收克隆
new Sortable(cloneTarget, {
  group: { name: 'clone', pull: false, put: true }
});`}</code></pre>
        </div>
      </div>
    </div>
  )
}

// 6. 手柄拖拽示例
function HandleDragDemo() {
  const handleListRef = useRef<HTMLUListElement>(null)
  useEffect(() => {
    if (!handleListRef.current) return
    const sortable = new Sortable(handleListRef.current, {
      handle: '.handle',
      animation: 150,
      ghostClass: 'sortable-ghost',
    })
    return () => sortable.destroy()
  }, [])

  const items = [
    { id: 'h1', title: '项目一', desc: '点击这里可以选择文本，不会触发拖拽' },
    { id: 'h2', title: '项目二', desc: '只有点击左侧手柄才能拖拽' },
    { id: 'h3', title: '项目三', desc: '内容区域可以自由交互' },
    { id: 'h4', title: '项目四', desc: '适用于复杂列表项' },
  ]

  return (
    <div className="demo-content-wrapper">
      <div className="handle-container">
        <h4>点击左侧 ☰ 手柄拖拽</h4>
        <ul ref={handleListRef} className="handle-list">
          {items.map((item) => (
            <li key={item.id} data-id={item.id}>
              <span className="handle">☰</span>
              <span className="content">
                <strong>{item.title}</strong>
                <small>{item.desc}</small>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="info-section">
        <div className="prompt-block">
          <h4>💬 提示词模板</h4>
          <div className="prompt-content" onClick={(e) => copyPrompt(e.currentTarget)}>
            <pre>【动作：执行修改】目标：实现手柄拖拽功能。需求：1.列表项有拖拽手柄 2.只有手柄可触发拖拽 3.内容区可自由交互。技术：SortableJS handle配置。</pre>
            <span className="copy-hint">点击复制</span>
          </div>
        </div>
        <div className="code-block">
          <h4>⚙️ 配置代码</h4>
          <pre><code>{`new Sortable(el, {
  handle: '.handle',
  animation: 150
});`}</code></pre>
        </div>
      </div>
    </div>
  )
}

// 7. 多选拖拽示例
function MultiDragDemo() {
  const multiListRef = useRef<HTMLUListElement>(null)
  useEffect(() => {
    if (!multiListRef.current) return
    const list = multiListRef.current
    let selectedItems = new Set<Element>()

    const clickHandler = (e: MouseEvent) => {
      const item = (e.target as HTMLElement).closest('li')
      if (!item || item.classList.contains('sortable-drag')) return

      if (e.ctrlKey || e.metaKey) {
        item.classList.toggle('selected')
        if (item.classList.contains('selected')) selectedItems.add(item)
        else selectedItems.delete(item)
      } else {
        list.querySelectorAll('li').forEach((li) => li.classList.remove('selected'))
        selectedItems.clear()
        item.classList.add('selected')
        selectedItems.add(item)
      }
    }

    list.addEventListener('click', clickHandler)
    const sortable = new Sortable(list, {
      animation: 150,
      ghostClass: 'sortable-ghost',
      multiDrag: true,
      selectedClass: 'selected',
      avoidImplicitDeselect: true,
    })

    return () => {
      list.removeEventListener('click', clickHandler)
      sortable.destroy()
    }
  }, [])

  const items = [
    { id: 'm1', text: '📄 文档1.txt' },
    { id: 'm2', text: '📄 文档2.txt' },
    { id: 'm3', text: '📊 报表.xlsx' },
    { id: 'm4', text: '🖼️ 图片1.png' },
    { id: 'm5', text: '🖼️ 图片2.png' },
    { id: 'm6', text: '🎵 音乐.mp3' },
    { id: 'm7', text: '🎬 视频.mp4' },
    { id: 'm8', text: '📦 压缩包.zip' },
  ]

  return (
    <div className="demo-content-wrapper">
      <div className="multidrag-container">
        <div className="multidrag-hint">
          <p>💡 提示：按住 Ctrl 点击可多选，按住 Shift 可范围选择</p>
        </div>
        <ul ref={multiListRef} className="multidrag-list">
          {items.map((item) => (
            <li key={item.id} data-id={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
      <div className="info-section">
        <div className="prompt-block">
          <h4>💬 提示词模板</h4>
          <div className="prompt-content" onClick={(e) => copyPrompt(e.currentTarget)}>
            <pre>【动作：执行修改】目标：实现多选拖拽功能。需求：1.Ctrl+点击多选 2.Shift+范围选择 3.选中项高亮 4.一起拖拽。技术：SortableJS MultiDrag插件。</pre>
            <span className="copy-hint">点击复制</span>
          </div>
        </div>
        <div className="code-block">
          <h4>⚙️ 配置代码</h4>
          <pre><code>{`import { MultiDrag } from 'sortablejs';
Sortable.mount(new MultiDrag());

new Sortable(el, {
  multiDrag: true,
  selectedClass: 'selected',
  animation: 150
});`}</code></pre>
        </div>
      </div>
    </div>
  )
}

// 8. 嵌套排序示例
function NestedSortDemo() {
  const nestedListRef = useRef<HTMLUListElement>(null)
  useEffect(() => {
    if (!nestedListRef.current) return
    const list = nestedListRef.current

    const clickHandler = (e: MouseEvent) => {
      const toggle = (e.target as HTMLElement).closest('.toggle')
      if (!toggle) return
      const li = toggle.closest('li')
      const subList = li?.querySelector('ul')
      if (subList) {
        toggle.classList.toggle('collapsed')
        ;(subList as HTMLElement).style.display = subList.style.display === 'none' ? 'block' : 'none'
      }
    }
    list.addEventListener('click', clickHandler)

    const initSortable = (el: HTMLElement) => {
      return new Sortable(el, {
        group: 'nested',
        animation: 150,
        ghostClass: 'sortable-ghost',
      })
    }

    const sortables: Sortable[] = []
    sortables.push(initSortable(list))
    list.querySelectorAll('ul').forEach((ul) => sortables.push(initSortable(ul as HTMLElement)))

    return () => {
      list.removeEventListener('click', clickHandler)
      sortables.forEach((s) => s.destroy())
    }
  }, [])

  return (
    <div className="demo-content-wrapper">
      <div className="nested-container">
        <ul ref={nestedListRef} className="nested-list">
          <li data-id="n1">
            <div className="nested-item">
              <span className="toggle">▼</span>
              <span className="folder">📁 前端开发</span>
            </div>
            <ul>
              <li data-id="n1-1"><span className="file">📄 HTML</span></li>
              <li data-id="n1-2"><span className="file">📄 CSS</span></li>
              <li data-id="n1-3"><span className="file">📄 JavaScript</span></li>
            </ul>
          </li>
          <li data-id="n2">
            <div className="nested-item">
              <span className="toggle">▼</span>
              <span className="folder">📁 后端开发</span>
            </div>
            <ul>
              <li data-id="n2-1"><span className="file">📄 Node.js</span></li>
              <li data-id="n2-2"><span className="file">📄 Python</span></li>
              <li data-id="n2-3"><span className="file">📄 Java</span></li>
            </ul>
          </li>
          <li data-id="n3">
            <div className="nested-item">
              <span className="toggle">▼</span>
              <span className="folder">📁 数据库</span>
            </div>
            <ul>
              <li data-id="n3-1"><span className="file">🗄️ MySQL</span></li>
              <li data-id="n3-2"><span className="file">🗄️ MongoDB</span></li>
              <li data-id="n3-3"><span className="file">🗄️ Redis</span></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="info-section">
        <div className="prompt-block">
          <h4>💬 提示词模板</h4>
          <div className="prompt-content" onClick={(e) => copyPrompt(e.currentTarget)}>
            <pre>【动作：执行修改】目标：实现树形结构嵌套拖拽。需求：1.多级嵌套 2.同级排序 3.跨级移动 4.折叠展开。技术：SortableJS嵌套group配置。</pre>
            <span className="copy-hint">点击复制</span>
          </div>
        </div>
        <div className="code-block">
          <h4>⚙️ 配置代码</h4>
          <pre><code>{`new Sortable(el, {
  group: 'nested',
  animation: 150,
  ghostClass: 'sortable-ghost'
});`}</code></pre>
        </div>
      </div>
    </div>
  )
}

// 9. 交换模式示例
function SwapModeDemo() {
  const swapListRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!swapListRef.current) return
    // 使用基础 SortableJS，swap 模式需要额外插件
    new Sortable(swapListRef.current, {
      animation: 150,
      ghostClass: 'sortable-ghost',
    })
  }, [])

  const items = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣']

  return (
    <div className="demo-content-wrapper">
      <div className="swap-container">
        <div className="swap-hint">
          <p>💡 提示：拖拽时会与目标元素交换位置</p>
        </div>
        <div ref={swapListRef} className="swap-grid">
          {items.map((item, idx) => (
            <div key={idx} className="swap-item" data-id={`s${idx + 1}`}>{item}</div>
          ))}
        </div>
      </div>
      <div className="info-section">
        <div className="prompt-block">
          <h4>💬 提示词模板</h4>
          <div className="prompt-content" onClick={(e) => copyPrompt(e.currentTarget)}>
            <pre>【动作：执行修改】目标：实现拖拽交换位置功能。需求：1.拖拽时直接交换位置 2.不是插入 3.交换目标高亮。技术：SortableJS Swap插件。</pre>
            <span className="copy-hint">点击复制</span>
          </div>
        </div>
        <div className="code-block">
          <h4>⚙️ 配置代码</h4>
          <pre><code>{`import { Swap } from 'sortablejs';
Sortable.mount(new Swap());

new Sortable(el, {
  swap: true,
  swapClass: 'swap-highlight',
  animation: 150
});`}</code></pre>
        </div>
      </div>
    </div>
  )
}

// 主组件
export default function DragSortDemo() {
  const tabItems = [
    { key: 'basic', label: '📋 基础列表', children: <BasicListDemo /> },
    { key: 'grid', label: '🔲 网格排序', children: <GridSortDemo /> },
    { key: 'kanban', label: '📊 看板系统', children: <KanbanDemo /> },
    { key: 'cross', label: '🔄 跨列表拖拽', children: <CrossListDemo /> },
    { key: 'clone', label: '📄 克隆拖拽', children: <CloneDragDemo /> },
    { key: 'handle', label: '☰ 手柄拖拽', children: <HandleDragDemo /> },

    { key: 'nested', label: '🌳 嵌套排序', children: <NestedSortDemo /> },
    { key: 'swap', label: '🔀 交换模式', children: <SwapModeDemo /> },
  ]

  return (
    <div className="drag-sort-demo">
      <h1>拖动排序 (8个)</h1>

      <Tabs items={tabItems} type="card" />

      <style>{`
        .drag-sort-demo {
          padding-bottom: 40px;
        }

        .demo-content-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        @media (max-width: 1200px) {
          .demo-content-wrapper {
            grid-template-columns: 1fr;
          }
        }

        /* Sortable 状态类 */
        .sortable-ghost {
          opacity: 0.4 !important;
          background: #e2e8f0 !important;
          border: 2px dashed #a0aec0 !important;
        }

        .sortable-chosen {
          background: #ebf8ff !important;
          box-shadow: 0 0 0 2px #667eea;
        }

        .sortable-drag {
          opacity: 0.9 !important;
          background: white !important;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
          transform: scale(1.02);
        }

        /* 基础列表 */
        .list-container {
          background: white;
          border-radius: 10px;
          padding: 24px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .list-container h3 {
          font-size: 18px;
          margin-bottom: 16px;
          color: #2d3748;
        }

        .sortable-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .sortable-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: #f7fafc;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          margin-bottom: 12px;
          cursor: move;
          transition: all 0.2s ease;
        }

        .sortable-list li:hover {
          border-color: #667eea;
          transform: translateX(4px);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .item-icon { font-size: 20px; }
        .item-text { font-weight: 500; }

        /* 网格 */
        .grid-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          background: white;
          padding: 24px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
          .grid-container { grid-template-columns: repeat(2, 1fr); }
        }

        .grid-item {
          aspect-ratio: 1;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: move;
          transition: all 0.3s ease;
          color: white;
        }

        .grid-item:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .grid-icon { font-size: 36px; margin-bottom: 8px; }
        .grid-label { font-size: 14px; font-weight: 500; }

        /* 看板 */
        .kanban-board {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          padding-bottom: 16px;
        }

        .kanban-column {
          min-width: 280px;
          background: white;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .column-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 2px solid #e2e8f0;
        }

        .column-header h4 { font-size: 16px; font-weight: 600; }

        .count {
          background: #667eea;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .kanban-list { min-height: 200px; }

        .kanban-card {
          background: #f7fafc;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          padding: 16px;
          margin-bottom: 12px;
          cursor: move;
          transition: all 0.2s ease;
        }

        .kanban-card:hover {
          border-color: #667eea;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .card-tag {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .card-tag.urgent { background: #fed7d7; color: #c53030; }
        .card-tag.normal { background: #c6f6d5; color: #276749; }
        .card-tag.low { background: #bee3f8; color: #2c5282; }

        .card-title { font-weight: 600; margin-bottom: 8px; font-size: 14px; }
        .card-meta { font-size: 12px; color: #718096; }

        /* 跨列表 */
        .cross-container {
          display: flex;
          align-items: center;
          gap: 24px;
          background: white;
          padding: 32px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .cross-list-wrapper { flex: 1; }
        .cross-list-wrapper h4 { margin-bottom: 16px; font-size: 14px; color: #718096; }

        .cross-list {
          list-style: none;
          min-height: 200px;
          background: #f7fafc;
          border-radius: 8px;
          padding: 16px;
          border: 2px dashed #e2e8f0;
        }

        .cross-list li {
          padding: 14px 16px;
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 6px;
          margin-bottom: 10px;
          cursor: move;
          transition: all 0.2s ease;
        }

        .cross-list li:hover { border-color: #667eea; transform: translateX(4px); }
        .cross-arrow { font-size: 32px; color: #667eea; }

        /* 克隆 */
        .clone-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .clone-source, .clone-target {
          background: white;
          padding: 24px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .clone-source h4, .clone-target h4 {
          margin-bottom: 16px;
          font-size: 14px;
          color: #718096;
        }

        .clone-list {
          list-style: none;
          min-height: 300px;
          background: #f7fafc;
          border-radius: 8px;
          padding: 16px;
        }

        .clone-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 6px;
          margin-bottom: 10px;
          cursor: move;
          transition: all 0.2s ease;
        }

        .clone-list li:hover { border-color: #667eea; }
        .clone-list li.placeholder {
          background: transparent;
          border: 2px dashed #e2e8f0;
          color: #718096;
          text-align: center;
          justify-content: center;
        }

        .component-icon { font-size: 20px; }

        .delete-btn {
          margin-left: auto;
          background: #f56565;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 4px 8px;
          cursor: pointer;
        }

        /* 手柄 */
        .handle-container {
          background: white;
          padding: 24px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .handle-container h4 { margin-bottom: 16px; font-size: 14px; color: #718096; }

        .handle-list { list-style: none; padding: 0; margin: 0; }

        .handle-list li {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          background: #f7fafc;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          margin-bottom: 12px;
        }

        .handle {
          font-size: 20px;
          color: #718096;
          cursor: grab;
          padding: 8px;
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        .handle:hover { background: #e2e8f0; color: #667eea; }
        .handle:active { cursor: grabbing; }

        .handle-list .content {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .handle-list .content strong { font-weight: 600; margin-bottom: 4px; }
        .handle-list .content small { color: #718096; font-size: 12px; }

        /* 多选 */
        .multidrag-container {
          background: white;
          padding: 24px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .multidrag-hint {
          background: #ebf8ff;
          border-left: 4px solid #4299e1;
          padding: 12px 16px;
          margin-bottom: 20px;
          border-radius: 6px;
        }

        .multidrag-hint p { font-size: 14px; color: #2c5282; }

        .multidrag-list { list-style: none; padding: 0; margin: 0; }

        .multidrag-list li {
          padding: 14px 16px;
          background: #f7fafc;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          margin-bottom: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
          user-select: none;
        }

        .multidrag-list li:hover { border-color: #667eea; }
        .multidrag-list li.selected {
          background: #ebf8ff;
          border-color: #667eea;
          box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
        }

        /* 嵌套 */
        .nested-container {
          background: white;
          padding: 24px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .nested-list { list-style: none; padding: 0; margin: 0; }
        .nested-list li { margin-bottom: 8px; }

        .nested-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: #f7fafc;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          cursor: move;
          transition: all 0.2s ease;
        }

        .nested-item:hover { border-color: #667eea; }

        .toggle {
          font-size: 12px;
          color: #718096;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .toggle.collapsed { transform: rotate(-90deg); }
        .folder { font-weight: 600; }

        .nested-list ul {
          list-style: none;
          margin-left: 32px;
          margin-top: 8px;
        }

        .nested-list ul li {
          padding: 10px 14px;
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 6px;
          margin-bottom: 6px;
          cursor: move;
        }

        .file { display: flex; align-items: center; gap: 8px; }

        /* 交换 */
        .swap-container {
          background: white;
          padding: 24px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .swap-hint {
          background: #fef3c7;
          border-left: 4px solid #ed8936;
          padding: 12px 16px;
          margin-bottom: 20px;
          border-radius: 6px;
        }

        .swap-hint p { font-size: 14px; color: #92400e; }

        .swap-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          max-width: 400px;
          margin: 0 auto;
        }

        .swap-item {
          aspect-ratio: 1;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          cursor: move;
          transition: all 0.3s ease;
          color: white;
        }

        .swap-item:hover { transform: scale(1.05); box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); }

        .swap-highlight {
          background: #ed8936 !important;
          animation: pulse 1s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        /* 提示词块 */
        .info-section { display: flex; flex-direction: column; gap: 20px; }

        .prompt-block {
          background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
          border: 2px solid #667eea40;
          border-radius: 10px;
          padding: 20px;
        }

        .prompt-block h4 {
          color: #667eea;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .prompt-content {
          position: relative;
          background: white;
          border-radius: 8px;
          padding: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }

        .prompt-content:hover {
          border-color: #667eea;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
        }

        .prompt-content pre {
          margin: 0;
          font-family: 'JetBrains Mono', 'Consolas', 'Monaco', monospace;
          font-size: 12px;
          line-height: 1.7;
          color: #2d3748;
          white-space: pre-wrap;
          word-wrap: break-word;
        }

        .copy-hint {
          position: absolute;
          top: 8px;
          right: 8px;
          background: #667eea;
          color: white;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 500;
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .prompt-content:hover .copy-hint { opacity: 1; }
        .prompt-content.copied { border-color: #48bb78; background: #f0fff4; }
        .prompt-content.copied .copy-hint { opacity: 1; background: #48bb78; }

        /* 代码块 */
        .code-block {
          background: #1a202c;
          border-radius: 10px;
          padding: 24px;
          overflow-x: auto;
        }

        .code-block h4 {
          color: #a0aec0;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
        }

        .code-block pre {
          margin: 0;
          font-family: 'JetBrains Mono', 'Consolas', 'Monaco', monospace;
          font-size: 13px;
          line-height: 1.8;
          color: #e2e8f0;
        }

        .code-block code { font-family: inherit; }
      `}</style>
    </div>
  )
}