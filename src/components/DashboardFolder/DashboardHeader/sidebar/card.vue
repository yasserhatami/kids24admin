<template>
    <div class="mr-5 d-flex align-center">
        <div>
            <v-img style="width: 60px" class="img sss m-r8 pr-3" :src="require('@/assets/images/dashboard/Ellipse 1.png')"></v-img>
        </div>
        <!-- <div class=" textcontainer mt-5 mr-2">
            <div class="name">علی بابایی</div>
            <div class="code">کد کارمندی : 20156138</div>
        </div> -->
    </div>
</template>
  
<script>
export default {
    name: "CardComponent",
};
</script>
  
<style scoped>
.img {
    box-sizing: border-box;

    width: 60px;
    height: 60px;
}

.textcontainer {
    max-width: 168px;

}

.name {
    height: 30px;
    font-family: "DanaFaNum";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
}

.code {
    font-family: "DanaFaNum";
    color: #ffffff;
    height: 30px;
    font-style: normal;
    font-size: small;
}
</style>