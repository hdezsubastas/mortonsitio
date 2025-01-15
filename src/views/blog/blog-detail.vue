<template>
    <div class="blog-page" id="main-wrapper">

        <NavbarDark/>

        <div class="page-title">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <h2 class="ipt-title">Blog Detail</h2>
                        <span class="ipn-subtitle">See Our Latest Articles & News</span>
                    </div>
                </div>
            </div>
        </div>
        <section class="gray-simple">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                        <div class="blog-details single-post-item format-standard">
                            <div class="post-details">
                            
                                <div class="post-featured-img">
                                    <img class="img-fluid" :src="data && data.image ? data.image : blog" alt="">
                                </div>
                                
                                <div class="post-top-meta">
                                    <ul class="meta-comment-tag">
                                        <li><router-link to="#"><span class="icons"><i class="ti ti-user"></i></span>by Rosalina Doe</router-link></li>
                                        <li><router-link to="#"><span class="icons"><i class="ti ti-comment-alt"></i></span>45 Comments</router-link></li>
                                    </ul>
                                </div>
                                <h2 class="post-title">{{data && data.title ? data.title : 'Lorem ipsum dolor sit amet, cons pisicing elit, sed do.'}}</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem. <br><br> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</p>
                                <blockquote>
                                    <span class="icon"><i class="fas fa-quote-left"></i></span>
                                    <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtem ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo onsequat.</p>
                                    <h5 class="name">- Rosalina Pong</h5>
                                </blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enimipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequunturmagni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, quidolorem. <br/><br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillumdolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnisiste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta suntexplicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,sed quia consequuntur magni dolores eos qui ratione voluptatem.</p>
                                <div class="post-bottom-meta">
                                    <div class="post-tags">
                                        <h4 class="pbm-title">Related Tags</h4>
                                        <ul class="list">
                                            <li class="me-1"><router-link to="">organic</router-link></li>
                                            <li class="me-1"><router-link to="">Foods</router-link></li>
                                            <li class="me-1"><router-link to="">tasty</router-link></li>
                                        </ul>
                                    </div>
                                    <div class="post-share">
                                        <h4 class="pbm-title">Social Share</h4>
                                        <ul class="list">
                                            <li><router-link to=""><i class="fab fa-facebook-f"></i></router-link></li>
                                            <li><router-link to=""><i class="fab fa-twitter"></i></router-link></li>
                                            <li><router-link to=""><i class="fab fa-linkedin-in"></i></router-link></li>
                                            <li><router-link to=""><i class="fab fa-vk"></i></router-link></li>
                                            <li><router-link to=""><i class="fab fa-tumblr"></i></router-link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="single-post-pagination">
                                    <div class="prev-post">
                                        <router-link to="">
                                            <div class="title-with-link">
                                                <span class="intro">Prev Post</span>
                                                <h3 class="title">Tips on Minimalist</h3>
                                            </div>
                                        </router-link>
                                    </div>
                                    <div class="post-pagination-center-grid">
                                        <router-link to=""><i class="ti ti-layout-grid3"></i></router-link>
                                    </div>
                                    <div class="next-post">
                                        <router-link to="">
                                            <div class="title-with-link">
                                                <span class="intro">Next Post</span>
                                                <h3 class="title">Less Is More</h3>
                                            </div>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="blog-details single-post-item format-standard">
                            
                            <div class="posts-author">
                                <span class="img"><img class="img-fluid" :src="user1" alt=""></span>
                                <h3 class="pa-name">Rosalina William</h3>
                                <ul class="social-links">
                                    <li><router-link to=""><i class="fab fa-facebook-f"></i></router-link></li>
                                    <li><router-link to=""><i class="fab fa-twitter"></i></router-link></li>
                                    <li><router-link to=""><i class="fab fa-behance"></i></router-link></li>
                                    <li><router-link to=""><i class="fab fa-youtube"></i></router-link></li>
                                    <li><router-link to=""><i class="fab fa-linkedin-in"></i></router-link></li>
                                </ul>
                                <p class="pa-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                            </div>
                            
                        </div>
                        <div class="blog-details single-post-item format-standard">
                            
                            <div class="comment-area">
                                <div class="all-comments">
                                    <h3 class="comments-title">05 Comments</h3>
                                    <div class="comment-list">
                                        <ul>
                                            <li class="single-comment">
                                                <article>
                                                    <div class="comment-author">
                                                        <img :src="user1" alt="">
                                                    </div>
                                                    <div class="comment-details">
                                                        <div class="comment-meta">
                                                            <div class="comment-left-meta">
                                                                <h4 class="author-name">Rosalina Kelian <span class="selected"><i class="fas fa-bookmark"></i></span></h4>
                                                                <div class="comment-date">13th March 2025</div>
                                                            </div>
                                                            <div class="comment-reply">
                                                                <router-link to="" class="reply"><span class="icona"><i class="ti ti-back-left"></i></span> Reply</router-link>
                                                            </div>
                                                        </div>
                                                        <div class="comment-text">
                                                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab.perspiciatis unde omnis iste natus error.</p>
                                                        </div>
                                                    </div>
                                                </article>
                                                <ul class="children">
                                                    <li class="single-comment">
                                                        <article>
                                                            <div class="comment-author">
                                                                <img :src="user2" alt="">
                                                            </div>
                                                            <div class="comment-details">
                                                                <div class="comment-meta">
                                                                    <div class="comment-left-meta">
                                                                        <h4 class="author-name">Rosalina Kelian</h4>
                                                                        <div class="comment-date">5th May 2025</div>
                                                                    </div>
                                                                    <div class="comment-reply">
                                                                        <router-link to="" class="reply"><span class="icons"><i class="ti ti-back-left"></i></span> Reply</router-link>
                                                                    </div>
                                                                </div>
                                                                <div class="comment-text">
                                                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab.perspiciatis unde omnis iste natus error.</p>
                                                                </div>
                                                            </div>
                                                        </article>
                                                        <ul class="children">
                                                            <li class="single-comment">
                                                                <article>
                                                                    <div class="comment-author">
                                                                        <img :src="user4" alt="">
                                                                    </div>
                                                                    <div class="comment-details">
                                                                        <div class="comment-meta">
                                                                            <div class="comment-left-meta">
                                                                                <h4 class="author-name">Rosalina Kelian</h4>
                                                                                <div class="comment-date">19th June 2025</div>
                                                                            </div>
                                                                            <div class="comment-reply">
                                                                                <router-link to="" class="reply"><span class="icons"><i class="ti ti-back-left"></i></span> Reply</router-link>
                                                                            </div>
                                                                        </div>
                                                                        <div class="comment-text">
                                                                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab. perspiciatis unde omnis iste natus error.</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="single-comment">
                                                <article>
                                                    <div class="comment-author">
                                                        <img :src="user5" alt="">
                                                    </div>
                                                    <div class="comment-details">
                                                        <div class="comment-meta">
                                                            <div class="comment-left-meta">
                                                                <h4 class="author-name">Rosalina Kelian</h4>
                                                                <div class="comment-date">20th June 2025</div>
                                                            </div>
                                                            <div class="comment-reply">
                                                                <router-link to="" class="reply"><span class="icons"><i class="ti ti-back-left"></i></span> Reply</router-link>
                                                            </div>
                                                        </div>
                                                        <div class="comment-text">
                                                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab. perspiciatis unde omnis iste natus error.</p>
                                                        </div>
                                                    </div>
                                                </article>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="comment-box submit-form">
                                    <h3 class="reply-title">Post Comment</h3>
                                    <div class="comment-form">
                                        <form action="#">
                                            <div class="row">
                                                <div class="col-lg-6 col-md-6 col-sm-12">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="Your Name">
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-12">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="Your Email">
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 col-md-12 col-sm-12">
                                                    <div class="form-group">
                                                        <textarea name="comment" class="form-control" cols="30" rows="6" placeholder="Type your comments...."></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 col-md-12 col-sm-12">
                                                    <div class="form-group">
                                                        <router-link to="" class="btn btn-primary rounded full-width">Submit Now</router-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-12 col-sm-12 col-12">
                        <BlogSidebar/>
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
    import { useRoute } from 'vue-router'
    import blog from '@/assets/img/p-1.jpg'
    import user1 from '@/assets/img/user-1.jpg'
    import user2 from '@/assets/img/user-2.jpg'
    import user4 from '@/assets/img/user-4.jpg'
    import user5 from '@/assets/img/user-5.jpg'
    import BlogSidebar from '@/components/blog-sidebar.vue';
    import FooterDark from '@/components/footer/footer-dark.vue'
    import FooterTop from '@/components/footer/footer-top.vue'
    import NavbarDark from '@/components/navbar/navbar-dark.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue'
    import { blogData } from '@/data/data'

    const route = useRoute()

    const data = blogData.find((item)=>item.id === parseInt(route.params.id))
</script>

