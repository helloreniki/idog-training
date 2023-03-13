<template>
  <p class="capitalize text-xl">{{ props.skill.name }}</p>
  <div class="text-sm flex gap-2 items-center">
    <input type="radio" v-model="form.status" value="todo" class="ml-1" @change="submitSkillStatus" />Todo
    <input type="radio" v-model="form.status" value="in_progress" class="ml-1" />In progress
    <input type="radio" v-model="form.status" value="done" class="ml-1" />Done
  </div>
</template>

<script setup>
import { useForm } from '@inertiajs/vue3'

const props = defineProps({
  skill: Object
})

const form = useForm({
  status: 'todo'
})


function submitSkillStatus(){
  console.log('submitSkillStatus')
  form.put('/skills/{skill}/skillstatus', props.skill)
}


</script>
