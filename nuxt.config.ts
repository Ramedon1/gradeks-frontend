export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    ssr: false,
    modules: ['@pinia/nuxt'],
    css: [
        '@/assets/css/fonts.css',
    ]
})