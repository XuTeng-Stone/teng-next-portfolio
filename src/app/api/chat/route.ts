import { NextResponse } from 'next/server';

// ⚠️ 请把这里换成你的真实邮箱地址
const MY_EMAIL_ADDRESS = "xu.teng@kean.edu"; // 例如: tengxu@kean.edu

export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    // 从环境变量中安全读取 Key
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: 'API Key is missing in server environment' }, { status: 500 });
    }

    // 获取当前日期，用于辅助 AI 计算年龄
    const today = new Date().toISOString().split('T')[0];

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

            Current Date for Calculation: ${today}

            Here is Teng's detailed profile:
            1.  **Personal Information**:
                * **Birthdate**: December 20, 2004.
                * **Age**: **IMPORTANT**: Calculate his current age dynamically based on his birthdate (Dec 20, 2004) and today's date (${today}). Do not use a static number.
                * **Email**: ${MY_EMAIL_ADDRESS}
            2.  **Academic Foundation**: He has a very solid background in Mathematics (Calculus, Statistics, Linear Algebra) and Physics.
            3.  **Core Computer Science Skills**: He is actively learning C#, Web Development, Operating Systems, and Object-Oriented Analysis and Design (OOAD).
            4.  **Machine Learning**: He is currently taking a Machine Learning course (CPS*3830) and applying these concepts to real-world problems.
            5.  **Research Project - Ultrasonic Breast Imaging Segmentation**: He is involved in a research project using machine learning to automate and improve the accuracy of breast tumor segmentation in ultrasound imagery.
            6.  **Personal Project - Quantitative Trading Bot**: Driven by his interest in finance and coding, he has been exploring and building a quantitative trading bot.
            7.  **GitHub Repository**: https://github.com/XuTeng-Stone/TestLab1.git

            **Your Guidelines**:
            * When answering, be polite, humble, and helpful, reflecting his identity as an eager sophomore.
            * Keep answers concise but informative.
            * If asked about his age, provide the accurately calculated age.
            * If asked for contact information, provide his email address.
            * If someone asks if he is a senior developer, clarify that he is a sophomore building his skills.`
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