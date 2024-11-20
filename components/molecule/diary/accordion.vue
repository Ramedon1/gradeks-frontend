<script lang="ts" setup>
import {ref} from 'vue';

const isActive = ref(false);
const panel = ref(null);
import {themeParams} from "@telegram-apps/sdk";

const toggleAccordion = () => {
  const el = panel.value;
  if (isActive.value) {
    el.style.height = el.scrollHeight + 'px';
    requestAnimationFrame(() => {
      el.style.height = '0';
    });
  } else {
    el.style.height = '0';
    requestAnimationFrame(() => {
      el.style.height = el.scrollHeight + 'px';
    });
  }

  isActive.value = !isActive.value;
};

const props = defineProps({
  quarter_date: String,
  quarter_name: String,
  type_grade: String,
  subjects: [{
    subject_name: String,
    grades: [{
      coff: Number,
      grade: Number,
      date: String
    }],
  }]
});

function lightenColor(color, percent) {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = ((num >> 8) & 0x00ff) + amt;
  const B = (num & 0x0000ff) + amt;

  return (
      "#" +
      (0x1000000 +
          (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
          (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
          (B < 255 ? (B < 1 ? 0 : B) : 255))
          .toString(16)
          .slice(1)
  );
}

</script>

<template>
  <button :class="['accordion', { active: isActive, 'padding-active': isActive }]" @click="toggleAccordion">
    <span class="container">
      <span class="quarter-name">{{ props.quarter_name }}</span>
      <AtomQuarterGradesDateBadge :date="props.quarter_date"/>
    </span>
    <AtomQuarterGradesChevronArrow
        :color="themeParams.isMounted() ? lightenColor(themeParams.accentTextColor, 30) : '#EDF1EF'"
        :isActive="isActive"
    />

  </button>

  <div ref="panel" :class="['panel', { open: isActive }]">
    <transition name="fade">
      <div v-if="isActive" class="panel-content">
        <OrganismDiaryPanel
            v-for="(subject, index) in props.subjects"
            :key="index"
            :grades="subject.grades"
            :new_type_grade="subject.new_type_grade"
            :old_type_grade="subject.old_type_grade"
            :subject_name="subject.subject_name"
            :type_grade="props.type_grade"
        />
      </div>
    </transition>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 380px;
}

.panel-content {
  padding: 20px 12px;
}

.accordion {
  display: flex;
  padding: 12px;
  flex: 1 1 auto;
  justify-content: space-between;
  align-items: center;
  background: var(--theme-accent-text-color-deep-green);
  width: 100%;
  gap: 5px;
  text-align: left;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
}

.quarter-name {
  color: var(--theme-button-text-color-white);
  font-family: "PFEncoreSansPro-Regular", serif;
  font-size: 17px;
  margin: 0 0 0 10px;
  line-height: 16px;
}

.panel {
  overflow: hidden;
  height: 0;
  transition: height 0.4s ease;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.panel.open {
  height: auto;
}

@media (max-width: 500px) {
  .container {
    width: 340px;
  }
}
</style>
