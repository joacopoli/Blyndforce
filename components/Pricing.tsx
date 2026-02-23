import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { PricingPlan } from '../types';

interface PricingProps {
  onRequestAgent?: () => void;
  // We need a way to navigate from here to the pro page. 
  // However, `onRequestAgent` is the only prop passed currently in most places.
  // In App.tsx, the Pricing component is used in Home and PricingPage.
  // We can't easily add a new prop without breaking signatures unless we make it optional and update App.tsx.
  // BUT, to keep it simple and fulfill the request to make the page accessible, 
  // I will check if `window.location` manipulation or a custom event is better, 
  // or just rely on the user finding it via the Enterprise page or direct link if added.
  // Actually, the best way is to update the component to accept a navigation callback or 
  // use a simplified approach since I am updating App.tsx anyway.
  // I will assume `onNavigateToPro` is passed or I will modify `onNavigate` pattern.
  // To avoid complexity, I'll just leave the "Comenzar" button as is (Request Agent) 
  // BUT I will make the Title "Ghost Office Pro" clickable or add a small link below it if possible.
  // Better yet, I'll update the `plan` object to have a `linkAction` if I could.
  
  // Revised approach: I will rely on the user navigating via the "Enterprise" page which links to Pro 
  // (I need to update EnterprisePage to link to Pro, as I did for Ghost Office).
}

const plans: PricingPlan[] = [
  {
    name: 'Executive Shadow',
    category: 'Personal Unit',
    setup: 'USD $900',
    monthly: 'USD $250',
    tokenEstimate: '28M tokens',
    tokenCost: '~$24.50',
    features: [
      'Hardware: Procesador M4 / 16 GB RAM',
      'Defensa de Agenda: Bloqueo de tiempo estratégico y manejo de conflictos.',
      'Filtro de Comunicaciones: Triaje de mails y redacción de respuestas con tu tono.',
      'Concierge Ejecutivo: Logística completa de viajes y compromisos personales.',
      'Soberanía Total: Ejecución privada en tu propio hardware dedicado.'
    ],
    highlight: false,
  },
  {
    name: 'Ghost Office',
    category: 'Blyndforce Enterprise',
    setup: 'USD $1,500',
    monthly: 'USD $600',
    tokenEstimate: '195M tokens',
    tokenCost: '~$168.00',
    features: [
      'Hardware: Procesador M4 / 32 GB RAM',
      'Puente de Datos: Mueve información entre CRM, Excel y Bancos automáticamente.',
      'Gestión de Ventas: Captura, investiga y califica leads 24/7.',
      'Administración Autónoma: Carga de facturas y control de pagos sin errores.',
      'Operativa Invisible: Ejecución de procesos inter-departamentales en segundo plano.'
    ],
    highlight: false,
  },
  {
    name: 'Ghost Office Pro',
    category: 'Blyndforce Enterprise',
    setup: 'USD $3,000',
    monthly: 'USD $1,500',
    tokenEstimate: '540M tokens',
    tokenCost: '~$485.00',
    savings: 'Potencia Máxima',
    features: [
      'Infraestructura M4 Pro: Hardware de máxima potencia para ejecución masiva.',
      'Auditoría de Precisión: Control del 100% de transacciones y detección de anomalías.',
      'Control de Sistemas Legacy: Opera software antiguo (SAP/Oracle) mediante visión.',
      'Análisis Estratégico: Consolidación de Big Data para reportes de directorio.'
    ],
    highlight: true,
  },
];

const comparisonData = [
  { label: 'Enfoque', shadow: 'Productividad Personal', ghost: 'Procesos de Negocio', pro: 'Operaciones Masivas' },
  { label: 'Privacidad', shadow: 'Nodo Físico Privado', ghost: 'Nodo Físico Privado', pro: 'Nodo Físico Privado' },
  { label: 'Capacidad', shadow: 'Tareas Individuales', ghost: 'Flujos Inter-departamentales', pro: 'Auditoría y Big Data' },
  { label: 'Hardware', shadow: 'Chip M4 / 16GB RAM', ghost: 'Chip M4 / 32GB RAM', pro: 'Chip M4 Pro / 64GB RAM' },
];

