// src/App.jsx
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Lesson from "./pages/Lesson";
import Shop from "./pages/Shop";
import Feedback from "./pages/Feedback";
import "./index.css";

const defaultData = {
  xp: 0,
  lives: 5,
  flame: 1,
  completed: 0,
  completedLevels: []
};

function App() {
  const [page, setPage] = useState("home");
  const [currentLevelId, setCurrentLevelId] = useState(1);

  const [data, setData] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("english-flame") || "{}");
      const baseCompleted = typeof saved.completed === "number" ? saved.completed : 0;
      const initialLevels = Array.isArray(saved.completedLevels)
        ? saved.completedLevels
        : Array.from({ length: baseCompleted }, (_, i) => i + 1);

      return {
        ...defaultData,
        ...saved,
        completed: baseCompleted,
        completedLevels: initialLevels
      };
    } catch {
      return defaultData;
    }
  });

  // Save progress automatically whenever data updates
  useEffect(() => {
    try {
      localStorage.setItem("english-flame", JSON.stringify(data));
    } catch (err) {
      console.error("Failed to save progress to localStorage:", err);
    }
  }, [data]);

  // Start a specific level
  function startLevel(number) {
    if (number > data.completed + 1) {
      alert("Bu level hali qulflangan! Oldingi levelni bajaring.");
      return;
    }

    setCurrentLevelId(number);
    setPage("lesson");
  }

  return (
    <div className="app">
      <Navbar data={data} setPage={setPage} />

      {page === "home" && <Home data={data} setPage={setPage} />}

      {page === "dashboard" && (
        <Dashboard
          data={data}
          startLevel={startLevel}
          setPage={setPage}
        />
      )}

      {page === "lesson" && (
        <Lesson
          levelId={currentLevelId}
          data={data}
          setData={setData}
          setPage={setPage}
          startLevel={startLevel}
        />
      )}

      {page === "shop" && (
        <Shop
          data={data}
          setData={setData}
          setPage={setPage}
        />
      )}

      {page === "feedback" && <Feedback setPage={setPage} />}

      <Footer page={page} setPage={setPage} />
    </div>
  );
}

export default App;
