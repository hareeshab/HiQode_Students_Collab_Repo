import React, { useState } from "react";

export function NewTask({ onAdd }) {
  const [val, setVal] = useState("");
  const [category, setCategory] = useState("Work");
  const [dueDate, setDueDate] = useState(""); // ⭐ NEW

  function submit(e) {
    e.preventDefault();
    if (!val.trim()) return;

    // send title + category + due date
    onAdd(val, category, dueDate);

    setVal("");
    setCategory("Work");
    setDueDate("");
  }

  return (
    <form className="new" onSubmit={submit}>
      <input
        className="input"
        placeholder="Add a task…"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />

      <select
        className="input category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Work">Work</option>
        <option value="Study">Study</option>
        <option value="Personal">Personal</option>
      </select>

      {/* ⭐ NEW — Due Date */}
      <input
        type="date"
        className="input date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button className="btn">Add</button>
    </form>
  );
}
