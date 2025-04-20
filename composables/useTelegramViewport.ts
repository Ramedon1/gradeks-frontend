import { ref, readonly } from 'vue';

export const useTelegramViewport = () => {
  // Используем ref для отслеживания состояния
  const isFullscreenMode = ref(false);
  const viewportHeight = ref(0);
  const isExpanded = ref(false);

  // Функция для обновления состояния viewport
  const updateViewportState = () => {
    const webapp = window.Telegram?.WebApp;
    if (!webapp) return;

    viewportHeight.value = webapp.viewportHeight;
    isExpanded.value = webapp.isExpanded;

    // Считаем приложение в полноэкранном режиме, если оно развернуто
    // и занимает почти всю высоту экрана
    const screenHeight = window.innerHeight;
    isFullscreenMode.value = isExpanded.value &&
        (viewportHeight.value / screenHeight > 0.9);
  };

  const initializeViewport = async () => {
    try {
      const webapp = window.Telegram?.WebApp;
      if (!webapp) {
        console.error('Telegram WebApp is not available');
        return false;
      }

      // Signal that the app is ready
      webapp.ready();

      // Enable closing confirmation
      webapp.enableClosingConfirmation();

      // Expand the viewport
      webapp.expand();

      // Wait for expansion
      await new Promise(resolve => setTimeout(resolve, 100));

      // Request fullscreen if version supports it
      if (webapp.isVersionAtLeast('8.0')) {
        webapp.requestFullscreen();
      }

      // Update state after all operations
      updateViewportState();

      // Add viewport change listener
      webapp.onEvent('viewportChanged', (event) => {
        if (event.isStateStable) {
          updateViewportState();
        }
      });

      return true;
    } catch (error) {
      console.error('Error initializing Telegram viewport:', error);
      return false;
    }
  };

  const exitFullscreen = async () => {
    try {
      const webapp = window.Telegram?.WebApp;
      if (!webapp) {
        return false;
      }

      if (webapp.isVersionAtLeast('8.0')) {
        webapp.exitFullscreen();
        isFullscreenMode.value = false;
        return true;
      }

      return false;
    } catch (error) {
      console.error('Error exiting fullscreen:', error);
      return false;
    }
  };

  return {
    initializeViewport,
    exitFullscreen,
    isFullscreenMode: readonly(isFullscreenMode),
    viewportHeight: readonly(viewportHeight),
    isExpanded: readonly(isExpanded)
  };
};