import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const generateRSSFeed = (blogs, baseURL) => {
  const now = new Date().toUTCString();

  const rssItems = blogs
    .map(
      (blog) => `
    <item>
      <title><![CDATA[ ${blog.title} ]]></title>
      <link>${baseURL}/blog/${blog.slug}</link>
      <guid>${baseURL}/blog/${blog.slug}</guid>
      <pubDate>${new Date(blog.createdAt).toUTCString()}</pubDate>
      <description><![CDATA[ ${blog.description} ]]></description>
      ${
        blog.image
          ? `<enclosure url="${blog.image}" length="0" type="image/png"/>`
          : ""
      }
    </item>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>Abdelmomen El-shatory Blog</title>
    <link>${baseURL}/blog</link>
    <description>Latest articles and insights from Abdelmomen El-shatory.</description>
    <lastBuildDate>${now}</lastBuildDate>
    <docs>https://validator.w3.org/feed/docs/rss2.html</docs>
    <generator>https://github.com/beingmomen/blog</generator>
    <language>en</language>
    <image>
      <title>Abdelmomen El-shatory Blog</title>
      <url>${baseURL}/icon.png</url>
      <link>${baseURL}/blog</link>
    </image>
    <copyright>Copyright ${new Date().getFullYear()} Abdelmomen El-shatory All Rights Reserved</copyright>
    <atom:link href="${baseURL}/blog/rss.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`;
};

export default defineEventHandler(async () => {
  const config = useRuntimeConfig();

  try {
    const response = await fetch(`${config.public.baseURL}/blogs/all`);
    const data = await response.json();

    if (!response.ok) {
      throw createError({
        statusCode: response.status,
        message: "Failed to fetch blogs",
      });
    }

    // Generate RSS feed
    const rssContent = generateRSSFeed(data, config.public.baseURL);

    // Save RSS feed to public directory
    const publicDir = resolve("./public");
    await writeFile(resolve(publicDir, "rss.xml"), rssContent, "utf-8");

    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw createError({
      statusCode: 500,
      message: "Internal server error",
    });
  }
});
