<script setup lang="ts">
import { useModalStore } from "./stores/modal";
import Modal from "./components/Modal.vue";
import { storeToRefs } from "pinia";

const modalStore = useModalStore();
const { isActive } = storeToRefs(modalStore);
const { toggleModal } = modalStore;
</script>

<template>
  <!-- Modal will adapt width and height to current parent container -->
  <div
    class="flex flex-col justify-end items-center w-9/12 h-[700px] max-h-[80vh] md:w-4/6 lg:w-3/6"
  >
    <Transition name="slide-fade">
      <template v-if="isActive">
        <Modal />
      </template>
      <button
        v-else
        @click="toggleModal"
        class="absolute bg-blue-500 rounded-md p-4 text-white font-semibold"
      >
        Clic para abrir el chat modal
      </button>
    </Transition>
  </div>
</template>

<style scope>
.slide-fade-enter-active {
  transition: all 0.3s;
}

.slide-fade-leave-active {
  transition: all 0.8s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: scale(-20%);
  opacity: 0;
}
</style>

<!-- TODO: Testing componentes y funcionalidades -->
