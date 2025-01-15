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
                        
                        <div class="row mb-3">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <h4>Your Current Package: <span class="pc-title text-primary">Gold Package</span></h4>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="dashboard-stat widget-1">
                                    <div class="dashboard-stat-content"><h4 class="mb-2">607</h4> <span>Listings Included</span></div>
                                    <div class="dashboard-stat-icon"><i class="fa-solid fa-location-dot"></i></div>
                                </div>	
                            </div>
                            
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="dashboard-stat widget-2">
                                    <div class="dashboard-stat-content"><h4 class="mb-2">102</h4> <span>Listings Remaining</span></div>
                                    <div class="dashboard-stat-icon"><i class="ti ti-pie-chart"></i></div>
                                </div>	
                            </div>
                            
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="dashboard-stat widget-3">
                                    <div class="dashboard-stat-content"><h4 class="mb-2">70</h4> <span>Featured Included</span></div>
                                    <div class="dashboard-stat-icon"><i class="ti ti-user"></i></div>
                                </div>	
                            </div>
                            
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="dashboard-stat widget-4">
                                    <div class="dashboard-stat-content"><h4 class="mb-2">30</h4> <span>Featured Remaining</span></div>
                                    <div class="dashboard-stat-icon"><i class="fa-solid fa-location-dot"></i></div>
                                </div>	
                            </div>
                            
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="dashboard-stat widget-5">
                                    <div class="dashboard-stat-content"><h4 class="mb-2">Unlimited</h4> <span>Images / per listing</span></div>
                                    <div class="dashboard-stat-icon"><i class="ti ti-pie-chart"></i></div>
                                </div>	
                            </div>
                            
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="dashboard-stat widget-6">
                                    <div class="dashboard-stat-content"><h4 class="mb-2">2021-02-26</h4> <span>Ends On</span></div>
                                    <div class="dashboard-stat-icon"><i class="ti ti-user"></i></div>
                                </div>	
                            </div>
                        </div>
                
                        <div class="dashboard-wraper">
                            <div class="form-submit">	
                                <h4>My Account</h4>
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
                                <h4>Social Accounts</h4>
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
                                            <button class="btn btn-primary rounded px-5" type="button">Save Changes</button>
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
    import FooterDark from '@/components/footer/footer-dark.vue';
    import FooterTop from '@/components/footer/footer-top.vue';
    import AdminNavbar from '@/components/navbar/admin-navbar.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';

    const show = ref(false);
</script>
