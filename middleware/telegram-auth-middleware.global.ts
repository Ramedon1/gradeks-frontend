import {init, mockTelegramEnv, parseInitData, retrieveLaunchParams, themeParams,} from "@telegram-apps/sdk";
import {useAuthStore, type UserLoginInterface} from "../state/auth";
import {useDiaryState} from "../state/diary";
import {getSettings, initializeDefaults} from "~/composables/useLocalStorage";
import {applyTheme} from "assets/js/functions";

const initDataRawMocked = "user=%7B%22id%22%3A646667177%2C%22first_name%22%3A%22Ramedon%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22ramedon%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FjyMbRbhD4Sby1w6rVXT7N-ShSD36qph9lAogP4Tjev8.svg%22%7D&chat_instance=1872905771921478843&chat_type=sender&auth_date=1734440065&signature=07-Re0J_FAtgQ_a9CnpCDkfPihbPvsxrMNfAPhmTZTf96w7HbTM333unzkIu_ZSHF9fy35tXc6dfh0An42p8Bg&hash=4679ace8a3d67cdf75920909b65930e294970614f7c919183a4c74b9ec1064d7";

export default defineNuxtRouteMiddleware(async (to, from) => {
    if (import.meta.env.VITE_DEBUG === "true") {
        mockTelegramEnv({
            themeParams: {
                accentTextColor: "#6ab2f2",
                bgColor: "#17212b",
                buttonColor: "#5288c1",
                buttonTextColor: "#ffffff",
                destructiveTextColor: "#ec3942",
                headerBgColor: "#17212b",
                hintColor: "#708499",
                linkColor: "#6ab3f3",
                secondaryBgColor: "#232e3c",
                sectionBgColor: "#17212b",
                sectionHeaderTextColor: "#6ab3f3",
                subtitleTextColor: "#708499",
                textColor: "#000000",
            },
            initData: parseInitData(initDataRawMocked),
            initDataRaw: initDataRawMocked,
            version: "7.2",
            platform: "tdesktop",
        });
    }
    init();

    const {initDataRaw, initData, platform, version} = retrieveLaunchParams();
    const {authenticateUser} = useAuthStore();
    const {authenticated, error, loginData} = storeToRefs(useAuthStore());
    const {loadAllDiary} = useDiaryState();
    const {access_token} = storeToRefs(useDiaryState());

    const login = async () => {
        await authenticateUser(<UserLoginInterface>{
            telegram_data: initDataRaw,
            platform: platform,
            version: version,
        });

        if (error.value.detail) {
            navigateTo("/unauthorized");
        }

        access_token.value = loginData.value?.access_token || null;

        initializeDefaults();
        const theme = getSettings("theme");
        applyTheme(theme);

        const period_name = getSettings("filter") || "quarter";
        await loadAllDiary(period_name);
    };


    if (initDataRaw) {
        themeParams.mount();
    } else {
        console.warn("Telegram login data is missing. Skipping themeParams.mount().");
    }


    if (to.path !== "/unauthorized" && !authenticated.value) {
        await login();
    }
});
