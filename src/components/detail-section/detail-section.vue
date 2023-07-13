<template>
    <div class="section">
        <div class="header">
            <h2 class="title">{{ title }}</h2>
        </div>
        <div class="content">
            <slot>
                <h3>我是默认内容</h3>
            </slot>
        </div>
        <div class="footer">
            <span class="more">{{ moreText }}</span>
            <van-icon name="arrow"></van-icon>
        </div>
    </div>
</template>

<script setup>

defineProps({
    title: {
        type: String,
        default: "默认标题"
    },
    moreText: {
        type: String,
        default: "查看全部"
    }
})

</script>

<style lang="less" scoped>

</style>