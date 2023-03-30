<template>
  <div class="font-sans text-base text-left font-normal mb-5">
    <label>Correction round settings</label>
  </div>
  <div class="grid gap-2.5">
    <SettingItem
      v-for="(setting, index) in settings"
      :setting="setting"
      :key="index"
      :index="index"
    ></SettingItem>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Setting } from "@/types/CorrectionRound";
import SettingItem from "@/components/settings/SettingItem.vue";

const settings = ref<Setting[]>([
  {
    description: "Anonymous correction round",
    type: "radio",
    default_value: "no",
  },
  {
    description: "Show scores and feedback from previous correction rounds",
    type: "radio",
    default_value: "no",
  },
  {
    description:
      "Previous correction rounds must be completed before this one can start",
    type: "radio",
    default_value: "no",
  },
  {
    description: "After checking, the score and feedback can be edited",
    type: "radio",
    default_value: "no",
  },
  {
    description:
      "The result and grade will be updated based on this correction round",
    type: "radio",
    default_value: "yes",
  },
  {
    description:
      "Deadline, the number of days within which the result has to be checked after submission",
    type: "slider",
    default_value: "14",
  },
]);
</script>
