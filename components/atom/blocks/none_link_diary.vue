<script setup lang="ts">
import {Vue3Lottie} from "vue3-lottie";
import duckJSON from "public/animations/duck-link.json";
</script>

<template>
  <div class="connection-diary">
    <div class="top-bar">
      <AtomUiLogo style="margin: auto auto 30px;" />
      <Vue3Lottie :animation-data="duckJSON"
                  :height="150"
                  :width="150"
      />
    </div>
    <div class="none-link-texts">
      <p class="none-link-text-main">Настройте свой дневник</p>
      <p class="none-link-text">Подключайте электронный дневник Оренбуржья и отслеживайте свои оценки!</p>
    </div>
  </div>
  <MoleculeProfileEditProfile>
    <AtomUiButtonsSubmit style="width: 100%" text="Настроить" />
  </MoleculeProfileEditProfile>

</template>

<style scoped>
.none-link-texts {
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
.none-link-text {
  max-width: 300px;
  color: var(--theme-subtitle-text-color-gray);
  text-align: center;
  font-family: "PFEncoreSansPro-Regular", serif;
  font-size: 15px;
  margin-top: 0;
}
.none-link-text-main {
  color: var(--theme-text-color-black);
  font-family: "PFEncoreSansPro-Medium", serif;
  font-size: 23px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 10px;
}

.connection-diary {
  justify-content: center;
  display: flex;
  flex-direction: column;
}
</style>