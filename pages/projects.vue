<script setup>
useHead({
    title:"My Projects"
})
import { Icon } from '@iconify/vue'
const { data: response, error: err, status } = await useFetch('/api/githubRepos')
const repositores = ref([])

if (status.value === 'error') {
  console.error(err.value)
} else {
  const repoList = await Promise.all(
    response.value.map(async (repo) => {
      const { data: langData } = await useFetch(`/api/githubLanguage?url=${encodeURIComponent(repo.languages_url)}`);

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
}
</script>

<template>
  <div class="px-4 py-10 max-w-7xl mx-auto">
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
