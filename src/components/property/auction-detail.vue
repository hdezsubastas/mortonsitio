<template>
    <div>
                        
        <div class="property_block_wrap style-2">
            <div class="property_block_wrap_header">
                <router-link data-bs-toggle="collapse" data-parent="#dsrp" data-bs-target="#clTwo" aria-controls="clTwo" to="" aria-expanded="true"><h4 class="property_block_title">Descripción</h4></router-link>
            </div>
            <div id="clTwo" class="panel-collapse collapse show">
                <div class="block-body">
                    <p class="text-white-space">{{ description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import '@vueform/multiselect/themes/default.css';
    import { ref, onMounted } from 'vue'
    import  Axios from 'axios';
    import { defineProps } from 'vue'

    const props = defineProps({
        sub:String
    })

    const sub = {sub: props.sub , subasta: props.sub};
    const description = ref(null);

    onMounted(() => {
        getData(); // <div>
    })

    const getData = async () => {
        try {
            const response = await  Axios.post('http://127.0.0.1/serverside/getAuction.php', sub);
            description.value = response.data.subasta_Des;
        } catch (error) {
            alert(error);
        } finally {
            console.log("terminado ");
        }
    };
    

</script>
