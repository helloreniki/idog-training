<template>
  <AuthenticatedLayout>
    <Head title="Dashboard" />

    <div v-if="!dogStore.chosenDog">
      <div class="text-red-500 text-sm my-3">Please choose or add a dog first.</div>
    </div>

    <div v-if="dogStore.randomSkill">
      <div class="text-3xl font-semibold mb-8">Random skill to practice on:</div>
      <div class="capitalize font-semibold text-xl">{{ dogStore.randomSkill.name }}
        <span class="font-normal text-base"> - Category: {{ dogStore.randomSkill.category }}</span>
      </div>
    </div>

    <div class="mt-16 text-sm text-gray-400">
      <h1>TODO</h1>
      <ul>
        <li>show upcoming trainings</li>
        <li>show upcoming trials</li>
        <li></li>
      </ul>
    </div>

  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { useDogStore } from '../../Stores/dog.js'
import { onMounted } from 'vue'
import { usePage } from '@inertiajs/vue3';


const page = usePage()
const dogStore = useDogStore()

// const user = computed(() => page.props.auth.user)

onMounted(() => {
    dogStore.dogs = page.props.dogs
})


</script>
