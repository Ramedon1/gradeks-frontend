<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import {getIconColor} from "assets/js/functions.js";
import {hapticFeedbackCelection} from "assets/js/functions.js";

const activeDotPosition = ref(0);
const buttonWidths = ref([]);

const route = useRoute();

const calculateDotPosition = (index) => {
  const selectedButton = buttonWidths.value[index];
  if (selectedButton) {
    activeDotPosition.value = selectedButton.offsetLeft + selectedButton.offsetWidth / 2 - 3;
  }
};

onMounted(() => {
  const buttons = document.querySelectorAll('.navbar-button');
  buttonWidths.value = [...buttons];

  const routes = ['/', '/diary', '/profile'];
  const activeIndex = routes.findIndex((r) => r === route.path);
  calculateDotPosition(activeIndex);
});

watch(() => route.path, (newRoute) => {
  const routes = ['/', '/diary', '/profile'];
  const activeIndex = routes.findIndex((r) => r === newRoute);
  calculateDotPosition(activeIndex);
});



</script>

<template>
  <div class="navbar">
    <div class="navbar-buttons">
      <AtomNavbarButton @click="hapticFeedbackCelection()" class="navbar-button" url_to="/" text_button="Главная">
        <template #default="{ isActive }">
          <AtomIconsHome :color="getIconColor('--theme-accent-text-color-deep-green')" :isActive="isActive"/>
        </template>
      </AtomNavbarButton>
      <AtomNavbarButton @click="hapticFeedbackCelection()" class="navbar-button" url_to="/diary" text_button="Успеваемость">
        <template #default="{ isActive }">
          <AtomIconsDiary :color="getIconColor('--theme-accent-text-color-deep-green')"/>
        </template>
      </AtomNavbarButton>
      <AtomNavbarButton @click="hapticFeedbackCelection()" class="navbar-button" url_to="/profile" text_button="Профиль">
        <template #default="{ isActive }">
          <AtomUiProfileAvatar :size="30"/>
        </template>
      </AtomNavbarButton>
      <AtomNavbarActiveDot :position="activeDotPosition"/>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  height: 100%;
  background-color: var(--theme-section-bg-color-light-white);
  padding: 8px 20px 15px 20px;
  border-top: 2px solid var(--theme-section-separator-color-minty);
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: relative;
}

.navbar-buttons {
  display: flex;
  position: relative;
  width: 100%;
  justify-content: space-around;
}

.navbar-button {
  flex: 1;
  min-width: 70px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  position: relative;
}
</style>