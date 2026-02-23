import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';

export const AssistantDemo: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // Initialize Gemini Client
  // Using the system prompt to impersonate the Blyndforce interface
  const systemInstruction = `
    Eres Blyndforce, una unidad de inteligencia artificial operativa avanzada.
    Tu tono es: Minimalista, profesional, ejecutivo, directo y eficiente.
    No usas emojis. Eres sobrio.
    
    Tu objetivo es demostrar tus capacidades de ejecución:
    1. Finanzas: Conciliación, pagos.
    2. Comunicación: Redacción, agenda.
    3. Investigación: Reportes de mercado.
    4. Operaciones: Carga de datos, legal.
    
    Resalta siempre que operas en hardware físico dedicado (Mac Mini) para máxima privacidad.
    Responde brevemente, como si fueras un asistente de alto nivel confirmando una orden o explicando una capacidad.
  `;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isExpanded]);

  const handleSend = async () => {
    if (!input.trim() || !process.env.API_KEY) return;
    
    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // We construct a simple history for context in this demo
      const history = messages.map(m => ({
         role: m.role,
         parts: [{ text: m.text }]
      }));

      const model = 'gemini-3-flash-preview';
      
      const response = await ai.models.generateContent({
        model: model,
        contents: [
            ...history,
            { role: 'user', parts: [{ text: userMsg.text }] }
        ],
        config: {
            systemInstruction: systemInstruction,
        }
      });

      const text = response.text || "Orden recibida. Procesando solicitud.";
      
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Error de conexión con el nodo físico.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isExpanded) {
    return (
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={() => setIsExpanded(true)}
          className="bg-apple-black text-white px-6 py-4 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 font-medium tracking-wide flex items-center gap-2"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Consultar Nodo
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-8 right-8 z-50 w-[90vw] md:w-[400px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden font-sans animate-fade-in-up" style={{ maxHeight: '600px', height: '500px' }}>
      {/* Header */}
      <div className="bg-apple-black p-4 flex justify-between items-center shrink-0">
        <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span className="text-white font-medium text-sm tracking-wide">Blyndforce Node</span>
        </div>
        <button onClick={() => setIsExpanded(false)} className="text-gray-400 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 bg-apple-bg-gray space-y-4">
        {messages.length === 0 && (
          <div className="text-center mt-20 text-apple-gray text-sm">
            <p>Nodo físico conectado.</p>
            <p className="mt-2">"Necesito un reporte de ventas de ayer."</p>
            <p>"Redacta un correo para el board."</p>
          </div>
        )}
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-apple-black text-white rounded-tr-none' 
                : 'bg-white border border-gray-200 text-apple-black rounded-tl-none shadow-sm'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
             <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm">
                <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s'}}></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s'}}></span>
                </div>
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-gray-100 shrink-0">
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="flex gap-2 items-center"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escriba una orden..."
            className="flex-1 bg-apple-bg-gray text-apple-black rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-apple-black transition-all"
            disabled={isLoading}
          />
          <button 
            type="submit"
            disabled={isLoading || !input.trim()}
            className="w-10 h-10 rounded-full bg-apple-black text-white flex items-center justify-center disabled:opacity-50 hover:bg-gray-800 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </button>
        </form>
      </div>
    </div>
  );
};