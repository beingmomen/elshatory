import { unlink, access } from 'node:fs/promises'
import { resolve } from 'node:path'

export default defineEventHandler(async (event) => {
  if (!import.meta.dev) {
    throw createError({
      statusCode: 403,
      message: 'This endpoint is only available in development mode'
    })
  }

  const body = await readBody(event)
  const { slug } = body

  if (!slug) {
    throw createError({
      statusCode: 400,
      message: 'Missing required field: slug'
    })
  }

  const filePath = resolve(process.cwd(), 'content', 'mcp', `${slug}.md`)

  try {
    await access(filePath)
  } catch {
    throw createError({
      statusCode: 404,
      message: `Server "${slug}" not found`
    })
  }

  await unlink(filePath)

  return {
    status: 'success',
    message: `Server "${slug}" deleted successfully`
  }
})
