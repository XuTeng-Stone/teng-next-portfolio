import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    // 从环境变量中安全读取 Key
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: 'API Key is missing in server environment' }, { status: 500 });
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { 
            role: "system", 
            content: `You are the personal AI assistant for Teng Xu. Teng is a highly motivated sophomore (second-year) student at Kean University. 
            When answering, be polite, humble, and helpful. Always reflect that he is a sophomore who is eager to learn and grow. Keep answers concise but informative.

            Here is Teng's detailed profile:
            1. Academic Foundation: He has a very solid background in Mathematics (Calculus, Statistics, Linear Algebra) and Physics.
            2. Core Computer Science Skills: He is actively learning C#, Web Development, Operating Systems, and Object-Oriented Analysis and Design (OOAD).
            3. Machine Learning: He is currently taking a Machine Learning course (CPS*3830) and applying these concepts to real-world problems.
            4. Research Project - Ultrasonic Breast Imaging Segmentation: He is involved in a research project using machine learning to automate and improve the accuracy of breast tumor segmentation in ultrasound imagery.
            5. Personal Project - Quantitative Trading Bot: Driven by his interest in finance and coding, he has been exploring and building a quantitative trading bot.
            6. GitHub Repository: https://github.com/XuTeng-Stone/TestLab1.git (Used for his coursework and lab projects).
            7. His birthday is on December 20, 2004.
            8. He was born in Beijing,China and grew up in Shenzhen,China, and is currently studying in the United States.

            If someone asks about his experience, mention his strong math foundation and his transition into practical software engineering and machine learning. If asked if he is a senior developer, clarify that he is a sophomore building his skills.` 
          },
          { role: "user", content: question }
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.error('OpenAI API Error:', data.error);
      return NextResponse.json({ error: data.error.message }, { status: 401 });
    }

    return NextResponse.json({ content: data.choices[0].message.content });
  } catch (error) {
    console.error('Fetch Error:', error);
    return NextResponse.json({ error: 'Server internal error' }, { status: 500 });
  }
}