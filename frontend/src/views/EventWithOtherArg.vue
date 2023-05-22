<script setup lang="ts">
import { ref } from 'vue';

const pMsg = ref('イベント前（ここをクリック！）');
const pBgColorEvent = ref('white');
const onPClickWithEvent = (bgColor: string, event: MouseEvent): void => {
  pBgColorEvent.value = bgColor;
  pMsg.value = event.timeStamp.toString();
}

</script>

<template>
  <p
    @click="onPClickWithEvent('green', $event)"
    :style="{ backgroundColor: pBgColorEvent }"
  >{{ pMsg }}</p>
</template>
