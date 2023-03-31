<template>
  <div>
    <BannerBox
      :type="!selectedCorrector ? 'warning' : 'info'"
      :text="getBannerText()"
    ></BannerBox>
    <div class="bg-primary-100 overflow-y-auto p-2" style="max-height: 300px">
      <div class="border border-dark-gray bg-white">
        <div class="border-b border-dark-gray mx-5 py-2">
          <p class="font-normal text-sm text-dark-gray">All correctors</p>
        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="px-6 py-3">Name</th>
                <th scope="col" class="px-6 py-3">Role</th>
                <th scope="col" class="px-6 py-3">Group</th>
                <th scope="col" class="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <template v-if="!selectedCorrector">
                <CorrectorRow
                  v-for="(corrector, index) in correctors"
                  :key="index"
                  :corrector="corrector"
                  @selectCorrector="selectCorrector"
                ></CorrectorRow>
              </template>
              <CorrectorRow
                v-else
                :corrector="selectedCorrector"
                :selected="true"
                @selectCorrector="selectCorrector"
              ></CorrectorRow>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BannerBox from "@/components/elements/BannerBox.vue";
import { ref } from "vue";
import { Corrector } from "@/types/CorrectionRound";
import CorrectorRow from "@/components/CorrectorRow.vue";
import { CORRECTORS } from "@/constants";

const selectedCorrector = ref<Corrector | null>();
const correctors = ref<Corrector[]>(CORRECTORS);

function selectCorrector(corrector: Corrector | null) {
  selectedCorrector.value = corrector;
}
function getBannerText(): string {
  return selectedCorrector.value
    ? `Correction distribution is assigned to: <b>${selectedCorrector.value?.name}</b>. You don’t need to specify anything else.`
    : "Please select a corrector from the list below in order to assign your correction distribution.";
}
</script>
