<template>
    <div id="main-wrapper">
        <NavbarDark/>
       
        <BannerTwo />
    
        <section>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                        <div class="story-wrap explore-content">
                            <h2>Departamento de Antigüedades</h2>
                            <p>El departamento de Antigüedades de Morton Subastas ofrece ejemplos notables de obras pertenecientes a escuelas y movimientos anteriores al siglo XX. En nuestros catálogos figuran obras de reconocidos autores nacionales y extranjeros, cuya relevancia histórica, artística y cultural, convierte a sus creaciones en piezas dignas de los mejores coleccionistas. Cristóbal de Villalpando, Miguel Cabrera, August Lohr, Juan Cordero, Édouard Pingret, Felipe Santiago Gutiérrez, Germán Gedovius y José María Velasco son algunas de las firmas que han pasado por este departamento, obteniendo resultados excepcionales.</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/9XllGpD1U9M?si=wGkmXyDTx1dYhD00" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </section>

        <section class="gray">
            <div class="row">
                <div class="col-lg-8 col-md-12 col-sm-12">
                    <div class="row justify-content-center g-4" v-if="size>0">
                        <div  v-for="(item, index) in auctions" :key="index" class="col-xl-4 col-lg-4 col-md-6">
                            <div class="blog-wrap-grid h-100 shadow">
                                <div class="blog-thumb">
                                    <router-link :to="`/subasta/${item.subasta_NumSub}`"><img :src="getImagePath(item.subWebBan_Img)" class="img-fluid" alt="" /></router-link>
                                </div>
                                <div class="blog-info">
                                    <span class="post-date label bg-seegreen text-light"><i class="ti ti-calendar"></i>{{item.subWebInfo_FecMan}}</span>
                                </div>
                                <div class="blog-body">
                                    <h4 class="bl-title"><router-link :to="`/subasta/${item.subasta_NumSub}`">{{item.subasta_Nom}}</router-link></h4>
                                    <p>{{item.subasta_Des.slice(0,100)}}</p>
                                    <router-link :to="`/subasta/${item.subasta_NumSub}`" class="text-primary fw-medium">Ver Detalles<i class="fa-solid fa-arrow-right ms-2"></i></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center g-4" v-if="size==0">
                        <p>Se estan preparando las próximas subastas</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12">
                    <SidebarOne :res="results" />
                </div>
            </div>
        </section>

        <FooterTop :bg="'theme-bg'"/>

        <section>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-10 text-center">
                        <div class="sec-heading center">
                            <h2>Conoce nuestros especialistas</h2>
                        </div>
                    </div>
                </div>
                <TeamOne/>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="sec-heading center">
                            <h2>Our Mission & Work Process</h2>
                            <p>Professional & Dedicated Team</p>
                        </div>
                    </div>
                </div>
                
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                        <div v-for="(item, index) in aboutData" :key="index" class="icon-mi-left">
                            <i :class="item.icon"></i>
                            <div class="icon-mi-left-content">
                                <h4>{{item.title}}</h4>
                                <p>{{item.desc}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <img :src="aboutImg2" class="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </section>

        <section>
            <SwiperSpecialists/>
        </section>

        <FooterDark/>
        <ScrollToTop/>
    </div>

</template>

<script setup>


import aboutImg2 from '@/assets/img/vec-2.png'
import {ref,onMounted} from 'vue'
import  Axios from 'axios';

import { aboutData } from '@/data/data';

import NavbarDark from '@/components/navbar/navbar-dark.vue';
import FooterTop from '@/components/footer/footer-top.vue';
import FooterDark from '@/components/footer/footer-dark.vue';
import ScrollToTop from '@/components/scroll-to-top.vue';
import TeamOne from '@/components/team-one.vue';
import SidebarOne from '@/components/results-sidebar.vue';
import BannerTwo from '@/components/banner-two.vue';
import SwiperSpecialists from '@/components/swiper/swiper-specialists.vue';

const dep = {dep:2, departamento:2};
const results = ref(null);
const auctions = ref(null);
const size = ref(null);

onMounted(()=>{
    getResults();
    getNextAuctions();
})

const getResults = async () => {
    try{
        const response = await  Axios.post('http://127.0.0.1/serverside/getResults.php', dep);
        results.value = response.data.slice(0,5); 
    }catch(error){
        console.log(error);
    }finally{
        console.log("listo");
    }
}

const getNextAuctions = async () => {
    try{
        const response = await  Axios.post('http://127.0.0.1/serverside/getDeptAuctions.php', dep);
        auctions.value = response.data;
        size.value = auctions.value.length;
    }catch(error){
        console.log(error);
    }finally{
        console.log("listo");
    }
}


const getImagePath = (imageName) => {
    return `/images/${imageName}`;
}

</script>
