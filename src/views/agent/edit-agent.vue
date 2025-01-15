<template>
    <div id="main-wrapper">
        <NavbarDark/>

        <div class="page-title">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <h2 class="ipt-title">Update Your Detail</h2>
                        <span class="ipn-subtitle">Add Agent Under ABC Agency</span>
                    </div>
                </div>
            </div>
        </div>

        <section class="gray-simple">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="submit-page">
                            <div class="form-submit middle-logo">
                                <h3>Profile Logo</h3>
                                <div class="form-row position-relative">
                                    <div class='position-absolute w-100 h-100 top-0 bottom-0'>
                                        <input type="file"  @change="handleChange($event)" style="width: 100%; height: 100%; opacity: 0;"/>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <form class="dropzone profile-logo dz-clickable primary-dropzone">
                                            <div v-if="file" class='dz-image'>
                                                <img :src="file" clas='object-fit-cover' alt='' style="width: 120px; height: 120px; border-radius: 15px;"/>
                                            </div>
                                            <div v-if="!file" class="dz-default dz-message">
                                                <i class="fa-solid fa-images"></i>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-submit">	
                                <h3>Basic Information</h3>
                                <div class="submit-section">
                                    <div class="row">
                                    
                                        <div class="form-group col-md-12">
                                            <label class="mb-1">Full Name<span class="tip-topdata" data-tip="Property Title"><i class="fa-solid fa-info"></i></span></label>
                                            <input type="text" class="form-control" value="Shaurya Preet">
                                        </div>
                                        
                                        <div class="form-group col-md-6">
                                            <label class="mb-1">Designation</label>
                                            <input type="text" class="form-control" value="CEO of Applio">
                                        </div>
                                        
                                        <div class="form-group col-md-6">
                                            <label class="mb-1">Phone</label>
                                            <input type="text" class="form-control" value="123 1254 458">
                                        </div>
                                        
                                        <div class="form-group col-md-6">
                                            <label class="mb-1">Email</label>
                                            <input type="text" class="form-control" value="support@gmail.com">
                                        </div>
                                        
                                        <div class="form-group col-md-6">
                                            <label class="mb-1">Landline</label>
                                            <input type="text" class="form-control" value="123 456">
                                        </div>
                                        
                                        <div class="form-group col-md-12">
                                            <label class="mb-1">Description</label>
                                            <textarea class="form-control h-120" value="about text"></textarea>
                                        </div>           
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-submit">	
                                <h3>Location</h3>
                                <div class="submit-section">
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label class="mb-1">Address</label>
                                            <input type="text" class="form-control" value="2850, Sector 20 C">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="mb-1">Address 2</label>
                                            <input type="text" class="form-control" value="">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="mb-1">Country</label>
                                            <input type="text" class="form-control" value="India">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="mb-1">State</label>
                                            <input type="text" class="form-control" value="Punjab">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="mb-1">City</label>
                                            <input type="text" class="form-control" value="Chandigarh">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="mb-1">Zip Code</label>
                                            <input type="text" class="form-control" value="160020">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-submit">	
                                <h3>Social Accounts</h3>
                                <div class="submit-section">
                                    <div class="row">
                                        <div class="form-group col-md-4">
                                            <label class="mb-1">Facebook</label>
                                            <input type="text" class="form-control" value="https://facebook.com/preet">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label class="mb-1">Twitter</label>
                                            <input type="text" class="form-control" value="https://twitter.com/preet">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label class="mb-1">Linkedin</label>
                                            <input type="text" class="form-control" value="https://linkedin.com/preet">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label class="mb-1">Google Plus</label>
                                            <input type="text" class="form-control">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label class="mb-1">Instagram</label>
                                            <input type="text" class="form-control">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label class="mb-1">Tumbler</label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-group col-lg-12 col-md-12">
                                <label class="mb-1">GDPR Agreement *</label>
                                <ul class="no-ul-list">
                                    <li>
                                        <input id="aj-1" class="form-check-input" name="aj-1" type="checkbox">
                                        <label for="aj-1" class="form-check-label ms-1">I consent to having this website store my submitted information so they can respond to my inquiry.</label>
                                    </li>
                                </ul>
                            </div>
                            
                            <div class="form-group col-lg-12 col-md-12">
                                <button class="btn btn-primary px-5 rounded" type="submit">Submit & Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <FooterTop :bg="'theme-bg'"/>

        <FooterDark/>

        <ScrollToTop/>

    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import NavbarDark from '@/components/navbar/navbar-dark.vue';
    import FooterTop from '@/components/footer/footer-top.vue';
    import FooterDark from '@/components/footer/footer-dark.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';

    const file = ref('');

    const handleChange = (event) => {
        const input = event.target;
        if (input.files && input.files[0]) {
            file.value = URL.createObjectURL(input.files[0]);
        }
    };
</script>
