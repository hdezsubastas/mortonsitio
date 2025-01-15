<template>
    <div class="row justify-content-center gx-3 gy-3">
        <div v-for="(item, index) in propertyType" :key="index" class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
            <div class="classical-cats-wrap style_2 shadows">
                <router-link to="" class="classical-cats-boxs bg-white rounded-4 px-3 py-4">
                    <div class="classical-cats-icon circle bg-light-info text-primary fs-2">
                        <i :class="item.icon"></i>
                    </div>
                    <div class="classical-cats-wrap-content">
                        <h4>{{item.name}}</h4>
                        <p>{{item.property}}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { propertyType } from '@/data/data';
</script>
