<script lang="ts" setup>
import { ref, watch } from 'vue';
import getGradeColor from '@/assets/js/functions.js';

const props_grade_badge = defineProps({
  grade: Number,
  coff: Number,
  date: String
});

const isExpanded = ref(false);
const gradeBadgeRef = ref(null);
const coffGradeRef = ref(null);

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};

watch(isExpanded, (newVal) => {
  if (gradeBadgeRef.value && coffGradeRef.value) {
    gradeBadgeRef.value.style.width = newVal ? '120px' : '50px';
    coffGradeRef.value.style.left = newVal ? '105px' : '35px';
  }
});
</script>

<template>
  <div class="grade_badge-container">
    <div class="coff-grade" ref="coffGradeRef">
      <p class="coff">{{ props_grade_badge.coff }}</p>
    </div>
    <transition name="slide">
      <div class="grade_badge" @click="toggleExpand" ref="gradeBadgeRef">
        <transition name="fade">
          <p key="grade" :style="{ color: getGradeColor(props_grade_badge.grade) }" class="grade">
            {{ props_grade_badge.grade }}
            <transition name="fade">
              <span v-if="isExpanded" class="slash-date"> / {{ props_grade_badge.date }}</span>
            </transition>
          </p>
        </transition>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.grade_badge-container {
  cursor: pointer;
}

.coff-grade {
  display: flex;
  width: 23px;
  height: 15px;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  left: 35px;
  top: 10px;
  flex-shrink: 0;
  border-radius: 3px;
  transition: left 0.5s ease;
  background: rgba(17, 36, 28, 0.80);
}

.coff {
  font-family: "date-grades", serif;
  line-height: 10px;
  font-size: 12px;
  margin: 0;
  color: #F4F8F6;
  text-align: center;
}

.grade {
  font-family: "date-grades", serif;
  color: #F4F8F6;
  line-height: 12px;
  text-align: center;
  margin: 0;
}

.grade_badge {
  display: flex;
  width: 50px;
  padding: 10px 0;
  border-radius: 8px;
  background: #EDF1EF;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: width 0.5s ease;
}

.slash-date {
  color: #9D9D9D;
}

/* Для контейнера анимация */
.slide-enter-active, .slide-leave-active {
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

/* Для текста анимация */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
