<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  computed: {
    hide() {
      console.log("halwa");
      return this.$route.path === "/";
    },
  },
};
</script>


