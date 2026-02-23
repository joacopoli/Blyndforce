import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const Process: React.FC = () => {
  const steps = [
    {
      id: "01",
      title: "Diseño del Rol",
      description: "No vendemos software enlatado. Tenemos una reunión de 30 minutos para entender qué tareas repetitivas consumen su día. Diseñamos el perfil de su agente basándonos en sus necesidades reales."
    },
    {
      id: "02",
      title: "Configuración de Nodo",
      description: "Nuestros ingenieros configuran su Mac Mini dedicada. Le enseñamos a la IA a usar sus credenciales y sistemas específicos (bancos, ERP, CRM) en un entorno de laboratorio seguro y aislado."
    },
    {
      id: "03",
      title: "Entrega de Llaves",
      description: "Conectamos el nodo. Usted recibe un contacto de WhatsApp o Slack. A partir de ese momento, simplemente escribe lo que necesita. Su agente ejecuta. Sin instalaciones, sin curvas de aprendizaje."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-6 block">
            El Proceso
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-apple-black mb-16 max-w-3xl">
            Complejidad técnica para nosotros.<br />
            Simplicidad ejecutiva para usted.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-gray-200 via-gray-200 to-transparent -z-10"></div>

            {steps.map((step, index) => (
                <ScrollReveal key={step.id} delay={index * 150} className="bg-white pr-4">
                    <div className="text-4xl md:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-400 mb-6 font-mono">
                        {step.id}
                    </div>
                    <h3 className="text-xl font-bold text-apple-black mb-4">
                        {step.title}
                    </h3>
                    <p className="text-apple-gray leading-relaxed font-light text-lg">
                        {step.description}
                    </p>
                </ScrollReveal>
            ))}
        </div>
      </div>
    </section>
  );
};