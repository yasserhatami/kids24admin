<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer width="400" color="primary" v-model="drawer" location="right" temporary>
                <sidebarcomponent />

            </v-navigation-drawer>


            <v-app-bar class="pt-0 ccc" color="primary" :elevation="2">
                <div class=" h-100 w-100 d-flex align-center justify-space-between">
                    <div class="d-flex align-center h-100">

                        <v-img style="width: 60px" class="img sss mr-0 mr-lg-2 pr-3"
                            :src="require('@/assets/images/dashboard/Ellipse 1.png')"></v-img>

                        <div class="d-flex align-center w-25 h-100 mr-2">
                            <v-icon class="w-0" @click="drawer = true" color="success" icon="mdi-menu-left"
                                size="xx-large"></v-icon>
                        </div>
                    </div>
                    <div class=" d-flex align-center h-100">
                        <div class="bg-secondary d-flex align-center px-3 h-100">
                            <DtaeAndTimeComponent />
                        </div>
                        <p class="px-3">kids24</p>

                    </div>


                </div>

            </v-app-bar>


            <v-main style="">
                <slot> </slot>
            </v-main>
        </v-layout>
    </v-card>
</template>
  
<script>
import DtaeAndTimeComponent from "@/components/DashboardFolder/DashboardHeader/date/DateAndTime.vue";
import Sidebarcomponent from "@/components/DashboardFolder/DashboardHeader/sidebar/sidebarComponent.vue";
export default {
    data() {
        return {
            drawer: false,
        };
    },
    components: {
        DtaeAndTimeComponent,
        Sidebarcomponent,
    },
    methods: {
        onClickOutside() {
            this.active = false
        }
    },

};
</script>
  
<style>
p {
    font-family: "DanaFaNum" !important;
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 36px;
}
</style>