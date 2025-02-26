
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
                <template>
                    <h3>hola</h3>
                </template>
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
    import  Axios from 'axios';
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

    const $vueFlux = ref();
    const opciones = shallowReactive({
        autoplay: true,
    });
   
    const getData = async () => {
        try {
            const response = await  Axios.get('http://127.0.0.1/serverside/getAuctions.php');
            return response;
        } catch (error) {
            alert(error);
        } finally {
            console.log("terminado ");
        }
    };

    const rscs = shallowReactive([
        new Img('images/banners/banner_AM_1183.jpg', 'Subasta de los Sábados 1271 \n\rsábado 18 de enero, 11:00 a.m. Lago Andrómaco 84. \n\nUn encuentro donde el arte, las antigüedades, la joyería y los libros se entrelazan para contar historias fascinantes'),
        new Img('images/banners/banner_JY_1182.jpg', 'Subasta de los Sábados 1271 \n\rsábado 18 de enero, 11:00 a.m. Lago Andrómaco 84.\n\n Un encuentro donde el arte, las antigüedades, la joyería y los libros se entrelazan para contar historias fascinantes'),
        new Img('images/banners/banner_SB_1270.jpg', 'Subasta de los Sábados 1271 \n\rsábado 18 de enero, 11:00 a.m. Lago Andrómaco 84. \n\nUn encuentro donde el arte, las antigüedades, la joyería y los libros se entrelazan para contar historias fascinantes'),
        new Img('images/banners/banner_SB_1272T.jpg', 'Subasta de los Sábados 1271 \n\rsábado 18 de enero, 11:00 a.m. Lago Andrómaco 84. \n\nUn encuentro donde el arte, las antigüedades, la joyería y los libros se entrelazan para contar historias fascinantes')
    ]);
    const transitions = shallowReactive([Fade, Book, Kenburn]);

   const dataImg = getData();
   console.log(dataImg);
   
</script>
	
