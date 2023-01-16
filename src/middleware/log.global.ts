export default defineNuxtRouteMiddleware((context) => {
    console['info'](context)
    console.log('Global middleware: ' + context.fullPath)
})