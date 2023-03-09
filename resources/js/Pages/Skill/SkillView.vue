<template>
  <div v-for="categoryObj, index in dogStore.chosenDog.categories" :key="index" class="">
    <div @click="openCategory(categoryObj)" class="cursor-pointer">{{index}}</div>
  </div>
  <div v-if="openedCategory" class="mt-8">
    <div v-for="skill in openedCategory" :key="skill.id">{{ skill.name }}</div>
  </div>
</template>

<script setup>
import { useDogStore } from '../../../Stores/dog';
import { ref } from 'vue';

const dogStore = useDogStore();

const categories = dogStore.chosenDog.categories

// console.log(Object.keys(dogStore.chosenDog.categories))

// i need categories keys
const openedCategory = ref(null)

function openCategory(categoryObj) {
  openedCategory.value = categoryObj
  console.log(openedCategory.value)
}

</script>
