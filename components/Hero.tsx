import React from 'react';

interface HeroProps {
  onRequestAgent: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestAgent }) => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center z-10 pt-10 md:pt-0">
        
        {/* Title - Immediate Animation */}
        <div className="opacity-0 animate-fade-in-up">
          <h1 className="flex flex-col md:block items-center justify-center font-semibold tracking-tighter leading-[1.1] mb-6 md:mb-8 text-apple-black text-5xl md:text-8xl lg:text-9xl">
            Inteligencia en{' '}
            <span className="bg-gradient-to-r from-[#007AFF] via-[#AF52DE] via-[#FF2D55] to-[#FF9500] bg-clip-text text-transparent pb-2 inline-block italic">
              Acción.
            </span>
          </h1>
        </div>

        {/* Description - Slight Delay */}
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <p className="text-lg md:text-2xl text-apple-gray font-normal max-w-3xl mx-auto leading-relaxed mt-6 md:mt-8 mb-8 md:mb-10 px-4 md:px-0">
            Contrate al único empleado que trabaja 24/7, no comete errores operativos y blinda su información.
            <span className="block text-apple-black mt-3 font-medium text-xl md:text-3xl">Su competencia sigue contratando humanos.</span>
          </p>
        </div>

        {/* Buttons - More Delay */}
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0">
            <button 
              onClick={onRequestAgent}
              className="w-full sm:w-auto bg-[#0071e3] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#0077ED] transition-all transform hover:scale-105 active:scale-95 shadow-sm"
            >
              Solicitá tu Agente
            </button>
            <button className="w-full sm:w-auto text-[#0071e3] border border-[#0071e3] bg-transparent px-8 py-4 rounded-full text-lg font-medium hover:bg-[#0071e3]/5 transition-all transform hover:scale-105 active:scale-95">
              Hablar con Ventas
            </button>
          </div>
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[400px] md:h-[600px] bg-gradient-to-r from-blue-200/20 via-purple-200/20 to-orange-100/20 rounded-[100%] opacity-60 blur-3xl -z-10 pointer-events-none"></div>
    </section>
  );
};