import { $post, $get } from "./http";
export default {
  login: (params) => {
    return $post("/login", params);
  },
  getUser: () => {
    return $get("/userInfo")
  }
}