<script setup>
  
import TabBar from "@/components/tabbar/tab-bar.vue";
import {useRoute} from "vue-router";
import Loading from "@/components/loading/loading.vue";

const route = useRoute()

</script>

<template>
  <div class="app">
    <!-- 用于控制路由组件显示的位置 -->
    <router-view/>
    <!-- 判断tabbar的显示时机 route会·捕获当前路由的值，hidrTavbbar在 router的 index中 -->
    <tab-bar v-if="!route.meta.hideTabBar"></tab-bar>
    <!-- 加载等待界面，因为不止一个界面会用到，所以将其放在了App组件中 -->
    <Loading/>
  </div>
</template>

<style scoped>
 
</style>
