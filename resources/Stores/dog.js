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
      () => dogs.value.categories,
      (newVal, oldVal) => {
        console.log('watcher dogs')
        chosenDog.value = dogs.value.find(dog => chosenDog.value.id == dog.id)
      }, { deep: true }
    )


    // ————————————————————————————————————————————————————————————————————————————————————————————————————
    // GETTERS
    // ————————————————————————————————————————————————————————————————————————————————————————————————————




    // ————————————————————————————————————————————————————————————————————————————————————————————————————
    // ACTIONS
    // ————————————————————————————————————————————————————————————————————————————————————————————————————

    function chooseDog(id){
      chosenDog.value = dogs.value.find(dog => id == dog.id)
      openedCategory.value = null
      console.log('openedCAtegory', openedCategory.value)
      console.log('chosen', chosenDog.value)
    }

     // ————————————————————————————————————————————————————————————————————————————————————————————————————
    // RETURN
    // ————————————————————————————————————————————————————————————————————————————————————————————————————

    return { dogs, chosenDog, chooseDog, openedCategory }

})
