<template >
    <v-container class="">
        <listOfqestonsOfquestionnaire v-if="allQuestons && allQuestons.length" @update="update" :allQuestons="allQuestons">
        </listOfqestonsOfquestionnaire>
        <v-row v-if="cancelCreate" class=" pa-0 d-flex justify-center align-center">
            <!-- date of question -->
            <v-col cols="12" sm="9" class="px-0">
                <div class="box  px-4" type="text">
                    <input @blur="v$.question.$touch" v-model="question" class="w-100 text-black text-h6"
                        placeholder="متن سوال" type="text" />
                </div>
                <div class="text-red mb-2 text-subtitle-2 text-sm-h6" v-for="error of v$.question.$errors" :key="error.$id">
                    <div class="text-red">{{ error.$message }}</div>
                </div>

            </v-col>
            <!-- date of question -->

            <!-- type of question -->
            <v-col cols="12" sm="3" class="px-0 d-flex justify-center align-center">
                <v-col class="px-1 " cols="6" sm="6">

                    <div @click="dialog = true" @blur="v$.picked.$touch"
                        class="box d-flex justify-center align-center bg-primary ">

                        نوع پاسخ
                    </div>
                    <div class="text-red mb-2 text-subtitle-2 text-sm-h6" v-if="multi">
                        <div class="text-red">نوع پاسخ باید انتخاب گردد.</div>
                    </div>


                    <v-dialog v-model="dialog" width="400">
                        <v-card>
                            <button class="mr-2 mt-1" color="" block @click="dialog = false"><v-img width="20px"
                                    height="20px" src="@/assets/images/general/remove.png"></v-img></button>
                            <p class="text-center text-h6 ">نوع پاسخ مورد نظر خود را انتخاب کنید.</p>


                            <div class="radio-toolbar">
                                <div class=" d-flex justify-space-around my-3">
                                    <input @change="v$.picked.$touch" @click="dialog = false" v-model="picked" type="radio"
                                        id="radioApple" name="radioFruit" value="2">
                                    <label for="radioApple">بله/خیر</label>

                                    <input @change="v$.picked.$touch" @click="multiSelectionSelected" v-model="picked"
                                        type="radio" id="radioBanana" name="radioFruit" value="4">
                                    <label for="radioBanana">چندگزینه ای</label>
                                </div>

                                <div class=" d-flex justify-space-around">
                                    <input @change="v$.picked.$touch" @click="dialog = false" v-model="picked" type="radio"
                                        id="radioOrange" name="radioFruit" value="1">
                                    <label for="radioOrange">عددی</label>

                                    <input @change="v$.picked.$touch" @click="dialog = false" v-model="picked" type="radio"
                                        id="tozih" name="radioFruit" value="3">
                                    <label for="tozih">توضیحی</label>
                                </div>
                            </div>

                        </v-card>
                    </v-dialog>


                </v-col>
                <!-- type of question -->
                <!-- trash -->
                <v-col class="pl-1 " cols="6" sm="6">
                    <div  class=" box d-flex justify-center align-center bg-red">
                        <v-icon  icon="mdi-trash-can-outline" />
                    </div>
                </v-col>
                <!-- trash -->
            </v-col>
        </v-row>

        <v-row v-if="picked === '4'">
            <div class="w-100">
                <multiSelecton></multiSelecton>
            </div>
        </v-row>
        <v-row v-if="picked === '2'">
            <div class="w-100 d-flex justify-center align-center">
                <button class="box mx-2 d-flex justify-center align-center  w-25" disabled><span>بله</span></button>
                <button class="box mx-2 d-flex justify-center align-center text-center w-25"
                    disabled><span>خیر</span></button>
            </div>
            <div class="w-100 mt-3">
                <input class="box mx-2 pr-3 w-75" type="text" disabled placeholder="توضیحات">
            </div>
        </v-row>

        <v-row class="d-flex justify-center align-center ">
            <v-col cols="5">
                <button @click="publishQuestion" class="box w-100 bg-primary d-flex   text-button justify-center my-5">
                    ایجاد سوال بعدی
                </button>
            </v-col>
        </v-row>



        <v-dialog v-model="finishOperation" width="400">

            <v-card>
                <p class="text-center text-h6 mt-3">با اینکار عملیات ایجاد پرسشنامه به انتها میرسد و سوالات ارسال
                    میشوند،.اطمینان دارید؟</p>
                <div class="text-center my-3">
                    <button class="w-25 mx-auto mr-2 rounded mt-1 pa-0 bg-primary" color="red" block
                        @click="finalOperation">بله</button>
                    <button class="w-25 mx-auto mr-2 rounded mt-1 pa-0 bg-red" color="red" block
                        @click="finishOperation = false">بازگشت</button>
                </div>
            </v-card>
        </v-dialog>

        <v-row class="d-flex justify-end ml-0">
            <div class="d-flex justify-space-around zz mt-14 mb-5">
                <button @click="finishOperation = true" :disabled="idOfquestionnaire.length === 0"
                    class="box w-50 bg-propurple d-flex justify-center text-subtitle-2 text-sm-h6 mx-2">
                    انتشار
                </button>
                <button @click="cancelEveryThings"
                    class="box w-50 bg-red d-flex text-subtitle-2 text-sm-h6 justify-center mx-2">
                    انصراف
                </button><br>

            </div>
            <br>
        </v-row>




    </v-container>
