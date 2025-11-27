
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 relative overflow-hidden">
    <!-- 背景图 -->
    <img src="/picture/bg.png" alt="背景展示图" class="fixed inset-0 w-full h-full object-cover z-0 opacity-40" />
    
    <!-- 主容器 -->
    <div class="relative bg-white rounded-[20px] shadow-2xl overflow-hidden w-[880px] max-w-full min-h-[520px] z-10"
         id="container" :class="{ 'right-panel-active': isSignUpMode }">
      
      <!-- 注册表单容器 -->
      <div class="form-container sign-up-container">
        <div class="form-content bg-white/90 backdrop-blur-sm h-full flex flex-col items-center justify-center px-10 text-center">
          <h1 class="text-3xl font-bold mb-4 text-gray-800">创建账户</h1>
          <div class="social-container mb-4">
            <!-- 这里可以放第三方登录图标 -->
          </div>
          <span class="text-sm text-gray-500 mb-4">使用邮箱注册新账号</span>
          
          <input v-model="username" type="text" placeholder="用户名" class="bg-gray-100 border-none p-3 my-2 w-full rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all text-sm" />
          <input v-model="email" type="email" placeholder="邮箱" class="bg-gray-100 border-none p-3 my-2 w-full rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all text-sm" />
          <input v-model="password" type="password" placeholder="密码" class="bg-gray-100 border-none p-3 my-2 w-full rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all text-sm" />
          <input v-model="confirmPassword" type="password" placeholder="确认密码" class="bg-gray-100 border-none p-3 my-2 w-full rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all text-sm" />
          
          <!-- 密码强度条 -->
          <div class="w-full flex items-center justify-between text-xs text-gray-500 mt-1 mb-4 px-1">
             <span>强度: {{ complexityText }}</span>
             <div class="h-1.5 w-24 bg-gray-200 rounded-full overflow-hidden">
               <div class="h-full transition-all duration-500" :class="complexityClass" :style="{ width: complexityWidth }"></div>
             </div>
          </div>

          <button @click="register" class="rounded-full border border-blue-600 bg-blue-600 text-white text-xs font-bold py-3 px-12 tracking-wider uppercase transition-transform transform active:scale-95 focus:outline-none hover:bg-blue-700 shadow-lg mt-4 cursor-pointer">立即注册</button>
        </div>
      </div>

      <!-- 登录表单容器 -->
      <div class="form-container sign-in-container">
        <div class="form-content bg-white/90 backdrop-blur-sm h-full flex flex-col items-center justify-center px-10 text-center">
          <h1 class="text-3xl font-bold mb-4 text-gray-800">欢迎回来</h1>
          <span class="text-sm text-gray-500 mb-6">使用您的账号登录</span>
          
          <input v-model="loginForm.username" type="text" placeholder="用户名" class="bg-gray-100 border-none p-3 my-2 w-full rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all text-sm" />
          <input v-model="loginForm.password" type="password" placeholder="密码" class="bg-gray-100 border-none p-3 my-2 w-full rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all text-sm" />
          
          <a href="#" class="text-xs text-gray-500 my-4 hover:text-blue-600 hover:underline">忘记密码?</a>
          
          <button @click="login" class="rounded-full border border-blue-600 bg-blue-600 text-white text-xs font-bold py-3 px-12 tracking-wider uppercase transition-transform transform active:scale-95 focus:outline-none hover:bg-blue-700 shadow-lg mt-4 cursor-pointer">登录</button>
        </div>
      </div>

      <!-- 覆盖层容器 (滑动部分) -->
      <div class="overlay-container">
        <div class="overlay bg-gradient-to-r from-blue-500 to-purple-600">
          <div class="overlay-panel overlay-left">
            <h1 class="text-3xl font-bold mb-4">已有账号?</h1>
            <p class="text-sm mb-8">请使用您的个人信息登录以保持连接</p>
            <button @click="toggleMode(false)" class="rounded-full border border-white bg-transparent text-white text-xs font-bold py-3 px-12 tracking-wider uppercase transition-transform transform active:scale-95 focus:outline-none hover:bg-white/20 cursor-pointer">去登录</button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1 class="text-3xl font-bold mb-4">你好, 朋友!</h1>
            <p class="text-sm mb-8">输入您的个人详细信息开始旅程</p>
            <button @click="toggleMode(true)" class="rounded-full border border-white bg-transparent text-white text-xs font-bold py-3 px-12 tracking-wider uppercase transition-transform transform active:scale-95 focus:outline-none hover:bg-white/20 cursor-pointer">去注册</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isSignUpMode = ref(true) // 默认为注册模式

