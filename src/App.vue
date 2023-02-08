<script setup lang="ts">
  import { useMessageStore } from './stores/message'
  const { messageList } = useMessageStore()
</script>

<template>
  <h1 class="text-2xl font-bold">Chat Modal App</h1>
  <li v-for="message in messageList">
    {{ message }}
  </li>
</template>
