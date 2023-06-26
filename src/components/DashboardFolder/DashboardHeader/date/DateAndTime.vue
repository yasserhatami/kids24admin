<template>
    <div class="text-white">{{ time }} | {{ date }}</div>
  </template>
  
  <script>
  import persianDate from "persian-date/dist/persian-date";
  export default {
    name: "DateAndTime",
    data() {
      return {
        time: "",
        date: "",
      };
    },created(){
      this.updateDate()
    },
    methods: {
      updateDate() {
        setInterval(() => {
          const timeAndDate = new persianDate();
  
          this.time = timeAndDate.toLocale("fa").format("L");
  
          this.date = timeAndDate.toLocale("fa").format("HH:mm");
        },1000);
      },
    },
  };
  </script>
  
  <style scoped>
  div {
    font-family: "DanaFaNum";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 29px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
  }
  </style>