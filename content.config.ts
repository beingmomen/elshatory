import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    mcp: defineCollection({
      type: 'page',
      source: 'mcp/*.md',
      schema: z.object({
        category: z.string(),
        installation_method: z.string(),
        created_at: z.string(),
        mcp_config: z.object({
          key: z.string(),
          server: z.record(z.any())
        }).optional()
      })
    })
  }
})
