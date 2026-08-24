export interface EventItem {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  organizer: string;
  status: 'Inscripción abierta' | 'Completado' | 'Cancelado';
  type: 'Reunión' | 'Formación' | 'Feria' | 'Actividad interna';
}

export const eventsData: EventItem[] = [
  {
    id: 1,
    title: 'Reunión trimestral de resultados',
    description: 'Presentación de resultados del cuarto trimestre y planificación para el próximo año.',
    date: '2024-02-15',
    time: '10:00 - 12:00',
    location: 'Sala de Juntas A, Madrid',
    organizer: 'María González',
    status: 'Inscripción abierta',
    type: 'Reunión'
  },
  {
    id: 2,
    title: 'Formación en nuevas tecnologías logísticas',
    description: 'Workshop práctico sobre implementación de IoT en almacenes.',
    date: '2024-02-20',
    time: '09:00 - 17:00',
    location: 'Centro de Formación, Barcelona',
    organizer: 'Carlos Rodríguez',
    status: 'Inscripción abierta',
    type: 'Formación'
  },
  {
    id: 3,
    title: 'Feria Internacional de Distribución 2024',
    description: 'Participación de NexaTrade como expositor principal en el stand B-45.',
    date: '2024-03-05',
    time: '09:00 - 19:00',
    location: 'IFEMA, Madrid',
    organizer: 'Roberto Fernández',
    status: 'Inscripción abierta',
    type: 'Feria'
  },
  {
    id: 4,
    title: 'Jornada de team building',
    description: 'Actividades de integración y convivencia para todos los departamentos.',
    date: '2024-03-15',
    time: '08:00 - 20:00',
    location: 'Finca Las Encinas, Toledo',
    organizer: 'Ana Martínez',
    status: 'Inscripción abierta',
    type: 'Actividad interna'
  },
  {
    id: 5,
    title: 'Webinar: Sostenibilidad en la cadena de suministro',
    description: 'Conferencia online sobre prácticas sostenibles en logística y distribución.',
    date: '2024-01-25',
    time: '16:00 - 17:30',
    location: 'Online',
    organizer: 'Laura Sánchez',
    status: 'Completado',
    type: 'Formación'
  }
];

export const eventTypes = ['Todos', 'Reunión', 'Formación', 'Feria', 'Actividad interna'];
