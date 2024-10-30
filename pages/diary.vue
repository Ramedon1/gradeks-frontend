<script lang="ts" setup>
import {ref} from 'vue';
import { useDiaryState } from '~/state/diary';

const { diary_info, spec_diary } = storeToRefs(useDiaryState());

const notifications = ref([
  {headline: 'New Message', message: 'You have received a new message.'},
  {headline: 'Update Available', message: 'A new update is available for download.'}
]);

const data = ref(diary_info.value);

</script>


<template>
  <div v-if="spec_diary?.diary_link != false" class="diary-content">
    <OrganismDiaryTopBar :notifications="notifications"/>
    <OrganismDiaryQuarterGrades :quarters="data"/>
  </div>
  <div v-else class="none-content">
    <div class="none-connect">
      <AtomBlocksNoneLinkDiary/>
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


.diary-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
}
</style>