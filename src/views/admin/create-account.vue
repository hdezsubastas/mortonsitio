<template>
    <div id="main-wrapper">
        <NavbarDark/>

        <div class="page-title">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <h2 class="ipt-title">Create An Account</h2>
                        <span class="ipn-subtitle">Register On Resido Today</span>
                    </div>
                </div>
            </div>
        </div>

        <section class="gray-simple">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-9">
                        <div class="card border-0 rounded-4 p-xl-4 p-lg-4 p-md-4 p-3">
                            <div class="simple-form">
                                <div class="form-header text-center mb-5">
                                    <div class="effco-logo mb-2">
                                        <router-link class="d-flex align-items-center justify-content-center" to="/">
                                            <span class="svg-icon text-primary svg-icon-2hx">
                                                <svg width="90" height="90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15.8797 15.375C15.9797 15.075 15.9797 14.775 15.9797 14.475C15.9797 13.775 15.7797 13.075 15.4797 12.475C14.7797 11.275 13.4797 10.475 11.9797 10.475C11.7797 10.475 11.5797 10.475 11.3797 10.575C7.37971 11.075 4.67971 14.575 2.57971 18.075L10.8797 3.675C11.3797 2.775 12.5797 2.775 13.0797 3.675C13.1797 3.875 13.2797 3.975 13.3797 4.175C15.2797 7.575 16.9797 11.675 15.8797 15.375Z" fill="currentColor"/>
                                                    <path opacity="0.3" d="M20.6797 20.6749C16.7797 20.6749 12.3797 20.275 9.57972 17.575C10.2797 18.075 11.0797 18.375 11.9797 18.375C13.4797 18.375 14.7797 17.5749 15.4797 16.2749C15.6797 15.9749 15.7797 15.675 15.7797 15.375V15.2749C16.8797 11.5749 15.2797 7.47495 13.2797 4.07495L21.6797 18.6749C22.2797 19.5749 21.6797 20.6749 20.6797 20.6749ZM8.67972 18.6749C8.17972 17.8749 7.97972 16.975 7.77972 15.975C7.37972 13.575 8.67972 10.775 11.3797 10.375C7.37972 10.875 4.67972 14.375 2.57972 17.875C2.47972 18.075 2.27972 18.375 2.17972 18.575C1.67972 19.475 2.27972 20.475 3.27972 20.475H10.3797C9.67972 20.175 9.07972 19.3749 8.67972 18.6749Z" fill="currentColor"/>
                                                </svg>
                                            </span>
                                        </router-link>
                                    </div>
                                    <h4 class="fs-2">Create Account On Resido</h4>
                                </div>
                                <form>
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6">
                                            <div class="form-group mb-3">
                                                <label class="mb-1">Full Name</label>
                                                <input type="text" class="form-control" placeholder="Full Name">
                                            </div>
                                        </div>
                                        
                                        <div class="col-lg-6 col-md-6 mb-3">
                                            <div class="form-group">
                                                <label class="mb-1">Email</label>
                                                <input type="email" class="form-control" placeholder="Email">
                                            </div>
                                        </div>
                                        
                                        <div class="col-lg-6 col-md-6 mb-3">
                                            <div class="form-group">
                                                <label class="mb-1">Username</label>
                                                <input type="text" class="form-control" placeholder="Username">
                                            </div>
                                        </div>
                                        
                                        <div class="col-lg-6 col-md-6 mb-3">
                                            <div class="form-group">
                                                <label class="mb-1">Password</label>
                                                <input type="password" class="form-control" placeholder="*******">
                                            </div>
                                        </div>
                                        
                                        <div class="col-lg-6 col-md-6 mb-3">
                                            <div class="form-group">
                                                <label class="mb-1">Phone</label>
                                                <input type="tel" class="form-control" placeholder="123 546 5847">
                                            </div>
                                        </div>
                                        
                                        <div class="col-lg-6 col-md-6 mb-3">
                                            <div class="form-group">
                                                <label class="mb-1">Signup As</label>
                                                <select class="form-control">
                                                    <option>As a Customer</option>
                                                    <option>As a Agent</option>
                                                    <option>As a Agency</option>
                                                </select>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-primary full-width fw-medium">Create Account<i class="fa-solid fa-arrow-right-long ms-2"></i></button>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-divider"><span>Or SignUp via</span></div>
                            <div class="social-login mb-3">
                                <ul>
                                    <li><router-link to="#" class="btn connect-fb"><i class="ti ti-facebook"></i>Facebook</router-link></li>
                                    <li><router-link to="#" class="btn connect-google"><i class="ti ti-google"></i>Google+</router-link></li>
                                </ul>
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
    import FooterDark from '@/components/footer/footer-dark.vue';
    import FooterTop from '@/components/footer/footer-top.vue';
    import NavbarDark from '@/components/navbar/navbar-dark.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
</script>