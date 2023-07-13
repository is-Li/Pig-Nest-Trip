import { onMounted, onUnmounted, ref } from 'vue';
import { throttle } from 'underscore'

// export default function useScroll(reachBottomCB){
//     // 监听 window 创建的滚动
//     const scrollListenerHandler = () => {
//         const clientHeight = document.documentElement.clientHeight
//         const scrollTop = document.documentElement.scrollTop
//         const scrollHeight = document.documentElement.scrollHeight
//         // 监听是否滚动到底部
//         if (clientHeight + scrollTop >= scrollHeight){
//             if(reachBottomCB) reachBottomCB()
//         }
//     }
//     // 挂载的时候打开监听
//     onMounted(() => {
//         window.addEventListener("scroll", scrollListenerHandler)
//     })
//     // 卸载的时候移除监听 ，这是因为window监听会在所有界面中执行，当我们切换界面时，希望其他界面不会执行监听
//     onUnmounted(() => {
//         window.removeEventListener("scroll", scrollListenerHandler)
//     })
// }


// 第二种思路： 当回调函数比较多的时候，不传回调函数，设置一个布尔值来保存 是否滚动到底部的状态，然后返回值


export default function useScroll(){
    const isReachBottom = ref(false)
    const scrollTop = ref(0)

    // 监听 window 创建的滚动
    // 防抖：本来我去执行一个事件，等键盘操作触发完成后间隔一段时间再执行
    // 节流：一些事件发生的比较频繁，设置为每间隔一段时间执行
    const scrollListenerHandler = throttle(() => {
        const clientHeight = document.documentElement.clientHeight
        scrollTop.value = document.documentElement.scrollTop
        const scrollHeight = document.documentElement.scrollHeight
        // 监听是否滚动到底部
        if (clientHeight + scrollTop.value >= scrollHeight){
            isReachBottom.value = true
        }
    }, 1000)

    // 挂载的时候打开监听
    onMounted(() => {
        window.addEventListener("scroll", scrollListenerHandler)
    })
    // 卸载的时候移除监听 ，这是因为window监听会在所有界面中执行，当我们切换界面时，希望其他界面不会执行监听
    onUnmounted(() => {
        window.removeEventListener("scroll", scrollListenerHandler)
    })

    return { isReachBottom, scrollTop }
}
