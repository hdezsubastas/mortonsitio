<template>
    <div>
        <div class="like_share_wrap b-0">
            <ul class="like_share_list">
                <li><router-link to="" class="btn btn-likes"><i class="fas fa-share"></i>Ver lotes </router-link></li>
                <li><router-link to="" class="btn btn-likes"><i class="fas fa-heart"></i>Catálogo Digital</router-link></li>
            </ul>
        </div>
        <div class="details-sidebar">
            <div class="sides-widget">
                <div class="sides-widget-header bg-primary">
                    <div class="sides-widget-details">
                        <h4><router-link to="#">Como Ofertar</router-link></h4>
                    </div>
                    <div class="clearfix"></div>
                </div>
                
                <div class="sides-widget-body simple-form">
                    <ul>
                        <li><button type="button" class="btn btn-auction">Presencial</button></li>
                        <li><button type="button" class="btn btn-auction">Ofertas en ausencia</button></li>
                        <li><a :href="link"><button type="button" class="btn btn-auction" >Morton Online</button></a></li>
                        <li><button type="button" class="btn btn-auction">Live Auctioneers</button></li>
                        <li><button type="button" class="btn btn-auction">Anticipe su garantía</button></li>
                    </ul>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    link: String
})
</script>