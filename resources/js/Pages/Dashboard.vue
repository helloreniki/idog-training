<template>
  <AuthenticatedLayout>
    <Head title="Dashboard" />
    <!-- {{ user.name }}
    {{ $page.props.auth.user.name }} -->
    <!-- <p class="text-gray-400 text-sm"> Number of all skills: {{ dogStore.allSkillsForChosenDog.length }} </p> -->
    <div v-if="!dogStore.chosenDog">
      <PrimaryButton  @click="openNewDogModal = true">Add a dog</PrimaryButton>
      <div v-if="$page.props.dogs.length > 0" class="flex gap-4 my-4">
        <div class="font-semibold">Choose a dog:</div>
        <div v-for="dog in $page.props.dogs" :key="dog.id" @click="dogStore.chooseDog(dog.id)" class="cursor-pointer">{{ dog.name }}</div>
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
import { ref, watch, computed, onUpdated, onMounted } from 'vue'
import { usePage } from '@inertiajs/vue3';


const page = usePage()
const dogStore = useDogStore()
const openNewDogModal = ref(false)

const user = computed(() => page.props.auth.user)

// isto naredi kot ce watcham userja, vsakic ko grem na dashboard chosenDog = null, tle je logicno, pri userju ni
// kako bi naredila, da to naredi samo po loginu?
// -----------------------------------------------------------------------------------------------
// -> login form: onSuccess full reload -> in dashboard.vue onUpdated(chosenDog = null)  // dela
// -----------------------------------------------------------------------------------------------
onMounted(() => {
    // console.log('mounting')
    dogStore.dogs = page.props.dogs
    // console.log('after mount', dogStore.dogs) // ja
    // dogStore.chosenDog = null // ne ker potem vsakic ko grem na '/' resetira chosenDog
})

// const dogs = computed(() => page.props.dogs)
// console.log('user', user.value)
// console.log('props dogs', page.props.dogs)
// console.log('dogstore dogs from dashboard', dogStore.dogs) // najprej null, potem ko getDogs/onMounted se zafila

// chosenDog = null after login, but also everytime i do to route '/', even though user doesnt change
// watch(
//   () => user,
//   (newVal, oldVal) => {
//     console.log('watcher user')
//     dogStore.dogs = page.props.dogs
//     dogStore.randomSkill = null
//     if(page.props.dogs.length === 1){
//       dogStore.chosenDog = page.props.dogs[0]
//     } else { dogStore.chosenDog = null }

//     console.log('newVal', newVal.value)
//     console.log('oldVal', oldVal)
//   }, {
//        immediate: true,
//      }
// )

onUpdated(() => {
    // console.log('updated dashboard')
    dogStore.chosenDog = null
    dogStore.randomSkill = null
})

</script>
