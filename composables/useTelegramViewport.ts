/*
✨ CoonDev • http://dev.coonlink.fun/ 

 ▄█▄    ████▄ ████▄    ▄   ██▄   ▄███▄      ▄  
 █▀ ▀▄  █   █ █   █     █  █  █  █▀   ▀      █ 
 █   ▀  █   █ █   █ ██   █ █   █ ██▄▄   █     █
 █▄  ▄▀ ▀████ ▀████ █ █  █ █  █  █▄   ▄▀ █    █
 ▀███▀              █  █ █ ███▀  ▀███▀    █  █ 
                    █   ██                 █▐  
                                           ▐   
*/

export const useTelegramViewport = () => {
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