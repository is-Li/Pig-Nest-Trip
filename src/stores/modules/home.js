import { defineStore } from "pinia";
import { getHomeHotSuggests, getHomeCategories, getHomeHouselist } from "@/services";

const useHomeStore = defineStore("home", {
    state: () => ({
        hotSuggests: [],
        categories: [],

        currentPage: 1,
        houselist: []
    }),
    actions: {
        async fetchHotSuggestData() {
            const res = await getHomeHotSuggests()
            this.hotSuggests = res.data.data
        },
        async fetchCategoriesData(){
            const res = await getHomeCategories()
            this.categories = res.data.data
        },
        async fetchHouselistData() {
            const res = await getHomeHouselist(this.currentPage)
            // this.houselist = res.data.data
            // 这里用push是想陆续的加载更多数据(一次请求一个页面的数据，下次请求第二个页面的数据)
            this.houselist.push(...res.data.data)
            this.currentPage++
        }
    }
})

export default useHomeStore
