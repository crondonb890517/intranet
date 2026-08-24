<script lang="ts">
  import NewsSection from '$lib/components/NewsSection.svelte';
  import { newsData, newsCategories } from '$lib/data/news';
  
  let selectedCategory = 'Todos';
  let searchQuery = '';
  
  $: filteredNews = newsData.filter(news => {
    const matchesCategory = selectedCategory === 'Todos' || news.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
</script>

<svelte:head>
  <title>Noticias - NexaTrade Intranet</title>
</svelte:head>

<section class="bg-primary py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">Noticias Corporativas</h1>
    <p class="text-white/90 text-lg max-w-3xl">
      Mantente informado sobre las últimas novedades de NexaTrade: expansión, tecnología, operaciones y más.
    </p>
  </div>
</section>

<section class="py-8 bg-white border-b">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
      <!-- Category Filters -->
      <div class="flex flex-wrap gap-2">
        {#each newsCategories as category}
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
      
      <!-- Search -->
      <div class="relative w-full md:w-64">
        <input
          type="text"
          bind:value={searchQuery}
          placeholder="Buscar noticias..."
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
    {#if filteredNews.length > 0}
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each filteredNews as article}
          <article class="card group cursor-pointer">
            <div class="relative overflow-hidden">
              <img
                src={article.imageUrl}
                alt={article.title}
                class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span class="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                {article.category}
              </span>
              {#if article.featured}
                <span class="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Destacada
                </span>
              {/if}
            </div>
            <div class="p-5">
              <div class="flex items-center text-xs text-gray-500 mb-2">
                <span>{article.date}</span>
                <span class="mx-2">•</span>
                <span>{article.author}</span>
              </div>
              <h3 class="text-lg font-semibold text-carbon-black mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p class="text-gray-600 text-sm line-clamp-3 mb-4">
                {article.summary}
              </p>
              <a href="#" class="text-primary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                Leer más
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </article>
        {/each}
      </div>
    {:else}
      <div class="text-center py-16">
        <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
        <h3 class="text-xl font-semibold text-carbon-black mb-2">No se encontraron noticias</h3>
        <p class="text-gray-500">Prueba con otros filtros o términos de búsqueda</p>
      </div>
    {/if}
  </div>
</section>
