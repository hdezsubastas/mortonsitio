<template>
    <div id="main-wrapper">
        <NavbarDark/>

        <section class="image-cover faq-sec text-center" :style="{ background: `#eff6ff url(${bg}) no-repeat`, backgroundSize: 'cover' }" data-overlay="6">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 position-relative z-1">
                        <h1 class="text-light">Frequently Asked Questions</h1>
                        <div class="faq-search">
                            <form>
                                <input name="search" class="form-control" placeholder="Search Your Query...">
                                <button type="submit"> <i class="fa-solid fa-magnifying-glass"></i> </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="contact-box">
                            <i class="fa-solid fa-basket-shopping text-primary"></i>
                            <h4>Contact Sales</h4>
                            <p>sales@rikadahelp.co.uk</p>
                            <span>+01 215 245 6258</span>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="contact-box">
                            <i class="fa-solid fa-user-tie text-primary"></i>
                            <h4>Contact Sales</h4>
                            <p>sales@rikadahelp.co.uk</p>
                            <span>+01 215 245 6258</span>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="contact-box">
                            <i class="fa-solid fa-comments text-primary"></i>
                            <h4>Start Live Chat</h4>
                            <span>+01 215 245 6258</span>
                            <span class="live-chat">Live Chat</span>
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
                                    <router-link class="nav-link" id="payment-tab" data-bs-toggle="pill" to="#payment" role="tab" aria-controls="payment" aria-selected="false">Payment</router-link>
                                </li>
                                
                                <li class="nav-item" role="presentation">
                                    <router-link class="nav-link" id="upgrade-tab" data-bs-toggle="pill" to="#upgrade" role="tab" aria-controls="upgrade" aria-selected="false">Upgrade</router-link>
                                </li>
                            </ul>
                        </div>
                        
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="general" role="tabpanel" aria-labelledby="general-tab">
                                <FaqOne :data="faqData"/>
                            </div>
                            
                            <div class="tab-pane fade" id="payment" role="tabpanel" aria-labelledby="payment-tab">
                                <FaqOne :data="faq2"/>
                            </div>
                            
                            <div class="tab-pane fade" id="upgrade" role="tabpanel" aria-labelledby="upgrade-tab">
                                <FaqOne :data="faq3"/>
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
    import bg from '@/assets/img/bg-2.jpg'
    import FaqOne from '@/components/faq-one.vue';
    import FooterDark from '@/components/footer/footer-dark.vue';
    import FooterTop from '@/components/footer/footer-top.vue';
    import NavbarDark from '@/components/navbar/navbar-dark.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
    import { faq2, faq3, faqData } from '@/data/data';
</script>
