<template>
    <div id="main-wrapper">
        <NavbarDark/>

        <div class="page-title">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <h2 class="ipt-title">Checkout</h2>
                        <span class="ipn-subtitle">Proceed For Payment</span>
                    </div>
                </div>
            </div>
        </div>

        <section class="gray-simple">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="alert bg-success text-light text-center" role="alert">
                            Hi Dear, Have you already an account? <router-link to="#" class="text-warning" data-bs-toggle="collapse" data-bs-target="#login-frm">Please Login</router-link>
                        </div>
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

                <div class="row form-submit">
                    <div class="col-lg-8 col-md-8 col-sm-12">
                        <div class="row m-0">
                            <div class="submit-page">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <h3>Billing Detail</h3>
                                    </div>
                                    
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label class="mb-1">Name<i class="req">*</i></label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label class="mb-1">Email<i class="req">*</i></label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <div class="form-group">
                                            <label class="mb-1">Company Name</label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <div class="form-group">
                                            <label class="mb-1">Country<i class="req">*</i></label>
                                            <Multiselect v-model="selected" :options="country" placeholder="Country" class="form-control px-0 border"/>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <div class="form-group">
                                            <label class="mb-1">Street<i class="req">*</i></label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label class="mb-1">Apartment</label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label class="mb-1">Town/City<i class="req">*</i></label>
                                            <Multiselect v-model="selected" :options="city" placeholder="City/Town" class="form-control px-0 border"/>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label class="mb-1">State<i class="req">*</i></label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label class="mb-1">Postcode/Zip<i class="req">*</i></label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label class="mb-1">Phone<i class="req">*</i></label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label class="mb-1">Landline</label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <div class="form-group">
                                            <label class="mb-1">Additional Information</label>
                                            <textarea class="form-control ht-50"></textarea>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <input id="a-2" class="form-check-input" name="a-2" type="checkbox">
                                            <label for="a-2" class="form-check-label ms-1">Create An Account</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <h3>Your Order</h3>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="product-wrap">
                                <h5>Platinum</h5>
                                <ul>
                                    <li><strong>Total</strong>$319</li>
                                    <li><strong>Subtotal</strong>$319</li>
                                    <li><strong>Tax</strong>$10</li>
                                    <li><strong>Total</strong>$329</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="alert bg-danger text-light text-center" role="alert">
                                Have You Coupon? <router-link to="#" class="text-warning" data-bs-toggle="collapse" data-bs-target="#coupon-frm">Click Here</router-link>
                            </div>
                        </div>
                        
                        <div class="col-lg-12 col-md-12 col-sm-12 mb-2">
                            <div id="coupon-frm" class="collapse">
                                <input type="text" class="form-control mb-2" placeholder="Coupon Code">
                                <button type="submit" class="btn btn-primary full-width mb-2">Apply Coupon</button>
                            </div>
                        </div>
                        
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="pay-wrap">
                            
                                <div class="pay-wrap-header">
                                    <h4>Platinum</h4>
                                    <div class="pw-right">
                                        <h3 class="text-primary">$12<sub>\Month</sub></h3>
                                    </div>
                                </div>
                                
                                <div class="pay-wrap-content">
                                    
                                    <div class="pw-first-content">
                                        <h4>Your Features</h4>
                                        <button data-toggle="collapse" data-target="#change-plan">Change Plan</button>
                                    </div>
                                    
                                    <div id="change-plan" class="collapse">
                                        <ul class="no-ul-list">
                                            <li>
                                                <input id="basic" class="form-check-input" name="plan" type="radio">
                                                <label for="basic" class="form-check-label">Basic Plan</label>
                                            </li>
                                            <li>
                                                <input id="platinum" class="form-check-input" name="plan" type="radio" checked>
                                                <label for="platinum" class="form-check-label">Platinum</label>
                                            </li>
                                            <li>
                                                <input id="standard" class="form-check-input" name="plan" type="radio">
                                                <label for="standard" class="form-check-label">Standard</label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="pw-content-detail">
                                        <ul class="pw-features">
                                            <li>First Features</li>
                                            <li>Second Features</li>
                                            <li>Third Features</li>
                                            <li>Fourth Features</li>
                                        </ul>
                                    </div>
                                    <div class="pw-btn-wrap">
                                        <router-link to="/payment" class="btn btn-primary rounded full-width">Proceed Payment</router-link>
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
    import NavbarDark from '@/components/navbar/navbar-dark.vue';
    import FooterTop from '@/components/footer/footer-top.vue';
    import FooterDark from '@/components/footer/footer-dark.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';

    import Multiselect from '@vueform/multiselect';
    import '@vueform/multiselect/themes/default.css';

    const country = ref([
        'United State',
        'United kingdom',
        'India',
        'Canada',
    ])
    const city = ref([
        'Punjab',
        'Chandigarh',
        'Allahabad',
        'Lucknow',
    ])
</script>