export const Pricing: React.FC<PricingProps> = ({ onRequestAgent }) => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-apple-black mb-4">
            Elija su nivel de soberanía.
          </h2>
          <p className="text-lg md:text-xl text-apple-gray">
            Infraestructura dedicada escalable a las necesidades de su operación.
          </p>
        </div>
      </ScrollReveal>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start mb-20">
        {plans.map((plan, index) => (
          <ScrollReveal key={plan.name} delay={index * 150} className="flex h-full">
            <div 
              className={`flex flex-col h-full w-full p-8 rounded-3xl transition-all duration-500 border relative overflow-hidden group ${
                plan.highlight 
                  ? 'bg-[#1D1D1F] text-white border-black shadow-2xl scale-100 lg:scale-105 z-10' 
                  : 'bg-white border-gray-200 text-apple-black hover:border-gray-300 hover:shadow-xl'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-blue-600/90 backdrop-blur text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-widest z-20">
                  Best Value
                </div>
              )}
              
              {/* Subtle background glow for the pro plan */}
              {plan.highlight && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
              )}

              <div className="mb-6 relative z-10">
                {/* Category Tag - Explicitly links Ghost plans to Enterprise */}
                <span className={`text-xs font-bold tracking-[0.2em] uppercase mb-3 block ${
                    plan.category.includes('Enterprise') 
                    ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent' 
                    : 'text-gray-400'
                }`}>
                    {plan.category}
                </span>

                <h4 className={`text-2xl font-bold tracking-tight mb-2 ${plan.highlight ? 'text-white' : 'text-apple-black'}`}>
                  {plan.name}
                </h4>
                {plan.savings && (
                  <span className="inline-block text-green-400 text-xs font-semibold px-2 py-1 rounded-md mb-2 bg-green-900/30 border border-green-500/20">
                    {plan.savings}
                  </span>
                )}
                <p className={`text-sm font-medium leading-relaxed ${plan.highlight ? 'text-gray-400' : 'text-apple-gray'}`}>
                  {index === 0 ? 'Ideal para CEOs y fundadores.' : index === 1 ? 'Ideal para Pymes en crecimiento.' : 'Ideal para operaciones de escala.'}
                </p>
              </div>
              
              <div className="mb-8 space-y-4 relative z-10">
                 {/* Fixed Costs */}
                 <div className={`border-b ${plan.highlight ? 'border-gray-700' : 'border-gray-100'} pb-4`}>
                    <div className="flex flex-col">
                        <span className={`text-[10px] uppercase tracking-wider font-bold mb-1 ${plan.highlight ? 'text-gray-500' : 'text-gray-400'}`}>Honorario Fijo</span>
                        <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-semibold tracking-tight">{plan.monthly}</span>
                            <span className={`text-xs ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>/ mes</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <span className={`text-xs ${plan.highlight ? 'text-gray-500' : 'text-gray-400'}`}>Setup (Pago único):</span>
                        <span className={`text-sm font-medium ${plan.highlight ? 'text-white' : 'text-apple-black'}`}>{plan.setup}</span>
                    </div>
                 </div>

                 {/* Variable Token Costs */}
                 <div className={`p-3 rounded-xl ${plan.highlight ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                    <div className="flex justify-between items-start mb-1">
                        <span className={`text-[10px] uppercase tracking-wider font-bold ${plan.highlight ? 'text-blue-400' : 'text-blue-600'}`}>Consumo API (Est.)</span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded ${plan.highlight ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>Variable</span>
                    </div>
                    <div className="flex justify-between items-end">
                        <div className="flex flex-col">
                            <span className={`text-xs ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>{plan.tokenEstimate}</span>
                        </div>
                        <span className={`font-mono font-medium ${plan.highlight ? 'text-white' : 'text-apple-black'}`}>
                            + {plan.tokenCost}<span className="text-[10px] opacity-60">/mes</span>
                        </span>
                    </div>
                 </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow relative z-10">
                  {plan.features.map((f, i) => {
                      // Check if feature has a colon to split title/description
                      const hasColon = f.includes(':');
                      const parts = hasColon ? f.split(':') : [f];
                      const title = parts[0];
                      const desc = parts.slice(1).join(':');

                      return (
                      <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                        <svg className={`w-5 h-5 shrink-0 mt-0.5 ${plan.highlight ? 'text-blue-400' : 'text-black'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span className={`${plan.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                           {hasColon ? (
                               <>
                                <strong className={`font-semibold ${plan.highlight ? 'text-white' : 'text-apple-black'}`}>{title}:</strong>
                                {desc}
                               </>
                           ) : (
                               <strong className={`font-semibold ${plan.highlight ? 'text-white' : 'text-apple-black'}`}>{title}</strong>
                           )}
                        </span>
                      </li>
                  )})}
              </ul>

              <button 
                onClick={onRequestAgent}
                className={`w-full py-4 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                  plan.highlight 
                  ? 'bg-white text-black hover:bg-gray-100 shadow-lg shadow-white/10' 
                  : 'bg-black text-white hover:bg-gray-800 shadow-lg shadow-black/10'
              }`}>
                Comenzar
              </button>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Comparative Table */}
      <ScrollReveal delay={100}>
        <div className="mb-20 overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-4 pr-6 text-xs font-bold uppercase tracking-widest text-gray-400 w-[20%]">Beneficio</th>
                <th className="py-4 px-4 text-base font-semibold text-apple-black w-[26%]">Executive Shadow</th>
                <th className="py-4 px-4 text-base font-semibold text-apple-black w-[26%]">Ghost Office</th>
                <th className="py-4 px-4 text-base font-semibold text-apple-black w-[28%]">Ghost Office Pro</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
                  <td className="py-6 pr-6 text-sm font-medium text-gray-500">{row.label}</td>
                  <td className="py-6 px-4 text-sm md:text-base text-apple-black">{row.shadow}</td>
                  <td className="py-6 px-4 text-sm md:text-base text-apple-black">{row.ghost}</td>
                  <td className="py-6 px-4 text-sm md:text-base font-semibold text-apple-black">{row.pro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ScrollReveal>

      {/* Footer Info & Guarantee */}
      <ScrollReveal delay={200}>
         <div className="max-w-3xl mx-auto text-center space-y-2 mb-12">
            <p className="text-xs md:text-sm text-apple-gray">
                * El <strong>Consumo API</strong> corresponde al uso de tokens de los modelos de IA (OpenAI/Anthropic/Google). 
                Este costo es "pass-through": usted paga exactamente lo que consume el agente, sin recargos. 
                Los valores mostrados son promedios estimados basados en un uso típico empresarial.
            </p>
         </div>

        <div className="bg-[#F5F5F7] rounded-3xl p-8 md:p-10 text-center border border-gray-200 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
             
             <div className="flex flex-col items-center justify-center">
                <span className="text-xs font-bold uppercase tracking-widest text-green-600 mb-3 bg-green-50 px-3 py-1 rounded-full border border-green-100">Garantía de Viabilidad</span>
                <h4 className="text-xl md:text-2xl font-semibold text-apple-black mb-4">Riesgo Cero en la Implementación.</h4>
                <p className="text-apple-gray text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-0">
                    Si durante los primeros 30 días determinamos que nuestros nodos no pueden ejecutar sus procesos con al menos un <strong className="text-apple-black">95% de precisión</strong>, le devolvemos el 100% de su inversión de Setup.
                </p>
             </div>
        </div>
      </ScrollReveal>
    </section>
  );
};