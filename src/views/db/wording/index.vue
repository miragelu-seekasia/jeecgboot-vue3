<template>
  <div class="p-4">
    <SiteAnalysis class="!my-4 enter-y" :loading="loading" />
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import SiteAnalysis from './components/SiteAnalysis.vue';

  const loading = ref(true);

  setTimeout(() => {
    loading.value = false;
  }, 500);
</script>
