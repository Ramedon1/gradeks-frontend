<script setup lang="ts">
</script>

<template>
  <div class="nothing-container">
    <p class="third-text none-text">Кажется мы еще не нашли ваши оценки</p>
    <div class="accordion-container">
      <div class="accordion-transparent loading"></div>
      <div class="accordion-transparent loading"></div>
      <div class="accordion-transparent loading"></div>
      <div class="accordion-transparent loading"></div>
      <div class="accordion-transparent loading"></div>
    </div>
  </div>
</template>

<style scoped>
.nothing-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
}

.none-text {
  backdrop-filter: blur(20px);
  background-color: rgba(96, 96, 96, 0.07);
  padding: 10px;
  border-radius: 14px;
  color: rgba(138, 138, 138, 0.76);
  font-family: 'PFEncoreSansPro-Medium', serif;
  z-index: 2;
  position: absolute;
  width: 80%;
  font-size: 20px;
  text-align: center;
}

.accordion-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 80%;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
}

.accordion-transparent {
  width: 100%;
  height: 40px;
  border-radius: 10px;
  background-color: rgba(200, 200, 200, 0.3);
  overflow: hidden;
  position: relative;
}

.loading::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(200, 200, 200, 0) 0%, rgba(200, 200, 200, 0.4) 50%, rgba(200, 200, 200, 0) 100%);
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}
</style>
