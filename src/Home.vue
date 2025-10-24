<template>
    <div class="flex">
      <div class="h-15 w-full  bg-blue-600 rounded-3xl">
        <h1></h1>
        <div @click="goToRegister"
              class=" text-center  bg-green-600/70 hover:bg-green-500/50 transition-all text-white px-4 py-1 w-30 h-9 rounded-2xl cursor-pointer  "
            >
        去注册
        </div>
      </div>
      <div class="">
        <img></img>
        <h1>个人简介</h1>
      </div>  
        
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const siteinfo = ref({})

onMounted(async () => {
  // 获取建站信息
  const res = await fetch('http://localhost:3000/api/site-info')
  siteinfo.value = await res.json()
})
function goToRegister() {
  router.push('/register')
}
</script>