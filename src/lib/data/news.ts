export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  content: string;
  category: 'Empresa' | 'Operaciones' | 'Recursos Humanos' | 'Tecnología' | 'Sostenibilidad';
  author: string;
  date: string;
  imageUrl: string;
  featured: boolean;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: 'NexaTrade expande sus operaciones en Latinoamérica',
    summary: 'La compañía abre tres nuevos centros de distribución en México, Colombia y Chile para fortalecer su presencia en el mercado latinoamericano.',
    content: 'NexaTrade anuncia una expansión estratégica en Latinoamérica con la apertura de tres nuevos centros de distribución. Esta inversión refleja nuestro compromiso con el crecimiento sostenible y la mejora del servicio a nuestros clientes en la región.',
    category: 'Empresa',
    author: 'María González',
    date: '2024-01-15',
    imageUrl: 'https://picsum.photos/seed/news1/800/400',
    featured: true
  },
  {
    id: 2,
    title: 'Nuevo sistema de gestión logística implementado con éxito',
    summary: 'La digitalización de procesos reduce un 30% los tiempos de entrega y mejora la trazabilidad de pedidos.',
    content: 'El nuevo sistema de gestión logística ha sido implementado exitosamente en todas nuestras instalaciones. Los resultados iniciales muestran una reducción del 30% en los tiempos de entrega y una mejora significativa en la trazabilidad de pedidos.',
    category: 'Tecnología',
    author: 'Carlos Rodríguez',
    date: '2024-01-12',
    imageUrl: 'https://picsum.photos/seed/news2/800/400',
    featured: true
  },
  {
    id: 3,
    title: 'Programa de formación continua para empleados',
    summary: 'Lanzamos una iniciativa de desarrollo profesional con más de 50 cursos disponibles para todo el personal.',
    content: 'NexaTrade lanza un ambicioso programa de formación continua que incluye más de 50 cursos en diversas áreas: liderazgo, habilidades técnicas, idiomas y bienestar. Todos los empleados tienen acceso gratuito a esta plataforma de aprendizaje.',
    category: 'Recursos Humanos',
    author: 'Ana Martínez',
    date: '2024-01-10',
    imageUrl: 'https://picsum.photos/seed/news3/800/400',
    featured: false
  },
  {
    id: 4,
    title: 'Récord histórico en ventas del cuarto trimestre',
    summary: 'Los resultados superan las expectativas con un crecimiento del 25% respecto al año anterior.',
    content: 'El cuarto trimestre cierra con cifras récord en ventas, superando las expectativas iniciales. El crecimiento del 25% respecto al año anterior se debe principalmente a la expansión de nuestra cartera de clientes y la optimización de procesos comerciales.',
    category: 'Operaciones',
    author: 'Roberto Fernández',
    date: '2024-01-08',
    imageUrl: 'https://picsum.photos/seed/news4/800/400',
    featured: true
  },
  {
    id: 5,
    title: 'Compromiso de sostenibilidad: reducción de huella de carbono',
    summary: 'NexaTrade se compromete a reducir sus emisiones en un 40% para 2030 mediante iniciativas verdes.',
    content: 'Como parte de nuestro compromiso con el medio ambiente, NexaTrade ha anunciado un plan integral para reducir su huella de carbono en un 40% antes de 2030. Las iniciativas incluyen flota eléctrica, energías renovables y programas de reciclaje.',
    category: 'Sostenibilidad',
    author: 'Laura Sánchez',
    date: '2024-01-05',
    imageUrl: 'https://picsum.photos/seed/news5/800/400',
    featured: false
  },
  {
    id: 6,
    title: 'Alianza estratégica con proveedores locales',
    summary: 'Fortalecemos nuestra red de suministro con acuerdos que benefician a empresas de la región.',
    content: 'NexaTrade establece alianzas estratégicas con más de 50 proveedores locales, fortaleciendo la economía regional y garantizando un suministro más eficiente y sostenible. Estos acuerdos incluyen condiciones preferentes y programas de desarrollo conjunto.',
    category: 'Empresa',
    author: 'Pedro Jiménez',
    date: '2024-01-03',
    imageUrl: 'https://picsum.photos/seed/news6/800/400',
    featured: false
  }
];

export const newsCategories = ['Todos', 'Empresa', 'Operaciones', 'Recursos Humanos', 'Tecnología', 'Sostenibilidad'];
