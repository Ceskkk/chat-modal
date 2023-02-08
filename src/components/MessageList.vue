<script setup lang="ts">
import { ref, onUpdated } from 'vue'
import { useMessageStore } from '../stores/message'
import TextMessageComponent from './TextMessageComponent.vue'
import { TextMessage, FileMessage } from '../types/types'

const { messageList } = useMessageStore()
const list = ref()

onUpdated(() => {
  list.value.scrollTop = list.value.scrollHeight;
})

const isText = (props: TextMessage | FileMessage): props is TextMessage => {
  return "body" in props;
}

</script>

<template>
  <div ref="list" class="p-4 overflow-auto max-h-80 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-200">
    <article v-for="message in messageList">
      <template v-if="isText(message)">
        <TextMessageComponent :message="message" />
      </template>
      <template v-else>
        Otro
      </template>
    </article>
  </div>
</template>