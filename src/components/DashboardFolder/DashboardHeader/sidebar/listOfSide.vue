<template>
    <v-card class="bg-primary shadow-none" width="400">
        <v-list v-model:opened="open">
            <v-list-item prepend-icon="mdi-home" title="داشبورد"></v-list-item>
            <v-list-item prepend-icon="mdi-home"  title="کاربران"></v-list-item>
            <v-list-item prepend-icon="mdi-home"  title="تغذیه"></v-list-item>
            <v-list-item prepend-icon="mdi-home"  title="بنر"></v-list-item>
            <v-list-item prepend-icon="mdi-home"  title="تیکت ها "></v-list-item>
            <v-list-item prepend-icon="mdi-home"  title="ارسال پیام"></v-list-item>
            <v-list-item prepend-icon="mdi-home"  title="پیام برودکست"></v-list-item>
            <v-list-item prepend-icon="mdi-home"  title="ابزارها"></v-list-item>
            <v-list-item prepend-icon="mdi-home"  title="انجمن"></v-list-item>
            <v-list-item prepend-icon="mdi-home"  title="نظرات"></v-list-item>
            <v-list-item prepend-icon="mdi-home"  title="پکیج ها"></v-list-item>
            <v-list-item prepend-icon="mdi-home"  title="سوابق مالی"></v-list-item>
            
            <v-list-group value="list">
                <v-list-group class="d-flex-colomn " value="پرسشنامه">
                    <template  v-slot:activator="{ props }">
                        <v-list-item class="mr-0" v-bind="props" title="پرسشنامه"></v-list-item>
                        
                    </template>

                    <v-list-item  v-for="([title, icon,aa], i) in admins" :key="i" :class="aa" :title="title" :prepend-icon="icon"
                        :value="title"></v-list-item>
                </v-list-group>


            </v-list-group>
        </v-list>
    </v-card>
</template>
<script>
export default {
    data: () => ({
        open: ['list'],
        admins: [
            ['پرسشنامه اولیه', 'mdi-account-multiple-outline','bg-yellow w-100'],
            ['پرسشنامه ذهنی حرکتی', 'mdi-cog-outline','bg-black w-100'],
        ]
    }),
}
</script>