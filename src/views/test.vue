<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const message = ref('正在加载...')

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:8080/api/hello')
    message.value = res.data.msg
  } catch (err) {
    console.error('请求失败：', err)
  }
})
</script>

<template>
  <h1>{{ message }}</h1>
</template>
