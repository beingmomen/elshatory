const blogs = ref([]);

export const useBlog = () => {
  const config = useRuntimeConfig();
  const cloudinary = config.public.cloudinary;
  const { get } = useApiRequest();

  const fetchBlogs = async () => {
    const data = await get("/blogs/all");

    const transformedBlogs = data.map((blog) => ({
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
