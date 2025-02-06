<template>
    <div class="details-sidebar">
        <!--
        <div class="sides-widget">
            <div class="sides-widget-header bg-primary">
                <div class="agent-photo"><img :src="user" alt=""></div>
                <div class="sides-widget-details">
                    <h4><router-link to="#">Adam D. Okraar</router-link></h4>
                    <span><i class="lni-phone-handset"></i>(91) 123 456 7895</span>
                </div>
                <div class="clearfix"></div>
            </div>
            
            <div class="sides-widget-body simple-form">
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" placeholder="Your Email">
                </div>
                <div class="form-group">
                    <label>Phone No.</label>
                    <input type="text" class="form-control" placeholder="Your Phone">
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <textarea class="form-control">I'm interested in this property.</textarea>
                </div>
                <button class="btn btn-dark rounded full-width">Send Message</button>
            </div>
        </div>-->
        
        <div class="sidebar-widgets">
            <h4>Resultados</h4>
            <div class="sidebar_featured_property">
                <div v-for="(item, index) in featureProperty" :key="index" class="sides_list_property">
                    <div class="sides_list_property_thumb">
                        <img :src="item.image" class="img-fluid" alt="">
                    </div>
                    <div class="sides_list_property_detail">
                        <h4><router-link to="/single-property-1">{{item.name}}</router-link></h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    //import user from '@/assets/img/user-6.jpg'
    import { featureProperty } from '@/data/data';
</script>
