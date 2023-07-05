<template>
    <v-container fluid="">
        <v-row>
            <v-col cols="12">
                <v-row class="mx-5 my-5" v-for="q in data" :key="q.id">
                    <div class=" w-100 bg-red">
                        <div class="d-flex justify-start">
                            <h2>
                                نام پرسشنامه : {{ q.title }}
                            </h2>
                        </div>

                        <div class="d-flex justify-start">
                            <h3>
                                بازه سنی : {{ q.questionnaire_type === 'U' ? 'زیر دوسال' : 'بالای دو سال' }}
                            </h3>
                        </div>
                    </div>
                </v-row>
            </v-col>
        </v-row>
        <w-row>
            <div class="border rounded pa-7  my-3" v-for="q in allQuestons" :key="q.id">
                <v-row>
                    <v-col cols="9">
                        <div class="box w-100 px-4" type="text">
                            <input disabled class="w-100 text-black" :placeholder="q.title" />
                        </div>
                    </v-col>
                    <v-col cols="2">

                        <div @click="dialog = true"
                            class="box btn w-100 pa-2 d-flex justify-center align-center bg-primary">
                            {{ q.question_type }}
                        </div>
                    </v-col>
                    <v-col cols="1">
                        <div class="box btn w-100 pa-2 d-flex justify-center align-center bg-red">
                            <v-icon icon="mdi-trash-can-outline" />
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
                allQuestons.value = res;
                console.log('list of ques', res);

            })



})

</script>

<style></style>