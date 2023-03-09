<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import Sidebar from '@/Parts/Sidebar.vue'
import DogNav from '@/Parts/DogNav.vue'
import { useDogStore } from '../../Stores/dog.js'

const dogStore = useDogStore()

// MOVE TO SHARED DATA, need it in layout, dogNav
// const props = defineProps({
//   dogs: Array
// })

// dogStore.dogs = props.dogs

// // if user has only 1 dog, make it chosenDog, if > 1, null
// if(props.dogs.length = 1){
//   dogStore.chosenDog = props.dogs[0]
// }


console.log(dogStore.dogs)

</script>

<template>
    <Head title="Dashboard" />
    DASHBOARD
</template>
