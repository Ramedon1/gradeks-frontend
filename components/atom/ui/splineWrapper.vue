<script lang="ts" setup>
import {nextTick, onBeforeUnmount, onMounted, ref} from 'vue';

const props = defineProps<{
  url: string;
}>();

const splineRef = ref<HTMLElement | null>(null);

let observer: MutationObserver | null = null;

function removeLogo(): boolean {
  if (!splineRef.value) {
    return false;
  }

  const host = splineRef.value as any;
  const shadow = host.shadowRoot as ShadowRoot | null;
  if (!shadow) {
    return false;
  }

  const logoEl = shadow.querySelector('#logo');
  if (logoEl) {
    logoEl.remove();
    return true;
  }

  return false;
}

onMounted(async () => {
  await nextTick();

  if (removeLogo()) {
    return;
  }

  if (splineRef.value) {
    observer = new MutationObserver(() => {
      if (removeLogo()) {
        observer?.disconnect();
        observer = null;
      }
    });

    observer.observe(splineRef.value, {
      childList: true,
      subtree: true,
    });
  }
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
});
</script>
<template>
  <div class="spline-container">
    <spline-viewer
        ref="splineRef"
        :url="url"
        style="width: 100%; height: 100%;"
    ></spline-viewer>
  </div>
</template>

<style scoped>
.spline-container {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
