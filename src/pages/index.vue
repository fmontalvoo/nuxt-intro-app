<script setup lang="ts">
import { useTestStore } from '../stores/TestStore';

const { share, canShare } = useShare()

const testStore = useTestStore()
</script>

<template>
    <header>
        <nav>
            <nuxt-link to="/blog">Blog</nuxt-link>
            <nuxt-link to="/data">Data</nuxt-link>
        </nav>
    </header>
    <ContentDoc path="/home" />
    <h2>{{ testStore.upper }}</h2>
    <button class="btn" v-if="canShare" @click="share('Test', 'Test text', 'www.google.com.ec')">Compartir</button>
    <button @click="testStore.setMessage('Hola Mundo')">set message</button>

</template>

<style scoped>
a{
    margin-left: 0.5rem;
}
</style>