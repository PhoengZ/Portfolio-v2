<script setup>
useHead({
    title: "Certificates"
})

const certificates = ref([
    { name: "Fullstack Web development application", file: "Fullstack.pdf", description: "Certificate for Fullstack Development completion." },
    { name: "Google AI Essentials", file: "Google.pdf", description: "Google certification achievement." },
    { name: "Huawei Cloud", file: "Huawei.pdf", description: "Huawei technology certification." },
    { name: "Developing Back-End Apps with Node.js and Express", file: "IBM.pdf", description: "IBM professional certificate." },
    { name: "Object-Oriented Data Structures in C++", file: "OOP.pdf", description: "Object-Oriented Programming mastery." },
    { name: "Ordered Data Structures", file: "Ordered.pdf", description: "Certificate of achievement." },
    { name: "Crunching with Pandas", file: "Pandas.pdf", description: "Data analysis with Pandas certification." },
    { name: "Unordered Data Structures", file: "Unordered.pdf", description: "Additional certification." },
])
</script>

<template>
    <div class="min-h-screen w-full bg-gradient-to-b from-blue-400 to-white p-5 md:p-10 lg:px-20">
        <div class="flex flex-col gap-10">
            <div class="flex justify-between items-center">
                <h1 class="text-4xl font-bold text-white drop-shadow-lg">My Certificates</h1>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div v-for="cert in certificates" :key="cert.name" 
                    class="group relative bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-64 flex flex-col justify-center items-center cursor-pointer border border-white/50"
                >
                    <a :href="`/certificates/${cert.file}`" target="_blank" rel="noopener noreferrer" class="absolute inset-0 z-20"></a>
                    
                    <div class="p-6 text-center z-10 transition-all duration-300 group-hover:opacity-0">
                        <div class="w-16 h-16 mx-auto mb-4 bg-blue-500 rounded-full flex items-center justify-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800">{{ cert.name }}</h3>
                    </div>

                    <div class="absolute inset-0 bg-blue-600/90 flex flex-col justify-center items-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <h3 class="text-xl font-bold text-white mb-2">{{ cert.name }}</h3>
                        <p class="text-white text-sm">{{ cert.description }}</p>
                        <span class="mt-4 text-xs text-blue-100 uppercase tracking-wider font-semibold border border-blue-100 px-3 py-1 rounded-full">Click to View PDF</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>