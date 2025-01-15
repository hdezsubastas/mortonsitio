<template>
    <Multiselect v-model="selected" :options="shorty" placeholder="Show All" class="form-control px-0"/>
</template>

<script setup>
    import { ref } from 'vue';
    import Multiselect from '@vueform/multiselect';
    import '@vueform/multiselect/themes/default.css';

    const shorty = ref([
        'Low Price',
        'High Price',
        'Most Popular',
    ])

</script>
