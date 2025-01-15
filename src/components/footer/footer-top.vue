<template>
    <section class="call-to-act-wrap" :class="bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="call-to-act">
                        <div class="call-to-act-head">
                            <h3>Want to Become a Real Estate Agent?</h3>
                            <span>We'll help you to grow your career and growth.</span>
                        </div>
                        <router-link to="#" class="btn btn-call-to-act">SignUp Today</router-link>
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
