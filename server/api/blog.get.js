export default defineEventHandler(async () => {
  const config = useRuntimeConfig();

  try {
    const response = await fetch(`${config.public.baseURL}/blogs/all`);
    const data = await response.json();

    if (!response.ok) {
      throw createError({
        statusCode: response.status,
        message: "Failed to fetch blogs",
      });
    }

    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw createError({
      statusCode: 500,
      message: "Internal server error",
    });
  }
});
