import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";
// import useMainStore from "@/stores/modules/main";
import useMainStore from '@/stores/modules/main';

// const mainStore = useMainStore()

const mainStore = useMainStore();

class HYRequest {
  //构造函数初始化
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });

    // 拦截器，捕获加载界面的 布尔值
    this.instance.interceptors.request.use(config => {
      mainStore.isLoading = true
      return config
    }, err => {
      return err
    })
    this.instance.interceptors.response.use(res => {
      mainStore.isLoading = false
      return res
    }, err => {
      mainStore.isLoading = false
      return err
    })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get(config) {
    return this.instance({ ...config, method: "get" });
  }

  post(config) {
    return this.instance({ ...config, method: "post" });
  }
}

export default new HYRequest(BASE_URL, TIMEOUT);
