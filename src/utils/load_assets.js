// 从封装的数组中获取路径
export const getAssetURL = (image) => {
    return new URL(`../assets/img/${image}`, import.meta.url).href
}