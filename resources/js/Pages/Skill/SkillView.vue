<template>
  <AuthenticatedLayout>

    <div v-if="dogStore.chosenDog">
      <CategoriesTab @addSkill="openNewSkillModal" />
    </div>

    <div v-else class="text-sm text-red-500">Please choose a dog first. Above.</div>

    <div v-if="dogStore.openedCategory" class="mt-8 flex flex-col pr-10">
      <div v-for="skill in dogStore.openedCategory" :key="skill.id" class="flex gap-3 px-4 py-2 items-center odd:bg-white">
        <SkillItem :skill="skill" />
      </div>
    </div>

    <!-- modal -->
    <Modal :show="newSkillModalOpened" @close="newSkillModalOpened = false">
      <div class="p-8">
        <h1 class="text-2xl font-semibold">Add New Skill</h1>
        <!-- FORM -->
        <form @submit.prevent="submitForm" class="flex flex-col gap-4 my-6">
          <!-- dogs -->
          <div class="flex gap-4 items-center">
            <div v-for="dog in dogStore.dogs">
              <input type="checkbox" v-model="form.dog_ids" :value="dog.id"> {{ dog.name }}
            </div>
            <div v-if="form.errors.dog_ids" class="text-sm text-red-500">{{ form.errors.dog_ids }}</div>
          </div>

          <!-- category -->
          <div v-if="showNewCategoryInput === false" class="w-full flex flex-col gap-4">
            <InputLabel for="category" value="Choose category" />
            <SelectListbox :options="categories" v-model="form.category" />
            <div v-if="form.errors.category" class="text-sm text-red-500">{{ form.errors.category }}</div>
            <SecondaryButton type="button" @click="showNewCategoryInput = true" class="self-start">or input new Category</SecondaryButton>
          </div>
          <div v-if="showNewCategoryInput" class="flex flex-col gap-4">
            <InputLabel value="New Category" />
            <TextInput v-model="form.category" class="px-2 py-1 border border-gray-500 shadow-md" />
            <div v-if="form.errors.category" class="text-sm text-red-500">{{ form.errors.category }}</div>
            <SecondaryButton type="button" @click="showNewCategoryInput = false" class="self-start">or choose existing Category</SecondaryButton>
          </div>

          <!-- skill -->
          <InputLabel for="skill" value="Skill" />
          <TextInput v-model="form.name" class="px-2 py-1 border border-gray-500 shadow-md"/>
          <div v-if="form.errors.name" class="text-sm text-red-500">{{ form.errors.name }}</div>

          <!-- description -->
          <InputLabel for="description" value="Description" />
          <TextInput v-model="form.description" class="px-2 py-1 border border-gray-500 shadow-md" />
          <div v-if="form.errors.description" class="text-sm text-red-500">{{ form.errors.description }}</div>

          <!-- status -->
          <div class="flex gap-2 items-center">
            <input type="radio" v-model="form.status" value="todo">ToDo
            <input type="radio" v-model="form.status" value="in_progress">In progress
            <input type="radio" v-model="form.status" value="done">Done
          </div>
          <div v-if="form.errors.status" class="text-sm text-red-500">{{ form.errors.status }}</div>

          <PrimaryButton :disabled="form.processing" class="self-start mt-6">Add new skill</PrimaryButton>
        </form>
      </div>
    </Modal>
  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { useDogStore } from '../../../Stores/dog';
import { ref, computed, onUpdated, watch } from 'vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import Modal from '@/Components/Modal.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import SkillItem from '@/Pages/Skill/SkillItem.vue'
import CategoriesTab from './CategoriesTab.vue';

import { useForm, usePage, router } from '@inertiajs/vue3'
import SelectListbox from '@/Components/SelectListbox.vue';


const page = usePage()
const dogStore = useDogStore();

const emit = defineEmits(['addSkill', 'openCategory'])

const categories = computed(() => {
  if(dogStore.chosenDog){
   // need categories keys
   return Object.keys(dogStore.chosenDog.categories)
  } else {
    return null
  }
})


// const openedCategory = ref(null) // from categoryTab to dogStore: access everywhere, can set to null at dog change
const newSkillModalOpened = ref(null)
const showNewCategoryInput = ref(false)

const form = useForm({
  category: null,
  name: null,
  description: null,
  status: 'todo',
  dog_ids: [],
})

function openNewSkillModal(){
  newSkillModalOpened.value = true
}

function submitForm(){
  form.post("/skills-to-learn", {
    preserveScroll: true,
    preserveState: false,
    onSuccess: () => {
      form.reset()
      newSkillModalOpened.value = false
      // must reload to update page.props.dogs, otherwise page props stay the same
      router.reload('/skills-to-learn')
      // console.log(page.props.dogs) // se vedno niso updatani propsi
    },
  })
}

onUpdated(() => {
  // console.log('updated props', page.props.dogs) // sele tukaj se updatajo propsi
  dogStore.dogs = page.props.dogs
  console.log('updated dogs', dogStore.dogs)
})

</script>
