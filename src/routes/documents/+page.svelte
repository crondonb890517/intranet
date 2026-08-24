<script lang="ts">
  import { documentsData, documentCategories, fileTypes } from '$lib/data/documents';
  
  let selectedCategory = 'Todos';
  let selectedFileType = 'Todos';
  let searchQuery = '';
  
  $: filteredDocuments = documentsData.filter(doc => {
    const matchesCategory = selectedCategory === 'Todos' || doc.category === selectedCategory;
    const matchesType = selectedFileType === 'Todos' || doc.fileType === selectedFileType;
    const matchesSearch = searchQuery === '' || 
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesType && matchesSearch;
  });

  function getFileIcon(type: string): string {
    switch (type) {
      case 'PDF': return '📄';
      case 'DOCX': return '📝';
      case 'XLSX': return '📊';
      case 'PPTX': return '📽️';
      default: return '📁';
    }
  }

  function simulateDownload(name: string) {
    alert(`Iniciando descarga de: ${name}`);
  }
</script>

<svelte:head>
  <title>Documentos - NexaTrade Intranet</title>
</svelte:head>

<section class="bg-primary py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">Biblioteca de Documentos</h1>
    <p class="text-white/90 text-lg max-w-3xl">
      Accede a políticas, manuales, recursos y documentación corporativa de NexaTrade.
    </p>
  </div>
</section>

<section class="py-8 bg-white border-b">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
      <!-- Category Filters -->
      <div class="flex flex-wrap gap-2">
        {#each documentCategories as category}
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
      
      <!-- Type Filter -->
      <select bind:value={selectedFileType} class="input-field w-full lg:w-auto">
        {#each fileTypes as type}
          <option value={type}>{type === 'Todos' ? 'Todos los tipos' : type}</option>
        {/each}
      </select>
      
      <!-- Search -->
      <div class="relative w-full lg:w-64">
        <input
          type="text"
          bind:value={searchQuery}
          placeholder="Buscar documentos..."
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
    {#if filteredDocuments.length > 0}
      <div class="space-y-4">
        {#each filteredDocuments as doc}
          <div class="card p-5">
            <div class="flex flex-col md:flex-row md:items-center gap-4">
              <!-- Icon -->
              <div class="flex-shrink-0 w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center text-3xl">
                {getFileIcon(doc.fileType)}
              </div>
              
              <!-- Info -->
              <div class="flex-grow min-w-0">
                <div class="flex flex-wrap items-center gap-2 mb-1">
                  <span class="text-xs font-semibold text-primary bg-red-50 px-2 py-1 rounded">{doc.category}</span>
                  <span class="text-xs font-medium text-gray-500">{doc.fileType}</span>
                </div>
                <h3 class="text-lg font-semibold text-carbon-black mb-1 truncate">{doc.name}</h3>
                <p class="text-gray-600 text-sm mb-2">{doc.description}</p>
                <div class="flex flex-wrap gap-4 text-xs text-gray-500">
                  <span>Tamaño: {doc.size}</span>
                  <span>Actualizado: {doc.updatedAt}</span>
                </div>
              </div>
              
              <!-- Actions -->
              <div class="flex gap-2 flex-shrink-0">
                <button class="btn-secondary text-sm py-2 px-4">
                  Ver
                </button>
                <button on:click={() => simulateDownload(doc.name)} class="btn-primary text-sm py-2 px-4">
                  Descargar
                </button>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div class="text-center py-16">
        <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <h3 class="text-xl font-semibold text-carbon-black mb-2">No se encontraron documentos</h3>
        <p class="text-gray-500">Prueba con otros filtros o términos de búsqueda</p>
      </div>
    {/if}
  </div>
</section>
