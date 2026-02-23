import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { Pricing } from '../components/Pricing';

interface PricingPageProps {
  onBack: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20 animate-fade-in-up">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-10 text-center pt-10 md:pt-20">
        <ScrollReveal>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 text-apple-black">
            Inversión en <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#007AFF,#AF52DE,#FF2D55,#FF9500)]">Soberanía.</span>
          </h1>
          <p className="text-xl md:text-2xl font-normal text-apple-gray max-w-3xl mx-auto leading-relaxed">
            Planes diseñados para integrar inteligencia operativa real en su estructura, con hardware dedicado y privacidad absoluta.
          </p>
        </ScrollReveal>
      </section>

      {/* Reusing the Pricing Component which now includes the scalability footer */}
      <Pricing />
      
      {/* FAQ / Clarification */}
      <section className="max-w-4xl mx-auto px-6 pt-10">
          <ScrollReveal delay={200}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm text-apple-gray">
                  <div>
                      <h5 className="text-apple-black font-semibold mb-2">¿Por qué hay un costo de Setup?</h5>
                      <p className="leading-relaxed">
                          A diferencia del software SaaS, Blyndforce requiere la provisión, instalación y configuración física de una Mac Mini dedicada en nuestro data center. Esto garantiza que sus datos nunca compartan procesador con otros clientes.
                      </p>
                  </div>
                   <div>
                      <h5 className="text-apple-black font-semibold mb-2">¿Qué incluye el mantenimiento mensual?</h5>
                      <p className="leading-relaxed">
                          Incluye la electricidad, conectividad de alta velocidad, actualizaciones de seguridad del sistema operativo, y el entrenamiento continuo de los modelos de IA que operan su nodo.
                      </p>
                  </div>
              </div>
          </ScrollReveal>
      </section>

    </div>
  );
};