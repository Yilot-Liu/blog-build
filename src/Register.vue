
<template>
  <div class="min-h-screen  flex items-center justify-center p-6 bg-blue-100">
        <img src="/public/picture/bg.png" alt="背景展示图" class="fixed inset-0 w-full h-full object-cover z-0 opacity-40" />
    <div class="flex w-[880px] h-[520px] shadow-2xl rounded-2xl overflow-hidden z-10">
      
      <!-- 左侧注册框 -->
      <div class="  w-1/2  bg-white/50  p-8 backdrop-blur-md">

        <h1 class="text-3xl mb-4  text-center">注册</h1>
        <div class="space-y-4">
            <input class="w-full px-4 py-3  border-black-200 rounded-lg"  v-model="username" type="text" placeholder="用户名" />
            <input class="w-full px-4 py-3  border-black-200 rounded-lg"  v-model="email" type="text" placeholder="邮箱地址" />
            <input class="w-full px-4 py-3  border-black-200 rounded-lg"  v-model="password" id="first-password" type="password" placeholder="密码" />
            <input class="w-full px-4 py-3  border-black-200 rounded-lg"  v-model="confirmPassword" id="second-password" type="password" placeholder="确认密码" />
        </div class=" mb-4">
          <div class="flex">
            <p>密码复杂度:{{ complexityText }}</p>
            <div class="ml-1 m-2">
              <div class="strength-bar">
              <div class="strength-fill" :class="complexity">
                  </div>
              </div>
          </div>
        </div>
        
        <button @click="register" class="bg-green-600 hover:bg-green-600/60  ml-23  h-9 w-50 rounded-2xl " >注册</button>
          <div>
            <p>已有账号？
                <button @click="goToLogin" class="bg-blue-600 h-8 w-20 rounded-xl">立即登录</button>
            或
                <button @click="goToHome">返回首页</button>
            </p>
          </div>
          
      </div>



      <!-- 右侧图片展示 -->
      <div class="w-1/2 bg-black/50 ">
        <img src="/picture/1.png" alt="展示图片" class="w-1/4 h-1/4 object-cover ml-40 m-40" />

      </div>
    </div>

  </div>
  
  
  
    
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const siteinfo = ref({})
const username = ref('')
const password = ref('')
const confirmPassword = ref('')
const email = ref('')

// 密码复杂度判断（非常简单的例子）
const complexity = computed(() => {
  if (password.value === '') return 'null'
  if (password.value.length < 6) return 'too-short'
  if (/^[a-zA-Z]+$/.test(password.value)) return 'weak'
  if (/[A-Z]/.test(password.value) && /\d/.test(password.value)) return 'strong'
  return 'medium'
})
const complexityText = computed(() => {
  switch (complexity.value) {
    case 'too-short': return '短'
    case 'weak': return '弱'
    case 'medium': return '中'
    case 'strong': return '强'
  }
})

onMounted(async () => {
  // 获取建站信息
  const res = await fetch('http://localhost:3000/api/site-info')
  siteinfo.value = await res.json()
})

// 注册按钮点击事件
function register() {
  if(password.value.length < 6){
    alert('密码长度至少6位！')
    return
  }

  if (password.value !== confirmPassword.value) {
    alert('两次密码不一致！')
    return
  }

  alert(`注册成功，欢迎 ${username.value}！`)
}

function goToLogin() {
  router.push('/login')
}
function goToHome() {
  router.push('/Home')
}



</script>

<style scoped>


.strength-bar{
  width: 200px;
  height: 10px;
  background: #eee;
  border-radius: 5px;
  overflow: hidden;
}
.strength-fill{
  height: 100%;
  transition: all 1s ease;
}
.too-short{
  width: 20%;
  background: red;
}
.weak{
  width: 40%;
  background: orange;
}
.medium{
  width: 70%;
  background: yellowgreen;
}
.strong{
  width: 100%;
  background: green;
}
</style>