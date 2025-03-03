<template>
    <div>
        <div class="like_share_wrap b-0">
            <ul class="like_share_list">
                <li><a :href="link" class="btn btn-likes" target="_BLANK"><i class="fas fa-share"></i>Ver lotes </a></li>
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
                        <li><router-link to="/cdmx"><button type="button" class="btn btn-auction">Presencial</button></router-link></li>
                        <li><button type="button" class="btn btn-auction" data-bs-toggle="modal" data-bs-target="#absentee-offers">Ofertas en ausencia</button></li>
                        <li><a :href="link"  target="_BLANK"><button type="button" class="btn btn-auction" >Morton Online</button></a></li>
                        <li><button type="button" class="btn btn-auction">Live Auctioneers</button></li>
                        <li><button type="button" class="btn btn-auction">Anticipe su garantía</button></li>
                    </ul>
                </div>
            </div>
            
        </div>
    </div>

    <!--  MODALS  -->
    <div class="modal fade" id="absentee-offers" tabindex="-1" role="dialog" aria-labelledby="sign-up" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered login-pop-form" role="document">
                <div class="modal-content" id="sign-up">
                    <span class="mod-close" data-bs-dismiss="modal" aria-hidden="true"><i class="fa-solid fa-circle-xmark text-muted-2 fs-5"></i></span>
                    <div class="modal-body">
                        <div class="text-center">
                            <h2 class="mb-0">Ofertas en ausencia</h2>
                        </div>
                        <div class="login-form mt-2">
                            <div class="row">
                                <p>Deje la oferta por la pieza de su interés</p>
                                <p>Tel: +52(55) 52 83 31 40</p>
                                <p>Ext. 3149</p>
                                <p>Correo: ofertasenausencia@mortonsubastas.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<!-- END MODALS -->
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    link: String
})
</script>