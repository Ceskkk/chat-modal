<script setup lang="ts">
import { ref, onUpdated } from 'vue'
import { useMessageStore } from '../stores/message'

const { messageList } = useMessageStore()
const list = ref()

onUpdated(() => {
  list.value.scrollTop = list.value.scrollHeight;
})
</script>

<template>
  <div ref="list" class="p-4 overflow-auto max-h-80">
    <article v-for="message in messageList">
      {{ message }}
    </article>
  </div>
</template>