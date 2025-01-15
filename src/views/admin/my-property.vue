<template>
    <div id="main-wrapper">
        <AdminNavbar/>

        <div class="page-title">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <h2 class="ipt-title">Welcome!</h2>
                        <span class="ipn-subtitle">Welcome To Your Account</span>
                    </div>
                </div>
            </div>
        </div>

        <section class="bg-light">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="filter_search_opt">
                            <router-link to="" @click="show = !show" class="btn btn-dark full-width mb-4">Dashboard Navigation<i class="fa-solid fa-bars ms-2"></i></router-link>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-12">
                        <AdminSidebar :open="show" @update:open="show = $event"/>
                    </div>
                    
                    <div class="col-lg-9 col-md-12">
                        <div class="dashboard-wraper">
                            <div class="form-submit">	
                                <h4>My Property</h4>
                            </div>
                            
                            <div class="row">
                                <div v-for="(item, index) in myProperty" :key="index" class="col-md-12 col-sm-12 col-md-12">
                                    <div class="singles-dashboard-list">
                                        <div class="sd-list-left">
                                            <img :src="item.image" class="img-fluid" alt="" />
                                        </div>
                                        <div class="sd-list-right">
                                            <h4 class="listing_dashboard_title"><router-link to="#" class="text-primary">{{item.name}}</router-link></h4>
                                            <div class="user_dashboard_listed">Price: {{item.price}}</div>
                                            <div class="user_dashboard_listed">
                                                Listed in <router-link to="" class="text-primary">Rentals</router-link> and <router-link to="" class="text-primary">Apartments</router-link>
                                            </div>
                                            <div class="user_dashboard_listed">
                                                City: <router-link to="" class="text-primary">{{item.city}}</router-link> , Area:{{item.area}}
                                            </div>
                                            <div class="action">
                                                <router-link to=""><i class="fa-solid fa-pen-to-square"></i></router-link>
                                                <router-link to=""><i class="fa-regular fa-eye"></i></router-link>
                                                <router-link to="" class="delete"><i class="fa-regular fa-circle-xmark"></i></router-link>
                                                <router-link to="" class="delete"><i class="fa-solid fa-star"></i></router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
    import { ref } from 'vue';
    import AdminSidebar from '@/components/admin-sidebar.vue';
    import AdminNavbar from '@/components/navbar/admin-navbar.vue';
    import { myProperty } from '@/data/data';
    import FooterTop from '@/components/footer/footer-top.vue';
    import FooterDark from '@/components/footer/footer-dark.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
    const show = ref(false);
</script>