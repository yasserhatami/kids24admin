<template lang="">
  <v-container>
   <v-row>
     <v-col>
       <div class="d-flex justify-start align-center   mr-2">
       <div v-for="(input,index) in inputs" :key="input.id"  class=" w-25 box mr-2  px-4">
         <input id='ss'  ref="ssss" v-model="inputs[index]" class="w-100 text-black"  type="text" />
       </div>
       <v-icon class="text-right" v-if="count <=2" @click="addInput" color="success" icon="mdi-plus"></v-icon>
     </div>
   
     <div  v-if="count === 3" class=" mt-3 d-flex justify-center"> 
         <button @click.once="addLastInput">
           <v-icon  class=" pa-3 border-lg curser-pointer "   color="success" icon="mdi-check-bold"></v-icon>
         </button>
     </div>
     <v-dialog v-model="doneChoices" width="400">

         <v-card>
             <p class="text-center text-h6 mt-3">گزینه ها با موفقیت ثبت شدند.</p>
             <div class="text-center my-3">
                 <button class="w-25 mx-auto mr-2 rounded mt-1 pa-0 bg-red" color="red" block
                     @click="doneChoices = false">بستن</button>
             </div>
         </v-card>
     </v-dialog>
     </v-col>  
   </v-row>
  </v-container>
   
      
   
</template>
<script>
import { ref } from 'vue';
import useVuelidate from "@vuelidate/core";
// import { required, minLength } from "@vuelidate/validators";
// import { reactive } from 'vue';

export default {
  name: 'multiSelection',
  setup() {

    return { v$: useVuelidate() }
  },
  data() {
    return {
      doneChoices: ref(false),
      inputs: ref([]),
      count: ref(-1)
    }
  },
  // validations() {
  //   return {
  //     inputs
      
  //     : { required , minLength },

  //   }
  // },
  methods: {
    addInput() {

      this.inputs.push(this.inputs.length + 1)
      if (this.count >= 0) {
        localStorage.setItem(`choice${this.count + 1}`, this.inputs[this.count])
      }
      this.count++
    }
    ,
    addLastInput() {
      console.log('done');

      localStorage.setItem(`choice${this.count + 1}`, this.inputs[this.count])
      this.doneChoices = true;
    }
  }

}
</script>
<style>
input {
  outline: none;
}
</style>