<template>
  <div class="home">
      <div>
        {{ data }}
      </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      id: 1,
    }
  },

  mounted() {
    this.getData();
  },

  computed: {
    data() {
      return this.$store.state.user.user;
    }
  },

  methods: {
    getData() {
      this.$store.dispatch("user/getUser", { id: 1});
    }
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding: 40px 0;
}
</style>
