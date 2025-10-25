<template>
    <div class="min-h-screen flex flex-col bg-gray-100 ">
      <img src="/public/picture/2.png" alt="首页背景 "class="fixed inset-0 w-full h-full object-cover z-0 opacity-40" />
      <div class="z-10">
        <div class="  h-20 w-full  bg-white/50  shadow-xl rounded-3xl flex items-center px-14 space-x-10">
        <div class="w-16"><img src="/public/picture/1.png" alt="网站首页图片"></div>
          
          <!-- 导航栏 -->
          <div @click="goTohome"
                class="inline cursor-pointer  hover:underline">首页</div>
          <div @click="goTolink"
                class="inline cursor-pointer hover:underline">友情链接</div>
          <div @click=""
                class="inline cursor-pointer hover:underline">关于</div>
          <div @click=""
                class="inline cursor-pointer hover:underline">统计</div>
          <div class="relative ml-4 w-64">
          <!-- 输入框 -->
            <input
              type="text"
              placeholder="搜索"
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
              

        <div @click="goToRegister"
              class=" ml-auto text-center  bg-green-600/70 hover:bg-green-500/50 transition-all text-white px-4 py-1 w-30 h-9  rounded-2xl cursor-pointer  "
            >
        去注册
        </div>
      </div>
      <!-- 个人简介 -->
          <div class=" flex flex-col items-center  w-64 h-108 bg-white/50 backdrop-blur-md rounded-4xl mt-4 ">
            <img src="/public/picture/1.png" alt="用户头像" class="w-50 rounded-full mt-3"></img>
            <h1 class="font-bold text-2xl underline decoration-red-500">ilott</h1>
            <h1>Talk is cheap,show me the code</h1>
            <h2>一名普通的大二计科学生</h2>
            <a href="https://github.com/Yilot-Liu ">
              <img src="/src/assets/picture/github.png" alt="github" class="w-8 h-8 absolute cursor-pointer left-15">
            </a>
            <a href="/src/assets/picture/wechat_friend.jpg">
              <img src="/src/assets/picture/wechat.png" alt="wechat" class="w-8 h-8 absolute cursor-pointer left-27">
              </a>
            <a href="https://space.bilibili.com/397409402">
              <img src="/src/assets/picture/bilibili.png" alt="bilibili" class="w-8 h-8 absolute cursor-pointer left-39">
            </a>
          </div>
          <!-- 公告 -->
          <div class=" flex flex-col items-center  w-64 h-60 bg-white/50 backdrop-blur-md rounded-4xl mt-4 ">
            <p class="border-l-4 border-red-500 pl-2  font-bold text-xl mt-3 ">公告</p>
          </div>
        
        </div>
      </div>
      
</template>
<script >
</script>

