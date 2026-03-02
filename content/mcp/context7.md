---
title: "context7"
category: "other"
installation_method: "cloud code"
created_at: "2026-03-02"
mcp_config:
  key: "context7"
  server:
    context7:
      type: "http"
      url: "https://mcp.context7.com/mcp"
      headers:
        CONTEXT7_API_KEY: "API_KEY"
---

## Installation Steps

1. Add the following to your `.mcp.json` configuration:

```json
{
  "mcpServers": {
    "context7": {
      "context7": {
        "type": "http",
        "url": "https://mcp.context7.com/mcp",
        "headers": {
          "CONTEXT7_API_KEY": "API_KEY"
        }
      }
    }
  }
}
```

2. Restart Claude Code to apply the changes.

