import { getOne } from "../../db/mediaTypes.js";

export default defineEventHandler(async ({ context }) => {

  try {
    const id = context.params?.id as string

    const data = await getOne(id)

    return {
      data: data
    }
  } catch (error) {
    return appError(error);
  }


}) 