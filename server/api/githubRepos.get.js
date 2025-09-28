export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  const res = await $fetch(`https://api.github.com/user/repos?affiliation=owner,collaborator&sort=pushed&direction=desc&visibility=public`, {
    headers: {
      Authorization: `token ${config.githubToken}`
    }
  })
  console.log(res);
  return res
})