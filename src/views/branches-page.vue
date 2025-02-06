<!-- eslint-disable no-mixed-spaces-and-tabs -->
<template>
    <div id="main-wrapper">
        <NavbarDark/>

        <div class="image-cover page-title">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <h2 class="ipt-title">Agent Detail</h2>
                        <span class="ipn-subtitle">{{data && data.name ? data.name : 'Adam D. Okraar'}} From Canada</span>
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
                                <img :src="data && data.image ? data.image : user1" alt="">
                            </div>
                            
                            <div class="agency-content">
                                <div class="agency-name">
                                    <h4><router-link to="/agency-page">{{data && data.name ? data.name : 'Adam D. Okraar'}}</router-link></h4>
                                    <span><i class="fa-solid fa-location-dot"></i>3599 Huntz Lane</span>
                                </div>
                                
                                <div class="agency-desc">
                                    <p>Think of a news blog that's filled with content hourly on the day of going live However, reviewers tend to be distracted by comprehensible content. In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready.</p>
                                </div>
                                
                                <div class="prt-detios">
                                    <span class="label text-light bg-success">202 Property</span>
                                </div>
                                <ul class="social-icons mt-4">
                                    <li><router-link class="facebook" to="#"><i class="fa-brands fa-facebook"></i></router-link></li>
                                    <li><router-link class="twitter" to="#"><i class="fa-brands fa-twitter"></i></router-link></li>
                                    <li><router-link class="linkedin" to="#"><i class="fa-brands fa-instagram"></i></router-link></li>
                                    <li><router-link class="linkedin" to="#"><i class="fa-brands fa-linkedin"></i></router-link></li>
                                </ul>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="min gray-simple">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12 col-sm-12">
                        <div class="block-wrap">
                            <div class="block-header">
                                <h4 class="block-title">Agent Info</h4>
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
                                            <a class="nav-link active px-4" id="rental-tab" data-bs-toggle="pill" href="#rental" role="tab" aria-controls="rental" aria-selected="true">Rental</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link px-4" id="sale-tab" data-bs-toggle="pill" href="#sale" role="tab" aria-controls="sale" aria-selected="false">For Sale</a>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div class="block-body">
                                    <div class="tab-content" id="pills-tabContent">
                                    
                                        <div class="tab-pane fade show active" id="rental" role="tabpanel" aria-labelledby="rental-tab">
                                            <div class="row justify-content-center g-4">
                                                <div v-for="(item, index) in propertyData.slice(0,6)" :key="index" class="col-lg-6 col-md-6 col-sm-12">
                                                    <GridLayout :item="item" :border="true"/>
                                                </div>
                                            </div>
                                            
                                            <div class="row align-items-center justify-content-center">
                                                <div class="col-lg-12 col-md-12 col-sm-12 text-center mt-5">
                                                    <a href="#" class="btn btn-primary px-md-5 rounded">Browse More Properties</a>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        
                                        <div class="tab-pane fade" id="sale" role="tabpanel" aria-labelledby="sale-tab">
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
    import user1 from '@/assets/img/user-5.jpg'
    import FooterDark from '@/components/footer/footer-dark.vue';
    import FooterTop from '@/components/footer/footer-top.vue';
    import NavbarDark from '@/components/navbar/navbar-dark.vue';
    import GridLayout from '@/components/property/grid-layout.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
    import SidebarOne from '@/components/sidebar-one.vue';
    import { agentData, propertyData, propertyInfo } from '@/data/data';

    const route = useRoute()

    const data = agentData.find((item)=>item.id === parseInt(route.params.id))
</script>
