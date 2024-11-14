<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue';

const props = defineProps({
  switchState: Boolean,
  activateFunction: Function,
  deactivateFunction: Function,
});

const debouncedSwitchState = ref(props.switchState);
let debounceTimeout: ReturnType<typeof setTimeout> | null = null;


watch(() => props.switchState, (newVal) => {
  if (debounceTimeout) {
    clearTimeout(debounceTimeout);
  }

  debounceTimeout = setTimeout(() => {
    debouncedSwitchState.value = newVal;
    if (newVal === true) {
      props.activateFunction && props.activateFunction();
    } else {
      props.deactivateFunction && props.deactivateFunction();
    }
  }, 500);
});
</script>



<template>
  <label class="switch">
    <input v-model="props.switchState" :disabled="debouncedSwitchState !== props.switchState" type="checkbox">
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
  background-color: var(--theme-accent-text-color-blue);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--theme-accent-text-color-blue);
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