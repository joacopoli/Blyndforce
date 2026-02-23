import React, { useState, useEffect } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Capability } from '../types';

const capabilities: Capability[] = [
  {
    title: 'Finanzas',
    description: 'Conciliación bancaria, pago de proveedores y gestión de flujo de caja.',
    detailTitle: 'Tu caja, en orden. Siempre.',
    detailBody: 'Blyndforce navega por tus cuentas bancarias, descarga facturas y concilia tus ingresos de forma autónoma. Desde pagar servicios hasta gestionar proveedores, tu asistente se encarga de la ejecución. Vos solo aprobás con un toque desde tu celular.'
  },
  {
    title: 'Comunicación',
    description: 'Inbox Zero, redacción de correos con su voz y gestión de agenda.',
    detailTitle: 'El fin del ruido digital.',
    detailBody: 'Tu asistente vive en tu bandeja de entrada. Clasifica lo urgente, resume hilos infinitos y redacta borradores respetando tu tono de voz. Alcanzar el Inbox Zero ya no es una tarea tuya; es un estándar de tu nuevo empleado.'
  },
  {
    title: 'Investigación',
    description: 'Monitoreo de competencia y reportes de mercado autónomos.',
    detailTitle: 'Información que se transforma en ventaja.',
    detailBody: 'Mientras dormís, tu nodo monitorea el mercado. Analiza los movimientos de tu competencia, detecta cambios de precios y te entrega un reporte ejecutivo cada mañana. Inteligencia aplicada para que tus decisiones se basen en datos reales, no en intuiciones.'
  },
  {
    title: 'Operativa',
    description: 'Carga de datos en ERP/CRM y gestión de documentos legales.',
    detailTitle: 'Sistemas que finalmente se hablan.',
    detailBody: 'Olvidate de las integraciones complejas. Tu empleado digital usa tus programas (ERP, CRM, Excel) exactamente como lo hacés vos. Mueve información entre plataformas visualmente, eliminando la carga de datos manual y conectando toda tu infraestructura operativa.'
  },
];

export const Capabilities: React.FC = () => {
  const [selectedCap, setSelectedCap] = useState<Capability | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCap) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCap]);

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 max-w-7xl mx-auto relative">
       <ScrollReveal>
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <h3 className="text-4xl md:text-6xl font-semibold tracking-tighter text-apple-black mb-6">
            Su empresa, en piloto automático.
          </h3>
          <p className="text-lg md:text-2xl text-apple-gray mt-4 max-w-2xl mx-auto md:mx-0 font-light">
            Recupere las horas que pierde en administración. Delegue lo aburrido para enfocarse en lo rentable.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {capabilities.map((cap, index) => (
          <ScrollReveal key={cap.title} delay={index * 100} className="group">
            <button 
              onClick={() => setSelectedCap(cap)}
              className="w-full text-left h-full bg-[#F5F5F7] hover:bg-[#E8E8ED] rounded-3xl p-8 md:p-10 transition-all duration-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
            >
              <h4 className="text-2xl md:text-3xl font-semibold text-apple-black mb-4 md:mb-6 tracking-tight">{cap.title}</h4>
              <p className="text-lg md:text-xl text-apple-gray leading-relaxed font-medium group-hover:text-gray-900 transition-colors duration-300">
                {cap.description}
              </p>
              <div className="mt-6 md:mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-sm font-bold uppercase tracking-widest text-blue-600 flex items-center gap-2">
                  Ver ejemplo real 
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                </span>
              </div>
            </button>
          </ScrollReveal>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedCap && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-white/60 backdrop-blur-xl transition-opacity duration-300" 
            onClick={() => setSelectedCap(null)}
          ></div>
          
          {/* Card */}
          <div className="bg-white relative w-full max-w-2xl rounded-3xl shadow-2xl p-6 md:p-14 animate-fade-in-up border border-gray-100/50 ring-1 ring-black/5 overflow-y-auto max-h-[85vh]">
             <button 
                onClick={() => setSelectedCap(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-black transition-colors"
             >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
             </button>

             <div className="mb-2 pt-4 md:pt-0">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 md:mb-4 block">
                  {selectedCap.title}
                </span>
                <h3 className="text-3xl md:text-5xl font-semibold text-apple-black tracking-tighter leading-tight mb-6 md:mb-8">
                  {selectedCap.detailTitle}
                </h3>
                <p className="text-lg md:text-2xl text-apple-gray font-light leading-relaxed">
                  {selectedCap.detailBody}
                </p>
             </div>

             <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-100 flex justify-end">
                <button 
                  onClick={() => setSelectedCap(null)}
                  className="text-sm font-medium text-apple-black hover:opacity-70 transition-opacity px-4 py-2"
                >
                  Cerrar
                </button>
             </div>
          </div>
        </div>
      )}
    </section>
  );
};