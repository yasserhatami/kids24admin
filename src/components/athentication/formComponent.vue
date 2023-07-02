<template>
    <div dir="rtl" class="w-100 h-100 d-flex justify-center align-center">
        <v-sheet class="px-8 pt-8 sheet w-100" rounded>
            <div class="text-center mb-4">
                <p class="text-red text-h5" v-if="notMatchWarn">نام کاربری یا رمز عبور اشتباه است،لطفا دوباره تلاش کنید</p>
            </div>
            <v-text-field bg-color="#F9F9F9" autocomplete="true" v-model="state.userName" placeholder="نام کاربری(انگلیسی)"
                class="text-field mb-2" variant="solo" @blur="v$.userName.$touch"></v-text-field>

            <div class="text-red mb-2 text-subtitle-1" v-for="error of v$.userName.$errors" :key="error.$id">
                <div class="error-msg">{{ error.$message }}</div>
            </div>

            <v-text-field bg-color="#F9F9F9" autocomplete="true" @blur="v$.password.$touch" placeholder="رمز عبور"
                class="mb-0 pb-0 text-field" v-model="state.password" variant="solo"></v-text-field>
            <div class="text-red mb-2 text-subtitle-1" v-for="error of v$.password.$errors" :key="error.$id">
                <div class="error-msg">{{ error.$message }}</div>
            </div>

            <div>
                <v-btn @click="login()" block variant="elevated" class="btn mt-5">
                    <span v-if="activeLoading">ورود</span>
                    <v-progress-circular v-else indeterminate :size="34" :width="5"></v-progress-circular>
                </v-btn>
            </div>

            <p class="text-red mb-2 mt-2 text-subtitle-2" v-if="correct">اول فیلدهای بالا را پر کنید.</p>

            <div class="d-flex justify-center align-center mt-7 mb-5">
                <v-img class="img" :src="require('../../assets/images/athentication/brand.png')"></v-img>
            </div>
        </v-sheet>
    </div>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength, helpers } from "@vuelidate/validators";
import { reactive, ref } from "vue";
import { useRouter } from 'vue-router';

import auth from "@/services/auth.js";
export default {

    methods: {


    },

    setup() {
        let notMatchWarn = ref(false);
        let activeLoading = ref(true);

        const state = reactive({
            userName: "",
            password: ""
        });
        let correct = ref(false);

        const rules = {
            userName: {
                required: helpers.withMessage("پر بودن این فیلد الزامیست.", required),
                minLength,

            },

            password: {
                required: helpers.withMessage("پر بودن این فیلد الزامیست.", required),
                minLength
            }
        };

        const v$ = useVuelidate(rules, state);
        const router = useRouter()

        function login() {
            if (!this.v$.userName.$invalid && !this.v$.password.$invalid) {
                this.activeLoading = false;
                auth
                    .login({
                        phone_number: state.userName,
                        password: state.password
                    }).then((res) => {
                        console.log(res);
                        if (res.access) {
                            localStorage.setItem("token", `Bearer ${res.access}`);
                            router.push('/Dashboard')
                        } else {
                            this.activeLoading = true;
                            notMatchWarn.value = true
                            setTimeout(() => {
                                notMatchWarn.value = false;
                            }, 4000);
                            state.userName = '',
                                state.password = ''
                        }

                    })
            }


        }

        return { v$, state, correct, activeLoading, notMatchWarn, login };
    }
};
</script>
<style scoped>
.img {
    width: 174px;
    height: 39px;
}

* {
    font-family: "DanaFaNum";
}

.btn {
    height: 56px !important;
    color: #FFFFFF;
    background: rgb(137, 93, 237);
    background: linear-gradient(90deg, rgba(137, 93, 237, 1) 2%, rgba(136, 117, 177, 1) 49%, rgba(170, 151, 213, 1) 98%);
    box-shadow: -2px -2px 6px rgba(0, 0, 0, 0.1), 2px 2px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-family: "DanaFaNum";
    font-weight: 500;
    font-size: 20px;
}

.sheet {
    background: #FFFFFF;
    /* border: 1px solid #0c4bc1; */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2px);
    border-radius: 25px;
    max-width: 500px;
}

.text-field {
    font-family: "DanaFaNum" !important;
    height: 56px !important;
    /* */
}

.v-field__field input {
    background-color: red;
}
</style>