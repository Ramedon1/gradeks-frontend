<script setup lang="ts">
const props = defineProps<{
  visible: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void;
}>();

function close() {
  emit('update:visible', false);
}
</script>

<template>
  <transition name="bottom-sheet">
    <div v-if="visible" @click="close" class="bottom-sheet-overlay">
      <div class="bottom-sheet" @click.stop>
        <!-- Close Button -->
        <button class="close-btn" @click="close">
          <AtomIconsCross/>
        </button>
        <!-- Card Content -->
        <slot></slot>
      </div>
    </div>
  </transition>
</template>


<style scoped>
.bottom-sheet-overlay {
  visibility: visible;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: #0008;
  backdrop-filter: blur(.5em);
  display: flex;
  align-items: end;
}

.bottom-sheet {
  position: relative;
  display: flex;
  width: 100%;
  padding: 1.5rem;
  margin-top: 6rem;
  flex-direction: column;
  border-radius: 1.5rem 1.5rem 0 0;
  --tw-bg-opacity: 1;
  background-color: rgb(256 256 256 / var(--tw-bg-opacity));
  background-size: cover;
  background-position: bottom;
}

.close-btn {
  position: absolute;
  top: .5em;
  right: .5em;
  border: none;
  -webkit-tap-highlight-color: transparent;
  background: transparent;
  font-size: 1.5rem;
  height: .5em;
  box-sizing: content-box;
  width: .5em;
  cursor: pointer;
  padding: .5em;
  border-radius: .75em;
  transition: transform .3s;

  & svg {
    display: block;
    height: .5em;
    width: .5em;
  }

  &:hover {
    transform: scale(1.25);
  }
}

.bottom-sheet-enter-active, .bottom-sheet-leave-active {
  & .bottom-sheet {
    transition: all 0.3s ease-in-out;
  }

  transition: all 0.3s ease-in-out;

}

.bottom-sheet-enter-from, .bottom-sheet-leave-to /* .bottom-sheet-leave-active in <2.1.8 */
{
  & .bottom-sheet {
    transform: translateY(100%);
  }

  background-color: transparent;
  backdrop-filter: blur(0px);
}
</style>