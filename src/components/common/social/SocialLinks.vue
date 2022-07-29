<template>
  <ul class="social-links">
    <li class="social-links__item">
      <a class="social-link" href="#">
        <img class="social-link__img" src="@/assets/img/linkedin-logo.svg" alt="Linkedin">
        <span class="social-link__text">Linkedin</span>
      </a>
    </li>
    <li class="social-links__item">
      <a class="social-link" href="#">
        <img class="social-link__img" src="@/assets/img/upwork-logo.svg" alt="Upwork">
        <span class="social-link__text">Upwork</span>
      </a>
    </li>
    <li class="social-links__item">
      <a class="social-link" href="#">
        <img class="social-link__img" src="@/assets/img/facebook-logo.svg" alt="Facebook">
        <span class="social-link__text">Facebook</span>
      </a>
    </li>
    <li class="social-links__item">
      <a class="social-link" href="#">
        <img class="social-link__img" src="@/assets/img/vk-logo.svg" alt="Vkontakte">
        <span class="social-link__text">Vkontakte</span>
      </a>
    </li>
    <li class="social-links__item">
      <a class="social-link" href="#">
        <img class="social-link__img" src="@/assets/img/telegram-logo.svg" alt="Telegram">
        <span class="social-link__text">Telegram</span>
      </a>
    </li>
    <li class="social-links__item">
      <a class="social-link" href="#">
        <img class="social-link__img" src="@/assets/img/instagram-logo.svg" alt="Instagram">
        <span class="social-link__text">Instagram</span>
      </a>
    </li>
    <li class="social-links__item">
      <a class="social-link" href="#">
        <img class="social-link__img" src="@/assets/img/youtube-logo.svg" alt="YouTube">
        <span class="social-link__text">YouTube</span>
      </a>
    </li>
  </ul>
</template>

<style lang="scss">
.social-links {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: .5;
  &__item:not(:last-child) {
    padding-right: 35px;
  }
  .social-link {
    display: flex;
    align-items: center;
    &__img {
      padding-right: 8px;
    }
    &__text {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
    }
  }
}
</style>