<template>
    <div class="row justify-content-center g-4">
        <div v-for="(item, index) in teamData" :key="index" class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div class="agents-grid card rounded-3 shadow">
                <div class="agents-grid-wrap">
                    <div class="fr-grid-thumb mx-auto text-center mt-5 mb-3">
                        <router-link to="/agent-page" class="d-inline-flex p-1 circle border">
                            <img :src="item.image" class="img-fluid circle" width="130" alt="" />
                        </router-link>
                    </div>
                    <div class="fr-grid-deatil text-center">
                        <div class="fr-grid-deatil-flex">
                            <h5 class="fr-can-name mb-0"><router-link to="#">{{item.name}}</router-link></h5>
                            <span class="agent-property text-muted-2">{{item.property}}</span>
                        </div>
                    </div>
                </div>
                <div class="fr-grid-info d-flex align-items-center justify-content-between px-4 py-4">
                    <div class="fr-grid-sder">
                        <ul class="p-0">
                            <li><strong>Call:</strong><span class="fw-medium text-primary ms-2">{{item.class}}</span></li>
                            <li>
                                <div class="fr-can-rating">
                                    <i class="fas fa-star fs-xs text-warning me-1"></i>
                                    <i class="fas fa-star fs-xs text-warning me-1"></i>
                                    <i class="fas fa-star fs-xs text-warning me-1"></i>
                                    <i class="fas fa-star fs-xs text-warning me-1"></i>
                                    <i class="fas fa-star fs-xs text-muted me-1"></i>
                                    <span class="reviews_text fs-sm text-muted-2">({{ item.review }})</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="fr-grid-deatil-flex-right">
                        <div class="agent-email"><router-link to="#" class="square--50 rounded text-danger bg-light-danger"><i class="fa-solid fa-envelope-circle-check"></i></router-link></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { teamData } from '@/data/data';
</script>
