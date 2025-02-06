<template>
    <div class="row justify-content-center g-4">
        <div v-for="(item, index) in parisTeam" :key="index" class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div class="agents-grid card rounded-3 shadow">
                <div class="agents-grid-wrap">
                    <div class="fr-grid-thumb mx-auto text-center mt-5 mb-3">
                        <router-link to="/agent-page" class="d-inline-flex p-1 circle border">
                            <img :src="item.image" class="img-fluid circle" width="130" alt="" />
                        </router-link>
                    </div>
                    <div class="fr-grid-deatil text-center paris-specialist">
                        <div class="fr-grid-deatil-flex">
                            <h5 class="fr-can-name mb-0"><router-link to="#">{{item.name}}</router-link></h5>
                            <span class="agent-property text-muted-2">{{item.email}}</span>
                            <p>{{ item.description }} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { parisTeam } from '@/data/data';
</script>
