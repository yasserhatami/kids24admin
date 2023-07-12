<template lang="">
  <v-container>
   <v-row>
     <v-col>
       <div class="d-flex justify-start align-center   mr-2">
       <div v-for="(input,index) in inputs" :key="input.id"  class=" w-25 box mr-2  px-4">
         <input id='ss'  ref="ssss" v-model="inputs[index]" class="w-100 text-black"  type="text" />
         
       </div>
       <v-icon class="text-right" v-if="finishChoices" @click="addInput" color="success" icon="mdi-plus"></v-icon>
     </div>
   
     <div   class=" mt-3 d-flex justify-center"> 
         <button class="bg-primary my-2 py-2 px-4 rounded-lg" @click.once="addLastInput">
           اتمام گزینه ها
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
import { useCunterStore } from '@/store/questonnaireStore.js'

export default {
  name: 'multiSelection',
  setup() {
    let store = useCunterStore()
    let doneChoices = ref(false)
    let inputs = ref([])
    let count = ref(0)
    let finishChoices = ref(true)

    function addInput() {

      inputs.value.push(inputs.value.length + 1)
    }

    function  addLastInput() {
      store.getchoices(inputs.value)
      console.log(inputs.value);
      doneChoices.value = true;
      finishChoices.value = false
    }

    return { v$: useVuelidate(), doneChoices, inputs, count, addInput,store,addLastInput,finishChoices }
  },
  data() {
    return {

    }
  },
  // validations() {
  //   return {
  //     inputs

  //     : { required , minLength },

  //   }
  // },
  methods: {


   
  }

}
</script>
<style>
input {
  outline: none;
}
</style>