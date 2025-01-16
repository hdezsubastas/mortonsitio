
<template>
    <VueFlux
        :options="opciones"
        :rscs="rscs"
        :transitions="transitions"
        ref="$vueFlux">

        <template #preloader="preloaderProps">
            <FluxPreloader v-bind="preloaderProps" />
        </template>

        <template #caption="captionProps">
            <FluxCaption v-bind="captionProps" />
        </template>

        <template #controls="controlsProps">
            <FluxControls v-bind="controlsProps" />
        </template>

        <template #pagination="paginationProps">
            <FluxPagination v-bind="paginationProps" />
        </template>

        <template #index="indexProps">
            <FluxIndex v-bind="indexProps" />
        </template>
    </VueFlux>
</template>


<script setup>
    import { ref, shallowReactive  } from 'vue';
    import {
        VueFlux,
        FluxCaption,
        FluxControls,
        FluxIndex,
        FluxPagination,
        FluxPreloader,
        Img,
        Book,
        Kenburn,
        Fade
    } from 'vue-flux';
    import 'vue-flux/style.css';

    /*const options = ref(['$500','$1000','$1500','2000','3000']);
    const maxprice = ref(['$1000','$1500','$2000','3000','5000']);
    const ptype = ref(['Rental','Villas','Offices','Condos','Studios']);
    const rooms = ref(['1','2','3','4','5'])
    const cities = ref([
        'Los Angeles, CA','New York City, NY','Chicago, IL','Houston, TX','Philadelphia, PA','San Antonio, TX','San Jose, CA',
    ])*/

    const $vueFlux = ref();
    const opciones = shallowReactive({
        autoplay: true,
    });
    const rscs = shallowReactive([
        new Img('images/7.jpg', 'img 01'),
        new Img('images/8.jpg', 'img 02'),
        new Img('images/9.jpg', 'img 03'),
    ]);
    const transitions = shallowReactive([Fade, Book, Kenburn]);
</script>
	
