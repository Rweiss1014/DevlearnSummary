import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Send, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface Message {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
}

const SUGGESTED_QUESTIONS = [
  "What is Protected Health Information (PHI)?",
  "What are common HIPAA violations?",
  "How should I report a HIPAA breach?",
  "Can you give me a scenario about unlocked screens?",
];

export function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [showIntro, setShowIntro] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial bot message
    const timer = setTimeout(() => {
      setMessages([
        {
          id: '1',
          type: 'bot',
          content: "Hi! I'm TutorBot - a prototype for AssistRx training. I can answer questions about HIPAA Compliance and help you practice scenarios. What would you like to know?",
          timestamp: new Date(),
        },
      ]);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return;

    setShowIntro(false);

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Call the actual Netlify function
    try {
      const response = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages.map(m => ({ role: m.type === 'user' ? 'user' : 'assistant', content: m.content })), { role: 'user', content }],
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get response');
      }

      const data = await response.json();
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: data.message,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error calling chat API:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: error instanceof Error
          ? error.message
          : "I apologize, but I'm having trouble connecting to the AI service. Please make sure the OPENAI_API_KEY is configured in your Netlify environment variables.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuestionClick = (question: string) => {
    handleSendMessage(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-[#ade2e3]/10 pt-20 pb-8 px-4">
      <div className="max-w-4xl mx-auto h-[calc(100vh-7rem)] flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-4"
        >
          <div className="inline-flex items-center gap-3 bg-[#007178]/10 px-4 py-2 rounded-full">
            <Bot className="w-5 h-5 text-[#007178]" />
            <span className="text-[#007178]">Tutor Chatbot Prototype</span>
          </div>
        </motion.div>

        {/* Chat Container */}
        <Card className="flex-1 flex flex-col overflow-hidden shadow-xl border-2 border-[#007178]/20">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <AnimatePresence mode="popLayout">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.type === 'user'
                        ? 'bg-[#007178] text-white'
                        : 'bg-gradient-to-br from-[#ade2e3]/30 to-[#00ae9a]/20 text-slate-800 border border-[#007178]/20'
                    }`}
                  >
                    {message.type === 'bot' && (
                      <div className="flex items-center gap-2 mb-2">
                        <Bot className="w-4 h-4 text-[#007178]" />
                        <span className="text-sm text-[#007178]">Tutor</span>
                      </div>
                    )}
                    <p className="leading-relaxed">{message.content}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Loading indicator */}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-gradient-to-br from-[#ade2e3]/30 to-[#00ae9a]/20 text-slate-800 border border-[#007178]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Bot className="w-4 h-4 text-[#007178]" />
                    <span className="text-sm text-[#007178]">Tutor</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-[#007178] rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-[#007178] rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-[#007178] rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Suggested Questions */}
            {showIntro && messages.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="space-y-3 pt-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SUGGESTED_QUESTIONS.map((question, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleQuestionClick(question)}
                      className="text-left p-3 rounded-xl border-2 border-[#007178]/30 bg-white hover:bg-[#ade2e3]/20 hover:border-[#00ae9a] transition-all text-sm text-slate-700"
                    >
                      {question}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-slate-200 p-4 bg-white">
            <div className="flex gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question here..."
                className="flex-1 px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#007178] focus:outline-none transition-colors"
              />
              <Button
                onClick={() => handleSendMessage(inputValue)}
                disabled={!inputValue.trim() || isLoading}
                className="bg-[#007178] hover:bg-[#00ae9a] disabled:opacity-50 px-6 rounded-xl"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-xs text-slate-500 mt-2 text-center">
              Prototype • Currently loaded: HIPAA Compliance Training Module
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}