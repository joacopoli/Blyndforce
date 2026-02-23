import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { View } from '../App';
import { LiquidText } from './GhostOfficeProPage';

interface GovernancePageProps {
  onBack: () => void;
  onRequestAgent: () => void;
  onNavigate?: (view: View) => void;
}

export const GovernancePage: React.FC<GovernancePageProps> = ({ onBack, onRequestAgent, onNavigate }) => {
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
               <button onClick={handleNav('governance')} className="text-white font-bold uppercase tracking-wider">Gobernanza</button>
               <button onClick={handleNav('infrastructure')} className="hover:text-white transition-colors uppercase tracking-wider">Infraestructura</button>
               <button onClick={handleNav('audit')} className="hover:text-white transition-colors uppercase tracking-wider">Auditoría</button>
               <button onClick={handleNav('roi')} className="hover:text-white transition-colors uppercase tracking-wider">ROI</button>
            </div>
         </div>
      </div>

      <section className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
         <ScrollReveal>
             <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter mb-8 leading-[0.95]">
                <span className="block text-gray-500">Comando</span>
                <LiquidText variant="blue">Centralizado.</LiquidText>
             </h1>
             <p className="text-xl md:text-3xl font-light text-gray-300 max-w-3xl leading-relaxed mb-16">
                 La entropía es el enemigo de la escala. Blyndforce impone orden matemático sobre el caos operativo de las corporaciones multinacionales.
             </p>
         </ScrollReveal>

         {/* The Network Visual */}
         <div className="relative h-[600px] bg-[#111] rounded-[3rem] overflow-hidden mb-24 flex items-center justify-center border border-white/5">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
             
             {/* Central Node */}
             <div className="relative z-10 flex flex-col items-center">
                 <div className="w-24 h-24 rounded-full bg-blue-600 shadow-[0_0_50px_rgba(37,99,235,0.5)] flex items-center justify-center text-white font-bold text-xs z-20">
                     HQ NODE
                 </div>
                 {/* Satellites */}
                 <div className="absolute w-[400px] h-[400px] border border-white/10 rounded-full animate-spin-slow"></div>
                 <div className="absolute w-[600px] h-[600px] border border-white/5 rounded-full"></div>
                 
                 {/* Floating Labels */}
                 <div className="absolute -top-32 -left-32 bg-[#1a1a1a] px-4 py-2 rounded-lg border border-white/10 text-xs text-gray-400">
                     <span className="text-green-500">●</span> APAC Region <br/>Policy: v2.4
                 </div>
                 <div className="absolute top-32 -right-48 bg-[#1a1a1a] px-4 py-2 rounded-lg border border-white/10 text-xs text-gray-400">
                     <span className="text-green-500">●</span> EMEA Region <br/>Policy: v2.4
                 </div>
                 <div className="absolute bottom-[-180px] bg-[#1a1a1a] px-4 py-2 rounded-lg border border-white/10 text-xs text-gray-400">
                     <span className="text-green-500">●</span> LATAM Region <br/>Policy: v2.4
                 </div>
             </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
             <ScrollReveal delay={100}>
                 <h3 className="text-3xl font-semibold text-white mb-6">Despliegue de Políticas en Tiempo Real.</h3>
                 <p className="text-gray-400 text-lg leading-relaxed mb-8">
                     Cambiar un proceso de facturación en 20 países solía requerir meses de capacitación y memos ignorados. Con Blyndforce, usted actualiza el protocolo en el Nodo Maestro y la replicación es instantánea.
                 </p>
                 <ul className="space-y-4 text-gray-300">
                     <li className="flex items-center gap-3">
                         <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                         Actualización instantánea de reglas de compliance.
                     </li>
                     <li className="flex items-center gap-3">
                         <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                         Estandarización de formato de datos global.
                     </li>
                 </ul>
             </ScrollReveal>

             <ScrollReveal delay={200}>
                 <h3 className="text-3xl font-semibold text-white mb-6">Eliminación del "Shadow IT".</h3>
                 <p className="text-gray-400 text-lg leading-relaxed mb-8">
                     Sus empleados humanos usan herramientas no aprobadas para trabajar más rápido. Sus agentes digitales solo usan las herramientas que usted autoriza, de la manera exacta en que usted lo autoriza.
                 </p>
                 <div className="bg-[#1a1a1a] p-6 rounded-xl border-l-2 border-red-500">
                     <p className="text-sm text-gray-400 font-mono">
                         &gt; ALERT: Human employee attempting to use unverified PDF converter.<br/>
                         &gt; BLYNDFORCE ACTION: Process blocked. Redirected to corporate tool.
                     </p>
                 </div>
             </ScrollReveal>
         </div>
      </section>

      {/* Footer Nav */}
      <div className="py-12 border-t border-white/10 text-center">
          <button onClick={onRequestAgent} className="bg-white text-black px-8 py-3 rounded-full font-medium mb-8 hover:bg-gray-200">
              Implementar Gobernanza
          </button>
          <br/>
          <button onClick={onBack} className="text-gray-500 hover:text-white transition-colors text-sm">
             Volver al Inicio
          </button>
      </div>

    </div>
  );
};