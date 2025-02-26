<template>

    <NavbarDark/>

    <div id="main-wrapper">

        <section class="image-cover faq-sec text-center" :style="{ background: `#eff6ff url(${bg}) no-repeat`, backgroundSize: 'cover' }" data-overlay="6">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 position-relative z-1">
                        <h1 class="text-light">Preguntas Frecuentes</h1>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">

            </div>
        </section>

    </div>

    <FooterTop/>
    <FooterDark/>
    <scrollToTop/>
</template>

<script setup>
    import FooterDark from '@/components/footer/footer-dark.vue';
    import FooterTop from '@/components/footer/footer-top.vue';
    import NavbarDark from '@/components/navbar/navbar-dark.vue';
    import scrollToTop from '@/components/scroll-to-top.vue';
    import bg from '@/assets/img/faq-sec.jpg'

</script>