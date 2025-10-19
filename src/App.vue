
<template>
 <div>
  <h1>注册</h1>
 <input v-model="username" type="text" placeholder="用户名" />
 <br />
 <input v-model="password" id="first-password" type="password" placeholder="密码" />
  <br />
  <input v-model="confirmPassword" id="second-password" type="password" placeholder="确认密码" />
  <br />
  <p>密码复杂度{{ complexity }}</p>
  <div class="strength-bar">
    <div class="strength-fill" :class="complexity"></div>
  </div>
  <button @click="register">注册</button>
  <p>已有账号？<a href="#">立即登录</a></p></div>
</template>

<script setup>
import { ref, computed } from 'vue'

const username = ref('')
const password = ref('')
const confirmPassword = ref('')

// 密码复杂度判断（非常简单的例子）
const complexity = computed(() => {
  if (password.value.length < 6) return 'too-short'
  if (/^[a-zA-Z]+$/.test(password.value)) return 'weak'
  if (/[A-Z]/.test(password.value) && /\d/.test(password.value)) return 'strong'
  return 'medium'
})

// 注册按钮点击事件
function register() {
  if (password.value !== confirmPassword.value) {
    alert('两次密码不一致！')
    return
  }
  alert(`注册成功，欢迎 ${username.value}！`)
}
</script>

<style scoped>
.strength-bar{
  width: 200px;
  height: 10px;
  background: #eee;
  border-radius: 5px;
  transition: width 0.5s;
}
.strength-fill.too-short{
  width: 20%;
  background: red;
}
.strength-fill.weak{
  width: 40%;
  background: orange;
}
.strength-fill.medium{
  width: 70%;
  background: yellowgreen;
}
.strength-fill.strong{
  width: 100%;
  background: green;
}
</style>