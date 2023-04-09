<template>
  <div class="bg-white w-full flex gap-8 px-4 py-3 items-center border-b">
    <!-- <div v-if="dogStore.chosenDog" class="font-semibold">Chosen Dog: {{ dogStore.chosenDog.name }}</div> -->
    <div v-if="!dogStore.chosenDog" class="text-red-500 text-sm">Please choose or add a dog first.</div>

    <div class="flex gap-6 items-center pr-12">
      <div  v-for="dog in $page.props.dogs" :key="dog.id"
            @click="dogStore.chooseDog(dog.id)"
            class="cursor-pointer"
            :class="dogStore.chosenDog?.id == dog.id ? 'font-semibold text-xl text-indigo-500' : ''"
      >
          {{ dog.name }}
      </div>
      <PrimaryButton  @click="openNewDogModal = true">Add a dog</PrimaryButton>
    </div>

    <!-- modal new dog -->
    <Modal :show="openNewDogModal" @close="openNewDogModal = false">
      <FormNewDog @formSubmitted="openNewDogModal = false" />
    </Modal>
  </div>

</template>

<script setup>
import { useDogStore } from '../../Stores/dog.js'
import PrimaryButton from '@/Components/PrimaryButton.vue';
import Modal from '@/Components/Modal.vue'
import FormNewDog from './FormNewDog.vue';
import { ref } from 'vue'
// import { usePage } from '@inertiajs/vue3';

const dogStore = useDogStore()
// const page = usePage()

const openNewDogModal = ref(false)


</script>
