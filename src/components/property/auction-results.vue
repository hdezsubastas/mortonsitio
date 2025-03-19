<template>
    <div v-for="item in props.auctions" :key="item.idsubasta" class="col-xl-6 col-lg-6 col-md-12">
        <div class="property-listing property-1 bg-white p-2 rounded" :class="border ? 'border' : ''">
            <div class="listing-img-wrapper">
                <a :href="item.subWebInfo_OnlURL_Mor" target="_BLANK"><img :src="getImagePath(item.subWebBan_Img)" class="img-fluid mx-auto rounded" alt="" /></a>
            </div>
            <div class="listing-content">
                <div class="listing-detail-wrapper-box">
                    <div class="listing-detail-wrapper d-flex align-items-center justify-content-between">
                        <div class="listing-short-detail">
                            <h4 class="listing-name mb-1 mt-3"><a :href="item.subWebInfo_OnlURL_Mor" target="_BLANK"><h4>{{item.subasta_Nom}}</h4></a></h4>
                            <p>{{ item.subasta_Des.slice(0,100) }} ...</p>
                            <p>{{ item.subasta_Fec }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {defineProps} from 'vue'

    const props = defineProps({
        auctions:Object
    })
    
    const getImagePath = (imageName) => {
        return `/images/${imageName}`;
    }

</script>
