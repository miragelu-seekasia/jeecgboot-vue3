<template>
  <PageWrapper>
    <template #headerContent> <WorkbenchHeader /> </template>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import WorkbenchHeader from '../workbench/components/WorkbenchHeader.vue';
</script>
