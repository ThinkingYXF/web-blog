import axios from "axios";
// import router from "../router";
const $https = axios.create();
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
//$https.defaults.headers.post['apiVersion']='1.0.0';
//添加一个请求拦截器
$https.interceptors.request.use(
  config => {
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
    if (res.data.code != 200) {
      if (res.data.message) {
        alert(res.data.message)
      } else {
        alert("系统繁忙，请稍后重试")
      }
    }
    return res.data;
  },
  err => {
    return Promise.reject(err);
  }
);

function $post(url, params) {
  params = params || {};
  let postData = JSON.stringify(params);
  return $https.post(baseURL + url, postData);
}

export default $post;
