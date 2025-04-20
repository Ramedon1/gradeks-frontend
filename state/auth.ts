import {defineStore} from 'pinia';

export interface UserLoginInterface {
    telegram_data: string;
    version: string;
    platform: string;
}

export interface LoginAuthDataInterface {
    access_token: string;
    server_time: number;
}

interface ErrorStateInterface {
    detail: string | null;
}

export interface userInfo {
    user_id_telegram: string;
    first_name: string;
    last_name: string;
    username: string;
    language_code: string;
    photo_url: string;
}


export const useAuthStore = defineStore('auth', {
    state: () => ({
        loginData: null as LoginAuthDataInterface | null,
        userInfo: null as userInfo | null,
        authenticated: false,
        loading: false,
        serverStartTime: null as number | null,
        clientStartTime: null as number | null,
        error: {
            detail: null,
        } as ErrorStateInterface,
    }),
    actions: {
        async authenticateUser({telegram_data, version, platform}: UserLoginInterface) {
            try {
                this.loading = true;
                
                if (!telegram_data) {
                    console.error('Telegram data is missing');
                    this.error.detail = 'Telegram data is missing';
                    return;
                }

                const {data, status, error}: any = await useFetch('...', {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: {
                        telegram_data,
                        version,
                        platform,
                    },
                });
                
                this.loading = status;

                if (data.value) {
                    this.authenticated = true;
                    this.loginData = data.value;
                    this.serverStartTime = data.value.server_time;
                    this.clientStartTime = performance.now();

                    const decodedData = decodeURIComponent(telegram_data);

                    const userInfoString = decodedData.match(/user=({.*?})/)[1];
                    this.userInfo = JSON.parse(userInfoString);

                } else {
                    console.error(`API error: ${error.statusCode}`);
                    this.error.detail = data?.value?.detail || 'Unknown error occurred';
                }
            } catch (error: any) {
                console.error('Authentication error:', error);
                this.error.detail = error?.message || 'Something went wrong. Please try again later.';
            } finally {
                this.loading = false;
            }
        },
        logoutUser() {
            this.authenticated = false;
            this.loginData = null;
        },
        currentServerTime() {
            return this.serverStartTime! + performance.now() - this.clientStartTime!;
        }
    },
});
