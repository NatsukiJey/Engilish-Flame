// src/pages/Feedback.jsx
import { useState } from "react";

export default function Feedback({ setPage }) {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedback.trim()) return;

    try {
      const old = JSON.parse(localStorage.getItem("english-feedback") || "[]");
      localStorage.setItem("english-feedback", JSON.stringify([...old, feedback.trim()]));
    } catch {
      localStorage.setItem("english-feedback", JSON.stringify([feedback.trim()]));
    }

    setFeedback("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <main className="container feedback-page">
      <h1>Fikr-mulohaza 💬</h1>
      <p>
        Platformamiz haqidagi fikr-mulohazalaringiz va takliflaringizni yozib
        qoldiring. Biz tizimni doimiy takomillashtirib boramiz!
      </p>

      {submitted && (
        <div className="feedback-success-alert">
          ✅ Fikringiz muvaffaqiyatli qabul qilindi va saqlandi! Rahmat.
        </div>
      )}

      <form onSubmit={handleSubmit} className="feedback-form">
        <textarea
          placeholder="Fikringiz yoki taklifingizni bu yerga yozing..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows={6}
        />
        <div className="feedback-actions">
          <button type="submit" className="primary" disabled={!feedback.trim()}>
            Yuborish 🚀
          </button>
          <button
            type="button"
            className="secondary"
            onClick={() => setPage("dashboard")}
          >
            ← Darslarga qaytish
          </button>
        </div>
      </form>
    </main>
  );
}
