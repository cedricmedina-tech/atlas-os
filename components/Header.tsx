"use client";

import AtlasLogo from "./AtlasLogo";

export default function Header() {
  return (
    <header
      style={{
        height: 84,
        background: "#08111F",
        borderBottom: "1px solid #1F2C44",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px",
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      {/* Logo */}

      <AtlasLogo />

      {/* Pesquisa */}

      <div
        style={{
          flex: 1,
          maxWidth: 700,
          marginLeft: 60,
          marginRight: 60,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#101B2D",
            border: "1px solid #233551",
            borderRadius: 18,
            padding: "0 20px",
            height: 54,
          }}
        >
          <input
            placeholder="Pesquisar cidade, empresa ou oportunidade..."
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              color: "white",
              fontSize: 15,
            }}
          />

          <button
            style={{
              background: "transparent",
              border: "none",
              color: "#22D3EE",
              fontSize: 22,
              cursor: "pointer",
            }}
          >
            🎤
          </button>
        </div>
      </div>

      {/* Direita */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <button className="atlas-button">
          Nova análise
        </button>

        <button
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "#13233B",
            border: "1px solid #294261",
            color: "#22D3EE",
            cursor: "pointer",
            fontSize: 18,
          }}
        >
          🔔
        </button>

        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background:
              "linear-gradient(135deg,#22D3EE,#2563EB)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: 700,
            fontSize: 18,
          }}
        >
          C
        </div>
      </div>
    </header>
  );
}