<script setup>
const items = ref([
    {name:"Home",option:"/"},
    {name:"Project",option:"/projects"},
    {name:"About",option:"/about"},
    {name:"Contact",option:"/contact"}
])
</script>
<template>
    <nav class=" sticky bg-linear-to-r from-blue-400 to-blue-500 px-2 py-4 shadow-lg top-0 z-10">
        <div class=" flex justify-between flex-row items-center px-5 mx-auto">
            <NuxtLink :to="items[0].option" class="text-white text-2xl font-extrabold hover:text-gray-200 transition duration-300 flex">
                <IconHome class=" mx-auto mr-3"/>My Portfolio
            </NuxtLink>
            <ul class=" flex space-x-5 gap-4">
                <li v-for="i in items" :key="i.name" >
                    <NuxtLink :to="i.option" class="font-bold text-lg transition duration-500 flex no-underline text-white hover:text-gray-600 hover:scale-125 ease-in-out">
                      {{i.name}}  
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>