<script setup lang="ts">
const { share, canShare } = useShare()
</script>

<template>
    <ContentDoc path="/home" />
    <button v-if="canShare" @click="share('Test', 'Test text', 'www.google.com.ec')">Compartir</button>
</template>