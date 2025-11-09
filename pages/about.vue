<script setup>
useHead({
    title:"My Profile"
})
</script>
<template>
    <div class=" flex w-full mx-auto flex-col md:flex-row gap-5 md:gap-10 px-5 md:px-10 bg-linear-to-b from-blue-400 to-white">
        <div class=" w-full">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="avatarClip">
                        <path fill="#0F62FE" d="M35.9,-59.7C46.7,-55.8,56,-46.8,62.8,-35.9C69.5,-25.1,73.8,-12.6,76.6,1.6C79.4,15.8,80.7,31.5,73.4,41.5C66.2,51.5,50.4,55.7,36.7,60.7C23.1,65.6,11.5,71.3,1.2,69.1C-9.1,67,-18.2,57.1,-29.7,51C-41.3,44.8,-55.3,42.4,-62.3,34.6C-69.3,26.7,-69.2,13.4,-69.7,-0.3C-70.3,-14,-71.5,-28,-65.8,-38C-60.1,-48.1,-47.5,-54.3,-35.4,-57.5C-23.3,-60.8,-11.6,-61,0.4,-61.7C12.5,-62.5,25,-63.7,35.9,-59.7Z" transform="translate(100 100)" />
                    </clipPath>
                </defs>
                <path fill="#0F62FE" d="M35.9,-59.7C46.7,-55.8,56,-46.8,62.8,-35.9C69.5,-25.1,73.8,-12.6,76.6,1.6C79.4,15.8,80.7,31.5,73.4,41.5C66.2,51.5,50.4,55.7,36.7,60.7C23.1,65.6,11.5,71.3,1.2,69.1C-9.1,67,-18.2,57.1,-29.7,51C-41.3,44.8,-55.3,42.4,-62.3,34.6C-69.3,26.7,-69.2,13.4,-69.7,-0.3C-70.3,-14,-71.5,-28,-65.8,-38C-60.1,-48.1,-47.5,-54.3,-35.4,-57.5C-23.3,-60.8,-11.6,-61,0.4,-61.7C12.5,-62.5,25,-63.7,35.9,-59.7Z" transform="translate(100 100)" />
                <image
                  href="/public/Image/myself.jpg"
                  x="5"
                  y="22"
                  width="200"
                  height="200"
                  clip-path="url(#avatarClip)"
                  preserveAspectRatio="">
                </image>
            </svg>
        </div>
        <div class=" w-full flex flex-col justify-center items-center md:items-start py-5 md:py-10 px-5 md:px-10 gap-5 md:gap-10">
            <h1 class=" text-4xl font-extrabold drop-shadow-lg text-blue-600">About me</h1>
            <p class=" text-sm md:text-lg text-gray-700 drop-shadow-lg leading-relaxed">Hi! I'm Phaolap Kulteera, a Computer Engineering student at Chulalongkorn University.
                I enjoy building web applications that combine beautiful design with powerful performance.
                I'm especially passionate about full-stack development, using Vue.js and Tailwind CSS for the frontend, and currently exploring backend technologies like Node.js and Go.
                My goal is to become a well-rounded software engineer who not only writes clean code but also understands how users think.
                I’m currently open to software engineering internship opportunities.
            </p>
            <BaseButton size="medium" theme="first" class=" w-6/12 py-2 px-4">
                <a href="/Resume.pdf" _target="blank" rel="noopener noreferrer">
                    Download Resume
                </a>
            </BaseButton>
        </div>
    </div>
</template>