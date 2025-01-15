<template>
    <div class="accordion border-0" id="generalac">
        <div v-for="(item, index) in data" :key="index" class="card mb-2">
            <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                    <button class="btn btn-link" :class="activeTab === item.id ? '' : 'collapsed'" type="button" @click="activeTab = item.id">
                        {{ item.title }}
                    </button>
                </h2>
            </div>
            <div id="collapseOne" class="collapse" :class="activeTab === item.id ? 'show' : ''">
                <div class="card-body">
                    <p class="ac-para">{{item.desc}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { defineProps, ref } from 'vue';

    const activeTab = ref(1)

    defineProps({
        data:Array
    })
</script>
