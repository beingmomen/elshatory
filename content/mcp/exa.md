---
title: "exa"
category: "ai"
installation_method: "cloud code"
created_at: "2026-03-02"
mcp_config:
  key: "exa"
  server:
    exa:
      type: "http"
      url: "https://mcp.exa.ai/mcp"
---

## Installation Steps

1. Install using the following command:

```bash
claude mcp add --transport http exa https://mcp.exa.ai/mcp
```

2. Add the following to your `.mcp.json` configuration:

```json
{
  "mcpServers": {
    "exa": {
      "exa": {
        "type": "http",
        "url": "https://mcp.exa.ai/mcp"
      }
    }
  }
}
```

3. Restart Claude Code to apply the changes.

