<script setup lang="ts">
import { ref, onMounted, onUpdated } from "vue";
import { useMessageStore } from "../stores/message";
import Message from "./Message.vue";

const { messageList } = useMessageStore();
const list = ref();

const scrollBottom = () => {
  list.value.scrollTop = list.value.scrollHeight;
};

onMounted(() => {
  scrollBottom();
});

onUpdated(() => {
  scrollBottom();
});
</script>

<template>
  <div
    id="message-list"
    ref="list"
    class="flex flex-col p-4 overflow-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-200"
  >
    <template v-for="message in messageList" :key="message.id">
      <Message :message="message" />
    </template>
  </div>
</template>
