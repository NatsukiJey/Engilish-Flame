// src/pages/Feedback.jsx
import { useState } from "react";

const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID || "-1004402985001";
const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || "";

export default function Feedback({ setPage }) {
  const [userName, setUserName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null); // { type: "success" | "error", text: string }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!feedback.trim()) return;

    setIsSending(true);
    setStatusMessage(null);

    // Save backup copy to localStorage
    try {
      const old = JSON.parse(localStorage.getItem("english-feedback") || "[]");
      const record = {
        name: userName.trim() || "Anonim",
        text: feedback.trim(),
        date: new Date().toISOString()
      };
      localStorage.setItem("english-feedback", JSON.stringify([...old, record]));
    } catch (err) {
      console.warn("Could not save to localStorage backup:", err);
    }

    // Check if Bot Token is available
    if (!TELEGRAM_BOT_TOKEN) {
      setIsSending(false);
      setStatusMessage({
        type: "error",
        text: "⚠️ Telegram Bot Token kiritilmagan. Iltimos, loyihaga Bot Tokenni taqdim eting yoki .env faylida VITE_TELEGRAM_BOT_TOKEN ni sozlang."
      });
      return;
    }

    try {
      const messageText =
        `🔥 <b>English Flame — Yangi Fikr-mulohaza!</b>\n\n` +
        `👤 <b>Foydalanuvchi:</b> ${userName.trim() ? userName.trim() : "Anonim"}\n` +
        `💬 <b>Xabar:</b>\n${feedback.trim()}\n\n` +
        `📅 <b>Sana va vaqt:</b> ${new Date().toLocaleString("uz-UZ")}`;

      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: messageText,
            parse_mode: "HTML"
          })
        }
      );

      const result = await response.json();

      if (result.ok) {
        setFeedback("");
        setUserName("");
        setStatusMessage({
          type: "success",
          text: "✅ Xabaringiz Telegram guruhiga muvaffaqiyatli yuborildi! Rahmat."
        });
      } else {
        throw new Error(result.description || "Telegram API xatoligi yuz berdi");
      }
    } catch (err) {
      console.error("Telegram send error:", err);
      setStatusMessage({
        type: "error",
        text: `❌ Xatolik yuz berdi: ${err.message || "Telegramga yuborib bo‘lmadi"}`
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="container feedback-page">
      <h1>Fikr-mulohaza 💬</h1>
      <p>
        Platformamiz haqidagi taklif va mulohazalaringizni yuboring. Xabaringiz
        to‘g‘ridan-to‘g‘ri ma‘murlarning Telegram guruhiga (ID: {TELEGRAM_CHAT_ID}) yuboriladi.
      </p>

      {statusMessage && (
        <div
          className={
            statusMessage.type === "success"
              ? "feedback-success-alert"
              : "feedback-banner danger"
          }
          style={{ marginBottom: "20px" }}
        >
          {statusMessage.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="feedback-form">
        <div style={{ marginBottom: "16px" }}>
          <label
            style={{
              display: "block",
              color: "var(--text-muted)",
              fontSize: "14px",
              marginBottom: "8px",
              fontWeight: "600"
            }}
          >
            Ismingiz yoki Telegram @username (ixtiyoriy):
          </label>
          <input
            type="text"
            placeholder="Masalan: @jaloliddin yoki Ali"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            disabled={isSending}
            style={{
              width: "100%",
              background: "var(--bg-card)",
              border: "1px solid var(--border-card)",
              borderRadius: "12px",
              padding: "14px 16px",
              color: "#ffffff",
              fontSize: "15px",
              fontFamily: "inherit",
              outline: "none"
            }}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label
            style={{
              display: "block",
              color: "var(--text-muted)",
              fontSize: "14px",
              marginBottom: "8px",
              fontWeight: "600"
            }}
          >
            Fikringiz yoki taklifingiz:
          </label>
          <textarea
            placeholder="Fikringiz yoki taklifingizni bu yerga batafsil yozing..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={6}
            disabled={isSending}
            required
          />
        </div>

        <div className="feedback-actions">
          <button
            type="submit"
            className="primary"
            disabled={!feedback.trim() || isSending}
          >
            {isSending ? "Yuborilmoqda... ⏳" : "Telegramga yuborish 🚀"}
          </button>
          <button
            type="button"
            className="secondary"
            onClick={() => setPage("dashboard")}
            disabled={isSending}
          >
            ← Darslarga qaytish
          </button>
        </div>
      </form>
    </main>
  );
}
