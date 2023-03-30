<template>
  <BaseModal title="Add new correction round">
    <div class="container p-3">
      <div style="height: 100vh">
        <div
          class="mx-auto p-4 border-solid border bg-gray-50 border-gray-200 p-3"
        >
          <SettingsList></SettingsList>
        </div>
        <div
          class="mx-auto p-4 border-solid border bg-gray-50 border-gray-200 p-3 mt-4"
        >
          <CorrectionDistribution></CorrectionDistribution>
        </div>
      </div>
      <div class="mt-6">
        <ButtonElement
          :label="'Cancel'"
          :background-color="'primary'"
          @click="close()"
        />
      </div>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from "@/components/elements/BaseModal.vue";
import SettingsList from "@/components/settings/SettingsList.vue";
import CorrectionDistribution from "@/components/CorrectionDistribution.vue";
import ButtonElement from "@/components/elements/ButtonElement.vue";

const emit = defineEmits(["close"]);

function close() {
  emit("close");
}
</script>
