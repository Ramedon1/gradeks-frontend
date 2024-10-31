<script lang="ts" setup>
import {useRoute} from 'vue-router';
import {computed} from 'vue';
import {useDiaryState} from "~/state/diary";
import {storeToRefs} from "pinia";
import {useAuthStore} from "~/state/auth";

const {authenticated, error} = storeToRefs(useAuthStore());
const {diary_loaded, is_active} = storeToRefs(useDiaryState());
import {Vue3Lottie} from "vue3-lottie";
import Loading from "@/public/animations/loading-gray.json";
import Unauthorized from "~/pages/unauthorized.vue";
import Blocked from "~/pages/blocked.vue";

const route = useRoute();
const hideNavbar = computed(() => {
  const pathsToHideNavbar = ['/report', '/rules', '/privacy-policy', '/deactivate'];
  return pathsToHideNavbar.includes(route.path);
});
</script>

<template>
  <div id="container">
    <div id="view" v-if="((authenticated || error.detail) && diary_loaded && is_active ) ">
      <!--      <div class="logo-container">-->
      <!--        <AtomUiLogo/>-->
      <!--      </div>-->
      <NuxtPage/>
    </div>
    <div v-else>
      <template v-if="route.path === '/unauthorized'">
        <Unauthorized error_name="Ой, что то пошло не так"
                      error_solution="Попробуйте чуть позже, или обратитесь к разработчику"/>
      </template>
      <template v-else-if="is_active === false">
        <Blocked/>
      </template>
      <div v-else>
        <Vue3Lottie :animation-data="Loading"
                    :height="200"
                    :width="200"
        />
      </div>
    </div>
    <div v-if="!hideNavbar && ((authenticated || error.detail) && diary_loaded)" id="nav">
      <MoleculeNavbar/>
    </div>
  </div>
</template>

<style scoped>

.logo-container {
  display: flex;
  justify-content: center;
}

:global(body) {
  margin: 0;
  -webkit-tap-highlight-color: transparent;
  height: 100vh;
  background-color: white;
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
