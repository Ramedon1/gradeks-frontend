<script setup lang="ts">
import {Vue3Lottie} from "vue3-lottie";
import DuckSticker from "public/animations/duck-sticker.json";

const props = defineProps({
  header_text: String,
  subheader_text: String,
});
</script>

<template>
  <div class="none-grade">
    <div class="top-bar">
      <Vue3Lottie :animation-data="DuckSticker"
                  :height="180"
                  :width="180"
      />
    </div>
    <div class="none-grade-texts">
      <p class="none-grade-text-main">{{ props.header_text }}</p>
      <p class="none-grade-text-subtitle">{{ props.subheader_text }}</p>
    </div>
  </div>

</template>

<style scoped>
.none-grade-texts {
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
.none-grade-text-subtitle {
  color: var(--tg-theme-subtitle-text-color, #cfcfcf);
  max-width: 300px;
  text-align: center;
  font-family: "PFEncoreSansPro-Regular", serif;
  font-size: 15px;
  margin-top: 0;
}
.none-grade-text-main {
  color: var(--theme-text-color-black);
  font-family: "PFEncoreSansPro-Medium", serif;
  font-size: 23px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 10px;
}

.none-grade {
  justify-content: center;
  display: flex;
  flex-direction: column;
}

@media (max-height: 650px) {
  .none-grade{
    margin-top: 50px;
  }
  .none-grade-text-main {
    font-size: 20px;
  }
  .none-grade-text {
    font-size: 13px;
  }
}
</style>