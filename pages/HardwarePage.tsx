import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

interface HardwarePageProps {
  onBack: () => void;
}

export const HardwarePage: React.FC<HardwarePageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20 animate-fade-in-up selection:bg-black selection:text-white">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-24 md:mb-32 pt-10 md:pt-20 text-center">
        <ScrollReveal>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-apple-gray mb-6 block">
            Infraestructura Dedicada
          </span>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-semibold tracking-tighter mb-8 text-apple-black leading-[0.9]">
            Silicon <br/>
            <span className="text-[#86868b]">Sovereign.</span>
          </h1>
          <p className="text-xl md:text-3xl font-light text-apple-black max-w-3xl mx-auto leading-relaxed">
            Su agente no vive en el éter. Vive en un <span className="font-semibold">Mac Mini M4</span> físico, dedicado exclusivamente a usted.
          </p>
        </ScrollReveal>
      </section>

      {/* The Machine */}
      <section className="max-w-5xl mx-auto px-6 mb-32 md:mb-48">
        <ScrollReveal>
             <div className="bg-[#1D1D1F] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
                 {/* Abstract Glow */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-900/30 to-purple-900/20 rounded-full blur-[100px] pointer-events-none"></div>
                 
                 <div className="relative z-10">
                     <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6 tracking-tight">Potencia Bruta.</h2>
                     <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto mb-12">
                         Utilizamos la última arquitectura de Apple Silicon. El chip M4 ofrece el equilibrio perfecto entre eficiencia energética y capacidad de inferencia neuronal local.
                     </p>
                     
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-3xl mx-auto">
                         <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                             <div className="text-sm text-gray-400 uppercase tracking-widest mb-2">Neural Engine</div>
                             <div className="text-3xl font-bold text-white">16 Cores</div>
                             <div className="text-xs text-gray-500 mt-2">38 Trillions ops/sec</div>
                         </div>
                         <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                             <div className="text-sm text-gray-400 uppercase tracking-widest mb-2">Unified Memory</div>
                             <div className="text-3xl font-bold text-white">32 GB</div>
                             <div className="text-xs text-gray-500 mt-2">High Bandwidth</div>
                         </div>
                         <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                             <div className="text-sm text-gray-400 uppercase tracking-widest mb-2">Encryption</div>
                             <div className="text-3xl font-bold text-white">AES-256</div>
                             <div className="text-xs text-gray-500 mt-2">Hardware-backed</div>
                         </div>
                     </div>
                 </div>
             </div>
        </ScrollReveal>
      </section>

      {/* Specs Detail */}
      <section className="max-w-4xl mx-auto px-6 mb-32">
        <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <h3 className="text-2xl font-bold text-apple-black mb-4">¿Por qué Hardware Dedicado?</h3>
                    <p className="text-apple-gray leading-relaxed mb-6">
                        En la nube pública (AWS, Azure), sus datos comparten memoria y procesador con miles de otros clientes. Existe el riesgo teórico de "Rowhammer attacks" y fugas de memoria.
                    </p>
                    <p className="text-apple-gray leading-relaxed">
                        En Blyndforce, el aislamiento es físico. Hay aire entre su procesador y el del vecino. Es la forma más alta de seguridad informática existente.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-apple-black mb-4">Ciclo de Vida del Nodo</h3>
                    <ul className="space-y-4 text-apple-gray">
                        <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
                            <span>Aprovisionamiento y cifrado de disco con llave única del cliente.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
                            <span>Operación continua en Data Center Tier-3 con redundancia.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
                            <span>Destrucción criptográfica de datos al finalizar el contrato.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </ScrollReveal>
      </section>

      <div className="text-center pb-20">
        <button onClick={onBack} className="text-apple-black font-medium hover:underline underline-offset-4">
            Volver al inicio
        </button>
      </div>
    </div>
  );
};