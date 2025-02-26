<template>
    <section class="call-to-act-wrap">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="call-to-act">
                        <div class="call-to-act-head">
                            <h3>¿Quieres recibir nuestros catálogos digitales?</h3>
                            <span>Suscribete a nuestro newsletter.</span>
                        </div>
                        <router-link to="#" class="btn btn-call-to-act">Suscribirme</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    bg:String
})

</script>
