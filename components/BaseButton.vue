<script setup>
const prop = defineProps({
    size:{
        type:String,
        default:"small"
    },
    theme:{
        type:String,
        default:"first"
    }
})
defineEmits(['click'])
const s = customSize(prop.size)
const t = customTheme(prop.theme)
</script>
<template>
    <button @click="$emit('click')" class="drop-shadow-2xl border-2 border-gray-700 transition duration-300 hover:scale-105" :class="[s,t]">
        <slot/>
    </button>
</template>