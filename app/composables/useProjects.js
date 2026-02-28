export const useProjects = () => {
  const { cloudinary } = useRuntimeConfig().public

  return useAPI('/projects', {
    query: { isActive: true },
    transform: (response) => {
      return (response.data || []).map(project => ({
        ...project,
        image: `${cloudinary.cloudinaryUrl}${project.image}`
      }))
    }
  })
}
