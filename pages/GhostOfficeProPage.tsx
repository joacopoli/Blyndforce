import React, { useRef, useState, useEffect } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { View } from '../App';

interface GhostOfficeProPageProps {
  onBack: () => void;
  onRequestAgent: () => void;
  onNavigate?: (view: View) => void;
}

// Reusable LiquidText with LATE trigger and SLOW animation
export const LiquidText: React.FC<{ children: React.ReactNode; className?: string; variant?: 'main' | 'blue' | 'orange' }> = ({ children, className = '', variant = 'main' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      // Trigger only when element is well inside the viewport (40% from bottom)
      { threshold: 0.1, rootMargin: "0px 0px -40% 0px" } 
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const gradients = {
    main: 'linear-gradient(to right, #E63E6D 0%, #D96FF8 25%, #7B53DB 45%, #FFFFFF 50%, #FFFFFF 100%)',
    blue: 'linear-gradient(to right, #007AFF 0%, #5AC8FA 45%, #FFFFFF 50%, #FFFFFF 100%)',
    orange: 'linear-gradient(to right, #FF9500 0%, #FF2D55 45%, #FFFFFF 50%, #FFFFFF 100%)'
  };

  return (
    <span
      ref={ref}
      className={`${className} ${isVisible ? 'animate-liquid-fill' : ''}`}
      style={{
        backgroundImage: gradients[variant],
        backgroundSize: '200% auto',
        backgroundPosition: '100% 50%', // Start completely white (right side of gradient)
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
      }}
    >
      {children}
    </span>
  );
};

// Reusable CipherReveal with LATE trigger
export const CipherRevealText: React.FC<{ text: string }> = ({ text }) => {
  const [display, setDisplay] = useState(text.replace(/[^\s]/g, '*')); 
  const [isLiquid, setIsLiquid] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          startSequence();
          observer.disconnect();
        }
      },
      // Trigger only when element is well inside the viewport
      { threshold: 0.1, rootMargin: "0px 0px -40% 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  const startSequence = () => {
    let currentIndex = 0;
    const totalLength = text.length;
    
    const interval = setInterval(() => {
      if (currentIndex > totalLength) {
        clearInterval(interval);
        setTimeout(() => setIsLiquid(true), 400);
        return;
      }

      setDisplay(() => {
         return text.split('').map((char, i) => {
            if (i < currentIndex) return char;
            return char === ' ' ? ' ' : '*';
         }).join('');
      });
      currentIndex++;
    }, 100); // Slower cipher speed
  };

  const gradientStyle = {
    backgroundImage: 'linear-gradient(to right, #E63E6D 0%, #D96FF8 25%, #7B53DB 45%, #FFFFFF 50%, #FFFFFF 100%)',
    backgroundSize: '200% auto',
    backgroundPosition: '100% 50%', 
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: isLiquid ? 'transparent' : '#FFFFFF', 
  };

  return (
    <span
      ref={ref}
      style={isLiquid ? gradientStyle : { color: '#FFFFFF' }}
      className={isLiquid ? 'animate-liquid-fill' : ''}
    >
      {display}
    </span>
  );
};

