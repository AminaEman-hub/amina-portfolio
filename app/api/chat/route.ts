import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { message, amnaInfo } = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-3.5-flash-lite",
    });

    const prompt = `
You are Amina Eman's AI portfolio assistant.

Answer only using the information below.

${amnaInfo}

User question:
${message}
`;

    const result = await model.generateContent(prompt);
    const reply = result.response.text();

    return Response.json({ reply });
  } catch (error) {
   console.error("GEMINI ERROR:", error);

const errorMessage =
  error instanceof Error ? error.message : String(error);

return Response.json(
  { reply: `Gemini error: ${errorMessage}` },
  { status: 500 }
);
  }
}