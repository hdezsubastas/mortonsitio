<template>
    <div class="row justify-content-center g-4">
        <div v-for="(item, index) in workData" :key="index" class="col-lg-4 col-md-4">
            <div class="middle-icon-features-item">
                <div :class="item.id === 3 ? '' : 'icon-features-wrap'">
                    <div class="middle-icon-large-features-box" :class="item.bg">
                        <span class="svg-icon text-success svg-icon-2hx">
                            <img :src="item.image" alt="">
                        </span>
                    </div>
                </div>
                <div class="middle-icon-features-content">
                    <h4>{{item.title}}</h4>
                    <p>{{item.desc}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { workData } from '@/data/data';
</script>
