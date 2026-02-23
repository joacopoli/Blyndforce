import React, { useState, useEffect } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

interface LegalPageProps {
  onBack: () => void;
  defaultSection?: string;
}

export const LegalPage: React.FC<LegalPageProps> = ({ onBack, defaultSection = 'terms' }) => {
  const [activeSection, setActiveSection] = useState(defaultSection);

  useEffect(() => {
    setActiveSection(defaultSection);
  }, [defaultSection]);

  const renderContent = () => {
      switch(activeSection) {
          case 'privacy':
              return (
                  <div className="prose prose-lg prose-gray max-w-none animate-fade-in-up">
                      <h3>Política de Privacidad</h3>
                      <p>Última actualización: Octubre 2023</p>
                      <p>En Blyndforce, la privacidad no es una opción, es la arquitectura. Esta política describe cómo NO recopilamos sus datos.</p>
                      <h4>1. Recopilación de Datos</h4>
                      <p>Blyndforce opera bajo un modelo de "Zero-Knowledge". Nuestros servidores de orquestación solo reciben metadatos encriptados necesarios para el enrutamiento de mensajes. El contenido de sus operaciones (facturas, correos, datos bancarios) nunca sale de su Nodo Físico desencriptado.</p>
                      <h4>2. Uso de Datos</h4>
                      <p>No utilizamos sus datos para entrenar modelos de IA fundamentales. Sus datos operativos son efímeros y se procesan en la memoria volátil de su hardware dedicado.</p>
                      <h4>3. Derechos del Usuario</h4>
                      <p>Usted tiene derecho a solicitar la purga completa de su nodo en cualquier momento ("Kill Switch"), lo que sobreescribe criptográficamente el disco duro de su unidad asignada.</p>
                  </div>
              );
          case 'dpa':
               return (
                  <div className="prose prose-lg prose-gray max-w-none animate-fade-in-up">
                      <h3>Data Processing Agreement (DPA)</h3>
                      <p>Este Acuerdo de Procesamiento de Datos rige el tratamiento de datos personales por parte de Blyndforce en nombre del Cliente.</p>
                      <h4>1. Alcance y Roles</h4>
                      <p>El Cliente actúa como Controlador de Datos. Blyndforce actúa como Procesador de Datos. Blyndforce procesará datos únicamente bajo instrucciones documentadas del Cliente (órdenes ejecutivas).</p>
                      <h4>2. Seguridad del Procesamiento</h4>
                      <p>Implementamos medidas técnicas y organizativas para asegurar un nivel de seguridad apropiado al riesgo, incluyendo cifrado AES-256 en reposo y TLS 1.3 en tránsito.</p>
                      <h4>3. Sub-procesadores</h4>
                      <p>Blyndforce utiliza proveedores de infraestructura física (Data Centers Tier-3). No compartimos datos con sub-procesadores de lógica de negocio o publicidad.</p>
                  </div>
              );
          case 'compliance':
              return (
                  <div className="prose prose-lg prose-gray max-w-none animate-fade-in-up">
                      <h3>Compliance & Certificaciones</h3>
                      <p>Blyndforce está diseñado para cumplir con los estándares regulatorios más estrictos.</p>
                      <ul className="list-disc pl-5 space-y-2">
                          <li><strong>GDPR (Europa):</strong> Cumplimiento total mediante soberanía de datos y derecho al olvido.</li>
                          <li><strong>SOC 2 Type II:</strong> En proceso de auditoría para controles de seguridad, disponibilidad y confidencialidad.</li>
                          <li><strong>HIPAA:</strong> Arquitectura compatible para el manejo de datos de salud (requiere configuración BAA específica).</li>
                      </ul>
                  </div>
              );
          default: // terms
              return (
                  <div className="prose prose-lg prose-gray max-w-none animate-fade-in-up">
                      <h3>Términos de Servicio</h3>
                      <p>Bienvenido a Blyndforce. Al contratar nuestros servicios de fuerza laboral digital, usted acepta los siguientes términos.</p>
                      <h4>1. Descripción del Servicio</h4>
                      <p>Blyndforce provee acceso a hardware dedicado y software de automatización basado en IA. El Cliente es responsable de las acciones ejecutadas por el Agente bajo sus órdenes.</p>
                      <h4>2. Responsabilidad</h4>
                      <p>Blyndforce provee las herramientas "tal cual". No nos hacemos responsables por pérdidas financieras derivadas de instrucciones erróneas dadas por el Cliente al Agente, o fallos en sistemas de terceros (bancos, ERPs).</p>
                      <h4>3. Pagos y Cancelación</h4>
                      <p>El servicio se factura mensualmente. El costo de Setup no es reembolsable. El cliente puede cancelar en cualquier momento con un preaviso de 30 días.</p>
                  </div>
              );
      }
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-20 animate-fade-in-up selection:bg-black selection:text-white">
      
      <section className="max-w-7xl mx-auto px-6 mb-12 pt-10 md:pt-20">
        <ScrollReveal>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6 text-apple-black">
            Legal & Privacidad.
          </h1>
        </ScrollReveal>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-32 flex flex-col md:flex-row gap-12">
          {/* Sidebar Navigation */}
          <div className="w-full md:w-1/4">
              <nav className="flex flex-col gap-2 sticky top-32">
                  {[
                      { id: 'terms', label: 'Términos de Servicio' },
                      { id: 'privacy', label: 'Política de Privacidad' },
                      { id: 'dpa', label: 'Data Processing (DPA)' },
                      { id: 'compliance', label: 'Compliance' }
                  ].map(item => (
                      <button
                        key={item.id}
                        onClick={() => { setActiveSection(item.id); window.scrollTo({top:0, behavior:'smooth'}); }}
                        className={`text-left py-3 px-4 rounded-lg transition-colors text-sm font-medium ${
                            activeSection === item.id 
                            ? 'bg-gray-100 text-apple-black font-bold' 
                            : 'text-gray-500 hover:text-apple-black hover:bg-gray-50'
                        }`}
                      >
                          {item.label}
                      </button>
                  ))}
              </nav>
          </div>

          {/* Content Area */}
          <div className="w-full md:w-3/4">
              {renderContent()}
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