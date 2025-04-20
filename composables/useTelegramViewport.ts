import { ref, readonly } from 'vue';

export const useTelegramViewport = () => {
  // Используем ref для отслеживания состояния
  const isFullscreenMode = ref(false);
  const viewportHeight = ref(0);
  const isExpanded = ref(false);

  const checkLaunchParams = () => {
    const urlParams = new URLSearchParams(window.location.hash.slice(1));
    return {
      fullscreen: urlParams.get('tgWebAppFullscreen') === '1',
      version: urlParams.get('tgWebAppVersion'),
      platform: urlParams.get('tgWebAppPlatform')
    };
  };

  // Функция для обновления состояния viewport
  const updateViewportState = () => {
    const webapp = window.Telegram?.WebApp;
    if (!webapp) return;

    viewportHeight.value = webapp.viewportHeight;
    isExpanded.value = webapp.isExpanded;

    // Проверяем параметры запуска для определения полноэкранного режима
    const { fullscreen } = checkLaunchParams();
    isFullscreenMode.value = fullscreen || (
        isExpanded.value && viewportHeight.value > 0 &&
        (viewportHeight.value / window.innerHeight > 0.9)
    );
  };

  const initializeViewport = async () => {
    try {
      const webapp = window.Telegram?.WebApp;
      if (!webapp) {
        console.error('Telegram WebApp is not available');
        return false;
      }

      // Проверяем параметры запуска
      const { version, platform } = checkLaunchParams();
      console.log('Launch params:', { version, platform });

      webapp.ready();

      // Enable closing confirmation
      webapp.enableClosingConfirmation();

      // Expand the viewport
      webapp.expand();

      // Wait for expansion
      await new Promise(resolve => setTimeout(resolve, 100));

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

  // Инициализируем состояние при создании composable
  updateViewportState();

  return {
    initializeViewport,
    exitFullscreen,
    isFullscreenMode: readonly(isFullscreenMode),
    viewportHeight: readonly(viewportHeight),
    isExpanded: readonly(isExpanded)
  };
};
