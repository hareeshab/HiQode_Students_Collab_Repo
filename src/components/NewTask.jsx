
import React, { useState } from 'react'

export function NewTask({ onAdd }) {
  const [val, setVal] = useState('')

  function submit(e) {
    e.preventDefault()
    if (!val.trim()) return
    onAdd(val)
    setVal('')
  }

  return (
    <form className="new" onSubmit={submit}>
      <input
        type="text"
        className="input"
        placeholder="Add a task…"
        value={val}
        onChange={e => setVal(e.target.value)}
      />
      <button className="btn">Add</button>
    </form>
  )
}
