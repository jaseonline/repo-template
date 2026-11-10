# Stack: Cloudflare Worker

Use with `node-ts` if the Worker has dependencies or a build step. A plain-JS Worker with no `package.json` needs only this stack.

| File | Merge into |
| --- | --- |
| `gitignore` | Append to `.gitignore` |
| `CLAUDE.gotchas.md` | The Gotchas section of `CLAUDE.md` |
| `wrangler.jsonc` | Copy to the repo root; replace placeholders |
| Push-guard | Set `DEPLOY_PATHS` in `.claude/hooks/push-guard.sh` (below) |

Set the push-guard filter to match your Workers Builds `path_includes`, for example:

```sh
DEPLOY_PATHS='^(worker/|src/|wrangler\.jsonc$)'
```

Workers Builds deploys on push to `main`, so the push-guard path filter is what stops an unreviewed production deploy.
