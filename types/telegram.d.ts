interface TelegramWebApp {
  ready: () => void;
  expand: () => void;
  isVersionAtLeast: (version: string) => boolean;
  requestFullscreen: () => void;
  exitFullscreen: () => void;
  isExpanded: boolean;
  viewportHeight: number;
  viewportStableHeight: number;
  MainButton: {
    show: () => void;
    hide: () => void;
  };
  onEvent: (eventType: string, callback: (event?: any) => void) => void;
  offEvent: (eventType: string, callback: (event?: any) => void) => void;
  enableClosingConfirmation: () => void;
  disableClosingConfirmation: () => void;
  setHeaderColor: (color: string) => void;
  setBackgroundColor: (color: string) => void;
  BackButton: {
    show: () => void;
    hide: () => void;
    isVisible: boolean;
  };
}

declare global {
  interface Window {
    Telegram?: {
      WebApp?: TelegramWebApp;
    };
  }
}

export {}; 