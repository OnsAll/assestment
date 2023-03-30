<template>
  <!-- Render in index.html `<div id="modals"></div>` -->
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div
      class="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0"
    >
      <div>
        <!-- The backdrop -->
        <div class="fixed inset-0 bg-gray-900 opacity-40"></div>

        <!-- Where the actual content goes -->
        <div class="fixed inset-0 flex items-center justify-center">
          <div
            class="bg-white text-black overflow-y-auto border-8 border-primary-200 border-t-0"
            style="height: 100vh"
          >
            <div class="text-center bg-primary-200 py-2 text-white">
              {{ title }}
            </div>
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({ title: String });
</script>
