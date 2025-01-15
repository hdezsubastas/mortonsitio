<template>
    <div id="main-wrapper">
        <NavbarLight/>
        <div class="image-cover hero-banner" :style="{ background: `url(${bg}) no-repeat`, backgroundSize: 'cover' }" data-overlay="6">
            <div class="container">
                <h1 class="big-header-capt mb-0">Find Your Property</h1>
                <p class="text-center mb-5">From as low as $10 per day with limited time offer</p>
                <FormTwo/>
            </div>
        </div>

        <section>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-7 col-md-10 text-center">
                        <div class="sec-heading center">
                            <h2>Find By Locations</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <BestLocation/>
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 text-center mt-5">
                        <router-link to="/listings-list-with-sidebar" class="btn btn-primary px-md-5 rounded">Browse More Locations</router-link>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-light">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-7 col-md-10 text-center">
                        <div class="sec-heading center">
                            <h2>Explore Good places</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <GridOne/>
                <div class="row align-items-center justify-content-center">
                    <div class="col-lg-12 col-md-12 col-sm-12 text-center mt-5">
                        <router-link to="/listings-list-with-sidebar" class="btn btn-primary px-md-5 rounded">Browse More Properties</router-link>
                    </div>
                </div>
            </div>	
        </section>

        <section>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-7 col-md-10 text-center">
                        <div class="sec-heading center">
                            <h2>How It Works?</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <HowItsWork/>
            </div>
        </section>
        <div class="clearfix"></div>
        <CtaOne/>

        <section>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-10 text-center">
                        <div class="sec-heading center">
                            <h2>Latest Updates By Resido</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <BlogOne/>
            </div>		
        </section>
        <FooterTop :bg="'theme-bg'"/>
        <FooterDark/>
        <ScrollToTop/>
    </div>
</template>

<script setup>
    import NavbarLight from '@/components/navbar/navbar-light.vue';
    import bg from '@/assets/img/bg-2.jpg'
    import BestLocation from '@/components/best-location.vue';
    import GridOne from '@/components/property/grid-one.vue';
    import HowItsWork from '@/components/how-its-work.vue';
    import CtaOne from '@/components/cta-one.vue';
    import FormTwo from '@/components/form/form-two.vue';
    import BlogOne from '@/components/blog-one.vue';
    import FooterTop from '@/components/footer/footer-top.vue';
    import FooterDark from '@/components/footer/footer-dark.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
</script>
