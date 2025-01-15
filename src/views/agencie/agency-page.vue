<!-- eslint-disable no-mixed-spaces-and-tabs -->
<template>
    <div id="main-wrapper">
        <NavbarDark/>
        <div class="image-cover page-title">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <h2 class="ipt-title">Agency Detail</h2>
                        <span class="ipn-subtitle">{{data && data.name ? data.name : 'Strive Partners Realty'}}</span>
                    </div>
                </div>
            </div>
        </div>

        <section class="agent-page p-0 gray-simple">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="agency agency-list overlio-40">
                            <div class="agency-avatar">
                                <img :src="data && data.image ? data.image : agency1" alt="">
                            </div>
                            <div class="agency-content">
                                <div class="agency-name">
                                    <h4><router-link to="/agency-page">{{data && data.name ? data.name : 'Strive Partners Realty'}}</router-link></h4>
                                    <span><i class="fa-solid fa-location-dot"></i>3599 Huntz Lane</span>
                                </div>
                                <div class="agency-desc">
                                    <p>Most text editors like MS Word or Lotus Notes generate random lorem text when needed, either as pre-installed module or plug-in to be added. Word selection or sequence don't necessarily match the original, which is intended to add variety. Presentation software like Keynote.</p>
                                </div>
                                <div class="prt-detios">
                                    <span class="label text-light bg-success">{{data && data.property ? data.property : '176 Property'}}</span>
                                </div>
                                <ul class="social-icons mt-4">
                                    <li><router-link to="" class="facebook"><i class="fa-brands fa-facebook"></i></router-link></li>
                                    <li><router-link to="" class="twitter"><i class="fa-brands fa-twitter"></i></router-link></li>
                                    <li><router-link to="" class="linkedin"><i class="fa-brands fa-instagram"></i></router-link></li>
                                    <li><router-link to="" class="linkedin"><i class="fa-brands fa-linkedin"></i></router-link></li>
                                </ul>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="gray">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12 col-sm-12">
                        <div class="block-wrap">
                            <div class="block-header ags">
                                <h4 class="block-title">Agency Info</h4>
                                <router-link to="/add-agent" class="btn btn-seegreen">Add New Agent</router-link>
                            </div>
                            <div class="block-body">
                                <ul class="dw-proprty-info">
                                    <li v-for="(item, index) in propertyInfo" :key="index"><strong>{{item.title}}</strong>{{item.subTitle}}</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="block-wraps">
                            <div class="block-wraps-header">
                                <div class="block-header">
                                    <ul class="nav nav-pills" id="pills-tab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link px-4 active" id="agent-tab" data-bs-toggle="pill" href="#agent" role="tab" aria-controls="agent" aria-selected="true">Agents</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link px-4" id="property-tab" data-bs-toggle="pill" href="#property" role="tab" aria-controls="property" aria-selected="false">Property</a>
                                        </li>
                                    </ul>
                                </div>
                            
                                <div class="block-body">
                                    <div class="tab-content" id="pills-tabContent">
                                        <div class="tab-pane fade show active" id="agent" role="tabpanel" aria-labelledby="agent-tab">
                                            <div class="row justify-content-center g-4">
                                                <div v-for="(item, index) in teamData" :key="index" class="col-lg-6 col-md-6 col-sm-12">
                                                    <div class="agents-grid card rounded-3 border">
                                                        <div class="agents-grid-wrap">
                                                            <div class="fr-grid-thumb mx-auto text-center mt-5 mb-3">
                                                                <router-link to="/agent-page" class="d-inline-flex p-1 circle border">
                                                                    <img :src="item.image" class="img-fluid circle" width="130" alt="" />
                                                                </router-link>
                                                            </div>
                                                            <div class="fr-grid-deatil text-center">
                                                                <div class="fr-grid-deatil-flex">
                                                                    <h5 class="fr-can-name mb-0"><router-link to="#">{{item.name}}</router-link></h5>
                                                                    <span class="agent-property text-muted-2">111 Properties</span>
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
                                                                <div class="agent-email"><router-link to="#" class="square--50 rounded text-danger bg-light-danger"><i class="fa-solid fa-envelope-circle-check"></i></router-link></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="row">
                                                <div class="col-lg-12 col-md-12 col-sm-12 text-center mt-5">
                                                    <router-link to="#" class="btn btn-primary px-lg-5 rounded">Explore More Agents</router-link>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="tab-pane fade" id="property" role="tabpanel" aria-labelledby="sale-tab">
                                            <div class="row justify-content-center g-4">
                                                <div v-for="(item, index) in propertyData.slice(0,6)" :key="index" class="col-lg-6 col-md-6 col-sm-12">
                                                    <GridLayout :item="item" :border="true"/>
                                                </div>
                                            </div>
                                            <div class="row align-items-center justify-content-center">
                                                <div class="col-lg-12 col-md-12 col-sm-12 text-center mt-5">
                                                    <router-link to="#" class="btn btn-primary px-md-5 rounded">Browse More Properties</router-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <SidebarOne/>
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
    import { useRoute } from 'vue-router';
    import { agencyData, propertyData, propertyInfo, teamData } from '@/data/data';
    import NavbarDark from '@/components/navbar/navbar-dark.vue';
    import agency1 from '@/assets/img/ag-1.png'
    import SidebarOne from '@/components/sidebar-one.vue';
    import GridLayout from '@/components/property/grid-layout.vue';
    import FooterTop from '@/components/footer/footer-top.vue';
    import FooterDark from '@/components/footer/footer-dark.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';

    const route = useRoute()

    const data = agencyData.find((item)=>item.id === parseInt(route.params.id))
</script>
