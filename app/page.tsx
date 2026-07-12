"use client";

import dynamic from "next/dynamic";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
});

export default function Home() {
  const cards = [
    {
      title: "Score",
      value: "91",
      color: "#22D3EE",
    },
    {
      title: "Concorrência",
      value: "24",
      color: "#3B82F6",
    },
    {
      title: "Fluxo",
      value: "Alto",
      color: "#10B981",
    },
    {
      title: "Renda",
      value: "€€€",
      color: "#F59E0B",
    },
  ];

  return (
    <>
      <Header />

      <main
        style={{
          display: "flex",
          background: "#08111F",
          minHeight: "calc(100vh - 84px)",
        }}
      >
        <Sidebar />

        <section
          style={{
            flex: 1,
            padding: 35,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: 24,
            }}
          >
            <div
              style={{
                background: "#101B2D",
                borderRadius: 22,
                padding: 32,
                border: "1px solid #20324B",
              }}
            >
              <h1
                style={{
                  color: "white",
                  fontSize: 34,
                  marginBottom: 10,
                }}
              >
                Executive Report
              </h1>

              <p
                style={{
                  color: "#8FA7C5",
                  fontSize: 18,
                  lineHeight: 1.8,
                }}
              >
                Faça uma pesquisa e o ATLAS irá gerar um relatório
                executivo completo contendo Score, Demografia,
                Fluxo, Concorrência, SWOT e Plano de Implantação.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4,1fr)",
                  gap: 18,
                  marginTop: 35,
                }}
              >
                {cards.map((card) => (
                  <div
                    key={card.title}
                    style={{
                      background: "#16263E",
                      borderRadius: 16,
                      padding: 22,
                    }}
                  >
                    <div
                      style={{
                        color: "#8FA7C5",
                        fontSize: 14,
                      }}
                    >
                      {card.title}
                    </div>

                    <div
                      style={{
                        color: card.color,
                        fontSize: 34,
                        fontWeight: 700,
                        marginTop: 10,
                      }}
                    >
                      {card.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              <div
                style={{
                  background: "#101B2D",
                  borderRadius: 22,
                  padding: 18,
                  border: "1px solid #20324B",
                }}
              >
                <h3
                  style={{
                    color: "white",
                    marginBottom: 16,
                  }}
                >
                  Smart Map
                </h3>

                <div
                  style={{
                    height: 300,
                    borderRadius: 16,
                    overflow: "hidden",
                  }}
                >
                  <Map />
                </div>
              </div>

              <div
                style={{
                  background: "#101B2D",
                  borderRadius: 22,
                  padding: 24,
                  border: "1px solid #20324B",
                }}
              >
                <h3
                  style={{
                    color: "white",
                    marginBottom: 12,
                  }}
                >
                  Executive Status
                </h3>

                <div
                  style={{
                    color: "#8FA7C5",
                    lineHeight: 1.8,
                  }}
                >
                  • IA Online

                  <br />

                  • OpenAI Conectada

                  <br />

                  • Mapa Ativo

                  <br />

                  • Sistema Operacional
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}