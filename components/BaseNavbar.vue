<script setup>
const items = ref([
    {name:"Home",option:"/"},
    {name:"Project",option:"/projects"},
    {name:"About",option:"/about"},
    {name:"Contact",option:"/contact"}
])
</script>
<template>
    <nav class=" sticky w-screen bg-linear-to-r from-blue-400 to-blue-500 px-2 py-4 shadow-lg top-0 z-10">
        <div class=" flex justify-between flex-row items-center px-5 mx-auto">
            <NuxtLink :to="items[0].option" class="hidden md:flex text-white text-lg md:text-2xl font-bold md:font-extrabold hover:text-gray-200 transition duration-300">
                <IconHome class=" mx-auto mr-3"/>
                <span class="hidden md:inline">My Portfolio</span>
            </NuxtLink>
            <ul class=" flex space-x-5 gap-2 md:gap-4">
                <li v-for="i in items" :key="i.name" >
                    <NuxtLink :to="i.option" class="font-bold text-sm transition duration-500 flex no-underline text-white hover:text-gray-600 hover:scale-125 ease-in-out md:text-lg">
                      {{i.name}}  
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>