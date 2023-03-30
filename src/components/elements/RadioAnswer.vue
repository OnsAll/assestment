<template>
  <div class="flex">
    <div class="flex items-center mr-4">
      <input
        :id="name"
        type="radio"
        value="no"
        v-model="selectedValue"
        :name="name"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        :for="'inline-radio-no' + index"
        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >No</label
      >
    </div>
    <div class="flex items-center mr-4">
      <input
        :id="name"
        type="radio"
        value="yes"
        v-model="selectedValue"
        :name="name"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        :for="name"
        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Yes</label
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({ value: String, name: String });

const selectedValue = ref(props.value);
</script>
