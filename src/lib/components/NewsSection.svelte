<script lang="ts">
  import type { NewsItem } from '$lib/data/news';

  export let news: NewsItem[] = [];
  export let limit: number = 3;
</script>

<section class="py-16 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between mb-8">
      <h2 class="text-2xl font-bold text-carbon-black">Noticias destacadas</h2>
      <a href="/news" class="text-primary hover:text-primary-dark font-medium text-sm flex items-center gap-1">
        Ver todas
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each news.slice(0, limit) as article}
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
            <p class="text-gray-600 text-sm line-clamp-3">
              {article.summary}
            </p>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
