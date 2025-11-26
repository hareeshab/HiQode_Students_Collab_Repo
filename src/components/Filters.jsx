import React from "react";

export function Filters({ value, onChange, searchValue, onSearchChange }) {
  const tabs = [
    { id: "all", label: "All" },
    { id: "active", label: "Active" },
    { id: "completed", label: "Completed" },
  ];

  return (
    <div className="filters-container">
      {/* Tabs */}
      <div className="tabs">
        {tabs.map((t) => (
          <button
            key={t.id}
            className={value === t.id ? "tab active" : "tab"}
            onClick={() => onChange(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Search Box prepared by lohitaksha*/}
      <input
        type="text"
        className="search-box"
        placeholder="Search by title…"
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}
