<script setup lang="ts">
const { data } = await useAsyncData('article', () => queryContent('/blog').find())
</script>

<template>
    <div>
        <h2>Blog</h2>
        <div v-if="data">
            <ul>
                <li v-for="article in data" :key="article._id">
                    <nuxt-link :to="article._path">
                        {{ article.title }}
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>