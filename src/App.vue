<script setup lang="ts">
  import { useMessageStore } from './stores/message'
  const messages = useMessageStore()
</script>

<template>
  <h1 class="text-2xl font-bold">Chat Modal App</h1>
</template>
