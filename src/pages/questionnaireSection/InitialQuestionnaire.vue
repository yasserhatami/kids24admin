<template>
    <v-container fluid class="container mt-7 px-3" dir="rtl">
        <v-row class="px-10 px-md-0">
            <v-col cols="12" sm="6" class="pa-0 pa-sm-3 ">
                <div class="box w-100 pa-2" type="text">
                    <input @keyup="searchTitle" v-model="search" class=" w-100" placeholder="جست و جو..." type="text" />
                    <v-icon  icon="mdi-magnify"></v-icon> 
                </div>
            </v-col>
            <v-col class="pa-0 pa-sm-3" cols="12" sm="3">
                <router-link to="/InitialQuestionnaire/createquestionnaire" class=" text-decoration-none text-white ">
                    <div class="box btn w-100 pa-2 d-flex justify-center align-center bg-propurple">
                        افزودن
                    </div>
                </router-link>
            </v-col>

            <v-col class="pa-0 pa-sm-3 " cols="12" sm="3">
                <div @click="deleteItems" class="box btn w-100 pa-2 d-flex justify-center align-center bg-red">
                    حذف
                </div>
            </v-col>

        </v-row>
        <v-row class="mt-9">
            <tabInInitial :searchValues="searchValues" :updateQuestionnairTable = updateQuestionnairTable></tabInInitial>
        </v-row>
        <router-view></router-view>
    </v-container>
</template>
<script>
import { useCunterStore } from '@/store/questonnaireStore.js'
import Questionnaire from '@/services/Questionnaire'
import tabInInitial from "@/components/questionnaire/tabInInitial.vue";
import { ref,watch } from 'vue';
export default {
    setup() {
        
        const store = useCunterStore()

        let search = ref('')
        let searchValues = ref([])
        let updateQuestionnairTable = ref(true)

        function deleteItems() {
            let items = store.shouldDeleteItems;
            
            for (const key in items) {
                var value = items[key];
                Questionnaire
                .deleteQuestionnaire(value)
                .then(() => {
                updateQuestionnairTable.value =! updateQuestionnairTable.value
                 })
            }
            store.cleaneSate()
        }
        watch(search,()=>{
            if(search.value === ''){
                searchValues.value = '';
                updateQuestionnairTable.value =! updateQuestionnairTable.value
            }
        })

        function searchTitle(){
            Questionnaire
             .searchInAllQuestionnaire(search.value)
             .then((res)=>{
                searchValues.value = res;
                updateQuestionnairTable.value =! updateQuestionnairTable.value
                
             })
        }

        return { store, deleteItems ,updateQuestionnairTable,search,searchTitle,searchValues}
    },
    data() {
        return {
            select: "",
        };
    },
    components: {
        tabInInitial,
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