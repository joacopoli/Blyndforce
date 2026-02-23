import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { View } from '../App';
import { CipherRevealText } from './GhostOfficeProPage';

interface AuditPageProps {
  onBack: () => void;
  onRequestAgent: () => void;
  onNavigate?: (view: View) => void;
}

export const AuditPage: React.FC<AuditPageProps> = ({ onBack, onRequestAgent, onNavigate }) => {
  const handleNav = (view: View) => (e: React.MouseEvent) => {
    e.preventDefault();
    if(onNavigate) onNavigate(view);
  };

  return (
    <div className="bg-black min-h-screen text-[#F5F5F7] font-sans pt-20">
      
       {/* Sub Nav */}
      <div className="relative z-40 bg-black border-b border-white/10">
         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <button className="font-semibold text-xl tracking-tight text-white/50 hover:text-white transition-colors" onClick={onBack}>
              Ghost Office <span className="text-white">Pro</span>
            </button>
            <div className="hidden md:flex gap-8 text-xs font-medium text-gray-400">
               <button onClick={handleNav('governance')} className="hover:text-white transition-colors uppercase tracking-wider">Gobernanza</button>
               <button onClick={handleNav('infrastructure')} className="hover:text-white transition-colors uppercase tracking-wider">Infraestructura</button>
               <button onClick={handleNav('audit')} className="text-white font-bold uppercase tracking-wider">Auditoría</button>
               <button onClick={handleNav('roi')} className="hover:text-white transition-colors uppercase tracking-wider">ROI</button>
            </div>
         </div>
      </div>

      <section className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
         <ScrollReveal>
             <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter mb-8 leading-[0.95]">
                <span className="block text-gray-500">Transparencia</span>
                <span className="block text-white"><CipherRevealText text="Radical." /></span>
             </h1>
             <p className="text-xl md:text-3xl font-light text-gray-300 max-w-3xl leading-relaxed mb-16">
                 La confianza no escala. La verificación sí. Blyndforce ofrece el sistema de auditoría más granular del mercado de IA.
             </p>
         </ScrollReveal>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             {/* The Terminal Visual */}
             <div className="bg-[#050505] border border-white/10 rounded-xl p-6 font-mono text-xs md:text-sm shadow-2xl overflow-hidden h-full min-h-[500px]">
                 <div className="flex gap-2 mb-4 border-b border-white/5 pb-4">
                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
                     <span className="ml-auto text-gray-600">audit_stream_v9.log</span>
                 </div>
                 <div className="text-green-500 space-y-2 opacity-90">
                     <p>[TIMESTAMP: 14:00:01.002] <span className="text-white">SESSION_START</span> User: Agent_01</p>
                     <p>[TIMESTAMP: 14:00:01.205] <span className="text-white">AUTH_CHECK</span> Biometric_Pass: True</p>
                     <p>[TIMESTAMP: 14:00:02.110] <span className="text-white">ACTION</span> Navigate -&gt; "secure.bank.com"</p>
                     <p>[TIMESTAMP: 14:00:02.450] <span className="text-blue-400">ENCRYPTION</span> TLS 1.3 Handshake Established</p>
                     <p>[TIMESTAMP: 14:00:03.001] <span className="text-white">INPUT</span> Credential Injection (Vault ID: #992)</p>
                     <p>[TIMESTAMP: 14:00:05.200] <span className="text-yellow-500">SNAPSHOT</span> Screen_Cap_AF22.png saved [HASH: 8x99...]</p>
                     <p>[TIMESTAMP: 14:00:06.000] <span className="text-white">DECISION</span> Parsing Balance Table...</p>
                     <p className="text-gray-500">...</p>
                     <p>[TIMESTAMP: 14:00:10.550] <span className="text-purple-500">COMPLIANCE</span> Flag: Transaction &gt; $10k detected.</p>
                     <p>[TIMESTAMP: 14:00:10.555] <span className="text-purple-500">COMPLIANCE</span> Action: Alert sent to CFO.</p>
                 </div>
             </div>

             <div className="flex flex-col justify-center space-y-12">
                 <div>
                     <h3 className="text-2xl font-bold text-white mb-4">La Caja Negra (Black Box)</h3>
                     <p className="text-gray-400 leading-relaxed">
                         Al igual que en aviación, cada nodo registra cada micro-evento. Si ocurre un error, usted no necesita adivinar "por qué lo hizo la IA". Usted reproduce la sesión, ve la captura de pantalla y lee el log de razonamiento.
                     </p>
                 </div>
                 <div>
                     <h3 className="text-2xl font-bold text-white mb-4">Inmutabilidad Criptográfica</h3>
                     <p className="text-gray-400 leading-relaxed">
                         Los logs de auditoría se firman criptográficamente en el momento de su creación. Ni siquiera un administrador de sistemas con acceso root puede alterar el registro histórico sin romper la cadena de validación.
                     </p>
                 </div>
                 <div>
                     <h3 className="text-2xl font-bold text-white mb-4">Alertas de Anomalías</h3>
                     <p className="text-gray-400 leading-relaxed">
                         Configure disparadores de seguridad. ¿El agente está intentando descargar más de 50 archivos en un minuto? ¿Está accediendo a una IP fuera de rango? El sistema se bloquea y notifica instantáneamente.
                     </p>
                 </div>
             </div>
         </div>
      </section>

      {/* Footer Nav */}
      <div className="py-12 border-t border-white/10 text-center">
          <button onClick={onRequestAgent} className="bg-white text-black px-8 py-3 rounded-full font-medium mb-8 hover:bg-gray-200">
              Asegurar Operación
          </button>
          <br/>
          <button onClick={onBack} className="text-gray-500 hover:text-white transition-colors text-sm">
             Volver al Inicio
          </button>
      </div>

    </div>
  );
};