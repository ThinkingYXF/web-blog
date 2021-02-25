import $post from "./http";
export default {
  login: (params) => {
    return $post("/login", params);
  },
}