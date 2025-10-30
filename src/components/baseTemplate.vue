<template>
    <div class="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <img src="/public/picture/2.png" alt="首页背景" class="fixed inset-0 w-full h-full object-cover z-0 opacity-40 dark:opacity-20" />
      <div class="z-10">
        <div class="h-20 w-full bg-white/50 dark:bg-gray-900/50 shadow-xl rounded-3xl flex items-center px-14 space-x-10">
        <div class="w-16"><img src="/public/picture/1.png" alt="网站首页图片"></div>
          
          <!-- 导航栏 -->
         <router-link to="/" class="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
           首页
         </router-link>
          <router-link to="/link" class="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            友情链接
          </router-link>
          <router-link to="/about" class="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            关于
          </router-link>
          <router-link to="/statistics" class="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            统计
          </router-link>
          
          <div class="relative ml-4 w-64">
            <!-- 输入框 -->
            <input
              type="text"
              @click="changePlaceholder"
              :placeholder="web.text"
              class="w-full pl-4 pr-10 h-10 rounded-2xl bg-gray-400/50 text-white placeholder-white focus:outline-none"
            />

            <!-- 魔法棒图标 -->
            <button class="cursor-pointer">
              <img
              src="/src/assets/picture/search.png"
              alt="搜索栏图片"
              class="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2"
            />
            </button>
          </div>
          
          <!-- 暗黑模式切换按钮 -->
          <button 
            @click="toggleDarkMode"
            class="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            :title="isDark ? '切换到亮色模式' : '切换到暗黑模式'"
          >
            <svg v-if="!isDark" class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
            </svg>
            <svg v-else class="w-5 h-5 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
          </button>

          <div @click="goToRegister"
            class="ml-auto text-center bg-green-600/70 hover:bg-green-500/50 transition-all text-black px-4 py-1 w-30 h-9  rounded-2xl cursor-pointer"
          >
            去注册
          </div>
        </div>

        <!-- 主体部分 -->
        <div class="flex w-full justify-center gap-28">
          <div class="flex flex-col">
            <!-- 个人简介 -->
            <div class="flex flex-col items-center w-64 h-[400px] bg-white/50 backdrop-blur-md rounded-3xl mt-4">
              <img src="/public/picture/1.png" alt="用户头像" class="w-25 rounded-full mt-3">
              <h1 class="font-bold text-2xl underline decoration-red-500">ilott</h1>
              <h1>Talk is cheap,show me the code</h1>
              <h2>一名普通的大二计科学生</h2>
              <div class="flex justify-center space-x-6 mt-4">
                <a href="https://github.com/Yilot-Liu" class="hover:scale-110 transition-transform">
                  <img src="/src/assets/picture/github.png" alt="github" class="w-8 h-8 cursor-pointer">
                </a>
                <a href="/src/assets/picture/wechat_friend.jpg" class="hover:scale-110 transition-transform">
                  <img src="/src/assets/picture/wechat.png" alt="wechat" class="w-8 h-8 cursor-pointer">
                </a>
                <a href="https://space.bilibili.com/397409402" class="hover:scale-110 transition-transform">
                  <img src="/src/assets/picture/bilibili.png" alt="bilibili" class="w-8 h-8 cursor-pointer">
                </a>
                <a href="https://www.nowcoder.com/users/566899302" class="hover:scale-110 transition-transform">
                  <img src="/src/assets/picture/newcoder.png" alt="nowcoder" class="w-8 h-8 cursor-pointer">
                </a>
              </div>
            </div>
            <!-- 公告 -->
            <div class="flex flex-col items-center w-64 h-60 bg-white/50 backdrop-blur-md rounded-4xl mt-4">
              <p class="border-l-4 border-red-500 pl-2 font-bold text-xl mt-3">公告</p>
            </div>
          </div>
          
          <!-- 右侧内容区域（插槽） -->
          <slot name="content">
            <!-- 默认内容 -->
            
          </slot>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import MarkdownIt from 'markdown-it'

const router = useRouter()
const htmlContent = ref('')
const md = new MarkdownIt()

const web = ref({
  text: '搜索你感兴趣的内容吧...'
})

// 暗黑模式状态
const isDark = ref(false)

// 完全手动控制的版本
function manualThemeControl() {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else {
    isDark.value = false
    document.documentElement.classList.remove('dark')
    // 确保保存为亮色模式
    localStorage.setItem('theme', 'light')
  }
}

// 切换暗黑模式
function toggleDarkMode() {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

// 加载 markdown
async function loadMarkdownContent() {
  try {
    const res = await fetch('/md/test.md')
    const text = await res.text()
    htmlContent.value = md.render(text)
  } catch (e) {
    console.error('加载 Markdown 失败：', e)
  }
}

function changePlaceholder() {
  web.value.text = '正在输入...'
}

function goToRegister() {
  router.push('/register')
}

onMounted(() => {
  loadMarkdownContent()
  // 使用完全手动控制的版本
  manualThemeControl()
  
  // 调试信息
  console.log('当前主题状态:', {
    isDark: isDark.value,
    localStorage: localStorage.getItem('theme'),
    htmlClass: document.documentElement.className
  })
})
</script>