<template>
  <div class="privacy-policy">
    <p class="text">Используя наш сервис, вы соглашаетесь соблюдать данные условия.</p>

    <h2 class="heading">1. Общие положения</h2>
    <p class="text">Gradeks предоставляет услуги, направленные на улучшение образовательного процесса путем сбора и предоставления официальных учебных данных. Услуги доступны только авторизированным пользователям, которые предоставили свой индификатор электронного дневника для получения учебных данных.</p>

    <h2 class="heading">2. Обязанности пользователя</h2>
    <p class="text">Вы обязуетесь:</p>
    <ol>
      <li>Предоставлять только достоверные данные, необходимые для использования сервиса</li>
      <li>Не использовать сервис в незаконных или недобросовестных целях</li>
      <li>Не нарушать безопасность и работоспособность системы Gradeks</li>
    </ol>

    <h2 class="heading">3. Конфиденциальность данных</h2>
    <p class="text">Gradeks обязуется соблюдать политику конфиденциальности и использовать только официальные данные, необходимые для предоставления услуг. Мы принимаем меры для защиты личных данных пользователей в соответствии с нашей <NuxtLink class="support" to="privacy-policy">Политикой конфиденциальности</NuxtLink></p>

    <h2 class="heading">4. Ограничение ответственности</h2>
    <p class="text">Gradeks не несет ответственности за любые утраты, возникшие в результате использования сервиса, включая:</p>
    <ol>
      <li>Ошибки или неточности данных, предоставленных сторонними источниками</li>
      <li>Технические сбои или временную недоступность сервиса</li>
    </ol>

    <h2 class="heading">5. Изменения в условиях использования</h2>
    <p class="text">Мы оставляем за собой право изменять настоящие условия использования в любое время без уведомления пользователей о изменениях. Продолжение использования сервиса будет считаться согласием с обновленными условиями.</p>

    <h2 class="heading">6. Контактная информация</h2>
    <p class="text">Если у вас возникли вопросы или предложения по поводу данных условий, вы можете связаться с нами по адресу <NuxtLink to="https://t.me/gradeks_support_bot"><a class="support">t.me/gradeks_support_bot</a>. </NuxtLink></p>
  </div>
</template>

<style scoped>
.text {
  color: var(--theme-text-color-black);
}

.support {
  color: var(--theme-link-color);
  text-decoration: underline;
}

.support:visited {
  color: var(--theme-link-color);
}

.heading {
  margin: 20px 0 0 0;
  color: var(--theme-text-color-green);
  font-family: "PFEncoreSansPro-Black", serif;
  font-size: 20px;
  font-weight: 600;
  width: 100%;
  line-height: 26px;
}

.privacy-policy {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  font-size: 15px;
}

h1, h2, ol {
  color: var(--theme-text-color-black);
}
</style>
