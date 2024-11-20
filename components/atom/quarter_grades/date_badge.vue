<script lang="ts" setup>
import {watchEffect} from "vue";
import {themeParams} from "@telegram-apps/sdk";


const dateBadge = ref(null);

const date = defineProps({
  date: String,
});

watchEffect(() => {
  if (themeParams.isMounted()) {
    dateBadge.value?.classList.add("bright");
  } else {
    dateBadge.value?.classList.remove("bright");
  }
});

</script>

<template>
  <div ref="dateBadge" class="date-badge date-grades">
    {{ date.date }}
  </div>
</template>

<style scoped>
.date-badge.bright {
  filter: brightness(1.2);
}

.date-badge {
  display: flex;
  color: var(--theme-button-text-color-black);
  padding: 6px 8px;
  font-size: 14px;
  line-height: 16px;
  font-family: "date-grades", serif;
  align-items: center;
  border-radius: 8px;
  background: var(--theme-accent-text-color-light-green);
  white-space: nowrap;
}

@media (max-width: 420px) {
  .date-badge {
    font-size: 12px;
    line-height: 14px;
  }
}
</style>