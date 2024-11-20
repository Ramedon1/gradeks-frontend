import {themeParams} from "@telegram-apps/sdk";


type StoredSettings = {
    settings: string;
    data: string;
};

const setData = (settings: string, data: string): void => {
    localStorage.setItem(
        settings,
        JSON.stringify({
            value: data,
        })
    );
};

const getSettings = (settings: string): string | null => {
    const storedSettings = localStorage.getItem(settings);
    if (storedSettings) {
        const parsedSettings = JSON.parse(storedSettings);
        return parsedSettings.value.toString();
    }
    return null;
};


const initializeDefaults = () => {
    const isFirstVisit = !localStorage.getItem('isInitialized');
    if (isFirstVisit) {
        setData('filter', 'quarter')
        if (themeParams.isMounted()) {
            setData('theme', 'telegram')
        } else {
            setData('theme', 'light')
        }
        localStorage.setItem('isInitialized', 'true');
    }
};

export {initializeDefaults, getSettings, setData};