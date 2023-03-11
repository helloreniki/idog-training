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
      <form class="flex flex-col gap-4 my-6">
        <div v-if="showNewCategoryInput === false" class="w-full flex flex-col gap-4">
          <InputLabel for="category" value="Choose category" />
          <select class="mb-2">
            <option v-for="category, index in dogStore.chosenDog.categories" :key="index">{{ index }}</option>
          </select>
          <SecondaryButton type="button" @click="showNewCategoryInput = true" class="self-start">or input new Category</SecondaryButton>
        </div>
        <div v-if="showNewCategoryInput" class="flex flex-col gap-4">
          <InputLabel value="New Category" />
          <TextInput class="px-2 py-1 border border-gray-500 shadow-md" />
          <SecondaryButton type="button" @click="showNewCategoryInput = false" class="self-start">or choose existing Category</SecondaryButton>
        </div>
        <InputLabel for="skill" value="Skill" />
        <TextInput class="px-2 py-1 border border-gray-500 shadow-md"/>
        <PrimaryButton class="self-start mt-6">Add new skill</PrimaryButton>
      </form>
    </div>
  </Modal>
</template>

<script setup>
import { useDogStore } from '../../../Stores/dog';
import { ref } from 'vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import Modal from '@/Components/Modal.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';

const dogStore = useDogStore();

const categories = dogStore.chosenDog.categories

// console.log(Object.keys(dogStore.chosenDog.categories))

// i need categories keys
const openedCategory = ref(null)
const newSkillModalOpened = ref(null)

const showNewCategoryInput = ref(false)

function openCategory(categoryObj) {
  openedCategory.value = categoryObj
  console.log(openedCategory.value)
}

function openNewSkillModal(){
  newSkillModalOpened.value = true
}

</script>
