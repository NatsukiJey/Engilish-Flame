// src/pages/Home.jsx
import { stages } from "../data/levels";

export default function Home({ data, setPage }) {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <main className="hero">
        <div className="hero-content">
          <span className="tag">YOUR ENGLISH JOURNEY</span>
          <h1>
            Ingliz tilini <span>o‘yin orqali</span> o‘rgan!
          </h1>
          <p>
            Har kuni yangi bilim, yangi imkoniyat va yangi daraja. English Flame
            bilan ingliz tilini o‘rganish yanada qiziqarli! 25 ta bosqichli
            interaktiv tizim orqali noldan yuqori darajagacha o‘rganing.
          </p>
          <div className="hero-buttons">
            <button className="primary" onClick={() => setPage("dashboard")}>
              Bepul o‘qishni boshlash →
            </button>
            <button className="secondary" onClick={() => setPage("shop")}>
              🛒 Flame Shop
            </button>
          </div>
        </div>
        <div className="flame">🔥</div>
      </main>

      {/* 5 Stages Overview */}
      <section className="stages-overview container">
        <div className="section-title-wrap">
          <h2>5 Ta Asosiy Bosqich (25 Daraja)</h2>
          <p>Oddiy iboralardan tortib eng murakkab akademik grammatikagacha</p>
        </div>

        <div className="stages-grid">
          {stages.map((stage) => {
            const completedInStage = stage.levelIds.filter(
              (id) => id <= data.completed
            ).length;
            const isUnlocked = stage.levelIds.some(
              (id) => id <= data.completed + 1
            );

            return (
              <div
                key={stage.id}
                className={`stage-card ${isUnlocked ? "active" : "locked"}`}
                onClick={() => setPage("dashboard")}
              >
                <div className="stage-card-header">
                  <span className="stage-badge">{stage.badge}</span>
                  <span className="stage-range">{stage.range}</span>
                </div>
                <h3>{stage.name}</h3>
                <p>{stage.description}</p>
                <div className="stage-progress-info">
                  <span>
                    {completedInStage} / {stage.levelIds.length} tugallandi
                  </span>
                  <div className="mini-progress">
                    <div
                      style={{
                        width: `${(completedInStage / stage.levelIds.length) * 100}%`
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
