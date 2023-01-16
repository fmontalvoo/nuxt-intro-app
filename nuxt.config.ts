// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src',
    modules: [
        '@nuxt/content',
        '@kevinmarrec/nuxt-pwa',
    ],
    pwa: {
        manifest: {
            lang: 'en',
            name: 'Nuxt PWA',
            short_name: 'Nuxt PWA',
            theme_color: '#ffffff',
            description: 'Nuxt PWA',
        }
    }
})
