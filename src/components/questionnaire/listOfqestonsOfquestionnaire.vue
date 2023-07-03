<template >
    <v-container>
        <div v-for="q in allQuestonsrpopped" :key="q.id">
            <v-row>
                <v-col cols="9">
                    <div class="box w-100 px-4" type="text">
                        <input disabled class="w-100 text-black" :placeholder="q.title" />
                    </div>
                </v-col>
                <v-col cols="2">

                    <div @click="dialog = true" class="box btn w-100 pa-2 d-flex justify-center align-center bg-primary">
                        {{ q.question_type }}
                    </div>
                </v-col>
                <v-col cols="1">
                    <div class="box btn w-100 pa-2 d-flex justify-center align-center bg-red">
                        <v-icon icon="mdi-trash-can-outline" />
                    </div>
                </v-col>
            </v-row>
            <v-row v-if="q.question_type === 4">
                <div class="d-flex justify-start align-center   mr-2">
                    <div v-for="(input, index) in q.choices" :key="index" class=" w-25 box mr-2  px-4" type="text">
                        <input id='ss' ref="ssss"  :placeholder="q.text" class="w-100 text-black" disabled />
                    </div>
                </div>
            </v-row>
            {{ allQuestonsrpopped }}

        </div>
    </v-container>
</template>
<script>

import { toRefs } from 'vue'
// import { reactive } from "vue";
export default {

    props: ['allQuestons'],

    setup(props) {
        console.log(props.allQuestons);
        let { allQuestons: allQuestonsrpopped } = toRefs(props);


        return { allQuestonsrpopped }
    },


}
</script>
<style scoped>
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