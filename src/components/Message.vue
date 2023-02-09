<script setup lang="ts">
import { isFile, isText } from '../guards/guards'
import { FileMessage, TextMessage } from '../types/types'
const props = defineProps<{ message: FileMessage | TextMessage }>()
</script>

<template>
  <article v-if="isFile(props.message)" class="border-b-2 border-gray-200 pb-4 mb-4">
    <h2 class="text-md font-bold">VERSIÓN {{ props.message.version }}</h2>
    <h3 class="text-md font-bold text-blue-500">{{ props.message.title }}</h3>
    <h4 class="font-semibold">
      Documento / {{ props.message.fileType }} 
      ( {{ props.message.fileWeight }} MB)
      &nbsp;
      {{ props.message.date }}
    </h4>
  </article>
  <article v-if="isText(props.message)">
    <!-- If login exists we can check if it matches current user -->
    <!-- <div v-if="props.message.userId === 0"> -->
      <img :src="props.message.profileImage" :alt="`Image of user with id: ${props.message.userId}`" />
      <div></div>
  </article>
</template>