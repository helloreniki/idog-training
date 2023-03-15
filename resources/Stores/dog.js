import { defineStore } from 'pinia'
import { computed, ref, watch, watchEffect } from 'vue'
import { usePage } from '@inertiajs/vue3'

export const useDogStore = defineStore('dog', () => {

    const page = usePage()

    // ————————————————————————————————————————————————————————————————————————————————————————————————————
    // STATE
    // ————————————————————————————————————————————————————————————————————————————————————————————————————

    const dogs = ref({
      id: null,
      name: null,
      breed: null,
      dob: null,
      categories: null
    });

    dogs.value = page.props.dogs

    const chosenDog = ref(null);

    if(page.props.dogs.length === 1){
      chosenDog.value = page.props.dogs[0]
    }

    const openedCategory = ref(null)

    watch(
      () => dogs.value.categories, // a ta se ima reactivity, ali jo izgubi, ker nested
      (newVal, oldVal) => {
        console.log('watcher dogs')
        chosenDog.value = dogs.value.find(dog => chosenDog.value.id == dog.id)
      }, { deep: true }
    )


    watch(
      chosenDog,
      (newVal, oldVal) => {
        // console.log('here', Object.values(chosenDog.value.categories))
          getAllSkills()
          const randomNumber = ref(Math.floor(Math.random() * allSkillsForChosenDog.value.length))
          randomSkill.value = allSkillsForChosenDog.value[randomNumber.value]
          console.log('randomNo', randomNumber.value) // 56
          // console.log('all', allSkillsForChosenDog.value)
          console.log('randomSkill', randomSkill.value)
      }
    )




    // ————————————————————————————————————————————————————————————————————————————————————————————————————
    // ACTIONS
    // ————————————————————————————————————————————————————————————————————————————————————————————————————

    function chooseDog(id){
      chosenDog.value = dogs.value.find(dog => id == dog.id)
      openedCategory.value = null
      console.log('openedCAtegory', openedCategory.value)
      console.log('chosen', chosenDog.value)
    }


    const allSkillsForChosenDog = ref([])
    const randomSkill = ref(null)

    function getAllSkills(){
      Object.values(chosenDog.value.categories).map(categoryObj => {
        // console.log(categoryObj) agi -> skill, skill, skill, tricks -> skil, skill,...
        categoryObj.map(skill => {
          // console.log(skill)
          return allSkillsForChosenDog.value.push({
            id: skill.id,
            name: skill.name,
            status: skill.status,
            category: skill.category
          })
        })
      })
    }

     // ————————————————————————————————————————————————————————————————————————————————————————————————————
    // RETURN
    // ————————————————————————————————————————————————————————————————————————————————————————————————————

    return { dogs, chosenDog, chooseDog, openedCategory, allSkillsForChosenDog, randomSkill }

})
