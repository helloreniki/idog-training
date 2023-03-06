<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import Sidebar from '@/Parts/Sidebar.vue'
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
        </template>

        <div class="flex gap-8 w-fit">

          <Sidebar class="" />

          <div class="flex-1 my-5">Content</div>
        </div>
    </AuthenticatedLayout>
</template>
