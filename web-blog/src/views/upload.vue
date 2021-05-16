<template>
  <div class="upload">
    <v-header></v-header>
    <div class="upload_content">
      <v-file-input
        class="file_input"
        v-model="files"
        multiple
        small-chips
        label="上传文件"
      >
        <template v-slot:selection="{ index, text }">
          <v-chip v-if="index < 2" small label color="primary">
            {{ text }}
          </v-chip>
          <span
            v-else-if="index === 2"
            class="overline grey--text text--darken-3 mx-2"
          >
            +{{ files.length - 2 }} File(s)
          </span>
        </template>
      </v-file-input>
      <v-btn @click="uploadFile">上传</v-btn>
    </div>
  </div>
</template>
<script>
import vHeader from "@/components/header.vue";
export default {
  components: {
    vHeader,
  },
  data() {
    return {
      files: [],
    };
  },
  created() {},
  methods: {
    uploadFile() {
      if (this.files.length == 0) {
        return;
      }
      let data = new FormData();
      this.files.forEach((v) => {
        data.append("file", v);
      });
      this.apis.uploadFiles(data).then((res) => {
        if (res.code == 200) {
          this.$message.success("上传成功");
        }
      });
    },
  },
};
</script>
<style scoped>
</style>