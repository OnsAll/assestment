<template>
  <div class="grid grid-cols-4 gap-y-2.5">
    <div class="col-span-3 font-sans font-normal text-xs">
      {{ setting.description }}
    </div>
    <div class="justify-items-end">
      <RadioAnswer
        v-if="setting.type === 'radio'"
        :value="setting.default_value"
        :name="'inline-radio' + index"
      ></RadioAnswer>
      <SliderElement v-else :value="setting.default_value"> </SliderElement>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { Setting } from "@/types/CorrectionRound";
import RadioAnswer from "@/components/elements/RadioAnswer.vue";
import SliderElement from "@/components/elements/SliderElement.vue";

defineProps({ setting: Object as PropType<Setting>, index: Number });
</script>
