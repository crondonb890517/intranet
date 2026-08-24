<script lang="ts">
  interface ResourceLink {
    name: string;
    href: string;
  }

  const frequentResources: ResourceLink[] = [
    { name: 'Solicitar vacaciones', href: '#' },
    { name: 'Descargar nómina', href: '#' },
    { name: 'Reservar sala de reuniones', href: '#' },
    { name: 'Pedir material de oficina', href: '#' },
    { name: 'Acceso a formación', href: '#' },
    { name: 'Reportar incidencia IT', href: '#' }
  ];
</script>

<section class="py-12 bg-light-gray">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-2xl font-bold text-carbon-black mb-6">Recursos frecuentes</h2>
    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
      {#each frequentResources as resource}
        <a
          href={resource.href}
          class="bg-white hover:bg-primary hover:text-white text-carbon-black p-4 rounded-lg border border-border-color text-center text-sm font-medium transition-colors duration-200"
        >
          {resource.name}
        </a>
      {/each}
    </div>
  </div>
</section>
