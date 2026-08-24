export interface ResourceItem {
  id: number;
  name: string;
  description: string;
  category: 'Productividad' | 'Ventas' | 'Logística' | 'Finanzas' | 'Personas' | 'Soporte';
  icon: string;
  url: string;
}

export const resourcesData: ResourceItem[] = [
  {
    id: 1,
    name: 'Suite Office 365',
    description: 'Acceso a correo, calendario, Teams y aplicaciones de productividad',
    category: 'Productividad',
    icon: '📧',
    url: '#'
  },
  {
    id: 2,
    name: 'CRM Corporativo',
    description: 'Gestión de clientes, oportunidades y seguimiento comercial',
    category: 'Ventas',
    icon: '👥',
    url: '#'
  },
  {
    id: 3,
    name: 'Sistema WMS',
    description: 'Gestión de almacenes y control de inventario en tiempo real',
    category: 'Logística',
    icon: '📦',
    url: '#'
  },
  {
    id: 4,
    name: 'Portal de Finanzas',
    description: 'Consultas de facturas, gastos y reportes financieros',
    category: 'Finanzas',
    icon: '💰',
    url: '#'
  },
  {
    id: 5,
    name: 'Intranet RRHH',
    description: 'Gestión de nóminas, vacaciones y beneficios para empleados',
    category: 'Personas',
    icon: '👤',
    url: '#'
  },
  {
    id: 6,
    name: 'Helpdesk IT',
    description: 'Sistema de tickets para incidencias técnicas y soporte',
    category: 'Soporte',
    icon: '🔧',
    url: '#'
  },
  {
    id: 7,
    name: 'Plataforma E-learning',
    description: 'Cursos de formación continua y desarrollo profesional',
    category: 'Personas',
    icon: '📚',
    url: '#'
  },
  {
    id: 8,
    name: 'Dashboard de Ventas',
    description: 'Panel de indicadores comerciales y seguimiento de objetivos',
    category: 'Ventas',
    icon: '📊',
    url: '#'
  },
  {
    id: 9,
    name: 'Trazabilidad de Pedidos',
    description: 'Seguimiento en tiempo real del estado de entregas',
    category: 'Logística',
    icon: '🚚',
    url: '#'
  },
  {
    id: 10,
    name: 'Repositorio Documental',
    description: 'Archivo centralizado de documentos corporativos',
    category: 'Productividad',
    icon: '📁',
    url: '#'
  }
];

export const resourceCategories = ['Todos', 'Productividad', 'Ventas', 'Logística', 'Finanzas', 'Personas', 'Soporte'];
