<template>
    <div id="main-wrapper">
        <NavbarDark :transparent="true"/>

        <div class="light-bg hero-banner">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12">
                        <p class="d-inline-flex sm-small text-light rounded-5 px-2 py-1 bg-dark align-items-center">We just launched our service in New York, United States<span class="sm-small px-2 rounded-5 bg-primary text-light ms-2">New</span></p>
                        <h2>Find Your Dream House<br>In Europe Now.</h2>
                        <p class="small">Find homes in 80+ different countries represented byb 700 leading member brokerages.</p>
                        <div class="full-search-2 eclip-search italian-search hero-search-radius mt-5">
                            <div class="hero-search-content">
                                <div class="row">
                                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-12 b-r">
                                        <div class="form-group">
                                            <div class="choose-propert-type">
                                                <ul>
                                                    <li>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="radio" id="typbuy" name="typeprt">
                                                            <label class="form-check-label" for="typbuy">Buy</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="radio" id="typrent" name="typeprt" checked>
                                                            <label class="form-check-label" for="typrent">Rent</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-xl-7 col-lg-6 col-md-5 col-sm-12 px-xl-0 px-lg-0 px-md-0">
                                        <div class="form-group border-start borders">
                                            <div class="position-relative">
                                                <input type="text" class="form-control border-0 ps-5" placeholder="Search for a location">
                                                <div class="position-absolute top-50 start-0 translate-middle-y ms-2">
                                                    <span class="svg-icon text-primary svg-icon-2hx">
                                                        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="currentColor"/>
                                                            <path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="currentColor"/>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-xl-2 col-lg-3 col-md-3 col-sm-12">
                                        <div class="form-group">
                                            <button type="button" class="btn btn-dark full-width">Search</button>
                                        </div>
                                    </div>
                                            
                                </div>
                            </div>
                        </div>
                        <div class="searches-lists">
                            <ul>
                                <li><span>Popular Searches:</span></li>
                                <li><router-link to="">2 BHK</router-link></li>
                                <li><router-link to="" class="active">Banglaw</router-link></li>
                                <li><router-link to="">Apartment</router-link></li>
                                <li><router-link to="">London</router-link></li>
                                <li><router-link to="">Villa</router-link></li>
                            </ul>
                        </div>
                        
                    </div>
                    <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                        <div class="">
                            <img :src="city" class="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section>
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 col-md-10">
                        <div class="sec-heading mb-4 mss">
                            <h2>Choose Property Type</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <PropertyType/>
            </div>
        </section>
        <div class="clearfix"></div>

        <section class="gray-simple">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-7 col-md-10 text-center">
                        <div class="sec-heading mss">
                            <h2>Featured Property For Sale</h2>
                            <p>At vero eos et accusamus dignissimos ducimus</p>
                        </div>
                    </div>
                </div>
                <GridOne/>
                <div class="row align-items-center justify-content-center">
                    <div class="col-lg-12 col-md-12 col-sm-12 text-center mt-5">
                        <router-link to="/listings-list-with-sidebar" class="btn btn-primary px-md-5 rounded">Browse More Properties</router-link>
                    </div>
                </div>
            </div>		
        </section>

        <section>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-7 col-md-10 text-center">
                        <div class="sec-heading center">
                            <h2>Find Best Locations</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <BestLocation/>
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 text-center mt-5">
                        <router-link to="/listings-list-with-sidebar" class="btn btn-primary px-md-5 rounded">Browse More Locations</router-link>
                    </div>
                </div>
            </div>
        </section>
        <hr class="opacity-25">

        <section>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-10 text-center">
                        <div class="sec-heading center">
                            <h2>Featured Property For Sale</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <FeatureProperty :border="true"/>
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 text-center mt-4">
                        <router-link to="/listings-list-with-sidebar" class="btn btn-primary px-lg-5 rounded">Browse More Properties</router-link>
                    </div>
                </div>
            </div>		
        </section>

        <CtaTwo/>

        <section>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-10 text-center">
                        <div class="sec-heading center">
                            <h2>Explore Featured Agents</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <TeamOne/>
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 text-center mt-5">
                        <RouterLink to="/listings-list-with-sidebar" class="btn btn-primary px-lg-5 rounded">Explore More Agents</RouterLink>
                    </div>
                </div>
            </div>
        </section>
        <div class="clearfix"></div>

        <section class="gray-bg">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-10 text-center">
                        <div class="sec-heading center">
                            <h2>Good Reviews by Customers</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <ClientOne/>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-10 text-center">
                        <div class="sec-heading center">
                            <h2>Latest Updates By Resido</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <BlogOne/>
            </div>		
        </section>

        <SubscribeLight/>
        <FooterDark/>
        <ScrollToTop/>
    </div>
</template>

<script setup>
    import city from '@/assets/img/side-city-1.png'
    import BestLocation from '@/components/best-location.vue';
    import BlogOne from '@/components/blog-one.vue';
    import ClientOne from '@/components/client-one.vue';
    import CtaTwo from '@/components/cta-two.vue';
    import FooterDark from '@/components/footer/footer-dark.vue';
    import NavbarDark from '@/components/navbar/navbar-dark.vue';
    import FeatureProperty from '@/components/property/feature-property.vue';
    import GridOne from '@/components/property/grid-one.vue';
    import PropertyType from '@/components/property/property-type.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
    import SubscribeLight from '@/components/subscribe-light.vue';
    import TeamOne from '@/components/team-one.vue';
</script>
