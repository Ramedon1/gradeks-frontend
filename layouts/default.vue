<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const hideNavbar = computed(() => {
  const pathsToHideNavbar = ['/report', '/rules', '/privacy-policy', '/deactivate'];
  return pathsToHideNavbar.includes(route.path);
});
</script>

<template>
  <div id="container">
    <div id="view" key="$route.path">
      <transition mode="out-in" name="page">
        <NuxtPage/>
      </transition>
    </div>
    <div v-if="!hideNavbar" id="nav">
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
  overflow-x: hidden;
  box-sizing: border-box;
  position: relative;
  margin: auto;
}

#nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

#view {
  padding-bottom: 5rem;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
