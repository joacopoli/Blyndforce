import React, { useState, useEffect } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

interface SecurityPageProps {
  onBack: () => void;
}

export const SecurityPage: React.FC<SecurityPageProps> = ({ onBack }) => {
  const [step, setStep] = useState(0); 
  // 0: Show Privacidad
  // 1: Transition to Seguridad (Wipe)

  useEffect(() => {
    // Timeline
    const t1 = setTimeout(() => setStep(1), 1500); // Start Wipe after 1.5s

    return () => {
      clearTimeout(t1);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white pt-24 pb-20 animate-fade-in-up font-sans selection:bg-black selection:text-white">
      
      {/* Background Gradient - Subtle Tech Feel */}
      <div className="absolute top-0 right-0 w-[80%] h-[600px] bg-gradient-to-b from-gray-50 to-transparent -z-10 pointer-events-none"></div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24 md:mb-32 pt-10 md:pt-20">
        <ScrollReveal>
          <div className="flex flex-col items-start max-w-5xl">
            
            {/* Header Row: Image + Title aligned perfectly */}
            <div className="flex flex-row items-center gap-4 md:gap-8 mb-8 md:mb-10">
               <div className="shrink-0">
                 <img 
                   src="https://i.ibb.co/HpKNDsjp/Blyndforce-candado-nuevo.png" 
                   alt="Candado de Seguridad Blyndforce" 
                   className="w-auto h-20 md:h-36 lg:h-44 object-contain drop-shadow-xl"
                 />
               </div>
               <div>
                  <h1 className="text-5xl md:text-8xl lg:text-9xl tracking-tighter text-apple-black leading-[0.9] flex flex-col">
                    <span>Máxima</span>
                    
                    {/* Animated Word Container */}
                    <div className="relative grid place-items-start h-[1.1em] overflow-visible">
                        
                        {/* Word 1: Privacidad (Exits) */}
                        <span 
                            className="col-start-1 row-start-1 text-[#86868b] transition-all duration-1000 ease-in-out"
                            style={{ 
                                clipPath: step >= 1 ? 'inset(0 0 0 100%)' : 'inset(0 0 0 0)',
                                opacity: step >= 1 ? 0 : 1,
                                transform: step >= 1 ? 'translateX(20px)' : 'translateX(0)'
                            }}
                        >
                            Privacidad.
                        </span>

                        {/* Word 2: Seguridad (Enters) */}
                        <span 
                             className="col-start-1 row-start-1 text-apple-black italic transition-all duration-1000 ease-in-out"
                             style={{ 
                                 clipPath: step >= 1 ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
                                 opacity: step >= 1 ? 1 : 0,
                                 transform: step >= 1 ? 'translateX(0)' : 'translateX(-20px)'
                             }}
                        >
                            Seguridad.
                        </span>
                   </div>
                  </h1>
               </div>
            </div>

            {/* Divider aligned with start of content */}
            <div className="h-1 w-24 bg-apple-black mb-8 md:mb-10 ml-1"></div>

            {/* Description aligned with the start of the image (container left) */}
            <p className="text-xl md:text-3xl font-light text-apple-black leading-relaxed max-w-4xl">
              Confiar en Blyndforce no es confiar en nosotros como empresa. <br/>
              <span className="font-semibold">Es confiar en las leyes de la física y en su propio hardware.</span>
            </p>
            
          </div>
        </ScrollReveal>
      </section>

      {/* Pillar 1: Soberanía Física (The Core) */}
      <section className="max-w-7xl mx-auto px-6 mb-8 md:mb-12">
        <ScrollReveal>
             <div className="bg-[#1D1D1F] text-white p-10 md:p-20 rounded-[3rem] relative overflow-hidden group min-h-[500px] flex flex-col justify-end">
                {/* Abstract Hardware Glow */}
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-gradient-to-b from-blue-900/40 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
                
                <div className="relative z-10 max-w-2xl">
                   <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-8 backdrop-blur-md border border-white/5">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                   </div>
                   <h2 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">Soberanía Física.</h2>
                   <h3 className="text-xl md:text-2xl font-medium text-gray-300 mb-6 font-mono uppercase tracking-wider">Air-Gapped Mindset</h3>
                   <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                      A diferencia de cualquier solución SaaS donde sus datos viajan a servidores de terceros, con Blyndforce la inteligencia vive en un <strong className="text-white font-medium">Nodo Dedicado</strong>. Instalamos un Mac Mini M4 físicamente exclusivo para usted. 
                   </p>
                   <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mt-4">
                      Sus datos no "flotan" en una nube compartida; residen en un átomo de silicio que le pertenece. Usted puede ver la caja, puede tocarla y, si quisiera, puede desconectarla.
                   </p>
                </div>
             </div>
        </ScrollReveal>
      </section>

      {/* Grid: Execution & Kernel */}
      <section className="max-w-7xl mx-auto px-6 mb-8 md:mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Pillar 2: Execution Isolation */}
            <ScrollReveal delay={100}>
                <div className="bg-[#F5F5F7] p-10 md:p-14 rounded-[3rem] h-full border border-gray-100 flex flex-col justify-between">
                    <div>
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-semibold text-apple-black mb-6 tracking-tight">
                            Aislamiento y Visión Privada.
                        </h3>
                        <p className="text-apple-gray leading-relaxed text-lg font-light mb-6">
                            Nuestra tecnología opera mediante visión artificial bajo protocolos estrictos. Si el agente necesita conectarse a modelos externos, la información viaja con <strong className="text-black">cifrado punto a punto</strong> y se elimina instantáneamente tras la ejecución.
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-gray-200">
                        <span className="text-xs font-bold uppercase tracking-widest text-green-600 mb-2 block">Garantía Contractual</span>
                        <p className="text-sm text-apple-black font-medium">
                            Sus datos operativos nunca se utilizan para entrenar modelos de IA de terceros (OpenAI/Anthropic). Sus secretos comerciales se quedan en su empresa.
                        </p>
                    </div>
                </div>
            </ScrollReveal>

            {/* Pillar 4: Kernel Security */}
            <ScrollReveal delay={200}>
                <div className="bg-white p-10 md:p-14 rounded-[3rem] h-full border border-gray-200 shadow-xl shadow-gray-200/50 flex flex-col justify-between overflow-hidden relative">
                    {/* Chip Visual */}
                    <div className="absolute -right-12 -top-12 opacity-10">
                        <svg width="300" height="300" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v16H4z"/></svg>
                    </div>

                    <div>
                        <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-6 shadow-sm">
                             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-semibold text-apple-black mb-6 tracking-tight">
                            Seguridad a Nivel de Kernel.
                        </h3>
                        <p className="text-apple-gray leading-relaxed text-lg font-light mb-6">
                             Al elegir el Chip M4, elegimos la arquitectura de seguridad más avanzada del mercado.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                                <span className="font-bold text-xs">M4</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-apple-black text-sm">Secure Enclave</h4>
                                <p className="text-xs text-apple-gray">Datos sensibles y llaves aislados por hardware.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-apple-black text-sm">Protección de Intrusiones</h4>
                                <p className="text-xs text-apple-gray">Superficie de ataque minimizada.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
      </section>

      {/* Pillar 3: Traceability (Audit Log) */}
      <section className="max-w-7xl mx-auto px-6 mb-20 md:mb-32">
        <ScrollReveal>
            <div className="bg-[#F5F5F7] rounded-[3rem] p-10 md:p-20 border border-gray-100">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2">
                         <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 block">
                            Audit Log Inmutable
                        </span>
                        <h2 className="text-3xl md:text-5xl font-semibold text-apple-black mb-6 tracking-tight">
                            Trazabilidad Total.
                        </h2>
                        <p className="text-lg text-apple-gray font-light leading-relaxed mb-6">
                            Blyndforce no es una "caja negra". Cada movimiento de ratón, cada clic y cada decisión tomada por el agente queda registrada con una captura de pantalla y marca de tiempo.
                        </p>
                        <p className="text-lg text-apple-black font-medium leading-relaxed">
                            Nada ocurre sin que quede un rastro digital inmutable para su equipo de seguridad informática.
                        </p>
                    </div>
                    
                    <div className="w-full md:w-1/2">
                        <div className="bg-black rounded-2xl p-6 md:p-8 font-mono text-xs md:text-sm text-green-400 shadow-2xl relative overflow-hidden">
                             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-transparent"></div>
                             <div className="space-y-3 opacity-90">
                                <p>[14:02:15] <span className="text-white">KERNEL_AUDIT:</span> Hardware check passed. Secure Enclave locked.</p>
                                <p>[14:02:18] <span className="text-white">ACTION:</span> User authorized payment #9921 via Biometrics.</p>
                                <p>[14:02:19] <span className="text-white">EXECUTION:</span> Navigating to banking portal (Encrypted Tunnel).</p>
                                <p>[14:02:22] <span className="text-white">SNAPSHOT:</span> Screen_Capture_Hash_882a.png saved to local vault.</p>
                                <p>[14:02:24] <span className="text-white">STATUS:</span> Transaction pending bank approval. Agent session paused.</p>
                                <p className="animate-pulse">_</p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollReveal>
      </section>

      {/* Closing Statement */}
      <section className="max-w-5xl mx-auto px-6 mb-20 text-center">
        <ScrollReveal>
            <div className="border-t border-gray-100 pt-16">
                <p className="text-2xl md:text-4xl font-medium text-apple-black leading-tight">
                    "Usted no nos da acceso a sus datos; usted adquiere una infraestructura privada donde nosotros solo proveemos el cerebro operativo."
                </p>
                <div className="mt-12">
                     <button 
                        onClick={onBack}
                        className="text-gray-500 hover:text-black transition-colors font-medium text-sm tracking-wide uppercase"
                    >
                        Volver al inicio
                    </button>
                </div>
            </div>
        </ScrollReveal>
      </section>

    </div>
  );
};