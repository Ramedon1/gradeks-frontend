import {mockTelegramEnv, parseInitData, retrieveLaunchParams} from "@telegram-apps/sdk";
import {useAuthStore, type UserLoginInterface} from "../state/auth";
import {useDiaryState} from "../state/diary";

const initDataRawMocked = "user=%7B%22id%22%3A646667177%2C%22first_name%22%3A%22Ramedon%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22ramedon%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1721852541&hash=c20ac1ed9427e3ebae1c03ca2b01d518482289fa1ecfc0721690bb9df480b80c"

export default defineNuxtRouteMiddleware((to, from) => {
    if (import.meta.env.VITE_DEBUG === 'true') {
        mockTelegramEnv({
            themeParams: {
                accentTextColor: '#6ab2f2',
                bgColor: '#17212b',
                buttonColor: '#5288c1',
                buttonTextColor: '#ffffff',
                destructiveTextColor: '#ec3942',
                headerBgColor: '#17212b',
                hintColor: '#708499',
                linkColor: '#6ab3f3',
                secondaryBgColor: '#232e3c',
                sectionBgColor: '#17212b',
                sectionHeaderTextColor: '#6ab3f3',
                subtitleTextColor: '#708499',
                textColor: '#f5f5f5',
            },
            initData: parseInitData(initDataRawMocked),
            initDataRaw: initDataRawMocked,
            version: '7.2',
            platform: 'tdesktop',
        });
    }

    const { initDataRaw, initData, platform, version } = retrieveLaunchParams();

    const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store

    const { authenticated, error, loginData } = storeToRefs(useAuthStore());

    const { loadAllDiary, getNewGrades } = useDiaryState()
    const { access_token } = storeToRefs(useDiaryState())

    const login = async () => {
        await authenticateUser(<UserLoginInterface>{telegram_data: initDataRaw, platform: platform, version: version}); // call authenticateUser and pass the user object

        if (error.value.detail) {
            navigateTo("/unauthorized");
        }

        access_token.value = loginData.value?.access_token || null

        await loadAllDiary()
    };

    // Пытаемся авторизоваться, если это не страница ошибки и мы ещё не авторизованы
    // router.getRoutes().some(route => route.path === to.path)
    if (to.path !== "/unauthorized" && !authenticated.value) {
        login();
    }
})