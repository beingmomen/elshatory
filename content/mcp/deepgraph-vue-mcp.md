---
title: "DeepGraph Vue MCP"
category: "frontend"
installation_method: "cloud code"
created_at: "2026-03-02"
mcp_config:
  key: "DeepGraph Vue MCP"
  server:
    command: "npx"
    args: ["-y", "mcp-code-graph@latest", "vuejs/core"]
---

## Installation Steps

1. Run the following command to install automatically:

```bash
npx claude-code-templates@latest --mcp=deepgraph/deepgraph-vue --yes
```

2. Or add manually to your `.mcp.json`:

```json
{
  "mcpServers": {
    "DeepGraph Vue MCP": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-code-graph@latest",
        "vuejs/core"
      ]
    }
  }
}
```

3. Restart Claude Code to apply the changes.

## Notes

- Provides deep code graph analysis for the Vue.js core repository.
- Enables semantic code search, dependency analysis, and code exploration.
- Uses the `mcp-code-graph` package to build a graph of the `vuejs/core` codebase.
