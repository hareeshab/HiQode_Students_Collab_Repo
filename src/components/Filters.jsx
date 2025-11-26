
import React from 'react'

export function Filters({ value, onChange }) {
  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'running', label: 'Running' },
    { id: 'achieved', label: 'Achieved' }
  ]
  return (
    <div className="tabs">
      {tabs.map(t => (
        <button
          key={t.id}
          className={value === t.id ? 'tab active' : 'tab'}
          onClick={() => onChange(t.id)}
        >{t.label}</button>
      ))}
    </div>
  )
}
