<template>
    <div id="main-wrapper">
        <NavbarDark/>

        <div class="page-title">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <h2 class="ipt-title">Our Articles</h2>
                        <span class="ipn-subtitle">See Our Latest Articles & News</span>
                    </div>
                </div>
            </div>
        </div>

        <section class="gray-simple">
            <div class="container">
                <div class="row">
                    <div class="col text-center">
                        <div class="sec-heading center">
                            <h2>Latest News</h2>
                            <p>We post regulary most powerful articles for help and support.</p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center g-4">
                    
                    <div v-for="(item, index) in blogData" :key="index" class="col-xl-4 col-lg-4 col-md-6">
                        <div class="blog-wrap-grid h-100 shadow">
                            <div class="blog-thumb">
                                <router-link :to="`/blog-detail/${item.id}`"><img :src="item.image" class="img-fluid" alt="" /></router-link>
                            </div>
                            <div class="blog-info">
                                <span class="post-date label bg-seegreen text-light"><i class="ti ti-calendar"></i>{{item.date}}</span>
                            </div>
                            <div class="blog-body">
                                <h4 class="bl-title"><router-link :to="`/blog-detail/${item.id}`">{{item.title}}</router-link></h4>
                                <p>{{item.desc}}</p>
                                <router-link :to="`/blog-detail/${item.id}`" class="text-primary fw-medium">Continue<i class="fa-solid fa-arrow-right ms-2"></i></router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <ul class="pagination p-center">
                            <li class="page-item">
                                <router-link class="page-link" to="#" aria-label="Previous">
                                    <i class="fa-solid fa-arrow-left-long"></i>
                                    <span class="sr-only">Previous</span>
                                </router-link>
                            </li>
                            <li class="page-item"><router-link class="page-link" to="#">1</router-link></li>
                            <li class="page-item"><router-link class="page-link" to="#">2</router-link></li>
                            <li class="page-item active"><router-link class="page-link" to="#">3</router-link></li>
                            <li class="page-item"><router-link class="page-link" to="#">...</router-link></li>
                            <li class="page-item"><router-link class="page-link" to="#">18</router-link></li>
                            <li class="page-item">
                                <router-link class="page-link" to="#" aria-label="Next">
                                    <i class="fa-solid fa-arrow-right-long"></i>
                                    <span class="sr-only">Next</span>
                                </router-link>
                            </li>
                        </ul>
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
    import { blogData } from '@/data/data';
</script>
