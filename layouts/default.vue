<script setup lang="ts">

</script>

<template>
  <div id="view">
    <NuxtPage/>
  </div>
  <div id="nav">
    <MoleculeNavbar/>
  </div>
</template>

<style scoped>
:global(body) {
  margin: 0;
  -webkit-tap-highlight-color: transparent;
}

#view {
  padding: 2.5rem 1.25rem 1rem;
  display: flex;
  flex-grow: 1;
  overflow-x: hidden;
  box-sizing: border-box;
  min-height: 100%;
  max-height: 100vh;
}

</style>