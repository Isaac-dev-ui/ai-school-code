"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function IsaacAI() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm Isack AI, your AI assistant. I can help you with coding, answer questions, explain concepts, or just chat. What would you like to know?"
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput("");
    setLoading(true);

    setMessages(prev => [...prev, { role: "user", content: userMessage }]);

    try {
      const res = await fetch("/api/isaac", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage, history: messages })
      });

      const data = await res.json();
      
      if (data.ok) {
        setMessages(prev => [...prev, { role: "assistant", content: data.text }]);
      } else {
        setMessages(prev => [...prev, { role: "assistant", content: "Sorry, I encountered an error. Please try again." }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: "assistant", content: "Sorry, I'm having trouble connecting. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="mt-8 flex flex-col h-[calc(100vh-200px)]">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <span className="text-2xl">🤖</span>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Isack AI</h1>
          <p className="text-sm text-neutral-400">Your AI assistant - Ask me anything!</p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto bg-neutral-900 rounded-2xl border border-neutral-800 p-4 space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
          >
            <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${
              msg.role === "user" 
                ? "bg-gradient-to-br from-green-500 to-emerald-600" 
                : "bg-gradient-to-br from-blue-500 to-purple-600"
            }`}>
              {msg.role === "user" ? "👤" : "🤖"}
            </div>
            <div className={`max-w-[80%] rounded-2xl p-4 ${
              msg.role === "user" 
                ? "bg-neutral-800" 
                : "bg-neutral-800/50 border border-neutral-700"
            }`}>
              <div className="whitespace-pre-wrap text-sm leading-relaxed">{msg.content}</div>
            </div>
          </div>
        ))}
        
        {loading && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              🤖
            </div>
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-2xl p-4">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                <span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                <span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="mt-4 flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask Isaac anything..."
          className="flex-1 px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 outline-none focus:border-neutral-600"
        />
        <button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-semibold disabled:opacity-50 hover:opacity-90 transition"
        >
          Send
        </button>
      </div>

      {/* Quick Suggestions */}
      <div className="mt-4 flex flex-wrap gap-2">
        {["Explain quantum computing", "Write a Python script", "How does AI work?", "Give me coding tips"].map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => { setInput(suggestion); sendMessage(); }}
            className="px-3 py-1.5 text-xs rounded-full bg-neutral-800 border border-neutral-700 hover:bg-neutral-700 transition"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}
