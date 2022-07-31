<template>
    <div class="slider__item">
        <div class="slider__item-block slider__item-block--a">
            <img class="slider__item-bg" src="@/assets/img/boat-bg.jpg">
            <div class="slider__item-content">
                <h4 class="slider__item-title">SailSpeak</h4>
                <p class="slider__item-text">Разработка маркетплейса по аренде яхт SailSpeak</p>
            </div>
        </div>
        <div class="slider__item-block slider__item-block--b">
            <img class="slider__item-bg" src="@/assets/img/car-bg.jpg">
            <div class="slider__item-content">
                <h4 class="slider__item-title">Быстрые займы</h4>
                <p class="slider__item-text">Разработка промо-сайта займы под залог ПТС</p>
            </div>
        </div>
        <div class="slider__item-block slider__item-block--c">
            <img class="slider__item-bg" src="@/assets/img/sculpture-bg.jpg">
            <div class="slider__item-content">
                <h4 class="slider__item-title">iReg</h4>
                <p class="slider__item-text">Система регистрирует авторское право по цене чашки кофе</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.slider__item {
    min-width: 1160px;
    display: grid;
    gap: 40px;
    grid-template-areas: 
        "a c"
        "b c";
    &-block {
        position: relative;
    }
    &-content {
        position: absolute;
        bottom: 40px;
        left: 40px;
        color: $text-color-light;
    }
    &-title {
        font-weight: 800;
        font-size: 24px;
        line-height: 28px;
        padding-bottom: 16px;
    }
    &-text {
        font-size: 16px;
        line-height: 24px;
        
    }
    &-block--a {
        grid-area: a;
    }
    &-block--a .slider__item-text {
        max-width: 240px;
    }
    &-block--b {
        grid-area: b;
    }
    &-block--b .slider__item-text {
        max-width: 240px;
    }
    &-block--c {
        grid-area: c;
    }
    &-block--c .slider__item-text {
        max-width: 325px;
    }
}
</style>