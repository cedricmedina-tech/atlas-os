"use client";

import { useState } from "react";

declare global {
  interface Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
  }
}

export default function SearchBox() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);

  async function search() {
    if (!message.trim()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await res.json();

      setReply(data.reply);
    } catch {
      setReply("Erro ao conectar ao ATLAS.");
    }

    setLoading(false);
  }

  function startVoice() {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Seu navegador não suporta reconhecimento de voz.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "pt-PT";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    setListening(true);

    recognition.start();

    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript;

      setMessage(text);
      setListening(false);

      setTimeout(() => {
        document.getElementById("atlas-search")?.focus();
      }, 200);

      setTimeout(() => {
        fetchSearch(text);
      }, 300);
    };

    recognition.onerror = () => {
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };
  }

  async function fetchSearch(text: string) {
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
        }),
      });

      const data = await res.json();

      setReply(data.reply);
    } catch {
      setReply("Erro ao conectar ao ATLAS.");
    }

    setLoading(false);
  }

  return (
    <>
      <input
        id="atlas-search"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            search();
          }
        }}
        placeholder="Ex.: Quero abrir uma pizzaria em Faro"
        style={{
          width: "100%",
          padding: 14,
          marginTop: 25,
          borderRadius: 10,
          border: "1px solid #24446D",
          background: "#10233C",
          color: "white",
          fontSize: 15,
          outline: "none",
        }}
      />

      <button
        onClick={search}
        style={{
          width: "100%",
          marginTop: 14,
          padding: 15,
          borderRadius: 12,
          border: 0,
          cursor: "pointer",
          background: "#2DE2C5",
          color: "#08111F",
          fontWeight: "bold",
          fontSize: 16,
        }}
      >
        {loading ? "Pesquisando..." : "Pesquisar"}
      </button>

      <button
        onClick={startVoice}
        style={{
          width: "100%",
          marginTop: 12,
          padding: 15,
          borderRadius: 12,
          border: "1px solid #39D6FF",
          background: "#10233C",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: 16,
        }}
      >
        {listening ? "🎙️ Ouvindo..." : "🎤 Falar com o ATLAS"}
      </button>

      {reply && (
        <div
          style={{
            marginTop: 20,
            background: "#10233C",
            padding: 18,
            borderRadius: 12,
            color: "#D8E7F7",
            whiteSpace: "pre-wrap",
            lineHeight: 1.7,
            maxHeight: 600,
            overflowY: "auto",
          }}
        >
          {reply}
        </div>
      )}
    </>
  );
}