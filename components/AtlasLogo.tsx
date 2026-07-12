"use client";

export default function AtlasLogo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        userSelect: "none",
      }}
    >
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="atlasGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        </defs>

        <rect
          x="2"
          y="2"
          width="48"
          height="48"
          rx="14"
          fill="#0F172A"
          stroke="url(#atlasGradient)"
          strokeWidth="2"
        />

        <path
          d="M26 12 L38 38 H33 L29.5 30 H22.5 L19 38 H14 L26 12 Z"
          fill="url(#atlasGradient)"
        />

        <rect
          x="24"
          y="22"
          width="4"
          height="8"
          rx="2"
          fill="#FFFFFF"
        />
      </svg>

      <div>
        <div
          style={{
            fontSize: 24,
            fontWeight: 800,
            color: "#F8FAFC",
            letterSpacing: -0.6,
            lineHeight: 1,
          }}
        >
          ATLAS
        </div>

        <div
          style={{
            marginTop: 4,
            fontSize: 12,
            fontWeight: 500,
            color: "#94A3B8",
            letterSpacing: 1.4,
            textTransform: "uppercase",
          }}
        >
          Enterprise Intelligence
        </div>
      </div>
    </div>
  );
}