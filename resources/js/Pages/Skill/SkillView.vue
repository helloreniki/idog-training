<template>
  <div class="flex gap-8 flex-wrap mb-8">
    <div v-for="categoryObj, index in dogStore.chosenDog.categories" :key="index"
         class="uppercase"
         :class="{'underline font-semibold': openedCategory === categoryObj}">
      <div @click="openCategory(categoryObj)" class="cursor-pointer">{{index}}</div>
    </div>
  </div>
  <PrimaryButton @click="openNewSkillModal">Add new Skill</PrimaryButton>
  <div v-if="openedCategory" class="mt-8">
    <div v-for="skill in openedCategory" :key="skill.id">{{ skill.name }}</div>
  </div>

  <!-- modal -->
  <Modal :show="newSkillModalOpened" @close="newSkillModalOpened = false">
    <div class="p-8">
      <h1 class="text-2xl font-semibold">Add New Skill</h1>
      <form @submit.prevent="submitForm" class="flex flex-col gap-4 my-6">
        <div v-if="showNewCategoryInput === false" class="w-full flex flex-col gap-4">
          <InputLabel for="category" value="Choose category" />

          <div class="w-full">
            <Listbox v-model="form.category">
              <div class="relative mt-1">
                <ListboxButton
                  class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left border border-gray-500 shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                >
                  <span class="block truncate">{{ form.category ?? "Choose category..." }}</span>
                  <span
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                  >
                    <ChevronUpDownIcon
                      class="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </ListboxButton>

                <transition
                  leave-active-class="transition duration-100 ease-in"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <ListboxOptions
                    class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  >
                    <ListboxOption
                      v-slot="{ active, selected }"
                      v-for="category, index in categories"
                      :key="index"
                      :value="category"
                      as="template"
                    >
                      <li
                        :class="[
                          active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-10 pr-4',
                        ]"
                      >
                        <span
                          :class="[
                            selected ? 'font-medium' : 'font-normal',
                            'block truncate',
                          ]"
                          >{{ category }}</span
                        >
                        <span
                          v-if="selected"
                          class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                        >
                          <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                      </li>
                    </ListboxOption>
                  </ListboxOptions>
                </transition>
              </div>
            </Listbox>
          </div>
          <div v-if="form.errors.category" class="text-sm text-red-500">{{ form.errors.category }}</div>

          <SecondaryButton type="button" @click="showNewCategoryInput = true" class="self-start">or input new Category</SecondaryButton>

        </div>
        <div v-if="showNewCategoryInput" class="flex flex-col gap-4">
          <InputLabel value="New Category" />
          <TextInput v-model="form.category" class="px-2 py-1 border border-gray-500 shadow-md" />
          <div v-if="form.errors.category" class="text-sm text-red-500">{{ form.errors.category }}</div>
          <SecondaryButton type="button" @click="showNewCategoryInput = false" class="self-start">or choose existing Category</SecondaryButton>
        </div>

        <InputLabel for="skill" value="Skill" />
        <TextInput v-model="form.name" class="px-2 py-1 border border-gray-500 shadow-md"/>
        <div v-if="form.errors.name" class="text-sm text-red-500">{{ form.errors.name }}</div>
        <InputLabel for="description" value="Description" />
        <div v-if="form.errors.description" class="text-sm text-red-500">{{ form.errors.description }}</div>
        <TextInput v-model="form.description" class="px-2 py-1 border border-gray-500 shadow-md" />
        <div class="flex gap-2 items-center">
          <input type="radio" v-model="form.status" value="todo">ToDo
          <input type="radio" v-model="form.status" value="in_progress">In progress
          <input type="radio" v-model="form.status" value="done">Done
        </div>
        <div v-if="form.errors.status" class="text-sm text-red-500">{{ form.errors.status }}</div>
        <PrimaryButton :disabled="form.processing" class="self-start mt-6">Add new skill</PrimaryButton>
        {{ selectedCategory }}
      </form>
    </div>
  </Modal>
</template>

<script setup>
import { useDogStore } from '../../../Stores/dog';
import { ref, computed } from 'vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import Modal from '@/Components/Modal.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import { useForm } from '@inertiajs/vue3'


const dogStore = useDogStore();

const categories = Object.keys(dogStore.chosenDog.categories)


// console.log(Object.keys(dogStore.chosenDog.categories))

// i need categories keys
const openedCategory = ref(null)
const newSkillModalOpened = ref(null)
// const selectedPerson = ref(people[0])
const category = ref(null)
// potem ni zvezan z v-model, read only, mogoce se da set tudi???
// const category = computed(() => (openedCategory ? openedCategory.category : null))
const skill = ref('')
// console.log('oc', openedCategory.value)
// console.log('sc', category.value)

const showNewCategoryInput = ref(false)

const form = useForm({
  category: null,
  name: null,
  description: null,
  status: null
})

function openCategory(categoryObj) {
  openedCategory.value = categoryObj
  // console.log(openedCategory.value)
}

function openNewSkillModal(){
  newSkillModalOpened.value = true
}

function submitForm(){
  form.post("/skills-to-learn", {
    preserveScroll: true,
    onSuccess: () => form.reset()
  })
}

</script>
