<template>
    <div>
        <div class="like_share_wrap b-0">
            <ul class="like_share_list">
                <li><router-link to="" class="btn btn-likes"><i class="fas fa-share"></i>Share</router-link></li>
                <li><router-link to="" class="btn btn-likes"><i class="fas fa-heart"></i>Save</router-link></li>
            </ul>
        </div>
        <div class="property-sidebar side_stiky">
            <div class="sider_blocks_wrap">
                <div class="side-booking-header">
                    <ul class="nav nav-pills sider_tab" id="pills-tab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="pills-book-tab" data-bs-toggle="pill" href="#pills-book" role="tab" aria-controls="pills-home" aria-selected="true">Book Now</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pills-appointment-tab" data-bs-toggle="pill" href="#pills-appointment" role="tab" aria-controls="pills-appointment" aria-selected="false">Appointment</a>
                        </li>
                    </ul>
                </div>
                <div class="sidetab-content">
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-book" role="tabpanel" aria-labelledby="pills-book-tab">
                            <div class="side-booking-body">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div class="form-group">
                                            <label for="guests">Check In</label>
                                            <div class="cld-box">
                                                <input type="date" name="checkin" class="form-control ps-3" value="10/24/2020" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div class="form-group">
                                            <label for="guests">Check Out</label>
                                            <div class="cld-box">
                                                <input type="date" name="checkout" class="form-control ps-3" value="10/24/2020" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div class="form-group">
                                            <div class="guests">
                                                <label for="guests">Adults</label>
                                                <div class="guests-box">
                                                    <button class="counter-btn" type="button" id="cnt-down" @click="decrenemt1"><i class="fa-solid fa-minus"></i></button>
                                                        <input type="text" id="guestNo" name="guests" :value="count1"/>
                                                    <button class="counter-btn" type="button" id="cnt-up" @click="increnemt1"><i class="fa-solid fa-plus"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div class="form-group">
                                            <div class="guests">
                                                <label for="guests">Kids</label>
                                                <div class="guests-box">
                                                    <button class="counter-btn" type="button" id="kcnt-down" @click="decrenemt2"><i class="fa-solid fa-minus"></i></button>
                                                        <input type="text" id="kidsNo" name="kids" :value="count2"/>
                                                    <button class="counter-btn" type="button" id="kcnt-up" @click="increnemt2"><i class="fa-solid fa-plus"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-12 col-md-12 col-sm-12 mt-3">
                                        <label for="guests">Advance features</label>
                                        <div class="_adv_features_list">
                                            <ul class="no-ul-list">
                                                <li>
                                                    <input id="a-1" class="form-check-input" name="a-1" type="checkbox">
                                                    <label for="a-1" class="form-check-label ms-2">Air Condition<i>$10</i></label>
                                                </li>
                                                <li>
                                                    <input id="a-2" class="form-check-input" name="a-2" type="checkbox" checked>
                                                    <label for="a-2" class="form-check-label ms-2">Bedding<i>$07</i></label>
                                                </li>
                                                <li>
                                                    <input id="a-3" class="form-check-input" name="a-3" type="checkbox" checked>
                                                    <label for="a-3" class="form-check-label ms-2">Heating<i>$20</i></label>
                                                </li>
                                                <li>
                                                    <input id="a-4" class="form-check-input" name="a-4" type="checkbox">
                                                    <label for="a-4" class="form-check-label ms-2">Internet<i>$10</i></label>
                                                </li>
                                                <li>
                                                    <input id="a-5" class="form-check-input" name="a-5" type="checkbox">
                                                    <label for="a-5" class="form-check-label ms-2">Microwave<i>$05</i></label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-12 col-md-12 col-sm-12 mt-3">
                                        <label for="guests">Price & Tax</label>
                                        <div class="_adv_features">
                                            <ul>
                                                <li>I Night<span>$310</span></li>
                                                <li>Discount 25$<span>-$250</span></li>
                                                <li>Service Fee<span>$17</span></li>
                                                <li>Breakfast Per Adult<span>$35</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <div class="side-booking-foot">
                                            <span class="sb-header-left">Total Payment</span>
                                            <h3 class="price text-primary">$170</h3>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <div class="stbooking-footer mt-1">
                                            <div class="form-group mb-0 pb-0">
                                                <a href="#" class="btn btn-primary fw-medium full-width">Book It Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="tab-pane fade" id="pills-appointment" role="tabpanel" aria-labelledby="pills-appointment-tab">
                            <div class="sider-block-body p-3">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <div class="form-group">
                                            <label>Full Name</label>
                                            <input type="text" class="form-control light" placeholder="Enter Name">
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <div class="form-group">
                                            <label>Email ID</label>
                                            <input type="text" class="form-control light" placeholder="Enter eMail ID">
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <div class="form-group">
                                            <label>Contact Number</label>
                                            <input type="text" class="form-control light" placeholder="Enter Phone No.">
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <div class="form-group">
                                            <label>Message</label>
                                            <textarea class="form-control light" placeholder="Explain Query"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <div class="form-group">
                                            <button class="btn btn-primary fw-medium full-width">Make Appointment</button>
                                        </div>
                                    </div>
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
    import { ref } from 'vue';
    const count1 = ref(0);
    const count2 = ref(0);

    const increnemt1 = () =>{
        count1.value++;
    }
    const decrenemt1 = () =>{
        if(count1.value > 0){
            count1.value--;
        }
    }
    const increnemt2 = () =>{
        count2.value++;
    }

    const decrenemt2 = () =>{
        if(count2.value > 0){
            count2.value--;
        }
    }
</script>
