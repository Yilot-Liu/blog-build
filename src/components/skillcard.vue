<!-- src/components/SkillCard.vue -->
<template>
  <div class="bg-white rounded-xl p-4 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-blue-50">
    <div class="flex items-center mb-3">
      <img :src="icon" :alt="title" class="w-12 h-12 mr-3">
      <h3 class="text-xl font-bold">{{ title }}</h3>
    </div>
    <p>{{ description }} <span>{{ extra }}</span></p>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  extra: {
    type: String,
    default: ''
  }
})
</script>