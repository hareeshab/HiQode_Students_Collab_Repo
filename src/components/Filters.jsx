
import React from 'react'

export function Filters({ value, onChange }) {
  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'active', label: 'Active' },
    { id: 'completed', label: 'Completed' }
  ]
  return (
    <div className="tabs">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={value === tab.id ? 'tab active' : 'tab'}
          onClick={() => onChange(tab.id)}
        >{tab.label}</button>
      ))}
    </div>
  )
}
