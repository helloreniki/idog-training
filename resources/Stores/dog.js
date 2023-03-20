import { defineStore } from 'pinia'
import { computed, ref, watch, watchEffect, toRef, isRef } from 'vue'
import { usePage } from '@inertiajs/vue3'

export const useDogStore = defineStore('dog', () => {

    const page = usePage()

    // ————————————————————————————————————————————————————————————————————————————————————————————————————
    // STATE
    // ————————————————————————————————————————————————————————————————————————————————————————————————————

    // const user = ref(null)
    const dogs = ref(null);
    const chosenDog = ref(null);
    const openedCategory = ref(null)

    const allSkillsForChosenDog = ref([])
    const randomSkill = ref(null)

    // console.log('props dogs from store', dogs.value)
    // console.log('props user from store', user.value)

    // async function getDogs() {
    //     console.log('getting dogs')
    //     console.log('dogs from getDogs() ', page.props.dogs)
    //     dogs.value = await page.props.dogs
    //     console.log('dogs after getDogs in store', dogs.value)
    // }

    // iz tle ne sprozi watcherja ko se user spremeni, na novo logira
    // watch(
    //     () => user,
    //     (newVal, oldVal) => {
    //         console.log('watcher user in dogStore')
    //         // dogStore.dogs = page.props.dogs
    //         chosenDog.value = null
    //         randomSkill.value = null
    //         // if(page.props.dogs.length === 1){
    //         // dogStore.chosenDog = page.props.dogs[0]
    //         // } else { dogStore.chosenDog = null }

    //         console.log('newVal', newVal.value)
    //         console.log('oldVal', oldVal)
    //     }, {
    //         immediate: true,
    //         deep: true
    //  }
    // )


    // if(page.props.dogs.length === 1){
    //   chosenDog.value = page.props.dogs[0]
    // }
    // console.log('chosenDog store', chosenDog)


    watch(
      chosenDog,
      (newVal, oldVal) => {
        console.log('chosenDog watcher')
        // console.log('chosenDog', chosenDog)
        // only if chosenDog didn't change to null
        if(chosenDog.value){
          getAllSkills()
          getRandomSkill()
          // console.log('randomNo', randomNumber.value) // 56
          // console.log('all', allSkillsForChosenDog.value)
          // console.log('randomSkill', randomSkill.value)
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


     // ————————————————————————————————————————————————————————————————————————————————————————————————————
    // RETURN
    // ————————————————————————————————————————————————————————————————————————————————————————————————————

    return { dogs, chosenDog, chooseDog, openedCategory, allSkillsForChosenDog, randomSkill, getRandomSkill }

})
