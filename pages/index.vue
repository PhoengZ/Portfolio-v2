<script setup>
useHead({
  title:"My Portfolio"
})
const Contact = ref([
  {name: "Github", goto: "https://github.com/PhoengZ", img: "/Image/github.png"},
  {name: "Linkedin", goto: "https://www.linkedin.com/in/phaolapkulteera/", img: "/Image/linked-in.png"},
  {name: "Instargram", goto: "https://www.instagram.com/c_phaooo_/", img: "/Image/instargram.png"},
  {name: "Gmail", goto: "https://mail.google.com/mail/?view=cm&to=pholapcondo11@gmail.com", img: "/Image/Gmail_icon_(2020).svg.png"}
])
const Goto = ref([
  {name:"Contact",goto:"/contact"},
  {name:"Projects",goto:"/projects"}
])
</script>
<template>
  <div class="min-h-screen w-full bg-gradient-to-b from-blue-400 to-white flex flex-col md:flex-row gap-10 md:gap-10 p-5 md:p-10 lg:px-20">
    <div class="w-full md:w-1/2 flex flex-col justify-start items-center md:items-start pt-10 gap-3 md:gap-5 px-5 md:px-20">
      <h2 class=" max-w-fit text-3xl font-bold text-gray-600 typing-1 drop-shadow-lg">Hi I'm Phaolap Kulteera</h2>
      <h1 class=" max-w-fit text-gray-700 text-6xl font-bold typing-2 drop-shadow-lg">
          Full Stack <span class="text-blue-500">Junior</span>
      </h1>
      <p class=" text-gray-700 font-semibold text-sm mt-3 drop-shadow-lg">
        Here, you'll find a collection of projects I've worked on, reflecting my journey and growth as a Full Stack Developer. I'm currently seeking opportunities to contribute, learn, and grow with forward-thinking teams
      </p>
      <div class=" flex w-full justify-between gap-5">
        <BaseButton class=" text-center w-full px-4 py-2 drop-shadow-lg" size="medium" theme="first" @click="navigateTo(Goto[0].goto)">{{Goto[0].name}}</BaseButton>
        <BaseButton class=" text-center w-full px-4 py-2 drop-shadow-lg" size="medium" theme="second" @click="navigateTo(Goto[1].goto)">{{Goto[1].name}}</BaseButton>
      </div>
      <ul class=" flex justify-start gap-5 mt-20">
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
    <div class="w-full flex justify-center items-center relative">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="avatarClip">
            <path class=" drop-shadow-lg" d="M48.3,-43.3C58.2,-26.1,58.8,-6.3,56.1,15.8C53.4,37.8,47.5,62.1,34.8,65.6C22.2,69.1,2.8,51.8,-19.5,40.9C-41.7,30,-66.8,25.5,-74.4,11.5C-82,-2.5,-72,-26,-56.7,-44.4C-41.3,-62.8,-20.7,-76.2,-0.7,-75.6C19.2,-75,38.4,-60.4,48.3,-43.3Z" transform="translate(100 100)" />
          </clipPath>
        </defs>
        <g transform="translate(100 100)">
          <path fill="#0F62FE" d="M48.3,-43.3C58.2,-26.1,58.8,-6.3,56.1,15.8C53.4,37.8,47.5,62.1,34.8,65.6C22.2,69.1,2.8,51.8,-19.5,40.9C-41.7,30,-66.8,25.5,-74.4,11.5C-82,-2.5,-72,-26,-56.7,-44.4C-41.3,-62.8,-20.7,-76.2,-0.7,-75.6C19.2,-75,38.4,-60.4,48.3,-43.3Z" />
        </g>
        <image
          href="/public/Image/myself.jpg"
          x="-5"
          y="22"
          width="200"
          height="200"
          clip-path="url(#avatarClip)"
          preserveAspectRatio=""
        />
      </svg>
    </div>
  </div> 
</template>
<style>
.typing-1,.typing-2{
  overflow: hidden; 
  white-space: nowrap;
  border-right: 3px solid #333;
  animation-timing-function: steps(30, end);
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-name: typing, blink;
  animation-duration: 6s, 0.75s;
  animation-timing-function: steps(30, end), ease-in-out;
  animation-iteration-count: infinite, infinite;
}
.typing-1{
  animation-duration: 6s, 0.75s;
  animation-timing-function: steps(25, end), ease-in-out;
}
.typing-2{
  animation-duration: 10s, 0.75s;
  animation-timing-function: steps(40, end), ease-in-out;
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink {
  0%, 100% {
    border-color: transparent;
  }
  50% {
    border-color: #333;
  }
}
</style>
