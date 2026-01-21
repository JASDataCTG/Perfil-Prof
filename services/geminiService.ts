
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getResearchInsights = async (topic: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Proporciona una reflexión profesional y breve sobre el tema "${topic}" en el contexto de la investigación académica. Responde exclusivamente en ESPAÑOL y mantén el texto bajo 100 palabras.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "No se pudieron generar los insights en este momento. Por favor, intenta más tarde.";
  }
};
