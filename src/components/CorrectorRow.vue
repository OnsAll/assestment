<template>
  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
    <td class="px-6 py-2">
      {{ corrector?.name }}
    </td>
    <td class="px-6 py-2">
      {{ corrector?.role }}
    </td>
    <td class="px-6 py-2">
      {{ corrector?.group }}
    </td>
    <td class="px-6 py-2">
      <ButtonElement
        v-if="!selected"
        :label="'Select this corrector'"
        :background-color="'primary'"
        @click="selectCorrector(corrector)"
      ></ButtonElement>
      <ButtonElement
        v-else
        :background-color="'danger'"
        :label="'Remove'"
        @click="selectCorrector(undefined)"
      ></ButtonElement>
    </td>
  </tr>
</template>

<script setup lang="ts">
import ButtonElement from "@/components/elements/ButtonElement.vue";
import { PropType } from "vue";
import { Corrector } from "@/types/CorrectionRound";

defineProps({
  corrector: Object as PropType<Corrector>,
  selected: Boolean,
});
const emit = defineEmits(["selectCorrector"]);

function selectCorrector(corrector: Corrector | undefined) {
  emit("selectCorrector", corrector);
}
</script>
