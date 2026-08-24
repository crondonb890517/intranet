<script lang="ts">
  import type { EventItem } from '$lib/data/events';

  export let events: EventItem[] = [];
  export let limit: number = 3;
</script>

<section class="py-16 bg-light-gray">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between mb-8">
      <h2 class="text-2xl font-bold text-carbon-black">Próximos eventos</h2>
      <a href="/events" class="text-primary hover:text-primary-dark font-medium text-sm flex items-center gap-1">
        Ver calendario
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
    
    <div class="space-y-4">
      {#each events.slice(0, limit) as event}
        <div class="card p-5 flex flex-col md:flex-row md:items-center gap-4">
          <!-- Date -->
          <div class="flex-shrink-0 bg-primary text-white rounded-lg p-4 text-center min-w-[100px]">
            <span class="block text-2xl font-bold">{new Date(event.date).getDate()}</span>
            <span class="block text-sm uppercase">{new Date(event.date).toLocaleString('es-ES', { month: 'short' })}</span>
          </div>
          
          <!-- Info -->
          <div class="flex-grow">
            <div class="flex flex-wrap items-center gap-2 mb-1">
              <span class="text-xs font-semibold text-primary bg-red-50 px-2 py-1 rounded">{event.type}</span>
              {#if event.status === 'Inscripción abierta'}
                <span class="text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded">{event.status}</span>
              {:else}
                <span class="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded">{event.status}</span>
              {/if}
            </div>
            <h3 class="text-lg font-semibold text-carbon-black mb-1">{event.title}</h3>
            <p class="text-gray-600 text-sm mb-2">{event.description}</p>
            <div class="flex flex-wrap gap-4 text-sm text-gray-500">
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {event.time}
              </span>
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 0111.314 0z" />
                </svg>
                {event.location}
              </span>
            </div>
          </div>
          
          <!-- Action -->
          <div class="flex-shrink-0">
            <a href="/events" class="btn-primary text-sm py-2 px-4 inline-block">
              Ver detalles
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
