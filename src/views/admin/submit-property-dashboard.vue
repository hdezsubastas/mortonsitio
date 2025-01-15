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
                            <div class="row">
                                <div class="col-lg-12 col-md-12">
                                    <div class="submit-pages">
                                        <div class="form-submit">	
                                            <h3 class="mb-3">Basic Information</h3>
                                            <div class="submit-section">
                                                <div class="row">
                                                    <div class="form-group col-md-12">
                                                        <label class="mb-1">Property Title<span class="tip-topdata" data-tip="Property Title"><i class="fa-solid fa-info"></i></span></label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label class="mb-1">Status</label>
                                                        <Multiselect v-model="selected" :options="status" placeholder="Select Status" class="form-control px-0 border"/>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label class="mb-1">Property Type</label>
                                                        <Multiselect v-model="selected" :options="ptypes" placeholder="Show All" class="form-control px-0 border"/>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label class="mb-1">Price</label>
                                                        <input type="text" class="form-control" placeholder="USD">
                                                    </div>
                                                    
                                                    <div class="form-group col-md-6">
                                                        <label class="mb-1">Area</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                    
                                                    <div class="form-group col-md-6">
                                                        <label class="mb-1">Bedrooms</label>
                                                        <Multiselect v-model="selected" :options="rooms" placeholder="Bedrooms" class="form-control px-0 border"/>
                                                    </div>
                                                    
                                                    <div class="form-group col-md-6">
                                                        <label class="mb-1">Bathrooms</label>
                                                        <Multiselect v-model="selected" :options="rooms" placeholder="Bathrooms" class="form-control px-0 border"/>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="form-submit">	
                                            <h3>Gallery</h3>
                                            <div class="submit-section">
                                                <div class="row">
                                                    <div class="form-group col-md-12">
                                                        <label>Upload Gallery</label>
                                                        <form action="/upload-target" class="dropzone dz-clickable primary-dropzone">
                                                            <div class="dz-default dz-message">
                                                                <i class="ti ti-gallery"></i>
                                                                <span>Drag & Drop To Change Logo</span>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="form-submit">	
                                            <h3>Location</h3>
                                            <div class="submit-section">
                                                <div class="row">
                                                
                                                    <div class="form-group col-md-6">
                                                        <label class="mb-1">Address</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                    
                                                    <div class="form-group col-md-6">
                                                        <label class="mb-1">City</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                    
                                                    <div class="form-group col-md-6">
                                                        <label class="mb-1">State</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                    
                                                    <div class="form-group col-md-6">
                                                        <label class="mb-1">Zip Code</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="form-submit">	
                                            <h3>Detailed Information</h3>
                                            <div class="submit-section">
                                                <div class="row">
                                                
                                                    <div class="form-group col-md-12">
                                                        <label class="mb-1">Description</label>
                                                        <textarea class="form-control h-120"></textarea>
                                                    </div>
                                                    
                                                    <div class="form-group col-md-4">
                                                        <label class="mb-1">Building Age (optional)</label>
                                                        <Multiselect v-model="selected" :options="bage" placeholder="Select An Option" class="form-control px-0 border"/>
                                                    </div>
                                                    
                                                    <div class="form-group col-md-4">
                                                        <label class="mb-1">Garage (optional)</label>
                                                        <Multiselect v-model="selected" :options="rooms" placeholder="Choose Rooms" class="form-control px-0 border"/>
                                                    </div>
                                                    
                                                    <div class="form-group col-md-4">
                                                        <label class="mb-1">Rooms (optional)</label>
                                                        <Multiselect v-model="selected" :options="rooms" placeholder="Choose Rooms" class="form-control px-0 border"/>
                                                    </div>
                                                    
                                                    <div class="form-group col-md-12">
                                                        <label class="mb-1">Other Features (optional)</label>
                                                        <div class="o-features">
                                                            <ul class="no-ul-list third-row">
                                                                <li>
                                                                    <input id="a-1" class="form-check-input" name="a-1" type="checkbox">
                                                                    <label for="a-1" class="form-check-label ms-1">Air Condition</label>
                                                                </li>
                                                                <li>
                                                                    <input id="a-2" class="form-check-input" name="a-2" type="checkbox">
                                                                    <label for="a-2" class="form-check-label ms-1">Bedding</label>
                                                                </li>
                                                                <li>
                                                                    <input id="a-3" class="form-check-input" name="a-3" type="checkbox">
                                                                    <label for="a-3" class="form-check-label ms-1">Heating</label>
                                                                </li>
                                                                <li>
                                                                    <input id="a-4" class="form-check-input" name="a-4" type="checkbox">
                                                                    <label for="a-4" class="form-check-label ms-1">Internet</label>
                                                                </li>
                                                                <li>
                                                                    <input id="a-5" class="form-check-input" name="a-5" type="checkbox">
                                                                    <label for="a-5" class="form-check-label ms-1">Microwave</label>
                                                                </li>
                                                                <li>
                                                                    <input id="a-6" class="form-check-input" name="a-6" type="checkbox">
                                                                    <label for="a-6" class="form-check-label ms-1">Smoking Allow</label>
                                                                </li>
                                                                <li>
                                                                    <input id="a-7" class="form-check-input" name="a-7" type="checkbox">
                                                                    <label for="a-7" class="form-check-label ms-1">Terrace</label>
                                                                </li>
                                                                <li>
                                                                    <input id="a-8" class="form-check-input" name="a-8" type="checkbox">
                                                                    <label for="a-8" class="form-check-label ms-1">Balcony</label>
                                                                </li>
                                                                <li>
                                                                    <input id="a-9" class="form-check-input" name="a-9" type="checkbox">
                                                                    <label for="a-9" class="form-check-label ms-1">Icon</label>
                                                                </li>
                                                                <li>
                                                                    <input id="a-10" class="form-check-input" name="a-10" type="checkbox">
                                                                    <label for="a-10" class="form-check-label ms-1">Wi-Fi</label>
                                                                </li>
                                                                <li>
                                                                    <input id="a-11" class="form-check-input" name="a-11" type="checkbox">
                                                                    <label for="a-11" class="form-check-label ms-1">Beach</label>
                                                                </li>
                                                                <li>
                                                                    <input id="a-12" class="form-check-input" name="a-12" type="checkbox">
                                                                    <label for="a-12" class="form-check-label ms-1">Parking</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="form-submit">	
                                            <h3>Contact Information</h3>
                                            <div class="submit-section">
                                                <div class="row">
                                                
                                                    <div class="form-group col-md-4">
                                                        <label class="mb-1">Name</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                    
                                                    <div class="form-group col-md-4">
                                                        <label class="mb-1">Email</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                    
                                                    <div class="form-group col-md-4">
                                                        <label class="mb-1">Phone (optional)</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group col-lg-12 col-md-12">
                                            <label class="mb-1">GDPR Agreement *</label>
                                            <ul class="no-ul-list">
                                                <li>
                                                    <input id="aj-1" class="form-check-input" name="aj-1" type="checkbox">
                                                    <label for="aj-1" class="form-check-label">I consent to having this website store my submitted information so they can respond to my inquiry.</label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="form-group col-lg-12 col-md-12">
                                            <button class="btn btn-primary px-5 rounded" type="submit">Submit & Preview</button>
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

    import Multiselect from '@vueform/multiselect';
    import '@vueform/multiselect/themes/default.css';

    const show = ref(false);

    const rooms = ref(['1','2','3','4','5','6'])
    const status = ref(['For Rent','For Sale'])
    const ptypes = ref([
        'Houses','Apartment','Villas','Commercial','Offices','Garage'
    ])
    const bage = ref([
        '0 - 5 Years','0 - 10Years','0 - 15 Years','0 - 20 Years','20+ Years',
    ])
</script>
