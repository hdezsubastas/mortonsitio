<template>
    <div id="main-wrapper">
        <NavbarDark/>

        <section class="bg-primary position-relative">
            <div class="position-absolute start-0 top-0 w-25 h-15 bg-light rounded-end-pill opacity-25 mt-4"></div>
            <div class="position-absolute start-0 bottom-0 w-15 h-20 bg-light rounded-top-pill opacity-25 ms-4"></div>
            <div class="position-absolute end-0 top-0 w-15 h-25 bg-light rounded-bottom-pill opacity-25 me-4"></div>
            <div class="position-absolute end-0 bottom-0 w-25 h-15 bg-light rounded-start-pill opacity-25 mb-4"></div>
            <div class="ht-30"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <h2 class="ipt-title text-light">All Agents</h2>
                        <span class="ipn-subtitle">Lists of our all expert agents</span>
                    </div>
                </div>
            </div>
            <div class="ht-30"></div>
        </section>

        <section class="gray-simple p-0">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10 col-md-12">
                        <div class="full-search-2 eclip-search italian-search hero-search-radius shadow-hard overlio-40">
                            <div class="hero-search-content">
                                <div class="row">
                                    <div class="col-lg-10 col-md-9 col-sm-12">
                                        <div class="form-group">
                                            <div class="position-relative">
                                                <input type="text" class="form-control border-0 ps-5" placeholder="Search for a location">
                                                <div class="position-absolute top-50 start-0 translate-middle-y ms-2">
                                                    <span class="svg-icon text-primary svg-icon-2hx">
                                                        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="currentColor"/>
                                                            <path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="currentColor"/>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-2 col-md-3 col-sm-12">
                                        <div class="form-group">
                                            <router-link href="#" class="btn btn-dark full-width">Search</router-link>
                                        </div>
                                    </div>
                                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="gray-simple">
            <div class="container">
                <div class="row justify-content-center g-4">
                    <div v-for="(item, index) in agentData" :key="index" class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="agents-grid card rounded-3 shadow">
                            <div class="agents-grid-wrap">
                                <div class="fr-grid-thumb mx-auto text-center mt-5 mb-3">
                                    <router-link :to="`/agent-page/${item.id}`" class="d-inline-flex p-1 circle border">
                                        <img :src="item.image" class="img-fluid circle" width="130" alt="" />
                                    </router-link>
                                </div>
                                <div class="fr-grid-deatil text-center">
                                    <div class="fr-grid-deatil-flex">
                                        <h5 class="fr-can-name mb-0"><router-link :to="`/agent-page/${item.id}`">{{item.name}}</router-link></h5>
                                        <span class="agent-property text-muted-2">{{item.property}}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="fr-grid-info d-flex align-items-center justify-content-between px-4 py-4">
                                <div class="fr-grid-sder">
                                    <ul class="p-0">
                                        <li><strong>Call:</strong><span class="fw-medium text-primary ms-2">{{item.call}}</span></li>
                                        <li>
                                            <div class="fr-can-rating">
                                                <i class="fas fa-star fs-xs text-warning me-1"></i>
                                                <i class="fas fa-star fs-xs text-warning me-1"></i>
                                                <i class="fas fa-star fs-xs text-warning me-1"></i>
                                                <i class="fas fa-star fs-xs text-warning me-1"></i>
                                                <i class="fas fa-star fs-xs text-muted me-1"></i>
                                                <span class="reviews_text fs-sm text-muted-2">({{item.review}})</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="fr-grid-deatil-flex-right">
                                    <div class="agent-email"><router-link :to="`/agent-page/${item.id}`" class="square--50 rounded text-danger bg-light-danger"><i class="fa-solid fa-envelope-circle-check"></i></router-link></div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 text-center mt-5">
                        <router-link to="/listings-list-with-sidebar" class="btn btn-primary px-lg-5 rounded">Explore More Agents</router-link>
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
    import { agentData } from '@/data/data';
</script>