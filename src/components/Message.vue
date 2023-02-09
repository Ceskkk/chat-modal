<script setup lang="ts">
import { isFile, isText } from '../guards/guards'
import { FileMessage, TextMessage } from '../types/types'
const props = defineProps<{ message: FileMessage | TextMessage }>()

  // If login exists we can check if it matches current user
  const isCurrentUser = () => {
    return isText(props.message) && props.message.userId === 0
  }

  const textStyle = isCurrentUser() 
  ? 'flex-row-reverse self-end before:bg-blue-500 before:right-[50px]' 
  : 'before:bg-gray-200 before:left-[50px]'

  const textParagraphStyle = isCurrentUser() 
  ? 'bg-blue-500 text-white' 
  : 'bg-gray-200'

</script>

<template>
  <article v-if="isFile(props.message)" class="relative border-y-2 border-gray-200 py-4 px-4 mb-4 first:border-t-0 first:pt-0">
    <h2 class="text-md font-bold">VERSIÓN {{ props.message.version }}</h2>
    <h3 class="text-md font-bold text-blue-500">{{ props.message.title }}</h3>
    <h4 class="font-semibold">
      Documento / {{ props.message.fileType }} 
      ( {{ props.message.fileWeight }} MB)
      &nbsp;
      {{ props.message.date }}
    </h4>
    <div>
      <a :href="props.message.link">
        <img src="../assets/cloud-download-icon.svg" alt="Cloud download icon" class="absolute top-2/4 right-4 translate-y-[-50%] w-10" />
      </a>
    </div>
  </article>
  <article v-if="isText(props.message)" 
    :class="`${textStyle} flex items-center relative gap-4 mb-4 max-w-[85%] before:content-[''] before:w-5 before:h-5 before:absolute before:top-2/4 before:rotate-45 before:translate-y-[-50%]`"
  >
      <img :src="props.message.profileImage" :alt="`Image of user with id: ${props.message.userId}`"
      class="w-10 rounded-full" />
      <div :class="`p-4 bg-gray-200 ${textParagraphStyle}`">
        <p class="font-semibold w-full break-all">{{ props.message.body }}</p>
        <small class="font-normal">{{ props.message.date }}</small>
      </div>
  </article>
</template>