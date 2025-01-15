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
                                <h4 class="mb-3">Bookmark Property</h4>
                            </div>
                            
                            <table class="property-table-wrap responsive-table bkmark">
                                <tbody>
                                    <tr>
                                        <th><i class="fa fa-file-text"></i> Property</th>
                                        <th></th>
                                    </tr>
                                    <tr v-for="(item, index) in bookmark" :key="index">
                                        <td class="property-container">
                                            <img :src="item.image" alt="">
                                            <div class="title">
                                                <h4><router-link to="#">{{item.name}}</router-link></h4>
                                                <span>{{item.location}} </span>
                                                <span class="table-property-price">{{item.value}}</span>
                                            </div>
                                        </td>
                                        <td class="action">
                                            <router-link to="#" class="delete"><i class="fa-solid fa-trash-can"></i> Delete</router-link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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
    import FooterDark from '@/components/footer/footer-dark.vue';
    import FooterTop from '@/components/footer/footer-top.vue';
    import AdminNavbar from '@/components/navbar/admin-navbar.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
    import { bookmark } from '@/data/data';
    
    const show = ref(false);
</script>
