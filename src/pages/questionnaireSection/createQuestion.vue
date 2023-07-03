<template >
    <v-container>
        <listOfqestonsOfquestionnaire v-if="allQuestons && allQuestons.length"  :allQuestons="allQuestons"></listOfqestonsOfquestionnaire>
        <v-row class="">
            <v-col cols="9">
                <div class="box w-100 px-4" type="text">
                    <input v-model="question" class="w-100 text-black" placeholder="متن سوال" type="text" />
                </div>
                <div class="text-red mb-2 text-subtitle-1" v-for="error of v$.question.$errors" :key="error.$id">
                    <div class="text-red">{{ error.$message }}</div>
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
                                <input @click="dialog = false" v-model="picked" type="radio" id="radioApple"
                                    name="radioFruit" value="2">
                                <label for="radioApple">بله/خیر</label>

                                <input @click="multiSelectionSelected" v-model="picked" type="radio" id="radioBanana"
                                    name="radioFruit" value="4">
                                <label for="radioBanana">چندگزینه ای</label>
                            </div>

                            <div class=" d-flex justify-space-around">
                                <input @click="dialog = false" v-model="picked" type="radio" id="radioOrange"
                                    name="radioFruit" value="1">
                                <label for="radioOrange">عددی</label>

                                <input @click="dialog = false" v-model="picked" type="radio" id="tozih" name="radioFruit"
                                    value="3">
                                <label for="tozih">توضیحی</label>
                            </div>
                        </div>

                    </v-card>
                </v-dialog>



                <v-dialog v-model="doneQuestion" width="400">

                    <v-card>
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
        <v-row v-if="picked === '4'">
            <div class="w-100">
                <multiSelecton></multiSelecton>
            </div>
        </v-row>
        <v-dialog v-model="doneQuestion" width="400">

            <v-card>
                <p class="text-center text-h6 mt-3">سوال با موفقیت ایجاد شد.</p>
                <div class="text-center my-3">
                    <button class="w-25 mx-auto mr-2 rounded mt-1 pa-0 bg-red" color="red" block
                        @click="doneQuestion = false">بستن</button>
                </div>
            </v-card>
        </v-dialog>

        <v-row class="d-flex justify-end ml-0">
            <div class="d-flex justify-space-around zz mt-14 mb-5">
                <button :disabled="idOfquestionnaire.length === 0" @click="publishQuestion" class="aaaa bg-propurple">
                    انتشار
                </button>
                <button @click="nn" class="aaaa bg-red">
                    انصراف
                </button><br>

            </div>
        </v-row>




    </v-container>
</template>
<script>
import listOfqestonsOfquestionnaire from "@/components/questionnaire/listOfqestonsOfquestionnaire.vue"
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import Questionnaire from '@/services/Questionnaire'
import multiSelecton from '@/components/questionnaire/multiselection.vue'
import { ref } from 'vue'
// import { reactive } from "vue";
export default {
    name: "createQuestion",
    props: ['idOfquestionnaire']
    ,
    setup() {
        return { v$: useVuelidate() };
    },
    data() {
        return {
            allQuestons: ref([]),
            question: ref(''),
            dialog: ref(false),
            doneQuestion: ref(false),
            picked: ref(''),
            shouldShowMultiSelect: ref(false),
            idOfquestionnaireProped: this.idOfquestionnaire,
          
        }
    },
    watch:{
        allQuestons(){
          console.log('ALIAKBVAAAAAAAAAAAAAAAAAAAAAAAAAAR');
        }
    },

    validations() {
        return {
            question: { required: helpers.withMessage("پر بودن این فیلد الزامیست.", required) },
        };
    },

    components: {

        multiSelecton,
        listOfqestonsOfquestionnaire
    },
    methods: {
       
        multiSelectionSelected() {
            this.shouldShowMultiSelect = true;
            this.dialog = false
        }
        ,
        xx() {
            this.dialog = false
        },
        publishQuestion() {
            if (!this.v$.$invalid) {
                let bodyFormData = new FormData();
                const payload = {
                    title: this.question,
                    question_type: this.picked,
                    is_child_status: false,
                    //prop
                    questionnaire: this.idOfquestionnaire

                };
                for (const key in payload) {
                    bodyFormData.append(key, payload[key]);
                }

                Questionnaire
                    .createQuestion(bodyFormData)
                    .then((response) => {
                        console.log(response);
                        if (response.id) {
                            this.doneQuestion = true;
                            Questionnaire
                                .getAllQuestion(this.idOfquestionnaire)
                                .then((res) => {
                                    this.allQuestons= res ;
                                    console.log('list of q',res);
                                })
                            //shart k 4 gozine bashe
                            if (this.picked === '4') {
                                for (let i = 0; i < 5; i++) {
                                    let text = localStorage.getItem(`choise${i}`);
                                    let bodyFormData = new FormData();
                                    const payload = {
                                        text: text,
                                        question: response.id,
                                    };
                                    for (const key in payload) {
                                        bodyFormData.append(key, payload[key]);
                                    }
                                    Questionnaire
                                        .sendChoices(bodyFormData)
                                        .then((choiseres) => {
                                            console.log(choiseres);
                                        })
                                    this.question = '';
                                    this.picked = ''
                                }
                            } else {
                                this.question = '';
                                this.picked = ''
                            }

                        }
                    })
            } else {
                
                console.log('ssssssssssssssSSSssssssssssssssssssssss');
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