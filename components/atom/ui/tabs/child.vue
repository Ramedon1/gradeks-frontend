<script setup>
import {computed, inject} from 'vue';

const props = defineProps({
  index: {
    type: Number,
    required: true
  }
});

const activeTab = inject('activeTab');

const isActive = computed(() => activeTab.value === props.index);
</script>

<template>
  <div v-show="isActive">
    <slot></slot>
  </div>
</template>
