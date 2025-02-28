<template>

    <NavbarDark/>

    <BannerOne :sub="subasta"/>

<section class="gray-simple rtl p-0">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-11 col-md-12">
                <div class="property_block_wrap style-3">
                    <div class="pbw-flex-1">
                        <div class="pbw-flex-thumb">
                            <img :src="getImagePath(img)" class="img-fluid-single" alt="" />
                        </div>
                    </div>
                    
                    <div class="pbw-flex">
                        <div class="prt-detail-title-desc">
                            <h3 class="mt-2">{{ auctionName }}</h3>
                            <p>{{ placeDate }}</p>
                            <div class="list-fx-features">
                                <div class="listing-card-info-icon">
                                    <div class="inc-fleat-icon me-1"></div>{{ totalLots }} lotes
                                </div>
                                <div class="listing-card-info-icon">
                                    <div class="inc-fleat-icon me-1"></div>Catálogo Digital
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>	
        </div>
    </div>
</section>


<section class="gray-simple min">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-12 col-sm-12">
                <AuctionDetail :sub="subasta"/>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12">
                <DetailSidebar :link="linkMorton"/>
            </div>
        </div>
    </div>
</section>

    <FooterTop/>
    <FooterDark/>
    <ScrollToTop/>
</template>

<script setup>
    import FooterDark from '@/components/footer/footer-dark.vue';
    import FooterTop from '@/components/footer/footer-top.vue';
    import NavbarDark from '@/components/navbar/navbar-dark.vue';
    import BannerOne from '@/components/banner-one.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
    import DetailSidebar from '@/components/property/detail-sidebar.vue';
    import AuctionDetail from '@/components/property/auction-detail.vue';
    import { ref, onMounted } from 'vue'
    import { useRoute } from 'vue-router';
    import  Axios from 'axios';

    const route = useRoute();
    const subasta = route.params.sub;

    const sub = {sub: subasta, subasta:subasta};
    const placeDate = ref(null);
    const auctionName = ref(null);
    const totalLots = ref(null);
    const linkMorton = ref(null);
    const img = ref(null);
    

    onMounted(() => {
        getData();
    })

    const getData = async () => {
        try {
            const response = await  Axios.post('http://127.0.0.1/serverside/getAuction.php', sub);
            console.log(response);
            placeDate.value = response.data.subWebInfo_FecMan;  
            auctionName.value = response.data.subasta_Nom;
            totalLots.value = response.data.lotes_totales;
            linkMorton.value = response.data.subWebInfo_OnlURL_Mor;
            img.value = response.data.subWebInfo_CatIMG;
        } catch (error) {
            alert(error);
        } finally {
            console.log("terminado ");
        }
    };

    const getImagePath = (imageName) => {
        return `/images/catalogo/${imageName}`;
    }

</script>