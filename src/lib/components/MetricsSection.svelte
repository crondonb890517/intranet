<script lang="ts">
  interface Metric {
    label: string;
    value: string;
    change: string;
    positive: boolean;
    icon: string;
  }

  export let metrics: Metric[] = [
    { label: 'Ventas del mes', value: '€2.4M', change: '+12%', positive: true, icon: '📈' },
    { label: 'Nuevos clientes', value: '156', change: '+8%', positive: true, icon: '👥' },
    { label: 'Pedidos procesados', value: '3,847', change: '+15%', positive: true, icon: '📦' },
    { label: 'Satisfacción interna', value: '94%', change: '+2%', positive: true, icon: '⭐' }
  ];
</script>

<section class="py-12 bg-carbon-black">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {#each metrics as metric}
        <div class="text-center p-6">
          <span class="text-4xl mb-3 block">{metric.icon}</span>
          <p class="text-3xl md:text-4xl font-bold text-white mb-1">{metric.value}</p>
          <p class="text-gray-400 text-sm mb-2">{metric.label}</p>
          <span class="inline-flex items-center text-sm {metric.positive ? 'text-green-400' : 'text-red-400'}">
            {metric.change}
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={metric.positive ? "M13 7h8m0 0v8m0-8l-8 8-4-4M6 17a4 4 0 11-8 0 4 4 0 018 0z" : "M13 17h8m0 0V9m0 8l-8-8-4 4M6 17a4 4 0 11-8 0 4 4 0 018 0z"} />
            </svg>
          </span>
        </div>
      {/each}
    </div>
  </div>
</section>
