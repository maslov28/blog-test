<template>
    <div class="slider">
        <div class="slider__wrapper">
            <div 
                class="slider__items" 
                :style="{'margin-left': '-' + (100 * currentSlide) + '%'}"
            >
                <slot></slot>
            </div>
        </div>
        <div class="slider__dot-buttons">
            <span 
                class="slider__dot-btn" 
                :class="{'slider__dot-btn--active': currentSlide === idx }"
                v-for="(button, idx) of 4" 
                :key="button" 
                @click="currentSlide = idx"
            ></span>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const currentSlide = ref(0)

        return {
            currentSlide
        }
    }
}
</script>

<style lang="scss">
.slider {
    &__wrapper {
        overflow: hidden;
    }
    &__items {
        display: flex;
        transition: all ease .5s;
    }
    &__dot-buttons {
        text-align: center;
        padding-top: 26px;
    }
    &__dot-btn {
        display: inline-block;
        width: 8px;
        height: 8px;
        background-color: $slider-no-active;
        border-radius: 50%;
    }
    &__dot-btn:not(:last-child) {
        margin-right: 20px;
    }
    &__dot-btn--active {
        background-color: $slider-active;
    }
}
</style>