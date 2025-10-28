<template>
    <base-template>
        <template #content>
            <div class="flex flex-col w-[1080px] h-60 bg-white/50 backdrop-blur-md rounded-4xl mt-4 p-4">
                <h1 class="text-center text-2xl font-bold mb-4">关于我</h1>
                <div class="space-y-4">
                    <p>欢迎来到我的个人博客！</p>
                    <p>我是一名计算机科学与技术专业的学生，热爱编程和技术。</p>
                    <p>这个博客将会分享我的学习心得、技术总结和个人感悟。</p>
                </div>
            </div>
        </template>
    </base-template>
</template>

<script setup>
import BaseTemplate from '../components/baseTemplate.vue'
</script>