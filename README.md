# 📊 Metric Dashboard

A modern metrics dashboard built with Next.js, featuring dynamic charts, responsive design, and smooth animations.

---

## 🛠️ Technologies Used

- **Next.js 15 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Recharts.js** – Charting library
- **Axios** – API communication
- **Framer Motion** – Animations and slider
- **JSON Server** – Local API simulation

---

## ⚙️ Rendering & Structure

- **Partial Rendering:**  
  Static components like `<h1>` and the `<Input>` are placed outside `async` data functions to improve load time and UX.

- **Suspense:**  
  `Simulation` component uses `<Suspense>` to show fallback (`Loading...`) until data is loaded.

---

## 📦 Data Source & API

- Local data served from `server/db.json`
- Run the mock API with:

  ```bash
  json-server --watch server/db.json --port 3001
