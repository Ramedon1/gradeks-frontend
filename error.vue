<script setup lang="ts">

import Unauthorized from "~/pages/unauthorized.vue";
</script>

<template>
  <div id="container">
    <div id="view">
      <Unauthorized error_name="Ой, кажется такого пути не существует"
                    error_solution="Попробуйте чуть позже, или обратитесь к разработчику"/>
    </div>
  </div>
</template>

<style scoped>
#container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

#view {
  padding: 4.5rem 1.25rem 1rem;
  flex-grow: 1;
  width: 100%;
  min-width: 200px;
  max-width: 600px;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  box-sizing: border-box;
  position: relative;
  margin: auto;
}
</style>