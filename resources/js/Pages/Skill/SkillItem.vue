<template>
  <p class="capitalize md:text-xl font-semibold min-w-fit">{{ props.skill.name }}</p>
  <div class="text-[0.7rem] sm:text-sm flex gap-2 items-center text-gray-700">
    <input type="radio" v-model="form.status" value="todo" class="ml-1 text-pink-400 focus:ring-pink-400" @change="submitSkillStatus" />Todo
    <input type="radio" v-model="form.status" value="in_progress" class="ml-1 text-yellow-400 focus:ring-yellow-400" @change="submitSkillStatus" />In progress
    <input type="radio" v-model="form.status" value="done" class="ml-1 text-green-400 focus:ring-green-400" @change="submitSkillStatus" />Done
  </div>
</template>

<script setup>
import { useForm } from '@inertiajs/vue3'
import { useDogStore } from '../../../Stores/dog';

const dogStore = useDogStore()

const props = defineProps({
  skill: Object
})

console.log(props.skill)

const form = useForm({
  status: props.skill.status
})


function submitSkillStatus(){
  console.log('submitSkillStatus')
  form.put(`/dogs/${dogStore.chosenDog.id}/skills/${props.skill.id}/skillstatus`)
}


</script>
