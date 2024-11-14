<script lang="ts" setup>
import {getIconColor} from "assets/js/functions";

const props = defineProps({
  name: String,
});

</script>

<template>
  <div class="profile-container">
    <div class="profile-content">
      <div class="profile-info">
        <AtomUiProfileAvatar :size="65"/>
        <AtomTextsProfileName :name="props.name"/>
      </div>
      <MoleculeProfileEditProfile>
        <AtomIconsPen :color="getIconColor('--theme-accent-text-color-deep-green')" />
      </MoleculeProfileEditProfile>
    </div>
  </div>
</template>

<style scoped>
.profile-container {
  display: flex;
  padding: 17px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 16px;
  background: var(--theme-secondary-bg-color-white);
}

.profile-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

.profile-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
}
</style>