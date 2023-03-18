import { defineStore } from 'pinia'
import { computed, ref, watch, watchEffect, toRef, isRef } from 'vue'
import { usePage } from '@inertiajs/vue3'

export const useDogStore = defineStore('dog', () => {

    const page = usePage()

    // ————————————————————————————————————————————————————————————————————————————————————————————————————
    // STATE
    // ————————————————————————————————————————————————————————————————————————————————————————————————————

    const dogs = ref(null);
    dogs.value = page.props.dogs
    // const user = computed(() => page.props.auth.user )
    const chosenDog = ref(null);

    // if(page.props.dogs.length === 1){
    //   chosenDog.value = page.props.dogs[0]
    // }
    // console.log('chosenDog store', chosenDog)

    const openedCategory = ref(null)

    const allSkillsForChosenDog = ref([])
    const randomSkill = ref(null)

    watch(
      chosenDog,
      (newVal, oldVal) => {
        console.log('chosenDog watcher')
        // console.log('chosenDog', chosenDog)
        if(chosenDog.value){
          getAllSkills()
          getRandomSkill()
          // console.log('randomNo', randomNumber.value) // 56
          // console.log('all', allSkillsForChosenDog.value)
          console.log('randomSkill', randomSkill.value)
        }
      }
    )


    // ————————————————————————————————————————————————————————————————————————————————————————————————————
    // ACTIONS
    // ————————————————————————————————————————————————————————————————————————————————————————————————————

    function chooseDog(id){
      chosenDog.value = dogs.value.find(dog => id == dog.id)
      openedCategory.value = null
      getAllSkills()
      getRandomSkill()
      // console.log('openedCAtegory', openedCategory.value)
      console.log('chosen', chosenDog.value)
    }

    function getAllSkills(){
      // set allSkills to empty array everytime you change a dog, otherwise it will just add again the same skills
      allSkillsForChosenDog.value = []
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

    function getRandomSkill(){
      const randomNumber = ref(Math.floor(Math.random() * allSkillsForChosenDog.value.length))
      return randomSkill.value = allSkillsForChosenDog.value[randomNumber.value]
    }

    // watch(
    //   () => user,
    //   (newVal, oldVal) => {
    //     console.log('watcher user computedRef')
    //     chosenDog.value = null
    //     dogs.value = page.props.dogs
    //     // getAllSkills()
    //     // getRandomSkill()
    //   }, {
    //        immediate: true,
    //        deep: true
    //       }
    // )

     // ————————————————————————————————————————————————————————————————————————————————————————————————————
    // RETURN
    // ————————————————————————————————————————————————————————————————————————————————————————————————————

    return { dogs, chosenDog, chooseDog, openedCategory, allSkillsForChosenDog, randomSkill, getRandomSkill }

})
