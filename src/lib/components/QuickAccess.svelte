<script lang="ts">
  interface QuickAccessItem {
    title: string;
    icon: string;
    href: string;
    color: string;
  }

  const quickAccessItems: QuickAccessItem[] = [
    { title: 'Solicitar vacaciones', icon: '🏖️', href: '#', color: 'bg-blue-50' },
    { title: 'Consultar nómina', icon: '💰', href: '#', color: 'bg-green-50' },
    { title: 'Abrir incidencia', icon: '🔧', href: '#', color: 'bg-orange-50' },
    { title: 'Descargar documentos', icon: '📁', href: '/documents', color: 'bg-purple-50' },
    { title: 'Ver directorio', icon: '👥', href: '/directory', color: 'bg-pink-50' },
    { title: 'Consultar eventos', icon: '📅', href: '/events', color: 'bg-yellow-50' }
  ];
</script>

<section class="py-12 bg-light-gray">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-2xl font-bold text-carbon-black mb-8 text-center">Accesos rápidos</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {#each quickAccessItems as item}
        <a
          href={item.href}
          class="{item.color} p-6 rounded-xl hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center group"
        >
          <span class="text-4xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</span>
          <span class="text-sm font-medium text-carbon-black text-center">{item.title}</span>
        </a>
      {/each}
    </div>
  </div>
</section>
