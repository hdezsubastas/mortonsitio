<template>
    <div class="row justify-content-center g-4">
        <div v-for="(item, index) in blogData.slice(0,3)" :key="index" class="col-xl-4 col-lg-4 col-md-6">
            <div class="blog-wrap-grid h-100 shadow">
                <div class="blog-thumb">
                    <router-link :to="`/blog-detail/${item.id}`"><img :src="item.image" class="img-fluid" alt="" /></router-link>
                </div>
                <div class="blog-info">
                    <span class="post-date label bg-seegreen text-light"><i class="ti ti-calendar"></i>{{item.date}}</span>
                </div>
                <div class="blog-body">
                    <h4 class="bl-title"><router-link :to="`/blog-detail/${item.id}`">{{item.title}}</router-link></h4>
                    <p>{{item.desc}} </p>
                    <router-link :to="`/blog-detail/${item.id}`" class="text-primary fw-medium">Continue<i class="fa-solid fa-arrow-right ms-2"></i></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { blogData } from '@/data/data';
</script>