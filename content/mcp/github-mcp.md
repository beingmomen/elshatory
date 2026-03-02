---
title: "GitHub MCP Server"
category: "devops"
installation_method: "cloud code"
created_at: "2026-03-01"
mcp_config:
  key: "github"
  server:
    command: "npx"
    args: ["-y", "@modelcontextprotocol/server-github"]
    env:
      GITHUB_PERSONAL_ACCESS_TOKEN: "<your-token>"
---

## Installation Steps

1. Open your Claude Code configuration file `.mcp.json` in your project root.

2. Add the following configuration:

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
        "GITHUB_PERSONAL_ACCESS_TOKEN": "<your-token>"
      }
    }
  }
}
```

3. Generate a GitHub Personal Access Token from **Settings > Developer settings > Personal access tokens**.

4. Replace `<your-token>` with your actual token.

5. Restart Claude Code to apply the changes.

## Notes

- Provides access to GitHub repositories, issues, pull requests, and more.
- Requires a GitHub Personal Access Token with appropriate scopes.
- Works with both public and private repositories.
