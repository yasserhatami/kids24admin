<template>
  <v-container>
    <v-row>
      <v-col cols="5">
        <div class="box w-100 px-4" type="text">
          <input class="w-100 text-black" placeholder="نام پرسشنامه" type="text" />

        </div>
      </v-col>
      <v-col cols="4">
        <select class="box w-100 px-4" name="pets" id="pet-select">
            <option >انتخاب دسته سنی</option>
            <option value="بالای دو سال">بالای دو سال</option>
            <option value="زیر دو سال">زیر دو سال</option>
        </select>
         
      </v-col>
      <v-col cols="3">
        <div class="box btn w-100 pa-2 d-flex justify-center align-center bg-primary">
                   سوال بعدی
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="9">
        <div class="box w-100 px-4" type="text">
          <input class="w-100 text-black" placeholder="متن سوال" type="text" />

        </div>
      </v-col>
      <v-col cols="2">
        
        <div  @click="dialog = true" class="box btn w-100 pa-2 d-flex justify-center align-center bg-primary">
           
              نوع پاسخ
        </div>

        <v-dialog v-model="dialog" width="400">
      <v-card>
        <div class=" d-flex justify-start">
          <button class="mr-2 mt-1" color="" block @click="dialog = false"><v-img width="20px" height="20px" src="@/assets/images/general/remove.png"></v-img></button>
        </div>
          <div class="text-center ">
            <p class="text-center text-h6 ">نوع پاسخ مورد نظر خود را انتخاب کنید.</p>
            <div class="w-75 mx-auto d-flex justify-space-around mt-4">
              
        <v-btn id="1" @click="select(id,value)" value="a" width="140" class="text-teal-lighten-1 text-h6" color="white"> بله/خیر</v-btn>
        <v-btn id="2" @click="select(id,value)" value="b" width="140" class="text-teal-lighten-1 text-h6" color="white">چند گزینه ای</v-btn>
            </div>
            <div class="w-75 mx-auto d-flex justify-space-around my-4">
              
              <v-btn id="3" @click="select(id,value)" value="c" width="140" class="text-teal-lighten-1 text-h6" color="white">عددی</v-btn>
              <v-btn id="4" @click="select('1',value)" value="d" width="140" class="text-teal-lighten-1 text-h6" color="white"><input type="radio"> توضیحی</v-btn>
                  </div>
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
    {{aa}}
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        dialog: true,
        aa : ''
      }
    },
    methods:{
      select(id,value){
        console.log(id,value);
      }
    }
  }
</script>


<style scoped>
input::placeholder {
    
     color: #272b31;;
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
option{
 cursor: pointer;
}
input{
  outline: none;
}
</style>