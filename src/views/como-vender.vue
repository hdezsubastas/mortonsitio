<template>
    <div id="main-wrapper">
        <NavbarDark/>

        <section class="bg-primary position-relative page-sell-title">
            <div class="position-absolute start-0 top-0 w-25 h-15 bg-light rounded-end-pill opacity-25 mt-4"></div>
            <div class="position-absolute start-0 bottom-0 w-15 h-20 bg-light rounded-top-pill opacity-25 ms-4"></div>
            <div class="position-absolute end-0 top-0 w-15 h-25 bg-light rounded-bottom-pill opacity-25 me-4"></div>
            <div class="position-absolute end-0 bottom-0 w-25 h-15 bg-light rounded-start-pill opacity-25 mb-4"></div>
            <div class="ht-30"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <h2 class="ipt-title text-light">¿Cómo vender en Morton Subastas?</h2>
                        <span class="ipn-subtitle">Conoce los pasos a seguir para vender con nosotros.</span>
                    </div>
                </div>
            </div>
            <div class="ht-30"></div>
        </section>

        <section>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                        <iframe class="img-fluid" style="height:315px!important;" width="560" height="315" src="https://www.youtube.com/embed/Wfynu_hD0EU?si=-tWGqs0dDx2297lE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="story-wrap explore-content">
                            <h2>¿Por qué vender en Morton Subastas?</h2>
                            <p>Ofrecemos la mejor oferta de valor para la venta de piezas, absoluta seriedad y servicio al cliente.</p>
                            <p>Con más de 30 años de experiencia  en el manejo de herencias, con un equipo de especialistas en diferentes departamentos, tales como: antiguedades, arte moderno, joyería, etc. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="sec-heading center">
                            <h2>Evaluamos tus piezas </h2>
                            <p>Morton subastas te da la seguridad que tus piezas están en buenas manos</p>
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
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="sec-heading center">
                            <h2>¿Cuáles son los pasos para vender?</h2>
                            <p>Sencillos pasos</p>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                        <img :src="pasosImg" class="img-fluid" alt="" />
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <ul>
                            <li class="sell-num-li">Envíe fotografías de la pieza que quiere vender en subasta así como toda la información que tenga disponible sobre ella a atencion.clientes@mortonsubastas.com</li>
                            <li class="sell-num-li">Sus piezas serán revisadas y valuadas para venta en subasta por uno de nuestros especialistas.</li>
                            <li class="sell-num-li">Al aceptar la valuación, usted firmará un contrato para que se incluyan en la subasta más adecuada.</li>
                            <li class="sell-num-li">A partir de la valuación, su pieza será incluida en un catálogo; si es una subasta semanal, se incluirá en el catálogo digital. Si formará parte de una subasta especializada, será incluida tanto en un catálogo digital como uno impreso.</li>
                            <li class="sell-num-li">Previo a la realización de la subasta, las piezas son exhibidas para que los posibles compradores puedan conocerlas.</li>
                            <li class="sell-num-li">Si su pieza se vendió, recibirá el pago cuatro semanas después de terminada la subasta. Si se trata de una subasta semanal, lo recibirá una semana después.</li>
                        </ul>
                        <h3>¿Qué costo tiene vender en subasta?</h3>
                        <span>La comisión varía de acuerdo al precio final que alcance la pieza, la cual oscila entre el 10 y 22%</span>
                    </div>
                </div>
            </div>
        </section>

        <footerTop />
        <FooterDark/>
        <ScrollToTop/>  

    </div>
</template>

<script setup>
    import NavbarDark from '@/components/navbar/navbar-dark.vue';
    import FooterDark from '@/components/footer/footer-dark.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
    import {aboutData}  from '@/data/data';
    import aboutImg2 from '@/assets/img/banners/pieza-banner.jpg'
    import pasosImg from '@/assets/img/banners/pasos-vender.jpg'
    import footerTop from '@/components/footer/footer-top.vue';

</script>