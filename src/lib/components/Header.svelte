<script lang="ts">
  let mobileMenuOpen = false;
  let profileMenuOpen = false;
  let searchOpen = false;
  let searchQuery = '';

  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Noticias', href: '/news' },
    { name: 'Documentos', href: '/documents' },
    { name: 'Directorio', href: '/directory' },
    { name: 'Eventos', href: '/events' },
    { name: 'Recursos', href: '/resources' }
  ];

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function toggleProfileMenu() {
    profileMenuOpen = !profileMenuOpen;
  }

  function toggleSearch() {
    searchOpen = !searchOpen;
    if (searchOpen) {
      setTimeout(() => {
        document.getElementById('search-input')?.focus();
      }, 100);
    }
  }
</script>

<header class="bg-white border-b border-border-color sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <a href="/" class="flex items-center space-x-3">
        <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
          <span class="text-white font-bold text-xl">N</span>
        </div>
        <span class="text-xl font-bold text-carbon-black">NexaTrade</span>
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center space-x-1">
        {#each navItems as item}
          <a
            href={item.href}
            class="px-4 py-2 text-sm font-medium text-carbon-black hover:text-primary hover:bg-light-gray rounded-lg transition-colors"
          >
            {item.name}
          </a>
        {/each}
      </nav>

      <!-- Right Actions -->
      <div class="flex items-center space-x-3">
        <!-- Search -->
        <button
          on:click={toggleSearch}
          class="p-2 text-carbon-black hover:text-primary hover:bg-light-gray rounded-lg transition-colors"
          aria-label="Buscar"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        <!-- Notifications -->
        <button
          class="relative p-2 text-carbon-black hover:text-primary hover:bg-light-gray rounded-lg transition-colors"
          aria-label="Notificaciones"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span class="absolute top-1 right-1 w-2 h-2 bg-primary-intense rounded-full"></span>
        </button>

        <!-- Profile -->
        <div class="relative">
          <button
            on:click={toggleProfileMenu}
            class="flex items-center space-x-2 p-1 hover:bg-light-gray rounded-lg transition-colors"
            aria-label="Perfil de usuario"
          >
            <img
              src="https://picsum.photos/seed/user/40/40"
              alt="Avatar del usuario"
              class="w-8 h-8 rounded-full object-cover"
            />
            <svg class="w-4 h-4 text-carbon-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {#if profileMenuOpen}
            <div class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-border-color py-1 z-50">
              <div class="px-4 py-2 border-b border-border-color">
                <p class="text-sm font-semibold text-carbon-black">Juan Pérez</p>
                <p class="text-xs text-gray-500">juan.perez@nexatrade.com</p>
              </div>
              <a href="#" class="block px-4 py-2 text-sm text-carbon-black hover:bg-light-gray">Mi perfil</a>
              <a href="#" class="block px-4 py-2 text-sm text-carbon-black hover:bg-light-gray">Configuración</a>
              <a href="#" class="block px-4 py-2 text-sm text-primary-intense hover:bg-light-gray">Cerrar sesión</a>
            </div>
          {/if}
        </div>

        <!-- Mobile menu button -->
        <button
          on:click={toggleMobileMenu}
          class="md:hidden p-2 text-carbon-black hover:text-primary hover:bg-light-gray rounded-lg transition-colors"
          aria-label="Menú"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {#if mobileMenuOpen}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            {:else}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            {/if}
          </svg>
        </button>
      </div>
    </div>

    <!-- Search Bar -->
    {#if searchOpen}
      <div class="pb-4">
        <div class="relative">
          <input
            id="search-input"
            type="text"
            bind:value={searchQuery}
            placeholder="Buscar en la intranet..."
            class="input-field pr-10"
          />
          <button
            on:click={toggleSearch}
            class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-carbon-black"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    {/if}
  </div>

  <!-- Mobile Menu -->
  {#if mobileMenuOpen}
    <div class="md:hidden border-t border-border-color bg-white">
      <nav class="px-4 py-3 space-y-1">
        {#each navItems as item}
          <a
            href={item.href}
            class="block px-4 py-2 text-base font-medium text-carbon-black hover:text-primary hover:bg-light-gray rounded-lg transition-colors"
            on:click={() => mobileMenuOpen = false}
          >
            {item.name}
          </a>
        {/each}
      </nav>
    </div>
  {/if}
</header>

<!-- Click outside to close menus -->
{#if profileMenuOpen || mobileMenuOpen}
  <div
    class="fixed inset-0 z-40 bg-transparent"
    on:click={() => { profileMenuOpen = false; mobileMenuOpen = false; }}
  ></div>
{/if}
