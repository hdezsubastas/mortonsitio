<template>
    <div class="row list-layout">
        <div v-for="(item) in auctions" :key="item.id" class="col-xl-6 col-lg-6 col-md-12">
            <div class="property-listing property-1 bg-white p-2 rounded shadow" :class="border ? 'border' : 'border-0'">
                <div class="listing-img-wrapper">
                    <router-link :to="`/subasta/${item.subasta_NumSub}`">
                        <img :src="getImagePath(item.subWebBan_Img)" class="img-fluid mx-auto rounded">
                        <!--<img v-for="(img, index) in item.image.slice(0,1)" :key="index" :src="img" class="img-fluid mx-auto rounded" alt="" />-->
                    </router-link>
                </div>
                <div class="listing-content">
                    <div class="listing-detail-wrapper-box">
                        <div class="listing-detail-wrapper d-flex align-items-center justify-content-between">
                            <div class="listing-short-detail">
                                <h4 class="listing-name mb-1 mt-2"><router-link :to="`/subasta/${item.subasta_NumSub}`">{{item.subasta_Nom}}</router-link></h4>
                            </div>
                        </div>
                    </div>
                    <div class="price-features-wrapper">
                        <p>{{ item.subasta_Des.slice(0,100)}} ...</p>
                    </div>
                    <div class="listing-footer-wrapper">
                        <div class="listing-locate">
                            <span style="display:block;">{{ item.subWebInfo_FecMan}}</span>
                        </div>
                        <div class="listing-detail-btn">
                            <router-link :to="`/subasta/${item.subasta_NumSub}`" class="btn btn-sm px-4 fw-medium  btn-details-morton">Detalles</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';

    defineProps({
        border:Boolean,
        auctions:Object
    })

    const getImagePath = (imageName) => {
        return `/images/${imageName}`;
    }
</script>
