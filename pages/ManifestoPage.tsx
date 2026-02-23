import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

interface ManifestoPageProps {
  onBack: () => void;
}

export const ManifestoPage: React.FC<ManifestoPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20 animate-fade-in-up selection:bg-black selection:text-white">
      
      <section className="max-w-3xl mx-auto px-6 pt-20 mb-32">
        <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-apple-black mb-12 tracking-tight leading-tight">
                El fin de la burocracia humana.
            </h1>
        </ScrollReveal>

        <ScrollReveal delay={100}>
            <div className="prose prose-xl prose-gray font-light leading-relaxed space-y-8 text-apple-black">
                <p>
                    Durante décadas, nos han mentido. Nos dijeron que la tecnología nos liberaría, pero en su lugar, nos encadenó a pantallas brillantes, obligándonos a hacer clic en botones, rellenar formularios y gestionar notificaciones interminables.
                </p>
                <p>
                    Hemos convertido a las mentes más brillantes de nuestra generación en administradores de bases de datos glorificados. CEOs que pasan 4 horas al día en su correo. Creativos que pasan días luchando con hojas de cálculo.
                </p>
                <p>
                    <strong className="font-semibold">Blyndforce nace de una tesis simple: Los humanos no deberían hacer el trabajo de las máquinas.</strong>
                </p>
                <p>
                    No estamos construyendo herramientas para que usted trabaje más rápido. Estamos construyendo trabajadores digitales para que usted no trabaje en absoluto en tareas que no requieren alma.
                </p>
                <p>
                    Creemos en la soberanía. Creemos que la Inteligencia Artificial no debe ser un servicio etéreo controlado por gigantes tecnológicos que espían sus datos. Debe ser una herramienta tangible, privada y leal, que vive en su propio hardware y obedece solo a usted.
                </p>
                <p>
                    Bienvenidos a la era de la delegación absoluta.
                </p>
            </div>
        </ScrollReveal>

        <div className="mt-20 border-t border-gray-100 pt-10">
            <p className="font-handwriting text-2xl text-apple-gray italic">
                Blyndtek Team.
            </p>
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