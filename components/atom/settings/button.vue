<script lang="ts" setup>
import { computed, defineAsyncComponent } from 'vue';

const {
  active: activeSwitch,
  toggle: toggleSwitch,
} = useSwitch()

const props = defineProps({
  iconName: String,
  text: String,
  switch: Boolean,
  href: String,
  redirect: String,
});

const iconComponent = computed(() => {
  if (props.iconName) {
    return defineAsyncComponent(() =>
        import(`@/components/atom/icons/${props.iconName}.vue`)
    );
  }
  return null;
});

function styleText() {
  if (props.iconName === 'trash') {
    return '#BA2532';
  }
  return '#11241C';
}

function handleRedirect() {
  if (props.redirect) {
    return props.redirect;
  }
  else {
    return props.href;
  }
}

function handleClick(event: Event) {
  if (props.switch) {
    event.preventDefault();
    toggleSwitch();
  }
}
</script>

<template>
  <NuxtLink :to="handleRedirect()" class="button-container" @click="handleClick">
    <div class="info-container">
      <component :is="iconComponent" v-if="iconComponent"/>
      <p :style="{ color: styleText() }" class="button-text">{{ text }}</p>
    </div>
    <AtomUiSwitch v-if="props.switch" :switch-state="activeSwitch"/>
    <div v-else>
      <AtomIconsArrowRight/>
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
  color: #11241C;
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

@media (max-width: 320px) {
  .button-text {
    font-size: 12px;
  }
}
</style>
