<template>
    <div id="main-wrapper">
        <NavbarDark/>

        <section class="image-cover faq-sec text-center" :style="{ background: `#eff6ff url(${bg}) no-repeat`, backgroundSize: 'cover' }" data-overlay="6">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 position-relative z-1">
                        <h1 class="text-light">Preguntas Frecuentes</h1>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="contact-box">
                            <i class="fa-solid fa-user-tie text-primary"></i>
                            <h4>Atención a Clientes</h4>
                            <p>atencion@mortonsubastas.com</p>
                            <span>+52 55 52 83 31 40</span>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="contact-box">
                            <i class="fa-solid fa-user-tie text-primary"></i>
                            <h4>Clientes Preferentes</h4>
                            <p>smontesdeoca@mortonsubastas.com</p>
                            <span></span>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="contact-box">
                            <i class="fa-solid fa-user-tie text-primary"></i>
                            <h4>Atención Autos y Camiones</h4>
                            <p>nmartinez@mortonsubastas.com</p>
                            <span></span>
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-lg-10 col-md-12 col-sm-12">
                        <div class="block-header border-0 m-0">
                            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <router-link class="nav-link active" id="general-tab" data-bs-toggle="pill" to="#general" role="tab" aria-controls="general" aria-selected="true">General</router-link>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <router-link class="nav-link" id="auction-tab" data-bs-toggle="pill" to="#auction" role="tab" aria-controls="auction" aria-selected="true">Subasta</router-link>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <router-link class="nav-link" id="payment-tab" data-bs-toggle="pill" to="#payment" role="tab" aria-controls="payment" aria-selected="false">Pagos</router-link>
                                </li>
                                
                                <li class="nav-item" role="presentation">
                                    <router-link class="nav-link" id="upgrade-tab" data-bs-toggle="pill" to="#upgrade" role="tab" aria-controls="upgrade" aria-selected="false">Piezas/Lotes</router-link>
                                </li>
                            </ul>
                        </div>
                        
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="general" role="tabpanel" aria-labelledby="general-tab">
                                <GeneralFaq/>
                            </div>
                            <div class="tab-pane fade" id="auction" role="tabpanel" aria-labelledby="auction-tab">
                                <AuctionFaq/>
                            </div>
                            <div class="tab-pane fade" id="payment" role="tabpanel" aria-labelledby="payment-tab">
                                <PaymentsFaq/>
                            </div>
                            
                            <div class="tab-pane fade" id="upgrade" role="tabpanel" aria-labelledby="upgrade-tab">
                                <LotsFaq/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <FooterTop :bg="'theme-bg'"/>
        <FooterDark/>
        <ScrollToTop/>
    </div>
</template>

<script setup>
    import bg from '@/assets/img/faq-sec.jpg'
    import FooterDark from '@/components/footer/footer-dark.vue';
    import FooterTop from '@/components/footer/footer-top.vue';
    import NavbarDark from '@/components/navbar/navbar-dark.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
    import PaymentsFaq from '@/components/faqs/payments-faq.vue';
    import AuctionFaq from '@/components/faqs/auction-faq.vue';
    import LotsFaq from '@/components/faqs/lots-faq.vue';
    import GeneralFaq from '@/components/faqs/general-faq.vue';
</script>
