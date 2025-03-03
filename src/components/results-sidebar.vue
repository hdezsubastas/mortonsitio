<template>
    <div class="details-sidebar">
        <div class="sidebar-widgets">
            <h4>Resultados</h4>
            <div class="sidebar_featured_property">
                <div v-for="item in props.res" :key="item.id" class="sides_list_property">
                    <div class="sides_list_property_thumb">
                        <img :src="getImagePath(item.subWebBan_Img)" class="img-fluid" alt="">
                    </div>
                    <div class="sides_list_property_detail">
                        <a :href="item.subWebInfo_OnlURL_Mor" target="_BLANK"><h4>{{item.subasta_Nom}}</h4></a>
                        <p>{{ item.subasta_Fec }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue'

    const props = defineProps({
        res:Object
    })
    
    const getImagePath = (imageName) => {
        return `/images/${imageName}`;
    }
    
</script>
