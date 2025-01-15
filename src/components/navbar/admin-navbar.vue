<!-- eslint-disable no-mixed-spaces-and-tabs -->
<template>
	<div>
		<div class="header" :class="{'header-fixed': scroll, 'header-transparent dark': transparent,'header-light head-shadow': !transparent}">
			<div class="container">
				<nav id="navigation"  :class="windowWidth > 991 ? 'navigation navigation-landscape' : 'navigation navigation-portrait'">
					<div class="nav-header">
						<router-link to="" class="nav-brand text-logo" >
							<span class="svg-icon text-primary svg-icon-2hx">
								<img :src="logo">
							</span><h5 class="fs-3 fw-bold ms-1 my-0">Resido</h5>
						</router-link>
						<div class="nav-toggle" @click="toggle = !toggle"></div>
                        <div class="mobile_nav">
                            <ul>
                                <li>
                                    <a href="submit-property.html" class="text-primary">
                                        <span class="svg-icon svg-icon-2hx">
                                            <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"/>
                                                <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="currentColor"/>
                                                <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor"/>
                                            </svg>
                                        </span>	
                                    </a>
                                </li>
                                <li>
                                    <div class="btn-group account-drop">
                                        <button type="button" class="btn btn-order-by-filt dropdown-toggle" id="showbuttons" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img :src="users1" class="avater-img" alt="">
                                        </button>
                                        <div class="dropdown-menu pull-right animated flipInX" id="showings">
                                            <router-link to="/dashboard"><i class="fa-solid fa-gauge"></i>Dashboard</router-link>
                                            <router-link to="/my-profile"><i class="fa-solid fa-address-card"></i>My Profile</router-link>                                  
                                            <router-link to="/my-property"><i class="fa-solid fa-building-circle-check"></i>My Property</router-link>                                   
                                            <router-link to="/bookmark-list"><i class="fa-solid fa-bookmark"></i>Bookmarked Property</router-link>                                   
                                            <router-link to="/submit-property-dashboard"><i class="fa-solid fa-house"></i>Submit Property</router-link>                                   
                                            <router-link to="/change-password"><i class="fa-solid fa-unlock"></i>Change Password</router-link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
					</div>
					<div class="nav-menus-wrapper nav-menus-wrapper-open" :class="{ 'nav-menus-wrapper-open': toggle}" :style="{'left': toggle ? '0%' : '-100%'}">
						<span class="nav-menus-wrapper-close-button" @click="toggle = !toggle">✕</span>
						<ul class="nav-menu">
							<li :class="{active: ['/','/home-2','/home-3','/home-4','/home-5','/home-6','/home-7','/home-8','/home-9','/home-10','/home-11','/video','/map'].includes(current),show: activeMenu['index-page'] && activeMenu['index-page']['main']}" @mouseenter="handleMouseEnter('index-page')" @mouseleave="handleMouseLeave('index-page')"><router-link to="#" class="d-flex align-items-center">Home<span class="submenu-indicator"><span class="submenu-indicator-chevron"></span></span></router-link>
								<ul class="nav-dropdown nav-submenu" :style="{display: activeMenu['index-page'] && activeMenu['index-page']['main'] ? 'block' : 'none', pointerEvents: activeMenu['index-page'] && activeMenu['index-page']['main'] ? 'auto' : 'none'}">
									<li><router-link to="/" :class="current === '/' ? 'active' : ''">Home Layout 1</router-link></li>
									<li><router-link to="/home-2" :class="current === '/home-2' ? 'active' : ''">Home Layout 2</router-link></li>
									<li><router-link to="/home-3" :class="current === '/home-3' ? 'active' : ''">Home Layout 3</router-link></li>
									<li><router-link to="/home-4" :class="current === '/home-4' ? 'active' : ''">Home Layout 4</router-link></li>
									<li><router-link to="/home-5" :class="current === '/home-5' ? 'active' : ''">Home Layout 5</router-link></li>
									<li><router-link to="/home-6" :class="current === '/home-6' ? 'active' : ''">Home Layout 6</router-link></li>
									<li><router-link to="/home-7" :class="current === '/home-7' ? 'active' : ''">Home Layout 7</router-link></li>
									<li><router-link to="/home-8" :class="current === '/home-8' ? 'active' : ''">Home Layout 8</router-link></li>
									<li><router-link to="/home-9" :class="current === '/home-9' ? 'active' : ''">Home Layout 9</router-link></li>
									<li><router-link to="/home-10" :class="current === '/home-10' ? 'active' : ''">Home Layout 10</router-link></li>
									<li><router-link to="/home-11" :class="current === '/home-11' ? 'active' : ''">Home Layout 11</router-link></li>
									<li><router-link to="/video" :class="current === '/video' ? 'active' : ''">Video Home</router-link></li>
									<li><router-link to="/map" :class="current === '/map' ? 'active' : ''">Map Home Layout</router-link></li>
								</ul>
							</li>
							
							<li :class="{active: ['/list-layout-new','/list-layout-new-3','/list-layout-new-2','/list-layout-with-map','/list-layout-full','/grid-layout-with-sidebar','/classical-layout-with-sidebar','/grid-layout-with-map','/grid','/classical-property','/list-layout-with-map','/grid-layout-with-map','/classical-layout-with-map','/half-map','/half-map-2'].includes(current),show: activeMenu['index-page'] && activeMenu['index-page']['main']}" @mouseenter="handleMouseEnter('listing-page')" @mouseleave="handleMouseLeave('listing-page')"><router-link to="" class="d-flex align-items-center">Listings<span class="submenu-indicator"><span class="submenu-indicator-chevron"></span></span></router-link>
								<ul class="nav-dropdown nav-submenu" :style="{display: activeMenu['listing-page'] && activeMenu['listing-page']['main'] ? 'block' : 'none', pointerEvents: activeMenu['listing-page'] && activeMenu['listing-page']['main'] ? 'auto' : 'none'}">

									<li :class="{active: ['/list-layout-new','/list-layout-new-3','/list-layout-new-2','/list-layout-with-map','/list-layout-full'].includes(current),show: activeMenu['index-page'] && activeMenu['index-page']['main']}" @mouseenter="handleMouseEnter('list-page')" @mouseleave="handleMouseLeave('list-page')"><router-link to="" class="d-flex align-items-center justify-content-between">List Layout<span class="submenu-indicator"><span class="submenu-indicator-chevron"></span></span></router-link>
										<ul class="nav-dropdown nav-submenu" :style="{display: activeMenu['list-page'] && activeMenu['list-page']['main'] ? 'block' : 'none', pointerEvents: activeMenu['list-page'] && activeMenu['list-page']['main'] ? 'auto' : 'none'}">
											<li><router-link to="/list-layout-new" :class="current === '/list-layout-new' ? 'active' : ''">List Layout Simple</router-link></li>
											<li><router-link to="/list-layout-new-3" :class="current === '/list-layout-new-3' ? 'active' : ''">List Layout Modern</router-link></li>                                    
											<li><router-link to="/list-layout-new-2" :class="current === '/list-layout-new-2' ? 'active' : ''">List Layout Advance</router-link></li>                                    
											<li><router-link to="/list-layout-with-map" :class="current === '/list-layout-with-map' ? 'active' : ''">With Map</router-link></li>                                    
											<li><router-link to="/list-layout-full" :class="current === '/list-layout-full' ? 'active' : ''">Full Width</router-link></li>
										</ul>
									</li>

									<li :class="{active: ['/grid-layout-with-sidebar','/classical-layout-with-sidebar','/grid-layout-with-map','/grid','/classical-property',].includes(current),show: activeMenu['index-page'] && activeMenu['index-page']['main']}" @mouseenter="handleMouseEnter('map-page')" @mouseleave="handleMouseLeave('map-page')"><router-link to="" class="d-flex align-items-center justify-content-between">Grid Layout<span class="submenu-indicator"><span class="submenu-indicator-chevron"></span></span></router-link>
										<ul class="nav-dropdown nav-submenu" :style="{display: activeMenu['map-page'] && activeMenu['map-page']['main'] ? 'block' : 'none', pointerEvents: activeMenu['map-page'] && activeMenu['map-page']['main'] ? 'auto' : 'none'}">
											<li><router-link to="/grid-layout-with-sidebar" :class="current === '/grid-layout-with-sidebar' ? 'active' : ''">With Sidebar</router-link></li>                                    
											<li><router-link to="/classical-layout-with-sidebar" :class="current === '/classical-layout-with-sidebar' ? 'active' : ''">Classical With Sidebar</router-link></li>                                    
											<li><router-link to="/grid-layout-with-map" :class="current === '/grid-layout-with-map' ? 'active' : ''">With Map</router-link></li>                                    
											<li><router-link to="/grid" :class="current === '/grid' ? 'active' : ''">Full Width</router-link></li>
											<li><router-link to="/classical-property" :class="current === '/classical-property' ? 'active' : ''">Classical Full Width</router-link></li>	 
										</ul>
									</li>

									<li :class="{active: ['/list-layout-with-map','/grid-layout-with-map','/classical-layout-with-map','/half-map','/half-map-2'].includes(current),show: activeMenu['index-page'] && activeMenu['index-page']['main']}" @mouseenter="handleMouseEnter('grid-page')" @mouseleave="handleMouseLeave('grid-page')"><router-link to="" class="d-flex align-items-center justify-content-between">With Map Property<span class="submenu-indicator"><span class="submenu-indicator-chevron"></span></span></router-link>
										<ul class="nav-dropdown nav-submenu" :style="{display: activeMenu['grid-page'] && activeMenu['grid-page']['main'] ? 'block' : 'none', pointerEvents: activeMenu['grid-page'] && activeMenu['grid-page']['main'] ? 'auto' : 'none'}">
											<li><router-link to="/list-layout-with-map" :class="current === '/list-layout-with-map' ? 'active' : ''">List With Map</router-link></li>                                    
											<li><router-link to="/grid-layout-with-map" :class="current === '/grid-layout-with-map' ? 'active' : ''">Grid With Map</router-link></li>                                    
											<li><router-link to="/classical-layout-with-map" :class="current === '/classical-layout-with-map' ? 'active' : ''">Classical With Map</router-link></li>                                    
											<li><router-link to="/half-map" :class="current === '/half-map' ? 'active' : ''">Half Map Search</router-link></li>
											<li><router-link to="/half-map-2" :class="current === '/half-map-2' ? 'active' : ''">Half Map Search 02</router-link></li>												
										</ul>
									</li>
								</ul>
							</li>
							
							<li :class="{active: ['/single-property-1','/single-property-2','/single-property-3','/single-property-4','/agencies','/agency-page','/agents','/agent-page','/add-agent','/edit-agent','/dashboard','/payment','/my-profile','/create-account','/checkout','/my-property','/bookmark-list','/change-password','/submit-property-dashboard','/submit-property','/compare-property'].includes(current),show: activeMenu['index-page'] && activeMenu['index-page']['main']}" @mouseenter="handleMouseEnter('feature-page')" @mouseleave="handleMouseLeave('feature-page')"><router-link to="" class="d-flex align-items-center">Features<span class="submenu-indicator"><span class="submenu-indicator-chevron"></span></span></router-link>
								<ul class="nav-dropdown nav-submenu" :style="{display: activeMenu['feature-page'] && activeMenu['feature-page']['main'] ? 'block' : 'none', pointerEvents: activeMenu['feature-page'] && activeMenu['feature-page']['main'] ? 'auto' : 'none'}">

									<li :class="{active: ['/single-property-1','/single-property-2','/single-property-3','/single-property-4',].includes(current),show: activeMenu['index-page'] && activeMenu['index-page']['main']}" @mouseenter="handleMouseEnter('detail-page')" @mouseleave="handleMouseLeave('detail-page')"><router-link to="" class="d-flex align-items-center justify-content-between">Single Property<span class="submenu-indicator"><span class="submenu-indicator-chevron"></span></span></router-link>
										<ul class="nav-dropdown nav-submenu" :style="{display: activeMenu['detail-page'] && activeMenu['detail-page']['main'] ? 'block' : 'none', pointerEvents: activeMenu['detail-page'] && activeMenu['detail-page']['main'] ? 'auto' : 'none'}">
											<li><router-link to="/single-property-1" :class="current === '/single-property-1' ? 'active' : ''">Single Property 1</router-link></li>                                    
											<li><router-link to="/single-property-2" :class="current === '/single-property-2' ? 'active' : ''">Single Property 2</router-link></li>                                    
											<li><router-link to="/single-property-3" :class="current === '/single-property-3' ? 'active' : ''">Single Property 3</router-link></li> 
											<li><router-link to="/single-property-4" :class="current === '/single-property-4' ? 'active' : ''">Single Property 4</router-link></li> 												
										</ul>
									</li>

									<li :class="{active: ['/agencies','/agency-page'].includes(current),show: activeMenu['index-page'] && activeMenu['index-page']['main']}" @mouseenter="handleMouseEnter('agencies-page')" @mouseleave="handleMouseLeave('agencies-page')"><router-link to="" class="d-flex align-items-center justify-content-between">Agencies<span class="submenu-indicator"><span class="submenu-indicator-chevron"></span></span></router-link>
										<ul class="nav-dropdown nav-submenu" :style="{display: activeMenu['agencies-page'] && activeMenu['agencies-page']['main'] ? 'block' : 'none', pointerEvents: activeMenu['agencies-page'] && activeMenu['agencies-page']['main'] ? 'auto' : 'none'}">                                  
											<li><router-link to="/agencies" :class="current === '/agencies' ? 'active' : ''">Agencies List</router-link></li>                                    
											<li><router-link to="/agency-page" :class="current === '/agency-page' ? 'active' : ''">Agency Page</router-link></li> 
										</ul>
									</li>

									<li :class="{active: ['/agents','/agent-page','/add-agent','/edit-agent',].includes(current),show: activeMenu['index-page'] && activeMenu['index-page']['main']}" @mouseenter="handleMouseEnter('agents-page')" @mouseleave="handleMouseLeave('agents-page')"><router-link to="" class="d-flex align-items-center justify-content-between">Agents<span class="submenu-indicator"><span class="submenu-indicator-chevron"></span></span></router-link>
										<ul class="nav-dropdown nav-submenu" :style="{display: activeMenu['agents-page'] && activeMenu['agents-page']['main'] ? 'block' : 'none', pointerEvents: activeMenu['agents-page'] && activeMenu['agents-page']['main'] ? 'auto' : 'none'}">
											<li><router-link to="/agents" :class="current === '/agents' ? 'active' : ''">Agents List</router-link></li>                                    
											<li><router-link to="/agent-page" :class="current === '/agent-page' ? 'active' : ''">Agent Page</router-link></li>
											<li><router-link to="/add-agent" :class="current === '/add-agent' ? 'active' : ''">Add Agent</router-link></li>
											<li><router-link to="/edit-agent" :class="current === '/edit-agent' ? 'active' : ''">Edit Agent</router-link></li>
										</ul>
									</li>
									<li :class="{active: ['/dashboard','/payment','/my-profile','/create-account','/checkout','/my-property','/bookmark-list','/change-password','/submit-property-dashboard'].includes(current),show: activeMenu['index-page'] && activeMenu['index-page']['main']}" @mouseenter="handleMouseEnter('admin-page')" @mouseleave="handleMouseLeave('admin-page')"><router-link to="" class="d-flex align-items-center justify-content-between">My Account<span class="submenu-indicator"><span class="submenu-indicator-chevron"></span></span></router-link>
										<ul class="nav-dropdown nav-submenu" :style="{display: activeMenu['admin-page'] && activeMenu['admin-page']['main'] ? 'block' : 'none', pointerEvents: activeMenu['admin-page'] && activeMenu['admin-page']['main'] ? 'auto' : 'none'}">
											<li><router-link to="/dashboard" :class="current === '/dashboard' ? 'active' : ''">User Dashboard</router-link></li>
											<li><router-link to="/payment" :class="current === '/payment' ? 'active' : ''">Payment Confirmation</router-link></li>
											<li><router-link to="/my-profile" :class="current === '/my-profile' ? 'active' : ''">My Profile</router-link></li>                                    
											<li><router-link to="/create-account" :class="current === '/create-account' ? 'active' : ''">Create Account</router-link></li>                                    
											<li><router-link to="/checkout" :class="current === '/checkout' ? 'active' : ''">Checkout</router-link></li>                                    
											<li><router-link to="/my-property" :class="current === '/my-property' ? 'active' : ''">Property List</router-link></li>                                    
											<li><router-link to="/bookmark-list" :class="current === '/bookmark-list' ? 'active' : ''">Bookmarked Listings</router-link></li>                                    
											<li><router-link to="/change-password" :class="current === '/change-password' ? 'active' : ''">Change Password</router-link></li> 
											<li><router-link to="/submit-property-dashboard" :class="current === '/submit-property-dashboard' ? 'active' : ''">Submit Property Dashboard</router-link></li> 
										</ul>
									</li>
									<li>
										<router-link to="/compare-property" :class="current === '/compare-property' ? 'active' : ''">Compare Property</router-link>                                
									</li>
									<li>
										<router-link to="/submit-property" :class="current === '/submit-property' ? 'active' : ''">Submit Property</router-link>                                
									</li>
								</ul>
							</li>
							
							<li :class="{active: ['/about-us','/blog','/blog-detail','/component','/pricing','/faq','/404','/contact'].includes(current),show: activeMenu['index-page'] && activeMenu['index-page']['main']}" @mouseenter="handleMouseEnter('subPage-page')" @mouseleave="handleMouseLeave('subPage-page')"><router-link to="" class="d-flex align-items-center">Pages<span class="submenu-indicator"><span class="submenu-indicator-chevron"></span></span></router-link>
								<ul class="nav-dropdown nav-submenu" :style="{display: activeMenu['subPage-page'] && activeMenu['subPage-page']['main'] ? 'block' : 'none', pointerEvents: activeMenu['subPage-page'] && activeMenu['subPage-page']['main'] ? 'auto' : 'none'}">
									<li><router-link to="/about-us" :class="current === '/about-us' ? 'active' : ''">About Us</router-link></li>                                    
									<li><router-link to="/blog" :class="current === '/blog' ? 'active' : ''">Blogs Page</router-link></li>                                    
									<li><router-link to="/blog-detail" :class="current === '/blog-detail' ? 'active' : ''">Blog Detail</router-link></li>                                    
									<li><router-link to="/component" :class="current === '/component' ? 'active' : ''">Shortcodes</router-link></li> 
									<li><router-link to="/pricing" :class="current === '/pricing' ? 'active' : ''">Pricing</router-link></li>  
									<li><router-link to="/faq" :class="current === '/faq' ? 'active' : ''">Faq</router-link></li>  
									<li><router-link to="/404" :class="current === '/404' ? 'active' : ''">Error Page</router-link></li>
									<li><router-link to="/contact" :class="current === '/contact' ? 'active' : ''">Contacts</router-link></li>
								</ul>
							</li>
						</ul>
						
                        <ul class="nav-menu nav-menu-social align-to-right">
                            <li>
                                <div class="btn-group account-drop">
                                    <button type="button" class="btn btn-order-by-filt dropdown-toggle" id="showbutton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img :src="users1" class="avater-img" alt="">Hi, Admin
                                    </button>
                                    <div class="dropdown-menu pull-right animated flipInX" id="showing">
                                        <router-link to="/dashboard"><i class="fa-solid fa-gauge"></i>Dashboard</router-link>
                                        <router-link to="/my-profile"><i class="fa-solid fa-address-card"></i>My Profile</router-link>                                  
                                        <router-link to="/my-property"><i class="fa-solid fa-building-circle-check"></i>My Property</router-link>                                   
                                        <router-link to="/bookmark-list"><i class="fa-solid fa-bookmark"></i>Bookmarked Property</router-link>                                   
                                        <router-link to="/submit-property-dashboard"><i class="fa-solid fa-house"></i>Submit Property</router-link>                                   
                                        <router-link to="/change-password"><i class="fa-solid fa-unlock"></i>Change Password</router-link>
                                    </div>
                                </div>
                            </li>
                        </ul>
					</div>
				</nav>
			</div>
		</div>

		<div class="clearfix"></div>
	</div>
</template>

<script setup>
    import { onMounted, ref, defineProps } from 'vue';

	import users1 from '@/assets/img/team-1.jpg'
	import logo from '@/assets/img/logo.svg'

	import { useRoute } from 'vue-router';

	defineProps({
		transparent:Boolean
	})

    const activeMenu = ref({});
	const toggle = ref(false)
	const router = useRoute();
    const current = ref(router.path);
	const windowWidth= ref(window.innerWidth);

	const scroll = ref(false)

	const handleResize = () => {
      windowWidth.value = window.innerWidth;
    };

	const handleScroll = () => {
        if (window.scrollY >= 50) {
            scroll.value = true
        } else {
            scroll.value = false
        }
    }


	onMounted(()=>{
		window.scrollTo(0,0)
		window.addEventListener('resize', handleResize);
		window.addEventListener('scroll', handleScroll);
	})

    const handleMouseEnter = (menu, submenu = 'main') => {
        if (!activeMenu.value[menu]) {
            activeMenu.value[menu] = {};
        }
        activeMenu.value[menu][submenu] = true;
    };

    const handleMouseLeave = (menu, submenu = 'main') => {
        if (activeMenu.value[menu]) {
            activeMenu.value[menu][submenu] = false;
        }
    };

</script>
