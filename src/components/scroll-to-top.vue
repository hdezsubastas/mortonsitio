<template>
    <router-link id="back2Top" @click="scrollToTop" class="top-scroll" :class="scroll ? 'd-block' : 'd-none'"  title="Back to top" to="#"><i class="ti ti-arrow-up"></i></router-link>
</template>

<script setup>
    import { onMounted, ref } from 'vue';

    const scroll = ref(false)

    const scrollToTop = () =>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const handleScroll = () => {
        if (window.scrollY >= 50) {
            scroll.value = true
        } else {
            scroll.value = false
        }
    }

    onMounted(()=>{
		window.addEventListener('scroll', handleScroll);
	})
    
</script>
