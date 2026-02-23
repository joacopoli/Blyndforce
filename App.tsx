import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Capabilities } from './components/Capabilities';
import { Privacy } from './components/Privacy';
import { Enterprise } from './components/Enterprise';
import { Pricing } from './components/Pricing';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ActivityLog } from './components/ActivityLog';
import { EnterprisePage } from './pages/EnterprisePage';
import { CapabilitiesPage } from './pages/CapabilitiesPage';
import { PricingPage } from './pages/PricingPage';
import { SecurityPage } from './pages/SecurityPage';
import { RequestAgentPage } from './pages/RequestAgentPage';
import { UseCasesPage } from './pages/UseCasesPage';
import { ValuesPage } from './pages/ValuesPage';
import { HardwarePage } from './pages/HardwarePage';
import { ManifestoPage } from './pages/ManifestoPage';
import { InvestorsPage } from './pages/InvestorsPage';
import { DocumentationPage } from './pages/DocumentationPage';
import { SupportPage } from './pages/SupportPage';
import { LegalPage } from './pages/LegalPage';
import { GhostOfficePage } from './pages/GhostOfficePage';
import { GhostOfficeProPage } from './pages/GhostOfficeProPage';
import { GovernancePage } from './pages/GovernancePage';
import { InfrastructurePage } from './pages/InfrastructurePage';
import { AuditPage } from './pages/AuditPage';
import { ROIPage } from './pages/ROIPage';

