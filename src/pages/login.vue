<template>
    <v-container fluid class="pt-0 px-0">
        <v-row class="ma-0 pa-0">
            <v-col class="ma-0 pa-0 ">
                <v-card class="card-image h-screen w-100 border-none">
                    <!-- <v-img class="" cover :src="require('')"> -->
                    <v-row class=" h-100 pa-0 ma-0">
                        <v-col cols="6" class="blur h-100  pa-0 ma-0">
                            <div class="w-100  d-flex justify-center align-center logocontainer">
                                <div class="logoraper">
                                    <imageOfLogin class=" w-100 h-100" />
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="6" class="h-100 mb-10 pa-0 ma-0">
                            <div class="w-100 h-100 d-flex justify-center align-center ">
                                <div class="formraper">
                                    <formComponent />
                                </div>
                            </div>
                        </v-col>

                    </v-row>
                    <!-- </v-img> -->
                </v-card>
            </v-col>

        </v-row>
    </v-container>
</template>
<script>
import imageOfLogin from "@/components/athentication/imageOfLogin.vue";
import formComponent from "@/components/athentication/formComponent.vue"
export default {
    name: "LogIn",
    components: {
        formComponent,
        imageOfLogin,
    }
};
</script>
<style>
.logoraper {
    width: 100%;
    height: 50%;
}

.blur {
    background: #F7F5FB;
    backdrop-filter: blur(5px);
}

.logocontainer {
    height: 98%;
}

.formraper {
    width: 80%;
}
</style>