<template>
  <div class="home">
    <v-header :userInfo="userInfo"></v-header>
    <div class="home_content">
      <div class="left_home">
        <div class="cur_title">
          <span>最新</span>
        </div>
        <div v-for="(v, i) in list" :key="i">
          <v-card :cardInfo="v"></v-card>
        </div>
      </div>
      <div class="right_home"></div>
    </div>
  </div>
</template>
<script>
import vHeader from "@/components/header.vue";
import vCard from "@/components/card.vue";
export default {
  components: {
    vHeader,
    vCard,
  },
  data() {
    return {
      userInfo: {
        username: "",
      },
      list: [],
    };
  },
  created() {
    this.getUserInfo();
    this.getArticles();
  },
  methods: {
    getUserInfo() {
      this.apis.getUser().then((res) => {
        if (res.code == 200 && res.result) {
          this.userInfo = res.result;
        }
      });
    },
    getArticles() {
      this.apis.getArticleList().then((res) => {
        if (res.code == 200) {
          this.list = res.result || [];
        }
      });
    },
  },
};
</script>
<style scoped>
</style>