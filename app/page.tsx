export default function HomePage() {
  const categories = [
    { name: "SOCIAL MEDIA", count: 38, desc: "Twitter/X, Instagram, TikTok, Facebook, LinkedIn, Threads, Telegram, Twitch", icon: " ", color: "#6366f1" },
    { name: "AI / ML", count: 9, desc: "ChatGPT-4o, Vision, Copilot, Content Detector, Image Generator, RunwayML", icon: " ", color: "#8b5cf6" },
    { name: "E-COMMERCE", count: 10, desc: "Shopee, Amazon, AliExpress, IKEA, Taobao, Steam", icon: " ", color: "#ec4899" },
    { name: "FINANCE", count: 14, desc: "TradingView, Bloomberg, Binance, CoinMarketCap, Forex, Metal Prices", icon: " ", color: "#10b981" },
    { name: "DATA INTEL", count: 11, desc: "Google SERP, News, Jobs, Maps, Apollo.io, Skip Tracing", icon: " ", color: "#f59e0b" },
    { name: "MEDIA", count: 9, desc: "YouTube, Spotify, Medium, Telegram Upload", icon: " ", color: "#ef4444" },
    { name: "TOOLS", count: 13, desc: "Translation, Scraping, WhatsApp, Truecaller, Booking, Airbnb", icon: " ", color: "#06b6d4" },
    { name: "FREE CRYPTO", count: 11, desc: "DeFiLlama, CoinGecko, Hyperliquid, Polymarket, CoinMarketCap", icon: " ", color: "#84cc16" },
  ];

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* HERO */}
      <section style={{ padding: "80px 20px 60px", textAlign: "center", background: "linear-gradient(180deg, #0a0a1a 0%, #0a0a0f 100%)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ width: 100, height: 100, margin: "0 auto 30px", background: "linear-gradient(135deg, #6366f1 0%, #ec4899 50%, #f59e0b 100%)", borderRadius: 24, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48, boxShadow: "0 0 60px rgba(99,102,241,0.4)" }}>
            B
          </div>
          <h1 style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800, margin: "0 0 16px", background: "linear-gradient(135deg, #6366f1, #ec4899, #f59e0b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1.1 }}>
            Blockbuster.ai
          </h1>
          <p style={{ fontSize: "clamp(16px, 2.5vw, 22px)", color: "#a0a0b0", margin: "0 0 12px", fontWeight: 500 }}>
            The Ultimate Multi-API Hub
          </p>
          <p style={{ fontSize: 18, color: "#6366f1", fontWeight: 700, margin: "0 0 30px" }}>
            115+ Premium Endpoints  |  x402 Micropayments  |  Base Chain
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/openapi.json" style={{ padding: "14px 32px", background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "#fff", borderRadius: 12, textDecoration: "none", fontWeight: 700, fontSize: 16 }}>
              View OpenAPI Spec
            </a>
            <a href="#categories" style={{ padding: "14px 32px", border: "2px solid #6366f1", color: "#6366f1", borderRadius: 12, textDecoration: "none", fontWeight: 700, fontSize: 16 }}>
              Browse Endpoints
            </a>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ padding: "30px 20px", background: "#0f0f1a", borderTop: "1px solid #1a1a2e", borderBottom: "1px solid #1a1a2e" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 20 }}>
          {[
            { label: "Total Endpoints", value: "115+" },
            { label: "API Categories", value: "8" },
            { label: "Price Range", value: "$0.05 - $0.20" },
            { label: "Network", value: "Base (USDC)" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#6366f1" }}>{s.value}</div>
              <div style={{ fontSize: 13, color: "#666", textTransform: "uppercase", letterSpacing: 1 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" style={{ padding: "60px 20px", maxWidth: 1000, margin: "0 auto" }}>
        <h2 style={{ fontSize: 32, fontWeight: 800, textAlign: "center", marginBottom: 40, color: "#fff" }}>API Categories</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
          {categories.map((cat) => (
            <div key={cat.name} style={{ background: "#12121e", border: "1px solid #1e1e30", borderRadius: 16, padding: 24, cursor: "default" }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{cat.icon}</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: cat.color, marginBottom: 4 }}>{cat.name}</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#fff", marginBottom: 8 }}>{cat.count} endpoints</div>
              <div style={{ fontSize: 13, color: "#888", lineHeight: 1.5 }}>{cat.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "60px 20px", background: "#0f0f1a" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, textAlign: "center", marginBottom: 40, color: "#fff" }}>How It Works</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { step: "01", title: "Discover", desc: "Browse endpoints via the OpenAPI spec at /openapi.json. Each endpoint has description, parameters, and pricing." },
              { step: "02", title: "Pay", desc: "Send x402 payment in USDC on Base chain. Prices range from $0.05 to $0.20 per request." },
              { step: "03", title: "Get Data", desc: "Receive structured JSON response. All endpoints return {success, data} format for easy parsing." },
            ].map((item) => (
              <div key={item.step} style={{ display: "flex", gap: 20, alignItems: "flex-start", background: "#12121e", borderRadius: 16, padding: 24, border: "1px solid #1e1e30" }}>
                <div style={{ fontSize: 32, fontWeight: 800, color: "#6366f1", minWidth: 50 }}>{item.step}</div>
                <div>
                  <div style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 6 }}>{item.title}</div>
                  <div style={{ fontSize: 14, color: "#888", lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: "#fff", marginBottom: 12 }}>Ready to Build?</h2>
          <p style={{ fontSize: 16, color: "#888", marginBottom: 30 }}>115+ endpoints. Pay per request. No subscriptions.</p>
          <a href="/openapi.json" style={{ display: "inline-block", padding: "16px 40px", background: "linear-gradient(135deg, #6366f1, #ec4899)", color: "#fff", borderRadius: 12, textDecoration: "none", fontWeight: 700, fontSize: 18 }}>
            Get Started
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "30px 20px", textAlign: "center", borderTop: "1px solid #1a1a2e", color: "#555", fontSize: 13 }}>
        <p style={{ margin: "0 0 8px" }}>Blockbuster.ai - Powered by x402 Protocol on Base Chain</p>
        <p style={{ margin: 0 }}>
          <a href="/openapi.json" style={{ color: "#6366f1", textDecoration: "none" }}>OpenAPI Spec</a>
          {" | "}
          <a href="/.well-known/x402" style={{ color: "#6366f1", textDecoration: "none" }}>x402 Discovery</a>
        </p>
      </footer>
    </div>
  );
}
