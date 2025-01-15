<template>
    <div>
        <NavbarFull/>

        <div class="home-map-banner half-map">
            <MapTwo/>
            <div class="fs-inner-container">
                <div class="fs-content">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="_mp_filter mb-3">
                                <div class="_mp_filter_first">
                                    <h4>Where to Say?</h4>
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Neighborhood, City etc.">
                                        <div class="input-group-append">
                                            <button type="submit" class="input-group-text"><i class="fas fa-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div class="_mp_filter_last">
                                    <a class="map_filter" data-bs-toggle="collapse" href="#filtermap" role="button" aria-expanded="false" aria-controls="filtermap"><i class="fa fa-sliders-h mr-2"></i>Filter</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 mt-4">
                            <div class="collapse" id="filtermap">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <div class="simple-input">
                                                <Multiselect v-model="selected" :options="ptypes" placeholder="Show All" class="form-control px-0"/>
                                            </div>
                                        </div>
                                    </div>
                                        
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <div class="simple-input">
                                                <Multiselect v-model="selected" :options="ptypes" placeholder="Select Status" class="form-control px-0"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <div class="simple-input">
                                                <Multiselect v-model="selected" :options="rooms" placeholder="Bedrooms" class="form-control px-0"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="simple-input">
                                            <Multiselect v-model="selected" :options="rooms" placeholder="Bathrooms" class="form-control px-0"/>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-12 col-md-12 col-sm-12 pt-4 pb-4">
                                        <h6>Choose Price</h6>
                                        <RangeSlider/>
                                    </div>
                                    
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <h6>Advance Features</h6>
                                        <ul class="row p-0 m-0">
                                            <li class="col-xl-4 col-lg-6 col-md-6 p-0">
                                                <div class="form-check">
                                                    <input id="a-1" class="form-check-input" name="a-1" type="checkbox">
                                                    <label for="a-1" class="form-check-label">Air Condition</label>
                                                </div>
                                            </li>
                                            <li class="col-xl-4 col-lg-6 col-md-6 p-0">
                                                <div class="form-check">
                                                    <input id="a-2" class="form-check-input" name="a-2" type="checkbox">
                                                    <label for="a-2" class="form-check-label">Bedding</label>
                                                </div>
                                            </li>
                                            <li class="col-xl-4 col-lg-6 col-md-6 p-0">
                                                <div class="form-check">
                                                    <input id="a-3" class="form-check-input" name="a-3" type="checkbox">
                                                    <label for="a-3" class="form-check-label">Heating</label>
                                                </div>
                                            </li>
                                            <li class="col-xl-4 col-lg-6 col-md-6 p-0">
                                                <div class="form-check">
                                                    <input id="a-4" class="form-check-input" name="a-4" type="checkbox">
                                                    <label for="a-4" class="form-check-label">Internet</label>
                                                </div>
                                            </li>
                                            <li class="col-xl-4 col-lg-6 col-md-6 p-0">
                                                <div class="form-check">
                                                    <input id="a-5" class="form-check-input" name="a-5" type="checkbox">
                                                    <label for="a-5" class="form-check-label">Microwave</label>
                                                </div>
                                            </li>
                                            <li class="col-xl-4 col-lg-6 col-md-6 p-0">
                                                <div class="form-check">
                                                    <input id="a-6" class="form-check-input" name="a-6" type="checkbox">
                                                    <label for="a-6" class="form-check-label">Smoking Allow</label>
                                                </div>
                                            </li>
                                            <li class="col-xl-4 col-lg-6 col-md-6 p-0">
                                                <div class="form-check">
                                                    <input id="a-7" class="form-check-input" name="a-7" type="checkbox">
                                                    <label for="a-7" class="form-check-label">Terrace</label>
                                                </div>
                                            </li>
                                            <li class="col-xl-4 col-lg-6 col-md-6 p-0">
                                                <div class="form-check">
                                                    <input id="a-8" class="form-check-input" name="a-8" type="checkbox">
                                                    <label for="a-8" class="form-check-label">Balcony</label>
                                                </div>
                                            </li>
                                            <li class="col-xl-4 col-lg-6 col-md-6 p-0">
                                                <div class="form-check">
                                                    <input id="a-9" class="form-check-input" name="a-9" type="checkbox">
                                                    <label for="a-9" class="form-check-label">Icon</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    <div class="col-lg-12 col-md-12 col-sm-12 mb-4 mt-4">
                                        <div class="elgio_filter">
                                            <div class="elgio_ft_first">
                                                <button class="btn btn-dark">
                                                    Reset<span class="reset_counter">3</span>
                                                </button>
                                            </div>
                                            <div class="elgio_ft_last">
                                                <button class="btn btn-gray mr-2">Cancel</button>
                                                <button class="btn btn-primary mr-2">See 76 Properties</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row justify-content-center list-layout">
                        <div v-for="(item, index) in propertyData" :key="index" class="col-xl-12 col-lg-12 col-md-12">
                            <ListLayoutFour :item="item" :border="true"/>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <ul class="pagination p-center">
                                <li class="page-item">
                                    <router-link class="page-link" to="#" aria-label="Previous">
                                        <i class="fa-solid fa-arrow-left-long"></i>
                                        <span class="sr-only">Previous</span>
                                    </router-link>
                                </li>
                                <li class="page-item"><router-link class="page-link" to="#">1</router-link></li>
                                <li class="page-item"><router-link class="page-link" to="#">2</router-link></li>
                                <li class="page-item active"><router-link class="page-link" to="#">3</router-link></li>
                                <li class="page-item"><router-link class="page-link" to="#">...</router-link></li>
                                <li class="page-item"><router-link class="page-link" to="#">18</router-link></li>
                                <li class="page-item">
                                    <router-link class="page-link" to="#" aria-label="Next">
                                        <i class="fa-solid fa-arrow-right-long"></i>
                                        <span class="sr-only">Next</span>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import RangeSlider from '@/components/form/range-slider.vue';
    import MapTwo from '@/components/map-two.vue';
    import NavbarFull from '@/components/navbar/navbar-full.vue';
    import ListLayoutFour from '@/components/property/list-layout-four.vue';

    import { propertyData } from '@/data/data';

    import Multiselect from '@vueform/multiselect';
    import '@vueform/multiselect/themes/default.css';

    const ptypes = ref([
        'Apartment','Condo','Family','Houses','Villa',
    ])

    const rooms = ref([
        '1','2','3','4','5','6'
    ])
</script>
