<script lang="ts">
  export let title: string = 'Conectamos personas, productos y oportunidades';
  export let subtitle: string = 'Tu portal central para la colaboración interna, recursos corporativos y comunicación en NexaTrade';
</script>

<section class="bg-primary relative overflow-hidden">
  <!-- Decorative pattern -->
  <div class="absolute inset-0 opacity-10">
    <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hero-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" fill="white" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-pattern)" />
    </svg>
  </div>
  
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
        {title}
      </h1>
      <p class="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10">
        {subtitle}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/resources" class="btn-secondary">
          Explorar recursos
        </a>
        <a href="/news" class="bg-white hover:bg-light-gray text-primary font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
          Ver noticias
        </a>
      </div>
    </div>
  </div>
  
  <!-- Bottom wave decoration -->
  <div class="absolute bottom-0 left-0 right-0">
    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-16 md:h-20">
      <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F3F3F3"/>
    </svg>
  </div>
</section>
