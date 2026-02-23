import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { View } from '../App';
import { LiquidText } from './GhostOfficeProPage';

interface InfrastructurePageProps {
  onBack: () => void;
  onRequestAgent: () => void;
  onNavigate?: (view: View) => void;
}

export const InfrastructurePage: React.FC<InfrastructurePageProps> = ({ onBack, onRequestAgent, onNavigate }) => {
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
               <button onClick={handleNav('infrastructure')} className="text-white font-bold uppercase tracking-wider">Infraestructura</button>
               <button onClick={handleNav('audit')} className="hover:text-white transition-colors uppercase tracking-wider">Auditoría</button>
               <button onClick={handleNav('roi')} className="hover:text-white transition-colors uppercase tracking-wider">ROI</button>
            </div>
         </div>
      </div>

      <section className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
         <ScrollReveal>
             <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter mb-8 leading-[0.95]">
                <span className="block text-gray-500">Puente al</span>
                <LiquidText variant="orange">Legado.</LiquidText>
             </h1>
             <p className="text-xl md:text-3xl font-light text-gray-300 max-w-3xl leading-relaxed mb-16">
                 La verdadera transformación digital no requiere demoler sus cimientos. Blyndforce opera sobre su infraestructura existente con la delicadeza de un cirujano.
             </p>
         </ScrollReveal>

         {/* The Stack Visual */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
             <div className="bg-[#111] p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden">
                 <div className="absolute top-0 right-0 text-[120px] font-bold text-white/5 leading-none -mt-4 -mr-4">M4</div>
                 <h3 className="text-2xl font-bold text-white mb-6 relative z-10">El Motor: Apple Silicon</h3>
                 <p className="text-gray-400 mb-8 relative z-10">
                     Cada nodo Enterprise corre sobre un chip M4 Pro dedicado. Neural Engine de 16 núcleos para procesamiento de visión local. Sin latencia de red. Sin compartir recursos.
                 </p>
                 <div className="flex gap-4 relative z-10">
                     <div className="bg-gray-800 px-4 py-2 rounded text-xs font-mono">16GB Unified Memory</div>
                     <div className="bg-gray-800 px-4 py-2 rounded text-xs font-mono">512GB SSD Encrypted</div>
                 </div>
             </div>

             <div className="bg-[#111] p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden">
                 <div className="absolute top-0 right-0 text-[120px] font-bold text-white/5 leading-none -mt-4 -mr-4">VIS</div>
                 <h3 className="text-2xl font-bold text-white mb-6 relative z-10">La Interfaz: Visión Pura</h3>
                 <p className="text-gray-400 mb-8 relative z-10">
                     Nuestros modelos de visión "leen" píxeles, no código. Esto nos permite interactuar con software mainframe de 1990 (pantallas verdes AS/400) con la misma facilidad que con Salesforce.
                 </p>
                 <div className="flex gap-4 relative z-10">
                     <div className="bg-green-900/30 text-green-400 px-4 py-2 rounded text-xs font-mono border border-green-900/50">Terminal Emulation</div>
                     <div className="bg-blue-900/30 text-blue-400 px-4 py-2 rounded text-xs font-mono border border-blue-900/50">OCR Documents</div>
                 </div>
             </div>
         </div>

         <div className="max-w-4xl mx-auto text-center">
             <h3 className="text-3xl font-semibold text-white mb-8">Compatibilidad Universal</h3>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-70">
                 {['SAP ECC 6.0', 'Oracle JDE', 'IBM Mainframe', 'Citrix Workspace', 'Windows Server', 'Swift Banking', 'Custom SQL', 'SharePoint On-Prem'].map((sys, i) => (
                     <div key={i} className="py-4 border border-white/10 rounded-xl text-gray-400 text-sm font-mono hover:bg-white/5 transition-colors">
                         {sys}
                     </div>
                 ))}
             </div>
         </div>
      </section>

      {/* Footer Nav */}
      <div className="py-12 border-t border-white/10 text-center">
          <button onClick={onRequestAgent} className="bg-white text-black px-8 py-3 rounded-full font-medium mb-8 hover:bg-gray-200">
              Modernizar Operación
          </button>
          <br/>
          <button onClick={onBack} className="text-gray-500 hover:text-white transition-colors text-sm">
             Volver al Inicio
          </button>
      </div>

    </div>
  );
};