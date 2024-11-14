<script lang="ts" setup>
import {ref} from 'vue';

import {useDiaryState} from '~/state/diary';
import {useAuthStore} from '~/state/auth';

const {userInfo} = storeToRefs(useAuthStore());
const {new_grades, spec_diary} = storeToRefs(useDiaryState());

const notifications = ref([
  {headline: 'New Message', message: 'You have received a new message.'},
  {headline: 'Update Available', message: 'A new update is available for download.'}
]);


const new_grade_plane = [
  {
    date: '11-01',
    coff: 2,
    grade: 3,
    old_grade: 2,
    subject: 'Math'
  },
  {
    date: '11-03',
    coff: 1,
    grade: 5,
    old_grade: null,  // Use null to show how `old_grade` can be conditionally undefined
    subject: 'Science'
  },
  {
    date: '11-05',
    coff: 6,
    grade: 5,
    old_grade: 3,
    subject: 'History'
  },
  {
    date: '11-07',
    coff: 4,
    grade: 4,
    old_grade: null,  // Another example with old_grade as null
    subject: 'English'
  }
];

</script>

<template>
  <div v-if="(new_grade_plane?.length > 0) && (spec_diary?.diary_link === true)" class="main-content">
    <OrganismDashboardTopBar :avatar_size="40"
                             :notifications="notifications"
    />
    <OrganismDashboardPlatesGrid :new_grade_plane="new_grade_plane"/>
  </div>
  <div v-else class="none-content">
    <div class="none-connect" v-if="spec_diary?.diary_link === false">
      <AtomBlocksNoneLinkDiary/>
    </div>
    <div v-else class="main-content">
      <div class="none-grade">
        <OrganismDashboardTopBar :avatar_size="40"
                                 :notifications="notifications"/>
        <AtomBlocksNoneGrade class="none-new-grades" header_text="Новых оценок - нет"
                             subheader_text="Постарайся их заработать или подожди когда тебе их выставят :)"/>
      </div>
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