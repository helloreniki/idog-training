<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { useDogStore } from '../../Stores/dog.js'

const dogStore = useDogStore()

</script>

<template>
  <AuthenticatedLayout>
    <Head title="Dashboard" />
    DASHBOARD
  </AuthenticatedLayout>
</template>
