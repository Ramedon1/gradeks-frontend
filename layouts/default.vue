<script setup lang="ts">
</script>

<template>
  <div id="container">
    <div id="view">
      <NuxtPage/>
    </div>
    <div id="nav">
      <MoleculeNavbar/>
    </div>
  </div>
</template>

<style scoped>
:global(body) {
  margin: 0;
  -webkit-tap-highlight-color: transparent;
  height: 100vh;
}

#container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#view {
  padding: 4.5rem 1.25rem 1rem;
  flex-grow: 1;
  overflow-x: hidden;
  box-sizing: border-box;
}

#nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Ensures it stays on top of other content */
}
</style>
