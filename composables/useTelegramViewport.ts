import { init, viewport } from '@telegram-apps/sdk';

export const useTelegramViewport = () => {
  const initializeViewport = async () => {
    try {
      init();

      // Signal that the app is ready to be displayed
      if (window.Telegram?.WebApp) {
        window.Telegram.WebApp.ready();
      }

      // Mount viewport if available
      if (viewport.mount.isAvailable()) {
        await viewport.mount();
        viewport.expand();
      }

      // Request fullscreen if available (Bot API 8.0+)
      if (viewport.requestFullscreen.isAvailable()) {
        await viewport.requestFullscreen();
      }

      // Fallback for older versions using WebApp directly
      if (window.Telegram?.WebApp) {
        window.Telegram.WebApp.expand();
        if (window.Telegram.WebApp.isVersionAtLeast('8.0')) {
          window.Telegram.WebApp.requestFullscreen();
        }
      }

      return true;
    } catch (error) {
      console.error('Error initializing Telegram viewport:', error);
      return false;
    }
  };

  const exitFullscreen = async () => {
    try {
      if (viewport.exitFullscreen.isAvailable()) {
        await viewport.exitFullscreen();
        return true;
      } else if (window.Telegram?.WebApp?.isVersionAtLeast('8.0')) {
        window.Telegram.WebApp.exitFullscreen();
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
    exitFullscreen
  };
}; 