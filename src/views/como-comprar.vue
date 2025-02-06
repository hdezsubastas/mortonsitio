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
                        <h2 class="ipt-title text-light">Cómo comprar en Morton Subastas</h2>
                        <span class="ipn-subtitle">En Morton Subastas, no lo compras, lo ganas.</span>
                    </div>
                </div>
            </div>
            <div class="ht-30"></div>
        </section>

        <section>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                        <iframe class="img-fluid" style="height:315px!important;" width="560" height="315" src="https://www.youtube.com/embed/0WG0-p3N1Z0?si=NA_i089W7yZ9tTVe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                       <!--<img :src="aboutImg" class="img-fluid" alt="" />-->
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="story-wrap explore-content">
                            <h2>¿Por qué comprar en Morton Subastas?</h2>
                            <p>Por que ofrece la posibilidad de adquirir cosas que tienen un valor agregado, como un el peso de una firma, de un diseño o de antigüedad, a través de una experiencia diferente.</p>
                            <p>Ofrecemos diferentes medios para que puedas participar, ya sea presencial, teléfonicamente y en línea o una combinación de ambas, asegurando cada una de tus pujas. </p>
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
                            <h2>Comprar es muy sencillo</h2>
                            <p>Morton subastas te acompaña durante todo el proceso</p>
                        </div>
                    </div>
                </div>
                
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                        <div v-for="(item, index) in comprarData" :key="index" class="icon-mi-left">
                            <i :class="item.icon"></i>
                            <div class="icon-mi-left-content">
                                <h4>{{item.title}}</h4>
                                <p>{{item.desc}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <img :src="comoComprar" class="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="sec-heading center">
                            <h2>¿Cuáles son las formas de participar?</h2>
                            <p>Distintas formas</p>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                        <img :src="formasComprar" class="img-fluid" alt="" />
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <h3>Presencial</h3>
                        <p>Acudir al salón en la fecha y hora indicadas en el catálogo, no es necesario hacer una reservación o un código de vestimenta, la entrada a la subasta es libre.</p>
                        <h3>Ofertas teléfonicas o en ausencia</h3>
                        <p>Llamar a la línea telefónica del sistema de ofertas en ausencia, en el cual puede dejar sus ofertas fijas por el lote deseado o bien pedir que llamen a la hora de la subasta para que en vivo a través del teléfono.</p>
                        <h3>En línea</h3>
                        <p>Puede participar en línea desde donde esté a través de la Plataforma Morton, en la que puede registrarse para participar, colocar su oferta con antelación y bien seguir la transmisión en vivo e ir haciendo sus pujas en vivo.</p>
                        <h3>¿Cuáles son las comisiones?</h3>
                        <span>La comisión al comprar en subasta con nosotros es de 22% más I.V.A. sobre el precio final que alcance la pieza (precio martillo), si participa en línea la comisión es de 23% más I.V.A.</span>
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
    import {comprarData}  from '@/data/data';
    import comoComprar from '@/assets/img/banners/como-comprar.jpg'
    import formasComprar from '@/assets/img/banners/formas-comprar.jpg'
    import footerTop from '@/components/footer/footer-top.vue';

</script>