<template>
  <base-template>
    <template #content>
      <div class="flex flex-col items-center w-[1080px] bg-white/50 backdrop-blur-md rounded-4xl mt-4 p-6">
        <h1 class="text-2xl font-bold mb-4">文章详情</h1>
        <div v-html="htmlContent" class="prose prose-invert p-2 w-full"></div>
      </div>
    </template>
  </base-template>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import MarkdownIt from 'markdown-it'
import baseTemplate from '../components/baseTemplate.vue'

const md = new MarkdownIt()
const htmlContent = ref('')
const route = useRoute()

onMounted(async () => {
  try {
    const slug = route.params.slug || 'test'
    const res = await fetch(`/md/${slug}.md`)
    if (!res.ok) throw new Error('获取文章失败')
    const text = await res.text()
    htmlContent.value = md.render(text)
  } catch (e) {
    console.error('Load post error', e)
    htmlContent.value = '<p>加载文章失败</p>'
  }
})
</script>

<style scoped>
/* 文章页样式可按需调整 */
</style>
