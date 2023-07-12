<template>
    <v-container fluid="">
        <v-row>
            <v-col cols="12">
                <v-row class="mx-5 my-5" v-for="q in data" :key="q.id">
                    <div class=" w-100 ">
                        <div class="d-flex justify-start">
                            <h2>
                                نام پرسشنامه : {{ q.title }}
                            </h2>
                        </div>

                        <div class="d-flex justify-start">
                            <h3>
                                بازه سنی : {{ q.which_age }} ماه
                            </h3>
                        </div>
                    </div>
                </v-row>
            </v-col>
        </v-row>
        <w-row>
            <div class="border rounded pa-7  my-3" v-for="q in allQuestons.value" :key="q.id">

                <v-row>
                    <v-col cols="9">
                        <div class="box w-100 px-4" type="text">
                            <input disabled class="w-100 text-black" :placeholder="q.title" />
                        </div>
                    </v-col>
                    <v-col cols="2">

                        <div class="text-subtitle-1 box btn w-100 pa-2 d-flex justify-center align-center bg-primary">

                            <span v-if="q.question_type === 1">توضیحی</span>

                            <span v-if="q.question_type === 2">بله/خیر</span>
                            <span v-if="q.question_type === 3">عددی</span>
                            <span v-if="q.question_type === 4">چهارگزینه ای</span>
                        </div>
                    </v-col>
                    <v-col cols="1">
                        <div class="box btn w-100 pa-2 d-flex justify-center align-center bg-red">
                            <v-icon @click="deleteItem(q.title, q.question_type, q.questionnaire, q.id)"
                                icon="mdi-trash-can-outline" />
                        </div>
                    </v-col>
                </v-row>
                <v-row v-if="q.question_type_display === 'multiple choice'">
                    <div class="d-flex justify-start align-center   mr-2">
                        <div v-for="(input, index) in q.choices" :key="index" class=" w-25 box mr-2  px-4" type="text">
                            <input id='ss' ref="ssss" :placeholder="input.text" class="w-100 text-black" disabled />
                        </div>
                    </div>
                </v-row>
                <v-row v-if="q.question_type_display === 'yes no'">
                    <div class="w-100 d-flex justify-center align-center">
                        <button class="box mx-2 d-flex justify-center align-center  w-25" disabled><span>بله</span></button>
                        <button class="box mx-2 d-flex justify-center align-center text-center w-25"
                            disabled><span>خیر</span></button>
                    </div>
                    <div class="w-100 mt-3">
                        <input class="box mx-2 pr-3 w-75" type="text" disabled placeholder="توضیحات">
                    </div>
                </v-row><div>
                    
                </div>
            </div>
        </w-row>
    </v-container>
</template>

<script setup>
import { defineProps, onBeforeMount, reactive } from "vue";
import Questionnaire from '@/services/Questionnaire'

const props = defineProps({
    id: {
        type: Number,
        required: true,
    }
})

let data = reactive({})
let allQuestons = reactive({});

onBeforeMount(() => {
    Questionnaire
        .getSingleQuestionnaire(props.id)
        .then((res) => {
            data.value = res
        }),
        Questionnaire
            .getAllQuestion(props.id)
            .then((res) => {
                console.log(props.id);
                allQuestons.value = res;

            })



})
function deleteItem(title, type, questionnaire, id) {
    let bodyFormData = new FormData();
    const payload = {
        title: title,
        question_type: type,
        is_child_status: false,
        //prop
        questionnaire: questionnaire
    };
    for (const key in payload) {
        bodyFormData.append(key, payload[key]);
    }
    Questionnaire
        .deleteQuestion(bodyFormData, id)
        .then(() => {
            Questionnaire
                .getAllQuestion(props.id)
                .then((res) => {
                    allQuestons.value = res;
                })
        })
}

</script>

<style></style>