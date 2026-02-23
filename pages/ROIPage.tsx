import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { View } from '../App';
import { LiquidText } from './GhostOfficeProPage';

interface ROIPageProps {
  onBack: () => void;
  onRequestAgent: () => void;
  onNavigate?: (view: View) => void;
}

export const ROIPage: React.FC<ROIPageProps> = ({ onBack, onRequestAgent, onNavigate }) => {
  const handleNav = (view: View) => (e: React.MouseEvent) => {
    e.preventDefault();
    if(onNavigate) onNavigate(view);
  };

  return (
    <div className="bg-black min-h-screen text-[#F5F5F7] font-sans pt-20">
      
       {/* Sub Nav */}
      <div className="relative z-40 bg-black border-b border-white/10">
         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <button className="font-semibold text-xl tracking-tight text-white/50 hover:text-white transition-colors" onClick={onBack}>
              Ghost Office <span className="text-white">Pro</span>
            </button>
            <div className="hidden md:flex gap-8 text-xs font-medium text-gray-400">
               <button onClick={handleNav('governance')} className="hover:text-white transition-colors uppercase tracking-wider">Gobernanza</button>
               <button onClick={handleNav('infrastructure')} className="hover:text-white transition-colors uppercase tracking-wider">Infraestructura</button>
               <button onClick={handleNav('audit')} className="hover:text-white transition-colors uppercase tracking-wider">Auditoría</button>
               <button onClick={handleNav('roi')} className="text-white font-bold uppercase tracking-wider">ROI</button>
            </div>
         </div>
      </div>

      <section className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
         <ScrollReveal>
             <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter mb-8 leading-[0.95]">
                <span className="block text-gray-500">Matemática</span>
                <LiquidText variant="main">Pura.</LiquidText>
             </h1>
             <p className="text-xl md:text-3xl font-light text-gray-300 max-w-3xl leading-relaxed mb-16">
                 No es una inversión especulativa. Es una sustitución de costos ineficientes (OpEx Laboral) por infraestructura de alta densidad (CapEx Tecnológico).
             </p>
         </ScrollReveal>

         {/* The Big Comparison */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
             {/* Human Column */}
             <div className="border border-white/10 rounded-3xl p-8 opacity-60 hover:opacity-100 transition-opacity">
                 <h3 className="text-xl font-bold text-gray-400 mb-8 uppercase tracking-widest">Unidad Humana (Admin)</h3>
                 <div className="space-y-6">
                     <div className="flex justify-between border-b border-white/5 pb-2">
                         <span className="text-gray-500">Costo Salarial Total</span>
                         <span className="font-mono text-white">$120,000 / año</span>
                     </div>
                     <div className="flex justify-between border-b border-white/5 pb-2">
                         <span className="text-gray-500">Horas Efectivas</span>
                         <span className="font-mono text-white">~1,600 hs / año</span>
                     </div>
                     <div className="flex justify-between border-b border-white/5 pb-2">
                         <span className="text-gray-500">Tasa de Error</span>
                         <span className="font-mono text-red-400">1% - 5%</span>
                     </div>
                     <div className="flex justify-between border-b border-white/5 pb-2">
                         <span className="text-gray-500">Escalabilidad</span>
                         <span className="font-mono text-red-400">Lineal (Lenta)</span>
                     </div>
                 </div>
             </div>

             {/* Blyndforce Column */}
             <div className="border border-blue-500/30 bg-blue-900/10 rounded-3xl p-8 relative overflow-hidden">
                 <div className="absolute top-0 right-0 px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-bl-xl">WINNER</div>
                 <h3 className="text-xl font-bold text-white mb-8 uppercase tracking-widest">Unidad Blyndforce</h3>
                 <div className="space-y-6">
                     <div className="flex justify-between border-b border-blue-500/20 pb-2">
                         <span className="text-gray-400">Costo Total (Enterprise)</span>
                         <span className="font-mono text-green-400">$18,000 / año</span>
                     </div>
                     <div className="flex justify-between border-b border-blue-500/20 pb-2">
                         <span className="text-gray-400">Horas Efectivas</span>
                         <span className="font-mono text-green-400">8,760 hs / año</span>
                     </div>
                     <div className="flex justify-between border-b border-blue-500/20 pb-2">
                         <span className="text-gray-400">Tasa de Error</span>
                         <span className="font-mono text-green-400">~0.01%</span>
                     </div>
                     <div className="flex justify-between border-b border-blue-500/20 pb-2">
                         <span className="text-gray-400">Escalabilidad</span>
                         <span className="font-mono text-green-400">Instantánea</span>
                     </div>
                 </div>
             </div>
         </div>

         {/* The Multiplier Visual */}
         <div className="bg-[#111] rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
             <div className="relative z-10">
                 <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">Multiplicador de Eficiencia</p>
                 <div className="text-[120px] md:text-[200px] font-bold text-white leading-none tracking-tighter mb-4">
                     6.5<span className="text-blue-600">x</span>
                 </div>
                 <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                     Por cada dólar invertido en Blyndforce Enterprise, usted recupera 6.5 dólares en capacidad productiva equivalente.
                 </p>
             </div>
             {/* Abstract Graph bg */}
             <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
         </div>
      </section>

      {/* Footer Nav */}
      <div className="py-12 border-t border-white/10 text-center">
          <button onClick={onRequestAgent} className="bg-white text-black px-8 py-3 rounded-full font-medium mb-8 hover:bg-gray-200">
              Calcular Caso de Negocio
          </button>
          <br/>
          <button onClick={onBack} className="text-gray-500 hover:text-white transition-colors text-sm">
             Volver al Inicio
          </button>
      </div>

    </div>
  );
};