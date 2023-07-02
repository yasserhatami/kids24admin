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
          <tr v-for="(q, index) in firstTenQuestionnaires" :key="index">
            <td>
              <input class="" type="checkbox">
            </td>
            <td>{{ q.title }}</td>
            <td>{{ q.questionnaire_type === 'U' ? 'زیر دو سال' : "بالای دو سال" }}</td>
            <td>{{ q.create_at }}</td>
            <td><v-icon icon="mdi-eye" /></td>

          </tr>

        </table>


        <div class="mb-10 w-100 footer d-flex justify-center align-center">
          <button value="بعدی" class="mr-3" @click="nextarr($event)">بعدی</button>
          <button value="قبلی" class="mr-3" @click="nextarr($event)">قبلی</button>
          <!-- <div class="pagination">
                      <a href="#">&raquo;</a>

                      <a href="#">1</a>
                      <a href="#">2</a>
                      <a href="#">3</a>
                      <a href="#">4</a>
                      <a href="#">5</a>
                      <a href="#">6</a>
                      <a href="#">&laquo;</a>
                  </div> -->
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { ref } from 'vue'
import Api from "@/utils/axios.js";
export default {
  setup() {
    // let count = ref(1)
    return {
      count: ref(1)
    }
  },
  data() {
    return {
      firstTenQuestionnaires: ref([]),
      // count : ref(1)
    }
  }
  ,
  mounted() {
    let firstCount = 1
    this.getAllQuestionnaire(firstCount)
      .then((res) => {
        this.firstTenQuestionnaires = res
      })

    console.log(this.firstTenQuestionnaires);
  },
  methods: {
    nextarr(event) {
      if(event.target.value === 'بعدی'){
        this.count ++
      }else{
        this.count--
      }

      this.getAllQuestionnaire(this.count)
        .then((res) => {
          this.firstTenQuestionnaires = res
        })
    }
    ,
    getAllQuestionnaire: async (count) => {
      return await Api({
        // "http://kids24.iambenyamin.com/api/admin/questionnaire/?page=2&s=false"
        url: `/api/admin/questionnaire/?page=${count}&s=false`,
        method: 'GET',
      }).then((res) => {
        // let firstTenQuestionnaires = res.id
        console.log('kkkkkkkkkkkkk', res);
        // this.firstTenQuestionnaires = ref([])
        return res.data.results
      })
    }
  }
};
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