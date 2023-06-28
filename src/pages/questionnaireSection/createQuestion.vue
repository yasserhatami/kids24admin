<template>
  <v-container>
    <v-row class="">
      <!-- aaaaaaaaaaaaaaaaaaaaaaaaaaa -->
      <v-col cols="5">
        <div class="box w-100 px-4" type="text">
          <input v-model="title" class="w-100 text-black" placeholder="نام پرسشنامه" type="text" />

        </div>
      </v-col>
      <v-col cols="4">
        <select @blur="createQuestionnaire" v-model="selectAgeAverage" class="box w-100 px-4" name="pets" id="pet-select">
          <option>انتخاب دسته سنی</option>
          <option value="A">بالای دو سال</option>
          <option value="U">زیر دو سال</option>
        </select>

      </v-col>
      <v-col cols="3">
        <div class="box btn w-100 pa-2 d-flex justify-center align-center bg-primary">
          سوال بعدی
        </div>
      </v-col>
    </v-row>
    <!-- aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa -->
    <v-row class="">
      <v-col cols="9">
        <div class="box w-100 px-4" type="text">
          <input v-model="question" class="w-100 text-black" placeholder="متن سوال" type="text" />

        </div>
      </v-col>
      <v-col cols="2">

        <div @click="dialog = true" class="box btn w-100 pa-2 d-flex justify-center align-center bg-primary">

          نوع پاسخ
        </div>

        <v-dialog v-model="dialog" width="400">

          <v-card>
            <button class="mr-2 mt-1" color="" block @click="dialog = false"><v-img width="20px" height="20px"
                src="@/assets/images/general/remove.png"></v-img></button>
            <p class="text-center text-h6 ">نوع پاسخ مورد نظر خود را انتخاب کنید.</p>


            <div class="radio-toolbar">
              <div class=" d-flex justify-space-around my-3">
                <input @click="dialog = false" v-model="picked" type="radio" id="radioApple" name="radioFruit" value="2">
                <label for="radioApple">بله/خیر</label>

                <input @click="dialog = false" v-model="picked" type="radio" id="radioBanana" name="radioFruit" value="4">
                <label for="radioBanana">چندگزینه ای</label>
              </div>

              <div class=" d-flex justify-space-around">
                <input @click="dialog = false" v-model="picked" type="radio" id="radioOrange" name="radioFruit" value="1">
                <label for="radioOrange">عددی</label>

                <input @click="dialog = false" v-model="picked" type="radio" id="tozih" name="radioFruit" value="3">
                <label for="tozih">توضیحی</label>
              </div>
            </div>

          </v-card>
        </v-dialog>
        <v-dialog v-model="doneQuestionnaire" width="400">

          <v-card class="">

            <p class="text-center text-h6 mt-3">پرسشنامه با موفقیت ایجاد شد.</p>
            <div class="text-center my-3">
              <button class="w-25 mx-auto mr-2 rounded mt-1 pa-0 bg-red" color="red" block
                @click="doneQuestionnaire = false">بستن</button>
            </div>
          </v-card>
        </v-dialog>
        <v-dialog v-model="doneQuestion" width="400">

          <v-card >
            <p class="text-center text-h6 mt-3">سوال با موفقیت ثبت شد.</p>
            <div class="text-center my-3">
              <button class="w-25 mx-auto mr-2 rounded mt-1 pa-0 bg-red" color="red" block
                @click="doneQuestion = false">بستن</button>
            </div>
          </v-card>
        </v-dialog>

      </v-col>
      <v-col cols="1">
        <div class="box btn w-100 pa-2 d-flex justify-center align-center bg-red">
          <v-icon icon="mdi-trash-can-outline" />
        </div>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-end ml-0">
      <div class="d-flex justify-space-around zz mt-14 mb-5">
        <button @click="publishQuestion" class="aaaa bg-propurple">
          انتشار
        </button>
        <button class="aaaa bg-red">
          انصراف
        </button>
      </div>
    </v-row>

    <div>

    </div>
  </v-container>
</template>

<script>
import Questionnaire from '@/services/Questionnaire'
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { ref } from 'vue'
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      doneQuestion : ref(false),
      idOfquestionnaire: ref(''),
      doneQuestionnaire: ref(false),
      question: '',
      title: '',
      selectAgeAverage: 'انتخاب دسته سنی',
      dialog: false,
      picked: ref('')
    }
  },
  validations() {
    return {
      question: { required },
      title: { required },
      selectAgeAverage: { required },
      picked: { required },
    };
  },
  methods: {
    xx() {
      this.dialog = false
    },
    createQuestionnaire() {
      if (!this.v$.title.$invalid && !this.v$.selectAgeAverage.$invalid) {
        console.log(this.title, this.selectAgeAverage);
        let bodyFormData = new FormData();
        const payload = {
          title: this.title,
          questionnaire_type: this.selectAgeAverage,
          which_age: 0,
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
              this.doneQuestionnaire = true
              this.idOfquestionnaire = res.id;
            }


          })
      }
    },
    publishQuestion() {
      if (!this.v$.$invalid) {
        let bodyFormData = new FormData();
        const payload = {
          title: this.question,
          question_type: this.picked,
          is_child_status: false,
          questionnaire: this.idOfquestionnaire

        };
        for (const key in payload) {
          bodyFormData.append(key, payload[key]);
        }

        Questionnaire
          .createQuestion(bodyFormData)
          .then((res) => {
            console.log(res);
            if(res.id){
              this.doneQuestion = true;
              this.question = ''
              this.title = ''
              this.selectAgeAverage = 'انتخاب دسته سنی'
              this.picked = ''
            }
          })
        // console.log(formData);
      }



    }
  }
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

.box {
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  height: 60px;
  font-family: "DanaFaNum";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;

  display: flex;
  align-items: center;
  text-align: right;

  color: #272b31;
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