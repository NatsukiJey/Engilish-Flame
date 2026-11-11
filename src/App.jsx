
import { useEffect, useState } from "react";
import "./index.css";

const questions = [
  { q: 'I ___ a student.', options: ["am", "is", "are"], answer: "am", type: "grammar" },
  { q: 'She ___ English every day.', options: ["study", "studies", "studying"], answer: "studies", type: "grammar" },
  { q: '"Apple" so‘zining tarjimasi?', options: ["Olma", "Kitob", "Uy"], answer: "Olma", type: "vocabulary" },
  { q: 'To‘g‘ri gapni tanlang.', options: ["I like English", "I English like", "Like I English"], answer: "I like English", type: "sentence" },
  { q: '"Beautiful" so‘zining tarjimasi?', options: ["Chiroyli", "Tez", "Katta"], answer: "Chiroyli", type: "vocabulary" }
];

const defaultData = {
  xp: 0,
  lives: 5,
  flame: 1,
  completed: 0
};

function App() {
  const [page, setPage] = useState("home");
  const [data, setData] = useState(() => {
    try {
      return {
        ...defaultData,
        ...JSON.parse(localStorage.getItem("english-flame") || "{}")
      };
    } catch {
      return defaultData;
    }
  });

  const [level, setLevel] = useState(1);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    localStorage.setItem("english-flame", JSON.stringify(data));
  }, [data]);

  const currentQuestion = questions[questionIndex];

  function startLevel(number) {
    if (number > data.completed + 1) return;
    if (data.lives <= 0) {
      setMessage("Jonlaringiz tugadi! Shop orqali tiklang.");
      return;
    }
    setLevel(number);
    setQuestionIndex(0);
    setSelected("");
    setMessage("");
    setPage("lesson");
  }

  function checkAnswer() {
    if (!selected) return;

    if (selected === currentQuestion.answer) {
      setMessage("Ajoyib! To‘g‘ri javob! 🔥");
    } else {
      setMessage("Noto‘g‘ri javob. To‘g‘ri javob: " + currentQuestion.answer);
      setData(old => ({
        ...old,
        lives: Math.max(0, old.lives - 1)
      }));
    }
  }

  function nextQuestion() {
    if (selected === currentQuestion.answer) {
      if (questionIndex < questions.length - 1) {
        setQuestionIndex(old => old + 1);
        setSelected("");
        setMessage("");
      } else {
        setData(old => ({
          ...old,
          xp: old.xp + 15,
          completed: Math.max(old.completed, level)
        }));
        setPage("complete");
      }
    } else {
      setSelected("");
      setMessage("");
    }
  }

  function buyItem(item) {
    const price = item === "life" ? 150 : 300;

    if (data.xp < price) {
      alert("XP yetarli emas!");
      return;
    }

    setData(old => ({
      ...old,
      xp: old.xp - price,
      lives: item === "life" ? Math.min(5, old.lives + 1) : old.lives,
      flame: item === "flame" ? old.flame + 1 : old.flame
    }));

    alert("Xarid muvaffaqiyatli! 🔥");
  }

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo" onClick={() => setPage("home")}>
          🔥 English Flame
        </div>

        <div className="stats">
          <span>❤️ {data.lives}</span>
          <span>🔥 {data.flame}</span>
          <span>⚡ {data.xp}</span>
        </div>
      </header>

      {page === "home" && (
        <main className="hero">
          <div className="hero-content">
            <span className="tag">YOUR ENGLISH JOURNEY</span>
            <h1>Ingliz tilini <span>o‘yin orqali</span> o‘rgan!</h1>
            <p>
              Har kuni yangi bilim, yangi imkoniyat va yangi daraja.
              English Flame bilan ingliz tilini o‘rganish yanada qiziqarli!
            </p>
            <button className="primary" onClick={() => setPage("dashboard")}>
              Bepul o‘qishni boshlash →
            </button>
          </div>
          <div className="flame">🔥</div>
        </main>
      )}

      {page === "dashboard" && (
        <main className="container">
          <h1>O‘quv markazi 📚</h1>
          <p>Levelarni ketma-ket bajaring!</p>

          <div className="progress">
            <div style={{ width: `${data.completed / 25 * 100}%` }} />
          </div>
          <p>{data.completed} / 25 level tugatildi</p>

          <div className="levels">
            {Array.from({ length: 25 }, (_, i) => {
              const number = i + 1;
              const unlocked = number <= data.completed + 1;
              return (
                <button
                  key={number}
                  className={`level ${unlocked ? "unlocked" : "locked"}`}
                  disabled={!unlocked}
                  onClick={() => startLevel(number)}
                >
                  <span>{unlocked ? "🔥" : "🔒"}</span>
                  <strong>Level {number}</strong>
                  <small>{number <= data.completed ? "Bajarilgan ✓" : unlocked ? "Boshlash" : "Yopiq"}</small>
                </button>
              );
            })}
          </div>

          <button className="secondary" onClick={() => setPage("home")}>
            ← Asosiy sahifa
          </button>
        </main>
      )}

      {page === "lesson" && (
        <main className="lesson">
          <button className="back" onClick={() => setPage("dashboard")}>← Chiqish</button>
          <h2>Level {level}</h2>

          <div className="progress">
            <div style={{ width: `${(questionIndex + 1) / questions.length * 100}%` }} />
          </div>

          <p>Savol {questionIndex + 1} / {questions.length}</p>
          <div className="question-card">
            <h2>{currentQuestion.q}</h2>
            <div className="answers">
              {currentQuestion.options.map(option => (
                <button
                  key={option}
                  className={selected === option ? "answer selected" : "answer"}
                  onClick={() => {
                    setSelected(option);
                    setMessage("");
                  }}
                >
                  {option}
                </button>
              ))}
            </div>

            {message && <p className="message">{message}</p>}

            {!message ? (
              <button className="primary full" onClick={checkAnswer}>
                Javobni tekshirish
              </button>
            ) : selected === currentQuestion.answer ? (
              <button className="primary full" onClick={nextQuestion}>
                Davom etish →
              </button>
            ) : (
              <button className="secondary full" onClick={() => {
                setSelected("");
                setMessage("");
              }}>
                Qayta urinish
              </button>
            )}
          </div>
        </main>
      )}

      {page === "complete" && (
        <main className="complete">
          <div className="big-flame">🔥</div>
          <h1>Level tugadi!</h1>
          <p>Tabriklaymiz! Siz 15 XP qo‘lga kiritdingiz.</p>
          <button className="primary" onClick={() => setPage("dashboard")}>
            Keyingi level →
          </button>
        </main>
      )}

      {page === "shop" && (
        <main className="container">
          <h1>Flame Shop 🛒</h1>
          <p>Joriy balans: ⚡ {data.xp} XP</p>
          <div className="shop-grid">
            <div className="shop-card">
              <h2>❤️ Jon</h2>
              <p>1 ta jon tiklash</p>
              <h3>150 XP</h3>
              <button className="primary" onClick={() => buyItem("life")}>Sotib olish</button>
            </div>
            <div className="shop-card">
              <h2>🔥 Flame</h2>
              <p>Flame sonini oshirish</p>
              <h3>300 XP</h3>
              <button className="primary" onClick={() => buyItem("flame")}>Sotib olish</button>
            </div>
          </div>
        </main>
      )}

      {page === "feedback" && (
        <main className="container">
          <h1>Fikr-mulohaza 💬</h1>
          <p>Platformamiz haqida fikringizni yozing.</p>
          <textarea
            placeholder="Fikringizni yozing..."
            value={feedback}
            onChange={e => setFeedback(e.target.value)}
          />
          <button className="primary" onClick={() => {
            if (!feedback.trim()) return;
            const old = JSON.parse(localStorage.getItem("english-feedback") || "[]");
            localStorage.setItem("english-feedback", JSON.stringify([...old, feedback]));
            setFeedback("");
            alert("Fikringiz saqlandi!");
          }}>
            Yuborish
          </button>
        </main>
      )}

<footer>
  <div className="footer-menu">
    <button onClick={() => setPage("home")}>🏠 Home</button>
    <button onClick={() => setPage("dashboard")}>📚 Darslar</button>
    <button onClick={() => setPage("shop")}>🛒 SHOP</button>
    <button onClick={() => setPage("feedback")}>💬 Feedback</button>
  </div>
  <p>© 2026 English Flame. Learn. Play. Grow.</p>
</footer>

    </div>
  );
}

export default App;
