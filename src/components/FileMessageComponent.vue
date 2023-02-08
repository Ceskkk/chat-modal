<script setup lang="ts">
import { TextMessage } from '../types/types';
const props = defineProps<{ message: TextMessage }>()
</script>

<template>
  {{ props.message }}
</template>