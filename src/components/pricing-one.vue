<template>
    <div class="row align-items-center justify-content-center g-lg-4 g-md-3 g-4">
        <div v-for="(item, index) in pricingData" :key="index" class="col-xl-4 col-lg-4 col-md-4">
            <div class="pricing-wrap py-3 px-3">
                <div class="pricing-header" :class="item.bg">
                    <h4 class="pr-value text-light"><sup class="text-light opacity-75">$</sup>{{item.value}}</h4>
                    <h4 class="pr-title" :class="item.titleText">{{item.title}}</h4>
                </div>
                <div class="pricing-body px-2">
                    <ul class="p-0">
                        <li v-for="(el, index) in item.feature" :key="index"><span class="text-success me-2"><i class="fa-solid fa-circle-check"></i></span>{{el}}</li>
                    </ul>
                </div>
                <div class="pricing-bottom mt-5 mb-1 px-2">
                    <router-link to="#" :class="item.btn">Choose Plan</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { pricingData } from '@/data/data';
</script>
