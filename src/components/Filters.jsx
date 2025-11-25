import React from 'react'

export function Filters({ value, onChange }) {
  return (
    <div className="tabs">
      <button
        className={value === 'all' ? 'active' : ''}
        onClick={() => onChange('all')}
      >
        All
      </button>

      <button
        className={value === 'active' ? 'active' : ''}
        onClick={() => onChange('active')}
      >
        Active
      </button>

      <button
        className={value === 'completed' ? 'active' : ''}
        onClick={() => onChange('completed')}
      >
        Completed
      </button>
    </div>
  )
}

