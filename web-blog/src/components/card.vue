<template>
  <div class="card_content">
    <div class="left_img">
      <img :src="basePreImg + cardInfo.imgUrl" class="card_img" />
    </div>
    <div class="right_con">
      <h2 :title="cardInfo.title">{{ cardInfo.title }}</h2>
      <div class="card_tip">
        <span>{{ cardInfo.username }}</span>
        <span>{{ cardInfo.createTime | formatDate }}</span>
      </div>
      <div class="card_dec">{{ cardInfo.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    cardInfo: Object,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="sass" scoped>
.card_content:hover:before
  transform: scaleX(1)
.card_content:before
  content: "",
  height: 2px
  background-color: #1f90de
  transform: scaleX(0)
  transition: 0.5s
  position: absolute
  top: 0
  width: 100%
  left: 0
.card_content
  display: flex
  padding: 10px
  cursor: pointer
  background: #fff
  margin-top: 20px
  position: relative
  border-radius: 5px
  .left_img
    margin-right: 20px
    .card_img
      width: 200px
      height: 150px
  .right_con
    flex: 1
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap
    h2
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
    h2:hover
      color: #1f90de

    .card_tip
      display: flex
      color: #999
      font-size: 12px
      margin: 5px 0
      span
        display: inline-block
        margin-right: 30px
    .card_dec
      white-space: normal
      overflow: hidden
      display: -webkit-box
      -webkit-box-orient: vertical
      -webkit-line-clamp: 4
</style>
