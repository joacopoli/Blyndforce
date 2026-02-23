import React, { useState, useEffect } from 'react';
import { ScrollReveal } from './ScrollReveal';

const tasks = [
  { id: 1, type: 'FINANCE', text: 'Conciliando Banco Galicia: Factura F-0023 vs Movimiento #9923...', status: 'MATCH' },
  { id: 2, type: 'EMAIL', text: 'Analizando bandeja de entrada: 42 no leídos. Priorizando 3 urgentes.', status: 'DONE' },
  { id: 3, type: 'SAP', text: 'Conectando a ERP Legacy via tunel seguro... Autenticado.', status: 'OK' },
  { id: 4, type: 'LEGAL', text: 'Verificando vencimiento de pólizas de seguro en carpeta compartida.', status: 'SCANNING' },
  { id: 5, type: 'AGENDA', text: 'Conflicto detectado: Reunión de Directorio vs Llamada Inversores.', status: 'RESOLVING' },
  { id: 6, type: 'MARKET', text: 'Scraping precios competencia: MercadoLibre & Amazon.', status: 'UPDATING' },
  { id: 7, type: 'WHATSAPP', text: 'Recibiendo orden de voz de CEO: "Preparar reporte de caja".', status: 'PROCESSING' },
  { id: 8, type: 'TAX', text: 'Descargando comprobantes AFIP/IRS para cierre mensual.', status: 'DOWNLOADING' },
];

export const ActivityLog: React.FC = () => {
  const [logs, setLogs] = useState<typeof tasks>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs(prev => {
        const nextTask = tasks[currentIndex];
        const newLogs = [nextTask, ...prev].slice(0, 5); // Keep only last 5
        return newLogs;
      });
      setCurrentIndex(prev => (prev + 1) % tasks.length);
    }, 2000); // New log every 2 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="py-12 px-6 md:px-12 border-b border-gray-100 bg-white">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-gray-400">Actividad de la Red en Vivo</span>
                </div>
                <span className="text-xs font-mono text-gray-300">NODE_ID: 884-AX-01</span>
            </div>

            <div className="font-mono text-sm md:text-base space-y-3 min-h-[160px]">
                {logs.map((log, index) => (
                    <div 
                        key={`${log.id}-${index}`} 
                        className={`flex items-start gap-4 transition-all duration-500 ${index === 0 ? 'opacity-100 translate-y-0' : 'opacity-40'}`}
                    >
                        <span className="text-xs text-gray-300 w-16 shrink-0 pt-0.5">
                            {new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute:'2-digit', second:'2-digit' })}
                        </span>
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border shrink-0 w-16 text-center ${
                            log.type === 'FINANCE' ? 'text-blue-600 border-blue-100 bg-blue-50' :
                            log.type === 'EMAIL' ? 'text-purple-600 border-purple-100 bg-purple-50' :
                            log.type === 'SAP' ? 'text-gray-600 border-gray-200 bg-gray-50' :
                            'text-orange-600 border-orange-100 bg-orange-50'
                        }`}>
                            {log.type}
                        </span>
                        <span className="text-apple-black truncate">
                            {log.text}
                        </span>
                        <span className="ml-auto text-xs font-bold text-gray-400 hidden md:block">
                            [{log.status}]
                        </span>
                    </div>
                ))}
            </div>
        </ScrollReveal>
      </div>
    </section>
  );
};