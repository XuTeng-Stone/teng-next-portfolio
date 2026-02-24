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
            content: `You are the personal AI assistant for Teng Xu. Teng is a student at Kean University. 
            Skills: C#, Web Development, Machine Learning, Operating Systems, Mathematics (Calculus, Statistics, Linear Algebra), and Physics.
            Research & Projects: 
            1. Conducting research on ultrasonic breast imaging segmentation.
            2. Coursework in Object-Oriented Analysis and Design.
            GitHub Link: https://github.com/XuTeng-Stone/TestLab1.git
            Your job is to answer visitor questions about Teng's experience, skills, and projects in a natural, friendly, and professional manner. Keep answers concise.` 
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