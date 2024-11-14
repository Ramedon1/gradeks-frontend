<script lang="ts" setup>
const props = defineProps<{ theme: string, name: string }>();
</script>

<template>
  <div class="block-container">
    <NuxtImg
        :src="`img/${props.theme}_theme.png`"
        class="block-img"
        sizes="md:100px sm:100px xs:70px"
    />
    <p class="name">{{ props.name }}</p>
  </div>
</template>

<style scoped>
.name {
  margin: 10px 0 0;
  font-family: "PFEncoreSansPro-Regular", serif;
  font-size: 12px;
  color: var(--theme-text-color-green);
  width: auto;
}

.block-container {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.block-img {
  border-radius: 7px;
}
</style>
