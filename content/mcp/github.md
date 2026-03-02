---
title: "github"
category: "devops"
installation_method: "cloud code"
created_at: "2026-03-02"
mcp_config:
  key: "github"
  server:
    command: "npx"
    args: ["-y", "@modelcontextprotocol/server-github"]
    env:
      GITHUB_PERSONAL_ACCESS_TOKEN: "${GITHUB_PERSONAL_ACCESS_TOKEN}"
---

## Installation Steps

1. Install using the following command:

```bash
claude mcp add github --scope user -- npx -y @modelcontextprotocol/server-github
```

2. Add the following to your `.mcp.json` configuration:

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-github"
      ],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "${GITHUB_PERSONAL_ACCESS_TOKEN}"
      }
    }
  }
}
```

3. Restart Claude Code to apply the changes.

