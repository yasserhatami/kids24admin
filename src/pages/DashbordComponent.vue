<template>
  <div class="text-center mt-4">
    <h1>
    <button @click="aa">btn</button>
  </h1>
  </div>
</template>

<script>

import Questionnaire from '@/services/Questionnaire'
export default {
methods:{
  aa(){
    Questionnaire.getAllQuestion().then((res)=>{
      console.log('this re', res);
    })
  }
}
}
</script>

<style>

</style>