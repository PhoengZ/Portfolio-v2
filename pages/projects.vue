<script setup>
useHead({
    title:"My Projects"
})
import { Icon } from '@iconify/vue'
const { data: response, error: err, status } = await useFetch('/api/githubRepos')
const repositores = ref([])
const lang = ref({})
const totalByte = ref(0)
if (status.value === 'error') {
  console.error(err.value)
} else {
  const totalLang = {}
  const repoList = await Promise.all(
    response.value.map(async (repo) => {
      const { data: langData } = await useFetch(`/api/githubLanguage?url=${encodeURIComponent(repo.languages_url)}`);
      if (langData.value){
        for (const [key, value] of Object.entries(langData.value)){
          totalLang[key] = (totalLang[key] || 0) + value
          totalByte.value += value
        }
      }
      return {
        id: repo.id,
        name: repo.name,
        description: repo.description || 'No description provided.',
        lastUpdate: new Date(repo.updated_at).toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Asia/Bangkok',
        }),
        language: Object.keys(langData.value || {}),
        link: repo.html_url,
      };
    })
  );
  repositores.value = repoList;
  lang.value = totalLang
}
const sortedLang = computed(()=>{
  if (!lang.value) return [];
  return Object.entries(lang.value).sort((a, b) => b[1] - a[1]);
})
</script>

<template>
  <div class="px-4 py-10 max-w-7xl mx-auto">
    <ul class=" flex flex-row flex-wrap justify-center gap-5 mb-5 sm:mb-10">
      <li v-for="language in sortedLang" :key="language[0]" class=" flex items-center border-2 bg-gray-200 rounded-md p-2 
      border-blue-300 gap-2 shadow-2xl text-xs font-semibold transform hover:scale-105 duration-200 cursor-pointer">
        <Icon :icon="IconmapLanguage[language[0]] || 'mdi:code-tags'" width="20" height="20" />
        {{ language[0] }} {{(language[1] * 100 / totalByte).toFixed(2)}}%
      </li>
    </ul>
    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <li
        v-for="repo in repositores"
        :key="repo.id"
        @click="navigateTo(repo.link, { external: true })"
        class="cursor-pointer transform hover:scale-[1.03] transition-all duration-300"
      >
        <div class="bg-white shadow-xl rounded-2xl p-5 flex flex-col gap-4 h-full border border-gray-200">
          <img
            src="/public/Image/github-background.jpg"
            alt=""
            class="w-full h-40 object-cover rounded-xl border border-gray-300"
          />
          <h2 class="text-xl font-bold text-center break-words text-blue-900">
            {{ repo.name }}
          </h2>
          <p class="text-gray-700 text-sm">
            <span class="font-semibold">Description:</span> {{ repo.description }}
          </p>
          <p class="text-gray-500 text-sm">
            <span class="font-semibold">Last updated:</span> {{ repo.lastUpdate }}
          </p>

          <div v-if="repo.language.length" class="mt-2">
            <p class="text-gray-600 text-sm font-semibold mb-1">Languages:</p>
            <ul class="flex flex-wrap gap-2">
              <li
                v-for="lang in repo.language"
                :key="lang"
                class="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-800"
              >
                <Icon :icon="IconmapLanguage[lang] || 'mdi:code-tags'" width="20" height="20" />
                {{ lang }}
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
