import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const Comparison: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 block">
              La Ecuación de Valor
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-apple-black tracking-tight">
              ¿Por qué Blyndforce?
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="overflow-x-auto">
            <div className="min-w-[800px] grid grid-cols-4 gap-8 items-center text-sm md:text-base">
              
              {/* Labels Column */}
              <div className="col-span-1 space-y-8 py-8 font-semibold text-apple-gray">
                <div className="h-12 flex items-center">Disponibilidad</div>
                <div className="h-12 flex items-center">Privacidad de Datos</div>
                <div className="h-12 flex items-center">Curva de Aprendizaje</div>
                <div className="h-12 flex items-center">Escalabilidad</div>
                <div className="h-12 flex items-center">Costo Operativo</div>
              </div>

              {/* Human Assistant */}
              <div className="col-span-1 bg-gray-50 rounded-3xl p-8 text-center border border-gray-100 opacity-60 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                <h3 className="text-lg font-bold text-gray-500 mb-8 uppercase tracking-widest">Asistente Humano</h3>
                <div className="space-y-8 text-gray-600 font-medium">
                  <div className="h-12 flex items-center justify-center">8hs / 5 días</div>
                  <div className="h-12 flex items-center justify-center text-red-400">Riesgo de Fuga</div>
                  <div className="h-12 flex items-center justify-center">1-3 Meses</div>
                  <div className="h-12 flex items-center justify-center">Lineal (Lento)</div>
                  <div className="h-12 flex items-center justify-center">Alto + Cargas</div>
                </div>
              </div>

              {/* SaaS / Zapier */}
              <div className="col-span-1 bg-gray-50 rounded-3xl p-8 text-center border border-gray-100 opacity-60 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                <h3 className="text-lg font-bold text-gray-500 mb-8 uppercase tracking-widest">SaaS / API</h3>
                <div className="space-y-8 text-gray-600 font-medium">
                  <div className="h-12 flex items-center justify-center">24/7</div>
                  <div className="h-12 flex items-center justify-center text-orange-400">Nube Compartida</div>
                  <div className="h-12 flex items-center justify-center">Alta (Técnica)</div>
                  <div className="h-12 flex items-center justify-center">Compleja</div>
                  <div className="h-12 flex items-center justify-center">Variable</div>
                </div>
              </div>

              {/* Blyndforce */}
              <div className="col-span-1 bg-black text-white rounded-3xl p-8 text-center shadow-2xl transform scale-105 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500"></div>
                <h3 className="text-lg font-bold text-white mb-8 uppercase tracking-widest flex items-center justify-center gap-2">
                   Blyndforce
                </h3>
                <div className="space-y-8 font-medium">
                  <div className="h-12 flex items-center justify-center text-green-400">24/7/365</div>
                  <div className="h-12 flex items-center justify-center font-bold">Hardware Soberano</div>
                  <div className="h-12 flex items-center justify-center text-green-400">Inmediata</div>
                  <div className="h-12 flex items-center justify-center">Instantánea</div>
                  <div className="h-12 flex items-center justify-center text-green-400">Fijo (Predecible)</div>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};