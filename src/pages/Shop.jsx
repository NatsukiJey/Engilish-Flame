// src/pages/Shop.jsx

export default function Shop({ data, setData, setPage }) {
  function buyItem(item) {
    let price = 150;
    if (item === "flame") price = 300;
    if (item === "full_life") price = 400;

    if (data.xp < price) {
      alert("XP yetarli emas! Darslarni bajarib ko‘proq XP to‘plang.");
      return;
    }

    if (item === "life" && data.lives >= 5) {
      alert("Sizning jonlaringiz allaqachon to‘liq (5 ta)!");
      return;
    }

    if (item === "full_life" && data.lives >= 5) {
      alert("Sizning jonlaringiz allaqachon to‘liq (5 ta)!");
      return;
    }

    setData((old) => ({
      ...old,
      xp: old.xp - price,
      lives:
        item === "life"
          ? Math.min(5, old.lives + 1)
          : item === "full_life"
          ? 5
          : old.lives,
      flame: item === "flame" ? old.flame + 1 : old.flame
    }));

    alert("Xarid muvaffaqiyatli amalga oshirildi! 🔥");
  }

  return (
    <main className="container shop-page">
      <div className="shop-header">
        <h1>Flame Shop 🛒</h1>
        <p>To‘plagan XP laringiz evaziga jonlar va flame xarid qiling.</p>
        <div className="balance-pill">
          Joriy balans: ⚡ <strong>{data.xp} XP</strong>
        </div>
      </div>

      <div className="shop-grid">
        {/* 1 Life */}
        <div className="shop-card">
          <div className="shop-card-icon">❤️</div>
          <h2>1 Ta Jon</h2>
          <p>Xatolaringiz uchun bitta qo‘shimcha jon tiklash (maksimum 5 ta).</p>
          <div className="shop-price">⚡ 150 XP</div>
          <button
            type="button"
            className="primary"
            onClick={() => buyItem("life")}
            disabled={data.lives >= 5}
          >
            {data.lives >= 5 ? "Jonlar to‘liq" : "Sotib olish"}
          </button>
        </div>

        {/* Full Hearts */}
        <div className="shop-card featured">
          <span className="featured-badge">Tejamkor</span>
          <div className="shop-card-icon">💖</div>
          <h2>To‘liq Jonlar (5 ta)</h2>
          <p>Jonlaringizni to‘liq 5 tagacha bir zumda qayta tiklang.</p>
          <div className="shop-price">⚡ 400 XP</div>
          <button
            type="button"
            className="primary"
            onClick={() => buyItem("full_life")}
            disabled={data.lives >= 5}
          >
            {data.lives >= 5 ? "Jonlar to‘liq" : "To‘liq tiklash"}
          </button>
        </div>

        {/* Flame Booster */}
        <div className="shop-card">
          <div className="shop-card-icon">🔥</div>
          <h2>Flame Ko‘paytirgich</h2>
          <p>Flame reytingingizni oshiring va darajangizni ko‘rsating.</p>
          <div className="shop-price">⚡ 300 XP</div>
          <button
            type="button"
            className="primary"
            onClick={() => buyItem("flame")}
          >
            Sotib olish
          </button>
        </div>
      </div>

      <div className="shop-footer-action">
        <button
          type="button"
          className="secondary"
          onClick={() => setPage("dashboard")}
        >
          ← Darslarga qaytish
        </button>
      </div>
    </main>
  );
}
