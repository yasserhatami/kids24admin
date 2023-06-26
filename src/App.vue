<template>
  <component :is="this.$route.meta.layout || 'div'">
    <router-view />
  </component>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>
<style>
img {
  width: 254px;
  height: 250px;
}
</style>
