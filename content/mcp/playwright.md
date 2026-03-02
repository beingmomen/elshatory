---
title: "playwright"
category: "other"
installation_method: "cloud code"
created_at: "2026-03-02"
mcp_config:
  key: "playwright"
  server:
    type: "stdio"
    command: "npx"
    args: ["-y", "@playwright/mcp@latest"]
    env:

---

## Installation Steps

1. Install using the following command:

```bash
claude mcp add playwright npx @playwright/mcp@latest
```

2. Add the following to your `.mcp.json` configuration:

```json
{
  "mcpServers": {
    "playwright": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@playwright/mcp@latest"
      ],
      "env": {}
    }
  }
}
```

3. Restart Claude Code to apply the changes.

