---
title: "Filesystem MCP Server"
category: "backend"
installation_method: "cli"
created_at: "2026-03-01"
mcp_config:
  key: "filesystem"
  server:
    command: "npx"
    args: ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/allowed/directory"]
---

## Installation Steps

1. Install the filesystem MCP server globally:

```bash
npm install -g @modelcontextprotocol/server-filesystem
```

2. Add it to your `.mcp.json` configuration:

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/path/to/allowed/directory"
      ]
    }
  }
}
```

3. Replace `/path/to/allowed/directory` with the actual directory you want the server to access.

4. Restart your MCP client to apply the changes.

## Notes

- Provides read/write access to files and directories.
- Only allows access to directories specified in the configuration.
- Useful for file management tasks and code editing workflows.
