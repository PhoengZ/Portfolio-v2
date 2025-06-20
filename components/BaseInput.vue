<script setup>
import { useField } from 'vee-validate'

const prop = defineProps({
    modelValue:String,
    placeholder:String,
    name:String
})
const emit = defineEmits(['update:modelValue'])
let value = ref(prop.modelValue)
let errorMessage = ref("")
if (prop.name){
    const field = useField(()=>prop.name,undefined,{
        syncVModel: true,
    })
    value = field.value
    errorMessage = field.errorMessage
}
watch(value, (newValue)=>{
    emit('update:modelValue',newValue)
})
</script>
<template>
    <div class=" flex flex-col gap-2">
        <input type="text" :placeholder="prop.placeholder" v-model="value" class=" border-2 border-gray-500 bg-white rounded-2xl outline-none focus:border-blue-400 transition duration-300 px-4 py-2 drop-shadow-lg">
        <p v-if="errorMessage" class=" text-red-500">{{errorMessage}}</p>
    </div>
    
</template>