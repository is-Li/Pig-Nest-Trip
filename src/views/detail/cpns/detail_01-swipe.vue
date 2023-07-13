<template>
    <div class="swipe">
        <!-- 轮播图 -->
        <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
            <template v-for="(item, index) in swipeData" :key="index">
                <van-swipe-item class="item">
                    <img :src="item.url" alt="">
                </van-swipe-item>
            </template>

            <!-- 具名插槽，引入组件自带的 -->
            <template v-slot:indicator>
                <!-- <div class="indicator" >{{ props.active }}/{{ swipeData.length }}-{{ props.total }}</div> -->
                <div class="indicator">
                    <template v-for="(value, key, index) in swipeGroup" :key="index">
                        <span class="item"> {{ getName(value[0].title) }} </span>
                    </template>
                </div>
            </template>
        </van-swipe>
    </div>
</template>

<script setup>

const props = defineProps({
    swipeData: {
        type: Array,
        default: () => []
    }
})

// 对数据进行转换
const swipeGroup = {}

for (const item of props.swipeData){
    let valueArray = swipeGroup[item.enumPictureCategory]
    if(!valueArray){
        valueArray = []
        swipeGroup[item.enumPictureCategory] = valueArray
    }
    valueArray.push(item)
}
console.log( swipeGroup )  

// 定义转换数据的方法
const getName = (name) => {
    return name.replace("：", "").replace("】", "").replace("【", "")
}
 
</script>

<style lang="less" scoped>
.swipe{
    .swipe-list{
        .item{
            img{
                width: 100%;
            }
        }

        .indicator {
            position: absolute;
            right: 5px;
            bottom: 5px;
            padding: 2px 5px;
            font-size: 12px;
            color: #fff;
            background: rgba(0,0,0,0.8);

            .item {
                margin: 0 3px;
            }
        }
    }
}
</style>