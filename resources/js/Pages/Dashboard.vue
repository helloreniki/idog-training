<template>
  <AuthenticatedLayout>
    <Head title="Dashboard" />
    <!-- <p class="text-gray-400 text-sm"> Number of all skills: {{ dogStore.allSkillsForChosenDog.length }} </p> -->
    <div v-if="!dogStore.chosenDog">
      <PrimaryButton  @click="openNewDogModal = true">Add a dog</PrimaryButton>
      <div v-if="dogStore.dogs.length > 0" class="flex gap-4 my-4">
        <div class="font-semibold">Choose a dog:</div>
        <div v-for="dog in dogStore.dogs" :key="dog.id" @click="dogStore.chooseDog(dog.id)" class="cursor-pointer">{{ dog.name }}</div>
      </div>
      <div class="text-red-500 text-sm my-3">Please choose or add a dog first.</div>
    </div>

    <div v-if="dogStore.randomSkill">
      <div class="text-3xl font-semibold mb-8">Random skill to practice on:</div>
      <div class="capitalize font-semibold text-xl">{{ dogStore.randomSkill.name }}
        <span class="font-normal text-base"> - Category: {{ dogStore.randomSkill.category }}</span>
      </div>
    </div>

     <!-- modal new dog -->
     <Modal :show="openNewDogModal" @close="openNewDogModal = false">
      <FormNewDog @formSubmitted="openNewDogModal = false" />
    </Modal>

    <div class="mt-16">
      <h1>TODO</h1>
      <ul>
        <li>show upcoming trainings</li>
        <li>show upcoming trials</li>
        <li></li>
      </ul>
    </div>
    <!-- all skills -->
    <!-- <div v-if="dogStore.chosenDog">
      <div v-for="skill, index in dogStore.allSkillsForChosenDog" :key="index">{{ skill.name }}</div>
    </div> -->

  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue'
import Modal from '@/Components/Modal.vue'
import FormNewDog from '@/Parts/FormNewDog.vue'
import { useDogStore } from '../../Stores/dog.js'
import { ref, watch, computed } from 'vue'

const dogStore = useDogStore()
const openNewDogModal = ref(false)


</script>
