import React, { useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

interface RequestAgentPageProps {
  onBack: () => void;
}

type Step = 1 | 2 | 3 | 4; // 4 is Success state

export const RequestAgentPage: React.FC<RequestAgentPageProps> = ({ onBack }) => {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    plan: 'Not Sure',
    details: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    // Basic validation
    if (step === 1 && (!formData.name || !formData.email)) return;
    setStep(prev => (prev + 1) as Step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackStep = () => {
    setStep(prev => (prev - 1) as Step);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send data to backend
    setTimeout(() => {
        setStep(4);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  };

  const plans = ["Executive Shadow", "Ghost Office", "Ghost Office Pro", "No estoy seguro"];

  return (
    <div className="min-h-screen bg-white pt-24 pb-20 animate-fade-in-up font-sans">
      {/* Navigation */}
      <div className="max-w-3xl mx-auto px-6 mb-8 md:mb-12 flex justify-between items-center">
        <button 
          onClick={step === 1 ? onBack : handleBackStep}
          className="text-sm font-medium text-apple-gray hover:text-apple-black transition-colors flex items-center gap-2"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          {step === 1 ? 'Cancelar' : 'Atrás'}
        </button>
        {step < 4 && (
            <span className="text-xs font-semibold text-gray-300 uppercase tracking-widest">
                Paso {step} de 3
            </span>
        )}
      </div>

      <div className="max-w-3xl mx-auto px-6">
        
        {step === 1 && (
            <div className="animate-fade-in-up">
                <ScrollReveal>
                    <h1 className="text-3xl md:text-5xl font-semibold text-apple-black mb-4 tracking-tight">
                        Solicita tu Agente
                    </h1>
                    <p className="text-lg md:text-xl text-apple-gray mb-8 md:mb-12">
                        Para asignar un nodo físico, necesitamos validar su identidad operativa.
                    </p>

                    <div className="space-y-6 md:space-y-8">
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2 ml-1">Nombre Completo</label>
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Ej. Juan Pérez"
                                className="w-full bg-[#F5F5F7] text-apple-black text-lg md:text-xl px-4 py-4 md:px-6 md:py-5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-gray-400"
                                autoFocus
                            />
                        </div>
                         <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2 ml-1">Correo Electrónico Corporativo</label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="juan@empresa.com"
                                className="w-full bg-[#F5F5F7] text-apple-black text-lg md:text-xl px-4 py-4 md:px-6 md:py-5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-gray-400"
                            />
                        </div>
                         <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2 ml-1">Teléfono Móvil (WhatsApp)</label>
                            <input 
                                type="tel" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="+54 9 11 ..."
                                className="w-full bg-[#F5F5F7] text-apple-black text-lg md:text-xl px-4 py-4 md:px-6 md:py-5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-gray-400"
                            />
                            <p className="text-xs text-gray-400 mt-2 ml-1">Usaremos este número para la autenticación de dos factores inicial.</p>
                        </div>
                    </div>

                    <div className="mt-12 md:mt-16 flex justify-end">
                        <button 
                            onClick={handleNext}
                            disabled={!formData.name || !formData.email}
                            className="bg-apple-black text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2 group"
                        >
                            Continuar
                            <svg className="group-hover:translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                        </button>
                    </div>
                </ScrollReveal>
            </div>
        )}

        {step === 2 && (
            <div className="animate-fade-in-up">
                 <h1 className="text-3xl md:text-5xl font-semibold text-apple-black mb-4 tracking-tight">
                    Infraestructura.
                </h1>
                <p className="text-lg md:text-xl text-apple-gray mb-8 md:mb-12">
                    Ayúdenos a dimensionar el tamaño de la implementación.
                </p>

                <div className="space-y-6 md:space-y-8">
                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2 ml-1">Nombre de la Organización</label>
                        <input 
                            type="text" 
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Nombre de su empresa"
                            className="w-full bg-[#F5F5F7] text-apple-black text-lg md:text-xl px-4 py-4 md:px-6 md:py-5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-gray-400"
                            autoFocus
                        />
                    </div>
                     <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2 ml-1">Su Rol</label>
                         <input 
                            type="text" 
                            name="role"
                            value={formData.role}
                            onChange={handleInputChange}
                            placeholder="Ej. CEO, Director de Operaciones..."
                            className="w-full bg-[#F5F5F7] text-apple-black text-lg md:text-xl px-4 py-4 md:px-6 md:py-5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-gray-400"
                        />
                    </div>
                </div>

                <div className="mt-12 md:mt-16 flex justify-end">
                     <button 
                        onClick={handleNext}
                        className="bg-apple-black text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all flex items-center gap-2 group"
                    >
                        Siguiente
                         <svg className="group-hover:translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                    </button>
                </div>
            </div>
        )}

        {step === 3 && (
            <div className="animate-fade-in-up">
                 <h1 className="text-3xl md:text-5xl font-semibold text-apple-black mb-4 tracking-tight">
                    Capacidad y Enfoque.
                </h1>
                <p className="text-lg md:text-xl text-apple-gray mb-8 md:mb-12">
                    Defina el objetivo principal de su Agente.
                </p>

                <div className="space-y-6 md:space-y-8">
                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-4 ml-1">Plan de Interés</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {plans.map((p) => (
                                <button
                                    key={p}
                                    onClick={() => setFormData(prev => ({...prev, plan: p}))}
                                    className={`text-left px-4 py-4 md:px-6 md:py-5 rounded-2xl border transition-all ${
                                        formData.plan === p 
                                        ? 'border-blue-500 bg-blue-50 text-blue-700 font-medium ring-1 ring-blue-500' 
                                        : 'border-gray-200 bg-white text-apple-gray hover:border-gray-300'
                                    }`}
                                >
                                    {p}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2 ml-1">¿Qué proceso quiere delegar primero?</label>
                        <textarea 
                            name="details"
                            value={formData.details}
                            onChange={handleInputChange}
                            placeholder="Ej. Conciliación bancaria mensual, gestión de correos de proveedores..."
                            className="w-full bg-[#F5F5F7] text-apple-black text-lg px-4 py-4 md:px-6 md:py-5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-gray-400 min-h-[150px]"
                        />
                    </div>
                </div>

                 <div className="mt-12 md:mt-16 flex justify-end">
                     <button 
                        onClick={handleSubmit}
                        className="bg-[#0071e3] text-white px-10 py-3 md:px-12 md:py-4 rounded-full text-lg font-medium hover:bg-[#0077ED] transition-all shadow-lg shadow-blue-500/20 transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Solicitar Activación
                    </button>
                </div>
            </div>
        )}

        {step === 4 && (
            <div className="text-center py-12 md:py-20 animate-fade-in-up">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h2 className="text-3xl md:text-5xl font-semibold text-apple-black mb-4 md:mb-6 tracking-tight">Solicitud Recibida.</h2>
                <p className="text-lg md:text-2xl text-apple-gray max-w-2xl mx-auto leading-relaxed mb-8 md:mb-12">
                    Hemos iniciado el proceso de pre-calificación para <span className="text-apple-black font-medium">{formData.company || formData.name}</span>.
                </p>
                <div className="bg-[#F5F5F7] p-6 md:p-8 rounded-3xl max-w-xl mx-auto mb-8 md:mb-12 border border-gray-100">
                    <h3 className="text-lg font-bold text-apple-black mb-4">Próximos Pasos</h3>
                    <ol className="text-left space-y-4 text-apple-gray">
                        <li className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center">1</span>
                            <span>Un especialista de onboarding lo contactará al <strong>{formData.phone}</strong> en las próximas 24 horas.</span>
                        </li>
                         <li className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-300 text-white text-xs font-bold flex items-center justify-center">2</span>
                            <span>Validaremos la factibilidad técnica de los procesos que desea delegar.</span>
                        </li>
                         <li className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-300 text-white text-xs font-bold flex items-center justify-center">3</span>
                            <span>Coordinaremos el envío y setup de su Nodo Físico.</span>
                        </li>
                    </ol>
                </div>
                <button 
                    onClick={onBack}
                    className="text-blue-600 font-medium hover:underline underline-offset-4"
                >
                    Volver al inicio
                </button>
            </div>
        )}

      </div>
    </div>
  );
};