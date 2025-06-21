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
const accessToken = ref("13dffaab-e500-4e4f-a303-547e1f4ab774") 
const Contact = ref([
  {name: "Github", goto: "https://github.com/PhoengZ", img: "/Image/github.png"},
  {name: "Linkedin", goto: "https://www.linkedin.com/in/phaolapkulteera/", img: "/Image/linked-in.png"},
  {name: "Instargram", goto: "https://www.instagram.com/c_phaooo_/", img: "/Image/instargram.png"},
  {name: "Gmail", goto: "mailto:pholapcondo11@gmail.com", img: "/Image/Gmail_icon_(2020).svg.png"}
])
const result = ref("");
const status = ref("");
const Submit =  handleSubmit(async (values)=>{
    result.value = "Please wait...";
  try {
    const response = await $fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: {
        access_key:accessToken.value,
        subject: "New Submission from portfolio contact",
        name:Name.value,
        email:Email.value,
        message:Message.value
      },
    });
    result.value = response.message;
    if (response.success) {
      status.value = "success";
    } else {
      console.log(response);
      status.value = "error";
    }
  } catch (error) {
    console.log(error);
    status.value = "error";
    result.value = "Something went wrong!";
  } finally {
    Name.value = "";
    Email.value = "";
    Message.value = "";
    setTimeout(() => {
      result.value = "";
      status.value = "";
    }, 5000);
  }
})

</script>
<template>
    <div v-if="result" class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md">
      <div
        :class="status === 'success' ? 'bg-blue-200 text-gray-800 border-blue-400' : 'bg-red-100 text-red-800 border-red-400'"
        class="p-6 rounded-2xl border-2 shadow-xl transition-all duration-300 ease-in-out text-center"
      >
        <h2 class="text-2xl font-bold mb-2 capitalize">{{ status }}</h2>
        <p class="text-sm">{{ result }}</p>
      </div>
    </div>
    <div class=" flex flex-col md:flex-row max-h-screen min-h-screen w-full p-5 md:p-15 items-center overflow-x-hidden" :class="result ? 'blur-md':'blur-none'">
        <div class="w-8/12 md:w-6/12 flex flex-col justify-start items-start leading-relaxed">
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
            <h1 class=" text-3xl font-bold drop-shadow-lg mb-5 text-center md:text-left">Phaolap Kulteera</h1>
            <p class=" text-sm md:text-lg drop-shadow-lg font-semibold text-gray-700 mb-2 md:mb-5">Currently studying at Chulalongkorn University, available for internships or project collaborations.</p>
            <p class=" text-sm md:text-lg font-semibold drop-shadow-lg">Email: <span class=" text-blue-600">pholapcondo11@gmail.com</span></p>
            <ul class=" flex justify-start gap-5 mt-20 mb-5 md:mb-10 flex-wrap">
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
        <div class="w-full flex flex-col justify-center items-start px-10 md:px-40 py-4 gap-10">
            <h1 class=" text-center text-3xl md:text-6xl font-extrabold mx-auto text-blue-600 drop-shadow-lg">Contact Page</h1>
            <BaseInput v-model:model-value="Name" placeholder="Name" class=" w-full"/>
            <BaseInput name="email" v-model:model-value="Email" placeholder="Email" class=" w-full"/>
            <textarea v-model="Message" placeholder="Message" required class="border-2 py-4 px-4 border-gray-500 rounded-2xl outline-none transition duration-300 focus:border-blue-400 w-full h-20 md:h-40 drop-shadow-lg"></textarea>
            <BaseButton size="large" theme="first" @click="Submit" class=" mx-auto w-4/12 py-1 px-2 md:px-4 md:py-2 rounded-2xl">{{isSubmiting ? "Submitting":"Submit"}}</BaseButton>
        </div>
        
    </div>
</template>