// 注册数据
const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

// 登录数据
const loginForm = ref({
  username: '',
  password: ''
})

// 切换模式
function toggleMode(isSignUp) {
  isSignUpMode.value = isSignUp
}

// 密码复杂度逻辑
const complexity = computed(() => {
  if (!password.value) return 'null'
  if (password.value.length < 6) return 'too-short'
  if (/^[a-zA-Z]+$/.test(password.value)) return 'weak'
  if (/[A-Z]/.test(password.value) && /\d/.test(password.value)) return 'strong'
  return 'medium'
})

const complexityText = computed(() => {
  const map = { 'null': '', 'too-short': '太短', 'weak': '弱', 'medium': '中', 'strong': '强' }
  return map[complexity.value]
})

const complexityClass = computed(() => {
  const map = { 'too-short': 'bg-red-500', 'weak': 'bg-orange-400', 'medium': 'bg-yellow-400', 'strong': 'bg-green-500' }
  return map[complexity.value] || 'bg-gray-200'
})

const complexityWidth = computed(() => {
  const map = { 'null': '0%', 'too-short': '20%', 'weak': '40%', 'medium': '70%', 'strong': '100%' }
  return map[complexity.value]
})

// 注册逻辑
async function register() {
  if(password.value.length < 6){
    alert('密码长度至少6位！')
    return
  }
  if (password.value !== confirmPassword.value) {
    alert('两次密码不一致！')
    return
  }

  try {
    const response = await fetch('http://localhost:8080/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value
      })
    })
    const data = await response.json()
    if (data.code === 200) {
      alert(`注册成功，欢迎 ${username.value}！请登录`)
      toggleMode(false) // 切换到登录界面
    } else {
      alert(data.message || '注册失败')
    }
  } catch (error) {
    console.error(error)
    alert('连接服务器失败')
  }
}

// 登录逻辑 (示例)
async function login() {
  if(!loginForm.value.username || !loginForm.value.password) {
    alert('请输入用户名和密码')
    return
  }
  // 这里假设后端有 /api/login 接口，如果没有请自行调整
  try {
    // 模拟登录请求，或者替换为真实的 fetch
    // const res = await fetch('http://localhost:8080/api/login', ...)
    console.log('Login:', loginForm.value)
    alert('登录功能待后端实现，前端逻辑已就绪')
    router.push('/')
  } catch (e) {
    alert('登录失败')
  }
}

onMounted(async () => {
  // 获取建站信息 (保留原有逻辑)
  try {
    await fetch('http://localhost:3000/api/site-info')
  } catch(e) {}
})
</script>

<style scoped>
/* 滑动容器核心样式 - 使用标准 CSS */
.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

/* 激活状态下的容器移动 */
.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {
  0%, 49.99% { opacity: 0; z-index: 1; }
  50%, 100% { opacity: 1; z-index: 5; }
}

/* 覆盖层样式 */
.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.overlay {
  /* bg-gradient is handled in template via Tailwind class */
  color: white;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  padding: 0 40px;
  text-align: center;
}

.overlay-left {
  transform: translateX(-20%);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.right-panel-active .overlay-left {
  transform: translateX(0);
}

.right-panel-active .overlay-right {
  transform: translateX(20%);
}
</style>