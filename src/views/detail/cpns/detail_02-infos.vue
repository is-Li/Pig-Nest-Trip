<template>
    <div class="infos">
        <div class="name">{{ topInfos.houseName }}</div>
        <div class="tags">
            <template v-for="(item, index) in topInfos.houseTags" :key="index">
                <span 
                    class="item" 
                    v-if="item.tagText"
                    :style="{ color: item.tagText.color, background: item.tagText.background.color }"
                >
                    {{ item.tagText.text }}
                </span>
            </template>
        </div>
        <div class="comment">
            <div class="left">
                <span class="score">{{ topInfos.commentBrief.overall }}</span>
                <span class="title">{{ topInfos.commentBrief.scoreTitle }}</span>
                <span class="brief">{{ topInfos.commentBrief.commentBrief }}</span>
            </div>
            <div class="right">
                <span class="count">
                    {{ topInfos.commentBrief.totalCount }}条评论
                    <van-icon name="arrow" />
                </span>
            </div>
        </div>
        <div class="location">
            <div class="left">
                {{ topInfos.nearByPosition.address }}
            </div>
            <div class="right">
                地图.周边
            </div>
        </div>
    </div>
</template>

<script setup>

defineProps({
    topInfos:{
        type: Object,
        default: () => ({})
    }
})

</script>

<style lang="less" scoped>

</style>