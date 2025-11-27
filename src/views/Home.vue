<template>
    <base-template>
      <template #content>
           <!-- 右侧文档展示部分 -->
           <div class="flex flex-col gap-6 mt-4">
             <div v-for="post in posts" :key="post.slug" class="flex flex-col items-center w-[1080px] h-60 bg-white/50 backdrop-blur-md rounded-4xl overflow-hidden relative transition-transform hover:scale-[1.01]">
                <div class="w-full h-full p-6 overflow-hidden">
                  <h2 class="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">{{ post.title }}</h2>
                  <div v-html="post.content" class="prose dark:prose-invert w-full line-clamp-4"></div>
                </div>
                <div class="absolute bottom-0 w-full h-16 bg-gradient-to-t from-white/90 to-transparent flex justify-center items-end pb-3">
                  <router-link :to="{ name: 'Post', params: { slug: post.slug } }" class="text-blue-500 font-bold hover:underline z-10 bg-white/80 px-4 py-1 rounded-full shadow-sm">查看全文</router-link>
                </div>
              </div>
           </div>
      </template>
  </base-template>
 
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import MarkdownIt from 'markdown-it'
import baseTemplate from '../components/baseTemplate.vue';

const md = new MarkdownIt()
const route = useRoute()
const posts = ref([])
const allPosts = ref([]) // 存储所有文章数据

// 定义要展示的 Markdown 文件列表（文件名，不含后缀）
const files = ['git', 'tailwind', 'test', 'vue']

// 过滤文章的方法
function filterPosts() {
  const query = route.query.q
  if (!query) {
    posts.value = allPosts.value
  } else {
    const lowerQuery = query.toLowerCase()
    posts.value = allPosts.value.filter(post => 
      post.title.toLowerCase().includes(lowerQuery) || 
      post.content.toLowerCase().includes(lowerQuery)
    )
  }
}

// 监听路由参数变化，实时搜索
watch(() => route.query.q, () => {
  filterPosts()
})

onMounted(async () => {
  const promises = files.map(async (slug) => {
    try {
      const res = await fetch(`/md/${slug}.md`)
      if (!res.ok) return null
      const text = await res.text()
      
      // 尝试提取第一行作为标题（如果以 # 开头）
      const titleMatch = text.match(/^#\s+(.*)/)
      const title = titleMatch ? titleMatch[1] : slug
      
      // 如果提取到了标题，从正文中移除这一行，避免重复显示
      const contentText = titleMatch ? text.replace(/^#\s+.*\n?/, '') : text

      // 渲染 Markdown 内容
      const content = md.render(contentText)
      
      return {
        slug,
        title,
        content
      }
    } catch (error) {
      console.error(`加载 ${slug}.md 失败:`, error)
      return null
    }
  })

  // 等待所有请求完成并过滤掉失败的
  const results = await Promise.all(promises)
  allPosts.value = results.filter(p => p !== null)
  
  // 初始过滤（如果页面加载时 URL 已经有查询参数）
  filterPosts()
})
</script>


