<template>
    <div id="main-wrapper">
        <NavbarDark/>

        <div class="page-title">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <h2 class="ipt-title">Submit Property</h2>
                        <span class="ipn-subtitle">Just Submit Your Property</span>
                    </div>
                </div>
            </div>
        </div>

        <section class="gray-simple">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="alert bg-success text-light text-center" role="alert">Hi Dear, Have you already an account? <a href="#" class="text-warning" data-bs-toggle="collapse" data-bs-target="#login-frm">Please Login</a></div>
                    </div>
                    <div class="col-lg-12 col-md-12">	
                        <div id="login-frm" class="collapse mb-5">
                            <div class="row">
                                <div class="col-lg-5 col-md-4 col-sm-6">
                                    <div class="form-group">
                                        <div class="input-with-icons">
                                            <input type="text" class="form-control" placeholder="Username">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-5 col-md-4 col-sm-6">
                                    <div class="form-group">
                                        <div class="input-with-icons">
                                            <input type="text" class="form-control" placeholder="*******">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-12">
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-primary full-width">Submit</button>
                                    </div>
                                </div>
                                
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <div class="exclop-wrap d-flex align-items-center justify-content-between">
                                        <div class="exclop">
                                            <input id="a-1" class="form-check-input" name="a-1" type="checkbox">
                                            <label for="a-1" class="form-check-label ms-1">Remember Me</label>
                                        </div>
                                        <div class="exclop-last">
                                            <router-link to="#" class="fw-medium text-primary">Forget Password?</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="submit-page">
                            <div class="form-submit">	
                                <h3>Basic Information</h3>
                                <div class="submit-section">
                                    <div class="row">
                                        <div class="form-group col-md-12">
                                            <label class="mb-1">Property Title<span class="tip-topdata" data-tip="Property Title"><i class="fa-solid fa-info"></i></span></label>
                                            <input type="text" class="form-control">
                                        </div>
                                        
                                        <div class="form-group col-md-6">
                                            <label class="mb-1">Status</label>
                                            <Multiselect v-model="selected" :options="status" placeholder="Select Status" class="form-control px-0 "/>
                                        </div>
                                        
                                        <div class="form-group col-md-6">
                                            <label class="mb-1">Property Type</label>
                                            <Multiselect v-model="selected" :options="ptypes" placeholder="Show All" class="form-control px-0 "/>
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
                                            <Multiselect v-model="selected" :options="rooms" placeholder="Bedrooms" class="form-control px-0 "/>
                                        </div>
                                        
                                        <div class="form-group col-md-6">
                                            <label class="mb-1">Bathrooms</label>
                                            <Multiselect v-model="selected" :options="rooms" placeholder="Bathrooms" class="form-control px-0 "/>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div class="form-submit">	
                                <h3>Gallery</h3>
                                <div class="submit-section">
                                    <div class="row">
                                        <div class="form-submit middle-logo">
                                            <h6 class="text-muted">Drag & Drop To Change Logo</h6>
                                            <div class="form-row position-relative">
                                                <div class='position-absolute w-100 h-100 top-0 bottom-0'>
                                                    <input type="file"  @change="handleChange($event)" style="width: 100%; height: 100%; opacity: 0;"/>
                                                </div>
                                                <div class="form-group d-flex justify-content-center col-md-12">
                                                    <form class="dropzone profile-logo dz-clickable primary-dropzone">
                                                        <div v-if="file" class='dz-image'>
                                                            <img :src="file" clas='object-fit-cover' alt='' style="width: 120px; height: 120px; border-radius: 15px;"/>
                                                        </div>
                                                        <div v-if="!file" class="dz-default dz-message">
                                                            <i class="fa-solid fa-images"></i>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
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
                                            <Multiselect v-model="selected" :options="age" placeholder="Select An Option" class="form-control px-0 "/>
                                        </div>
                                        
                                        <div class="form-group col-md-4">
                                            <label class="mb-1">Garage (optional)</label>
                                            <Multiselect v-model="selected" :options="rooms" placeholder="Choose Rooms" class="form-control px-0 "/>
                                        </div>
                                        
                                        <div class="form-group col-md-4">
                                            <label class="mb-1">Rooms (optional)</label>
                                            <Multiselect v-model="selected" :options="rooms" placeholder="Choose Rooms" class="form-control px-0 "/>
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
                                        <label for="aj-1" class="form-check-label ms-1">I consent to having this website store my submitted information so they can respond to my inquiry.</label>
                                    </li>
                                </ul>
                            </div>
                            
                            <div class="form-group col-lg-12 col-md-12">
                                <button class="btn btn-primary fw-medium px-5" type="button">Submit & Preview</button>
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
    import NavbarDark from '@/components/navbar/navbar-dark.vue';
    import Multiselect from '@vueform/multiselect';
    import '@vueform/multiselect/themes/default.css';
    import FooterTop from '@/components/footer/footer-top.vue';
    import FooterDark from '@/components/footer/footer-dark.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';

    const status = ref([
        'For Rent','For Sale',
    ])
    const ptypes = ref([
        'Houses','Apartment','Villas','Commercial','Offices','Garage'
    ])
    const rooms = ref([
        '1','2','3','4','5','6'
    ])
    const age = ref([
        '0 - 5 Years','0 - 10Years','0 - 15 Years','0 - 20 Years','20+ Years'
    ])

    const file = ref('');

    const handleChange = (event) => {
        const input = event.target;
        if (input.files && input.files[0]) {
            file.value = URL.createObjectURL(input.files[0]);
        }
    };
</script>
