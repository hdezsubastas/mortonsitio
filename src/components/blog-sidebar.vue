<template>
    <div>
        <div class="single-widgets widget_search">
            <h4 class="title">Search</h4>
            <form class="sidebar-search-form">
                <input type="search" name="search" placeholder="Search..">
                <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>

        <div class="single-widgets widget_category">
            <h4 class="title">Categories</h4>
            <ul>
                <li v-for="(item, index) in blogCategories" :key="index"><router-link to="">{{item.title}} <span>{{item.subtitle}}</span></router-link></li>
            </ul>
        </div>
        
        <div class="single-widgets widget_thumb_post">
            <h4 class="title">Trending Posts</h4>
            <ul>
                <li v-for="(item, index) in recentPost" :key="index">
                    <span class="left">
                        <img :src="item.image" alt="" class="">
                    </span>
                    <span class="right">
                        <router-link class="feed-title" to="">{{item.title}}</router-link> 
                        <span class="post-date"><i class="ti ti-calendar"></i>{{item.time}}</span>
                    </span>
                </li>
            </ul>
        </div>
        
        <div class="single-widgets widget_tags">
            <h4 class="title">Tags Cloud</h4>
            <ul>
                <li class="me-1"><router-link to="">Lifestyle</router-link></li>
                <li class="me-1"><router-link to="">Travel</router-link></li>
                <li class="me-1"><router-link to="">Fashion</router-link></li>
                <li class="me-1"><router-link to="">Branding</router-link></li>
                <li class="me-1"><router-link to="">Music</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    import { blogCategories, recentPost } from '@/data/data';
</script>