export type View = 
  | 'home' 
  | 'enterprise' 
  | 'ghost-office' 
  | 'ghost-office-pro' 
  | 'governance'      // New
  | 'infrastructure'  // New
  | 'audit'           // New
  | 'roi'             // New
  | 'capabilities' 
  | 'pricing' 
  | 'security' 
  | 'request-agent' 
  | 'use-cases' 
  | 'values'
  | 'hardware'
  | 'manifesto'
  | 'investors'
  | 'documentation'
  | 'support'
  | 'legal';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Optional: State to pass specific section to Legal page
  const [legalSection, setLegalSection] = useState<string>('terms');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavigation = (view: View, params?: any) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); // Explicitly auto for instant scroll
    setCurrentView(view);
    setIsMobileMenuOpen(false);
    if (view === 'legal' && params?.section) {
        setLegalSection(params.section);
    }
  };

  const navigateToEnterprise = () => handleNavigation('enterprise');
  const navigateToGhostOffice = () => handleNavigation('ghost-office');
  const navigateToGhostOfficePro = () => handleNavigation('ghost-office-pro');
  const navigateToCapabilities = () => handleNavigation('capabilities');
  const navigateToPricing = () => handleNavigation('pricing');
  const navigateToSecurity = () => handleNavigation('security');
  const navigateToHome = () => handleNavigation('home');
  const navigateToRequestAgent = () => handleNavigation('request-agent');
  const navigateToUseCases = () => handleNavigation('use-cases');
  const navigateToValues = () => handleNavigation('values');

  // Logic for Dark Mode Header on specific pages (Pro Suite)
  const isDarkPage = ['ghost-office-pro', 'governance', 'infrastructure', 'audit', 'roi'].includes(currentView);
  
  const getLinkClass = (view: View) => {
    const baseClass = "text-xs font-medium transition-colors uppercase tracking-wider";
    
    if (isDarkPage) {
        return currentView === view 
            ? `${baseClass} text-white font-bold` 
            : `${baseClass} text-gray-400 hover:text-white`;
    }

    return currentView === view 
        ? `${baseClass} text-black font-bold` 
        : `${baseClass} text-gray-500 hover:text-black`;
  };

  const navBackgroundClass = isDarkPage
    ? (isScrolled 
        ? 'bg-black/60 border-white/10 backdrop-blur-lg' 
        : 'bg-transparent border-transparent backdrop-blur-none') 
    : (isScrolled 
        ? 'bg-white/80 border-gray-200/50 backdrop-blur-xl' 
        : 'bg-white/80 border-transparent backdrop-blur-xl'); 

  const logoSrc = isDarkPage 
    ? "https://i.ibb.co/DPgSZ8Gz/Logo-Blyndforce-nuevo-blanco.png" 
    : "https://i.ibb.co/mCX6HxT2/Blyndforce-logo-nuevo.png";

  const brandTextClass = isDarkPage ? 'text-white' : 'text-apple-black';
  const hamburgerClass = isDarkPage ? 'text-white' : 'text-apple-black';

  return (
    <div className={`min-h-screen font-sans selection:bg-black selection:text-white ${isDarkPage ? 'bg-black' : 'bg-white'}`}>
      
      {/* Global Navigation */}
      <nav className={`fixed top-0 w-full z-50 border-b transition-all duration-500 ${navBackgroundClass} ${isScrolled ? 'h-16' : 'h-20'}`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
           <button 
             onClick={navigateToHome} 
             className="flex items-center gap-3 hover:opacity-80 transition-opacity select-none group focus:outline-none z-50 relative"
           >
             <img 
               src={logoSrc}
               alt="BlyndForce Logo" 
               className="h-8 md:h-10 w-auto object-contain transition-all" 
             />
             <span 
               className={`text-xl md:text-2xl font-semibold tracking-tighter whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out ${brandTextClass} ${
                 isScrolled 
                   ? 'opacity-0 max-w-0 -translate-x-4' 
                   : 'opacity-100 max-w-[200px] translate-x-0'
               }`}
             >
               Blynd<span className="italic">Force</span>.
             </span>
           </button>

           {/* Desktop Menu */}
           <div className="hidden md:flex items-center gap-6">
             <button onClick={navigateToValues} className={getLinkClass('values')}>
               Valores
             </button>
             <button onClick={navigateToUseCases} className={getLinkClass('use-cases')}>
               Casos de Uso
             </button>
             <button onClick={navigateToCapabilities} className={getLinkClass('capabilities')}>
               Capacidades
             </button>
             <button onClick={navigateToEnterprise} className={getLinkClass('enterprise')}>
               Enterprise
             </button>
             <button onClick={navigateToSecurity} className={getLinkClass('security')}>
                Seguridad
             </button>
             <button onClick={navigateToPricing} className={getLinkClass('pricing')}>
               Pricing
             </button>
             
             <button 
               onClick={navigateToRequestAgent}
               className={`text-xs px-4 py-2 rounded-full font-medium transition-colors ml-2 shadow-sm ${
                  currentView === 'request-agent' 
                  ? 'bg-black text-white' 
                  : 'bg-[#0071e3] text-white hover:bg-[#0077ED]'
               }`}
             >
                Solicitá tu Agente
             </button>
           </div>

           {/* Mobile Hamburger Button */}
           <button 
             className={`md:hidden p-2 z-50 relative focus:outline-none ${hamburgerClass}`}
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
           >
             {isMobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
             ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
             )}
           </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden pt-32 px-6 animate-fade-in-up">
          <div className="flex flex-col gap-8 items-start">
             <button onClick={navigateToHome} className="text-3xl font-semibold tracking-tight text-apple-black hover:text-gray-600 transition-colors">
               Inicio
             </button>
             <button onClick={navigateToValues} className="text-3xl font-semibold tracking-tight text-apple-black hover:text-gray-600 transition-colors">
               Valores
             </button>
             <button onClick={navigateToUseCases} className="text-3xl font-semibold tracking-tight text-apple-black hover:text-gray-600 transition-colors">
               Casos de Uso
             </button>
             <button onClick={navigateToCapabilities} className="text-3xl font-semibold tracking-tight text-apple-black hover:text-gray-600 transition-colors">
               Capacidades
             </button>
             <button onClick={navigateToEnterprise} className="text-3xl font-semibold tracking-tight text-apple-black hover:text-gray-600 transition-colors">
               Enterprise
             </button>
             <button onClick={navigateToSecurity} className="text-3xl font-semibold tracking-tight text-apple-black hover:text-gray-600 transition-colors">
               Seguridad
             </button>
             <button onClick={navigateToPricing} className="text-3xl font-semibold tracking-tight text-apple-black hover:text-gray-600 transition-colors">
               Pricing
             </button>
             <button onClick={navigateToRequestAgent} className="text-3xl font-semibold tracking-tight text-blue-600 hover:text-blue-700 transition-colors pt-4">
               Solicitá tu Agente
             </button>
          </div>
        </div>
      )}

      {/* Main Container - padding adjustment for dark pages */}
      <main className={`${(isScrolled && !isDarkPage) ? 'pt-16' : (isDarkPage ? 'pt-0' : 'pt-20')}`}>
        {currentView === 'home' && (
          <>
            <Hero onRequestAgent={navigateToRequestAgent} />
            <Manifesto />
            <ActivityLog />
            <div id="capabilities">
              <Capabilities />
            </div>
            <div id="security">
              <Privacy />
            </div>
            <Enterprise onLearnMore={navigateToEnterprise} />
            <Process />
            <Pricing onRequestAgent={navigateToRequestAgent} />
            <FAQ />
          </>
        )}
        {currentView === 'enterprise' && (
          <EnterprisePage onBack={navigateToHome} onNavigateToGhost={navigateToGhostOffice} onNavigateToGhostPro={navigateToGhostOfficePro} />
        )}
        {currentView === 'ghost-office' && (
          <GhostOfficePage onBack={navigateToHome} onRequestAgent={navigateToRequestAgent} />
        )}
        
        {/* Ghost Office Pro Suite */}
        {currentView === 'ghost-office-pro' && (
          <GhostOfficeProPage onBack={navigateToHome} onRequestAgent={navigateToRequestAgent} onNavigate={handleNavigation} />
        )}
        {currentView === 'governance' && (
          <GovernancePage onBack={navigateToHome} onRequestAgent={navigateToRequestAgent} onNavigate={handleNavigation} />
        )}
        {currentView === 'infrastructure' && (
          <InfrastructurePage onBack={navigateToHome} onRequestAgent={navigateToRequestAgent} onNavigate={handleNavigation} />
        )}
        {currentView === 'audit' && (
          <AuditPage onBack={navigateToHome} onRequestAgent={navigateToRequestAgent} onNavigate={handleNavigation} />
        )}
        {currentView === 'roi' && (
          <ROIPage onBack={navigateToHome} onRequestAgent={navigateToRequestAgent} onNavigate={handleNavigation} />
        )}

        {currentView === 'capabilities' && (
          <CapabilitiesPage onBack={navigateToHome} />
        )}
        {currentView === 'pricing' && (
          <PricingPage onBack={navigateToHome} />
        )}
        {currentView === 'security' && (
          <SecurityPage onBack={navigateToHome} />
        )}
        {currentView === 'request-agent' && (
          <RequestAgentPage onBack={navigateToHome} />
        )}
        {currentView === 'use-cases' && (
          <UseCasesPage onBack={navigateToHome} onRequestAgent={navigateToRequestAgent}/>
        )}
        {currentView === 'values' && (
          <ValuesPage onBack={navigateToHome} />
        )}
        {currentView === 'hardware' && (
          <HardwarePage onBack={navigateToHome} />
        )}
        {currentView === 'manifesto' && (
          <ManifestoPage onBack={navigateToHome} />
        )}
        {currentView === 'investors' && (
          <InvestorsPage onBack={navigateToHome} />
        )}
        {currentView === 'documentation' && (
          <DocumentationPage onBack={navigateToHome} />
        )}
        {currentView === 'support' && (
          <SupportPage onBack={navigateToHome} />
        )}
        {currentView === 'legal' && (
          <LegalPage onBack={navigateToHome} defaultSection={legalSection} />
        )}
      </main>
      
      {/* Hide footer on Pro pages for consistency */}
      {!isDarkPage && <Footer onNavigate={handleNavigation} />}
      {/* Optional: Add a minimal black footer for dark pages or share the same component styled differently. 
          For now, keeping the global footer hidden on dark pages to maintain full immersion, 
          or users can navigate back via top or bottom links inside pages. 
      */}
    </div>
  );
};

export default App;