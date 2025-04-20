import { init, viewport } from '@telegram-apps/sdk';

export const useTelegramViewport = () => {
  const waitForFullscreen = () => {
    return new Promise((resolve) => {
      let attempts = 0;
      const maxAttempts = 10;

      const checkFullscreen = () => {
        if (window.Telegram?.WebApp?.isFullscreen || attempts >= maxAttempts) {
          resolve(window.Telegram?.WebApp?.isFullscreen || false);
          return;
        }
        attempts++;
        setTimeout(checkFullscreen, 100);
      };

      checkFullscreen();
    });
  };

  const initializeViewport = async () => {
    try {
      // First try the direct WebApp API
      if (window.Telegram?.WebApp) {
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.expand();

        if (window.Telegram.WebApp.isVersionAtLeast('8.0')) {
          // Add event listener for fullscreen changes
          window.Telegram.WebApp.onEvent('fullscreenChanged', () => {
            console.log('Fullscreen state changed:', window.Telegram.WebApp.isFullscreen);
          });

          window.Telegram.WebApp.onEvent('viewportChanged', (event) => {
            console.log('Viewport changed, isStateStable:', event.isStateStable);
          });

          // Request fullscreen and wait for confirmation
          window.Telegram.WebApp.requestFullscreen();
          const isFullscreen = await waitForFullscreen();
          console.log('Fullscreen state after wait:', isFullscreen);

          // If not fullscreen, try requesting again after a short delay
          if (!isFullscreen) {
            await new Promise(resolve => setTimeout(resolve, 500));
            window.Telegram.WebApp.requestFullscreen();
          }
        }
      }

      // Then try the SDK approach as backup
      try {
        init();

        if (viewport?.mount?.isAvailable && viewport.mount.isAvailable()) {
          await viewport.mount();
          viewport.expand();
        }

        if (viewport?.requestFullscreen?.isAvailable && viewport.requestFullscreen.isAvailable()) {
          await viewport.requestFullscreen();
        }
      } catch (sdkError) {
        console.warn('SDK initialization failed:', sdkError);
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
