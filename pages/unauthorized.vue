<script setup lang="ts">


import {Vue3Lottie} from "vue3-lottie";
import DuckDev from "~/public/animations/duck-dev.json";

const props = defineProps({
  error_name: String,
  error_solution: String
});

function redirect() {
  reloadNuxtApp();
  return '/';
}
</script>

<template>
  <div class="texts">
    <Vue3Lottie
        :animation-data="DuckDev"
        :height="200"
        :width="200"

    />
    <p class="unauthorized-text">
      {{props.error_name}}
    </p>
    <p class="unauthorized-subtext">
      {{props.error_solution}}
    </p>
    <NuxtLink :to="redirect()">
      <svg class="button-reload" fill="#FFFFFFFF" width="17px" height="17px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M1,12A11,11,0,0,1,17.882,2.7l1.411-1.41A1,1,0,0,1,21,2V6a1,1,0,0,1-1,1H16a1,1,0,0,1-.707-1.707l1.128-1.128A8.994,8.994,0,0,0,3,12a1,1,0,0,1-2,0Zm21-1a1,1,0,0,0-1,1,9.01,9.01,0,0,1-9,9,8.9,8.9,0,0,1-4.42-1.166l1.127-1.127A1,1,0,0,0,8,17H4a1,1,0,0,0-1,1v4a1,1,0,0,0,.617.924A.987.987,0,0,0,4,23a1,1,0,0,0,.707-.293L6.118,21.3A10.891,10.891,0,0,0,12,23,11.013,11.013,0,0,0,23,12,1,1,0,0,0,22,11Z"/>
      </svg>
    </NuxtLink>
  </div>
</template>

<style scoped>
.button-reload {
  backdrop-filter: blur(20px);
  background-color: var(--theme-accent-text-color-gray);
  padding: 8px 20px;
  border-radius: 15px;
}
.unauthorized-subtext {
  font-family: "PFEncoreSansPro-Regular", serif;
  font-size: 16px;
  color: var(--theme-subtitle-text-color-black);
  margin: 0 0 12px;
}

.unauthorized-text {
  font-family: "PFEncoreSansPro-Black", serif;
  font-size: 20px;
  color: var(--theme-text-color-black);
  margin: 30px 0 10px;
}

.texts {
  max-width: 260px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
</style>