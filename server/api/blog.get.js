import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const generateRSSFeed = (blogs, siteUrl) => {
  const now = new Date().toUTCString()

  const rssItems = blogs
    .map(
      blog => `
    <item>
      <title><![CDATA[ ${blog.title} ]]></title>
      <link>${siteUrl}/blog/${blog.slug}</link>
      <guid>${siteUrl}/blog/${blog.slug}</guid>
      <pubDate>${new Date(blog.createdAt).toUTCString()}</pubDate>
      <description><![CDATA[ ${blog.description} ]]></description>
      ${
        blog.image
          ? `<enclosure url="${blog.image}" length="0" type="image/png"/>`
          : ''
      }
    </item>`
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>مدونة عبدالمؤمن الشطوري</title>
    <link>${siteUrl}/blog</link>
    <description>أحدث المقالات والمواضيع التقنية حول تطوير الويب والبرمجة من عبدالمؤمن الشطوري.</description>
    <lastBuildDate>${now}</lastBuildDate>
    <docs>https://validator.w3.org/feed/docs/rss2.html</docs>
    <generator>https://github.com/beingmomen</generator>
    <language>ar</language>
    <image>
      <title>مدونة عبدالمؤمن الشطوري</title>
      <url>${siteUrl}/favicon.ico</url>
      <link>${siteUrl}/blog</link>
    </image>
    <copyright>حقوق النشر ${new Date().getFullYear()} عبدالمؤمن الشطوري - جميع الحقوق محفوظة</copyright>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`
}

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  try {
    const response = await fetch(`${config.public.baseURL}/blogs/all`)
    const data = await response.json()

    if (!response.ok) {
      throw createError({
        statusCode: response.status,
        message: 'Failed to fetch blogs'
      })
    }

    // Generate RSS feed using site URL (not API URL)
    const siteUrl = config.public.siteUrl
    const rssContent = generateRSSFeed(data, siteUrl)

    // Save RSS feed to public directory
    const publicDir = resolve('./public')
    await writeFile(resolve(publicDir, 'rss.xml'), rssContent, 'utf-8')

    return data
  } catch (error) {
    console.error('Error fetching blogs:', error)
    throw createError({
      statusCode: 500,
      message: 'Internal server error'
    })
  }
})
