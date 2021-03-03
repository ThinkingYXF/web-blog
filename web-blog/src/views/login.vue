<template>
  <div>
    <v-main class="bg">
      <div class="login">
        <v-form>
          <div class="text-center">登录</div>
          <v-text-field
            label="会员ID"
            placeholder="会员ID"
            required
            prepend-icon="mdi-account"
            v-model="form.username"
          ></v-text-field>
          <v-text-field
            label="密码"
            placeholder="密码"
            type="password"
            required
            prepend-icon="mdi-lock"
            v-model="form.password"
          ></v-text-field>
          <div class="text-center">
            <v-btn class="mr-10" @click="login">登录</v-btn>
            <v-btn color="error" @click="showReg">注册</v-btn>
          </div>
        </v-form>
      </div>
    </v-main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  created() {},
  methods: {
    login() {
      if (!this.form.username || !this.form.password) {
        return;
      }
      this.apis.login(this.form).then((res) => {
        if (res.code == 200) {
          setTimeout(() => {
            this.$router.push({
              path: "/home",
            });
          }, 500);
        }
      });
    },
    showReg() {},
  },
};
</script>