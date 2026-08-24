<script lang="ts">
  import { resourcesData, resourceCategories } from '$lib/data/resources';
  
  let selectedCategory = 'Todos';
  
  $: filteredResources = selectedCategory === 'Todos' 
    ? resourcesData 
    : resourcesData.filter(resource => resource.category === selectedCategory);
</script>

<svelte:head>
  <title>Recursos - NexaTrade Intranet</title>
</svelte:head>

<section class="bg-primary py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">Recursos y Herramientas</h1>
    <p class="text-white/90 text-lg max-w-3xl">
      Accede a todas las herramientas y recursos corporativos de NexaTrade.
    </p>
  </div>
</section>

<section class="py-8 bg-white border-b">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-wrap gap-2">
      {#each resourceCategories as category}
        <button
          on:click={() => selectedCategory = category}
          class="px-4 py-2 rounded-full text-sm font-medium transition-colors {
            selectedCategory === category 
              ? 'bg-primary text-white' 
              : 'bg-light-gray text-carbon-black hover:bg-gray-200'
          }"
        >
          {category}
        </button>
      {/each}
    </div>
  </div>
</section>

<section class="py-12 bg-light-gray min-h-[400px]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {#if filteredResources.length > 0}
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {#each filteredResources as resource}
          <div class="card p-6 group hover:border-primary transition-colors">
            <div class="text-5xl mb-4">{resource.icon}</div>
            <h3 class="text-lg font-semibold text-carbon-black mb-2 group-hover:text-primary transition-colors">
              {resource.name}
            </h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-2">
              {resource.description}
            </p>
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-primary bg-red-50 px-2 py-1 rounded">
                {resource.category}
              </span>
              <a
                href={resource.url}
                class="text-primary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
              >
                Acceder
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div class="text-center py-16">
        <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
        <h3 class="text-xl font-semibold text-carbon-black mb-2">No hay recursos en esta categoría</h3>
        <p class="text-gray-500">Prueba seleccionando otra categoría</p>
      </div>
    {/if}
  </div>
</section>
