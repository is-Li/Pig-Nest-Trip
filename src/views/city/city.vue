<template>
    <div class="city-top-page">
        <div class="top">
            <!-- 搜索框 -->
            <van-search 
                v-model="searchValue" 
                placeholder="城市/区域/位置"
                shape="round"
                show-action
                @cancel="cancelClick"
            ></van-search>
            <!-- tab的切换 -->
            <van-tabs v-model:active="tabActive" color="#ff9854">
                <template v-for="(value, key) in allCities" :key="key">
                    <van-tab :title="value.title" :name="key"></van-tab>
                </template>
                <!-- <van-tab :title="allCities?.data?.cityGroup?.title" :name="cityGroup"></van-tab>
                <van-tab :title="allCities?.data?.cityGroupOverSea?.title" :name="cityGroupOverSea"></van-tab> -->
            </van-tabs>
        </div>
        <div class="content">
            <!-- 将数据按照一定的方式进行展示 -->
            <!-- <city-group :group-data="currentGroup"></city-group> -->
            <template v-for="(value, key) in allCities" :key="key">
                <city-group v-show="tabActive === key" :group-data="value"></city-group>
            </template>
        </div>
    </div>
</template>

<script setup> 
import {ref,computed} from 'vue';
import { useRouter } from 'vue-router';
// import {getCityAll} from "@/services"
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from 'pinia';

import CityGroup from './cpns/city-group.vue'

const router = useRouter()

// 搜索框功能
const searchValue = ref("")
const cancelClick = () => {
    router.back()
}

// tab的切换
const tabActive = ref()

// 网络请求：请求城市的数据
// const allCity = ref()
// getCityAll().then(res => {
//     allCity.value = res.data
// })
// 上面是封装过的
// axios.get("http://123.207.32.32:1888/api/city/all").then(res => {
// })

//对上面的网络请求再做一个封装
//从Store中获取数据
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)

// 获取选中标签后的数据
// 1. 获取正确的key: 将tabs中绑定的tabAction 正确绑定
// 2. 根据key 从allCities获取数据，默认直接获取的数据不是响应式的，所以必须包裹computed
const currentGroup = computed(() => allCities.value[tabActive.value])

</script>

<style lang="less" scoped>

.city-top-page {

    .top{
        position: relative;
        z-index: 9;
    }

    //局部滚动
    .content{
        height: calc(100vh - 98px);
        overflow-y: auto;
    }
}

</style>