import { ref } from 'vue';

interface Toast {
    id: number;
    message: string;
    type: 'success' | 'error' | 'info' ;
}

const toasts = ref<Toast[]>([]);

const addToast = (message: string, type: 'success' | 'error' | 'info') => {
    const id = Date.now();
    toasts.value.push({ id, message, type });
    setTimeout(() => {
        removeToast(id);
    }, 2000);
};

const removeToast = (id: number) => {
    toasts.value = toasts.value.filter(toast => toast.id !== id);
};

export { toasts, addToast, removeToast };