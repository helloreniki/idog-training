<template>
  <div class="flex flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5 pb-4 pr-8 min-h-screen">
    <div class="flex flex-shrink-0 items-center space-y-5 px-4">
      <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
    </div>
    <div class="mt-5 flex flex-grow flex-col">
      <nav class="flex-1 space-y-1 bg-white" aria-label="Sidebar">
        <Link v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'border-indigo-600 bg-indigo-50 text-indigo-600' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center border-l-4 px-3 py-2 text-sm font-medium']">
          <component :is="item.icon" :class="[item.current ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 h-6 w-6 flex-shrink-0']" aria-hidden="true" />
          {{ item.name }}
        </Link>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/vue/24/outline'
import { useDogStore } from '../../Stores/dog.js'

const dogStore = useDogStore()

// console.log(Object.keys(dogStore.chosenDog.categories))

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, href: '#', current: true },
  { name: 'To Learn', icon: UsersIcon, href: '/skills-to-learn', current: false },
  { name: 'Training', icon: FolderIcon, href: '#', current: false },
  { name: 'Trials', icon: CalendarIcon, href: '#', current: false },
  { name: 'My Skills', icon: InboxIcon, href: '#', current: false }
]
</script>
