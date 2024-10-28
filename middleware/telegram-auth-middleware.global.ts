import {mockTelegramEnv, parseInitData, retrieveLaunchParams} from "@telegram-apps/sdk";
import {useAuthStore, type UserLoginInterface} from "../state/auth";
import {useDiaryState} from "../state/diary";


export default defineNuxtRouteMiddleware((to, from) => {

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