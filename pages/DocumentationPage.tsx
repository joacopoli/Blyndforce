import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

interface DocumentationPageProps {
  onBack: () => void;
}

export const DocumentationPage: React.FC<DocumentationPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20 animate-fade-in-up selection:bg-black selection:text-white">
      
      <section className="max-w-7xl mx-auto px-6 mb-24 md:mb-32 pt-10 md:pt-20">
        <ScrollReveal>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6 text-apple-black">
            Documentación Técnica.
          </h1>
          <p className="text-xl text-apple-gray font-light max-w-2xl">
              Manuales de integración, protocolos de seguridad y guías de usuario para administradores de Nodos Blyndforce.
          </p>
        </ScrollReveal>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                  { title: "Arquitectura del Nodo", desc: "Especificaciones técnicas del hardware M4 y el entorno de virtualización." },
                  { title: "Protocolos de Seguridad", desc: "Detalle del cifrado AES-256, Secure Enclave y políticas de Zero-Trust." },
                  { title: "Guía de Onboarding", desc: "Paso a paso para la entrega de credenciales y configuración inicial." },
                  { title: "Audit Logs", desc: "Cómo interpretar, exportar y analizar los registros forenses de actividad." },
                  { title: "Integraciones Legacy", desc: "Configuración de visión artificial para SAP R/3 y AS/400." },
                  { title: "API Reference (Beta)", desc: "Documentación para desarrolladores que deseen extender capacidades." }
              ].map((doc, i) => (
                  <div key={i} className="group border border-gray-200 rounded-2xl p-8 hover:border-black transition-colors cursor-pointer">
                      <h3 className="text-xl font-bold text-apple-black mb-3 group-hover:text-blue-600 transition-colors">{doc.title}</h3>
                      <p className="text-apple-gray text-sm leading-relaxed">{doc.desc}</p>
                  </div>
              ))}
          </div>
      </section>

      <div className="text-center pb-20">
        <button onClick={onBack} className="text-apple-black font-medium hover:underline underline-offset-4">
            Volver al inicio
        </button>
      </div>
    </div>
  );
};