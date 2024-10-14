import { ref } from 'vue';

const activeId = ref(null);

export function useTooltip() {
    function toggle(id) {
        activeId.value = activeId.value === id ? null : id;
    }

    return {
        activeId,
        toggle
    };
}
