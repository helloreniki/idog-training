<template>
  <div class="bg-white w-full flex gap-8 px-4 py-3 justify-between items-center border-b">
    <div v-if="dogStore.chosenDog" class="font-semibold">ChosenDog: {{ dogStore.chosenDog.name }}</div>
    <div v-else="" class="text-red-500 text-sm">Please choose a dog first.</div>
    <div class="flex gap-6 items-center pr-12">
      <div  v-for="dog in $page.props.dogs" :key="dog.id"
            @click="dogStore.chooseDog(dog.id)"
            class="cursor-pointer"
            :class="dogStore.chosenDog?.id == dog.id ? 'font-semibold text-xl text-indigo-500' : ''"
      >
          {{ dog.name }}
      </div>
    </div>

  </div>

</template>

<script setup>
import { useDogStore } from '../../Stores/dog.js'
// import { usePage } from '@inertiajs/vue3';

const dogStore = useDogStore()
// const page = usePage()

// console.log(page.props.dogs.length)
// if(page.props.dogs.length === 1){
//   dogStore.chosenDog = page.props.dogs[0]
// }

// i added this to dog.js store
// put dogs from shared data to store
// dogStore.dogs = page.props.dogs
// console.log(dogStore.dogs)
</script>
