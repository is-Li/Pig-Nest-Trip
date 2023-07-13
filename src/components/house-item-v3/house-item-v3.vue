<template>
    <div class="house-item">
        <div class="item-inner">
            <div class="cover">
                <img :src="itemData.image.url" alt="">
            </div>
            <div class="info">
                <div class="location">
                    <img src="@/assets/img/home/location.png" alt="">
                    <span>{{ itemData.location }}</span>
                </div>
                <div class="name">{{ itemData.houseName }}</div>
                <div class="summary"> {{ itemData.summaryText }} </div>
                <div class="price">
                    <div class="new"> ￥{{ itemData.finalPrice }} </div>
                    <div class="old"> ￥{{ itemData.productPrice }} </div>
                    <div class="tip" v-if="itemData.priceTipBadge"> {{ itemData.priceTipBadge.text }} </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

defineProps({
    itemData: {
        type: Object,
        default: () => ({})
    }
})

</script>

<style lang="less" scoped>

.house-item{
    width: 50%;

    .item-inner{
        // position: relative;
        font-size: 13px;
        padding: 5px;

        .cover {
            img {
                border-radius: 10px;
                width: 100%;
            }
        }

        .info {
            padding: 0 10px;

            .location {
                padding-top: 10px;
                color: #666;
                margin-bottom: 5px;

                img {
                    width: 10px;
                    margin-right: 5px;
                }
            }

            .summary{
                color: #666;
                margin-bottom: 8px;
            }

            .name {
                margin: 5px 0;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }

            .price {
                display: flex;
                justify-content: space-between;
                margin-top: 10px;

                .new {
                    color: var(--primary-color);
                    padding-right: 5px;
                    font-size: 15px;
                }

                .old {
                    padding-right: 5px;
                    font-size: 12px;
                    color: #999;
                    text-decoration: line-through;
                }

                .tip {
                    font-size: 12px;
                    padding: 0 3px;
                    color: #fff;
                    border-radius: 15px;
                    background-image: linear-gradient(90deg,
                            rgb(252, 130, 151),
                            rgb(255, 49, 49));
                }
            }
        }
    }
}

</style>