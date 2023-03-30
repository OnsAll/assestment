<template>
  <div
    :class="`flex items-center border-solid border ${classBackground[type]} ${classBorder[type]} py-2.5 px-5 gap-2.5 my-2.5`"
  >
    <div
      :class="`inline-flex items-bottom justify-bottom flex-shrink-0 text-yellow-500 dark:bg-orange-700 dark:text-orange-200`"
    >
      <WarningIcon v-if="type === 'warning'"></WarningIcon>
      <InfoIcon v-if="type === 'info'"></InfoIcon>
    </div>
    <div v-html="text" />
  </div>
</template>

<script setup lang="ts">
import WarningIcon from "@/components/elements/WarningIcon.vue";
import InfoIcon from "@/components/elements/InfoIcon.vue";

const classBackground: { [key: string]: string } = {
  warning: "bg-warning-100",
  info: "bg-info-100",
};
const classBorder: { [key: string]: string } = {
  warning: "border-warning-200",
  info: "border-info-200",
};
defineProps({
  type: {
    type: String,
    required: true,
  },
  text: String,
});
</script>
