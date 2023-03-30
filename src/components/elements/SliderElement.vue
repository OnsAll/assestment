<template>
  <div class="w-3/5">
    <Slider v-model="selectedValue" />
  </div>
  <div class="p-2.5">
    <input
      type="number"
      class="border border-gray-300 rounded-lg w-2/5 p-1"
      v-model="selectedValue"
    />
  </div>
</template>

<script setup lang="ts">
import Slider from "@vueform/slider";
import { ref } from "vue";

const props = defineProps({ value: { type: String, required: true } });

const selectedValue = ref(parseInt(props.value));
</script>
<style src="@vueform/slider/themes/default.css"></style>
