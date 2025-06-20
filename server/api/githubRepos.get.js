export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const username = 'PhoengZ'

  const res = await $fetch(`https://api.github.com/users/${username}/repos?type=owner&sort=pushed&direction=desc`, {
    headers: {
      Authorization: `token ${config.githubToken}`
    }
  })
  return res
})