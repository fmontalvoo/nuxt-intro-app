<script setup lang="ts">
import { useTestStore } from '../stores/TestStore';

const { share, canShare } = useShare()

const testStore = useTestStore()

const auth = useState('auth', () => false)
const login = () => {
    auth.value = !auth.value
}

</script>

<template>
    <header>
        <nav>
            <nuxt-link to="/blog">Blog</nuxt-link>
            <nuxt-link to="/data">Data</nuxt-link>
            <nuxt-link to="/protected">Protected</nuxt-link>
        </nav>
    </header>
    <ContentDoc path="/home" />
    <h2>{{ testStore.upper }}</h2>
    <button class="btn" v-if="canShare" @click="share('Test', 'Test text', 'www.google.com.ec')">Compartir</button>
    <button @click="testStore.setMessage('Hola Mundo')">set message</button>
    <br>
    <button @click="login">{{ auth? 'Logout': 'Login' }}</button>
</template>

<style scoped>
a {
    margin-left: 0.5rem;
}
</style>