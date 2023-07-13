<template>
    <div class="detail top-page">
        <van-nav-bar
            title="房屋详情"
            left-text="旅途"
            left-arrow
            @click-left="onClickLeft"
        ></van-nav-bar>
        <div class="main" v-if="mainPart">
            <detail-swipe :swipe-data="mainPart.housePicture.housePics"></detail-swipe>
            <detail-infos :top-infos="mainPart"/>
            <detail-facility/>
            <detail-landlord/>
            <detail-map :position="mainPart_map.positionModule"/>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getDetailInfos } from "@/services";
import DetailSwipe from "./cpns/detail_01-swipe.vue";
import DetailInfos from "./cpns/detail_02-infos.vue";
import DetailFacility from "./cpns/detail_03-facility.vue";
import DetailLandlord from "./cpns/detail_04-landlord.vue";
import DetailMap from "./cpns/detail_07-map.vue";

const router = useRouter()
const route = useRoute()
const houseId = route.params.id

// 发送网络请求获取数据
const detailInfos = ref({})
// const mainPart = computed(() => detailInfos.value.mainPart)
const mainPart = ref([])
const mainPart_map = ref([])
getDetailInfos(houseId).then(res => {
    detailInfos.value = res.data.data
    mainPart.value = res.data.data.mainPart.topModule
    mainPart_map.value = res.data.data.mainPart.dynamicModule
    // console.log(res)
    // console.log("hahaha")
    // console.log(res.data)
})

// 监听返回按钮的点击
const onClickLeft = () => {
    router.back()
}


</script>

<style lang="less" scoped>

</style>