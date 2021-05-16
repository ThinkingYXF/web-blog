import { $postFiles, $post, $get } from "./http";
export default {
  login(params) {
    return $post("/login", params);
  },
  getUser() {
    return $get("/userInfo")
  },
  getArticleList() {
    return $get("/articleList")
  },
  getUploadResouces() {
    return $get("/getResouces")
  },
  //单文件上传
  uploadFile(params) {
    return $postFiles("/singleUpload", params)
  },
  //多文件上传
  uploadFiles(params) {
    return $postFiles("/multiUpload", params)
  }
}