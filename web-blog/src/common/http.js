import axios from "axios";
const $https = axios.create();
import Message from "@/components/Message/index"
import Loading from "../components/Loading/index";
import router from "../router/index"
import store from "../store/index"
let baseURL = "";
// 环境的切换
if (process.env.NODE_ENV == "development") {
  baseURL = "http://localhost:3008/api";
} else if (process.env.NODE_ENV == "production") {
  baseURL = "/api";
}
$https.defaults.timeout = 40000;
//$https.defaults.withCredentials = false; //让ajax携带cookie
$https.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
//添加一个请求拦截器
$https.interceptors.request.use(
  config => {
    config.headers.Authorization = store.getters.bearer
    Loading.close();
    Loading();
    return config;
  },
  err => {
    //Do something with request error
    return Promise.reject(err);
  }
);
//添加一个响应拦截器
$https.interceptors.response.use(
  res => {
    Loading.close();
    if (res.data.code == 900) {
      store.commit("setToken", "")
      Message.warning("登录超时")
      router.replace({
        path: "/"
      })
    } else if (res.data.code != 200) {
      if (res.data.message) {
        Message.warning(res.data.message)
      } else {
        Message.warning("系统繁忙，请稍后重试")
      }
    } else if (res.data.code == 200) {
      let t = res.headers["x-jwt-token"];
      if (t) {
        store.commit("setToken", t)
      }
    }
    return res.data;
  },
  err => {
    Loading.close();
    Message.warning("系统繁忙，请联系管理员")
    return Promise.reject(err);
  }
);

export function $postFiles(url, params) {
  params = params || {};
  return $https.post(baseURL + url, params, {
    "Content-Type": "multipart/form-data"
  });
}
export function $post(url, params) {
  params = params || {};
  let postData = JSON.stringify(params);
  return $https.post(baseURL + url, postData);
}
export function $get(url, params) {
  params = params || {};
  return $https.get(baseURL + url, params);
}

