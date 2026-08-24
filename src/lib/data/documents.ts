export interface DocumentItem {
  id: number;
  name: string;
  description: string;
  category: 'Políticas internas' | 'Manuales' | 'Recursos Humanos' | 'Compras' | 'Ventas' | 'Seguridad';
  fileType: 'PDF' | 'DOCX' | 'XLSX' | 'PPTX';
  size: string;
  updatedAt: string;
}

export const documentsData: DocumentItem[] = [
  {
    id: 1,
    name: 'Política de privacidad y protección de datos',
    description: 'Directrices sobre el tratamiento de datos personales según GDPR',
    category: 'Políticas internas',
    fileType: 'PDF',
    size: '2.4 MB',
    updatedAt: '2024-01-10'
  },
  {
    id: 2,
    name: 'Manual de procedimientos operativos',
    description: 'Guía completa de procesos y estándares de calidad',
    category: 'Manuales',
    fileType: 'PDF',
    size: '5.8 MB',
    updatedAt: '2024-01-08'
  },
  {
    id: 3,
    name: 'Guía de beneficios para empleados',
    description: 'Información detallada sobre prestaciones y ventajas laborales',
    category: 'Recursos Humanos',
    fileType: 'PDF',
    size: '1.9 MB',
    updatedAt: '2024-01-05'
  },
  {
    id: 4,
    name: 'Procedimientos de compra y aprobación',
    description: 'Flujos de trabajo para solicitudes de compra',
    category: 'Compras',
    fileType: 'DOCX',
    size: '856 KB',
    updatedAt: '2024-01-03'
  },
  {
    id: 5,
    name: 'Plantilla de propuesta comercial',
    description: 'Modelo estándar para presentaciones a clientes',
    category: 'Ventas',
    fileType: 'PPTX',
    size: '3.2 MB',
    updatedAt: '2023-12-28'
  },
  {
    id: 6,
    name: 'Protocolo de seguridad en almacenes',
    description: 'Normas de seguridad y prevención de riesgos laborales',
    category: 'Seguridad',
    fileType: 'PDF',
    size: '4.1 MB',
    updatedAt: '2023-12-20'
  },
  {
    id: 7,
    name: 'Código de conducta empresarial',
    description: 'Principios éticos y valores corporativos',
    category: 'Políticas internas',
    fileType: 'PDF',
    size: '1.5 MB',
    updatedAt: '2023-12-15'
  },
  {
    id: 8,
    name: 'Informe de ventas anual 2023',
    description: 'Resumen ejecutivo de resultados comerciales',
    category: 'Ventas',
    fileType: 'XLSX',
    size: '2.7 MB',
    updatedAt: '2023-12-10'
  }
];

export const documentCategories = ['Todos', 'Políticas internas', 'Manuales', 'Recursos Humanos', 'Compras', 'Ventas', 'Seguridad'];
export const fileTypes = ['Todos', 'PDF', 'DOCX', 'XLSX', 'PPTX'];
