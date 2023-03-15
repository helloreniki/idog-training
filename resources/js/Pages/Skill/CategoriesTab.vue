<template>
 <div  class="flex gap-4 md:gap-x-8 md:gap-y-4 flex-wrap items-center mb-8 pr-10">
  <div v-for="categoryObj, index in dogStore.chosenDog.categories" :key="index"
        class="uppercase text-sm md:text-lg lg:text-xl border rounded-md px-3 py-2 bg-gray-50 text-gray-700"
        :class="{'underline font-semibold text-white bg-indigo-500': dogStore.openedCategory === categoryObj}">
    <div @click="openCategory(categoryObj)" class="cursor-pointer">{{index}}</div>
  </div>
</div>
<PrimaryButton @click="$emit('addSkill')">Add new Skill</PrimaryButton>
</template>

<script setup>
import { useDogStore } from '../../../Stores/dog';
import PrimaryButton from '@/Components/PrimaryButton.vue'

const dogStore = useDogStore()

const emit = defineEmits(['addSkill'])

function openCategory(value){
  dogStore.openedCategory = value
}

</script>
