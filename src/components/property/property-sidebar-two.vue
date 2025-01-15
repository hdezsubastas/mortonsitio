<template>
    <div class="sidebar-widgets">
        <div class="form-group simple">
            <div class="input-with-icon">
                <input type="text" class="form-control" placeholder="Neighborhood">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
        <div class="form-group simple">
            <div class="input-with-icon">
                <input type="text" class="form-control" placeholder="Location">
                <i class="fa-solid fa-location-dot"></i>
            </div>
        </div>
        
        <div class="form-group simple">
            <div class="simple-input">
                <Multiselect v-model="selected" :options="ptypes" placeholder="Show All" class="form-control px-0"/>
            </div>
        </div>
        
        <div class="form-group simple">
            <div class="simple-input">
                <Multiselect v-model="selected" :options="status" placeholder="Select Status" class="form-control px-0"/>
            </div>
        </div>
        
        <div class="form-group simple">
            <div class="simple-input">
                <Multiselect v-model="selected" :options="minprice" placeholder="No Min" class="form-control px-0"/>
            </div>
        </div>
        
        <div class="form-group simple">
            <div class="simple-input">
                <Multiselect v-model="selected" :options="rooms" placeholder="Bedrooms" class="form-control px-0"/>
            </div>
        </div>
        
        <div class="form-group simple">
            <div class="simple-input">
                <Multiselect v-model="selected" :options="rooms" placeholder="Bathrooms" class="form-control px-0"/>
            </div>
        </div>
        
        <div class="form-group simple">
            <div class="simple-input">
                <Multiselect v-model="selected" :options="garage" placeholder="Choose Rooms" class="form-control px-0"/>
            </div>
        </div>
        
        <div class="form-group simple">
            <div class="simple-input">
                <Multiselect v-model="selected" :options="year" placeholder="Year Built" class="form-control px-0"/>
            </div>
        </div>
        
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="form-group">
                    <div class="simple-input">
                        <input type="text" class="form-control" placeholder="Min Area">
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="form-group">
                    <div class="simple-input">
                        <input type="text" class="form-control" placeholder="Max Area">
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 pt-4 pb-4">
                <h6 class="mb-5">Choose Price</h6>
                <RangeSlider/>
            </div>
        </div>									

        <div class="ameneties-features">
            <div class="form-group" id="module">
                <a role="button" class="" data-bs-toggle="collapse" href="#advance-search" aria-expanded="true" aria-controls="advance-search"></a>
            </div>
            <div class="collapse" id="advance-search" aria-expanded="false" role="banner">
                <ul class="no-ul-list">
                    <li>
                        <div class="form-check">
                            <input id="a-1" class="form-check-input" name="a-1" type="checkbox">
                            <label for="a-1" class="form-check-label">Air Condition</label>
                        </div>	
                    </li>
                    <li>
                        <div class="form-check">
                            <input id="a-2" class="form-check-input" name="a-2" type="checkbox">
                            <label for="a-2" class="form-check-label">Bedding</label>
                        </div>
                    </li>
                    <li>
                        <div class="form-check">
                            <input id="a-3" class="form-check-input" name="a-3" type="checkbox">
                            <label for="a-3" class="form-check-label">Heating</label>
                        </div>
                    </li>
                    <li>
                        <div class="form-check">
                            <input id="a-4" class="form-check-input" name="a-4" type="checkbox">
                            <label for="a-4" class="form-check-label">Internet</label>
                        </div>
                    </li>
                    <li>
                        <div class="form-check">
                            <input id="a-5" class="form-check-input" name="a-5" type="checkbox">
                            <label for="a-5" class="form-check-label">Microwave</label>
                        </div>
                    </li>
                    <li>
                        <div class="form-check">
                            <input id="a-6" class="form-check-input" name="a-6" type="checkbox">
                            <label for="a-6" class="form-check-label">Smoking Allow</label>
                        </div>
                    </li>
                    <li>
                        <div class="form-check">
                            <input id="a-7" class="form-check-input" name="a-7" type="checkbox">
                            <label for="a-7" class="form-check-label">Terrace</label>
                        </div>
                    </li>
                    <li>
                        <div class="form-check">
                            <input id="a-8" class="form-check-input" name="a-8" type="checkbox">
                            <label for="a-8" class="form-check-label">Balcony</label>
                        </div>
                    </li>
                    <li>
                        <div class="form-check">
                            <input id="a-9" class="form-check-input" name="a-9" type="checkbox">
                            <label for="a-9" class="form-check-label">Icon</label>
                        </div>
                    </li>
                </ul>
            </div>
            <button class="btn btn-primary fw-medium rounded full-width">Find New Home</button>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import Multiselect from '@vueform/multiselect';
    import '@vueform/multiselect/themes/default.css';
    import RangeSlider from '../form/range-slider.vue';

    const ptypes = ref([
        'Apartment',
        'Condo',
        'Family',
        'Houses',
        'Villa',
    ])

    const status = ref([
        'For Rent',
        'For Buy',
        'For Sale',
    ])
    const minprice = ref([
        'Less Then $1000',
        '$1000 - $2000',
        '$2000 - $3000',
        '$3000 - $4000',
        'Above $5000',
    ])
    const rooms = ref([
        '1','2','3','4','5','6'
    ])
    const garage = ref([
        'Any Type','Yes','No',
    ])
    const year = ref([
        '2010','2011','2012','2013','2014','2015','2016'
    ])

</script>