</template>
<script>
import listOfqestonsOfquestionnaire from "@/components/questionnaire/listOfqestonsOfquestionnaire.vue"

import { useCunterStore } from '@/store/questonnaireStore.js'
import { mapState, mapActions } from "pinia";

import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import Questionnaire from '@/services/Questionnaire'
import multiSelecton from '@/components/questionnaire/multiselection.vue'
import { ref } from 'vue'
// import { reactive } from "vue";
export default {
    name: "createQuestion",
    props: ['idOfquestionnaire', 'questionnaireType']
    ,
    setup() {
        return { v$: useVuelidate() };
    },
    data() {
        return {
            finishOperation: ref(false),
            multi: ref(false),
            allQuestons: ref([]),
            updateQuestions: ref([]),
            question: ref(''),
            dialog: ref(false),
            finishAlert: ref(false),
            picked: ref(''),
            shouldShowMultiSelect: ref(false),
            idOfquestionnaireProped: this.idOfquestionnaire,
            questionnaireTypepropped: this.questionnaireType,
            cancelCreate: ref(true)

        }
    },
    watch: {
        allQuestons() {
        }
    },
    computed: {
        ...mapState(useCunterStore, ["choices"])
    },

    validations() {
        return {
            question: { required: helpers.withMessage("پر بودن این فیلد الزامیست.", required) },
            picked: { required: helpers.withMessage("نوع پاسخ را انتخاب کنید.", required) },
        };
    },

    components: {

        multiSelecton,
        listOfqestonsOfquestionnaire
    },
    methods: {
        ...mapActions(useCunterStore, ["clearChoices"]),
        sss() {
            // for (const item of this.choices) {
            //     console.log(item);
            // }
            for (const item of this.choices[0]) {
                console.log(item);


            }
            console.log(this.choices[0]);
        }
        ,
        update() {
            Questionnaire
                .getAllQuestion(this.idOfquestionnaire)
                .then((res) => {
                    this.allQuestons = res;
                })
            console.log('yessssss');
        },
        cancelEveryThings() {
            this.$emit('cancel-everything');
        },
        finalOperation() {

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
                            //shart k 4 gozine bashe
                            if (this.picked === '4') {
                                for (let i = 1; i <= 4; i++) {
                                    let text = localStorage.getItem(`choice${i}`);
                                    console.log(`choice${i}`, text);
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
                                }
                            }
                            this.picked = ''
                            this.question = ''
                            this.allQuestons = []
                            this.cancelEveryThings();
                            if (this.questionnaireTypepropped === 0) {
                                this.$router.push('/InitialMentalQuestionnaire')
                            } else {

                                this.$router.push('/InitialQuestionnaire')
                            }

                        }
                    })
            } else {
                console.log('nissssssssssssssssssss');
                if (this.v$.picked.$invalid) {
                    this.multi = true
                    setTimeout(() => {
                        this.multi = false
                    }, 5000)

                }

            }
        },
        cancelCreateQuestion() {
            console.log('ccccccccccccccccc');
            this.picked = ''
            this.question = ''
            this.v$.question.$reset()
            this.v$.picked.$reset()
           
            this.cancelCreate = false
        },

        multiSelectionSelected() {
            this.shouldShowMultiSelect = true;
            this.dialog = false
        }
        ,
        xx() {
            this.dialog = false
        },
        publishQuestion() {
            if (this.cancelCreate == false) {
                this.cancelCreate = true
                return
            }
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
                            // this.doneQuestion = true;
                            if (this.picked === '4') {
                                for (const item of this.choices[0]) {
                                    console.log(item);
                                    let bodyFormData = new FormData();
                                    const payload = {
                                        text: item,
                                        question: response.id,
                                    };
                                    for (const key in payload) {

                                        bodyFormData.append(key, payload[key]);
                                    }
                                    Questionnaire
                                        .sendChoices(bodyFormData)
                                    // .then((choiseres) => {
                                    //     console.log(choiseres);
                                    // })
                                    this.question = '';
                                    this.picked = ''
                                }
                                this.clearChoices()

                            } else {
                                this.question = '';
                                this.picked = ''
                            }
                            Questionnaire
                                .getAllQuestion(this.idOfquestionnaire)
                                .then((res) => {
                                    this.allQuestons = res;
                                })
                        }
                    })
            } else {
                if (this.v$.picked.$invalid) {
                    this.multi = true
                    setTimeout(() => {
                        this.multi = false
                    }, 5000)

                }

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
    color: white;
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