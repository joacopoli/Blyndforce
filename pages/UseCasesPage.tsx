import React, { useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

interface UseCasesPageProps {
  onBack: () => void;
  onRequestAgent: () => void;
}

type Tab = 'executive' | 'ghost' | 'pro';

export const UseCasesPage: React.FC<UseCasesPageProps> = ({ onBack, onRequestAgent }) => {
  const [activeTab, setActiveTab] = useState<Tab>('executive');

  const plansContent = {
    executive: {
      title: "Executive Shadow",
      subtitle: "Maximización del Ancho de Banda del CEO",
      description: (
        <>
          <p className="mb-4">
            El nivel "Executive Shadow" está diseñado para ser la sombra operativa del líder, encargándose de aquellas tareas que, aunque necesarias, fragmentan el tiempo de enfoque y agotan el capital cognitivo.
          </p>
          <p>
            Un CEO promedio trabaja más de 62 horas semanales. Al delegar estas funciones en un agente Blyndforce, el ejecutivo puede recuperar entre 20 y 30 horas mensuales, permitiéndole centrarse exclusivamente en la visión estratégica.
          </p>
        </>
      ),
      table: {
        title: "Análisis de Retorno de Tiempo",
        headers: ["Categoría de Tarea", "Tiempo Manual (Semanal)", "Tiempo con Blyndforce", "Ahorro Estimado"],
        rows: [
          ["Gestión de Agenda y Conflictos", "4 horas", "0.5 horas", "87.5%"],
          ["Procesamiento de Correo Electrónico", "10 horas", "2 horas", "80%"],
          ["Preparación de Briefings y Reportes", "5 horas", "1 hora", "80%"],
          ["Seguimiento de Tareas y Delegación", "3 horas", "0.5 horas", "83%"],
        ],
        footer: ["Total Estimado", "22 horas", "4 horas", "82%"]
      },
      cases: [
        {
          title: "Escudo de Productividad y Defensa de Agenda",
          category: "Productividad",
          desc: "El agente analiza las solicitudes de reunión entrantes y las reorganiza para proteger bloques de 90 minutos de 'Deep Work'. Ejecuta la lógica de triaje moviendo citas de baja prioridad y rechazando conflictos sin intervención."
        },
        {
          title: "Triaje Inteligente de Comunicaciones",
          category: "Comunicación",
          desc: "Monitorea la bandeja de entrada, clasifica correos por urgencia y redacta borradores imitando el tono de voz del CEO. Archiva hilos irrelevantes y destaca solo aquellos que requieren decisión estratégica."
        },
        {
          title: "Auditor de Compromisos",
          category: "Gestión Individual",
          desc: "Tras una reunión, extrae las acciones acordadas de notas o transcripciones y las inserta directamente en el gestor de tareas (ej. Things, ClickUp). Programa recordatorios automáticos para los responsables."
        },
        {
          title: "Briefing Matutino Estratégico",
          category: "Estrategia / Finanzas",
          desc: "Accede a bancos, CRM y noticias durante la noche para compilar un informe visual consolidado. Presenta los 3 KPIs más relevantes y las 3 decisiones urgentes del día en un formato de lectura de 5 minutos."
        },
        {
          title: "Concierge Logístico",
          category: "Estilo de Vida",
          desc: "Gestiona reservas de vuelos y hoteles navegando por portales de proveedores, utilizando perfiles de fidelidad. Gestiona cambios de última hora ante retrasos o cancelaciones en tiempo real."
        },
        {
          title: "Gestor de Memoria Institucional",
          category: "Gestión de Información",
          desc: "Organiza documentos, capturas y notas dispersas en el sistema de archivos del Mac Mini. Permite búsquedas semánticas ('¿Qué acordamos con el proveedor X en marzo?') sin depender de la nube."
        },
        {
          title: "Automatización de Pagos Personales",
          category: "Finanzas Personales",
          desc: "Monitorea fechas de vencimiento de facturas y suscripciones, ejecutando pagos vía navegador de forma segura. Identifica cargos inusuales y gestiona cancelaciones de servicios no utilizados."
        }
      ]
    },
    ghost: {
      title: "Ghost Office (Pyme)",
      subtitle: "El Motor Administrativo Invisible",
      description: (
        <>
          <p className="mb-4">
            Para las pequeñas y medianas empresas, Blyndforce actúa como un departamento administrativo completo en segundo plano. El desafío principal es la fragmentación tecnológica: múltiples herramientas SaaS que no se integran.
          </p>
          <p>
            El "Ghost Office" elimina esta ineficiencia moviendo información entre aplicaciones de forma fluida, reduciendo drásticamente la carga de trabajo administrativo y los errores de transcripción.
          </p>
        </>
      ),
      table: {
        title: "Impacto de la Precisión en la Pyme",
        headers: ["Proceso Administrativo", "Costo Humano (Est.)", "Costo Blyndforce", "Reducción Operativa"],
        rows: [
          ["Procesamiento de Invoices", "$1,200", "Incluido en plan", "85%"],
          ["Gestión de CRM y Leads", "$800", "Incluido en plan", "90%"],
          ["Reporting y BI Básico", "$600", "Incluido en plan", "95%"],
          ["Onboarding de Empleados", "$400", "Incluido en plan", "80%"],
        ],
        footer: ["Total Mensual", "$3,000", "Tarifa Plana", "Sustancial"]
      },
      cases: [
        {
          title: "Operador Autónomo de Cuentas por Pagar",
          category: "Finanzas",
          desc: "Identifica facturas por correo, descarga PDFs, extrae datos con visión artificial y los ingresa en el software contable (ej. QuickBooks). Realiza cotejo contra órdenes de compra y deja los pagos listos para aprobación."
        },
        {
          title: "Gestor de Onboarding/Offboarding",
          category: "Recursos Humanos",
          desc: "Al detectar un contrato firmado, navega paneles de administración para crear correos, accesos a Slack y perfiles de gestión. Ejecuta el proceso inverso de revocación instantánea al finalizar una relación laboral."
        },
        {
          title: "Analista de Enriquecimiento de Leads",
          category: "Ventas",
          desc: "Monitorea entradas de prospectos, investiga en la web y redes sociales para extraer tamaño de empresa y tecnología. Actualiza el CRM, clasifica el lead y lo asigna al vendedor correspondiente."
        },
        {
          title: "Arquitecto de Reporting Operativo",
          category: "Operaciones",
          desc: "Ingresa semanalmente a portales de marketing (Meta, Google Ads) y ventas para extraer métricas. Compila datos en hojas de cálculo locales, genera gráficos y envía informes ejecutivos en PDF."
        },
        {
          title: "Coordinador de Servicio al Cliente",
          category: "Atención al Cliente",
          desc: "Monitorea tickets de soporte, clasificando consultas por urgencia. Responde automáticamente preguntas frecuentes usando documentación interna y escala casos complejos al equipo técnico con resumen del historial."
        },
        {
          title: "Gestor de Inventario y Alertas",
          category: "Logística / Compras",
          desc: "Navega el software de gestión para detectar stock bajo mínimos y busca precios actualizados en portales de proveedores. Genera borradores de órdenes de compra para validación en un clic."
        },
        {
          title: "Vigilante de Cumplimiento Normativo",
          category: "Legal",
          desc: "Revisa vencimientos de seguros y licencias en el repositorio. Identifica documentos faltantes y envía solicitudes automáticas a los departamentos responsables para asegurar auditorías limpias."
        },
        {
          title: "Asistente E-commerce",
          category: "Ventas Online",
          desc: "Sincroniza precios y stock entre sitio web propio (Shopify) y marketplaces (Amazon, Mercado Libre). Detecta pedidos, actualiza envíos y descarga etiquetas de logística."
        }
      ]
    },
    pro: {
      title: "Ghost Office Pro (Enterprise)",
      subtitle: "Complejidad de Alta Escala y Legado",
      description: (
        <>
          <p className="mb-4">
            El nivel "Ghost Office Pro" representa la frontera final de la automatización. Está diseñado para organizaciones que enfrentan el desafío de los sistemas "Legacy" (SAP R/3, Oracle EBS, AS/400).
          </p>
          <p>
            Utilizamos la capacidad de "Computer Use" para actuar como un operador experto en estos sistemas, superando las capacidades humanas y manteniendo un rastro de auditoría inmutable.
          </p>
        </>
      ),
      table: {
        title: "Ventaja en Agilidad Corporativa",
        headers: ["Desafío Corporativo", "Solución Tradicional", "Ghost Office Pro", "Ventaja"],
        rows: [
          ["Integración de ERP Viejo", "Proyecto 12 meses ($500k+)", "Despliegue Agente (Días)", "Inmediata"],
          ["Cierre Mensual", "10 días trabajo manual", "Conciliación continua", "Real-time"],
          ["Cumplimiento", "Equipo de 5 personas", "1 Agente Digital", "-80% Headcount"],
          ["Auditoría de Datos", "Muestreo aleatorio", "Auditoría al 100%", "Riesgo Cero"],
        ],
        footer: null
      },
      cases: [
        {
          title: "Operador Maestro de ERP Legado",
          category: "Operaciones",
          desc: "Navega por interfaces arcaicas o emuladores de terminal para ejecutar entradas de pedidos y actualizaciones de materiales. Actúa como puente entre sistemas modernos y el núcleo corporativo antiguo."
        },
        {
          title: "Auditor de Conciliación Financiera Masiva",
          category: "Finanzas / Auditoría",
          desc: "Descarga miles de registros bancarios y los coteja contra libros auxiliares del ERP, identificando discrepancias de céntimos. Genera informes de excepciones diarios para cierre rápido."
        },
        {
          title: "Gestor de Cumplimiento Gubernamental",
          category: "Legal / Cumplimiento",
          desc: "Utiliza certificados digitales para acceder a portales de aduanas o impuestos, cargando declaraciones masivas y descargando comprobantes oficiales, asegurando cumplimiento sin errores manuales."
        },
        {
          title: "Monitor de Cadena de Suministro",
          category: "Logística",
          desc: "Supervisa 24/7 portales de transportistas marítimos/aéreos. Detecta retrasos en tiempo real, recalcula fechas de entrega en el ERP y envía alertas a producción y ventas afectados."
        },
        {
          title: "Gestor de Cobranzas y Dunning",
          category: "Finanzas / Ventas",
          desc: "Identifica facturas vencidas en ERP, analiza historial y redacta reclamos personalizados. Navega el sistema de gestión de crédito para registrar promesas de pago y programar seguimientos."
        },
        {
          title: "Procesador de Producción y Calidad (MES)",
          category: "Manufactura",
          desc: "Captura datos de calidad de terminales de planta y los ingresa en el módulo de producción del ERP. Identifica desviaciones y bloquea lotes afectados en el sistema de almacenes."
        },
        {
          title: "Orquestador de Análisis Competitivo",
          category: "Estrategia / I+D",
          desc: "Despliega múltiples sub-agentes para investigar patentes, precios y tendencias en paralelo. Sintetiza cientos de fuentes en un tablero de inteligencia estratégica para la junta directiva."
        },
        {
          title: "Auditor de Integridad de Datos Maestros",
          category: "IT / Gobernanza",
          desc: "Recorre cíclicamente bases de datos de clientes y materiales, identificando duplicados comparando entre sistemas. Navega interfaces para corregir errores y estandarizar formatos automáticamente."
        }
      ]
    }
  };

  const currentData = plansContent[activeTab];

  return (
    <div className="min-h-screen bg-white pt-24 pb-20 animate-fade-in-up font-sans">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-12 text-center pt-10 md:pt-20">
        <ScrollReveal>
          <h1 className="text-4xl md:text-7xl font-semibold tracking-tighter mb-6 text-apple-black">
            Inteligencia Aplicada.<br/>
            <span className="text-apple-gray font-normal text-3xl md:text-6xl">Casos de Uso Reales.</span>
          </h1>
        </ScrollReveal>
      </section>

      {/* Sticky Tabs Navigation */}
      <div className="sticky top-16 md:top-20 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-100 mb-16 transition-all">
        <div className="max-w-4xl mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex justify-start md:justify-center gap-8 min-w-max pb-1">
            <button
              onClick={() => { setActiveTab('executive'); window.scrollTo({top: 0, behavior: 'smooth'}); }}
              className={`py-4 text-sm md:text-base font-medium transition-all relative ${
                activeTab === 'executive' ? 'text-apple-black' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Executive Shadow
              {activeTab === 'executive' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-apple-black rounded-full animate-fade-in-up"></span>
              )}
            </button>
            <button
              onClick={() => { setActiveTab('ghost'); window.scrollTo({top: 0, behavior: 'smooth'}); }}
              className={`py-4 text-sm md:text-base font-medium transition-all relative ${
                activeTab === 'ghost' ? 'text-apple-black' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Ghost Office (Pyme)
              {activeTab === 'ghost' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-apple-black rounded-full animate-fade-in-up"></span>
              )}
            </button>
            <button
              onClick={() => { setActiveTab('pro'); window.scrollTo({top: 0, behavior: 'smooth'}); }}
              className={`py-4 text-sm md:text-base font-medium transition-all relative ${
                activeTab === 'pro' ? 'text-apple-black' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Ghost Office Pro (Enterprise)
              {activeTab === 'pro' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-apple-black rounded-full animate-fade-in-up"></span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Content */}
      <section className="max-w-7xl mx-auto px-6 mb-20 md:mb-32 min-h-[60vh]">
        <ScrollReveal key={activeTab}> {/* Key forces re-render animation */}
          
          {/* Header & Description */}
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3 block">
              {currentData.title}
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-apple-black mb-8 tracking-tight">
              {currentData.subtitle}
            </h2>
            <div className="text-lg md:text-xl text-apple-gray leading-relaxed font-light text-left md:text-center">
              {currentData.description}
            </div>
          </div>

          {/* Data Table */}
          {currentData.table && (
            <div className="mb-20 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
              <div className="bg-[#F5F5F7] px-6 py-4 border-b border-gray-200">
                <h3 className="text-sm font-bold uppercase tracking-wider text-apple-gray">
                    {currentData.table.title}
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr>
                            {currentData.table.headers.map((h, i) => (
                                <th key={i} className="px-6 py-4 text-xs font-semibold text-apple-black uppercase tracking-wider border-b border-gray-100 bg-white">
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {currentData.table.rows.map((row, i) => (
                            <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                {row.map((cell, j) => (
                                    <td key={j} className={`px-6 py-4 text-sm ${j===0 ? 'font-medium text-apple-black' : 'text-gray-600'}`}>
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                    {currentData.table.footer && (
                         <tfoot className="bg-gray-50 font-semibold text-apple-black">
                            <tr>
                                {currentData.table.footer.map((cell, i) => (
                                    <td key={i} className="px-6 py-4 text-sm border-t border-gray-200">
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                         </tfoot>
                    )}
                </table>
              </div>
            </div>
          )}

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            {currentData.cases.map((useCase, idx) => (
              <div 
                key={idx} 
                className="bg-[#F5F5F7] p-8 md:p-10 rounded-3xl hover:bg-[#E8E8ED] transition-colors duration-300 border border-transparent hover:border-gray-200/50 group h-full flex flex-col"
              >
                <div className="mb-auto">
                    <span className="inline-block px-3 py-1 rounded-md bg-white text-xs font-bold uppercase tracking-wider text-gray-500 mb-6 shadow-sm border border-gray-100">
                    {useCase.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-apple-black mb-4 group-hover:text-blue-600 transition-colors">
                    {useCase.title}
                    </h3>
                    <p className="text-apple-gray text-base md:text-lg leading-relaxed font-normal">
                    {useCase.desc}
                    </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* CTA Footer */}
      <section className="bg-black text-white py-20 px-6 rounded-none md:rounded-3xl mx-0 md:mx-6 mb-0 md:mb-12 text-center">
        <ScrollReveal>
            <h3 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight">¿Identifica su necesidad?</h3>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Estos son solo ejemplos. Su agente se configura a la medida de su flujo de trabajo específico.
            </p>
            <button 
                onClick={onRequestAgent}
                className="bg-white text-black px-10 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors transform hover:scale-105 active:scale-95"
            >
                Configurar mi Agente
            </button>
        </ScrollReveal>
      </section>

    </div>
  );
};