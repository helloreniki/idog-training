<template>
  <AuthenticatedLayout>
    <Head title="Dashboard" />
    Number of skills: {{ dogStore.allSkillsForChosenDog.length }}
    <div class="text-3xl font-semibold mb-8">Random skill to practice on:</div>
    <div v-if="dogStore.randomSkill">
      <div class="capitalize font-semibold text-xl">{{ dogStore.randomSkill.name }}
        <span class="font-normal text-base"> - Category: {{ dogStore.randomSkill.category }}</span>
      </div>
    </div>

    <div class="mt-16">
      <h1>TODO</h1>
      <ul>
        <li>show upcomming trainings</li>
        <li>show upcomming trials</li>
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
import { useDogStore } from '../../Stores/dog.js'
import { ref, watch, computed } from 'vue'

const dogStore = useDogStore()


</script>
