<script lang="ts" setup>
import {ref} from 'vue';


const isActive = ref(false);
const panel = ref(null);

const toggleAccordion = () => {
  const el = panel.value;
  console.log('el', el);
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

</script>

<template>
  <button :class="['accordion', { active: isActive, 'padding-active': isActive }]" @click="toggleAccordion">
    <span class="quarter-name">{{ props.quarter_name }}</span>
    <AtomQuarterGradesDateBadge :date="props.quarter_date"/>
    <AtomQuarterGradesChevronArrow :isActive="isActive"/>
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
            :type_grade="subject.type_grade"
        />
      </div>
    </transition>
  </div>
</template>


<style scoped>
.panel-content {
  padding: 10px 12px;
}

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
</style>
