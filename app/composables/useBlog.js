const blogs = ref([]);
const singleBlog = ref({});

export const useBlog = () => {
  const config = useRuntimeConfig();
  const cloudinary = config.public.cloudinary;
  const route = useRoute();
  const { get } = useApiRequest();

  const breadcrumbList = ref([
    {
      label: "المقالات",
      icon: "i-lucide-newspaper",
      to: "/blog",
    },
    {
      label: route.params.slug,
      icon: "i-lucide-rss",
      to: `/blog/${route.params.slug}`,
    },
  ]);

  const fetchBlogs = async () => {
    const { data } = await useFetch("/api/blog");

    const transformedBlogs = data.value.map((blog) => ({
      ...blog,
      image: `${cloudinary.cloudinaryUrl}${blog.image}`,
    }));
    blogs.value = transformedBlogs;
  };

  const fetchSingleBlog = async (slug) => {
    const { data } = await get(`/blogs`, {
      params: {
        slug,
      },
    });

    singleBlog.value = data[0];
  };

  return {
    fetchBlogs,
    fetchSingleBlog,
    singleBlog,
    breadcrumbList,
    data: blogs,
  };
};
