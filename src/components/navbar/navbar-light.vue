<!-- eslint-disable no-mixed-spaces-and-tabs -->
<template>
	<div>
		<div class="header header-transparent" :class="{'header-fixed': scroll}">
			<div class="container">
				<nav id="navigation"  :class="windowWidth > 991 ? 'navigation navigation-landscape' : 'navigation navigation-portrait'">
					<div class="nav-header">
						<router-link to="" class="nav-brand text-logo exchange" >
                            <img v-if="scroll" :src="logo">
                            <img  v-if="!scroll" :src="logoLight" alt="" class='d-none d-lg-block' />
                            <img  v-if="!scroll" :src="logo" alt="" class='d-block d-lg-none' />
							<h5 class="fs-3 fw-bold ms-1 my-0">Resido</h5>
						</router-link>
						<div class="nav-toggle" @click="toggle = !toggle"></div>
						<div class="mobile_nav">
							<ul>
								<li>
									<router-link to="" data-bs-toggle="modal" data-bs-target="#login" class="text-dark opacity-75">
										<span class="svg-icon svg-icon-2hx">
											<img :src="users" alt="">
										</span>
									</router-link>
								</li>
								<li>
									<router-link to="/submit-property" class="text-primary">
										<span class="svg-icon svg-icon-2hx">
											<img :src="add" alt="">
										</span>	
									</router-link>
								</li>
								<li>
									<router-link to="" class="text-primary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
										<span class="svg-icon svg-icon-2hx">
											<img :src="bar" alt="">
										</span>
									</router-link>
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
								<router-link to="#" data-bs-toggle="modal" data-bs-target="#login" class="fw-medium text-muted-2">
									<span class="svg-icon svg-icon-2hx me-1">
										<svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path opacity="0.3" d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z" fill="currentColor"/>
											<path d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z" fill="currentColor"/>
											<rect x="7" y="6" width="4" height="4" rx="2" fill="currentColor"/>
										</svg>
									</span>
									SignUp or SignIn
								</router-link>
							</li>
							<li class="add-listing light">
								<router-link to="/submit-property" class="bg-primary">
									<span class="svg-icon svg-icon-muted svg-icon-2hx me-1">
										<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect opacity="0.3" width="12" height="2" rx="1" transform="matrix(-1 0 0 1 15.5 11)" fill="currentColor"/>
											<path d="M13.6313 11.6927L11.8756 10.2297C11.4054 9.83785 11.3732 9.12683 11.806 8.69401C12.1957 8.3043 12.8216 8.28591 13.2336 8.65206L16.1592 11.2526C16.6067 11.6504 16.6067 12.3496 16.1592 12.7474L13.2336 15.3479C12.8216 15.7141 12.1957 15.6957 11.806 15.306C11.3732 14.8732 11.4054 14.1621 11.8756 13.7703L13.6313 12.3073C13.8232 12.1474 13.8232 11.8526 13.6313 11.6927Z" fill="currentColor"/>
											<path d="M8 5V6C8 6.55228 8.44772 7 9 7C9.55228 7 10 6.55228 10 6C10 5.44772 10.4477 5 11 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H11C10.4477 19 10 18.5523 10 18C10 17.4477 9.55228 17 9 17C8.44772 17 8 17.4477 8 18V19C8 20.1046 8.89543 21 10 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H10C8.89543 3 8 3.89543 8 5Z" fill="currentColor"/>
										</svg>
									</span>Post Property
								</router-link>
							</li>
							<li>
								<router-link to="#" class="text-invers" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                                    <span class="svg-icon svg-icon-2hx">
                                        <svg width="24" height="24" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="6" width="16" height="3" rx="1.5" fill="currentColor"/>
                                            <rect opacity="0.3" y="12" width="8" height="3" rx="1.5" fill="currentColor"/>
                                            <rect opacity="0.3" width="12" height="3" rx="1.5" fill="currentColor"/>
                                        </svg>
                                    </span>
								</router-link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>

		<div class="clearfix"></div>
		
		<div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
			<div class="offcanvas-header">
				<h5 class="offcanvas-title" id="offcanvasScrollingLabel">Compare & Selected Property</h5>
				<router-link to="#" data-bs-dismiss="offcanvas" aria-label="Close">
					<span class="svg-icon text-primary svg-icon-2hx">
						<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"/>
							<rect x="7" y="15.3137" width="12" height="2" rx="1" transform="rotate(-45 7 15.3137)" fill="currentColor"/>
							<rect x="8.41422" y="7" width="12" height="2" rx="1" transform="rotate(45 8.41422 7)" fill="currentColor"/>
						</svg>
					</span>
				</router-link>
			</div>
			<div class="offcanvas-body">
				<ul class="nav nav-pills sider_tab mb-3" id="pills-tab" role="tablist">
					<li class="nav-item" role="presentation">
						<button class="nav-link active" id="pills-compare-tab" data-bs-toggle="pill" data-bs-target="#pills-compare" type="button" role="tab" aria-controls="pills-compare" aria-selected="true">Compare Property</button>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link" id="pills-saved-tab" data-bs-toggle="pill" data-bs-target="#pills-saved" type="button" role="tab" aria-controls="pills-saved" aria-selected="false">Saved Property</button>
					</li>
				</ul>
				<div class="tab-content" id="pills-tabContent">
					<div class="tab-pane fade show active" id="pills-compare" role="tabpanel" aria-labelledby="pills-compare-tab" tabindex="0">
						<div class="sidebar_featured_property">
							<div v-for="(item, index) in navProperty" :key="index" class="sides_list_property p-2">
								<div class="sides_list_property_thumb">
									<img :src="item.image" class="img-fluid" alt="">
								</div>
								<div class="sides_list_property_detail">
									<h4><router-link to="/single-property-1">{{item.name}}</router-link></h4>
									<span class="text-muted-2"><i class="fa-solid fa-location-dot"></i>{{item.loction}}</span>
									<div class="lists_property_price">
										<div class="lists_property_types">
											<div v-if="item.type === 'For Sale'" class="property_types_vlix sale">For Sale</div>
											<div v-if="item.type === 'For Rent'" class="property_types_vlix">For Rent</div>
											<div v-if="item.type === 'For Buy'" class="property_types_vlix buy">For Buy</div>
										</div>
										<div class="lists_property_price_value">
											<h4 class="text-primary">$4,240</h4>
										</div>
									</div>
								</div>
							</div>
							
							<div class="input-group">
								<router-link to="/compare-property" class="btn btn-light-primary fw-medium full-width">View & Compare</router-link>
							</div>
						</div>	
					</div>
					<div class="tab-pane fade" id="pills-saved" role="tabpanel" aria-labelledby="pills-saved-tab" tabindex="0">
						<div class="sidebar_featured_property">
									
							<div v-for="(item, index) in navProperty2" :key="index" class="sides_list_property p-2">
								<div class="sides_list_property_thumb">
									<img :src="item.image" class="img-fluid" alt="">
								</div>
								<div class="sides_list_property_detail">
									<h4><router-link to="/single-property-1">{{item.name}}</router-link></h4>
									<span class="text-muted-2"><i class="fa-solid fa-location-dot"></i>{{item.loction}}</span>
									<div class="lists_property_price">
										<div class="lists_property_types">
											<div v-if="item.type === 'For Sale'" class="property_types_vlix sale">For Sale</div>
											<div v-if="item.type === 'For Rent'" class="property_types_vlix">For Rent</div>
											<div v-if="item.type === 'For Buy'" class="property_types_vlix buy">For Buy</div>
										</div>
										<div class="lists_property_price_value">
											<h4 class="text-primary">$4,240</h4>
										</div>
									</div>
								</div>
							</div>
							<div class="input-group">
								<router-link to="#" class="btn btn-light-primary fw-medium full-width">View & Compare</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="registermodal" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered login-pop-form" role="document">
				<div class="modal-content" id="registermodal">
					<span class="mod-close" data-bs-dismiss="modal" aria-hidden="true">
						<span class="svg-icon text-primary svg-icon-2hx">
							<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"/>
								<rect x="7" y="15.3137" width="12" height="2" rx="1" transform="rotate(-45 7 15.3137)" fill="currentColor"/>
								<rect x="8.41422" y="7" width="12" height="2" rx="1" transform="rotate(45 8.41422 7)" fill="currentColor"/>
							</svg>
						</span>
					</span>
					<div class="modal-body">
						<h4 class="modal-header-title">Log In</h4>
						<div class="d-flex align-items-center justify-content-center mb-3">
							<span class="svg-icon text-primary svg-icon-2hx">
								<svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M15.8797 15.375C15.9797 15.075 15.9797 14.775 15.9797 14.475C15.9797 13.775 15.7797 13.075 15.4797 12.475C14.7797 11.275 13.4797 10.475 11.9797 10.475C11.7797 10.475 11.5797 10.475 11.3797 10.575C7.37971 11.075 4.67971 14.575 2.57971 18.075L10.8797 3.675C11.3797 2.775 12.5797 2.775 13.0797 3.675C13.1797 3.875 13.2797 3.975 13.3797 4.175C15.2797 7.575 16.9797 11.675 15.8797 15.375Z" fill="currentColor"/>
									<path opacity="0.3" d="M20.6797 20.6749C16.7797 20.6749 12.3797 20.275 9.57972 17.575C10.2797 18.075 11.0797 18.375 11.9797 18.375C13.4797 18.375 14.7797 17.5749 15.4797 16.2749C15.6797 15.9749 15.7797 15.675 15.7797 15.375V15.2749C16.8797 11.5749 15.2797 7.47495 13.2797 4.07495L21.6797 18.6749C22.2797 19.5749 21.6797 20.6749 20.6797 20.6749ZM8.67972 18.6749C8.17972 17.8749 7.97972 16.975 7.77972 15.975C7.37972 13.575 8.67972 10.775 11.3797 10.375C7.37972 10.875 4.67972 14.375 2.57972 17.875C2.47972 18.075 2.27972 18.375 2.17972 18.575C1.67972 19.475 2.27972 20.475 3.27972 20.475H10.3797C9.67972 20.175 9.07972 19.3749 8.67972 18.6749Z" fill="currentColor"/>
								</svg>
							</span>
						</div>
						<div class="login-form">
							<form>
							
								<div class="form-floating mb-3">
									<input type="email" class="form-control" placeholder="name@example.com">
									<label>Email address</label>
								</div>
								
								<div class="form-floating mb-3">
									<input type="password" class="form-control" placeholder="Password">
										eslint-disable-next-line no-mixed-spaces-and-tabs
									<label>Password</label>
								</div>
								
								<div class="form-group mb-3">
									<div class="d-flex align-items-center justify-content-between">
										<div class="flex-shrink-0 flex-first">
											<div class="form-check form-check-inline">
												<input class="form-check-input" type="checkbox" id="save-pass" value="option1">
												<label class="form-check-label" for="save-pass">Save Password</label>
											</div>	
										</div>
										<div class="flex-shrink-0 flex-first">
											<router-link to="" class="link fw-medium">Forgot Password?</router-link>	
										</div>
									</div>
								</div>
								
								<div class="form-group">
									<button type="button" class="btn btn-lg btn-primary fw-medium full-width rounded-2">LogIn</button>
								</div>
							</form>
						</div>
						<div class="modal-divider"><span>Or login via</span></div>
						<div class="social-login mb-3">
							<ul>
								<li><router-link to="" class="btn connect-fb"><i class="ti ti-facebook"></i>Facebook</router-link></li>
								<li><router-link to="" class="btn connect-google"><i class="ti ti-google"></i>Google+</router-link></li>
							</ul>
						</div>
						<div class="text-center">
							<p class="mt-4">Have't Any Account? <router-link to="/create-account" class="link fw-medium">Acreate An Account</router-link></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';

	import users from '@/assets/img/svg/users.svg'
	import add from '@/assets/img/svg/add.svg'
	import bar from '@/assets/img/svg/bar.svg'
	import logo from '@/assets/img/logo.svg'
	import logoLight from '@/assets/img/svg/logo-light.svg'

	import { useRoute } from 'vue-router';
	import { navProperty, navProperty2 } from '@/data/data';

    const activeMenu = ref({});
	const router = useRoute();
	const toggle = ref(false)
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
