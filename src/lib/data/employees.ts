export interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  location: string;
  email: string;
  phone: string;
  avatarUrl: string;
}

export const employeesData: Employee[] = [
  {
    id: 1,
    name: 'María González',
    position: 'Directora General',
    department: 'Dirección',
    location: 'Madrid',
    email: 'maria.gonzalez@nexatrade.com',
    phone: '+34 912 345 678',
    avatarUrl: 'https://picsum.photos/seed/emp1/200/200'
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    position: 'Director de Tecnología',
    department: 'Tecnología',
    location: 'Barcelona',
    email: 'carlos.rodriguez@nexatrade.com',
    phone: '+34 933 456 789',
    avatarUrl: 'https://picsum.photos/seed/emp2/200/200'
  },
  {
    id: 3,
    name: 'Ana Martínez',
    position: 'Responsable de Recursos Humanos',
    department: 'Recursos Humanos',
    location: 'Madrid',
    email: 'ana.martinez@nexatrade.com',
    phone: '+34 912 345 679',
    avatarUrl: 'https://picsum.photos/seed/emp3/200/200'
  },
  {
    id: 4,
    name: 'Roberto Fernández',
    position: 'Director Comercial',
    department: 'Ventas',
    location: 'Valencia',
    email: 'roberto.fernandez@nexatrade.com',
    phone: '+34 963 456 780',
    avatarUrl: 'https://picsum.photos/seed/emp4/200/200'
  },
  {
    id: 5,
    name: 'Laura Sánchez',
    position: 'Coordinadora de Sostenibilidad',
    department: 'Operaciones',
    location: 'Sevilla',
    email: 'laura.sanchez@nexatrade.com',
    phone: '+34 954 567 891',
    avatarUrl: 'https://picsum.photos/seed/emp5/200/200'
  },
  {
    id: 6,
    name: 'Pedro Jiménez',
    position: 'Jefe de Compras',
    department: 'Compras',
    location: 'Madrid',
    email: 'pedro.jimenez@nexatrade.com',
    phone: '+34 912 345 680',
    avatarUrl: 'https://picsum.photos/seed/emp6/200/200'
  },
  {
    id: 7,
    name: 'Carmen López',
    position: 'Gerente de Logística',
    department: 'Operaciones',
    location: 'Bilbao',
    email: 'carmen.lopez@nexatrade.com',
    phone: '+34 944 567 892',
    avatarUrl: 'https://picsum.photos/seed/emp7/200/200'
  },
  {
    id: 8,
    name: 'Miguel Ángel Torres',
    position: 'Responsable de Seguridad',
    department: 'Seguridad',
    location: 'Madrid',
    email: 'miguel.torres@nexatrade.com',
    phone: '+34 912 345 681',
    avatarUrl: 'https://picsum.photos/seed/emp8/200/200'
  }
];

export const departments = ['Todos', 'Dirección', 'Tecnología', 'Recursos Humanos', 'Ventas', 'Operaciones', 'Compras', 'Seguridad'];
