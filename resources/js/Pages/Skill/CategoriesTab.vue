<template>
 <div  class="flex gap-x-8 gap-y-4 flex-wrap items-center mb-8 pr-10">
  <div v-for="categoryObj, index in dogStore.chosenDog.categories" :key="index"
        class="uppercase text-xl"
        :class="{'underline font-semibold': dogStore.openedCategory === categoryObj}">
    <div @click="openCategory(categoryObj)" class="cursor-pointer">{{index}}</div>
  </div>
</div>
<PrimaryButton @click="$emit('addSkill')">Add new Skill</PrimaryButton>
</template>

<script setup>
import { useDogStore } from '../../../Stores/dog';
import PrimaryButton from '@/Components/PrimaryButton.vue'

const dogStore = useDogStore()

// const props = defineProps({
//   openedCategory: Object
// })

const emit = defineEmits(['addSkill'])

function openCategory(value){
  dogStore.openedCategory = value
}

</script>
