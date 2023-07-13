<template>
    <div class="city-group">
        <van-index-bar :index-list="indexList">
            <van-index-anchor index="热门"></van-index-anchor>

            <div class="list">
                <template v-for="(city, index) in groupData.hotCities" :key="index">
                    <div class="city" @click= "cityClick(city)">{{ city.cityName }}</div>
                </template>
            </div>

            <template v-for="(group, index) in groupData.cities" :key="index">
                <van-index-anchor :index="group.group"></van-index-anchor>
                <template v-for="(city, indey) in group.cities" :key="indey">
                    <van-cell :title="city.cityName" @click="cityClick(city)"></van-cell>
                </template>
            </template>
        </van-index-bar>
        <!-- <template v-for="(group, index) in groupData.cities" :key="index">
            <div class="group-item">
                <h2 class="title">标题：{{ group.group}}</h2>
                <div class="list">
                    <template v-for="(city, indey) in group.cities" :key="indey">
                        <div class="city">{{city.cityName}}</div>
                    </template>
                </div>
            </div>
        </template> -->
    </div>
</template>

<script setup>

import { computed } from 'vue';
import useCityStore from "@/stores/modules/city";
import { useRouter } from 'vue-router'

const props = defineProps({
    groupData: {
        type: Object,
        default:() => ({})
    }
})

// 将地区索引A-z从获取的数据中抽离出来
const indexList = computed(()=> {
    // 通过groupData.cities获取到包含索引的对象，然后使用map函数映射出只包含索引的列表(group是获取到的数据的索引的key) 
    const list = props.groupData.cities.map(item => item.group)
    // 用于在数组前插入数据
    list.unshift("#")
    return list
})

// 监听城市的点击
// 通过useRouter在该组件中访问路由
const router = useRouter()
const cityStore = useCityStore()
const cityClick = (city) => {
    console.log(city)
    // 选中当前城市
    cityStore.currentCity = city  //将获取到的城市信息放在store中，其他页面需要数据就从store中拿走
    // 返回上一级
    router.back()
}


</script>

<style lang="less" scoped>

.list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
    padding-right: 25px;

    .city {
        width: 70px;
        height: 28px;
        border-radius: 14px;
        font-size: 12px;
        color: #000;
        text-align: center;
        line-height: 28px;
        background-color: #fff4ec;
        margin: 6px 0;
    }
}

</style>