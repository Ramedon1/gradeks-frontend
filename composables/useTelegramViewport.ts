import { init, viewport } from '@telegram-apps/sdk';

export const useTelegramViewport = () => {
  const initializeViewport = async () => {
    try {
      // First try the direct WebApp API
      if (window.Telegram?.WebApp) {
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.expand();

        if (window.Telegram.WebApp.isVersionAtLeast('8.0')) {
          window.Telegram.WebApp.requestFullscreen();
        }
      }

      // Then try the SDK approach as backup
      try {
        init();

        // Only proceed with SDK methods if they're available
        if (viewport?.mount?.isAvailable && viewport.mount.isAvailable()) {
          await viewport.mount();
          viewport.expand();
        }

        if (viewport?.requestFullscreen?.isAvailable && viewport.requestFullscreen.isAvailable()) {
          await viewport.requestFullscreen();
        }
      } catch (sdkError) {
        console.warn('SDK initialization failed:', sdkError);
        // Continue since we already tried the direct WebApp API
      }

      return true;
    } catch (error) {
      console.error('Error initializing Telegram viewport:', error);
      return false;
    }
  };

  const exitFullscreen = async () => {
    try {
      let success = false;

      // Try SDK first
      try {
        if (viewport?.exitFullscreen?.isAvailable && viewport.exitFullscreen.isAvailable()) {
          await viewport.exitFullscreen();
          success = true;
        }
      } catch (sdkError) {
        console.warn('SDK exitFullscreen failed:', sdkError);
      }

      // Fallback to direct WebApp API
      if (!success && window.Telegram?.WebApp?.isVersionAtLeast('8.0')) {
        window.Telegram.WebApp.exitFullscreen();
        success = true;
      }

      return success;
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
