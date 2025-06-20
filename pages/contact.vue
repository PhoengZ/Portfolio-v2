<script setup>
import { useForm } from 'vee-validate'

useHead({
    title:"My Contact"
})
const {handleSubmit,isSubmiting } = useForm({
    validationSchema:useEmailValidate(),
    validateOnInput:true
})
const Name = ref("")
const Email = ref("")
const Message = ref("")
const Contact = ref([
  {name: "Github", goto: "https://github.com/PhoengZ", img: "/Image/github.png"},
  {name: "Linkedin", goto: "https://www.linkedin.com/in/phaolapkulteera/", img: "/Image/linked-in.png"},
  {name: "Instargram", goto: "https://www.instagram.com/c_phaooo_/", img: "/Image/instargram.png"},
  {name: "Gmail", goto: "mailto:pholapcondo11@gmail.com", img: "/Image/Gmail_icon_(2020).svg.png"}
])
const Submit = handleSubmit(values=>{
    const subject = encodeURIComponent('New Message from Portfolio Contact Form')
    const body = encodeURIComponent(`From: ${Name.value}\nEmail: ${values}\n\n${Message.value}`)
    const mailtoLink = `mailto:pholapcondo11@gmail.com?subject=${subject}&body=${body}`
    window.location.href = mailtoLink
})

</script>
<template>
    <div class=" flex flex-col md:flex-row max-h-screen min-h-screen w-full p-5 md:p-15 items-center">
        <div class="w-6/12 flex flex-col justify-start items-start leading-relaxed">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="IdClip" >
                        <path fill="#0F62FE" d="M57.3,-18.4C65.8,7.8,58.7,39.3,37,56.3C15.4,73.3,-20.7,75.7,-43.4,59.3C-66.2,42.9,-75.6,7.6,-66.2,-19.8C-56.7,-47.1,-28.4,-66.6,-2,-66C24.3,-65.3,48.7,-44.5,57.3,-18.4Z" transform="translate(100 100)" />
                    </clipPath>
                </defs>
                <path fill="#0F62FE" d="M57.3,-18.4C65.8,7.8,58.7,39.3,37,56.3C15.4,73.3,-20.7,75.7,-43.4,59.3C-66.2,42.9,-75.6,7.6,-66.2,-19.8C-56.7,-47.1,-28.4,-66.6,-2,-66C24.3,-65.3,48.7,-44.5,57.3,-18.4Z" transform="translate(100 100)" />
                <image
                    href="/public/Image/myself.jpg"
                    x="0"
                    y="30"
                    width="200"
                    height="200"
                    clip-path="url(#IdClip)"
                    preserve-aspect-ratio=""
                >
                </image>
            </svg>
            <h1 class=" text-3xl font-bold drop-shadow-lg mb-2 md:mb-5">Phaolap Kulteera</h1>
            <p class=" text-sm md:text-lg drop-shadow-lg font-semibold text-gray-700 mb-2 md:mb-5">Currently studying at Chulalongkorn University, available for internships or project collaborations.</p>
            <p class=" text-sm md:text-lg font-semibold drop-shadow-lg">Email: <span class=" text-blue-600">pholapcondo11@gmail.com</span></p>
            <ul class=" flex justify-start gap-5 mt-20 mb-5 md:mb-10">
              <li v-for="i in Contact" :key="i.name" class=" drop-shadow-lg">
                <BaseButton v-if="i.name !== 'Gmail'" class="p-1 rounded-full w-10 h-10" size="small" theme="last" @click="navigateTo(i.goto,{external:true})">
                  <img :src="i.img" alt="Image" class=" w-full h-full rounded-full p-1">
                </BaseButton>
                <BaseButton v-else class="p-1 rounded-full w-10 h-10" size="small" theme="last"> 
                  <a
                    :href="i.goto"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-full h-full flex items-center justify-center"
                  >
                    <img :src="i.img" alt="Image" class="w-full h-full rounded-full p-1" />
                  </a>
                </BaseButton>
              </li>
            </ul>
        </div>
        <div class="w-full flex flex-col justify-center items-start px-25 md:px-40 py-4 gap-10">
            <h1 class=" text-center text-3xl md:text-6xl font-extrabold mx-auto text-blue-600 drop-shadow-lg">Contact Page</h1>
            <BaseInput v-model:model-value="Name" placeholder="Name" class=" w-full"/>
            <BaseInput name="email" v-model:model-value="Email" placeholder="Email" class=" w-full"/>
            <textarea v-model="Message" placeholder="Message" required class="border-2 py-4 px-4 border-gray-500 rounded-2xl outline-none transition duration-300 focus:border-blue-400 w-full h-20 md:h-40 drop-shadow-lg"></textarea>
            <BaseButton size="large" theme="first" @click="Submit" class=" mx-auto w-4/12 py-2 px-4 rounded-2xl">{{isSubmiting ? "Submitting":"Submit"}}</BaseButton>
        </div>
    </div>
</template>