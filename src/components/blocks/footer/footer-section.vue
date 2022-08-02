<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__social">
          <img class="footer__social-logo" src="@/assets/img/logo-white.svg" alt="logo">
          <div class="footer__social-links">
            <a class="footer__social-link" href="#">
              <img class="footer__social-link-img" src="@/assets/img/facebook-logo.svg" alt="facebook logo">
            </a>
            <a class="footer__social-link" href="#">
              <img class="footer__social-link-img" src="@/assets/img/telegram-logo.svg" alt="telegram logo">
            </a>
            <a class="footer__social-link" href="#">
              <img class="footer__social-link-img" src="@/assets/img/instagram-logo.svg" alt="facebook logo">
            </a>
          </div>
        </div>
        <div class="footer__links">
          <div class="footer__links-block">
            <a class="footer__links-title-link" href="#">Компания</a>
            <div class="footer__links-content">
              <div class="footer__links-group">
                <a class="footer__link" href="#">Опыт</a>
                <a class="footer__link" href="#">Отзывы</a>
                <a class="footer__link" href="#">История</a>
                <a class="footer__link" href="#">Ценности</a>
                <a class="footer__link" href="#">Руководство</a>
              </div>
            </div>
          </div>
          <div class="footer__links-block">
            <a class="footer__links-title-link" href="#">Услуги</a>
            <div class="footer__links-content">
              <div class="footer__links-group">
                <a class="footer__link" href="#">Разработка MVP для стартапов</a>
                <a class="footer__link" href="#">Разработка SAAS сервисов</a>
                <a class="footer__link" href="#">Разработка CRM и ERP систем</a>
                <a class="footer__link" href="#">Разработка маркетплейсов</a>
                <a class="footer__link" href="#">Разработка порталов</a>
              </div>
              <div class="footer__links-group">
                <a class="footer__link" href="#">Разработка агрегаторов</a>
                <a class="footer__link" href="#">Разработка парсеров</a>
                <a class="footer__link" href="#">Проектирование интерфейсов</a>
                <a class="footer__link" href="#">Сотрудничество с digital и рекламными агентствами</a>
              </div>
            </div>
          </div>
          <div class="footer__links-block">
            <a class="footer__links-title-link" href="#">Аутсорс</a>
            <div class="footer__links-content">
              <div class="footer__links-group">
                <a class="footer__link" href="#">Аутсорс Django</a>
                <a class="footer__link" href="#">Аутсорс VueJs</a>
                <a class="footer__link" href="#">Аутсорс ReactJs</a>
                <a class="footer__link" href="#">Аутсорс UX/UI</a>
                <a class="footer__link" href="#">Аутсорс Devops</a>
              </div>
            </div>
          </div>
          <div class="footer__links-block">
            <a class="footer__link" href="#">Кейсы</a>
            <a class="footer__link" href="#">Карьера</a>
            <a class="footer__link" href="#">Блог</a>
            <a class="footer__link" href="#">Контакты</a>
          </div>
        </div>
        <div class="footer__bottom">
          <span class="footer__bottom-item">© 2020 idPowers</span>
          <div class="footer__bottom-right">
            <a class="footer__bottom-item" href="#">Публичная оферта</a>
            <a class="footer__bottom-item" href="#">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  background-color: $text-color-dark;
  color: $text-color-light;
  padding: 77px 0 44px;
  font-size: 14px;
  line-height: 24px;
  &__wrapper {
    display: grid;
    grid-template-areas: 
      "social links"
      "bottom bottom";
    justify-content: space-between;
  }
  &__social {
    grid-area: social;
    &-links {
      padding-top: 48px;
    }
    &-link {
      margin-right: 16px;
      opacity: .5;
    }
  }
  &__links {
    grid-area: links;
    max-width: 850px;
    display: grid;
    grid-template: 1fr 1fr / 300px 550px;
    padding-bottom: 10px;
    &-content {
        display: flex;
        justify-content: space-between;
      }
    &-block {
      padding-bottom: 36px;
      display: flex;
      flex-direction: column;
    }
    &-group {
      display: flex;
      flex-direction: column;
      max-width: 250px;
      opacity: .5;
    }
    &-title-link {
      margin-bottom: 16px;
      display: inline-block;
      width: max-content;
    }
  }
  &__link {
    margin-bottom: 6px;
    max-width: max-content;
  }
  &__bottom {
    grid-area: bottom;
    display: flex;
    justify-content: space-between;
    line-height: 17px;
    opacity: .2;
    &-item:not(:last-child) {
      margin-right: 40px;
    }
  }
}
</style>