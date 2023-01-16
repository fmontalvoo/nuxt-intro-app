import { defineStore } from 'pinia'

export const useTestStore = defineStore('test', {
    state: () => ({
        message: 'Hello World'
    }),
    actions: {
        setMessage(message: string) {
            this.message = message
        }
    },
    getters: {
        upper(): string {
            return this.message.toUpperCase()
        }
    }
})