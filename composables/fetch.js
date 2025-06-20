export const useFetchAPI = (request, object)=>{
    return useFetch(request,{baseURL:'https://api.github.com',...object})
}
export const useFetchAsyncAPI = async (key, request, object = {}) => {
  const { data, error, status } = await useAsyncData(key, () =>
    $fetch(request, object)
  )

  return { data, error, status }
}
// now not using