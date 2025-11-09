export default defineEventHandler(async (event) => {
  const { githubToken } = useRuntimeConfig();
  const { url } = getQuery(event);

  if (!url) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request: Missing URL parameter',
    });
  }

  try {
    const response = await $fetch(url, {
      headers: {
        Authorization: `token ${githubToken}`,
      },
    });
    // console.log(response);
    return response;
  } catch (error) {
    console.error('GitHub API error:', error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: 'Failed to fetch repository languages from GitHub API',
    });
  }
});