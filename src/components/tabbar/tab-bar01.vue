// 自定义的下面四个图标组件

<template>
    <div class="tab-bar">
        <template v-for="(item, index) in tabbarData" :key="index">
            <!--                      动态添加class  对象语法 -->
            <div 
               class="tab-bar-item" 
               :class="{active: currentIndex === index}"
               @click="itemClick(index, item)"
            >   
            <!-- 实现下面四个图标选中颜色的切换 -->
                <img v-if="currentIndex !== index" :src="getAssetURL(item .image)" alt="">  
                <img v-else :src="getAssetURL(item .imageActive)" alt="">
                <span class="text">{{ item.text}}</span>
            </div>
        </template>
    </div>
</template>

<script setup>

import tabbarData from "@/assets/data/tabbar.js"
import { getAssetURL } from "@/utils/load_assets.js"
import {  ref } from "vue"
import { useRouter } from "vue-router"
// 响应式  ref函数将一个普通对象转化为响应式包装对象
// 响应式简单来说就是当 数据发生改变，视图也跟着改变
const currentIndex = ref(0)  // 默认值为0
const router = useRouter()
// 在点击下面图标的时候
const itemClick = (index, item) => {     //设置下面四个选择的切换
    currentIndex.value = index
    router.push(item.path)     // 通过item改变路由
}


</script>

<style lang="less" scoped> 
    .tab-bar {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 50px;
        display: flex;

        border-top: 1px solid #f3f3f3;

        .tab-bar-item {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            &.active{
                color: var(--primary-color);
            }

            .text {
                font-size: 12px;
                margin-top: 2px;
            }

            img{
                width: 36px;
            }
        }

    }
</style>