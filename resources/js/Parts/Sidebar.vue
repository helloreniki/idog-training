<template>
  <div class="relative flex flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5 pb-4 pr-3 min-h-screen min-w-fit">
    <div v-if="sidebarOpened && dogStore.chosenDog" class="uppercase px-4 ont-semibold text-indigo-600 font-bold text-xl">{{ dogStore.chosenDog.name }} </div>
    <div @click="sidebarOpened = !sidebarOpened" class="">
      <XCircleIcon v-if="sidebarOpened" class="absolute top-2 right-2 w-6 h-6 text-indigo-600 hover:text-indigo-800" />
      <ArrowRightCircleIcon v-else class="absolute top-2 right-2 w-6 h-6 text-indigo-600 hover:text-indigo-800" />
    </div>
    <div class="mt-5 sm:flex flex-grow flex-col">
      <nav class="flex-1 space-y-1 bg-white" aria-label="Sidebar">
        <Link v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'border-indigo-600 bg-indigo-50 text-indigo-600' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center border-l-4 pl-3 pr-1 py-2 text-sm font-medium']">
          <component :is="item.icon" :class="[item.current ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 h-6 w-6 flex-shrink-0']" aria-hidden="true" />
            <div v-show="sidebarOpened" class="pr-2">{{ item.name }}</div>
        </Link>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { CalendarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon, XCircleIcon, ArrowRightCircleIcon } from '@heroicons/vue/24/outline'
import { useDogStore } from '../../Stores/dog.js'
import { usePage } from '@inertiajs/vue3'
import { computed, ref } from 'vue';


const page = usePage()
const dogStore = useDogStore()

const sidebarOpened = ref(true)

const component = computed(() => page.component)

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, href: '/', current: component.value == 'Dashboard' },
  { name: 'To Learn', icon: UsersIcon, href: '/skills-to-learn', current: component.value == 'Skill/SkillView' },
  { name: 'Training', icon: FolderIcon, href: '/training', current: component.value == 'Training/TrainingView' },
  { name: 'Trials', icon: CalendarIcon, href: '/trial', current: component.value == 'Trial/TrialView' },
  { name: 'Dog Profile', icon: InboxIcon, href: '/dog-profile', current: component.value == 'DogProfile/DogProfileView' }
]

</script>
