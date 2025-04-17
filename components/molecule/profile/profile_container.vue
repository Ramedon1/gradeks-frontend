<script lang="ts" setup>
import {getIconColor} from "assets/js/functions";
import {useDiaryState} from "~/state/diary";

const {referrals} = storeToRefs(useDiaryState())

const props = defineProps({
  name: String,
});

</script>

<template>
  <div class="profile-container">
    <div class="profile-content">
      <div class="profile-info">
        <AtomUiProfileAvatar :size="150"/>
        <div class="name-container">
          <div class="profile-data">
            <AtomTextsProfileName :name="props.name"/>
            <MoleculeProfileEditProfile>
              <AtomIconsPen :color="getIconColor('--theme-accent-text-color-deep-green')"/>
            </MoleculeProfileEditProfile>
          </div>
          <p class="counter-text">Ты пригласил/a {{ referrals?.length }} друзей</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.counter-text {
  font-size: 15px;
  margin: 0;
  font-family: "PFEncoreSansPro-Regular", serif;
  color: var(--theme-text-color-green);
  text-align: center;
}


.profile-data {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
}

.name-container {
  display: flex;
  gap: 8px;
  margin-left: auto;
  flex-direction: column;
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