<template>
    <div id="main-wrapper">
        <NavbarDark/>

        <div class="page-title">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <h2 class="ipt-title">About Us</h2>
                        <span class="ipn-subtitle">Who we are & our mission</span>
                    </div>
                </div>
            </div>
        </div>

        <section>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                        <img :src="aboutImg" class="img-fluid" alt="" />
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="story-wrap explore-content">
                            <h2>Our Story</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="gray-bg">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="sec-heading center">
                            <h2>Meet Our Team</h2>
                            <p>Professional & Dedicated Team</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="team-slide item-slide">
                            <div v-for="(item, index) in teamTwo" :key="index" class="single-team">
                                <div class="team-grid">
                                    <div class="teamgrid-user">
                                        <img :src="item.image" alt="" class="img-fluid" />
                                    </div>
                                    <div class="teamgrid-content">
                                        <h4>{{item.name}}</h4>
                                        <span>{{item.position}}</span>
                                    </div>
                                    <div class="teamgrid-social">
                                        <ul>
                                            <li><router-link to="#" class="f-cl"><i class="fa-brands fa-facebook"></i></router-link></li>
                                            <li><router-link to="#" class="t-cl"><i class="fa-brands fa-twitter"></i></router-link></li>
                                            <li><router-link to="#" class="i-cl"><i class="fa-brands fa-instagram"></i></router-link></li>
                                            <li><router-link to="#" class="l-cl"><i class="fa-brands fa-linkedin"></i></router-link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="sec-heading center">
                            <h2>Our Mission & Work Process</h2>
                            <p>Professional & Dedicated Team</p>
                        </div>
                    </div>
                </div>
                
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                        <div v-for="(item, index) in aboutData" :key="index" class="icon-mi-left">
                            <i :class="item.icon"></i>
                            <div class="icon-mi-left-content">
                                <h4>{{item.title}}</h4>
                                <p>{{item.desc}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <img :src="aboutImg2" class="img-fluid" alt="" />
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
import { onMounted, ref,nextTick  } from 'vue';
import aboutImg from '@/assets/img/sb.png'
import aboutImg2 from '@/assets/img/vec-2.png'

import { aboutData, teamTwo } from '@/data/data';

import NavbarDark from '@/components/navbar/navbar-dark.vue';
import FooterTop from '@/components/footer/footer-top.vue';
import FooterDark from '@/components/footer/footer-dark.vue';
import ScrollToTop from '@/components/scroll-to-top.vue';

import $ from "jquery";
import "slick-carousel";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const initialized = ref(false);

const initializeSlickSlider = () => {
  nextTick(() => {
    const slider = $('.team-slide');
    try {
      if (slider.length > 0) {
        if (slider.hasClass("slick-initialized")) {
          slider.slick("unslick"); 
        }
        slider.slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows:false,
          responsive: [
                {
                breakpoint: 1023,
                    settings: {
                        arrows: false,
                        dots:true,
                        slidesToShow:3
                    }
                },
                {
                breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow:2
                    }
                },
                {
                breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow:1
                    }
                }
            ]
        });
      } else {
        console.error('Slick Slider element not found!');
      }
        } catch (error) {
        console.error('Error initializing Slick Slider:', error);
        }
  });
};

onMounted(() => {
  if (!initialized.value) {
    initialized.value = true;
    initializeSlickSlider();
  }
});


</script>
