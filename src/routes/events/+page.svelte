<script lang="ts">
  import { eventsData, eventTypes } from '$lib/data/events';
  
  let selectedType = 'Todos';
  
  $: filteredEvents = selectedType === 'Todos' 
    ? eventsData 
    : eventsData.filter(event => event.type === selectedType);

  function formatDate(dateStr: string): { day: string; month: string; weekday: string } {
    const date = new Date(dateStr);
    return {
      day: date.getDate().toString(),
      month: date.toLocaleString('es-ES', { month: 'long' }),
      weekday: date.toLocaleString('es-ES', { weekday: 'long' })
    };
  }

  function getStatusColor(status: string): string {
    switch (status) {
      case 'Inscripción abierta': return 'bg-green-100 text-green-700';
      case 'Completado': return 'bg-gray-100 text-gray-600';
      case 'Cancelado': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-600';
    }
  }
</script>

<svelte:head>
  <title>Eventos - NexaTrade Intranet</title>
</svelte:head>

<section class="bg-primary py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">Calendario de Eventos</h1>
    <p class="text-white/90 text-lg max-w-3xl">
      Reuniones, formaciones, ferias y actividades internas de NexaTrade.
    </p>
  </div>
</section>

<section class="py-8 bg-white border-b">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-wrap gap-2">
      {#each eventTypes as type}
        <button
          on:click={() => selectedType = type}
          class="px-4 py-2 rounded-full text-sm font-medium transition-colors {
            selectedType === type 
              ? 'bg-primary text-white' 
              : 'bg-light-gray text-carbon-black hover:bg-gray-200'
          }"
        >
          {type}
        </button>
      {/each}
    </div>
  </div>
</section>

<section class="py-12 bg-light-gray min-h-[400px]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {#if filteredEvents.length > 0}
      <div class="space-y-6">
        {#each filteredEvents as event}
          {@const formattedDate = formatDate(event.date)}
          <div class="card overflow-hidden">
            <div class="flex flex-col lg:flex-row">
              <!-- Date Block -->
              <div class="bg-primary text-white p-6 lg:w-48 flex-shrink-0 flex flex-col items-center justify-center text-center">
                <span class="text-4xl font-bold">{formattedDate.day}</span>
                <span class="text-lg uppercase">{formattedDate.month}</span>
                <span class="text-sm opacity-80 mt-1 capitalize">{formattedDate.weekday}</span>
              </div>
              
              <!-- Content -->
              <div class="p-6 flex-grow">
                <div class="flex flex-wrap items-center gap-2 mb-3">
                  <span class="text-xs font-semibold text-primary bg-red-50 px-3 py-1 rounded-full">{event.type}</span>
                  <span class="text-xs font-semibold px-3 py-1 rounded-full {getStatusColor(event.status)}">{event.status}</span>
                </div>
                
                <h2 class="text-xl font-bold text-carbon-black mb-2">{event.title}</h2>
                <p class="text-gray-600 mb-4">{event.description}</p>
                
                <div class="grid sm:grid-cols-2 gap-4 mb-4">
                  <div class="flex items-center gap-3 text-sm text-gray-600">
                    <div class="w-10 h-10 bg-light-gray rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <span class="block font-medium text-carbon-black">Hora</span>
                      <span>{event.time}</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center gap-3 text-sm text-gray-600">
                    <div class="w-10 h-10 bg-light-gray rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 0111.314 0z" />
                      </svg>
                    </div>
                    <div>
                      <span class="block font-medium text-carbon-black">Ubicación</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
                
                <div class="flex items-center gap-3 text-sm text-gray-600 mb-6">
                  <div class="w-10 h-10 bg-light-gray rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <span class="block font-medium text-carbon-black">Organizador</span>
                    <span>{event.organizer}</span>
                  </div>
                </div>
                
                {#if event.status === 'Inscripción abierta'}
                  <button class="btn-primary">
                    Inscribirse al evento
                  </button>
                {/if}
              </div>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div class="text-center py-16">
        <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <h3 class="text-xl font-semibold text-carbon-black mb-2">No hay eventos de este tipo</h3>
        <p class="text-gray-500">Prueba seleccionando otra categoría</p>
      </div>
    {/if}
  </div>
</section>
