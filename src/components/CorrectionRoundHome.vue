<template>
  <div
    class="justify-center items-center flex align-middle"
    style="height: 100vh"
  >
    <ButtonElement
      :label="'Create correction round'"
      :backgroundColor="'info'"
      @click="showModal = true"
    />
  </div>
  <AddCorrectionRoundModal
    v-if="showModal"
    @close="close()"
  ></AddCorrectionRoundModal>
</template>
<script setup lang="ts">
import AddCorrectionRoundModal from "@/components/modals/AddCorrectionRoundModal.vue";
import { ref } from "vue";
import ButtonElement from "@/components/elements/ButtonElement.vue";
const showModal = ref(false);

function close() {
  showModal.value = false;
}
</script>
