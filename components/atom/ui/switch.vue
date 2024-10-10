<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  switchState: Boolean,
});

const debouncedSwitchState = ref(props.switchState);
let debounceTimeout: ReturnType<typeof setTimeout> | null = null;

watch(() => props.switchState, (newVal) => {

  if (debounceTimeout) {
    clearTimeout(debounceTimeout);
  }

  debounceTimeout = setTimeout(() => {
    debouncedSwitchState.value = newVal;
    // TODO отработка запроса свитча
  }, 300);
});
</script>

<template>
  <label class="switch">
    <input type="checkbox" v-model="props.switchState" :disabled="debouncedSwitchState !== props.switchState">
    <span class="slider round"></span>
  </label>
</template>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 42px;
  height: 23.8px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18.2px;
  width: 18.2px;
  left: 2.8px;
  bottom: 2.8px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  --webkit-transform: translateX(18.2px);
  -ms-transform: translateX(18.2px);
  transform: translateX(18.2px);
}

.slider.round {
  border-radius: 23.8px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
