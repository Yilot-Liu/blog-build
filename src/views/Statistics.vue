<template>
    <base-template>
        <template #content>
            <div class="flex flex-col w-[1080px] bg-white/50 backdrop-blur-md rounded-4xl mt-4 p-8">
                <h1 class="text-center text-2xl font-bold mb-8">技术栈</h1>
                
                <div class="mb-8">
                    <h2 class="text-2xl font-bold mb-4 border-l-4 border-blue-500 pl-2">前端技术</h2>
                    <div class="grid grid-cols-3 gap-6">
                        <!-- 前端卡片 -->
                        <div class="bg-white rounded-xl p-4 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-blue-50">
                            <div class="flex items-center mb-3">
                                <img src="/src/assets/picture/HTML.png" alt="HTML" class="w-12 h-12 mr-3">
                                <h3 class="text-xl font-bold">HTML5</h3>
                            </div>
                            <p>学习时间 <span></span></p>
                        </div>
                        
                        
                        <div class="bg-white rounded-xl p-4 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-blue-50">
                            <div class="flex items-center mb-3">
                                <img src="/src/assets/picture/css.png" alt="CSS" class="w-12 h-12 mr-3">
                                <h3 class="text-xl font-bold">CSS3</h3>
                            </div>
                            <p class="text-gray-600 text-sm">掌握 CSS3 动画、Flex 布局和响应式设计</p>
                        </div>
                        
                       
                        <div class="bg-white rounded-xl p-4 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-blue-50">
                            <div class="flex items-center mb-3">
                                <img src="/src/assets/picture/Vue.png" alt="Vue" class="w-12 h-12 mr-3">
                                <h3 class="text-xl font-bold">Vue.js</h3>
                            </div>
                            <p class="text-gray-600 text-sm">熟练使用 Vue3 组合式 API 和常用生态</p>
                        </div>

                        <div class="bg-white rounded-xl p-4 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-blue-50">
                            <div class="flex items-center mb-3">
                                <img src="/src/assets/picture/Vue.png" alt="Vue" class="w-12 h-12 mr-3">
                                <h3 class="text-xl font-bold">Vue.js</h3>
                            </div>
                            <p class="text-gray-600 text-sm">熟练使用 Vue3 组合式 API 和常用生态</p>
                        </div>
                    </div>
                </div>

                <div class="mb-8">
                    <h2 class="text-2xl font-bold mb-4 border-l-4 border-green-500 pl-2">后端技术</h2>
                    <div class="grid grid-cols-3 gap-6">
                        <!-- 后端卡片 -->
                        <div class="bg-white rounded-xl p-4 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-green-50">
                            <div class="flex items-center mb-3">
                                <img src="/src/assets/picture/java.png" alt="java" class="w-12 h-12 mr-3">
                                <h3 class="text-xl font-bold">JAVA</h3>
                            </div>
                            <p class="text-gray-600 text-sm">使用 Express 框架开发 RESTful API</p>
                        </div>
                        <div class="bg-white rounded-xl p-4 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-green-50">
                            <div class="flex items-center mb-3">
                                <img src="/src/assets/picture/mysql.png" alt="mysql" class="w-12 h-12 mr-3">
                                <h3 class="text-xl font-bold">MySQL</h3>
                            </div>
                            <p class="text-gray-600 text-sm">使用 Express 框架开发 RESTful API</p>
                        </div>
                        <div class="bg-white rounded-xl p-4 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-green-50">
                            <div class="flex items-center mb-3">
                                <img src="/src/assets/picture/python.png" alt="python" class="w-12 h-12 mr-3">
                                <h3 class="text-xl font-bold">Python</h3>
                            </div>
                            <p class="text-gray-600 text-sm">使用 Express 框架开发 RESTful API</p>
                        </div>

                        <div class="bg-white rounded-xl p-4 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-green-50">
                            <div class="flex items-center mb-3">
                                <img src="/src/assets/picture/js.png" alt="Javascript" class="w-12 h-12 mr-3">
                                <h3 class="text-xl font-bold">Javascript</h3>
                            </div>
                            <p class="text-gray-600 text-sm">使用 Express 框架开发 RESTful API</p>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </base-template>
</template>

<script setup>
import BaseTemplate from '../components/baseTemplate.vue'
</script>