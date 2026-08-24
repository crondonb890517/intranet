<script lang="ts">
  interface Announcement {
    id: number;
    title: string;
    content: string;
    priority: 'Alta' | 'Media' | 'Baja';
    date: string;
  }

  const announcements: Announcement[] = [
    {
      id: 1,
      title: 'Mantenimiento programado del sistema',
      content: 'El sábado 25 de febrero realizaremos mantenimiento en los sistemas. La intranet no estará disponible de 02:00 a 06:00.',
      priority: 'Alta',
      date: '2024-02-20'
    },
    {
      id: 2,
      title: 'Nueva política de teletrabajo',
      content: 'Consultad la actualización de la política de teletrabajo en la sección de Documentos > Recursos Humanos.',
      priority: 'Media',
      date: '2024-02-18'
    }
  ];

  function getPriorityColor(priority: string): string {
    switch (priority) {
      case 'Alta': return 'bg-red-100 text-red-700';
      case 'Media': return 'bg-yellow-100 text-yellow-700';
      case 'Baja': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  }
</script>

<section class="py-12 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-2xl font-bold text-carbon-black mb-6">Comunicados importantes</h2>
    
    <div class="space-y-4">
      {#each announcements as announcement}
        <div class="border-l-4 border-primary bg-light-gray p-5 rounded-r-lg">
          <div class="flex items-start justify-between mb-2">
            <h3 class="text-lg font-semibold text-carbon-black">{announcement.title}</h3>
            <span class="text-xs font-semibold px-2 py-1 rounded {getPriorityColor(announcement.priority)}">
              Prioridad {announcement.priority}
            </span>
          </div>
          <p class="text-gray-600 mb-3">{announcement.content}</p>
          <span class="text-xs text-gray-500">Publicado el {announcement.date}</span>
        </div>
      {/each}
    </div>
  </div>
</section>
