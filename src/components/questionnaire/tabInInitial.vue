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
                  <tr>
                      <td>
                          <input class="" type="checkbox">
                      </td>
                      <td>پرسشنامه یکم</td>
                      <td>زیر دو سال</td>
                      <td>1402/5/4</td>
                      <td>eye</td>

                  </tr>

              </table>


              <div class="mb-10 w-100 footer d-flex justify-center align-center">
                  <div class="pagination">
                      <a href="#">&raquo;</a>

                      <a href="#">1</a>
                      <a href="#">2</a>
                      <a href="#">3</a>
                      <a href="#">4</a>
                      <a href="#">5</a>
                      <a href="#">6</a>
                      <a href="#">&laquo;</a>
                  </div>
              </div>
          </v-col>
      </v-row>
  </v-container>
</template>
<script>
export default {};
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
}</style>