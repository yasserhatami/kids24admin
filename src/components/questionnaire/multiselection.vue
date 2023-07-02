<template lang="">
   
      <div class="d-flex justify-start align-center   mr-2">
        <div v-for="(input, index) in inputs" :key="index"  class=" w-25 box mr-2  px-4" type="text">
          <input id='ss'  ref="ssss" v-model="inputs[index]" class="w-100 text-black"  type="text" />
        </div>
        <v-icon class="text-right" v-if="count <=2" @click="addInput" color="success" icon="mdi-plus"></v-icon>
      </div>
    
      <div  v-if="count > 2" class=" mt-3 d-flex justify-center"> 
          <button @click.once="addLastInput">
            <v-icon  class=" pa-3 border-lg curser-pointer "   color="success" icon="mdi-check-bold"></v-icon>
          </button>
      </div>
       
    
</template>
<script>
import { ref } from 'vue';
import useVuelidate from "@vuelidate/core";
import { required, } from "@vuelidate/validators";
// import { reactive } from 'vue';

export default {
  name: 'multiSelection',
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      // choices: reactive([
      //   "گزینه اول",
      //   "گزینه دوم",
      //   "گزینه سوم",
      //   "گزینه چهارم"
      // ]),
      inputs: ref([]),
      count: ref(-1)
    }
  },
  validations() {
    return {
      text: { required },

    }
  },
  methods: {
    addInput() {
     
      this.inputs.push(this.inputs.length + 1)
      if (this.count >= 0) {
        localStorage.setItem(`choise${this.count + 1}`, this.inputs[this.count])
      }
      this.count++
    }
    ,
    addLastInput() {
      console.log('done');
      localStorage.setItem(`choise${this.count + 1}`, this.inputs[this.count])
    }
  }

}
</script>
<style>
input {
  outline: none;
}
</style>