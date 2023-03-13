<template>
  <p class="capitalize text-xl">{{ props.skill.name }}</p>
  <div class="text-sm flex gap-2 items-center">
    <input type="radio" v-model="form.status" value="todo" class="ml-1" @change="submitSkillStatus" />Todo
    <input type="radio" v-model="form.status" value="in_progress" class="ml-1" @change="submitSkillStatus" />In progress
    <input type="radio" v-model="form.status" value="done" class="ml-1" @change="submitSkillStatus" />Done
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
