import { mkdir, writeFile, access } from 'node:fs/promises'
import { resolve } from 'node:path'

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

function toYamlValue(value: unknown, indent: number): string {
  const pad = ' '.repeat(indent)
  if (typeof value === 'string') return `"${value}"`
  if (typeof value === 'number' || typeof value === 'boolean') return String(value)
  if (Array.isArray(value)) {
    return value.map(v => `\n${pad}- ${typeof v === 'string' ? `"${v}"` : toYamlValue(v, indent + 2)}`).join('')
  }
  if (typeof value === 'object' && value !== null) {
    return Object.entries(value)
      .map(([k, v]) => `\n${pad}${k}: ${toYamlValue(v, indent + 2)}`)
      .join('')
  }
  return String(value)
}

export default defineEventHandler(async (event) => {
  if (!import.meta.dev) {
    throw createError({
      statusCode: 403,
      message: 'This endpoint is only available in development mode'
    })
  }

  const body = await readBody(event)

  const { name, category, installationMethod, installationSteps, notes, mcpKey, mcpConfigJson } = body

  if (!name || !category || !installationMethod || !installationSteps) {
    throw createError({
      statusCode: 400,
      message: 'Missing required fields: name, category, installationMethod, installationSteps'
    })
  }

  const slug = slugify(name)
  const dir = resolve(process.cwd(), 'content', 'mcp')
  const filePath = resolve(dir, `${slug}.md`)

  // Ensure directory exists
  await mkdir(dir, { recursive: true })

  // Check for duplicate
  try {
    await access(filePath)
    throw createError({
      statusCode: 409,
      message: `A server with the slug "${slug}" already exists`
    })
  } catch (err: any) {
    if (err.statusCode === 409) throw err
    // File doesn't exist — proceed
  }

  const today = new Date().toISOString().split('T')[0]

  // Build mcp_config YAML block
  let mcpConfigBlock = ''
  if (mcpKey && mcpConfigJson) {
    try {
      const serverConfig = JSON.parse(mcpConfigJson)
      mcpConfigBlock = `mcp_config:
  key: "${mcpKey}"
  server:${toYamlValue(serverConfig, 4)}
`
    } catch {
      throw createError({
        statusCode: 400,
        message: 'mcpConfigJson must be valid JSON'
      })
    }
  }

  let markdown = `---
title: "${name}"
category: "${category}"
installation_method: "${installationMethod}"
created_at: "${today}"
${mcpConfigBlock}---

## Installation Steps

${installationSteps}
`

  if (notes) {
    markdown += `
## Notes

${notes}
`
  }

  await writeFile(filePath, markdown, 'utf-8')

  return {
    status: 'success',
    message: `Server "${name}" created successfully`,
    slug,
    path: `/mcp/${slug}`
  }
})
