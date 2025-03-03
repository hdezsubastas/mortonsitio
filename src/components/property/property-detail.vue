<template>
    <div>
        <div class="property_block_wrap style-2">
            <div class="property_block_wrap_header">
                <router-link data-bs-toggle="collapse" data-parent="#features" data-bs-target="#clOne" aria-controls="clOne" to="" aria-expanded="false"><h4 class="property_block_title">Detail & Features</h4></router-link>
            </div>
            <div id="clOne" class="panel-collapse collapse show" aria-labelledby="clOne">
                <div class="block-body">
                    <ul class="deatil_features">
                        <li v-for="(item, index) in feature" :key="index"><strong>{{item.title}}</strong>{{item.subtitle}}</li>
                    </ul>
                </div>
            </div>
        </div>
                        
        <div class="property_block_wrap style-2">
            <div class="property_block_wrap_header">
                <router-link data-bs-toggle="collapse" data-parent="#dsrp" data-bs-target="#clTwo" aria-controls="clTwo" to="" aria-expanded="true"><h4 class="property_block_title">Description</h4></router-link>
            </div>
            <div id="clTwo" class="panel-collapse collapse show">
                <div class="block-body">
                    <p>Este mes de febrero, Morton Subastas se complace en ofrecerle una selecta colección de joyas y relojería fina, donde la estética y la funcionalidad se combinan de manera excepcional.</p>
                    <p>Nuestra selección de joyas abarca una amplia variedad de diseños, desde piezas tradicionales hasta creaciones contemporáneas y de reconocidas firmas. Elaboradas con metales preciosos y engastadas con gemas naturales, tanto preciosas como semipreciosas, cada pieza destaca por su refinada manufactura y su capacidad de cautivar tanto la mente como el corazón.</p>
                    <p>En cuanto a relojería, ponemos a su disposición extraordinarios ejemplares que no solo marcan el tiempo, sino que también reflejan estilo y distinción. Nuestra oferta incluye modelos casuales, formales y deportivos de prestigiosas marcas como Gerald Genta, Cartier, Rolex, Omega, Baume & Mercier, Bertolucci, Boucheron, Cvstos y Girard-Perregaux, así como relojes de bolsillo de las casas Henry Capt y Juvenia.</p>
                    <p>Le invitamos a visitar nuestra exhibición previa a la subasta y aprovechar esta oportunidad única de adquirir piezas excepcionales.</p>
                </div>
            </div>
        </div>
                        
        <div class="property_block_wrap style-2">
            <div class="property_block_wrap_header">
                <router-link data-bs-toggle="collapse" data-parent="#amen"  data-bs-target="#clThree" aria-controls="clThree" to="" aria-expanded="true"><h4 class="property_block_title">Ameneties</h4></router-link>
            </div>
            <div id="clThree" class="panel-collapse collapse show">
                <div class="block-body">
                    <ul class="avl-features third color">
                        <li v-for="(item, index) in ameneties" :key="index">{{item}}</li>
                    </ul>
                </div>
            </div>
        </div>
                        
        <div class="property_block_wrap style-2">
            <div class="property_block_wrap_header">
                <router-link data-bs-toggle="collapse" data-parent="#vid"  data-bs-target="#clFour" aria-controls="clFour" to="" aria-expanded="true" class="collapsed"><h4 class="property_block_title">Property video</h4></router-link>
            </div>
            <div id="clFour" class="panel-collapse collapse">
                <div class="block-body">
                    <div class="property_video">
                        <div class="thumb">
                            <img class="pro_img img-fluid w100" :src="pl6" alt="7.jpg">
                            <div class="overlay_icon">
                                <div class="bb-video-box">
                                    <div class="bb-video-box-inner">
                                        <div class="bb-video-box-innerup">
                                            <a href="https://www.youtube.com/watch?v=A8EI6JaFbv4"  class="text-primary"><i class="fa-solid fa-play"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                        
        <div class="property_block_wrap style-2">
            <div class="property_block_wrap_header">
                <router-link data-bs-toggle="collapse" data-parent="#floor"  data-bs-target="#clFive" aria-controls="clFive" to="" aria-expanded="true" class="collapsed"><h4 class="property_block_title">Floor Plan</h4></router-link>
            </div>
            <div id="clFive" class="panel-collapse collapse">
                <div class="block-body">
                    <div class="accordion" id="floor-option">
                        <div class="card">
                            <div class="card-header" id="firstFloor">
                                <h2 class="mb-0">
                                    <button type="button" class="btn btn-link" data-bs-toggle="collapse" data-bs-target="#firstfloor" aria-controls="firstfloor">First Floor<span>740 sq ft</span></button>									
                                </h2>
                            </div>
                            <div id="firstfloor" class="collapse" aria-labelledby="firstFloor" data-parent="#floor-option">
                                <div class="card-body">
                                    <img :src="floor" class="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="seconfFloor">
                                <h2 class="mb-0">
                                    <button type="button" class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#secondfloor" aria-controls="secondfloor">Second Floor<span>710 sq ft</span></button>
                                </h2>
                            </div>
                            <div id="secondfloor" class="collapse" aria-labelledby="seconfFloor" data-parent="#floor-option">
                                <div class="card-body">
                                    <img :src="floor" class="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="third-garage">
                                <h2 class="mb-0">
                                    <button type="button" class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#garages" aria-controls="garages">Garage<span>520 sq ft</span></button>                     
                                </h2>
                            </div>
                            <div id="garages" class="collapse" aria-labelledby="third-garage" data-parent="#floor-option">
                                <div class="card-body">
                                    <img :src="floor" class="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                        
        <div class="property_block_wrap style-2">
            <div class="property_block_wrap_header">
                <router-link data-bs-toggle="collapse" data-parent="#loca"  data-bs-target="#clSix" aria-controls="clSix" to="" aria-expanded="true" class="collapsed"><h4 class="property_block_title">Location</h4></router-link>
            </div>
            <div id="clSix" class="panel-collapse collapse">
                <div class="block-body">
                    <div class="map-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.3838103135677!2d80.87929001488125!3d26.827742183164247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfe8bc34b51bb%3A0xa3ca86eec63f6f8!2sINFOSYS%20DIGITAL%20COMPUTER%20(Prabhat%20Computer%20Classes)!5e0!3m2!1sen!2sin!4v1680238790732!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
                        
        <div class="property_block_wrap style-2">
            <div class="property_block_wrap_header">
                <router-link data-bs-toggle="collapse" data-parent="#clSev"  data-bs-target="#clSev" aria-controls="clOne" to="" aria-expanded="true" class="collapsed"><h4 class="property_block_title">Gallery</h4></router-link>
            </div>
            <div id="clSev" class="panel-collapse collapse">
                <div class="block-body">
                    <ul class="list-gallery-inline">
                        <li v-for="(item, index) in gallery" :key="index">
                            <router-link to="" class="mfp-gallery"><img :src="item" class="img-fluid mx-auto" alt="" /></router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
                        
        <div class="rating-overview">
            <div class="rating-overview-box">
                <span class="rating-overview-box-total">4.2</span>
                <span class="rating-overview-box-percent">out of 5.0</span>
                <div class="star-rating" data-rating="5">
                    <i class="fas fa-star fs-xs mx-1"></i><i class="fas fa-star fs-xs mx-1"></i><i class="fas fa-star fs-xs mx-1"></i><i class="fas fa-star fs-xs mx-1"></i><i class="fas fa-star fs-xs mx-1"></i>
                </div>
            </div>

            <div class="rating-bars">
                <div class="rating-bars-item">
                    <span class="rating-bars-name">Service</span>
                    <span class="rating-bars-inner">
                        <span class="rating-bars-rating high" data-rating="4.7">
                            <span class="rating-bars-rating-inner" style="width: 85%;"></span>
                        </span>
                        <strong>4.7</strong>
                    </span>
                </div>
                <div class="rating-bars-item">
                    <span class="rating-bars-name">Value for Money</span>
                    <span class="rating-bars-inner">
                        <span class="rating-bars-rating good" data-rating="3.9">
                            <span class="rating-bars-rating-inner" style="width: 75%;"></span>
                        </span>
                        <strong>3.9</strong>
                    </span>
                </div>
                <div class="rating-bars-item">
                    <span class="rating-bars-name">Location</span>
                    <span class="rating-bars-inner">
                        <span class="rating-bars-rating mid" data-rating="3.2">
                            <span class="rating-bars-rating-inner" style="width: 52.2%;"></span>
                        </span>
                        <strong>3.2</strong>
                    </span>
                </div>
                <div class="rating-bars-item">
                    <span class="rating-bars-name">Cleanliness</span>
                    <span class="rating-bars-inner">
                        <span class="rating-bars-rating poor" data-rating="2.0">
                            <span class="rating-bars-rating-inner" style="width:20%;"></span>
                        </span>
                        <strong>2.0</strong>
                    </span>
                </div>
            </div>
        </div>
                        
        <div class="property_block_wrap style-2">
            <div class="property_block_wrap_header">
                <router-link to="" data-bs-toggle="collapse" data-parent="#rev"  data-bs-target="#clEight" aria-controls="clEight" aria-expanded="true"><h4 class="property_block_title">102 Reviews</h4></router-link>
            </div>
            
            <div id="clEight" class="panel-collapse collapse show">
                <div class="block-body">
                    <div class="author-review">
                        <div class="comment-list">
                            <ul>
                                <li v-for="(item, index) in review" :key="index" class="article_comments_wrap">
                                    <article>
                                        <div class="article_comments_thumb">
                                            <img :src="item.image" alt="">
                                        </div>
                                        <div class="comment-details">
                                            <div class="comment-meta">
                                                <div class="comment-left-meta">
                                                    <h4 class="author-name">{{item.name}}</h4>
                                                    <div class="comment-date">{{item.date}}</div>
                                                </div>
                                            </div>
                                            <div class="comment-text">
                                                <p>{{item.desc}}</p>
                                            </div>
                                        </div>
                                    </article>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <router-link to="" class="reviews-checked text-primary"><i class="fas fa-arrow-alt-circle-down mr-2"></i>See More Reviews</router-link>
                </div>
            </div>
            
        </div>
                        
        <div class="property_block_wrap style-2">
            <div class="property_block_wrap_header">
                <router-link data-bs-toggle="collapse" data-parent="#nearby" data-bs-target="#clNine" aria-controls="clNine" to="" aria-expanded="true"><h4 class="property_block_title">Nearby</h4></router-link>
            </div>
            
            <div id="clNine" class="panel-collapse collapse show">
                <div class="block-body">
                    <div class="nearby-wrap">
                        <div class="nearby_header">
                            <div class="nearby_header_first">
                                <h5>Schools Around</h5>
                            </div>
                            <div class="nearby_header_last">
                                <div class="nearby_powerd">Powerd by <img :src="edu" class="img-fluid" alt="" /></div>
                            </div>
                        </div>
                        <div class="neary_section_list">
                            <div class="neary_section">
                                <div class="neary_section_first">
                                    <h4 class="nearby_place_title">Green Iseland School<small>(3.52 mi)</small></h4>
                                </div>
                                <div class="neary_section_last">
                                    <div class="nearby_place_rate">
                                        <i class="fa fa-star filled me-1"></i>
                                        <i class="fa fa-star filled me-1"></i>
                                        <i class="fa fa-star filled me-1"></i>
                                        <i class="fa fa-star filled me-1"></i>
                                        <i class="fa fa-star me-1"></i>														
                                    </div>
                                    <small class="reviews-count">(421 Reviews)</small>
                                </div>
                            </div>
                            
                            <div class="neary_section">
                                <div class="neary_section_first">
                                    <h4 class="nearby_place_title">Ragni Intermediate College<small>(0.52 mi)</small></h4>
                                </div>
                                <div class="neary_section_last">
                                    <div class="nearby_place_rate">
                                        <i class="fa fa-star filled me-1"></i>
                                        <i class="fa fa-star filled me-1"></i>
                                        <i class="fa fa-star filled me-1"></i>
                                        <i class="fa fa-star filled me-1"></i>
                                        <i class="fa fa-star-half filled me-1"></i>														
                                    </div>
                                    <small class="reviews-count">(470 Reviews)</small>
                                </div>
                            </div>
                            
                            <div class="neary_section">
                                <div class="neary_section_first">
                                    <h4 class="nearby_place_title">Rose Wood Primary Scool<small>(0.47 mi)</small></h4>
                                </div>
                                <div class="neary_section_last">
                                    <div class="nearby_place_rate">
                                        <i class="fa fa-star filled me-1"></i>
                                        <i class="fa fa-star filled me-1"></i>
                                        <i class="fa fa-star filled me-1"></i>
                                        <i class="fa fa-star filled me-1"></i>
                                        <i class="fa fa-star me-1"></i>														
                                    </div>
                                    <small class="reviews-count">(204 Reviews)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="nearby-wrap">
                        <div class="nearby_header">
                            <div class="nearby_header_first">
                                <h5>Food Around</h5>
                            </div>
                            <div class="nearby_header_last">
                                <div class="nearby_powerd">
                                    Powerd by <img :src="food" class="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="neary_section_list">
                        
                            <div class="neary_section">
                                <div class="neary_section_first">
                                    <h4 class="nearby_place_title">The Rise hotel<small>(2.42 mi)</small></h4>
                                </div>
                                <div class="neary_section_last">
                                    <div class="nearby_place_rate">
                                        <i class="fa fa-star filled me-1"></i>
                                        <i class="fa fa-star filled me-1"></i>
                                        <i class="fa fa-star filled me-1"></i>
                                        <i class="fa fa-star filled me-1"></i>
                                        <i class="fa fa-star filled me-1"></i>														
                                    </div>
                                    <small class="reviews-count">(105 Reviews)</small>
                                </div>
                            </div>
                            
                            <div class="neary_section">
                                <div class="neary_section_first">
                                    <h4 class="nearby_place_title">Blue Ocean Bar & Restaurant<small>(1.52 mi)</small></h4>
                                </div>
                                <div class="neary_section_last">
                                    <div class="nearby_place_rate">
                                        <i class="fa fa-star filled me-1"></i>
                                        <i class="fa fa-star filled me-1"></i>
                                        <i class="fa fa-star filled me-1"></i>
                                        <i class="fa fa-star filled me-1"></i>
                                        <i class="fa fa-star me-1"></i>														
                                    </div>
                                    <small class="reviews-count">(40 Reviews)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="property_block_wrap style-2">
            <div class="property_block_wrap_header">
                <router-link data-bs-toggle="collapse" data-parent="#comment" data-bs-target="#clTen" aria-controls="clTen" to="" aria-expanded="true"><h4 class="property_block_title">Write a Review</h4></router-link>
            </div>
            
            <div id="clTen" class="panel-collapse collapse show">
                <div class="block-body">
                    <form class="form-submit">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="form-group">
                                    <textarea class="form-control ht-80" placeholder="Messages"></textarea>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="form-group">
                                    <Multiselect v-model="selected" :options="rate" placeholder="Choose Ratting" class="form-control px-0"/>
                                </div>
                            </div>
                            
                            <div class="col-lg-6 col-md-6 col-sm-12">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Your Name">
                                </div>
                            </div>
                            
                            <div class="col-lg-6 col-md-6 col-sm-12">
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Your Email">
                                </div>
                            </div>
                            
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="form-group">
                                    <button class="btn btn-primary fw-medium px-lg-5 rounded" type="submit">Submit Review</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="modal fade" id="popup-video" tabindex="-1" role="dialog" aria-labelledby="popupvideo" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content" id="popupvideo">
                    <iframe class="embed-responsive-item full-width"  height="480" src="https://www.youtube.com/embed/S_CGed6E610?rel=0" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import Multiselect from '@vueform/multiselect';
    import '@vueform/multiselect/themes/default.css';
    import pl6 from '@/assets/img/pl-6.jpg'
    import edu from '@/assets/img/edu.png'
    import floor from '@/assets/img/floor.jpg'
    import food from '@/assets/img/food.png'
    import { ameneties, feature, gallery, review } from '@/data/detail-data';

    const rate = ref([
        '01 Star',
        '02 Star',
        '03 Star',
        '04 Star',
        '05 Star',
        '06 Star',
    ])
</script>
