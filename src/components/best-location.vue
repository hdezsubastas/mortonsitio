<template>
    <div class="row justify-content-center g-xl-4 g-md-3 g-4">
        <div v-for="(item, index) in bestLoction" :key="index" class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div class="location-property-wrap rounded-4 p-2">
                <div class="location-property-thumb rounded-4">
                    <router-link to="/listings-list-with-sidebar"><img :src="item.image" class="img-fluid" alt="" /></router-link>
                </div>
                <div class="location-property-content">
                    <div class="lp-content-flex">
                        <h4 class="lp-content-title">{{item.location}}</h4>
                        <span class="text-muted-2">{{item.properties}}</span>
                    </div>
                    <div class="lp-content-right">
                        <router-link to="/listings-list-with-sidebar" class="text-primary">
                            <span class="svg-icon svg-icon-2hx">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"/>
                                    <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor"/>
                                </svg>
                            </span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { bestLoction } from '@/data/data';
</script>
