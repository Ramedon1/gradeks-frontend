export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    ssr: false,
    modules: ['@pinia/nuxt', '@nuxt/image', 'nuxt-aos'],
    css: [
        '@/assets/css/fonts.css',
        '@/assets/css/themes.css',
    ],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            title: 'Gradeks',
            script: [
                {
                    src: "https://telegram.org/js/telegram-web-app.js",
                    tagPriority: 0,
                    defer: true,
                },
            ],
        },
    },
    vite: {
        build: {
            chunkSizeWarningLimit: 10000,
        },
    },
    aos: {
        once: true,
    },
});