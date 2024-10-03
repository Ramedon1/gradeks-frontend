<script lang="ts" setup>
import {nextTick, ref} from 'vue';

const props = defineProps({
  quarter_date: String,
  quarter_name: String,
  subjects: [{
    subject_name: String,
    grades: [{
      coff: Number,
      grade: Number,
      date: String
    }],
    type_grade: String,
    new_type_grade: Number,
    old_type_grade: Number
  }]
});

// TODO Проблема в том, что если isActive true, то при клике на аккордион, он закрывается но с лагами, фиксануть
const isActive = ref(false);

const toggleAccordion = () => {
  isActive.value = !isActive.value;
};

const beforeEnter = (el: HTMLElement) => {
  Object.assign(el.style, {height: '0', opacity: '0', padding: '0 12px'});
};

const enter = (el: HTMLElement) => {
  Object.assign(el.style, {height: `${el.scrollHeight}px`, opacity: '1', padding: '12px'});
};

const leave = (el: HTMLElement) => {
  el.style.height = `${el.scrollHeight}px`;
  nextTick(() => Object.assign(el.style, {height: '0', opacity: '0', padding: '0 12px'}));
};
</script>

<template>
  <button v-if="props.subjects" :class="['accordion', { active: isActive }]" @click="toggleAccordion">
    <span class="quarter-name">{{ props.quarter_name }}</span>
    <AtomQuarterGradesDateBadge :date="props.quarter_date"/>
    <AtomQuarterGradesChevronArrow :isActive="isActive"/>
  </button>
  <transition name="accordion-transition"
              @enter="enter" @leave="leave" @before-enter="beforeEnter">
    <div v-if="isActive" class="panel">
      <OrganismDiaryPanel
          v-for="(subject, index) in props.subjects"
          :key="index"
          :new_type_grade="subject.new_type_grade"
          :old_type_grade="subject.old_type_grade"
          :subject_name="subject.subject_name"
          :type_grade="subject.type_grade"
          :grades="subject.grades"
      />
    </div>
  </transition>
</template>

<style scoped>
.accordion {
  display: flex;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  background: #11241c;
  width: 100%;
  gap: 5px;
  text-align: left;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
}

.quarter-name {
  color: #edf1ef;
  font-family: "PFEncoreSansPro-Regular", serif;
  font-size: 17px;
  margin: 0 0 0 10px;
  line-height: 16px;
}

.panel {
  overflow: hidden;
  transition: height 0.5s ease, opacity 0.5s ease, padding 0.5s ease;
}

.accordion-transition-enter-active,
.accordion-transition-leave-active {
  transition: height 0.5s ease, opacity 0.5s ease, padding 0.5s ease;
}

.accordion-transition-enter,
.accordion-transition-leave-to {
  height: 0;
  opacity: 0;
  padding: 0;
}
</style>