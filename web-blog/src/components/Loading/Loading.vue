<template>
  <div>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>
<script>
export default {
  name: "loading",

  data() {
    return {
      overlay: false,
      closed: false,
    };
  },

  watch: {
    closed(val) {
      if (val) {
        this.overlay = false;
        this.$el.addEventListener("transitionend", this.destroyElement);
      }
    },
  },

  methods: {
    destroyElement() {
      this.$el.removeEventListener("transitionend", this.destroyElement);
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    close() {
      this.closed = true;
    },
  },
};
</script>