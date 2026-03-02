---
title: "chrome-devtools"
category: "devops"
installation_method: "cloud code"
created_at: "2026-03-02"
mcp_config:
  key: "chrome-devtools"
  server:
    command: "npx"
    args: ["-y", "chrome-devtools-mcp@latest"]
---

## Installation Steps

1. Add the following to your `.mcp.json` configuration:

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": [
        "-y",
        "chrome-devtools-mcp@latest"
      ]
    }
  }
}
```

2. Restart Claude Code to apply the changes.

