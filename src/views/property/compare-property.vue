<template>
    <div id="main-wrapper">
        <NavbarDark/>

        <div class="page-title">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <h2 class="ipt-title">Compare Property</h2>
                        <span class="ipn-subtitle">Compare your Selected Property</span>
                    </div>
                </div>
            </div>
        </div>

        <section>
            <div class="container">
                <div class="pricing pricing-5">
                    <div class="row">
                        <div class="col-lg-3 text-center d-lg-block d-md-none d-sm-none d-none">
                            <div class="comp-property-blank">
                            </div>
                            <ul>
                                <li><span>Area</span></li>
                                <li><span>Rooms</span></li>
                                <li><span>Bedrooms</span></li>
                                <li><span>Bathrooms</span></li>
                                <li><span>Air Conditioning</span></li>
                                <li><span>Swimming Pool</span></li>
                                <li><span>Laundry Room</span></li>
                                <li><span>Window Covering</span></li>
                                <li><span>Building Age</span></li>
                                <li><span>Alarm</span></li>
                                <li><span>Heating</span></li>
                                <li><span>Parking</span></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-12 text-center">
                            <div class="comp-property">
                                <router-link to="">
                                    <div class="clp-img">
                                        <img :src="p1" class="img-fluid" alt=""/>
                                        <span class="remove-from-compare"><i class="fa-solid fa-xmark"></i></span>
                                    </div>

                                    <div class="clp-title">
                                        <h4>Eagle Apartments</h4>
                                        <span>$275,000</span>
                                    </div>
                                </router-link>
                            </div>
                            <ul>
                                <li>1750 sq ft<span class="show-mb"></span></li>
                                <li>3<span class="show-mb">Rooms</span></li>
                                <li>2<span class="show-mb">Bedrooms</span></li>
                                <li>2<span class="show-mb">Bathrooms</span></li>
                                <li><div class="checkmark"></div><span class="show-mb">Air Conditioning</span></li>
                                <li><div class="crossmark"></div><span class="show-mb"> No Swimming Pool</span></li>
                                <li><div class="checkmark"></div><span class="show-mb">Laundry Room</span></li>
                                <li><div class="crossmark"></div><span class="show-mb">No Window Covering</span></li>
                                <li>1 - 5 Year<span class="show-mb">Age</span></li>
                                <li><div class="checkmark"></div><span class="show-mb">Alarm</span></li>
                                <li>Forced Air<span class="show-mb">Forced Air</span></li>
                                <li><div class="checkmark"></div><span class="show-mb">Parking</span></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-12 text-center pricing--emphasise">
                            <div class="comp-property">
                                <router-link to="#">
                                    <div class="clp-img">
                                        <img :src="p2" class="img-fluid" alt=""/>
                                        <span class="remove-from-compare"><i class="fa-solid fa-xmark"></i></span>
                                    </div>

                                    <div class="clp-title">
                                        <h4>Eagle Apartments</h4>
                                        <span>$275,000</span>
                                    </div>
                                </router-link>
                            </div>
                            <ul>
                                <li>1750 sq ft<span class="show-mb">Area</span></li>
                                <li>3<span class="show-mb">Rooms</span></li>
                                <li>2<span class="show-mb">Bedrooms</span></li>
                                <li>2<span class="show-mb">Bathrooms</span></li>
                                <li><div class="checkmark"></div><span class="show-mb">Air Conditioning</span></li>
                                <li><div class="crossmark"></div><span class="show-mb"> No Swimming Pool</span></li>
                                <li><div class="checkmark"></div><span class="show-mb">Laundry Room</span></li>
                                <li><div class="crossmark"></div><span class="show-mb">No Window Covering</span></li>
                                <li>1 - 5 Year<span class="show-mb">Age</span></li>
                                <li><div class="checkmark"></div><span class="show-mb">Alarm</span></li>
                                <li>Gas<span class="show-mb">Gas Heating</span></li>
                                <li><div class="checkmark"></div><span class="show-mb">Parking</span></li>
                            </ul>
                        </div>
                        
                        <div class="col-lg-3 col-md-4 col-sm-12 text-center">
                            <div class="comp-property">
                                <router-link to="">
                                    <div class="clp-img">
                                        <img :src="p3" class="img-fluid" alt=""/>
                                        <span class="remove-from-compare"><i class="fa-solid fa-xmark"></i></span>
                                    </div>

                                    <div class="clp-title">
                                        <h4>Eagle Apartments</h4>
                                        <span>$275,000</span>
                                    </div>
                                </router-link>
                            </div>
                            <ul>
                                <li>1750 sq ft<span class="show-mb">Area</span></li>
                                <li>3<span class="show-mb">Rooms</span></li>
                                <li>2<span class="show-mb">Bedrooms</span></li>
                                <li>2<span class="show-mb">Bathrooms</span></li>
                                <li><div class="checkmark"></div><span class="show-mb">Air Conditioning</span></li>
                                <li><div class="crossmark"></div><span class="show-mb"> No Swimming Pool</span></li>
                                <li><div class="checkmark"></div><span class="show-mb">Laundry Room</span></li>
                                <li><div class="checkmark"></div><span class="show-mb">Window Covering</span></li>
                                <li>1 - 5 Year<span class="show-mb">Age</span></li>
                                <li><div class="checkmark"></div><span class="show-mb">Alarm</span></li>
                                <li>Forced Air<span class="show-mb">Forced Air</span></li>
                                <li><div class="checkmark"></div><span class="show-mb">Parking</span></li>
                            </ul>
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
    import p1 from '@/assets/img/p-1.jpg'
    import p2 from '@/assets/img/p-2.jpg'
    import p3 from '@/assets/img/p-3.jpg'
    import FooterDark from '@/components/footer/footer-dark.vue';
    import FooterTop from '@/components/footer/footer-top.vue';
    import NavbarDark from '@/components/navbar/navbar-dark.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
</script>
