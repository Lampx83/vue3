<template>
  <section class="flex w-full flex-wrap">
    <div class="m-auto">
      <h1 class="text-2xl my-5">Re-usable Modal</h1>
      <ModalComp v-if="isRedModalOpen" @close="isRedModalOpen = false">
        <template #title> Red Title </template>
        <template #body>
          <p>This is the body slot</p>
        </template>
      </ModalComp>
      <button class="border rounded px-2 mx-4 bg-red-500" @click="isRedModalOpen = true">Red Modal</button>

      <ModalComp v-if="isBlueModalOpen" @close="isBlueModalOpen = false">
        <template #title> Blue Title </template>
        <template #body>
          <p>This is the body slot</p>
        </template>
      </ModalComp>
      <button class="border rounded px-2 mx-4 bg-blue-500" @click="isBlueModalOpen = true">Blue Modal</button>
    </div>
  </section>
</template>

<script>
import ModalComp from "../components/ModalComp";
import { ref } from "vue";
export default {
  components: { ModalComp },
  setup() {
    const isRedModalOpen = ref(false);
    const isBlueModalOpen = ref(false);
    return { isRedModalOpen, isBlueModalOpen };
  },
};
</script>

<style>
</style>