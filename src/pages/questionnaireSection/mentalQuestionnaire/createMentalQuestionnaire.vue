<template>
  <v-container>
    <v-row class="">
      <!-- aaaaaaaaaaaaaaaaaaaaaaaaaaa -->
      <v-col cols="5">
        <div class="box w-100 px-4" type="text">
          <input :readonly="ifCreatedQuestionnaire" v-model="title" class="w-100  text-black text-subtitle-2 text-sm-h6"
            placeholder="نام پرسشنامه" type="text" />

        </div>
      </v-col>
      <v-col cols="4">
        <input type="number" class="box pr-3 text-subtitle-2 text-sm-h6" placeholder="سن به ماه" v-if="!ifCreatedQuestionnaire" v-model="selectAgeAverage" />
        
      

        <div v-else class="box w-100 px-4" type="text">
          <input readonly="2+2" class="w-100 text-black" :placeholder="`${selectAgeAverage }ماه  `" />

        </div>

      </v-col>
      <v-col cols="3">
        <button @click="createQuestionnaire" :class="ifCreatedQuestionnaire ? 'disable' : 'active'"
          class="box  w-100 pa-2 d-flex justify-center align-center bg-primary text-subtitle-2 text-sm-h6"
          :disabled="ifCreatedQuestionnaire">
          <span v-if="loading"> ایجاد پرسشنامه</span>
          <v-progress-circular v-else indeterminate></v-progress-circular>
        </button>
      </v-col>
    </v-row>
    <v-dialog v-model="doneQuestionnaire" width="400">

      <v-card class="">

        <p class="text-center text-h6 mt-3">پرسشنامه با موفقیت ایجاد شد.</p>
        <div class="text-center my-3">
          <button class="w-25 mx-auto mr-2 rounded mt-1 pa-0 bg-red" color="red" block
            @click="doneQuestionnaire = false">بستن</button>
        </div>
      </v-card>
    </v-dialog>
    <!-- aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa -->
    <!-- bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb -->
    <v-row>
      <createQuestion v-if="ifCreatedQuestionnaire" @cancel-everything="cancelEveryThing" :questionnaireType="questionnaireType" :idOfquestionnaire="idOfquestionnaire"></createQuestion>
    </v-row>



    <div>

    </div>
  </v-container>
</template>
  
<script>

import Questionnaire from '@/services/Questionnaire'
import createQuestion from '@/pages/questionnaireSection/createQuestion.vue'
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { ref } from 'vue'
export default {
  setup() {
    let loading = ref(true)
    let ifCreatedQuestionnaire = ref(false)
    let idOfquestionnaire = ref('')
    let title = ref('')
    let selectAgeAverage = ref();
    let doneQuestionnaire = ref(false);
    let questionnaireType = ref(0)

    ///////////////////////////////////////
    function createQuestionnaire() {
      if (!this.v$.title.$invalid && !this.v$.selectAgeAverage.$invalid) {
        loading.value = false;
        let bodyFormData = new FormData();
        const payload = {
          title: title.value,
          questionnaire_type: 'S',
          which_age: selectAgeAverage.value,
          needed: false,

        };
        for (const key in payload) {
          bodyFormData.append(key, payload[key]);
        }

        Questionnaire
          .createQuestionnaire(bodyFormData)
          .then((res) => {
            console.log(res);
            if (res.id) {
              doneQuestionnaire.value = true
              idOfquestionnaire.value = res.id;
              ifCreatedQuestionnaire.value = true;
              loading.value = true;
            }


          })
      } else {
        console.log('sssssssssssssssssss');
      }
    }

    function cancelEveryThing(){
      ifCreatedQuestionnaire.value = false;
      title.value = '';
      selectAgeAverage = 'انتخاب دسته سنی';

    }


    return {questionnaireType, v$: useVuelidate(), idOfquestionnaire, createQuestionnaire, doneQuestionnaire, title, selectAgeAverage, ifCreatedQuestionnaire,loading ,cancelEveryThing };

  },

  components: {
    createQuestion
  },
  validations() {
    return {
      question: { required },
      title: { required },
      selectAgeAverage: { required },
      picked: { required },
    };
  },
}
</script>
  
  
<style scoped>
.zz {
  width: 35%;
}

.aaaa {
  width: 140px;
  height: 30px;
  border-radius: 5px;

}

.radio-toolbar {
  margin: 10px;
}

.radio-toolbar input[type="radio"] {
  opacity: 0;
  position: fixed;
  width: 0;
}

.radio-toolbar label {
  text-align: center;
  width: 40%;
  display: inline-block;
  background-color: white;
  padding: 10px 10px;
  font-family: sans-serif, Arial;
  font-size: 16px;
  border: 2px solid #66BDAE;
  color: #66BDAE;
  border-radius: 4px;
}

.radio-toolbar label:hover {
  background-color: #66BDAE;
}

.radio-toolbar input[type="radio"]:focus+label {
  border: 2px dashed #444;
}

.radio-toolbar input[type="radio"]:checked+label {
  background-color: #bfb;
  border-color: #4c4;
}




input::placeholder {

  color: #272b31;
  ;
}



.bb {
  width: 100%;
}

option {
  cursor: pointer;
}

input {
  outline: none;
}
</style>