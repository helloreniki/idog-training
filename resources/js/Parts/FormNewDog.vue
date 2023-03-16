<template>
  <div class="p-8">
      <h1 class="text-2xl font-semibold">Add new dog</h1>
      <form @submit.prevent="submitDogForm" class="flex flex-col gap-4 my-6">
        <InputLabel value="Dog name" />
        <TextInput v-model="formDog.name" class="px-2 py-1 border border-gray-500 shadow-md" />
        <div v-if="formDog.errors.name" class="text-sm text-red-500">{{ formDog.errors.name }}</div>

        <InputLabel value="Breed" />
        <TextInput v-model="formDog.breed" class="px-2 py-1 border border-gray-500 shadow-md" />
        <div v-if="formDog.errors.breed" class="text-sm text-red-500">{{ formDog.errors.breed }}</div>

        <InputLabel value="Date of birth" />
        <TextInput type="date" v-model="formDog.dob" class="px-2 py-1 border border-gray-500 shadow-md" />
        <div v-if="formDog.errors.dob" class="text-sm text-red-500">{{ formDog.errors.dob }}</div>

        <PrimaryButton class="self-start">Add new dog</PrimaryButton>
      </form>
    </div>
</template>

<script setup>
import PrimaryButton from '@/Components/PrimaryButton.vue';
import { useForm } from '@inertiajs/vue3';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';

const emit = defineEmits(['formSubmitted'])

const formDog = useForm({
  name: null,
  breed: null,
  dob: null,
})

function submitDogForm() {
  formDog.post('/dog', {
    onSuccess: () => {
      formDog.reset()
      // openNewDogModal.value = false
      emit('formSubmitted')
    }
  })
}

</script>
