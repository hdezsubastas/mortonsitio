<template>
    <div>
        <div class="like_share_wrap b-0">
            <ul class="like_share_list">
                <li><router-link to="" class="btn btn-likes"><i class="fas fa-share"></i>Share</router-link></li>
                <li><router-link to="" class="btn btn-likes"><i class="fas fa-heart"></i>Save</router-link></li>
            </ul>
        </div>
        <div class="details-sidebar">
            <div class="sides-widget">
                <div class="sides-widget-header bg-primary">
                    <div class="agent-photo"><img :src="user1" alt=""></div>
                    <div class="sides-widget-details">
                        <h4><router-link to="#">Shivangi Preet</router-link></h4>
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
                    <button class="btn btn-light-primary fw-medium rounded full-width">Send Message</button>
                </div>
            </div>
            
            <div class="sides-widget">
                <div class="sides-widget-header bg-primary">
                    <div class="sides-widget-details">
                        <h4>Mortgage Calculator</h4>
                        <span>View your Interest Rate</span>
                    </div>
                    <div class="clearfix"></div>
                </div>
                
                <div class="sides-widget-body simple-form">
                    <div class="form-group">
                        <div class="input-with-icon">
                            <input type="text" class="form-control" placeholder="Sale Price">
                            <i class="fa-solid fa-sack-dollar"></i>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <div class="input-with-icon">
                            <input type="text" class="form-control" placeholder="Down Payment">
                            <i class="fa-solid fa-piggy-bank"></i>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <div class="input-with-icon">
                            <input type="text" class="form-control" placeholder="Loan Term (Years)">
                            <i class="fa-regular fa-calendar-days"></i>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <div class="input-with-icon">
                            <input type="text" class="form-control" placeholder="Interest Rate">
                            <i class="fa fa-percent"></i>
                        </div>
                    </div>
                    <button class="btn btn-light-primary fw-medium rounded full-width">Calculate</button>
                </div>
            </div>
            
            <div class="sidebar-widgets">
                
                <h4>Featured Property</h4>
                
                <div class="sidebar_featured_property">
                    <div v-for="(item, index) in featureProperty" :key="index" class="sides_list_property">
                        <div class="sides_list_property_thumb">
                            <img :src="item.image" class="img-fluid" alt="">
                        </div>
                        <div class="sides_list_property_detail">
                            <h4><router-link to="/single-property-1">{{item.name}}</router-link></h4>
                            <span><i class="fa-solid fa-location-dot"></i>{{item.location}}</span>
                            <div class="lists_property_price">
                                <div class="lists_property_types">
                                    <div v-if="item.type === 'For Sale'" class="property_types_vlix sale">For Sale</div>
                                    <div v-if="item.type === 'For Rent'" class="property_types_vlix">For Rent</div>
                                    <div v-if="item.type === 'For Buy'" class="property_types_vlix buy">For Buy</div>
                                </div>
                                <div class="lists_property_price_value">
                                    <h4>$4,240</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {featureProperty} from '@/data/detail-data'
    import user1 from '@/assets/img/user-6.jpg'
</script>