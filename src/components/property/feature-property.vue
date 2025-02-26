<template>
    <div class="row list-layout">
        <div v-for="(item, index) in propertyData.slice(0,4)" :key="index" class="col-xl-6 col-lg-6 col-md-12">
            <div class="property-listing property-1 bg-white p-2 rounded shadow" :class="border ? 'border' : 'border-0'">
                <div class="listing-img-wrapper">
                    <router-link to="/single-property-2">
                        <img v-for="(img, index) in item.image.slice(0,1)" :key="index" :src="img" class="img-fluid mx-auto rounded" alt="" />
                    </router-link>
                </div>
                <div class="listing-content">
                    <div class="listing-detail-wrapper-box">
                        <div class="listing-detail-wrapper d-flex align-items-center justify-content-between">
                            <div class="listing-short-detail">
                                <h4 class="listing-name mb-1 mt-2"><router-link to="/single-property-2">{{item.name}}</router-link></h4>
                            </div>
                        </div>
                    </div>
                    <div class="price-features-wrapper">
                        <p>{{ item.desc }}</p>
                    </div>
                    <div class="listing-footer-wrapper">
                        <div class="listing-locate">
                            <span style="display:block;">{{ item.date }}</span>
                            <span class="listing-location text-muted-2"><i class="fa-solid fa-location-pin me-1"></i>{{item.loction}}</span>
                        </div>
                        <div class="listing-detail-btn">
                            <router-link to="/single-property-2" class="btn btn-sm px-4 fw-medium  btn-details-morton">Detalles</router-link>
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
