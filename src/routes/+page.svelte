<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import QuickAccess from '$lib/components/QuickAccess.svelte';
  import NewsSection from '$lib/components/NewsSection.svelte';
  import MetricsSection from '$lib/components/MetricsSection.svelte';
  import EventsSection from '$lib/components/EventsSection.svelte';
  import AnnouncementsSection from '$lib/components/AnnouncementsSection.svelte';
  import FrequentResources from '$lib/components/FrequentResources.svelte';
  
  import { newsData } from '$lib/data/news';
  import { eventsData } from '$lib/data/events';
</script>

<svelte:head>
  <title>Inicio - NexaTrade Intranet</title>
  <meta name="description" content="Portal interno de NexaTrade para empleados" />
</svelte:head>

<Hero />
<QuickAccess />
<NewsSection news={newsData} limit={3} />
<MetricsSection />
<EventsSection events={eventsData} limit={3} />
<AnnouncementsSection />
<FrequentResources />
