<template>
    <div id="main-wrapper">
        <NavbarDark/>
        <div class="page-contact-title">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <h2 class="ipt-title">Contactanos</h2>
                    </div>
                </div>
            </div>
        </div>

        <section>
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 col-md-7">
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group">
                                    <label class="mb-1">Nombre</label>
                                    <input type="text" class="form-control simple">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group">
                                    <label class="mb-1">Correo</label>
                                    <input type="email" class="form-control simple">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="mb-1">Asunto</label>
                            <input type="text" class="form-control simple">
                        </div>
                        <div class="form-group">
                            <label class="mb-1">Menesaje</label>
                            <textarea class="form-control simple"></textarea>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary px-5 rounded" type="submit">Enviar</button>
                        </div>
                    </div>
                    
                    <div class="col-lg-5 col-md-5">
                        <div class="contact-info">
                            <h2>Ponte en contacto</h2>
                            <p>Breve descripción . </p>
                            
                            <div class="cn-info-detail mt-4">
                                <div class="cn-info-icon">
                                    <i class="fa-solid fa-house"></i>
                                </div>
                                <div class="cn-info-content">
                                    <h4 class="cn-info-title">Localizanos</h4>2512, New Market,<br>Eliza Road, Sincher 80 CA,<br>Canada, USA</div>
                            </div>
                            
                            <div class="cn-info-detail">
                                <div class="cn-info-icon">
                                    <i class="fa-solid fa-envelope-circle-check"></i>
                                </div>
                                <div class="cn-info-content"><h4 class="cn-info-title">Drop A Mail</h4>support@Rikada.com<br>Rikada@gmail.com</div>
                            </div>
                            
                            <div class="cn-info-detail">
                                <div class="cn-info-icon">
                                    <i class="fa-solid fa-phone-volume"></i>
                                </div>
                                <div class="cn-info-content"><h4 class="cn-info-title">Call Us</h4>(41) 123 521 458<br>+91 235 548 7548</div>
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
    import FooterDark from '@/components/footer/footer-dark.vue';
    import FooterTop from '@/components/footer/footer-top.vue';
    import NavbarDark from '@/components/navbar/navbar-dark.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
</script>
