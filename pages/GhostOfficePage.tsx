import React, { useState, useEffect, useRef } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

interface GhostOfficePageProps {
  onBack: () => void;
  onRequestAgent: () => void;
}

export const GhostOfficePage: React.FC<GhostOfficePageProps> = ({ onBack, onRequestAgent }) => {
  const [animationStep, setAnimationStep] = useState(0);
  const [activeUseCaseTab, setActiveUseCaseTab] = useState<'ops' | 'growth' | 'admin'>('ops');
  
  // Ref to scroll to the tabs section when clicking the secondary header
  const useCasesRef = useRef<HTMLDivElement>(null);

  // The sequence of words to cycle through.
  const words = [
    { text: "Microgestión.", color: "text-[#86868b]" }, // Index 0
    { text: "Burocracia.", color: "text-[#86868b]" },   // Index 1
    { text: "Fricción.", color: "text-[#86868b]" },     // Index 2 (Holds during prefix switch)
    { text: "Soberanía.", color: "text-transparent bg-clip-text bg-gradient-to-r from-[#007AFF] via-[#AF52DE] to-[#FF2D55]" } // Index 3
  ];

  useEffect(() => {
    // Sequence timing:
    // Step 0 (0ms): Microgestión
    // Step 1 (1500ms): Burocracia
    // Step 2 (3000ms): Fricción (Enter)
    // Step 3 (4500ms): Fricción (HOLD) + Prefix Transition Starts
    // Step 4 (6000ms): Soberanía (Enter)
    const timings = [0, 1500, 3000, 4500, 6000]; 

    const timeouts = timings.map((time, index) => {
      // We have 5 steps (0-4) mapped to the timeline, even though there are only 4 words.
      if (index < timings.length) {
        return setTimeout(() => {
          setAnimationStep(index);
        }, time);
      }
      return null;
    });

    return () => {
      timeouts.forEach(t => t && clearTimeout(t));
    };
  }, []);

  // Determine which word index should be visible based on the animation step.
  // Step 0 -> Word 0
  // Step 1 -> Word 1
  // Step 2 -> Word 2
  // Step 3 -> Word 2 (Hold "Fricción" while prefix changes)
  // Step 4 -> Word 3 ("Soberanía")
  const activeWordIndex = animationStep === 3 ? 2 : (animationStep > 3 ? 3 : animationStep);

  // Trigger the prefix transition during the hold step (index 3) or final step (index 4)
  const isTransitioning = animationStep >= 3;

  const handleHeaderNav = (tab: 'ops' | 'growth' | 'admin') => {
    setActiveUseCaseTab(tab);
    if (useCasesRef.current) {
        useCasesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Data for the new Use Cases Section with Images
  const useCaseGroups = {
    ops: [
        {
            category: "Finanzas",
            title: "Cuentas por Pagar",
            desc: "Identifica facturas, extrae datos con visión artificial, ingresa la info en el software contable y deja el pago listo para aprobación.",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000&auto=format&fit=crop" // Financial audit / clean desk
        },
        {
            category: "Operaciones",
            title: "Reporting Operativo",
            desc: "Ingresa semanalmente a portales de marketing y ventas, extrae métricas, compila datos en Excel y genera informes ejecutivos en PDF.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop" // Data dashboard
        },
        {
            category: "Logística",
            title: "Gestor de Inventario",
            desc: "Navega el software de gestión para detectar stock bajo mínimos y busca precios actualizados en portales de proveedores.",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop" // Warehouse / Logistics
        }
    ],
    growth: [
        {
            category: "Ventas",
            title: "Enriquecimiento de Leads",
            desc: "Monitorea entradas de prospectos, investiga en la web y LinkedIn para extraer tamaño de empresa y actualiza el CRM automáticamente.",
            image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2000&auto=format&fit=crop" // Meeting / Networking
        },
        {
            category: "E-commerce",
            title: "Asistente Online",
            desc: "Sincroniza precios y stock entre sitio web propio (Shopify) y marketplaces. Detecta pedidos y actualiza envíos.",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2000&auto=format&fit=crop" // Shopping / Ecom
        },
        {
            category: "Soporte",
            title: "Coordinador de Cliente",
            desc: "Monitorea tickets de soporte. Responde preguntas frecuentes usando documentación interna y escala casos complejos al equipo técnico.",
            image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2000&auto=format&fit=crop" // Contact / Phone
        }
    ],
    admin: [
        {
            category: "RRHH",
            title: "Onboarding Zero-Touch",
            desc: "Al detectar un contrato, navega paneles de administración para crear correos, accesos a Slack y perfiles de gestión.",
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop" // Team / Handshake
        },
        {
            category: "Legal",
            title: "Vigilancia Normativa",
            desc: "Revisa vencimientos de seguros y licencias. Identifica documentos faltantes y envía solicitudes automáticas a responsables.",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop" // Contract / Signing
        },
        {
            category: "Gestión",
            title: "Archivo Documental",
            desc: "Organización y renombrado automático de archivos en Drive/Dropbox según convención de la empresa.",
            image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2000&auto=format&fit=crop" // Files / Organized
        }
    ]
  };

  return (
    <div className="min-h-screen bg-white pt-20 font-sans selection:bg-black selection:text-white overflow-hidden">
      
      {/* SECONDARY HEADER (Relative / Static) */}
      <div className="relative z-40 bg-white border-b border-gray-100">
         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <span 
              className="font-semibold text-xl tracking-tight text-[#1d1d1f] cursor-pointer hover:opacity-70 transition-opacity" 
              onClick={() => window.scrollTo({top:0, behavior:'smooth'})}
            >
              Ghost Office
            </span>
            <div className="hidden md:flex gap-8 text-xs font-medium text-gray-500">
               <button 
                  onClick={() => handleHeaderNav('ops')} 
                  className={`uppercase tracking-wider transition-colors hover:text-black ${activeUseCaseTab === 'ops' ? 'text-black font-bold' : ''}`}
               >
                  Operaciones
               </button>
               <button 
                  onClick={() => handleHeaderNav('growth')} 
                  className={`uppercase tracking-wider transition-colors hover:text-black ${activeUseCaseTab === 'growth' ? 'text-black font-bold' : ''}`}
               >
                  Crecimiento
               </button>
               <button 
                  onClick={() => handleHeaderNav('admin')} 
                  className={`uppercase tracking-wider transition-colors hover:text-black ${activeUseCaseTab === 'admin' ? 'text-black font-bold' : ''}`}
               >
                  Gestión
               </button>
            </div>
         </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative pt-10 pb-32 md:pt-24 md:pb-48 px-6 overflow-hidden">
        
        {/* Ambient Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[1000px] md:h-[800px] bg-gradient-to-b from-blue-50 to-purple-50 rounded-full blur-[120px] opacity-60 -z-10 animate-pulse" style={{ animationDuration: '8s' }}></div>

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
            
            {/* Massive Animated Headline */}
            <div className="mb-8 md:mb-12 mt-12 md:mt-24 relative z-20">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-[#1d1d1f] leading-[1.1] flex flex-col items-center">
                   
                   {/* Dynamic Prefix with Wipe Transition */}
                   <div className="relative grid place-items-center h-[1.1em] overflow-visible mb-2 md:mb-0">
                        <span 
                            className="col-start-1 row-start-1 transition-all duration-1000 ease-in-out"
                            style={{ 
                                clipPath: isTransitioning ? 'inset(0 0 0 100%)' : 'inset(0 0 0 0)',
                                opacity: isTransitioning ? 0 : 1
                            }}
                        >
                            El fin de la
                        </span>

                        <span 
                             className="col-start-1 row-start-1 transition-all duration-1000 ease-in-out"
                             style={{ 
                                 clipPath: isTransitioning ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
                                 opacity: isTransitioning ? 1 : 0
                             }}
                        >
                            El <span className="text-blue-600 italic">principio</span> de la
                        </span>
                   </div>
                   
                   {/* Vertical Sliding Mask */}
                   <span className="block h-[1.3em] overflow-hidden relative mt-2 md:mt-0">
                      <span 
                        className="block transition-transform duration-[1000ms] ease-in-out cubic-bezier(0.2, 0.8, 0.2, 1)"
                        style={{ transform: `translateY(-${activeWordIndex * (100 / words.length)}%)` }}
                      >
                        {words.map((word, i) => (
                           <span key={i} className={`block h-[1.3em] flex items-center justify-center ${word.color} pb-2`}>
                             {word.text}
                           </span>
                        ))}
                      </span>
                   </span>
                </h1>
            </div>

            {/* Subheadline & Description */}
            <ScrollReveal delay={400}>
                <p className="text-xl md:text-3xl font-light text-[#1d1d1f] max-w-3xl mx-auto leading-relaxed mb-20 md:mb-28 opacity-0 animate-fade-in-up" style={{ animationDelay: '3s', animationFillMode: 'forwards' }}>
                   Su empresa funciona mejor cuando usted no hace el trabajo administrativo. <strong className="font-medium">Delegue la operación. Recupere la estrategia.</strong>
                </p>
            </ScrollReveal>

            {/* Floating UI Abstract Element */}
            <ScrollReveal delay={800} className="w-full max-w-4xl mx-auto">
                <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 p-6 md:p-10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-700 opacity-0 animate-fade-in-up" style={{ animationDelay: '3.5s', animationFillMode: 'forwards' }}>
                    
                    {/* Header of Fake UI */}
                    <div className="flex items-center justify-between mb-8 border-b border-gray-50 pb-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                            </div>
                            <div className="text-left">
                                <div className="text-sm font-bold text-gray-900">Resumen Matutino</div>
                                <div className="text-xs text-gray-500">Autogenerado por Blyndforce • Hoy, 08:00 AM</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full border border-green-100">
                             <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                             <span className="text-xs font-bold text-green-700 uppercase tracking-wide">Todo al día</span>
                        </div>
                    </div>

                    {/* Task Rows */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                        {/* Task 1 */}
                        <div className="bg-[#F5F5F7] rounded-2xl p-5 relative overflow-hidden">
                            <div className="absolute top-0 left-0 h-1 bg-blue-500 w-full"></div>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 block">Finanzas</span>
                            <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
                            <div className="text-sm text-gray-600">Facturas Conciliadas</div>
                        </div>
                         {/* Task 2 */}
                        <div className="bg-[#F5F5F7] rounded-2xl p-5 relative overflow-hidden">
                             <div className="absolute top-0 left-0 h-1 bg-purple-500 w-full"></div>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 block">Inbox</span>
                            <div className="text-2xl font-bold text-gray-900 mb-1">Zero</div>
                            <div className="text-sm text-gray-600">Correos Pendientes</div>
                        </div>
                         {/* Task 3 */}
                        <div className="bg-[#F5F5F7] rounded-2xl p-5 relative overflow-hidden">
                             <div className="absolute top-0 left-0 h-1 bg-orange-500 w-full"></div>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 block">Agenda</span>
                            <div className="text-2xl font-bold text-gray-900 mb-1">Optimizada</div>
                            <div className="text-sm text-gray-600">Sin Conflictos</div>
                        </div>
                    </div>

                </div>
            </ScrollReveal>

        </div>
      </section>

      {/* 2. NEW INTERACTIVE USE CASES SECTION */}
      <section ref={useCasesRef} className="max-w-7xl mx-auto px-6 mb-32 md:mb-48 scroll-mt-32">
          <ScrollReveal>
             <div className="text-center mb-16">
                 <h2 className="text-7xl md:text-9xl font-semibold tracking-tighter mb-20 max-w-6xl mx-auto leading-[0.9]">
                     <span className="text-red-600">Tecnología para</span> <span className="text-black italic">liderar</span>, <br className="hidden md:block"/>
                     <span className="text-red-600">no para ejecutar.</span>
                 </h2>

                 {/* Custom Tab Navigation - Separated Pills */}
                 <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-24">
                     <button 
                        onClick={() => setActiveUseCaseTab('ops')}
                        className={`px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                            activeUseCaseTab === 'ops' 
                            ? 'bg-black text-white shadow-xl scale-105' 
                            : 'bg-[#F5F5F7] text-gray-500 hover:text-black hover:bg-gray-200'
                        }`}
                     >
                         Operaciones & Finanzas
                     </button>
                     <button 
                        onClick={() => setActiveUseCaseTab('growth')}
                        className={`px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                            activeUseCaseTab === 'growth' 
                            ? 'bg-black text-white shadow-xl scale-105' 
                            : 'bg-[#F5F5F7] text-gray-500 hover:text-black hover:bg-gray-200'
                        }`}
                     >
                         Crecimiento & Ventas
                     </button>
                     <button 
                        onClick={() => setActiveUseCaseTab('admin')}
                        className={`px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                            activeUseCaseTab === 'admin' 
                            ? 'bg-black text-white shadow-xl scale-105' 
                            : 'bg-[#F5F5F7] text-gray-500 hover:text-black hover:bg-gray-200'
                        }`}
                     >
                         Gestión & Talento
                     </button>
                 </div>
             </div>

             {/* Use Cases Grid - Animated with Images - APPLE CARD STYLE */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {useCaseGroups[activeUseCaseTab].map((item, index) => (
                    <div 
                        key={`${activeUseCaseTab}-${index}`} 
                        className="group flex flex-col bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 h-full cursor-pointer"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        {/* Image Container */}
                        <div className="h-64 md:h-80 overflow-hidden relative">
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>

                        {/* Content Container */}
                        <div className="p-8 md:p-10 flex flex-col flex-grow">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#86868b] mb-3">
                                {item.category}
                            </span>
                            <h3 className="text-2xl md:text-3xl font-semibold text-[#1d1d1f] mb-4 leading-tight">
                                {item.title}
                            </h3>
                            <p className="text-base md:text-lg text-[#86868b] font-normal leading-relaxed mb-8 flex-grow">
                                {item.desc}
                            </p>
                            <div className="text-[#0066CC] font-medium text-base hover:underline flex items-center gap-1">
                                Ver detalles
                                <svg className="w-4 h-4 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                            </div>
                        </div>
                    </div>
                ))}
             </div>
          </ScrollReveal>
      </section>

      {/* 3. EXPERTS BANNER (Clean Apple Style) */}
      <section className="max-w-7xl mx-auto px-6 mb-32 md:mb-48 text-center pt-20">
        <ScrollReveal>
             <h2 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[0.95] mb-8">
                  <span className="text-[#0071e3]">Agentes <span className="italic">expertos</span></span>
                  <span className="block text-[#1d1d1f]">toman el control.</span>
             </h2>
             
             <p className="mt-8 text-xl md:text-3xl text-[#1d1d1f] max-w-4xl mx-auto font-medium leading-relaxed">
                 El equipo de Blyndforce Ghost Office está aquí para ayudarle a encontrar las soluciones adecuadas, ya sea que esté comenzando, creciendo o buscando simplificar su operación diaria.
             </p>
        </ScrollReveal>
      </section>

      {/* 4. FINAL CTA - Premium Dark Theme */}
      <section className="text-center pb-20 px-6">
        <ScrollReveal>
            <div className="bg-[#1d1d1f] rounded-[3rem] p-16 md:p-24 relative overflow-hidden max-w-5xl mx-auto text-white">
                 <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                 
                 <div className="relative z-10">
                    <h2 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
                       Recupere su libertad operativa.
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 font-light max-w-2xl mx-auto">
                        Configure su Ghost Office hoy. Sin contratos forzosos. Cancelación inmediata.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button 
                            onClick={onRequestAgent}
                            className="bg-white text-black px-10 py-4 rounded-full font-medium text-lg hover:bg-gray-200 transition-colors transform hover:scale-105 active:scale-95 shadow-xl"
                        >
                            Configurar Nodo
                        </button>
                        <button 
                            onClick={onBack}
                            className="text-white border border-white/30 px-10 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-colors"
                        >
                            Volver
                        </button>
                    </div>
                 </div>
            </div>
        </ScrollReveal>
      </section>

    </div>
  );
};