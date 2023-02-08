<script setup lang="ts">
import { FileMessage } from '../types/types';
const props = defineProps<{ message: FileMessage }>()
</script>

<template>
  <div>
    {{ props.message }}
  </div>
</template>