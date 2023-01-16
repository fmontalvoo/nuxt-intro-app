<script setup lang="ts">
import { Fact } from '@/models/response.model';

// useFetch()
// useLazyFetch()
// useAsyncData()
// useLazyAsyncData()

// const {
//     data,
//     error,
//     execute,
//     pending,
//     refresh,
// } = await useLazyFetch<Fact[]>('https://cat-fact.herokuapp.com/facts')

const {
    data,
    error,
    pending
} = await useLazyAsyncData<Fact[]>(
    'facts',
    async () => {
        return $fetch('https://cat-fact.herokuapp.com/facts')
        // return fetch('https://cat-fact.herokuapp.com/facts').then((res) => res.json())
    })

</script>

<template>
    <div>
        <h2>Data page</h2>
        <h2 v-if="pending">Cargando...</h2>
        <h2 v-else-if="error || !data">Ocurrio un error</h2>
        <ul v-else>
            <li v-for="item of data">
                {{ item.text }}
            </li>
        </ul>
    </div>
</template>