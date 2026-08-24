<script lang="ts">
  import { employeesData, departments } from '$lib/data/employees';
  
  let selectedDepartment = 'Todos';
  let searchQuery = '';
  
  $: filteredEmployees = employeesData.filter(emp => {
    const matchesDepartment = selectedDepartment === 'Todos' || emp.department === selectedDepartment;
    const matchesSearch = searchQuery === '' || 
      emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDepartment && matchesSearch;
  });
</script>

<svelte:head>
  <title>Directorio - NexaTrade Intranet</title>
</svelte:head>

<section class="bg-primary py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">Directorio de Empleados</h1>
    <p class="text-white/90 text-lg max-w-3xl">
      Encuentra y contacta con tus compañeros de NexaTrade.
    </p>
  </div>
</section>

<section class="py-8 bg-white border-b">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
      <!-- Department Filters -->
      <div class="flex flex-wrap gap-2">
        {#each departments as dept}
          <button
            on:click={() => selectedDepartment = dept}
            class="px-4 py-2 rounded-full text-sm font-medium transition-colors {
              selectedDepartment === dept 
                ? 'bg-primary text-white' 
                : 'bg-light-gray text-carbon-black hover:bg-gray-200'
            }"
          >
            {dept}
          </button>
        {/each}
      </div>
      
      <!-- Search -->
      <div class="relative w-full md:w-64">
        <input
          type="text"
          bind:value={searchQuery}
          placeholder="Buscar empleado..."
          class="input-field pl-10"
        />
        <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  </div>
</section>

<section class="py-12 bg-light-gray min-h-[400px]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {#if filteredEmployees.length > 0}
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {#each filteredEmployees as employee}
          <div class="card overflow-hidden group">
            <div class="aspect-square overflow-hidden bg-light-gray">
              <img
                src={employee.avatarUrl}
                alt={employee.name}
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="p-5">
              <h3 class="text-lg font-semibold text-carbon-black mb-1">{employee.name}</h3>
              <p class="text-primary font-medium text-sm mb-3">{employee.position}</p>
              
              <div class="space-y-2 text-sm text-gray-600">
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span class="truncate">{employee.department}</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 0111.314 0z" />
                  </svg>
                  <span class="truncate">{employee.location}</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:{employee.email}" class="truncate hover:text-primary">{employee.email}</a>
                </div>
              </div>
              
              <div class="mt-4 pt-4 border-t border-border-color flex gap-2">
                <a
                  href="mailto:{employee.email}"
                  class="flex-1 btn-primary text-center text-sm py-2"
                >
                  Contactar
                </a>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div class="text-center py-16">
        <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <h3 class="text-xl font-semibold text-carbon-black mb-2">No se encontraron empleados</h3>
        <p class="text-gray-500">Prueba con otros filtros o términos de búsqueda</p>
      </div>
    {/if}
  </div>
</section>
