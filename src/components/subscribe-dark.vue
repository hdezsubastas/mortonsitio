<!-- eslint-disable no-mixed-spaces-and-tabs -->
<template>
    <section class="bg-primary">
        <div class="container">
            <div class="row align-items-center justify-content-center gx-5 gy-5">
                <div v-for="(item, index) in partner" :key="index" class="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-4">
                    <div class="explor-thumb">
                        <img :src="item" class="img-fluid" alt="">
                    </div>
                </div>
            </div>
            
            <div class="row align-items-center justify-content-center">
                <div class="col-xl-7 col-lg-11">
                    <div class="call-to-act-wrap text-center">
                        <div class="call-to-act-head mb-2">
                            <h2 class="fs-1 mb-3 lh-sm text-light">Subscribe &<br>get special discount</h2>
                            <span class="text-light opacity-75">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos molestias excepturi.</span>
                        </div>
                    </div>
                    <div class="call-to-act-form">
                        <form class="newsletter-boxes p-2">
                            <div class="row m-0 g-0">
                                <div class="col-xl-10 col-9">
                                    <input type="text" class="form-control border-0" placeholder="Subscribe Your Email...">
                                </div>
                                <div class="col-xl-2 col-3">
                                    <button type="submit" class="btn btn-dark rounded-pill full-width">Subscribe</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { partner } from '@/data/data';
</script>