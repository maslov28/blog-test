<template>
    <section class="projects">
        <div class="container">
            <h2 class="projects__title">Проекты</h2>
            <p class="projects__subtitle">
                Мы опубликовываем только малую часть наших работ, так как большинство проектов находятся под NDA
            </p>
            <div class="projects__slider">
                <carousel-slider>
                    <carousel-item></carousel-item>
                    <carousel-item></carousel-item>
                    <carousel-item></carousel-item>
                    <carousel-item></carousel-item>
                </carousel-slider>
            </div>
        </div>
    </section>
</template>

<script>
import CarouselSlider from '@/components/common/slider/carousel-slider.vue'
import CarouselItem from '@/components/common/slider/slider-item/carousel-item.vue'
export default {
    components: {
        CarouselSlider,
        CarouselItem
    }
}
</script>

<style lang="scss">
.projects {
    padding-top: 140px;
    padding-bottom: 140px;
    &__title {
        font-weight: 800;
        font-size: 48px;
        line-height: 59px;
        text-align: center;
        padding-bottom: 32px;
    }
    &__subtitle {
        text-align: center;
        max-width: 553px;
        margin: 0 auto;
        padding-bottom: 83px;
    }
}
</style>