<script setup lang="ts">
  import { useMessageStore } from '../stores/message'
  const { messageList } = useMessageStore()
</script>

<template>
  <div class="p-4">
    <article v-for="message in messageList">
      {{ message }}
    </article>
  </div>
</template>