// src/components/Footer.jsx
import React from "react";

export default function Footer({ page, setPage }) {
  return (
    <footer>
      <div className="footer-menu">
        <button
          className={page === "home" ? "active" : ""}
          onClick={() => setPage("home")}
        >
          🏠 Home
        </button>
        <button
          className={page === "dashboard" ? "active" : ""}
          onClick={() => setPage("dashboard")}
        >
          📚 Darslar
        </button>
        <button
          className={page === "shop" ? "active" : ""}
          onClick={() => setPage("shop")}
        >
          🛒 SHOP
        </button>
        <button
          className={page === "feedback" ? "active" : ""}
          onClick={() => setPage("feedback")}
        >
          💬 Feedback
        </button>
      </div>
      <p>© 2026 English Flame. Learn. Play. Grow.</p>
    </footer>
  );
}
