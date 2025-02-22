const blogs = ref([]);

export const useBlog = () => {
  const config = useRuntimeConfig();
  const cloudinary = config.public.cloudinary;

  const fetchBlogs = async () => {
    const { data } = await useFetch("/api/blog");

    const transformedBlogs = data.value.map((blog) => ({
      ...blog,
      image: `${cloudinary.cloudinaryUrl}${blog.image}`,
    }));
    blogs.value = transformedBlogs;
  };

  return {
    fetchBlogs,
    data: blogs,
  };
};
