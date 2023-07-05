<template >
  <v-container fluid dir="">
    <v-row>
      <v-col class="">
        <table id="customers" class="" dir="rtl">
          <tr class="">
            <th class="text-center first"><input class="" type="checkbox" /></th>
            <th class="text-center"> نام پرسشنامه</th>
            <th class="text-center"> سن پرسشنامه</th>
            <th class="text-center ">تاریخ</th>
            <th class="text-center end"></th>
          </tr>
          <tr v-for="q in firstTenQuestionnaires" :key="q.id">
            <td>
              <input @change="deleteQuestonnaire(q.id)" class="" type="checkbox">
            </td>
            <td>{{ q.title }}</td>
            <td>{{ q.questionnaire_type === 'U' ? 'زیر دو سال' : "بالای دو سال" }}</td>
            <td>{{ q.create_at }}</td>
            <td>
              <v-icon @click="whatchQuestionnaire(q.id)" icon="mdi-eye" />

            </td>

          </tr>

        </table>


        <div class=" mb-10 w-100 footer d-flex justify-center align-center">
          <button v-if="count > 1" value="قبلی" class="mr-3 text-h6" @click="nextarr">قبلی</button>
          <button v-if="firstTenQuestionnaires.length === 10" value="بعدی" class="mr-3 text-h6" @click="nextarr">بعدی</button>

        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { useRouter } from 'vue-router'
import Questionnaire from '@/services/Questionnaire'
import { useCunterStore } from '@/store/questonnaireStore.js'
import { toRefs } from 'vue'
import { ref, watch, onMounted } from 'vue'
// import Api from "@/utils/axios.js";
export default {
  props: ['updateQuestionnairTable'],
  setup(props) {
    const router = useRouter()
    const store = useCunterStore()
    let firstTenQuestionnaires = ref([])
    let count = ref(1)
    function deleteQuestonnaire(x) {
      store.getvalue(x)
    }
    function updateTable() {
      console.log('loggggggggggg');
      Questionnaire
        .getAllQuestionnaire(count.value)
        .then((res) => {
          console.log('fuckkkkkkkkkkkkkkkkkk', res);
          firstTenQuestionnaires.value = res
        })
    }

    let { updateQuestionnairTable: updateQuestionnairTableProped } = toRefs(props);

    function nextarr(e) {
      if (e.target.value === 'بعدی') {
        count.value++
      } else {
        count.value--
      }

      Questionnaire
        .getAllQuestionnaire(count.value)
        .then((res) => {
          console.log();
          firstTenQuestionnaires.value = res
        })
    }

    function whatchQuestionnaire(id) {


      router.push(`/InitialQuestionnaire/${id}`)


    }

    onMounted(() => {
      let firstCount = 1
      Questionnaire.
        getAllQuestionnaire(firstCount)
        .then((res) => {
          firstTenQuestionnaires.value = res
        })
    })

    watch(updateQuestionnairTableProped, () => {
      updateTable()
    });


    return {
      router,
      whatchQuestionnaire,
      count,
      firstTenQuestionnaires,

      nextarr,
      store,
      deleteQuestonnaire,
      updateQuestionnairTableProped,
      updateTable
    }

  }
}

</script>
<style>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  font-family: "DanaFaNum";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;

  color: gray;
}

#customers tr {
  padding: 5px;
}

td div {
  padding: 3px;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  text-align: center;
  padding: 8px;
}

/* #customers tr:nth-child(even) {
  background-color: #f2f2f2;
} */

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #d9d9d9;
  border: none !important;
  color: rgb(14, 12, 12);
}

.first {
  border-top-right-radius: 25px;
}

.end {
  border-top-left-radius: 25px;
}

.footer {
  border: 1px solid #ddd;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  height: 60px;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}
</style>