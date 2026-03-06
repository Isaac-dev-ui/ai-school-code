"use client";

import { useState, useRef, useEffect } from "react";

type Mode = "chat" | "notes" | "exam";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface Note {
  id: string;
  topic: string;
  content: string;
  date: string;
}

export default function AISidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("chat");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", role: "assistant", content: "Hi! I'm your AI assistant. Ask me anything or use:\n\n📝 Notes - Topic summaries\n🎯 Exam - Practice questions" }
  ]);
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTopic, setCurrentTopic] = useState("python");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const saved = localStorage.getItem("ai-sidebar-notes");
    if (saved) {
      try {
        setNotes(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load notes:", e);
      }
    }
  }, []);

  const saveNotes = (newNotes: Note[]) => {
    setNotes(newNotes);
    localStorage.setItem("ai-sidebar-notes", JSON.stringify(newNotes));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/ai-sidebar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: input,
          context: currentTopic,
          mode: mode === "chat" ? "answer" : mode
        })
      });

      const data = await response.json();

      if (data.ok) {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: data.text
        };
        setMessages(prev => [...prev, assistantMessage]);

        if (mode === "notes") {
          const newNote: Note = {
            id: Date.now().toString(),
            topic: currentTopic,
            content: data.text,
            date: new Date().toLocaleDateString()
          };
          saveNotes([newNote, ...notes]);
        }
      } else {
        setMessages(prev => [...prev, {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again."
        }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Sorry, something went wrong. Please try again."
      }]);
    }

    setIsLoading(false);
  };

  const handleModeChange = async (newMode: Mode) => {
    setMode(newMode);
    if (newMode !== "chat") {
      setIsLoading(true);
      try {
        const response = await fetch("/api/ai-sidebar", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            question: newMode === "notes" ? "Give me a summary" : "Give me exam questions",
            context: currentTopic,
            mode: newMode
          })
        });

        const data = await response.json();
        if (data.ok) {
          const message: Message = {
            id: Date.now().toString(),
            role: "assistant",
            content: data.text
          };
          setMessages(prev => [...prev, message]);

          if (newMode === "notes") {
            const newNote: Note = {
              id: Date.now().toString(),
              topic: currentTopic,
              content: data.text,
              date: new Date().toLocaleDateString()
            };
            saveNotes([newNote, ...notes]);
          }
        }
      } catch (error) {
        console.error("Error:", error);
      }
      setIsLoading(false);
    }
  };

  const deleteNote = (id: string) => {
    saveNotes(notes.filter(n => n.id !== id));
  };

  const topics = [
    { value: "python", label: "🐍 Python" },
    { value: "javascript", label: "📜 JavaScript" },
    { value: "html", label: "🌐 HTML" },
    { value: "css", label: "🎨 CSS" }
  ];

  return (
    <>
      {/* Floating Icon Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-4 bottom-4 z-50 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-110"
        title="AI Assistant"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </button>

      {/* Sidebar Panel */}
      <div
        className={`fixed right-0 top-0 h-full w-80 bg-neutral-900 border-l border-neutral-700 z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-neutral-700">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🤖</span>
                <h2 className="text-lg font-bold text-white">AI Helper</h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-neutral-400 hover:text-white p-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Topic Selector */}
            <select
              value={currentTopic}
              onChange={(e) => setCurrentTopic(e.target.value)}
              className="w-full bg-neutral-800 text-white px-3 py-2 rounded-lg text-sm border border-neutral-700 mb-3"
            >
              {topics.map(t => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>

            {/* Mode Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => handleModeChange("chat")}
                className={`flex-1 py-2 px-2 rounded-lg text-xs font-medium transition-colors ${mode === 'chat' ? 'bg-blue-600 text-white' : 'bg-neutral-800 text-neutral-400 hover:text-white'}`}
              >
                💬 Chat
              </button>
              <button
                onClick={() => handleModeChange("notes")}
                className={`flex-1 py-2 px-2 rounded-lg text-xs font-medium transition-colors ${mode === 'notes' ? 'bg-green-600 text-white' : 'bg-neutral-800 text-neutral-400 hover:text-white'}`}
              >
                📝 Notes
              </button>
              <button
                onClick={() => handleModeChange("exam")}
                className={`flex-1 py-2 px-2 rounded-lg text-xs font-medium transition-colors ${mode === 'exam' ? 'bg-purple-600 text-white' : 'bg-neutral-800 text-neutral-400 hover:text-white'}`}
              >
                🎯 Exam
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-4">
            {mode === "notes" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-neutral-300">Your Notes</h3>
                  <span className="text-xs text-neutral-500">{notes.length} notes</span>
                </div>
                {notes.length === 0 ? (
                  <p className="text-neutral-500 text-sm">No notes yet. Click "Notes" to generate!</p>
                ) : (
                  <div className="space-y-3">
                    {notes.map(note => (
                      <div key={note.id} className="bg-neutral-800 rounded-lg p-3 border border-neutral-700">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium text-blue-400 uppercase">{note.topic}</span>
                          <button onClick={() => deleteNote(note.id)} className="text-neutral-500 hover:text-red-400 text-xs">🗑️</button>
                        </div>
                        <p className="text-xs text-neutral-300 whitespace-pre-wrap line-clamp-6">{note.content}</p>
                        <p className="text-xs text-neutral-600 mt-2">{note.date}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {(mode === "chat" || mode === "exam") && (
              <div className="space-y-4 mb-4">
                {messages.map(msg => (
                  <div
                    key={msg.id}
                    className={`p-3 rounded-lg text-sm whitespace-pre-wrap ${msg.role === 'user' ? 'bg-blue-900/50 border border-blue-700 ml-8' : 'bg-neutral-800 border border-neutral-700 mr-4'}`}
                  >
                    <span className="text-xs font-medium mb-1 block">
                      {msg.role === 'user' ? '👤 You' : '🤖 AI'}
                    </span>
                    {msg.content}
                  </div>
                ))}
                {isLoading && (
                  <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-3 mr-4">
                    <span className="text-xs font-medium mb-1 block">🤖 AI</span>
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                      <span className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-neutral-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={mode === "exam" ? "Ask for exam questions..." : "Ask anything..."}
                className="flex-1 bg-neutral-800 text-white px-3 py-2 rounded-lg text-sm border border-neutral-700 focus:border-blue-500 focus:outline-none"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="bg-blue-600 hover:bg-blue-500 disabled:bg-neutral-700 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                ➤
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-30" onClick={() => setIsOpen(false)} />
      )}
    </>
  );
}
