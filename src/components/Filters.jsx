import React, { useRef } from 'react'

export function Filters({ value, onChange, counts = {} }) {
  const tabs = [
    { id: 'all', label: 'All', icon: '📋' },
    { id: 'active', label: 'Active', icon: '⚡' },
    { id: 'completed', label: 'Completed', icon: '✅' }
  ]

  const tabRefs = useRef([])

  const handleKeyDown = (e, index) => {
    if (e.key === 'ArrowRight') {
      const next = (index + 1) % tabs.length
      tabRefs.current[next].focus()
      onChange(tabs[next].id)
    }
    if (e.key === 'ArrowLeft') {
      const prev = (index - 1 + tabs.length) % tabs.length
      tabRefs.current[prev].focus()
      onChange(tabs[prev].id)
    }
  }

  return (
    <div className="tabs" role="tablist">
      {tabs.map((t, i) => (
        <button
          key={t.id}
          ref={el => tabRefs.current[i] = el}
          role="tab"
          aria-selected={value === t.id}
          className={value === t.id ? 'tab active' : 'tab'}
          onClick={() => onChange(t.id)}
          onKeyDown={(e) => handleKeyDown(e, i)}
        >
          <span className="icon">{t.icon}</span>
          {t.label}
          <span className="count">({counts[t.id] ?? 0})</span>
        </button>
      ))}
    </div>
  )
}