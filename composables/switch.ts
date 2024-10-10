
export function useSwitch() {
    const active = ref(false);

    function activate() {
        active.value = true;
    }

    function deactivate() {
        active.value = false;
    }

    function toggle() {
        active.value = !active.value;
    }
    return {
        active,
        activate,
        deactivate,
        toggle
    };
}