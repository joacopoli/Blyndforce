import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

interface EnterprisePageProps {
  onBack: () => void;
  onNavigateToGhost?: () => void;
  onNavigateToGhostPro?: () => void; // New Prop
}

export const EnterprisePage: React.FC<EnterprisePageProps> = ({ onBack, onNavigateToGhost, onNavigateToGhostPro }) => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20 animate-fade-in-up relative overflow-hidden font-sans selection:bg-black selection:text-white">
      
      {/* 1. HERO: HIGH-END CORPORATE MESSAGING */}
      <section className="max-w-[1440px] mx-auto px-6 mb-24 md:mb-32 pt-16 md:pt-24 text-center">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto flex flex-col items-center">
               {/* Eyebrow - Apple Style */}
               <h2 className="text-sm md:text-base font-semibold text-[#1d1d1f] mb-8 tracking-widest uppercase">
                  Blyndforce Enterprise
               </h2>
               
               {/* Massive Headline - The "Leverage" Value Proposition */}
               <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-[#1d1d1f] leading-[0.95] mb-12">
                  Multiplique su impacto.<br/>
                  <span className="text-[#86868b]">No su estructura.</span>
               </h1>
               
               {/* Body Copy - Sophisticated & Direct */}
               <p className="text-xl md:text-3xl font-medium leading-relaxed text-[#1d1d1f] max-w-4xl mx-auto mb-14 text-center md:px-12 font-light">
                  Elimine la brecha entre la estrategia y la acción. Despliegue una fuerza laboral digital soberana que opera 24/7 en hardware físico dedicado. <br className="hidden md:block"/>
                  <span className="text-black font-semibold">Máxima potencia de ejecución. Cero latencia administrativa.</span>
               </p>

               {/* CTAs */}
               <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 w-full">
                  <button className="bg-[#0071e3] text-white px-10 py-4 rounded-full text-xl font-medium hover:bg-[#0077ED] transition-colors min-w-[220px] shadow-lg shadow-blue-500/20">
                     Hablar con Ventas
                  </button>
                  <button onClick={onBack} className="text-[#1d1d1f] hover:text-[#0071e3] px-8 py-4 font-medium text-xl flex items-center gap-2 transition-colors">
                     Explorar Arquitectura <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  </button>
               </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 2. DUAL CARDS SECTION: TACTICAL VS STRATEGIC */}
      <section className="max-w-[1440px] mx-auto px-6 mb-32 md:mb-48">
         <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
               
               {/* Card 1: Ghost Office (Pyme/Growth) - Focus on Agility */}
               <div className="group flex flex-col bg-[#1D1D1F] rounded-[2.5rem] overflow-hidden shadow-2xl h-full cursor-pointer hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 relative min-h-[600px] md:min-h-[700px]">
                  {/* Image Background */}
                  <div className="absolute inset-0 w-full h-full">
                     <img 
                       src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
                       alt="Modern Agile Office" 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  </div>

                  {/* Text Content - Bottom Aligned & Centered */}
                  <div className="absolute bottom-0 left-0 w-full p-10 md:p-16 text-center z-10 flex flex-col items-center">
                     <span className="text-xs font-bold text-white uppercase tracking-widest mb-4 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">Growth & Pymes</span>
                     <h3 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-4 leading-tight">
                       Ghost Office.
                     </h3>
                     <h4 className="text-xl md:text-2xl text-gray-300 font-medium mb-6">
                        Agilidad Táctica.
                     </h4>
                     <p className="text-lg text-gray-400 mb-10 font-light max-w-md leading-relaxed">
                        Para organizaciones que necesitan moverse rápido. Un nodo central que elimina la fricción administrativa diaria.
                     </p>
                     <button 
                        onClick={onNavigateToGhost}
                        className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors"
                     >
                        Ver capacidades
                     </button>
                  </div>
               </div>

               {/* Card 2: Ghost Office Pro (Enterprise) - Focus on Supremacy & Scale */}
               <div className="group flex flex-col bg-[#1D1D1F] rounded-[2.5rem] overflow-hidden shadow-2xl h-full cursor-pointer hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 relative min-h-[600px] md:min-h-[700px]">
                   {/* Image Background - Data Center / High Tech */}
                  <div className="absolute inset-0 w-full h-full">
                     <img 
                       src="https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=2662&auto=format&fit=crop" 
                       alt="Enterprise Data Center Infrastructure" 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  </div>

                  {/* Text Content - Bottom Aligned & Centered */}
                  <div className="absolute bottom-0 left-0 w-full p-10 md:p-16 text-center z-10 flex flex-col items-center">
                     <span className="text-xs font-bold text-white uppercase tracking-widest mb-4 bg-blue-600/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-lg shadow-blue-900/50">Enterprise</span>
                     <h3 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-4 leading-tight">
                       Ghost Office Pro.
                     </h3>
                     <h4 className="text-xl md:text-2xl text-gray-300 font-medium mb-6">
                        Supremacía Operativa.
                     </h4>
                     <p className="text-lg text-gray-400 mb-10 font-light max-w-md leading-relaxed">
                        Infraestructura masiva para corporaciones. Control de sistemas Legacy, auditoría forense y ejecución global.
                     </p>
                     <button
                        onClick={onNavigateToGhostPro} 
                        className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors"
                     >
                        Ver arquitectura
                     </button>
                  </div>
               </div>

            </div>
         </ScrollReveal>
      </section>

      {/* Concept: Ghost Office */}
      <section className="max-w-7xl mx-auto px-6 mb-32 md:mb-48">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-start gap-12 md:gap-24 border-t border-gray-100 pt-24">
            <div className="w-full md:w-1/3">
               <span className="text-xs font-bold tracking-[0.2em] uppercase text-apple-gray mb-4 block">El Concepto</span>
               <h2 className="text-4xl md:text-6xl font-semibold text-apple-black tracking-tighter leading-none">
                 Fuerza<br/>Invisible.
               </h2>
            </div>
            <div className="w-full md:w-2/3 space-y-8">
               <p className="text-2xl md:text-4xl leading-tight font-medium text-apple-black">
                 Una oficina que nunca duerme.
               </p>
               <p className="text-lg md:text-xl text-[#86868b] leading-relaxed font-light max-w-2xl">
                 Enterprise no es una herramienta más en su stack tecnológico. Es una capa de <strong className="text-black font-medium">fuerza laboral digital</strong> que se asienta sobre su infraestructura actual. Sin APIs complejas. Sin proyectos de migración de años. Inteligencia pura aplicada directamente sobre sus interfaces visuales.
               </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Architecture - High Contrast Cards */}
      <section className="max-w-7xl mx-auto px-6 mb-32 md:mb-48">
        <ScrollReveal>
           <h3 className="text-3xl md:text-5xl font-semibold mb-12 md:mb-20 text-apple-black tracking-tight text-center md:text-left">Arquitectura de Nodos</h3>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Master Agent */}
          <ScrollReveal delay={100} className="h-full">
            <div className="h-full p-10 md:p-14 bg-[#1D1D1F] rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-900/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-800/40 transition-colors duration-700"></div>
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                   <span className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-4 block">Operational Core</span>
                   <h4 className="text-3xl md:text-4xl font-semibold mb-6 text-white tracking-tight">El Agente Maestro</h4>
                   <p className="text-lg text-gray-400 leading-relaxed font-light">
                     El cerebro central. Una unidad física de alto rendimiento (<span className="text-white">Mac Mini M4 Pro</span>) que orquesta la operación global. Tiene los permisos de "Super Admin" y la capacidad de auditar a los sub-agentes.
                   </p>
                </div>
                <div className="mt-12">
                   <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-gray-800/50 text-xs font-medium text-white backdrop-blur-md">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      Hardware Dedicado
                   </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Satellite Agents */}
          <ScrollReveal delay={200} className="h-full">
             <div className="h-full p-10 md:p-14 bg-[#F5F5F7] rounded-[2.5rem] border border-gray-100 relative overflow-hidden">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                   <span className="text-purple-600 font-bold tracking-widest text-xs uppercase mb-4 block">Satellite Units</span>
                   <h4 className="text-3xl md:text-4xl font-semibold mb-6 text-apple-black tracking-tight">Agentes Ejecutores</h4>
                   <p className="text-lg text-[#86868b] leading-relaxed font-light">
                     Nodos especializados por departamento (Finanzas, HR, Ventas). Operan de forma autónoma solicitando recursos al Maestro. Diseñados para tareas de alto volumen y especificidad técnica.
                   </p>
                </div>
                 <div className="mt-12">
                   <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-xs font-medium text-black">
                      <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                      Escalabilidad Horizontal
                   </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="max-w-7xl mx-auto px-6 mb-32 md:mb-48">
        <ScrollReveal>
             <div className="border-t border-gray-100 mb-16"></div>
             <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                <h3 className="text-3xl md:text-5xl font-semibold text-apple-black tracking-tight max-w-xl">
                  Ejecución sin fricción.<br/>
                  <span className="text-[#86868b]">Compatibilidad absoluta.</span>
                </h3>
             </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {[
                {
                    icon: "M13 10V3L4 14h7v7l9-11h-7z", // Lightning
                    title: "Interoperabilidad Visual",
                    desc: "Blyndforce no necesita APIs. Ve la pantalla. Copia y pega datos entre SAP y Excel, o Salesforce y su web bancaria, exactamente como lo haría un humano experto."
                },
                {
                    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", // Check circle
                    title: "Auditoría Perpetua",
                    desc: "Cada transacción es cruzada en tiempo real. Detectamos desviaciones de centavos al instante, eliminando el muestreo aleatorio de las auditorías tradicionales."
                },
                {
                    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", // Chart
                    title: "Inteligencia en Vivo",
                    desc: "Informes generados al momento. '¿Cuál es mi posición de caja exacta ahora mismo?'. Su agente consolida bancos y cuentas por cobrar en segundos."
                }
            ].map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                    <div className="group">
                        <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-500">
                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d={item.icon}></path></svg>
                        </div>
                        <h4 className="text-xl font-semibold text-apple-black mb-4 tracking-tight">{item.title}</h4>
                        <p className="text-[#86868b] leading-relaxed font-light text-lg">{item.desc}</p>
                    </div>
                </ScrollReveal>
            ))}
        </div>
      </section>

      {/* Deep Use Cases */}
      <section className="max-w-7xl mx-auto px-6 mb-32 md:mb-48">
        <ScrollReveal>
            <div className="mb-20">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-apple-gray mb-4 block">Profundidad Operativa</span>
                <h3 className="text-3xl md:text-5xl font-semibold text-apple-black tracking-tight mb-6">
                    El sistema nervioso de su operación.
                </h3>
            </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            {/* Category: Finance */}
            <ScrollReveal delay={100}>
                <div className="border-t border-black pt-6 mb-8">
                    <h4 className="text-lg font-bold text-apple-black flex items-center gap-2">
                        Finanzas & Contabilidad
                    </h4>
                </div>
                <ul className="space-y-10">
                    <li className="group">
                        <h5 className="font-medium text-base text-black mb-2">Conciliación Intercompany</h5>
                        <p className="text-sm text-[#86868b] leading-relaxed">Navegación de libros de múltiples entidades y detección de descalces en tiempo real.</p>
                    </li>
                    <li className="group">
                        <h5 className="font-medium text-base text-black mb-2">Auditoría de Gastos (T&E)</h5>
                        <p className="text-sm text-[#86868b] leading-relaxed">Lectura visual de tickets, validación de políticas y detección de duplicados.</p>
                    </li>
                     <li className="group">
                        <h5 className="font-medium text-base text-black mb-2">Gestión de Tesorería</h5>
                        <p className="text-sm text-[#86868b] leading-relaxed">Login autónomo en portales bancarios para consolidación de caja diaria a primera hora.</p>
                    </li>
                </ul>
            </ScrollReveal>

            {/* Category: Operations */}
            <ScrollReveal delay={200}>
                <div className="border-t border-gray-200 pt-6 mb-8">
                    <h4 className="text-lg font-bold text-apple-gray flex items-center gap-2">
                        Operaciones & Supply
                    </h4>
                </div>
                <ul className="space-y-10">
                    <li className="group">
                        <h5 className="font-medium text-base text-black mb-2">Torre de Control Logístico</h5>
                        <p className="text-sm text-[#86868b] leading-relaxed">Monitoreo de webs de navieras. Actualización de ETAs en ERP basado en tracking real.</p>
                    </li>
                    <li className="group">
                        <h5 className="font-medium text-base text-black mb-2">Carga de Pedidos Legacy</h5>
                        <p className="text-sm text-[#86868b] leading-relaxed">Input manual simulado en sistemas AS/400 (pantalla verde) desde PDFs de clientes.</p>
                    </li>
                     <li className="group">
                        <h5 className="font-medium text-base text-black mb-2">Master Data Management</h5>
                        <p className="text-sm text-[#86868b] leading-relaxed">Limpieza continua de duplicados y unificación de registros maestros.</p>
                    </li>
                </ul>
            </ScrollReveal>

            {/* Category: Legal/HR */}
            <ScrollReveal delay={300}>
                <div className="border-t border-gray-200 pt-6 mb-8">
                    <h4 className="text-lg font-bold text-apple-gray flex items-center gap-2">
                        Legal & RRHH
                    </h4>
                </div>
                <ul className="space-y-10">
                    <li className="group">
                        <h5 className="font-medium text-base text-black mb-2">Onboarding Zero-Touch</h5>
                        <p className="text-sm text-[#86868b] leading-relaxed">Creación de emails, usuarios Slack y accesos VPN automáticos tras firma de contrato.</p>
                    </li>
                    <li className="group">
                        <h5 className="font-medium text-base text-black mb-2">Vigilancia Regulatoria</h5>
                        <p className="text-sm text-[#86868b] leading-relaxed">Descarga y clasificación diaria de notificaciones fiscales y boletines oficiales.</p>
                    </li>
                     <li className="group">
                        <h5 className="font-medium text-base text-black mb-2">Nómina Global</h5>
                        <p className="text-sm text-[#86868b] leading-relaxed">Consolidación de novedades internacionales en formato estándar para pagos.</p>
                    </li>
                </ul>
            </ScrollReveal>
        </div>
      </section>

      {/* NEW SECTION: Governance & Audit (Replaces Apple Silicon) */}
      <section className="bg-[#F5F5F7] py-24 md:py-32 px-6 mb-32 md:mb-48 border-y border-gray-100">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
             <div className="w-full md:w-1/2">
                <ScrollReveal>
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-apple-gray mb-4 block">Compliance</span>
                    <h3 className="text-3xl md:text-5xl font-semibold text-apple-black tracking-tighter mb-6 leading-tight">
                        La "Caja Negra" Corporativa.
                    </h3>
                    <p className="text-lg text-[#86868b] leading-relaxed font-light mb-8">
                        ¿Qué hizo la IA a las 4:03 PM? Blyndforce lo sabe. A diferencia de un empleado humano, cada clic, cada login y cada archivo movido queda registrado en un <strong>log forense inmutable</strong>.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                            <svg className="text-green-600 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span className="text-apple-black font-medium">Trazabilidad del 100% de acciones.</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <svg className="text-green-600 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span className="text-apple-black font-medium">Logs de auditoría exportables para Compliance.</span>
                        </li>
                         <li className="flex items-center gap-3">
                            <svg className="text-green-600 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span className="text-apple-black font-medium">Alertas de anomalías operativas.</span>
                        </li>
                    </ul>
                </ScrollReveal>
             </div>
             <div className="w-full md:w-1/2">
                 <ScrollReveal delay={200}>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 font-mono text-xs text-gray-500 leading-loose">
                        <div className="border-b border-gray-100 pb-2 mb-4 flex justify-between">
                            <span>AUDIT_LOG_STREAM_V2</span>
                            <span className="text-green-600">● LIVE RECORDING</span>
                        </div>
                        <p>[14:02:11] SYSTEM: Auth Check Passed (Node_04)</p>
                        <p>[14:02:15] ACTION: Navigated to 'banco_nacion.com.ar'</p>
                        <p>[14:02:18] INPUT: Credential Injection (Encrypted Vault)</p>
                        <p>[14:02:22] ACTION: Downloaded 'Extracto_Junio.pdf'</p>
                        <p>[14:02:23] DATA: Parsed 42 transactions. No anomalies.</p>
                        <p>[14:02:25] ACTION: Logout. Session Closed.</p>
                        <p>[14:02:26] HASH: 8f9a2b3c4d5e6f... (Record Sealed)</p>
                    </div>
                 </ScrollReveal>
             </div>
         </div>
      </section>

      {/* Integration - Split Layout */}
      <section className="max-w-7xl mx-auto px-6 mb-32 md:mb-48">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
            <div className="w-full md:w-1/2">
                <ScrollReveal>
                    <h3 className="text-4xl md:text-5xl font-semibold text-apple-black tracking-tight mb-8">
                        Tus programas.<br/>
                        <span className="text-blue-600">Bajo tu control.</span>
                    </h3>
                    <p className="text-lg md:text-xl text-[#86868b] leading-relaxed font-light">
                        Al operar visualmente, Blyndforce no necesita APIs. Puede acceder a sistemas Legacy, AS/400 o portales gubernamentales que no se han actualizado en décadas. Usted mantiene las credenciales; nosotros solo ponemos las manos digitales.
                    </p>
                </ScrollReveal>
            </div>
            <div className="w-full md:w-1/2">
                <ScrollReveal delay={200}>
                    <div className="grid grid-cols-2 gap-4">
                        {['SAP R/3', 'Salesforce', 'Oracle Cloud', 'AS/400', 'Citrix', 'Office 365'].map((tool, i) => (
                            <div key={i} className="py-6 border-b border-gray-100 text-2xl font-semibold text-gray-300 hover:text-black transition-colors cursor-default">
                                {tool}
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
          </div>
      </section>

      {/* RE-ENGINEERED SECURITY SECTION - The "Bunker" */}
      <section className="max-w-[98%] mx-auto bg-[#0a0a0a] text-white py-24 md:py-40 px-6 md:px-24 rounded-[3rem] mb-32 md:mb-48 relative overflow-hidden">
        {/* Abstract Dark Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-blue-900/10 to-transparent rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mb-24">
                <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-6 block">
                    Protocolo de Seguridad
                </span>
                <h3 className="text-4xl md:text-7xl font-semibold mb-10 tracking-tight leading-tight">
                    Soberanía de Datos Absoluta.
                </h3>
                <p className="text-xl md:text-3xl text-gray-400 font-light leading-relaxed">
                    Su información corporativa no está flotando en una "nube" compartida. <br className="hidden md:block"/>
                    Está asegurada dentro de una caja fuerte física de un solo inquilino.
                </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 border-t border-gray-800 pt-16">
             
             {/* Feature 1: Single Tenant */}
             <ScrollReveal delay={100}>
                <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold mb-3 text-white">Hardware Single-Tenant</h4>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            Usted no alquila un espacio virtual en un servidor compartido con miles de otras empresas (como en AWS o Azure). Usted alquila una máquina física completa. Si un hacker ataca "la nube", su nodo está en otra dirección, aislado físicamente.
                        </p>
                    </div>
                </div>
             </ScrollReveal>

             {/* Feature 2: Zero Knowledge */}
             <ScrollReveal delay={200}>
                <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                         <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold mb-3 text-white">Arquitectura Zero-Knowledge</h4>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            Nosotros proveemos el "cuerpo" (hardware), pero solo usted tiene la "mente" (credenciales). Las claves de cifrado se generan en su dispositivo y nunca salen de su red. Blyndforce no puede ver sus datos ni aunque una orden judicial lo requiriera.
                        </p>
                    </div>
                </div>
             </ScrollReveal>

             {/* Feature 3: Kill Switch */}
             <ScrollReveal delay={300}>
                <div className="flex gap-6">
                     <div className="w-12 h-12 rounded-full bg-red-900/30 flex items-center justify-center shrink-0">
                         <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold mb-3 text-white">Kill-Switch de Emergencia</h4>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            Control total. En caso de una brecha de seguridad en su empresa, puede activar el "Kill-Switch" desde su panel de control. Esto corta físicamente la conexión de red de su nodo en nuestro data center instantáneamente.
                        </p>
                    </div>
                </div>
             </ScrollReveal>

             {/* Feature 4: Encryption */}
             <ScrollReveal delay={400}>
                <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold mb-3 text-white">Datos en Reposo Cifrados</h4>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            Todo el disco duro de su nodo está cifrado con estándares militares (AES-256). Si alguien robara físicamente la máquina del data center, el contenido sería matemáticamente imposible de recuperar sin su clave personal.
                        </p>
                    </div>
                </div>
             </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="max-w-7xl mx-auto px-6 mb-20 md:mb-32">
        <ScrollReveal>
            <div className="text-center mb-20">
                <h3 className="text-3xl md:text-4xl font-semibold text-apple-black tracking-tight mb-4">El Camino a la Soberanía</h3>
                <p className="text-lg text-[#86868b] font-light">Implementación sin interrupciones operativas.</p>
            </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
             {/* Horizontal Line for Desktop */}
             <div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-gray-100 z-0"></div>

            {[
                { step: "01", title: "Diagnóstico", desc: "Mapeamos sus cuellos de botella y definimos el alcance del Agente." },
                { step: "02", title: "Configuración Física", desc: "Preparamos su Nodo, instalamos accesos y ciframos el entorno." },
                { step: "03", title: "Delegación", desc: "Recibe sus credenciales. Usted ordena, el nodo ejecuta. Inmediato." }
            ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 150} className="relative z-10 bg-white pr-6">
                    <div className="text-5xl md:text-6xl font-semibold text-gray-200 mb-6 font-mono tracking-tighter">
                        {item.step}
                    </div>
                    <h4 className="text-xl font-bold text-apple-black mb-3">{item.title}</h4>
                    <p className="text-[#86868b] leading-relaxed font-light">{item.desc}</p>
                </ScrollReveal>
            ))}
        </div>
      </section>
    </div>
  );
};