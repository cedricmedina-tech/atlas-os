"use client";

const menu = [
  "Dashboard",
  "Nova Análise",
  "Workspace",
  "Projetos",
  "Smart Map",
  "Analytics",
  "Relatórios",
  "Configurações",
];

export default function Sidebar() {
  return (
    <aside
      style={{
        width: 280,
        background: "#0A1220",
        borderRight: "1px solid #1E2D45",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "28px 20px",
      }}
    >
      <div>
        <p
          style={{
            color: "#6B7C98",
            fontSize: 12,
            letterSpacing: 2,
            marginBottom: 25,
            textTransform: "uppercase",
          }}
        >
          Workspace
        </p>

        {menu.map((item, index) => (
          <div
            key={item}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "14px 18px",
              borderRadius: 16,
              marginBottom: 8,
              cursor: "pointer",
              transition: ".25s",
              background:
                index === 0
                  ? "linear-gradient(90deg,#1A2E4F,#10233C)"
                  : "transparent",
              border:
                index === 0
                  ? "1px solid #24446D"
                  : "1px solid transparent",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background:
                  index === 0 ? "#22D3EE" : "#314764",
              }}
            />

            <span
              style={{
                color: index === 0 ? "#FFFFFF" : "#A6B5CB",
                fontSize: 15,
                fontWeight: index === 0 ? 700 : 500,
              }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>

      <div
        className="atlas-card"
        style={{
          padding: 22,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <strong
            style={{
              color: "#FFFFFF",
            }}
          >
            ATLAS AI
          </strong>

          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#00E676",
            }}
          />
        </div>

        <p
          style={{
            marginTop: 10,
            fontSize: 13,
          }}
        >
          GPT-5.5 Enterprise
        </p>

        <div
          style={{
            marginTop: 18,
            height: 6,
            borderRadius: 20,
            background: "#0A1220",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(90deg,#22D3EE,#3B82F6)",
            }}
          />
        </div>

        <p
          style={{
            marginTop: 14,
            fontSize: 12,
            color: "#8FA7C5",
          }}
        >
          Enterprise Intelligence Online
        </p>
      </div>
    </aside>
  );
}