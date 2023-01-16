<script setup lang="ts">
const route = useRoute()

const { data } = await useAsyncData(
    'article',
    () => queryContent(`/blog/${route.params.slug}`).findOne()
)
</script>

<template>
    <ContentRenderer v-if="data" :value="data" />
</template>