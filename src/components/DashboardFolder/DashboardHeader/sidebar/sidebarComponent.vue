<template>
    <div>
      <div class="w-100 mt-10 b">
        <card />
        <listofside />
      </div>
    </div>
  </template>
  
  <script>
  import card from "./card.vue";
  import listofside from "./listOfSide.vue";
  export default {
    name: "SidebarComponent",
    components: {
      card,
      listofside,
    },
  };
  </script>
  
  <style scoped>
  </style>