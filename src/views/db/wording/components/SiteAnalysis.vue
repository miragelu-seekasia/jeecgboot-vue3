<template>
  <Card :tab-list="tabListTitle" v-bind="$attrs" :active-tab-key="activeKey" @tabChange="onTabChange">
    <p v-if="activeKey === 'tab1'"> 1 </p>
    <p v-if="activeKey === 'tab2'"> 2 </p>
  </Card>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { Card } from 'ant-design-vue';

  const activeKey = ref('tab1');

  const tabListTitle = [
    {
      key: 'tab1',
      tab: '流量趋势',
    },
    {
      key: 'tab2',
      tab: '访问量',
    },
  ];

  function onTabChange(key) {
    activeKey.value = key;
  }
</script>
