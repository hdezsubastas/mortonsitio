<template>
    <section class="bg-light">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-xl-3 col-lg-4 col-md-4 col-sm-12">
                    <div class="trustscrore-wrap">
                        <div class="trustscrore-title">
                            <h2>4.8</h2>
                        </div>
                        <div class="trustscrore-rates">
                            <div class="trustscrore-stars">
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                            </div>
                            <div class="trustscrore-stars-title"><span>Trustscore on 176 Reviews</span></div>
                        </div>
                        <div class="trustscrore-info">
                            <div class="trustscrore-subtitle"><span>Check all reviews on</span></div>
                            <div class="trustscrore-brand"><img :src="brand" class="img-fluid" alt=""></div>
                        </div>
                    </div>
                </div>
                
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                    <div class="single-reviews">
                        <div class="single-item-reviews">
                            <div class="single-item-reviews-desc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                            <div class="single-item-reviews-info">
                                <h4>Harman Preet</h4>
                                <p class="text-primary">Google Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row align-items-center justify-content-between">
                <div class="col-xl-12 col-lg-12 col-md-12">
                    <div class="counter-info-groups">
                        <div class="single-counter-wrap">
                            <div class="single-counter-title">
                                <h2 class="d-flex">$<count-up class="ctr" :end-val="310"/>M</h2>
                            </div>
                            <div class="single-counter-subtitle">
                                <p>Owned from<br>properties transaction</p>
                            </div>
                        </div>
                        
                        <div class="single-counter-wrap">
                            <div class="single-counter-title">
                                <h2 class="d-flex"><count-up class="ctr" :end-val="40"/>K</h2>
                            </div>
                            <div class="single-counter-subtitle">
                                <p>Properties for<br>Buy & Sell</p>
                            </div>
                        </div>
                        
                        <div class="single-counter-wrap">
                            <div class="single-counter-title">
                                <h2 class="d-flex"><count-up class="ctr" :end-val="500"/></h2>
                            </div>
                            <div class="single-counter-subtitle">
                                <p>Daily Completed<br>transaction</p>
                            </div>
                        </div>
                        <div class="single-counter-wrap">
                            <div class="single-counter-title">
                                <h2 class="d-flex"><count-up class="ctr" :end-val="111"/>M</h2>
                            </div>
                            <div class="single-counter-subtitle">
                                <p>Happy Customers<br>from Resido</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import brand from '@/assets/img/brand.png'
    import CountUp from 'vue-countup-v3'
</script>
