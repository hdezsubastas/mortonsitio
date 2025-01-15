<template>
    <div class="simple-sidebar sm-sidebar" :class="open ? 'd-block' : 'd-none d-lg-block'" id="filter_search">
        <div class="search-sidebar_header">
            <h4 class="ssh_heading">Close Filter</h4>
            <button @click="toggle" class="w3-bar-item w3-button w3-large"><i class="fa-regular fa-circle-xmark fs-5 text-muted-2"></i></button>
        </div>
        <div class="sidebar-widgets">
            <div class="dashboard-navbar">
                <div class="d-user-avater">
                    <img :src="user" class="img-fluid avater" alt="">
                    <h4>Adam Harshvardhan</h4>
                    <span>Canada USA</span>
                </div>
                <div class="d-navigation">
                    <ul>
                        <li :class="current === '/dashboard' ? 'active' : ''"><router-link to="/dashboard"><i class="fa-solid fa-gauge"></i>Dashboard</router-link></li>
                        <li :class="current === '/my-profile' ? 'active' : ''"><router-link to="/my-profile"><i class="fa-solid fa-address-card"></i>My Profile</router-link></li>
                        <li :class="current === '/bookmark-list' ? 'active' : ''"><router-link to="/bookmark-list"><i class="fa-solid fa-bookmark"></i>Bookmarked Listings</router-link></li>
                        <li :class="current === '/my-property' ? 'active' : ''"><router-link to="/my-property"><i class="fa-solid fa-building-circle-check"></i>My Properties</router-link></li>
                        <li :class="current === '/submit-property-dashboard' ? 'active' : ''"><router-link to="/submit-property-dashboard"><i class="fa-solid fa-house"></i>Submit New Property</router-link></li>
                        <li :class="current === '/change-password' ? 'active' : ''"><router-link to="/change-password"><i class="fa-solid fa-unlock"></i>Change Password</router-link></li>
                        <li><router-link to="#"><i class="fa-solid fa-power-off"></i>Log Out</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, defineProps, defineEmits } from 'vue';
    import { useRoute } from 'vue-router';
    import user from '@/assets/img/team-1.jpg';

    defineProps({
        open: Boolean,
    });

    const emit = defineEmits(['update:open']);

    const toggle = () => {
        emit('update:open', !open); 
    };

    const router = useRoute();
    const current = ref(router.path);

</script>
