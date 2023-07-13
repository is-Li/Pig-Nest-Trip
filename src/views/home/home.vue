<template>
    <div class="home">
        <home-nav-bar></home-nav-bar>
        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="">
        </div>
        <home-search-box></home-search-box>
        <home-categories />

        <div class="search-bar" v-if="isShowSearchBar">
            <search-bar/>
        </div>

        <home-content />
        <button @click="moreBtnClick">加载更多</button>
    </div>
</template>

<script setup>
import { ref,watch,computed } from 'vue';
import useHomeStore from '@/stores/modules/home';
import HomeNavBar from './cpns/home-nav-bar.vue';
import HomeSearchBox from './cpns/home-search-box.vue';
import HomeCategories from './cpns/home-categories.vue';
import HomeContent from './cpns/home-content.vue';
import SearchBar from '@/components/search-bar/search-bar.vue'

import useScroll from '@/hooks/useScroll'

// 发送网络请求
// 1.热门建议
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
// let currentPage = 1
homeStore.fetchHouselistData()

// 模拟加载更多
const moreBtnClick = () => {
    // currentPage++
    homeStore.fetchHouselistData()
}

// useScroll(() => {
//     homeStore.fetchHouselistData()
// })

// 第二种思路
const { isReachBottom, scrollTop } = useScroll()
watch(isReachBottom, (newValue) => {
    if( newValue ){
        //严谨的做法是获取数据成功然后置为false，最好用promise的异步操作
        homeStore.fetchHouselistData().then(() => {
            isReachBottom.value = false
        })
    }
})

// 搜索框显示的控制
// const isShowSearchBar = ref(false)
// watch(scrollTop, (newTop) => {
//     isShowSearchBar.value = newTop > 100
// })
const isShowSearchBar = computed( () => {
    return scrollTop.value >= 80
})



</script>

// less是一门向后兼容的CSS扩展语言，可以提高css代码的可维护性和可读性
<style lang="less" scoped>  // scoped表示局部作用域，只作用本组件

.home{
    // 在该元素底部进行填充(enter)
    // 由内容撑起来的滚动属于 window滚动
    padding-bottom: 60px;


    .banner{
        img{
            width: 100%;
        }
    }

    .search-bar{
        // 固定定位，元素的位置相对于浏览器窗口是固定的位置
        position: fixed;
        // z轴方向 position定位如果有重叠的时候，z-index愈大，就显示在最上面
        z-index: 9;
        top: 0;
        left: 0;
        right: 0;
        height: 45px;
        padding: 16px 16px 10px;
        background-color: #fff;
    }
}


</style>
