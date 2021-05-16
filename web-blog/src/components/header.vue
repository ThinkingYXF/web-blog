<template>
  <div class="header">
    <div class="top_header_content">
      <div class="top_header">
        <div class="left">
          <img class="logo_img" src="../assets/logo.png" alt="" />
          <span class="logo_dec">JS攻城狮</span>
        </div>
        <div class="right">
          <div class="logined" v-if="isLogin">
            欢迎 <span class="red_txt">{{ userInfo.username }}</span>
            <v-btn text dark class="white-text" @click="logout">退出</v-btn>
          </div>
          <div class="nologin" v-else>
            <span class="btn" @click="goLogin">登录</span>
            <span class="btn">注册</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "top-header",
  data() {
    return {
      userInfo: {},
      isLogin: true,
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      this.apis.getUser().then((res) => {
        if (res.code == 200 && res.result) {
          this.userInfo = res.result;
        }
      });
    },
    goLogin() {
      this.$router.push({
        path: "/",
      });
    },
    logout() {
      this.$store.commit("setToken", "");
      this.$router.push({
        path: "/",
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