export const GhostOfficeProPage: React.FC<GhostOfficeProPageProps> = ({ onBack, onRequestAgent }) => {
  
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // No animations on main container. Instant visibility.
    <div className="bg-black min-h-screen text-[#F5F5F7] font-sans selection:bg-[#F5F5F7] selection:text-black pt-20">
        
        <style>{`
          @keyframes liquidFill {
            0% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-liquid-fill {
            animation: liquidFill 3.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
        `}</style>

        {/* Sub Nav - RELATIVE (Static), NOT STICKY */}
        <div className="relative z-40 bg-black border-b border-white/10">
           <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
              <span className="font-semibold text-xl tracking-tight text-white cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
                Ghost Office <span className="opacity-50">Pro</span>
              </span>
              <div className="hidden md:flex gap-8 text-xs font-medium text-gray-400">
                 <button onClick={() => scrollToSection('governance')} className="hover:text-white transition-colors uppercase tracking-wider">Gobernanza</button>
                 <button onClick={() => scrollToSection('infrastructure')} className="hover:text-white transition-colors uppercase tracking-wider">Infraestructura</button>
                 <button onClick={() => scrollToSection('audit')} className="hover:text-white transition-colors uppercase tracking-wider">Auditoría</button>
                 <button onClick={() => scrollToSection('roi')} className="hover:text-white transition-colors uppercase tracking-wider">ROI</button>
              </div>
           </div>
        </div>

        {/* 1. HERO - NO ANIMATION CLASSES. STATIC LOAD. */}
        <section className="pt-24 pb-32 px-6 text-center overflow-hidden min-h-[70vh] flex flex-col justify-center relative">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-b from-blue-900/10 to-transparent rounded-full blur-[120px] pointer-events-none"></div>

           <div className="relative z-10">
               <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter mb-12 leading-[0.95] max-w-5xl mx-auto">
                  <span className="text-white block">Supremacía</span>
                  <span className="block pb-4">
                      {/* LiquidText handles its own animation, but here it's already in view so it triggers immediately */}
                      <LiquidText variant="main">Operativa.</LiquidText>
                  </span>
               </h1>
               
               <p className="max-w-3xl mx-auto text-xl md:text-3xl font-light leading-relaxed text-gray-300">
                  La fuerza laboral del futuro no necesita oficinas, ni descanso, ni supervisión humana.
                  <br className="hidden md:block"/>
                  <span className="text-white font-medium">Blyndforce Enterprise</span> es la capa de ejecución definitiva para corporaciones que exigen control absoluto.
               </p>

               <div className="mt-16 flex flex-col sm:flex-row justify-center gap-6">
                   <button onClick={onRequestAgent} className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors">
                       Hable con Ventas
                   </button>
               </div>
           </div>
        </section>

        {/* 2. GOVERNANCE SECTION */}
        <section id="governance" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10">
             <ScrollReveal>
                 <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 leading-[0.95]">
                    <span className="block text-gray-500">Comando</span>
                    <LiquidText variant="blue">Centralizado.</LiquidText>
                 </h2>
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
                     <div className="absolute -top-32 -left-32 bg-[#1a1a1a] px-4 py-2 rounded-lg border border-white/10 text-xs text-gray-400 hidden md:block">
                         <span className="text-green-500">●</span> APAC Region <br/>Policy: v2.4
                     </div>
                     <div className="absolute top-32 -right-48 bg-[#1a1a1a] px-4 py-2 rounded-lg border border-white/10 text-xs text-gray-400 hidden md:block">
                         <span className="text-green-500">●</span> EMEA Region <br/>Policy: v2.4
                     </div>
                     <div className="absolute bottom-[-180px] bg-[#1a1a1a] px-4 py-2 rounded-lg border border-white/10 text-xs text-gray-400 hidden md:block">
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
                 </ScrollReveal>

                 <ScrollReveal delay={200}>
                     <h3 className="text-3xl font-semibold text-white mb-6">Eliminación del "Shadow IT".</h3>
                     <p className="text-gray-400 text-lg leading-relaxed mb-8">
                         Sus empleados humanos usan herramientas no aprobadas para trabajar más rápido. Sus agentes digitales solo usan las herramientas que usted autoriza, de la manera exacta en que usted lo autoriza.
                     </p>
                 </ScrollReveal>
             </div>
        </section>

        {/* 3. INFRASTRUCTURE SECTION */}
        <section id="infrastructure" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10">
             <ScrollReveal>
                 <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 leading-[0.95]">
                    <span className="block text-gray-500">Puente al</span>
                    <LiquidText variant="orange">Legado.</LiquidText>
                 </h2>
                 <p className="text-xl md:text-3xl font-light text-gray-300 max-w-3xl leading-relaxed mb-16">
                     La verdadera transformación digital no requiere demoler sus cimientos. Blyndforce opera sobre su infraestructura existente con la delicadeza de un cirujano.
                 </p>
             </ScrollReveal>

             {/* The Stack Visual */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                 <div className="bg-[#111] p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 text-[120px] font-bold text-white/5 leading-none -mt-4 -mr-4 transition-transform group-hover:scale-110 duration-700">M4</div>
                     <h3 className="text-2xl font-bold text-white mb-6 relative z-10">El Motor: Apple Silicon</h3>
                     <p className="text-gray-400 mb-8 relative z-10">
                         Cada nodo Enterprise corre sobre un chip M4 Pro dedicado. Neural Engine de 16 núcleos para procesamiento de visión local. Sin latencia de red. Sin compartir recursos.
                     </p>
                     <div className="flex gap-4 relative z-10">
                         <div className="bg-gray-800 px-4 py-2 rounded text-xs font-mono text-gray-300">16GB Unified Memory</div>
                         <div className="bg-gray-800 px-4 py-2 rounded text-xs font-mono text-gray-300">512GB SSD Encrypted</div>
                     </div>
                 </div>

                 <div className="bg-[#111] p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 text-[120px] font-bold text-white/5 leading-none -mt-4 -mr-4 transition-transform group-hover:scale-110 duration-700">VIS</div>
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
                         <div key={i} className="py-4 border border-white/10 rounded-xl text-gray-400 text-sm font-mono hover:bg-white/5 transition-colors cursor-default">
                             {sys}
                         </div>
                     ))}
                 </div>
             </div>
        </section>

        {/* 4. AUDIT SECTION */}
        <section id="audit" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10">
             <ScrollReveal>
                 <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 leading-[0.95]">
                    <span className="block text-gray-500">Transparencia</span>
                    {/* CipherRevealText transitions "La Caja Negra" from **** to text to Color */}
                    <span className="block text-white"><CipherRevealText text="La Caja Negra." /></span>
                 </h2>
                 <p className="text-xl md:text-3xl font-light text-gray-300 max-w-3xl leading-relaxed mb-16">
                     La confianza no escala. La verificación sí. Blyndforce ofrece el sistema de auditoría más granular del mercado de IA.
                 </p>
             </ScrollReveal>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                 {/* The Terminal Visual */}
                 <div className="bg-[#050505] border border-white/10 rounded-xl p-6 font-mono text-xs md:text-sm shadow-2xl overflow-hidden h-full min-h-[500px]">
                     <div className="flex gap-2 mb-4 border-b border-white/5 pb-4">
                         <div className="w-3 h-3 rounded-full bg-red-500"></div>
                         <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                         <div className="w-3 h-3 rounded-full bg-green-500"></div>
                         <span className="ml-auto text-gray-600">audit_stream_v9.log</span>
                     </div>
                     <div className="text-green-500 space-y-2 opacity-90">
                         <p>[TIMESTAMP: 14:00:01.002] <span className="text-white">SESSION_START</span> User: Agent_01</p>
                         <p>[TIMESTAMP: 14:00:01.205] <span className="text-white">AUTH_CHECK</span> Biometric_Pass: True</p>
                         <p>[TIMESTAMP: 14:00:02.110] <span className="text-white">ACTION</span> Navigate -&gt; "secure.bank.com"</p>
                         <p>[TIMESTAMP: 14:00:02.450] <span className="text-blue-400">ENCRYPTION</span> TLS 1.3 Handshake Established</p>
                         <p>[TIMESTAMP: 14:00:03.001] <span className="text-white">INPUT</span> Credential Injection (Vault ID: #992)</p>
                         <p>[TIMESTAMP: 14:00:05.200] <span className="text-yellow-500">SNAPSHOT</span> Screen_Cap_AF22.png saved [HASH: 8x99...]</p>
                         <p>[TIMESTAMP: 14:00:06.000] <span className="text-white">DECISION</span> Parsing Balance Table...</p>
                         <p className="text-gray-500">...</p>
                         <p>[TIMESTAMP: 14:00:10.550] <span className="text-purple-500">COMPLIANCE</span> Flag: Transaction &gt; $10k detected.</p>
                         <p>[TIMESTAMP: 14:00:10.555] <span className="text-purple-500">COMPLIANCE</span> Action: Alert sent to CFO.</p>
                     </div>
                 </div>

                 <div className="flex flex-col justify-center space-y-12">
                     <div>
                         <h3 className="text-2xl font-bold text-white mb-4">La Caja Negra (Black Box)</h3>
                         <p className="text-gray-400 leading-relaxed">
                             Al igual que en aviación, cada nodo registra cada micro-evento. Si ocurre un error, usted no necesita adivinar "por qué lo hizo la IA". Usted reproduce la sesión, ve la captura de pantalla y lee el log de razonamiento.
                         </p>
                     </div>
                     <div>
                         <h3 className="text-2xl font-bold text-white mb-4">Inmutabilidad Criptográfica</h3>
                         <p className="text-gray-400 leading-relaxed">
                             Los logs de auditoría se firman criptográficamente en el momento de su creación. Ni siquiera un administrador de sistemas con acceso root puede alterar el registro histórico sin romper la cadena de validación.
                         </p>
                     </div>
                 </div>
             </div>
        </section>

        {/* 5. ROI SECTION */}
        <section id="roi" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10">
             <ScrollReveal>
                 <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 leading-[0.95]">
                    <span className="block text-gray-500">Matemática</span>
                    <LiquidText variant="main">Pura.</LiquidText>
                 </h2>
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

        {/* Footer CTA */}
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10 text-center">
             <h2 className="text-3xl font-semibold mb-8 text-white">¿Listo para la transición?</h2>
             <button onClick={onRequestAgent} className="bg-white text-black px-10 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors transform hover:scale-105 active:scale-95 shadow-2xl">
                 Contactar Ingeniería
             </button>
        </section>
        
        {/* Bottom Nav */}
        <div className="py-8 border-t border-white/10 text-center">
            <button onClick={onBack} className="text-gray-500 hover:text-white transition-colors text-sm">
                Volver al Sitio Principal
            </button>
        </div>

    </div>
  );
};