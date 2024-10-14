<script lang="ts" setup>
const {
  isVisible: isBottomSheetVisible,
  open: openBottomSheet,
  close: closeBottomSheet
} = useBottomSheet()


</script>



<template>
  <div class="edit-profile-container">
    <AtomIconsPen @click="openBottomSheet"/>
    <AtomUiBottomSheet :visible="isBottomSheetVisible" @update:visible="isBottomSheetVisible = $event" >
      <AtomTextsHeaderBottomSheet header="Редактирование профиля"/>
      <div class="edit-content-container">
        <AtomUiInput placeholder="Ссылка на список оценок" id="student_id" />
        <AtomUiSubmitButton style="width: 100%" @click="closeBottomSheet" text="Сохранить"/>
      </div>
    </AtomUiBottomSheet>
  </div>
</template>

<style scoped>
.edit-content-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.edit-profile-container {
  margin-top: 5px;
  margin-right: 5px;
}
</style>