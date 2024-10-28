<script lang="ts" setup>
import {ref} from 'vue';

import {useDiaryState} from '~/state/diary';

const {new_grades, spec_diary} = storeToRefs(useDiaryState());
const notifications = ref([
  {headline: 'New Message', message: 'You have received a new message.'},
  {headline: 'Update Available', message: 'A new update is available for download.'}
]);

const new_grade_plane = ref(new_grades);
</script>

<template>
  <div v-if="(new_grade_plane?.length > 0) && (spec_diary?.diary_link === true)" class="main-content">
    <OrganismDashboardTopBar :avatar_size="40"
                             :notifications="notifications"
                             avatar_url="https://ss.sport-express.ru/userfiles/materials/202/2021794/full.jpg"/>
    <OrganismDashboardPlatesGrid :new_grade_plane="new_grade_plane"/>
  </div>
  <div v-else class="none-content">
    <div class="none-connect" v-if="spec_diary?.diary_link === false">
      <AtomBlocksNoneLinkDiary/>
    </div>
    <div v-else class="main-content">
      <OrganismDashboardTopBar :avatar_size="40"
                               :notifications="notifications"
                               avatar_url="https://ss.sport-express.ru/userfiles/materials/202/2021794/full.jpg"/>
      <AtomBlocksNoneGrade class="none-new-grades" header_text="Новых оценок - нет"
                           subheader_text="Постарайся их заработать или подожди когда тебе их выставят :)"/>
    </div>
  </div>
</template>


<style scoped>
.none-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.none-connect {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
}

.none-new-grades {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
}

.main-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
  align-self: stretch;
}
</style>