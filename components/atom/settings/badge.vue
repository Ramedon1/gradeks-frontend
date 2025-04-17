<script lang="ts" setup>
const props = defineProps({
  text: String
});
</script>

<template>
  <div class="badge">
    <slot />
    <span class="text">{{ props.text }}</span>
  </div>
</template>

<style scoped>
.badge {
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  background-color: var(--theme-accent-text-color-blue);
  border-radius: 200px;
  color: var(--theme-text-color-green);
  padding: 8px 20px;
  font-size: 13px;
  font-family: "PFEncoreSansPro-Regular", serif;
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.text {
  font-size: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.badge ::v-deep(svg),
.badge ::v-deep(img),
.badge ::v-deep(i) {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

@media (max-width: 594px) {
  .badge {
    padding: 6px 15px;
    font-size: 10px;
    gap: 5px;
  }

  .text {
    font-size: inherit;
  }

  .badge ::v-deep(svg),
  .badge ::v-deep(img),
  .badge ::v-deep(i) {
    width: 16px;
    height: 16px;
  }
}
@media (max-width: 470px) {
  .badge {
    width: 100%;
  }
}

</style>
