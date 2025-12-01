# HiQode Simple UI (No Backend) — v1.0.0

An ultra-simple, elegant **React** app with a modern UI (glass look) that stores data in **localStorage**. Perfect for teaching **clone → branch → commit → PR → merge** without backend complexity.

**Live features (v1.0.0):**

- Add, edit, complete, delete tasks
- Filters: All / Active / Completed
- Local persistence (localStorage)
- Clean, responsive UI (Mobile-first)

## Run locally

```bash
npm install
npm run dev     # http://localhost:5173
```

## Build

```bash
npm run build
npm run preview

npm run build
npm run preview --host 0.0.0.0 --port 8080
```

## Tech

- React + Vite
- Vanilla CSS (CSS variables, modern layout)
- No backend (easy to understand)

## Roadmap (example versions)

- **v1.0.0 (this):** Simple todo board (localStorage)
- **v2.0.0:** Add categories, due dates, search
- **v3.0.0:** Introduce basic API (JSON Server or Express) + login stub

See `ROADMAP.md` for ready-made student tasks.



## Update: v2.0.0

## Enhanced & improved by: Lohitaksha L B

- This release brings several useful upgrades to the original v1.0.0 task manager, making it more organized and easier to use.

## What’s New in v2.0.0

1. Task Categories

- Tasks can now be added under:
  - Work
  - Study
  - Personal
    This helps in keeping tasks organized and easier to find.

2. Due Date + Overdue Indicator

- You can now set a due date for every task.
- Overdue tasks are automatically highlighted
  A warning label (“Overdue!”) is shown for missed deadlines

3. Search by Title

- A new search box lets you quickly find tasks by typing their name.
- Works instantly
- Case-insensitive
  Works together with filters and categories

## Thank You
