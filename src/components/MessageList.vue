<script setup lang="ts">
import { ref, onUpdated } from 'vue'
import { isText, isFile } from '../guards/guards';
import { useMessageStore } from '../stores/message'
import FileMessageComponent from './FileMessageComponent.vue';
import TextMessageComponent from './TextMessageComponent.vue'

const { messageList } = useMessageStore()
const list = ref()

onUpdated(() => {
  list.value.scrollTop = list.value.scrollHeight;
})

</script>

<template>
  <div ref="list" class="p-4 overflow-auto max-h-80 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-200">
    <article v-for="message in messageList">
      <template v-if="isText(message)">
        <TextMessageComponent :message="message" />
      </template>
      <template v-if="isFile(message)">
        <FileMessageComponent :message="message" />
      </template>
    </article>
  </div>
</template>