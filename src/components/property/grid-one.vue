<template>
    <div class="row justify-content-center g-4">
        <div v-for="(item, index) in propertyData.slice(0,6)" :key="index" class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <GridLayout :item="item" :border="border"/>
        </div>
    </div>
</template>

<script setup>
    import {defineProps} from 'vue'
    import { propertyData } from '@/data/data';
    import GridLayout from './grid-layout.vue';

    defineProps({
        border:Boolean
    })
</script>
