<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import Sidebar from '@/Parts/Sidebar.vue'
import { useDogStore } from '../../Stores/dog.js'

const dogStore = useDogStore()

const props = defineProps({
  dogs: Array
})

dogStore.dogs = props.dogs

// console.log(dogStore.dogs)

</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
        </template>

        <div class="flex gap-8">

          <Sidebar class="" />

          <div class="flex-1 my-8 bg-red-200">
            <h1>My dogs</h1>
            <div v-for="dog in dogStore.dogs" :key="dog.id" class="flex gap-4 mt-4 text-xl">{{ dog.name }}</div>
          </div>
        </div>
    </AuthenticatedLayout>
</template>
