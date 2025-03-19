<template>
    <div id="main-wrapper">
        <NavbarDark/>

        <div class="page-results-title">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <h2 class="resultados-title">RESULTADOS DE SUBASTA</h2>
                    </div>
                </div>
            </div>
        </div>

        <section class="bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-sm-12 list-layout">
                        <div class="row">
                            <ListLayoutFour :auctions="auctions"/>
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
    import FooterDark from '@/components/footer/footer-dark.vue';
    import FooterTop from '@/components/footer/footer-top.vue';
    import NavbarDark from '@/components/navbar/navbar-dark.vue';
    import ListLayoutFour from '@/components/property/auction-results.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
    import  Axios from 'axios';
    import {ref,onMounted} from 'vue'

    const auctions = ref(null);

    onMounted(()=>{
        getResults();
    })


    const getResults = async () => {
    try{
        const response = await  Axios.get('http://127.0.0.1/serverside/getAllResults.php');
        auctions.value = response.data.slice(0,10);
        console.log(auctions);
    }catch(error){
        console.log(error);
    }finally{
        console.log("listo");
    }
}


</script>
