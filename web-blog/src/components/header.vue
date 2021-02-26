<template>
  <div class="header">
    <div class="top_header_content">
      <div class="top_header">
        <div class="left">
          <img class="logo_img" src="../assets/logo.png" alt="" />
          <!-- <span class="logo_dec">JS攻城狮</span> -->
        </div>
        <div class="right">
          <div class="logined" v-if="isLogin">
            欢迎 <span class="red_txt">{{ userInfo.username }}</span>
          </div>
          <div class="nologin" v-else>
            <span class="btn" @click="goLogin">登录</span>
            <span class="btn">注册</span>
          </div>
        </div>
      </div>
    </div>
    <div class="sub_header_content">
      <div class="sub_header">
        <!-- <v-app> -->
        <v-tabs v-model="tab" align-with-title color="#1f90de">
          <v-tabs-slider color="#1f90de"></v-tabs-slider>

          <v-tab v-for="item in items" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
        <!-- </v-app> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "top-header",
  props: {
    userInfo: Object,
  },
  data() {
    return {
      isLogin: true,
      tab: null,
      items: ["首页", "消息", "文章"],
    };
  },
  methods: {
    goLogin() {
      this.$router.push({
        path: "/login",
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
