<script lang="ts" setup>
import { computed, defineAsyncComponent, watch } from 'vue';
import {getIconColor} from "assets/js/functions";

const { active: activeSwitch, toggle: toggleSwitch } = useSwitch();

const props = defineProps({
  iconName: String,
  text: String,
  switch: Boolean,
  href: String,
  redirect: String,
  actionActive: Function,
  actionDeactive: Function,
});

const state = computed(() => activeSwitch.value);
watch(
    () => props.switch,
    (newValue) => {
      if (newValue !== null) {
        activeSwitch.value = newValue;
      }
    },
    { immediate: true }
);

const iconComponent = computed(() => {
  return defineAsyncComponent(() =>
      import(
          props.iconName
              ? `@/components/atom/icons/${props.iconName}.vue`
              : '@/components/atom/icons/arrow_right.vue'
          )
  );
});


function handleRedirect() {
  return props.redirect || props.href;
}

function handleClick(event: Event) {
  if (props.switch !== null) {
    event.preventDefault();
    toggleSwitch();
  }
}
</script>

<template>
  <NuxtLink @click="handleClick" :to="handleRedirect()" class="button-container">
    <div class="info-container">
      <component :is="iconComponent" :color="getIconColor('--theme-accent-text-color-deep-green')" v-if="props.iconName != null" />
      <p class="button-text">{{ text }}</p>
    </div>
    <AtomUiSwitch
        v-if="props.switch !== null"
        :switch-state="state"
        :deactivate-function="actionDeactive"
        :activate-function="actionActive"
    />
    <div v-else>
      <AtomIconsArrowRight :color="getIconColor('--theme-accent-text-color-deep-green')" />
    </div>
  </NuxtLink>
</template>

<style scoped>
.info-container {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.button-text {
  margin: 0;
  font-family: "PFEncoreSansPro-Regular", serif;
  color: var(--theme-text-color-green);
  font-size: 16px;
}

.button-container {
  text-decoration: none;
  border-bottom: 1px solid rgba(43, 43, 43, 0.05);
  display: flex;
  padding: 4px 0 10px 0;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  width: 100%;
}

@media (max-width: 480px) {
  .button-text {
    font-size: 14px;
  }
}

@media (max-width: 320px) {
  .button-text {
    font-size: 13px;
  }
}

@media (max-width: 280px) {
  .button-text {
    font-size: 12px;
  }
}
</style>
