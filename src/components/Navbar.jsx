// src/components/Navbar.jsx

export default function Navbar({ data, setPage }) {
  return (
    <header className="navbar">
      <div className="logo" onClick={() => setPage("home")}>
        🔥 English Flame
      </div>

      <div className="stats">
        <span className="stat-item" title="Jonlar soni">
          ❤️ <strong>{data.lives}</strong>
        </span>
        <span className="stat-item" title="Flame darajasi">
          🔥 <strong>{data.flame}</strong>
        </span>
        <span className="stat-item" title="Jami XP ball">
          ⚡ <strong>{data.xp}</strong> <small>XP</small>
        </span>
      </div>
    </header>
  );
}
