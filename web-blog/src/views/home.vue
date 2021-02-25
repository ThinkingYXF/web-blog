<template>
  <div class="home">
    <v-header></v-header>
    <div class="home_content">
      <div class="left_home">
        <div class="cur_title">
          <span>最新</span>
        </div>
        <div v-for="(v, i) in 3" :key="i">
          <v-card :cardInfo="cardInfo"></v-card>
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
      cardInfo: {
        imgUrl: require("@/assets/background.png"),
        title: "今天天气真的很好呀",
        dec:
          "一般个人博客站的空间都不是太大，流量也是有限制的。如果网站的访问速度和存储空间不够的话，就需要花钱去升级虚拟主机了。",
      },
    };
  },
};
</script>
<style scoped>
</style>