import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "¿Necesito conocimientos técnicos?",
      a: "Absolutamente ninguno. Si sabe enviar un audio por WhatsApp o escribir un correo, sabe usar Blyndforce. Toda la complejidad ocurre dentro del nodo físico."
    },
    {
      q: "¿Es seguro darle mis claves bancarias?",
      a: "Es más seguro que dárselas a un humano. Las claves se almacenan encriptadas localmente en el hardware (Mac Mini) que es legalmente suyo. Nadie, ni siquiera nuestros ingenieros, puede verlas una vez configuradas."
    },
    {
      q: "¿Qué pasa si se corta la luz o internet?",
      a: "Nuestros nodos están alojados en data centers Tier-3 con redundancia eléctrica y conectividad por fibra óptica duplicada. Su empleado digital nunca se queda sin conexión."
    },
    {
      q: "¿Puede usar el software 'viejo' de mi empresa?",
      a: "Sí. A diferencia de las integraciones tradicionales (API), Blyndforce 've' la pantalla. Si un humano puede usar su sistema contable de hace 20 años, Blyndforce también puede."
    },
    {
      q: "¿Cómo superviso lo que hace?",
      a: "Transparencia total. Puede solicitar en cualquier momento un reporte de actividad, o incluso ver en tiempo real la pantalla de su nodo mientras trabaja."
    },
    {
      q: "¿Hay contratos de permanencia?",
      a: "No. Creemos en la utilidad diaria. El servicio es mensual y puede cancelarse en cualquier momento. El costo de Setup inicial cubre la provisión del hardware y no es reembolsable."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#F9FAFB]">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-apple-black mb-12 text-center">
            Dudas Frecuentes
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {faqs.map((item, index) => (
                <ScrollReveal key={index} delay={index * 50}>
                    <div>
                        <h4 className="text-lg font-bold text-apple-black mb-3">
                            {item.q}
                        </h4>
                        <p className="text-apple-gray leading-relaxed font-light">
                            {item.a}
                        </p>
                    </div>
                </ScrollReveal>
            ))}
        </div>
      </div>
    </section>
  );
};