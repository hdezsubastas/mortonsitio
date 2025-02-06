<template>
    <footer class="dark-footer skin-dark-footer">
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="footer-widget" style="text-align: center;">
                            <router-link class="nav-footer-logo" to="/">
                                <span class="svg-icon text-light svg-icon-2hx">
                                    <img :src="logoMorton" style="width:200px;">
                                </span>
                            </router-link>
                            <div class="footer-add">
                                <router-link to="/faqs"><p class="footer-texts">FAQS</p></router-link>
                                <router-link to="/responsabilidad-social"><p class="footer-texts">Responsabilidad Social</p></router-link>
                                <router-link to="/terminosyaviso"><p class="footer-texts">Términos y condiciones | Aviso de Privacidad</p></router-link>
                            </div>
                        </div>
                    </div>		
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                        <p class="mb-0">© {{year}} Morton Subastas<i class="fa-solid fa-heart ms-1 text-danger"></i>  By <a href="https://shreethemes.in/" target="_blank">Morton Subastas</a></p>
                    </div>
                    <div class="col-lg-6 col-md-6 text-right">
                        <ul class="footer-bottom-social">
                        <li><a href="https://www.instagram.com/mortonsubastas/" target='_blank'><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href="https://www.tiktok.com/@mortonsubastas" target='_blank'><i class="fa-brands fa-tiktok"></i></a></li>
                        <li><a href="https://x.com/mortonsubastas" target='_blank'><i class="fa-brands fa-x-twitter"></i></a></li>
                        <li><a href="https://mx.linkedin.com/company/mortonsubastas" target='_blank'><i class="fa-brands fa-linkedin"></i></a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
    import { ref } from 'vue';
    import logoMorton from '@/assets/img/morton-caballo.png';
    const year = ref(new Date().getFullYear());
</script>
