<script lang="ts" setup>
import { computed, defineAsyncComponent } from 'vue';

const props = defineProps({
  iconName: String,
  text: String,
  switch: Boolean,
  href: String,
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
</script>

<template>
  <NuxtLink :to="props.href" class="button-container">
    <div class="info-container">
      <component :is="iconComponent" v-if="iconComponent"/>
      <p :style="{ color: styleText() }" class="button-text">{{ text }}</p>
    </div>
    <AtomUiSwitch v-if="props.switch"/>
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
  border-radius: 16px;
  display: flex;
  padding: 8px 0;
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
