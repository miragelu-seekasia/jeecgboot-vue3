<template>
  <PageWrapper>
    <div class="flex">
      <div class="lg:w-1/3 w-1/2 bg-white p-4">
        <div class="flex">
          <BasicForm @register="register" />
        </div>
        <hr class="my-4" />

        <a-button type="primary" block class="mt-4" @click="handleSubmit"> Submit </a-button>
      </div>

      <div class="lg:w-2/3 w-1/2 bg-white ml-4 p-4">
        <span class="text-lg font-medium mr-4"> 消息记录: </span>
        <hr class="my-4" />

        <div class="max-h-100 overflow-auto" style="overflow-x: hidden; word-break: break-all">
          <ul>
            <li v-for="item in getList" class="mt-2" :key="item.time">
              <div class="flex items-center">
                <span class="mr-2 text-primary font-medium w-86">[{{ formatToDateTime(item.time) }}]</span>
                <span>{{ item.res }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { PageWrapper } from '/@/components/Page';
  import { defineComponent, reactive, computed } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { baseSetschemas } from './data';
  import { formatToDateTime } from '/@/utils/dateUtil';

  export default defineComponent({
    components: {
      BasicForm,
      PageWrapper,
    },
    setup() {
      const state = reactive([] as { time: number; res: string }[]);
      const [register, { validate }] = useForm({
        labelWidth: 80,
        schemas: baseSetschemas,
        showActionButtonGroup: false,
      });
      async function handleSubmit() {
        try {
          let values = await validate();
          // console.log('values', values);
          state.unshift({
            time: Date.now(),
            res: 'submit: ' + JSON.stringify(values),
          });
        } catch (e) {
          console.log('e', e);
        }
      }
      const getList = computed(() => {
        return state;
      });

      return {
        register,
        handleSubmit,
        formatToDateTime,
        getList,
      };
    },
  });
</script>
