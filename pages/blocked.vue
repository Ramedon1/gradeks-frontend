<script setup lang="ts">
import {Vue3Lottie} from "vue3-lottie";
import DuckDev from "~/public/animations/duck-block.json";
</script>

<template>
  <div class="texts">
    <Vue3Lottie
        :animation-data="DuckDev"
        :height="200"
        :width="200"
    />
    <p class="blocked-text">
      Ой-ой, кажется ты что то нарушил
    </p>
    <p class="blocked-subtext">
      У нас тут строгое правило - не нарушай и не будешь заблокирован
    </p>
    <p class="blocked-hide">
      Попробуй зайти позже или обратись к разработчику
    </p>
  </div>
</template>

<style scoped>
.blocked-hide {
  font-family: "PFEncoreSansPro-Regular", serif;
  font-size: 10px;
  opacity: 0.4;
  margin: 0 0 12px;
}

.blocked-subtext {
  font-family: "PFEncoreSansPro-Regular", serif;
  font-size: 16px;
  margin: 0 0 12px;
}

.blocked-text {
  font-family: "PFEncoreSansPro-Black", serif;
  font-size: 20px;
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