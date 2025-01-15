<template>
    <div class="row align-items-center justify-content-center g-4">
        <div v-for="(item, index) in achievementData" :key="index" class="col-lg-3 col-md-3 col-sm-6 col-6">
            <div class="achievement-wrap">
                <div class="achievement-content">
                    <h2 class="fs-1"><count-up :end-val="item.value" class="ctr d-inline-block"/>{{item.symbol}}</h2>
                    <p>{{item.title}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { achievementData } from '@/data/data';
    import CountUp from 'vue-countup-v3'
</script>
