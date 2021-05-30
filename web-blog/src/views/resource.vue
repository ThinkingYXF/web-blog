<template>
  <div></div>
</template>
<script>
export default {
  created() {
    let url = this.$route.query.url;
    console.log(url);
    location.href = "/uploads" + url;
  },
};
</script>