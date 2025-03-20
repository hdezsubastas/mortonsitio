<template>
    <div id="main-wrapper">

        <NavbarDark/>
        <SwiperHome/>
        
        <section>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-7 col-md-10 text-center">
                        <div class="sec-heading center">
                            <h2>¿Cómo es participar en una subasta?</h2>
                            <p>Aquí encontrarás los sencillos pasos a seguir para ganar en una subasta</p>
                        </div>
                    </div>
                </div>
                <HowItsWork/>
            </div>
        </section>
        <div class="clearfix"></div>

        <section class="bg-light"> 
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-7 col-md-10 text-center">
                        <div class="sec-heading center">
                            <h2>TOP LOTS</h2>
                            <p>Conoce algunos de nuestros lots más impresionantes</p>
                        </div>
                    </div>
                </div>
                <BestLocation/>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="sec-heading center">
                        <h2>MÁS DE MORTON</h2>
                        <p>Breve descripción de la sección pendiente</p>
                    </div>
                </div>
                <div class="row justify-content-center g-4">
                    <SwiperSlide/>
                </div>
            </div>
            
        </section>
        
        <FooterTop :bg="'theme-bg'"/>
        <FooterDark/>

        <ScrollToTop/>

    </div>
</template>

<script setup>
    import '@vueform/multiselect/themes/default.css';

    import NavbarDark from '@/components/navbar/navbar-dark.vue';
    import HowItsWork from '@/components/how-its-work.vue';
    import BestLocation from '@/components/best-location.vue';
    import FooterTop from '@/components/footer/footer-top.vue';
    import FooterDark from '@/components/footer/footer-dark.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
    import SwiperSlide from '@/components/swiper/swiper-slide.vue';
    import SwiperHome from '@/components/swiper/home-swiper.vue';

   
</script>
