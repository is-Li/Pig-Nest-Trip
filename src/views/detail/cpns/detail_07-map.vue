<template>
    <div class="home">
        <detail-section title="位置周边" more-text="查看更多周边信息">
            <div class="baidu" ref="mapRef">百度地图</div>
        </detail-section>
    </div>
</template>

<script setup>
import DetailSection from "@/components/detail-section/detail-section.vue"
import { onMounted, ref} from "vue";

const props = defineProps({
    position:{
        type: Object,
        default: () => ({})
    }
})

const mapRef = ref()

// 确保该组件被挂载上去之后再创建百度地图
onMounted( () => {
    const map = new BMapGL.Map(mapRef.value);            // 创建地图实例
    var point = new BMapGL.Point(props.position.longitude, props.position.latitude);      // 创建点坐标
    map.centerAndZoom(point, 15);                      //  初始化地图，设置中心点坐标和地图级别

    // 添加标志位置
    const marker = new BMapGL.Marker(point);
    map.addOverlay(marker)
} )

</script>

<style lang="less" scoped>

.baidu {
    height: 300px;
}


</style>