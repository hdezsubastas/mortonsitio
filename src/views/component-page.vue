<template>
    <div id="main-wrapper">

        <NavbarDark/>

        <div class="page-title">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <h2 class="ipt-title">Components</h2>
                        <span class="ipn-subtitle">Lists of all used components</span>
                    </div>
                </div>
            </div>
        </div>

        <section>
            <div class="container">
                <div class="row mt-4">
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <h4>Typography</h4>
                        <h1>Heading One</h1>
                        <h2>Heading Two</h2>
                        <h3>Heading Three</h3>
                        <h4>Heading Four</h4>
                        <h5>Heading Five</h5>
                        <h6>Heading Six</h6>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <h4>Buttons</h4>
                        <div class="mb-2"><button type="submit" class="btn btn-primary">Simple button</button></div>
                        <div class="mb-2"><button type="submit" class="btn btn-light-primary btn-rounded">Simple button</button></div>
                        <div class="mb-2"><button type="submit" class="btn btn-success btn-md">Midium Button</button></div>
                        <div class="mb-2"><button type="submit" class="btn btn-danger btn-lg">Large Button</button></div>
                        <div class="mb-2"> <button type="submit" class="btn btn-outline-primary">Outline Button</button></div>
                        <div class="mb-2"><router-link to="" class="btn btn-info rounded-pill">Simple button</router-link></div>
                        <div><router-link to="" class="btn btn-light-primary rounded-pill">Simple button</router-link></div>
                    </div>
                </div>

                <div class="row mt-4">
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <h4>Shadow & Simple Inputbox</h4>
                        <div class="form-group">
                            <div class="input-with-icon">
                                <input type="text" class="form-control" placeholder="Neighborhood">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" class="form-control simple">
                        </div>
                    </div>
                    
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <h4>Checkbox & Radio buttons</h4>
                        <ul class="no-ul-list">
                            <li>
                                <input id="a-1" class="form-check-input" name="a-1" type="checkbox">
                                <label for="a-1" class="form-check-label ms-1">Air Condition</label>
                            </li>
                            <li>
                                <input id="a-2" class="form-check-input" name="a-2" type="checkbox">
                                <label for="a-2" class="form-check-label ms-1">Bedding</label>
                            </li>
                        </ul>
                        
                        <ul class="no-ul-list">
                            <li>
                                <input id="a-p" class="form-check-input" name="a-p" type="radio">
                                <label for="a-p" class="form-check-label ms-1">Air Condition</label>
                            </li>
                            <li>
                                <input id="a-c" class="form-check-input" name="a-c" type="radio">
                                <label for="a-c" class="form-check-label ms-1">Bedding</label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <FooterTop :bg='"theme-bg"'/>

        <FooterDark/>
        <ScrollToTop/>
    </div>
</template>

<script setup>
    import FooterDark from '@/components/footer/footer-dark.vue';
    import FooterTop from '@/components/footer/footer-top.vue';
    import NavbarDark from '@/components/navbar/navbar-dark.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
</script>
