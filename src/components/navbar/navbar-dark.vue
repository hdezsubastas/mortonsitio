<!-- eslint-disable no-mixed-spaces-and-tabs -->
<template>
	<div>
		<div class="topbar">
                <div class="container">
                    <div class="separator"></div>
                    <div class="row">
                        <div class="col col-sm-12 topbar-col">
							<div class="topbar-nav">
								<nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color:#fff!important;">
									<ul class="navbar-nav">
										<li class="first-nav"><router-link to="/como-vender" :class="current === '/como-vender' ? 'active' : ''">¿Cómo Vender?</router-link></li>
										<li class="first-nav"><router-link to="/como-comprar" :class="current === '/como-comprar' ? 'active' : ''">¿Cómo Comprar?</router-link></li>
										<li class="first-nav"><router-link to="/historia" :class="current === '/historia' ? 'active' : ''">Historia</router-link></li>
									</ul>
								</nav>
							</div>
							<div class="topbar-logos">
								<img :src="mexLogo" class="flag-logo" >
								<a href="http://localhost:8081"><img :src="ukLogo" class="flag-logo" ></a>
							</div>
						</div>
                    </div>
                </div> <!-- end container -->
            </div>
		<div class="header" :class="{'header-fixed': scroll, 'header-transparent dark': transparent,'header-light head-shadow': !transparent}">
			<div class="container">
				<nav id="navigation"  :class="windowWidth > 991 ? 'navigation navigation-landscape' : 'navigation navigation-portrait'">
					<div class="nav-header">
						<router-link to="/" class="nav-brand text-logo" >
							<span class="svg-icon text-primary svg-icon-2hx">
								<img :src="logoMorton">
							</span>
						</router-link>
						<div class="nav-toggle" @click="toggle = !toggle"></div>
					</div>
					<div class="nav-menus-wrapper nav-menus-wrapper-open" :class="{ 'nav-menus-wrapper-open': toggle}" :style="{'left': toggle ? '0%' : '-100%'}">
						<span class="nav-menus-wrapper-close-button" @click="toggle = !toggle">✕</span>
						<ul class="nav-menu">
							<li :class="{active: ['/calendario','/departamentos'].includes(current),show: activeMenu['index-page'] && activeMenu['index-page']['main']}" @mouseenter="handleMouseEnter('auction-page')" @mouseleave="handleMouseLeave('auction-page')"><router-link to="" class="d-flex align-items-center li-text">Subastas<span class="submenu-indicator"><span class="submenu-indicator-chevron"></span></span></router-link>
								<ul class="nav-dropdown nav-submenu" :style="{display: activeMenu['auction-page'] && activeMenu['auction-page']['main'] ? 'block' : 'none', pointerEvents: activeMenu['auction-page'] && activeMenu['auction-page']['main'] ? 'auto' : 'none'}">
									<li><router-link to="/calendario" :class="current === '/calendario' ? 'active' : ''">Calendario</router-link></li>    
									<li><router-link to="/resultados" :class="current === '/resultados' ? 'active' : ''">Resultados</router-link></li>
									<li :class="{active: ['/antiguedades','arte-moderno','/joyeria','/vinos'].includes(current),show: activeMenu['auction-page'] && activeMenu['auction-page']['main']}" @mouseenter="handleMouseEnter('auctions-page')" @mouseleave="handleMouseLeave('auctions-page')"><router-link to="" class="d-flex align-items-center justify-content-between">Departamentos<span class="submenu-indicator"><span class="submenu-indicator-chevron"></span></span></router-link>
										<ul class="nav-dropdown nav-submenu" :style="{display: activeMenu['auctions-page'] && activeMenu['auctions-page']['main'] ? 'block' : 'none', pointerEvents: activeMenu['auctions-page'] && activeMenu['auctions-page']['main'] ? 'auto' : 'none'}">
											<li><router-link to="/antiguedades" :class="current === '/antiguedades' ? 'active' : ''">Antiguedades y Libros</router-link></li>
											<li><router-link to="/arte-moderno" :class="current === '/arte-moderno' ? 'active' : ''">Arte Moderno y Contemporáneo</router-link></li>                                    
											<li><router-link to="/joyeria" :class="current === '/joyeria' ? 'active' : ''">Joyería y Relojes</router-link></li>                                    
											<li><router-link to="/vinos" :class="current === '/vinos' ? 'active' : ''">Vinos y Destilados</router-link></li>   
											<li><router-link to="/sabados" :class="current === '/sabados' ? 'active' : ''">Subastas de los Sabados</router-link></li>  
											<li><a href="https://mortonautosycamiones.com" target="_BLANK">Autos y Camiones</a></li>                                   
										</ul>
									</li>
								</ul>   
							</li>
							<li class="li-text"><router-link to="/cdmx" :class="current === '/cdmx' ? 'active' : ''">Ubicación</router-link></li>
							<li class="li-text"><router-link to="/contact" :class="current === '/contact' ? 'active' : ''">Contacto</router-link></li>
						</ul>
						
						<ul class="nav-menu nav-menu-social align-to-right">
							<li class="add-listing">
								<img :src="logoMiMorton" class="mimorton-logo" style="float:right;">
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
    import { onMounted, ref, defineProps } from 'vue';
	//import logo from '@/assets/img/logo.svg'
	import logoMorton from '@/assets/img/logo-morton.jpg';
	import logoMiMorton from '@/assets/img/mimorton-logo.png';
	import mexLogo from '@/assets/img/mex.jpg';
	import ukLogo from '@/assets/img/uk.jpg';

	import { useRoute } from 'vue-router';
	import { navProperty, navProperty2 } from '@/data/data';

	defineProps({
		transparent:Boolean
	})

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
