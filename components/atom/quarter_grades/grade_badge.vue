<script lang="ts" setup>
import { ref, watch, watchEffect } from 'vue';
import {getGradeColor} from '@/assets/js/functions.js';
import { useWebAppTheme } from "vue-tg";

const { themeParams } = useWebAppTheme();

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

watchEffect(() => {
  if (themeParams && themeParams.value && themeParams.value.section_bg_color) {
    coffGradeRef.value?.classList.add("bright");
  } else {
    coffGradeRef.value?.classList.remove("bright");
  }
});
</script>


<template>
  <div class="grade_badge-container">
    <div ref="coffGradeRef" class="coff-grade">
      <p class="coff">{{ props_grade_badge.coff }}</p>
    </div>
    <transition name="slide">
      <div ref="gradeBadgeRef" class="grade_badge" @click="toggleExpand">
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

.coff-grade.bright {
  filter: brightness(1.2);
}

.grade_badge.bright {
  filter: brightness(1.2);
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
  z-index: 1;
  background: var(--theme-hint-color-green);
}

.coff {
  font-family: "date-grades", serif;
  line-height: 10px;
  font-size: 12px;
  margin: 0;
  color: var(--theme-text-color-white);
  text-align: center;
}

.grade {
  font-family: "date-grades", serif;
  color: var(--theme-section-bg-color-light-white);
  line-height: 12px;
  text-align: center;
  margin: 0;
}

.grade_badge {
  display: flex;
  width: 50px;
  padding: 10px 0;
  border-radius: 8px;
  background: var(--theme-secondary-bg-color-white);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: width 0.5s ease;
}

.slash-date {
  color: var(--theme-hint-color-gray);
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
