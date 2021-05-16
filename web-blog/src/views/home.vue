<template>
  <div class="home">
    <v-header></v-header>
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
      list: [],
      tab: null,
      items: ["首页", "消息", "文章"],
    };
  },
  created() {
    this.getArticles();
  },
  methods: {
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