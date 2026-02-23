import React from 'react';
import { ScrollReveal } from './ScrollReveal';

interface EnterpriseProps {
  onLearnMore: () => void;
}

export const Enterprise: React.FC<EnterpriseProps> = ({ onLearnMore }) => {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-white text-apple-black border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-20 md:mb-32">
            <ScrollReveal>
              <span className="text-purple-600 font-bold tracking-widest uppercase text-xs mb-4 block">
                Infraestructura Corporativa
              </span>
              <h3 className="text-5xl md:text-8xl font-semibold tracking-tighter mb-8 text-apple-black leading-[0.95]">
                Blyndforce <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-[#007AFF] via-[#AF52DE] to-[#FF9500] bg-clip-text text-transparent pb-2 italic pr-2">Enterprise.</span>
              </h3>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
                  <p className="text-xl md:text-3xl text-apple-black font-medium leading-tight max-w-3xl">
                    Lleve la inteligencia al núcleo de su compañía. Una central operativa que conecta sus sistemas y dota a cada directivo de una fuerza de ejecución privada.
                  </p>
                  <div className="md:w-1/3 text-apple-gray text-lg font-light leading-relaxed">
                    <p>
                        No es software para empleados. Es infraestructura para la dirección. Transforme departamentos estancos en un organismo sincronizado.
                    </p>
                  </div>
              </div>
            </ScrollReveal>
        </div>

        {/* The Architecture Grid (Bento Style) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-20">
            
            {/* Card 1: The Central Node (Dark Mode - Dominant) */}
            <div className="md:col-span-8 bg-[#1D1D1F] rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden flex flex-col justify-between min-h-[500px] group text-white">
                <ScrollReveal className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            <span className="text-xs font-bold tracking-widest uppercase text-gray-400">El Nodo Maestro</span>
                        </div>
                        <h4 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight text-white">
                            Visión Total.<br/>Control Absoluto.
                        </h4>
                        <p className="text-lg md:text-xl text-gray-400 font-light max-w-lg leading-relaxed">
                            Un servidor dedicado en HQ que orquesta la operación. Recibe reportes consolidados de todos los departamentos, audita el cumplimiento en tiempo real y permite al CEO ejecutar cambios estratégicos globales con una sola instrucción.
                        </p>
                    </div>
                    
                    {/* Visual Abstract Representation of Central Control */}
                    <div className="mt-10 border-t border-white/10 pt-8 flex gap-8 md:gap-16 opacity-80">
                         <div>
                            <span className="block text-2xl font-bold text-white mb-1">100%</span>
                            <span className="text-xs text-gray-500 uppercase tracking-wider">Auditoría</span>
                         </div>
                         <div>
                            <span className="block text-2xl font-bold text-white mb-1">0ms</span>
                            <span className="text-xs text-gray-500 uppercase tracking-wider">Latencia de Mando</span>
                         </div>
                         <div>
                            <span className="block text-2xl font-bold text-white mb-1">AES-256</span>
                            <span className="text-xs text-gray-500 uppercase tracking-wider">Cifrado Militar</span>
                         </div>
                    </div>
                </ScrollReveal>
                
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none group-hover:bg-blue-800/30 transition-colors duration-1000"></div>
            </div>

            {/* Card 2: Distributed Nodes (Vertical) */}
            <div className="md:col-span-4 bg-[#F5F5F7] rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden flex flex-col justify-between">
                <ScrollReveal delay={200} className="h-full flex flex-col">
                    <div>
                         <span className="text-purple-600 font-bold tracking-widest uppercase text-xs mb-4 block">
                            Escalabilidad Capilar
                        </span>
                        <h4 className="text-3xl font-semibold text-apple-black mb-4 tracking-tight">
                            Nodos Distribuidos.
                        </h4>
                        <p className="text-apple-gray leading-relaxed text-lg font-light">
                            Despliegue "sub-agentes" especializados para Finanzas, RRHH y Logística. Cada gerente obtiene su propio analista privado que reporta al Nodo Central.
                        </p>
                    </div>
                    
                    <div className="mt-12 space-y-3">
                         <div className="flex items-center gap-4 p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold">FN</div>
                            <span className="text-sm font-medium text-apple-black">Nodo Finanzas</span>
                         </div>
                         <div className="flex items-center gap-4 p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-xs font-bold">HR</div>
                            <span className="text-sm font-medium text-apple-black">Nodo Talento</span>
                         </div>
                         <div className="flex items-center gap-4 p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-xs font-bold">OP</div>
                            <span className="text-sm font-medium text-apple-black">Nodo Operaciones</span>
                         </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>

        {/* Strategic Value List */}
        <ScrollReveal delay={300}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 border-t border-gray-100 pt-16">
              
              <div className="flex flex-col items-start">
                <h4 className="text-xl font-semibold text-apple-black mb-3">Integración Legacy</h4>
                <p className="text-apple-gray leading-relaxed text-base font-light">
                  Sus sistemas antiguos (SAP, Oracle, Mainframes) no son un obstáculo. Enterprise opera visualmente sobre ellos, sin necesidad de APIs costosas o migraciones riesgosas.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <h4 className="text-xl font-semibold text-apple-black mb-3">Auditoría Perpetua</h4>
                <p className="text-apple-gray leading-relaxed text-base font-light">
                  Elimine el muestreo. El Nodo Central cruza el 100% de las transacciones contra sus políticas corporativas en tiempo real, detectando anomalías al instante.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <h4 className="text-xl font-semibold text-apple-black mb-3">Soberanía de Datos</h4>
                <p className="text-apple-gray leading-relaxed text-base font-light">
                  Infraestructura "Single-Tenant". Hardware físico aislado para su corporación. Sus datos estratégicos nunca tocan una nube pública compartida.
                </p>
              </div>

            </div>

            <div className="mt-20 flex justify-center">
                 <button 
                   onClick={onLearnMore}
                   className="group inline-flex items-center gap-3 text-apple-black border border-gray-300 bg-white px-8 py-4 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300 font-medium text-base shadow-sm"
                 >
                   Explorar Arquitectura Enterprise
                   <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                 </button>
            </div>
        </ScrollReveal>

      </div>
    </section>
  );
};