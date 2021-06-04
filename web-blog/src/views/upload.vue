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
      <p><v-btn color="primary" @click="uploadFile">上传</v-btn></p>
      <p>
        <v-btn color="primary" @click="getFiles">获取资源</v-btn>
      </p>
      <div class="files">
        <a
          :href="'/#/resource?url=' + v"
          target="_blank"
          v-for="(v, i) in result"
          :key="i"
        >
          <v-chip class="file" close @click:close="del(v)">
            {{ v }}
          </v-chip>
        </a>
      </div>
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
      result: [],
    };
  },
  created() {},
  methods: {
    getFiles() {
      this.apis.getUploadResouces().then((res) => {
        if (res.code == 200) {
          this.result = res.result;
        }
      });
    },
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
    del(v) {
      console.log(v);
    },
  },
};
</script>
<style scoped>
</style>