import React, { useEffect, useRef, useState } from "react";

export function TaskItem({ task, onToggle, onEdit, onRemove }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.title);
  const inputRef = useRef(null);

  useEffect(() => {
    if (editing) inputRef.current?.focus();
  }, [editing]);
  useEffect(() => setText(task.title), [task.title]);

  function save() {
    const v = text.trim();
    if (!v) return;
    onEdit(v);
    setEditing(false);
  }

  // ⭐ OVERDUE CHECK
  const isOverdue =
    task.dueDate && !task.done && new Date(task.dueDate) < new Date();

  return (
    <li
      className={`item ${isOverdue ? "overdue" : ""}`}
      onDoubleClick={() => setEditing(true)}
    >
      <label className="checkbox">
        <input type="checkbox" checked={task.done} onChange={onToggle} />
        <span />
      </label>

      {editing ? (
        <input
          ref={inputRef}
          className="edit"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={save}
          onKeyDown={(e) => (e.key === "Enter" ? save() : null)}
        />
      ) : (
        <span className={task.done ? "title done" : "title"}>{task.title}</span>
      )}

      {/* SHOW CATEGORY */}
      {task.category && <span className="cat">{task.category}</span>}

      {/* SHOW DUE DATE */}
      {task.dueDate && <span className="due">Due: {task.dueDate}</span>}

      {/* OVERDUE LABEL */}
      {isOverdue && <span className="overdue-label">Overdue!</span>}

      <button className="remove" onClick={onRemove} title="Delete">
        ✕
      </button>
    </li>
  );
}
