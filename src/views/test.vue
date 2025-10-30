<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors">
    <button @click="toggleDarkMode" class="px-6 py-3 rounded-xl bg-gray-200 dark:bg-gray-700">
      切换暗黑模式
    </button>
    <h1 class="text-4xl mt-8">暗黑模式测试</h1>
  </div>
</template>
<script setup>
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark')
}
</script>