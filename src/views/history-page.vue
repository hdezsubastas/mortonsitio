<template>

    <NavbarDark/>

    <div id="main-wrapper">
        <section class="image-cover faq-sec text-center" :style="{ background: `#eff6ff url(${bg}) no-repeat`, backgroundSize: 'cover' }" data-overlay="6">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 position-relative z-1">
                        <h1 class="text-light">HISTORIA</h1>
                    </div>
                </div>
            </div>
        </section>


        <section>
            <div class="container">
                <div class="row align-items-center history-space">
                    <div class="col-lg-12 col-md-12 history-space">
                        <h2>EL ÉXITO DE LA COMPAÑÍA, A TRAVÉS DE SU HISTORIA</h2>
                        <p>Morton Subastas abrió sus puertas en 1987 como galería de antigüedades. A lo largo de su historia ha movido obras anónimas trascendentes por su factura, belleza y contenido, así como piezas de artistas de prestigio internacional que han marcado época. Ha sido frecuente que los bienes subastados se incorporen a las colecciones de la Secretaría de Educación Pública (SEP), antes del Consejo Nacional para la Cultura y las Artes (CNCA) y ahora Secretaría de Cultura (SC), así como a los institutos nacionales de Antropología e Historia (INAH) y Bellas Artes (INBA). Además de en la Ciudad de México, Morton cuenta con una oficina de representación en Guadalajara, Monterrey y París.</p>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <img :src="img1" class="img-fluid" alt="" />
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="story-wrap explore-content">
                            <h2>Nuestra Identidad</h2>
                            <p>Somos la casa de subastas número uno en México. En Morton Subastas estamos comprometidos en ser una empresa de clase mundial y que esto sea apreciado por nuestros clientes. Todos los días nos empeñamos en enriquecer nuestro negocio y nuestra plataforma de servicios.</p>
                            <p>En Morton Subastas comercializamos lo que la gente nos confía. Somos la empresa que resuelve la necesidad de sus clientes de convertir sus objetos en efectivo: arte, antigüedades, joyería, adelantos de subasta, libros, vinos, artes decorativas, autos clásicos, herencias y colecciones.</p>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                        <div class="story-wrap explore-content">
                            <h2>Misión</h2>
                            <p>Ser reconocida como la casa de subastas líder en México ofreciendo una solución integral a nuestros clientes.</p>
                            <h2>Visión</h2>
                            <p>Ser la empresa que posicione comercialmente el mercado de subastas en México.</p>
                            <h2>Valores</h2>
                            <ul>
                                <li class="terms-li">Pasión por lo que hacemos</li>
                                <li class="terms-li">Integridad</li>
                                <li class="terms-li">EL cliente como centro de nuestro negocio</li>
                                <li class="terms-li">Trabajo en equipo</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <img :src="panoramaImg" class="img-fluid" alt="" />
                    </div>
                </div>
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
    import img1 from '@/assets/img/historia/_SSM6560.jpg';
    import panoramaImg from '@/assets/img/historia/panorama_baja.jpg';

</script>