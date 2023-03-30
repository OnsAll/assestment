<template>
  <button
    type="button"
    :class="`bg-white py-2 px-4 rounded ${classText[backgroundColor]} border-solid border ${classBorder[backgroundColor]}`"
    @click="action()"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
  backgroundColor: {
    type: String,
    required: true,
  },
});

const classText: { [key: string]: string } = {
  primary: "text-primary-200",
  danger: "text-danger",
  info: "text-info-200",
};
const classBorder: { [key: string]: string } = {
  primary: "border-primary-200",
  danger: "border-danger",
  info: "border-info-200",
};

const emit = defineEmits(["click"]);
function action() {
  emit("click");
}
</script>
