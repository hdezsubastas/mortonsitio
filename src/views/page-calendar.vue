<template>
    <div id="main-wrapper">
        <NavbarDark/>

        <section class="bg-primary position-relative calendar-page-title">
            <div class="position-absolute start-0 top-0 w-25 h-15 bg-light rounded-end-pill opacity-25 mt-4"></div>
            <div class="position-absolute start-0 bottom-0 w-15 h-20 bg-light rounded-top-pill opacity-25 ms-4"></div>
            <div class="position-absolute end-0 top-0 w-15 h-25 bg-light rounded-bottom-pill opacity-25 me-4"></div>
            <div class="position-absolute end-0 bottom-0 w-25 h-15 bg-light rounded-start-pill opacity-25 mb-4"></div>
            <div class="ht-30"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <h2 class="ipt-title text-light">Calendario de Subastas</h2>
                    </div>
                </div>
            </div>
            <div class="ht-30"></div>
        </section>

        <section>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-10 text-center">
                        <div class="sec-heading center">
                            <h2>Próximas Subastas</h2>
                            <p>Revista nuestro calendario y participa en nuestras increibles subastas</p>
                        </div>
                    </div>
                </div>
                <FeatureProperty :auctions="auctions"/>
            </div>		
        </section>

        <FooterTop :bg="'theme-bg'"/>
        <FooterDark/>
        <ScrollToTop/>
    </div>

</template>

<script setup>
    import {ref, onMounted} from 'vue'
    import  Axios from 'axios';
    import NavbarDark from '@/components/navbar/navbar-dark.vue';
    import FooterTop from '@/components/footer/footer-top.vue';
    import FooterDark from '@/components/footer/footer-dark.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
    import FeatureProperty from '@/components/property/feature-property.vue';

    const auctions = ref(null);

    onMounted(()=>{
        getAuctions();
    })

    const getAuctions = async () => {
        try{
            const response = await  Axios.get('http://127.0.0.1/serverside/getNextAuctions.php');
            console.log(response);
            auctions.value = response.data; 
            console.log(auctions);
            
        }catch(error){
            console.log(error);
        }finally{
            console.log("listo");
        }
    }
</script>
