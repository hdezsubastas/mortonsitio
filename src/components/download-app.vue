<template>
    <section class="bg-light">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7 col-md-12 col-sm-12 content-column">
                    <div class="content_block_2">
                        <div class="content-box">
                            <div class="sec-title light">
                                <p class="d-inline-flex align-items-center justify-content-center label bg-primary text-light">Download apps</p>
                                <h2 class="fs-1 lh-base">Download App Free App For Android and iPhone</h2>
                            </div>
                            <div class="text">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto accusantium.</p>
                            </div>
                            <div class="btn-box clearfix mt-5">
                                <router-link to="/" class="download-btn play-store">
                                    <i class="fab fa-google-play"></i>
                                    <span>Download on</span>
                                    <h3>Google Play</h3>
                                </router-link>
                                <router-link to="/" class="download-btn app-store">
                                    <i class="fab fa-apple"></i>
                                    <span>Download on</span>
                                    <h3>App Store</h3>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-5 col-md-12 col-sm-12 image-column">
                    <div class="image-box">
                        <figure class="image"><img :src="app" class="img-fluid" alt=""></figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import app from '@/assets/img/app.png'
</script>
