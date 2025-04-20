interface TelegramWebApp {
  expand: () => void;
  isVersionAtLeast: (version: string) => boolean;
  requestFullscreen: () => void;
  exitFullscreen: () => void;
  ready: () => void;
}

declare global {
  interface Window {
    Telegram?: {
      WebApp?: TelegramWebApp;
    };
  }
}

export {}; 