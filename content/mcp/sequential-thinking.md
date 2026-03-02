---
title: "sequential-thinking"
category: "other"
installation_method: "cloud code"
created_at: "2026-03-02"
mcp_config:
  key: "sequential-thinking"
  server:
    type: "stdio"
    command: "npx"
    args: ["-y", "@modelcontextprotocol/server-sequential-thinking"]
    env:

---

## Installation Steps

1. Add the following to your `.mcp.json` configuration:

```json
{
  "mcpServers": {
    "sequential-thinking": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-sequential-thinking"
      ],
      "env": {}
    }
  }
}
```

2. Restart Claude Code to apply the changes.

