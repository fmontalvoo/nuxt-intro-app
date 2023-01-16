<script setup lang="ts">
import { useTestStore } from '../stores/TestStore';

const { share, canShare } = useShare()

const testStore = useTestStore()
</script>

<template>
    <ContentDoc path="/home" />
    <h2 class="bg-primary-600 text-white px-8 py-25 text-2xl rounded-2xl">{{ testStore.upper }}</h2>
    <button class="btn" v-if="canShare" @click="share('Test', 'Test text', 'www.google.com.ec')">Compartir</button>
    <button @click="testStore.setMessage('Hola Mundo')">set message</button>
</template>