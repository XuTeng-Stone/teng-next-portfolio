"use client";
import { useState } from 'react';
import axios from 'axios';

export default function AIChat() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('Hello! I am Teng Xu\'s AI assistant. You can ask me about his skills, projects, or background.');
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) return;
    setLoading(true);
    
    try {
      // 调用我们刚刚创建的本地后端接口
      const res = await axios.post('/api/chat', { question });
      
      if (res.data.error) {
        setResponse(`Error: ${res.data.error}`);
      } else {
        setResponse(res.data.content);
      }
    } catch (error: any) {
      const errorMsg = error.response?.data?.error || "Failed to connect to AI. Please ensure your API Key is valid and the server is restarted.";
      setResponse(errorMsg);
    } finally {
      setLoading(false);
      setQuestion('');
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* 聊天内容展示区 */}
      <div className="h-48 overflow-y-auto bg-gray-50 p-4 rounded-lg border border-gray-200 text-gray-700 whitespace-pre-wrap shadow-inner transition-all">
        {loading ? (
          <div className="flex items-center gap-2 text-blue-600">
            <span className="animate-bounce">●</span>
            <span className="animate-bounce [animation-delay:0.2s]">●</span>
            <span className="animate-bounce [animation-delay:0.4s]">●</span>
            <span className="ml-2 text-sm italic">Thinking...</span>
          </div>
        ) : (
          <p className="animate-in fade-in duration-500">{response}</p>
        )}
      </div>

      {/* 输入区域 */}
      <div className="flex gap-2">
        <input 
          type="text" 
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask me anything..."
          onKeyDown={(e) => e.key === 'Enter' && askAI()}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black shadow-sm"
        />
        <button 
          onClick={askAI} 
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all disabled:bg-gray-400 font-semibold active:scale-95"
        >
          {loading ? 'Wait...' : 'Send'}
        </button>
      </div>
    </div>
  );
}