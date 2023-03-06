<template>
  <div class="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5 pb-4 px-2 min-h-screen">
    <div class="flex flex-shrink-0 items-center px-4">
      <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
    </div>
    <div class="mt-5 flex flex-grow flex-col">
      <nav class="flex-1 space-y-1 bg-white px-2" aria-label="Sidebar">
        <template v-for="item in navigation" :key="item.name">
          <div v-if="!item.children">
            <a href="#" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex w-full items-center rounded-md py-2 pl-2 text-sm font-medium']">
              <component :is="item.icon" :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 h-6 w-6 flex-shrink-0']" aria-hidden="true" />
              {{ item.name }}
            </a>
          </div>
          <Disclosure as="div" v-else class="space-y-1" v-slot="{ open }">
            <DisclosureButton :class="[item.current ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex w-full items-center rounded-md py-2 pr-1 text-left text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500']">
              <component :is="item.icon" class="mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
              <span class="flex-1 pr-8">{{ item.name }}</span>
              <svg :class="[open ? 'rotate-90 text-gray-400' : 'text-gray-300', 'ml-3 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400']" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
              </svg>
            </DisclosureButton>
            <DisclosurePanel class="space-y-1">
              <DisclosureButton v-for="subItem in item.children" :key="subItem.name" as="a" :href="subItem.href" class="group flex w-full items-center rounded-md py-2 pl-11 pr-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">{{ subItem.name }}</DisclosureButton>
            </DisclosurePanel>
          </Disclosure>
        </template>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, current: true, href: '#' },
  {
    name: 'ToLearn',
    icon: UsersIcon,
    current: false,
    children: [
      { name: 'Obedience', href: '#' },
      { name: 'Tricks', href: '#' },
      { name: 'Socialization', href: '#' },
      { name: 'Agility', href: '#' },
    ],
  },
  {
    name: 'Training',
    icon: FolderIcon,
    current: false,
    children: [
      { name: 'Obedience', href: '#' },
      { name: 'Agility', href: '#' },
      { name: 'Mantrailing', href: '#' },
      { name: 'Herding', href: '#' },
    ],
  },
  {
    name: 'My Skills',
    icon: CalendarIcon,
    current: false,
    children: [
      { name: 'Obedience', href: '#' },
      { name: 'Tricks', href: '#' },
      { name: 'Socialization', href: '#' },
      { name: 'Agility', href: '#' },
    ],
  },
  {
    name: 'Trials',
    icon: InboxIcon,
    current: false,
    children: [
      { name: 'Obedience', href: '#' },
      { name: 'Agility', href: '#' },
      { name: 'Herding', href: '#' },
      { name: 'Search and Rescue', href: '#' },
    ],
  },
]
</script>
