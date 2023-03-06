<template>
  <div class="bg-white w-full flex gap-8 px-4 py-3 justify-between items-center border-b">
    <div v-if="dogStore.chosenDog" class="font-semibold">ChosenDog: {{ dogStore.chosenDog.name }}</div>
    <div v-else="" class="text-red-500 text-sm">Please choose a dog first.</div>
    <div  v-for="dog in dogStore.dogs" :key="dog.id"
          @click="dogStore.chooseDog(dog)"
          class="flex gap-4 pr-12 cursor-pointer"
    >
        {{ dog.name }}
    </div>

  </div>

</template>

<script setup>
import { useDogStore } from '../../Stores/dog.js'

const dogStore = useDogStore()
</script>
