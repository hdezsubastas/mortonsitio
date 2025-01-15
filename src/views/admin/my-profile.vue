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
                                <h4 class="mb-3">My Account</h4>
                                <div class="submit-section">
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label class="mb-1">Your Name</label>
                                            <input type="text" class="form-control" value="Shaurya Preet">
                                        </div>
                                        
                                        <div class="form-group col-md-6">
                                            <label class="mb-1">Email</label>
                                            <input type="email" class="form-control" value="preet77@gmail.com">
                                        </div>
                                        
                                        <div class="form-group col-md-6">
                                            <label class="mb-1">Your Title</label>
                                            <input type="text" class="form-control" value="Web Designer">
                                        </div>
                                        
                                        <div class="form-group col-md-6">
                                            <label class="mb-1">Phone</label>
                                            <input type="text" class="form-control" value="123 456 5847">
                                        </div>
                                        
                                        <div class="form-group col-md-6">
                                            <label class="mb-1">Address</label>
                                            <input type="text" class="form-control" value="522, Arizona, Canada">
                                        </div>
                                        
                                        <div class="form-group col-md-6">
                                            <label class="mb-1">City</label>
                                            <input type="text" class="form-control" value="Montquebe">
                                        </div>
                                        
                                        <div class="form-group col-md-6">
                                            <label class="mb-1">State</label>
                                            <input type="text" class="form-control" value="Canada">
                                        </div>
                                        
                                        <div class="form-group col-md-6">
                                            <label class="mb-1">Zip</label>
                                            <input type="text" class="form-control" value="160052">
                                        </div>
                                        
                                        <div class="form-group col-md-12">
                                            <label class="mb-1">About</label>
                                            <textarea class="form-control">Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper</textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-submit">	
                                <h4 class="mb-3">Social Accounts</h4>
                                <div class="submit-section">
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label class="mb-1">Facebook</label>
                                            <input type="text" class="form-control" value="https://facebook.com/">
                                        </div>
                                        
                                        <div class="form-group col-md-6">
                                            <label class="mb-1">Twitter</label>
                                            <input type="email" class="form-control" value="https://twitter.com/">
                                        </div>
                                        
                                        <div class="form-group col-md-6">
                                            <label class="mb-1">Google Plus</label>
                                            <input type="text" class="form-control" value="https://googleplus.com">
                                        </div>
                                        
                                        <div class="form-group col-md-6">
                                            <label class="mb-1">LinkedIn</label>
                                            <input type="text" class="form-control" value="https://linkedin.com/">
                                        </div>
                                        
                                        <div class="form-group col-lg-12 col-md-12">
                                            <button class="btn btn-primary px-5 rounded" type="submit">Save Changes</button>
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
    import FooterTop from '@/components/footer/footer-top.vue';
    import FooterDark from '@/components/footer/footer-dark.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
    const show = ref(false);
</script>

