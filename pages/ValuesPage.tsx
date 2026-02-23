import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

interface ValuesPageProps {
  onBack: () => void;
}

export const ValuesPage: React.FC<ValuesPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20 animate-fade-in-up selection:bg-black selection:text-white font-sans">
      
      {/* 1. Hero: La Declaración */}
      <section className="max-w-7xl mx-auto px-6 mb-32 md:mb-48 pt-10 md:pt-20 text-center">
        <ScrollReveal>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-apple-gray mb-6 block">
                Nuestra Constitución
            </span>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-semibold tracking-tighter mb-10 text-apple-black leading-[0.95]">
              Principios <br/>
              <span className="text-[#1D1D1F] opacity-30">Inquebrantables.</span>
            </h1>
            <div className="max-w-3xl mx-auto">
                <p className="text-xl md:text-3xl font-light text-apple-black leading-relaxed">
                    En una industria saturada de ruido artificial y promesas vacías, Blyndforce opera bajo un código de honor estricto. <br/>
                    <span className="font-medium">No vendemos software. Construimos confianza.</span>
                </p>
            </div>
        </ScrollReveal>
      </section>

      {/* 2. The Four Pillars - Editorial Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-32 md:mb-48">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            
            {/* Pillar 1 */}
            <ScrollReveal className="border-t border-black pt-8">
                <div className="text-6xl font-mono text-gray-200 mb-6 font-bold tracking-tighter">01</div>
                <h3 className="text-3xl md:text-4xl font-bold text-apple-black mb-6 tracking-tight">
                    Soberanía Radical.
                </h3>
                <p className="text-lg md:text-xl text-apple-gray leading-relaxed font-light">
                    Creemos que la inteligencia debe ser propiedad del usuario, no alquilada. Rechazamos el modelo donde sus datos entrenan a la IA de otros. Al entregarle un nodo físico (Hardware Dedicado), le devolvemos el control absoluto. Sus datos son suyos por las leyes de la física, no solo por las leyes legales.
                </p>
            </ScrollReveal>

            {/* Pillar 2 */}
            <ScrollReveal delay={100} className="border-t border-gray-200 pt-8">
                 <div className="text-6xl font-mono text-gray-200 mb-6 font-bold tracking-tighter">02</div>
                <h3 className="text-3xl md:text-4xl font-bold text-apple-black mb-6 tracking-tight">
                    El Código de Silencio.
                </h3>
                <p className="text-lg md:text-xl text-apple-gray leading-relaxed font-light">
                    Operamos como un socio silencioso. Nuestros sistemas están diseñados con arquitectura "Zero-Knowledge". Ni nuestros ingenieros ni nuestros fundadores pueden acceder a la información que procesa su agente. La privacidad no es una configuración; es la base de nuestra infraestructura.
                </p>
            </ScrollReveal>

            {/* Pillar 3 */}
            <ScrollReveal delay={200} className="border-t border-gray-200 pt-8">
                 <div className="text-6xl font-mono text-gray-200 mb-6 font-bold tracking-tighter">03</div>
                <h3 className="text-3xl md:text-4xl font-bold text-apple-black mb-6 tracking-tight">
                    Artesanía Digital.
                </h3>
                <p className="text-lg md:text-xl text-apple-gray leading-relaxed font-light">
                    Rechazamos el "Spaghetti Code" y las soluciones rápidas. Cada automatización, cada integración y cada línea de código es tratada como una pieza de relojería. Preferimos hacer menos cosas, pero con una precisión quirúrgica y una estabilidad a prueba de fallos.
                </p>
            </ScrollReveal>

            {/* Pillar 4 */}
            <ScrollReveal delay={300} className="border-t border-gray-200 pt-8">
                 <div className="text-6xl font-mono text-gray-200 mb-6 font-bold tracking-tighter">04</div>
                <h3 className="text-3xl md:text-4xl font-bold text-apple-black mb-6 tracking-tight">
                    Alineación de Intereses.
                </h3>
                <p className="text-lg md:text-xl text-apple-gray leading-relaxed font-light">
                    No cobramos por horas de intento, cobramos por capacidad instalada. Nuestro modelo de negocio depende de que su agente funcione perpetuamente. Si su nodo falla, nosotros fallamos. Estamos incentivados a construir sistemas que no se rompan.
                </p>
            </ScrollReveal>

        </div>
      </section>

      {/* CEO Quote Section */}
      <section className="max-w-5xl mx-auto px-6 mb-32 md:mb-48">
        <ScrollReveal>
             <div className="flex flex-col items-center">
                <h3 className="text-2xl md:text-4xl font-medium text-apple-black mb-10 leading-snug tracking-tight text-center max-w-4xl mx-auto">
                    "Creemos que la tecnología, en su máxima expresión, sirve para liberar el potencial humano, empoderar a los equipos a escala global y darnos la libertad de construir un futuro que antes era impensable."
                </h3>
                <div className="w-full flex justify-end max-w-4xl mx-auto px-4">
                     <div className="text-right">
                         <span className="text-lg font-semibold text-apple-black block">
                            - Felipe Fontana
                         </span>
                         <span className="text-sm text-apple-gray block mt-1">
                            CEO de BlyndForce
                         </span>
                     </div>
                </div>
            </div>
        </ScrollReveal>
      </section>

      {/* 3. The Anti-Manifesto (Dark Section) */}
      <section className="bg-[#1D1D1F] text-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
            <ScrollReveal>
                <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
                    <div className="md:w-1/3">
                        <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6 leading-tight">
                            Lo que <br/><span className="text-gray-500">NO</span> somos.
                        </h2>
                        <p className="text-gray-400 text-lg font-light">
                            Definirnos por la negativa es vital para entender nuestra propuesta de valor.
                        </p>
                    </div>
                    <div className="md:w-2/3 grid grid-cols-1 gap-12">
                        <div className="border-l border-gray-700 pl-8">
                            <h4 className="text-xl font-bold mb-2 text-white">No somos una Consultora de Software</h4>
                            <p className="text-gray-400 leading-relaxed">No vendemos horas-hombre ni proyectos interminables. Vendemos un producto terminado: un trabajador digital listo para operar.</p>
                        </div>
                        <div className="border-l border-gray-700 pl-8">
                            <h4 className="text-xl font-bold mb-2 text-white">No somos un Wrapper de ChatGPT</h4>
                            <p className="text-gray-400 leading-relaxed">No somos una interfaz bonita sobre una API pública. Somos infraestructura de hardware, visión computacional y orquestación de procesos complejos.</p>
                        </div>
                        <div className="border-l border-gray-700 pl-8">
                            <h4 className="text-xl font-bold mb-2 text-white">No somos para todos</h4>
                            <p className="text-gray-400 leading-relaxed">Blyndforce es para empresas establecidas que valoran su tiempo y su seguridad. No somos la solución más barata; somos la más robusta.</p>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
      </section>

      {/* 4. The Founder's Signature Block */}
      <section className="max-w-4xl mx-auto px-6 py-32 md:py-48 text-center">
        <ScrollReveal>
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-6 h-6 text-apple-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.131A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path></svg>
            </div>
            <h3 className="text-2xl md:text-4xl font-medium text-apple-black mb-8 leading-tight">
                "Diseñamos Blyndforce para el tipo de empresario que dormiría tranquilo sabiendo que su operación no depende de la fragilidad humana, ni de la curiosidad de las grandes tecnológicas."
            </h3>
            <div className="flex flex-col items-center gap-2">
                <span className="font-bold text-apple-black tracking-wider uppercase text-sm">El Equipo de Blyndtek</span>
                <span className="text-apple-gray text-sm">San Francisco & Buenos Aires</span>
            </div>
        </ScrollReveal>
      </section>

      {/* Footer CTA */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto bg-[#F5F5F7] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-semibold text-apple-black mb-8 tracking-tight">Compartimos los mismos valores.</h2>
                <button 
                    onClick={onBack} 
                    className="bg-apple-black text-white px-10 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors transform hover:scale-105 active:scale-95"
                >
                    Volver al Inicio
                </button>
             </div>
        </div>
      </section>

    </div>
  );
};