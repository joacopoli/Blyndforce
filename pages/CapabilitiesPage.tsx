import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

interface CapabilitiesPageProps {
  onBack: () => void;
}

export const CapabilitiesPage: React.FC<CapabilitiesPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20 animate-fade-in-up selection:bg-black selection:text-white">
      
      {/* 1. Hero Section: Declaración de Omnipotencia */}
      <section className="max-w-7xl mx-auto px-6 mb-24 md:mb-32 pt-10 md:pt-20">
        <ScrollReveal>
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-semibold tracking-tighter mb-8 text-apple-black leading-[0.95]">
              Omnipresencia <br/>
              <span className="text-[#0071e3] italic">Operativa.</span>
            </h1>
            <p className="text-xl md:text-3xl font-medium text-apple-black max-w-2xl leading-tight mb-8">
              No es un chatbot. Es una extensión de su voluntad ejecutiva capaz de operar en cualquier software, portal o sistema.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* 2. The Bento Grid: Core Capabilities */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8">
            
            {/* CARD 1: FINANZAS (Large, Dark) */}
            <div className="lg:col-span-8 bg-[#1D1D1F] rounded-[2.5rem] p-10 md:p-14 text-white relative overflow-hidden group min-h-[500px] flex flex-col justify-between">
                <ScrollReveal className="h-full flex flex-col justify-between relative z-10">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Finanzas</span>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight">El CFO Digital.</h3>
                        <p className="text-lg md:text-xl text-gray-400 font-light max-w-md leading-relaxed">
                            Conciliación bancaria en tiempo real. Su agente entra al banco, descarga extractos, lee facturas y cruza datos. Sin errores humanos. Sin demoras.
                        </p>
                    </div>
                    {/* Abstract UI: Transaction Match */}
                    <div className="mt-12 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/5 max-w-sm">
                        <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
                            <span className="text-xs font-mono text-gray-300">BANCO_GALICIA</span>
                            <span className="text-xs font-bold text-green-400">CONCILIADO</span>
                        </div>
                        <div className="space-y-3 font-mono text-xs">
                             <div className="flex justify-between">
                                <span className="text-gray-400">Monto Factura A-0023</span>
                                <span>$ 1,240.50</span>
                             </div>
                             <div className="flex justify-between">
                                <span className="text-gray-400">Movimiento #9982</span>
                                <span>$ 1,240.50</span>
                             </div>
                             <div className="flex justify-between pt-2 text-green-400 font-bold">
                                <span>Diferencia</span>
                                <span>$ 0.00</span>
                             </div>
                        </div>
                    </div>
                </ScrollReveal>
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-900/20 rounded-full blur-[120px] pointer-events-none"></div>
            </div>

            {/* CARD 2: COMUNICACION (Vertical) */}
            <div className="lg:col-span-4 bg-[#F5F5F7] rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden flex flex-col">
                 <ScrollReveal delay={100} className="h-full flex flex-col">
                    <div className="mb-auto">
                        <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 block">Comunicación</span>
                        <h3 className="text-3xl md:text-4xl font-semibold text-apple-black mb-4 tracking-tight">Inbox Zero.</h3>
                        <p className="text-apple-gray leading-relaxed text-lg font-light">
                            Redacta, responde y archiva. Su agente imita su tono de voz para gestionar correos y agenda.
                        </p>
                    </div>
                    {/* Abstract UI: Inbox Badge */}
                    <div className="mt-10 flex justify-center items-center flex-grow">
                         <div className="relative">
                            <div className="w-32 h-32 bg-white rounded-3xl shadow-xl flex items-center justify-center">
                                <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <div className="absolute -top-3 -right-3 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg border-4 border-[#F5F5F7]">
                                0
                            </div>
                         </div>
                    </div>
                 </ScrollReveal>
            </div>

            {/* CARD 3: RESEARCH (Square) */}
            <div className="lg:col-span-4 bg-[#F5F5F7] rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden">
                <ScrollReveal delay={200}>
                    <span className="text-purple-600 font-bold tracking-widest uppercase text-xs mb-4 block">Investigación</span>
                    <h3 className="text-3xl md:text-4xl font-semibold text-apple-black mb-4 tracking-tight">Vigilancia de Mercado.</h3>
                    <p className="text-apple-gray leading-relaxed text-lg font-light mb-8">
                        Monitoreo 24/7 de competidores, precios y tendencias. Reportes ejecutivos cada mañana.
                    </p>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex gap-2 mb-2">
                             <div className="h-2 w-12 bg-gray-200 rounded-full"></div>
                             <div className="h-2 w-24 bg-gray-100 rounded-full"></div>
                        </div>
                        <div className="h-24 flex items-end gap-2">
                            <div className="w-1/4 h-[40%] bg-purple-200 rounded-t-md"></div>
                            <div className="w-1/4 h-[70%] bg-purple-300 rounded-t-md"></div>
                            <div className="w-1/4 h-[50%] bg-purple-400 rounded-t-md"></div>
                            <div className="w-1/4 h-[90%] bg-purple-600 rounded-t-md relative group">
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    +14%
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* CARD 4: OPERATIONS (Large Horizontal) */}
            <div className="lg:col-span-8 bg-white border border-gray-200 rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden shadow-2xl shadow-gray-200/50">
                <ScrollReveal delay={300} className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                     <div className="md:w-1/2">
                        <span className="text-orange-600 font-bold tracking-widest uppercase text-xs mb-4 block">Operaciones</span>
                        <h3 className="text-3xl md:text-5xl font-semibold text-apple-black mb-6 tracking-tight">Interoperabilidad Total.</h3>
                        <p className="text-lg md:text-xl text-apple-gray leading-relaxed font-light">
                            Blyndforce no usa APIs. Usa "ojos". Ve la pantalla como un humano, permitiéndole operar sistemas Legacy (SAP, Oracle, AS/400) y mover datos entre ellos sin integraciones técnicas.
                        </p>
                     </div>
                     <div className="md:w-1/2 w-full bg-gray-900 rounded-2xl p-6 font-mono text-xs text-green-400 shadow-xl overflow-hidden">
                        <div className="flex gap-1.5 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="space-y-2 opacity-90">
                            <p>> Connecting to SAP R/3...</p>
                            <p className="text-white">> Login Successful.</p>
                            <p>> Reading Table T001...</p>
                            <p>> Copying 450 records to Clipboard.</p>
                            <p>> Opening Excel...</p>
                            <p>> Paste Data.</p>
                            <p className="text-blue-400">> Process Complete (1.2s).</p>
                            <span className="animate-pulse">_</span>
                        </div>
                     </div>
                </ScrollReveal>
            </div>
        </div>
      </section>

      {/* 3. NEW SECTION: Detailed Verticals (The "Departments") */}
      <section className="max-w-7xl mx-auto px-6 mb-32 md:mb-48">
         <ScrollReveal>
             <div className="mb-20">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-apple-gray mb-4 block">Delegación Profunda</span>
                <h2 className="text-4xl md:text-6xl font-semibold text-apple-black tracking-tight mb-8">
                    Sus nuevos departamentos invisibles.
                </h2>
                <p className="text-xl text-apple-gray font-light max-w-3xl leading-relaxed">
                    No contrate más "manos". Contrate capacidad de ejecución pura. Blyndforce asume roles completos, no solo tareas aisladas.
                </p>
             </div>
         </ScrollReveal>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-100 pt-16">
            {/* Column 1: Commercial */}
            <ScrollReveal delay={100}>
                <h3 className="text-2xl font-bold text-apple-black mb-8 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    Comercial & Ventas
                </h3>
                <ul className="space-y-6">
                    <li className="group">
                        <div className="text-sm font-semibold text-apple-black group-hover:text-blue-600 transition-colors mb-1">Enriquecimiento de Leads</div>
                        <p className="text-sm text-apple-gray leading-relaxed">Investigación automática de prospectos en LinkedIn y webs corporativas antes de la primera llamada.</p>
                    </li>
                    <li className="group">
                        <div className="text-sm font-semibold text-apple-black group-hover:text-blue-600 transition-colors mb-1">Activación de CRM</div>
                        <p className="text-sm text-apple-gray leading-relaxed">Carga automática de contactos y actualización de estados de pipeline basados en correos recibidos.</p>
                    </li>
                    <li className="group">
                        <div className="text-sm font-semibold text-apple-black group-hover:text-blue-600 transition-colors mb-1">Generación de Cotizaciones</div>
                        <p className="text-sm text-apple-gray leading-relaxed">Creación de PDFs formales desde una nota de voz rápida ("Cotizar 50 unidades a Cliente X con 10% descuento").</p>
                    </li>
                </ul>
            </ScrollReveal>

            {/* Column 2: Talent */}
            <ScrollReveal delay={200}>
                <h3 className="text-2xl font-bold text-apple-black mb-8 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    Talento & RRHH
                </h3>
                <ul className="space-y-6">
                    <li className="group">
                        <div className="text-sm font-semibold text-apple-black group-hover:text-purple-600 transition-colors mb-1">Onboarding Zero-Touch</div>
                        <p className="text-sm text-apple-gray leading-relaxed">Creación instantánea de emails corporativos, accesos a Slack y VPN al firmar contrato.</p>
                    </li>
                    <li className="group">
                        <div className="text-sm font-semibold text-apple-black group-hover:text-purple-600 transition-colors mb-1">Screening de CVs</div>
                        <p className="text-sm text-apple-gray leading-relaxed">Lectura de cientos de PDFs y filtrado basado en criterios duros, entregando solo el Top 5%.</p>
                    </li>
                    <li className="group">
                        <div className="text-sm font-semibold text-apple-black group-hover:text-purple-600 transition-colors mb-1">Gestión de Novedades</div>
                        <p className="text-sm text-apple-gray leading-relaxed">Procesamiento de certificados médicos y licencias directamente en el sistema de nómina.</p>
                    </li>
                </ul>
            </ScrollReveal>

            {/* Column 3: Back-Office */}
            <ScrollReveal delay={300}>
                <h3 className="text-2xl font-bold text-apple-black mb-8 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                    Back-Office & Admin
                </h3>
                <ul className="space-y-6">
                    <li className="group">
                        <div className="text-sm font-semibold text-apple-black group-hover:text-orange-600 transition-colors mb-1">Cuentas a Pagar</div>
                        <p className="text-sm text-apple-gray leading-relaxed">Lectura de facturas de proveedores, carga en banco y preparación de lote de pagos para un solo clic de aprobación.</p>
                    </li>
                    <li className="group">
                        <div className="text-sm font-semibold text-apple-black group-hover:text-orange-600 transition-colors mb-1">Renovaciones Automáticas</div>
                        <p className="text-sm text-apple-gray leading-relaxed">Detección de vencimientos de seguros, dominios y licencias con 30 días de antelación.</p>
                    </li>
                    <li className="group">
                        <div className="text-sm font-semibold text-apple-black group-hover:text-orange-600 transition-colors mb-1">Archivo Documental</div>
                        <p className="text-sm text-apple-gray leading-relaxed">Organización y renombrado automático de archivos en Drive/Dropbox según convención de la empresa.</p>
                    </li>
                </ul>
            </ScrollReveal>
         </div>
      </section>

      {/* 4. NEW SECTION: Chain of Thought Visualization */}
      <section className="bg-[#F5F5F7] py-24 md:py-32 px-6 mb-32">
        <div className="max-w-7xl mx-auto">
             <ScrollReveal>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-semibold text-apple-black mb-6 tracking-tight">De la orden vaga a la ejecución precisa.</h2>
                    <p className="text-apple-gray text-lg max-w-2xl mx-auto">
                        Usted no necesita dar instrucciones técnicas paso a paso. Blyndforce entiende la intención y orquesta los pasos necesarios.
                    </p>
                </div>
             </ScrollReveal>

             <div className="relative max-w-4xl mx-auto">
                 {/* Vertical Line */}
                 <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -z-10 md:-translate-x-1/2"></div>

                 <div className="space-y-12">
                     {/* Step 1: Input */}
                     <ScrollReveal className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                         <div className="w-full md:w-1/2 md:text-right order-2 md:order-1">
                             <h4 className="text-xl font-bold text-apple-black mb-2">1. La Orden (WhatsApp)</h4>
                             <p className="text-apple-gray text-sm">"Prepara la reunión de directorio de mañana. Los números de ventas están en Salesforce y el estado de caja en el Banco."</p>
                         </div>
                         <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xl shadow-lg ring-8 ring-[#F5F5F7] z-10 shrink-0 order-1 md:order-2">
                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                         </div>
                         <div className="w-full md:w-1/2 hidden md:block order-3"></div>
                     </ScrollReveal>

                     {/* Step 2: Reasoning */}
                     <ScrollReveal delay={100} className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                         <div className="w-full md:w-1/2 hidden md:block order-1"></div>
                         <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-200 text-gray-400 flex items-center justify-center font-bold text-xl ring-8 ring-[#F5F5F7] z-10 shrink-0 order-1 md:order-2">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                         </div>
                         <div className="w-full md:w-1/2 order-2 md:order-3">
                             <h4 className="text-xl font-bold text-apple-black mb-2">2. Orquestación</h4>
                             <p className="text-apple-gray text-sm">El agente desglosa la tarea: Acceder a Salesforce > Filtrar mes actual > Exportar CSV > Acceder a Banco > Descargar extracto > Consolidar en Excel > Generar Slide.</p>
                         </div>
                     </ScrollReveal>

                     {/* Step 3: Execution */}
                     <ScrollReveal delay={200} className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                         <div className="w-full md:w-1/2 md:text-right order-2 md:order-1">
                             <h4 className="text-xl font-bold text-apple-black mb-2">3. Ejecución Multi-Sistema</h4>
                             <p className="text-apple-gray text-sm">Navega visualmente por las interfaces. Sin APIs. Clics reales, descargas reales. Opera Excel para crear gráficos comparativos.</p>
                         </div>
                         <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-lg ring-8 ring-[#F5F5F7] z-10 shrink-0 order-1 md:order-2">
                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                         </div>
                         <div className="w-full md:w-1/2 hidden md:block order-3"></div>
                     </ScrollReveal>

                     {/* Step 4: Output */}
                     <ScrollReveal delay={300} className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                         <div className="w-full md:w-1/2 hidden md:block order-1"></div>
                         <div className="w-16 h-16 rounded-full bg-apple-black text-white flex items-center justify-center font-bold text-xl shadow-lg ring-8 ring-[#F5F5F7] z-10 shrink-0 order-1 md:order-2">
                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                         </div>
                         <div className="w-full md:w-1/2 order-2 md:order-3">
                             <h4 className="text-xl font-bold text-apple-black mb-2">4. Resultado (Email)</h4>
                             <p className="text-apple-gray text-sm">Usted recibe un correo a las 08:00 AM con el PDF "Board_Presentation_Sep.pdf" listo para proyectar.</p>
                         </div>
                     </ScrollReveal>
                 </div>
             </div>
        </div>
      </section>

      {/* 5. NEW SECTION: The Night Shift */}
      <section className="bg-apple-black py-24 md:py-32 px-6 overflow-hidden relative">
          {/* Abstract Glow */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-blue-900/20 to-transparent rounded-full blur-[120px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto relative z-10 text-white">
              <ScrollReveal>
                  <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                      <div className="md:w-1/2">
                          <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-6 block">Productividad Asíncrona</span>
                          <h2 className="text-4xl md:text-7xl font-semibold mb-8 tracking-tighter leading-tight">
                              El Turno Noche <br/>es nuestro.
                          </h2>
                          <p className="text-xl text-gray-400 font-light leading-relaxed max-w-xl">
                              La verdadera productividad no es hacer más cosas rápido. Es que las cosas estén hechas cuando usted despierta.
                          </p>
                          <div className="mt-12 flex gap-8">
                              <div>
                                  <div className="text-3xl font-bold text-white mb-1">08:00 AM</div>
                                  <div className="text-sm text-gray-500 uppercase tracking-wider">Reportes en Inbox</div>
                              </div>
                               <div>
                                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                                  <div className="text-sm text-gray-500 uppercase tracking-wider">Monitoreo Activo</div>
                              </div>
                          </div>
                      </div>
                      <div className="md:w-1/2">
                          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 relative">
                               <h3 className="text-2xl font-semibold mb-6">Mientras usted descansa:</h3>
                               <ul className="space-y-4 text-gray-300 font-light">
                                   <li className="flex items-center gap-3">
                                       <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                       Backup de seguridad de todos los sistemas.
                                   </li>
                                   <li className="flex items-center gap-3">
                                       <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                       Conciliación de caja del día anterior.
                                   </li>
                                   <li className="flex items-center gap-3">
                                       <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                       Preparación de agenda y prioridades del día.
                                   </li>
                                   <li className="flex items-center gap-3">
                                       <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                       Respuesta automática a consultas internacionales.
                                   </li>
                               </ul>
                          </div>
                      </div>
                  </div>
              </ScrollReveal>
          </div>
      </section>

      {/* 6. Input Methods: Modes of Interaction (Existing Section) */}
      <section className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
             <ScrollReveal>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-semibold text-apple-black mb-4 tracking-tight">Tres formas de ordenar.</h2>
                    <p className="text-apple-gray text-lg">Su agente está siempre escuchando, leyendo y esperando.</p>
                </div>
             </ScrollReveal>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Voice */}
                <ScrollReveal delay={100}>
                    <div className="bg-[#F5F5F7] p-8 rounded-3xl h-full flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 text-black shadow-sm">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                        </div>
                        <h4 className="text-xl font-semibold mb-3">Voz (WhatsApp)</h4>
                        <p className="text-apple-gray text-sm leading-relaxed">
                            "Envíale la factura de ayer a Contaduría y avísales que el pago entra mañana."
                        </p>
                    </div>
                </ScrollReveal>

                {/* Text */}
                <ScrollReveal delay={200}>
                    <div className="bg-[#F5F5F7] p-8 rounded-3xl h-full flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 text-black shadow-sm">
                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                        </div>
                        <h4 className="text-xl font-semibold mb-3">Texto / Email</h4>
                        <p className="text-apple-gray text-sm leading-relaxed">
                            Reenvíe un correo complejo a su agente con la nota: "Resumir y preparar borrador de respuesta."
                        </p>
                    </div>
                </ScrollReveal>

                 {/* Auto */}
                 <ScrollReveal delay={300}>
                    <div className="bg-[#F5F5F7] p-8 rounded-3xl h-full flex flex-col items-center text-center relative overflow-hidden border-2 border-blue-500/10">
                        <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">PRO</div>
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-600 shadow-sm">
                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <h4 className="text-xl font-semibold mb-3">Trigger Automático</h4>
                        <p className="text-apple-gray text-sm leading-relaxed">
                            "Si el saldo del banco baja de $X, mover fondos de la cuenta de inversión automáticamente."
                        </p>
                    </div>
                </ScrollReveal>
             </div>
        </div>
      </section>

      {/* 7. Software Ecosystem */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <ScrollReveal>
             <h3 className="text-2xl md:text-3xl font-semibold text-center text-apple-black mb-16">
                 Hablamos el idioma de sus herramientas.
             </h3>
             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                 {['SAP', 'Salesforce', 'Oracle', 'Microsoft 365', 'Google Workspace', 'Slack', 'QuickBooks', 'HubSpot', 'Zendesk', 'Tableau', 'AWS', 'AFIP / Gov'].map((tool, i) => (
                     <div key={i} className="flex items-center justify-center h-16 border border-gray-100 rounded-xl hover:border-gray-300 transition-colors bg-gray-50">
                         <span className="font-semibold text-gray-800">{tool}</span>
                     </div>
                 ))}
             </div>
        </ScrollReveal>
      </section>

      {/* Footer Call to Action */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto bg-apple-black rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
             {/* Abstract Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/30 rounded-full blur-[100px] pointer-events-none"></div>
             
             <div className="relative z-10">
                <h2 className="text-3xl md:text-6xl font-semibold mb-8 tracking-tight">¿Listo para escalar su capacidad?</h2>
                <button 
                    onClick={onBack} 
                    className="bg-white text-black px-10 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors transform hover:scale-105 active:scale-95"
                >
                    Volver al Inicio
                </button>
             </div>
        </div>
      </section>

    </div>
  );
};