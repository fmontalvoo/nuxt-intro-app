<script setup lang="ts">
import { useTestStore } from '../stores/TestStore';

const { share, canShare } = useShare()

const testStore = useTestStore()
</script>

<template>
    <ContentDoc path="/home" />
    <h2>{{ testStore.upper }}</h2>
    <button v-if="canShare" @click="share('Test', 'Test text', 'www.google.com.ec')">Compartir</button>
    <button @click="testStore.setMessage('Hola Mundo')">set message</button>
</template>