---
title: "nuxt"
category: "frontend"
installation_method: "cloud code"
created_at: "2026-03-02"
mcp_config:
  key: "nuxt"
  server:
    nuxt:
      type: "http"
      url: "https://nuxt.com/mcp"
---

## Installation Steps

1. Install using the following command:

```bash
claude mcp add --transport http nuxt-remote https://nuxt.com/mcp
```

2. Add the following to your `.mcp.json` configuration:

```json
{
  "mcpServers": {
    "nuxt": {
      "nuxt": {
        "type": "http",
        "url": "https://nuxt.com/mcp"
      }
    }
  }
}
```

3. Restart Claude Code to apply the changes.

