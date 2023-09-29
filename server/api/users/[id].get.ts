

export default defineEventHandler(async ({ context }) => {
  try {
    const id = context.params?.id as string



    return {
      data: []
    }
  } catch (error) {
    return appError(error);
  }

})  