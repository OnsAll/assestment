<template>
  <div class="text-left text-xl mb-3">
    <label>Correction distribution</label>
  </div>
  <p class="text-left font-light mb-3">Corrections should be assigned to:</p>
  <div>
    <ul
      class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 w-full"
    >
      <li
        v-for="(tab, index) in tabs"
        class="mr-2 flex-1"
        @click="activeTab = index"
        :key="index"
      >
        <a
          class="inline-block px-4 py-3 rounded-3xl cursor-pointer w-full"
          :class="[
            activeTab === index
              ? 'text-white bg-blue-600'
              : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white',
          ]"
          aria-current="page"
          >{{ tab }}</a
        >
      </li>
    </ul>
    <div>
      <CorrectorTable v-if="activeTab === 0"></CorrectorTable>
      <div v-if="activeTab === 1">
        <BannerBox
          :type="'info'"
          :text="'Correction distribution is assigned to: <b>Assigned to me</b>. You don’t need to specify anything else.'"
        ></BannerBox>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import CorrectorTable from "@/components/CorrectorTable.vue";
import { ref } from "vue";
import BannerBox from "@/components/elements/BannerBox.vue";
const activeTab = ref<number>(0);
const tabs = ["One corrector", "Assigned to me"];
</script>
