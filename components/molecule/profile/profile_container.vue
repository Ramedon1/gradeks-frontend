<script lang="ts" setup>
import {getIconColor} from "assets/js/functions";

const props = defineProps({
  name: String,
});

</script>

<template>
  <div class="profile-container" >
    <div class="profile-content">
      <div class="profile-info">
        <AtomUiProfileAvatar :size="150"/>
        <div class="name-container">
          <AtomTextsProfileName :name="props.name"/>
          <MoleculeProfileEditProfile>
            <AtomIconsPen :color="getIconColor('--theme-accent-text-color-deep-green')" />
          </MoleculeProfileEditProfile>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.name-container {
  display: flex;
  gap: 8px;
  margin-left: auto;
  margin-right: auto;
}


.profile-container {
  display: flex;
  padding: 17px 16px;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  justify-content: center;
  border-radius: 16px;
  background: none;
}

.profile-info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
}

.profile-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  align-self: stretch;
}
</style>