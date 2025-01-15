<template>
    <div class="row list-layout">
        <div v-for="(item, index) in propertyData.slice(0,4)" :key="index" class="col-xl-6 col-lg-6 col-md-12">
            <div class="property-listing property-1 bg-white p-2 rounded" :class="border ? 'border' : 'border-0'">
                <div class="listing-img-wrapper">
                    <router-link to="/single-property-2">
                        <img v-for="(img, index) in item.image.slice(0,1)" :key="index" :src="img" class="img-fluid mx-auto rounded" alt="" />
                    </router-link>
                </div>
                <div class="listing-content">
                    <div class="listing-detail-wrapper-box">
                        <div class="listing-detail-wrapper d-flex align-items-center justify-content-between">
                            <div class="listing-short-detail">
                                <span class="label bg-light-danger text-danger d-inline-flex mb-1">For Sale</span>
                                <h4 class="listing-name mb-1 mt-2"><router-link to="/single-property-2">{{item.name}}</router-link></h4>
                                <div class="fr-can-rating">
                                    <i class="fas fa-star fs-xs filled me-1"></i>
                                    <i class="fas fa-star fs-xs filled me-1"></i>
                                    <i class="fas fa-star fs-xs filled me-1"></i>
                                    <i class="fas fa-star fs-xs filled me-1"></i>
                                    <i class="fas fa-star fs-xs me-1"></i>
                                    <span class="reviews_text fs-sm text-muted ms-2">(42 Reviews)</span>
                                </div>
                            </div>
                            <div class="list-price">
                                <h6 class="listing-card-info-price text-primary">{{item.value}}</h6>
                            </div>
                        </div>
                    </div>
                    <div class="price-features-wrapper">
                        <div class="list-fx-features d-flex align-items-center justify-content-between mt-3 mb-1">
                            <div class="listing-card d-flex align-items-center">
                                <div class="square--25 text-muted-2 fs-sm circle gray-simple me-1"><i class="fa-solid fa-building-shield fs-xs"></i></div><span class="text-muted-2 fs-sm">{{item.size}}</span>
                            </div>
                            <div class="listing-card d-flex align-items-center">
                                <div class="square--25 text-muted-2 fs-sm circle gray-simple me-1"><i class="fa-solid fa-bed fs-xs"></i></div><span class="text-muted-2 fs-sm">{{item.beds}}</span>
                            </div>
                            <div class="listing-card d-flex align-items-center">
                                <div class="square--25 text-muted-2 fs-sm circle gray-simple me-1"><i class="fa-solid fa-clone fs-xs"></i></div><span class="text-muted-2 fs-sm">{{item.sqft}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="listing-footer-wrapper">
                        <div class="listing-locate">
                            <span class="listing-location text-muted-2"><i class="fa-solid fa-location-pin me-1"></i>{{item.loction}}</span>
                        </div>
                        <div class="listing-detail-btn">
                            <router-link to="/single-property-2" class="btn btn-sm px-4 fw-medium btn-primary">View</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { propertyData } from '@/data/data';
    import { defineProps } from 'vue';

    defineProps({
        border:Boolean
    })
</script>
