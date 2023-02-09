<script setup lang="ts">
import { ref } from "vue";
import { useModalStore } from "../stores/modal";
import { useMessageStore } from "../stores/message";
import MessageList from "./MessageList.vue";

const { toggleModal } = useModalStore();

const { addText } = useMessageStore();
const text = ref("");

const handleClose = () => {
  toggleModal();
};

const handleSend = (e: Event) => {
  e.preventDefault();
  addText(text.value);
  text.value = "";
};
</script>

<template>
  <section
    id="modal"
    class="flex flex-col w-full h-full min-h-[inherit] border-black border-2 rounded-md"
  >
    <header class="relative border-black border-b-2 p-4">
      <h1 class="text-2xl font-bold text-center">Chat</h1>
      <img
        src="../assets/close-icon.svg"
        alt="Close icon"
        class="absolute right-4 top-2/4 w-8 translate-y-[-50%] cursor-pointer"
        @click="handleClose"
      />
    </header>
    <MessageList />
    <footer class="border-gray-300 border-t-2 p-4 mt-auto">
      <form class="flex w-full gap-4" @submit="handleSend">
        <input
          v-model="text"
          autocomplete="off"
          type="text"
          name="text"
          required
          placeholder="Write a message here"
          class="bg-gray-200 border-gray-300 border-2 rounded-2xl py-1 px-4 w-full focus:outline-blue-500"
        />
        <button
          class="flex justify-center items-center cursor-pointer rounded-full bg-blue-500 w-[36px] hover:shadow-sm hover:shadow-cyan-500 active:bg-blue-300"
        >
          <img src="../assets/send-icon.svg" alt="Send icon" class="w-5" />
        </button>
      </form>
    </footer>
  </section>
</template>
