<script setup lang="ts">
import { ref, computed } from 'vue';

const msg = ref('Hello, World')
const isTextRed = ref(true);
const isBgColorBlue = ref(false);
const styles = ref({
  textColorRed: false,
  bgColorBlue: true,
});
const computedStyles = computed((): {
  textColorRed: boolean;
  bgColorBlue: boolean;
} => ({
    textColorRed: Boolean(Math.round(Math.random())),
    bgColorBlue: Boolean(Math.round(Math.random())),
}));
</script>

<template>
  <p :class="{ textColorRed: true, bgColorBlue: true }">
    {{ msg }}
  </p>
  <p :class="{ textColorRed: isTextRed, bgColorBlue: isBgColorBlue }">
    {{ msg }}
  </p>
  <p :class="{ textColorPink: true }">
    {{ msg }}
  </p>
  <p :class="{ 'text-color-pink': true }">
    {{ msg }}
  </p>
  <p class="textSize24" :class="{ textColorRed: isTextColorRed, bgColorBlue: isBgColorBlue }">
    {{ msg }}
  </p>
  <p class="textSize24" :class="styles">
    {{ msg }}
  </p>
  <p :class="computedStyles">
    {{ msg }}
  </p>
</template>

<style>
.textColorRed {
  color: red;
}
.text-color-pink {
  color: pink;
}
.bgColorBlue {
  background-color: blue;
}
.textSize24 {
  font-size: 24px;
}
</style>