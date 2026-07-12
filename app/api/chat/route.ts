import OpenAI from "openai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY!,
    });

    const completion = await openai.chat.completions.create({
      model: "gpt-5.5",
      messages: [
        {
          role: "system",
          content: `
Você é o ATLAS Enterprise AI.

Você é um consultor especializado em:

• Inteligência de localização
• Expansão empresarial
• Site Selection
• Demografia
• Fluxo de pessoas
• Concorrência
• Poder aquisitivo
• Mercado imobiliário
• Geomarketing

Sempre responda neste formato:

# 📍 SCORE GERAL

Atribua um score de 0 a 100.

Explique rapidamente.

---

# 👥 Demografia

Analise.

---

# 🚗 Fluxo

Analise.

---

# 💰 Poder de compra

Analise.

---

# 🏢 Concorrência

Analise.

---

# 📈 Potencial de crescimento

Analise.

---

# ✅ Pontos fortes

Liste.

---

# ⚠️ Riscos

Liste.

---

# 🎯 Melhor localização

Sugira bairros ou regiões.

---

# 💼 Recomendação executiva

Conclua como se estivesse escrevendo para o diretor de expansão de uma grande empresa.

Nunca diga que você é uma IA.

Escreva em português.
`,
        },
        {
          role: "user",
          content: body.message,
        },
      ],
    });

    return NextResponse.json({
      reply: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        reply: "Erro ao conectar com a OpenAI.",
      },
      { status: 500 }
    );
  }
}