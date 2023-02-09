<script setup lang="ts">
  import { ref, onMounted, onUpdated } from 'vue'
  import { useMessageStore } from '../stores/message'
  import Message from './Message.vue'

  const { messageList } = useMessageStore()
  const list = ref()

  const scrollBottom = () => {
    list.value.scrollTop = list.value.scrollHeight
  }

  onMounted(() => {
    scrollBottom()
  })

  onUpdated(() => {
    scrollBottom()
  })

</script>

<template>
  <div ref="list" class="p-4 overflow-auto max-h-80 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-200">
    <article v-for="message in messageList">
      <Message :message="message" />
    </article>
  </div>
</template>