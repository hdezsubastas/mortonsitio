<template>
    <section class="image-cover" :style="{ background: `url(${bg}) no-repeat`, backgroundSize: 'cover' }" data-overlay="4">
        <div class="ht-80"></div>
        <div class="container position-relative z-1">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-8">
                    <div class="caption-wrap-content text-center">
                        <h2 class="fs-1">Search Perfect Place in your City</h2>
                        <p class="mb-5">We post regulary most powerful articles for help and support.</p>
                        <router-link to="#" class="btn btn-whites fw-medium rounded">Explore More Property</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="ht-80"></div>
    </section>
</template>

<script setup>
    import bg from '@/assets/img/banner-2.jpg'
</script>

