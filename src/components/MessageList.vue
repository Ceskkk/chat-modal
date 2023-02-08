<script setup lang="ts">
  import { useMessageStore } from '../stores/message'
  const { messageList } = useMessageStore()
</script>

<template>
  <div v-for="message in messageList" class="">
    {{ message }}
  </div>
</template>