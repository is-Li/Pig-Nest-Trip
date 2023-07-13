// 使用vant中定义好的组件

<template>
    <div class="tab-bar">
        <van-tabbar v-model="currentIndex">
            <template v-for="(item, index) in tabbarData" :key="index">
                <!-- 导入组件自带得路由 to -->
                <van-tabbar-item :to="item.path">
                    <span>{{item.text}}</span>
                    <!-- 具名插槽 icon是导入组件库中设置的名字 -->
                    <template #icon>
                        <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
                        <img v-else :src="getAssetURL(item.imageActive)" alt="">
                    </template>
                </van-tabbar-item>
            </template>
        </van-tabbar>
    </div>
</template>

<script setup>

import tabbarData from "@/assets/data/tabbar.js"
import { getAssetURL } from "@/utils/load_assets.js"
import {  ref } from "vue"
// 响应式  ref函数将一个普通对象转化为响应式包装对象
// 响应式简单来说就是当 数据发生改变，视图也跟着改变
const currentIndex = ref(0)  // 默认值为0



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