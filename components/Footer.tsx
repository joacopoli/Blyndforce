import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { View } from '../App';

interface FooterProps {
  onNavigate?: (view: View, params?: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (view: View, params?: any) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(view, params);
    }
  };

  return (
    <footer className="bg-[#F5F5F7] pt-20 pb-10 px-6 border-t border-gray-200 text-sans">
        <div className="max-w-7xl mx-auto">
            
            {/* Top Section: Brand & Mission */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-16 border-b border-gray-200 pb-12">
                <div className="mb-8 md:mb-0 max-w-sm">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="text-xl font-semibold tracking-tighter text-apple-black">BlyndForce.</span>
                    </div>
                    <p className="text-xs text-apple-gray leading-relaxed">
                        Infraestructura de inteligencia soberana. <br/>
                        Diseñamos el hardware y el software para que las corporaciones recuperen el control de su tiempo y sus datos.
                    </p>
                </div>
                <div className="flex flex-col items-end">
                     <div className="flex items-center gap-2 mb-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-mono text-apple-gray uppercase tracking-widest">System Status: Nominal</span>
                     </div>
                     <p className="text-xs text-gray-400">All Nodes Operational</p>
                </div>
            </div>

            {/* Middle Section: Sitemap Columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 mb-20">
                
                {/* Column 1 */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-xs font-bold text-apple-black uppercase tracking-wider mb-2">Producto</h4>
                    <button onClick={handleNav('pricing')} className="text-left text-xs text-apple-gray hover:text-apple-black transition-colors hover:underline">Executive Shadow</button>
                    <button onClick={handleNav('pricing')} className="text-left text-xs text-apple-gray hover:text-apple-black transition-colors hover:underline">Ghost Office</button>
                    <button onClick={handleNav('enterprise')} className="text-left text-xs text-apple-gray hover:text-apple-black transition-colors hover:underline">Enterprise</button>
                    <button onClick={handleNav('hardware')} className="text-left text-xs text-apple-gray hover:text-apple-black transition-colors hover:underline">Hardware M4</button>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-xs font-bold text-apple-black uppercase tracking-wider mb-2">Corporativo</h4>
                    <button onClick={handleNav('values')} className="text-left text-xs text-apple-gray hover:text-apple-black transition-colors hover:underline">Nuestros Valores</button>
                    <button onClick={handleNav('manifesto')} className="text-left text-xs text-apple-gray hover:text-apple-black transition-colors hover:underline">Manifiesto</button>
                    <button onClick={handleNav('security')} className="text-left text-xs text-apple-gray hover:text-apple-black transition-colors hover:underline">Seguridad & Privacidad</button>
                    <button onClick={handleNav('investors')} className="text-left text-xs text-apple-gray hover:text-apple-black transition-colors hover:underline">Inversores</button>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-xs font-bold text-apple-black uppercase tracking-wider mb-2">Recursos</h4>
                    <button onClick={handleNav('use-cases')} className="text-left text-xs text-apple-gray hover:text-apple-black transition-colors hover:underline">Casos de Uso</button>
                    <button onClick={handleNav('documentation')} className="text-left text-xs text-apple-gray hover:text-apple-black transition-colors hover:underline">Documentación Técnica</button>
                    <button onClick={handleNav('support')} className="text-left text-xs text-apple-gray hover:text-apple-black transition-colors hover:underline">Soporte Concierge</button>
                    <button onClick={handleNav('request-agent')} className="text-left text-xs text-apple-gray hover:text-apple-black transition-colors hover:underline">Contacto de Ventas</button>
                </div>

                {/* Column 4 */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-xs font-bold text-apple-black uppercase tracking-wider mb-2">Legal</h4>
                    <button onClick={handleNav('legal', { section: 'terms' })} className="text-left text-xs text-apple-gray hover:text-apple-black transition-colors hover:underline">Términos de Servicio</button>
                    <button onClick={handleNav('legal', { section: 'privacy' })} className="text-left text-xs text-apple-gray hover:text-apple-black transition-colors hover:underline">Política de Privacidad</button>
                    <button onClick={handleNav('legal', { section: 'dpa' })} className="text-left text-xs text-apple-gray hover:text-apple-black transition-colors hover:underline">DPA (Data Processing)</button>
                    <button onClick={handleNav('legal', { section: 'compliance' })} className="text-left text-xs text-apple-gray hover:text-apple-black transition-colors hover:underline">Compliance</button>
                </div>
            </div>

            {/* Bottom Section: Copyright & Locale */}
            <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                <div className="flex flex-col md:flex-row gap-1 md:gap-6 items-center">
                    <p>&copy; {new Date().getFullYear()} Blyndtek LLC. Todos los derechos reservados.</p>
                    <div className="hidden md:block w-[1px] h-3 bg-gray-300"></div>
                    <p>Designed in San Francisco. Operating Globally.</p>
                </div>
                <div className="flex items-center gap-4">
                    <button className="hover:text-apple-black transition-colors">United States</button>
                    <span className="text-gray-300">|</span>
                    <button className="hover:text-apple-black transition-colors">Argentina</button>
                </div>
            </div>
        </div>
    </footer>
  );
};