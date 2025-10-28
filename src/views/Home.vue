<template>
    <base-template>
      <template #content>
           <!-- 右侧文档展示部分 -->
           <div class="flex flex-col items-center w-[1080px] h-60 bg-white/50 backdrop-blur-md rounded-4xl mt-4 ">
              <div v-html="htmlContent" class="prose prose-invert p-5  w-full line-clamp-7"></div>
              <a href="" class="text-blue-500 ">查看全文</a>
            </div>
      </template>
  </base-template>
 
</template>

<script setup>
import baseTemplate from '../components/baseTemplate.vue';
</script>


