<script lang="ts" setup>
import {nextTick, ref} from 'vue';

const props = defineProps({
  subject: String,
  grades: {type: Array, default: () => []},
  quarter_name: String,
  quarter_date: String,
  type_grade: String,
  new_type_grade: Number,
  old_type_grade: Number
});

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
  <button :class="['accordion', { active: isActive }]" @click="toggleAccordion">
    <span class="quarter-name">{{ props.quarter_name }}</span>
    <AtomQuarterGradesDateBadge :date="props.quarter_date"/>
    <AtomQuarterGradesChevronArrow :isActive="isActive"/>
  </button>
  <transition name="accordion-transition"
              @enter="enter" @leave="leave" @before-enter="beforeEnter">
    <div v-if="isActive" class="panel">
      <MoleculeDiaryItemSubject
          :new_type_grade="props.new_type_grade"
          :old_type_grade="props.old_type_grade"
          :subject="props.subject"
          :type_grade="props.type_grade"
      />
      <MoleculeDiaryGradeList :grades="props.grades"/>
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