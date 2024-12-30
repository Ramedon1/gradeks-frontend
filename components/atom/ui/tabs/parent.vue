<script setup>
import { provide, ref, onMounted, nextTick, watch, onUnmounted } from 'vue';

const tabs = ref([
  { label: 'Текущие' },
  { label: 'Годовые' },
]);

const activeTab = ref(0);
const indicatorStyle = ref({});

const activateTab = async (index) => {
  activeTab.value = index;
  await nextTick();
  updateIndicator();
};

const updateIndicator = () => {
  const activeButton = document.querySelector('.active.tab');
  if (activeButton) {
    const rect = activeButton.getBoundingClientRect();

    const offsetY = rect.width * activeTab.value;

    indicatorStyle.value = {
      width: `${rect.width - 20}px`,
      height: `${rect.height}px`,
      transform: `translate(${offsetY}px, ${0}px)`,
    };
  }
};

const handleResize = () => {
  updateIndicator();
};

onMounted(() => {
  updateIndicator();
  window.addEventListener('resize', handleResize);
});

watch(activeTab, () => {
  updateIndicator();
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

provide('tabs', tabs);
provide('activeTab', activeTab);
provide('activateTab', activateTab);
</script>

<template>
  <div class="tabs-parent">
    <div class="tabs">
      <div class="indicator" :style="indicatorStyle"></div>
      <button
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ active: activeTab === index }"
          class="tab"
          @click="activateTab(index)"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="tab-content">
      <slot :activeTab="activeTab"></slot>
    </div>
  </div>
</template>

<style scoped>
.tabs-parent {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.tabs {
  position: relative;
  display: flex;
  gap: 0;
  width: 300px;
  max-width: 100%;
  height: 50px;
  margin: 0 auto 20px;
  justify-content: center;
  align-items: center;
  background-color: var(--theme-secondary-bg-color-white);
  border-radius: 0.75rem;
  overflow: hidden;
}

.tab {
  cursor: pointer;
  font-family: PFEncoreSansPro-Regular, sans-serif;
  flex: 1;
  text-align: center;
  padding: 0.5rem 1rem;
  position: relative;
  z-index: 1;
  transition: color 0.3s;
  background: none;
  border: none;
  outline: none;
  color: var(--theme-hint-color-green);
}

.tab.active {
  color: var(--theme-button-text-color-white);
}

.indicator {
  position: absolute;
  background-color: var(--theme-accent-text-color-deep-green);
  transition: transform 0.3s ease, width 0.3s ease, height 0.3s ease;
  z-index: 0;
  margin-bottom: 5px;
  margin-top: 5px;
  margin-left: 10px;
  border-radius: 8px;
  left: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
