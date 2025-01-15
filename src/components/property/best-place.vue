<template>
    <div class="row justify-content-center row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4">
        <div v-for="(item, index) in explorePlace" :key="index" class="col">
            <div class="position-relative">
                <router-link to="/grid-layout-with-sidebar" class="d-flex align-items-center justify-content-start border rounded-pill p-2">
                    <div class="explod-thumb flex-shrink-0"><img :src="item.image" class="img-fluid circle" width="65" alt=""/></div>
                    <div class="explod-caps ps-3">
                        <h5 class="fs-5 fw-medium mb-0">{{item.loction}}</h5>
                        <p class="text-muted-2 fs-sm m-0">{{item.property}}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { explorePlace } from '@/data/data';
</script>
