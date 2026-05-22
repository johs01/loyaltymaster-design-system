Use this prompt in a fresh Cowork session:

````text
You are resuming work in /Users/johs777/LOYALTYMASTER/sendPUSH-PRODUCTION for user johs777.

1. Run this staleness check first:

```bash
cd /Users/johs777/LOYALTYMASTER/sendPUSH-PRODUCTION
checks=(
  "AGENTS.md 52a61fa09cf2 2752"
  "package.json 793ce2bb065a 920"
  "src/components/Nav.tsx e4a3132e8bfe 26571"
  "src/App.tsx 9138ec58d790 13735"
  "src/components/HeroSection.tsx 00e192f3e8c2 2249"
  "src/utils/navigate.ts 7264f6a25916 140"
  "public/wireframe-remy.js 3b0b873f09dc 16769"
)
for row in "${checks[@]}"; do
  read -r file expect_sha expect_size <<<"$row"
  actual_sha=$(shasum -a 256 "$file" | awk '{print substr($1,1,12)}')
  actual_size=$(stat -f %z "$file")
  actual_mtime=$(stat -f '%Sm' -t '%Y-%m-%d %H:%M:%S %z' "$file")
  status="OK"
  [[ "$actual_sha" == "$expect_sha" && "$actual_size" == "$expect_size" ]] || status="DRIFT"
  printf '%-36s expect=%s/%s actual=%s/%s mtime=%s [%s]\n' \
    "$file" "$expect_sha" "$expect_size" "$actual_sha" "$actual_size" "$actual_mtime" "$status"
done
```

2. Read `/Users/johs777/LOYALTYMASTER/sendPUSH-PRODUCTION/CLAUDE.md` fully.
3. If any fingerprint or mtime drifted, treat `CLAUDE.md` as hints only and re-read the actual files before trusting the snapshot.
4. Report back with:
   - any fingerprint drift
   - current git branch and worktree status
   - whether PR #1 still exists and whether it is still draft
   - the current status of the navbar-logo fix in concise prose grounded in the actual files
5. Ask exactly one clarifying question before taking any action.

Be critical. Call out real risks or stale assumptions instead of smoothing over them.
````
