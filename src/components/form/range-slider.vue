<template>
    <div class="rg-slider">
        <MultiRangeSlider
            :min="0"
            :max="100"
            :min-value="sBarMinValue"
            :max-value="sBarMaxValue"
            :step="1.25"
            :range-margin="5"
            @input="update_sBarValues"
        />
    </div>
</template>

<script setup>
    import MultiRangeSlider from "multi-range-slider-vue";
    import "../../../node_modules/multi-range-slider-vue/MultiRangeSliderBlack.css";
    import "../../../node_modules/multi-range-slider-vue/MultiRangeSliderBarOnly.css";
</script>