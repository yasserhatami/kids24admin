<template>
    <v-container fluid class="container mt-7 px-3" dir="rtl">
        <v-row class="px-10 px-md-0">
            <v-col cols="12" sm="6" class="pa-0 pa-md-3">
                <div class="box w-100 pa-2" type="text">
                    <input class="w-100" placeholder="جست و جو..." type="text" />
                    <v-icon icon="mdi-magnify"></v-icon>
                </div>
            </v-col>
            <v-col class="pa-0 pa-md-3" cols="12" sm="3">
                <router-link to="/InitialMentalQuestionnaire/createMentalQuestionnaire" class=" text-decoration-none text-white ">
                    <div class="box btn w-100 pa-2 d-flex justify-center align-center bg-propurple">
                        افزودن
                    </div>
                </router-link>
            </v-col>

            <v-col class="pa-0 pa-md-3" cols="12" sm="3">
                <div @click="deleteItems" class="box btn w-100 pa-2 d-flex justify-center align-center bg-red">
                    حذف
                </div>
            </v-col>

        </v-row>
        <v-row class="mt-9">
            <tabInMentalInitial :updateQuestionnairTable = updateQuestionnairTable></tabInMentalInitial>
        </v-row>
        <router-view></router-view>
    </v-container>
</template>
<script>
import { useCunterStore } from '@/store/mentalQuestonnaireStore.js'
import Questionnaire from '@/services/Questionnaire'
import tabInMentalInitial from "@/components/questionnaire/mentalQuestionnair/tableMentalInitial.vue";
import { ref } from 'vue';
export default {
    setup() {
        const store = useCunterStore()
        let updateQuestionnairTable = ref(true)

        function deleteItems() {
            let items = store.shouldDeleteItems;
            const promises = []
            for (const key in items) {
                var value = items[key];
                promises.push(Questionnaire
                .deleteQuestionnaire(value))
            }

            Promise.all(promises).then(() => {
                updateQuestionnairTable.value =! updateQuestionnairTable.value
                store.cleaneSate()
            })

           
        }

        return { store, deleteItems ,updateQuestionnairTable}
    },
    data() {
        return {
            select: "",
        };
    },
    components: {
        tabInMentalInitial,
    },
};
</script>
<style scoped>
.btn {
    font-style: normal;
    font-weight: 500 !important;
    font-size: 24px !important;
    line-height: 30px !important;

    color: #ffffff !important;

}

.box {
    background: #ffffff;
    border: 1px solid #d9d9d9;
    border-radius: 20px;
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

input {
    outline: none;
}

#select {
    width: 90%;
    height: 100%;
    outline: none;
}

.aa {
    width: 10px;
    height: 10px;
    padding: 0;
}

.bb {
    width: 100%;
}
</style>