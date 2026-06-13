#!/bin/zsh
set -euo pipefail

ROOT="/Users/faridlili/Desktop/PERSONAL/Projek Buat Apps/design-web-app-untuk-world-cup"
CODEX="/Applications/Codex.app/Contents/Resources/codex"
LOCK="$ROOT/logs/news-update.lock"
LOG="$ROOT/logs/news-update.log"

if ! mkdir "$LOCK" 2>/dev/null; then
  print "Kemas kini berita masih berjalan." >> "$LOG"
  exit 0
fi
trap 'rmdir "$LOCK"' EXIT

print "\n[$(date '+%Y-%m-%d %H:%M:%S %Z')] Mula kemas kini berita" >> "$LOG"

"$CODEX" --search --ask-for-approval never exec \
  --ephemeral \
  --skip-git-repo-check \
  --sandbox workspace-write \
  --cd "$ROOT" \
  - < "$ROOT/scripts/news-editor-prompt.md" >> "$LOG" 2>&1

node "$ROOT/scripts/build-news-data.mjs" >> "$LOG" 2>&1

# Auto-deploy ke Cloudflare Pages melalui GitHub
cd "$ROOT"
git add data/news-data.js data/news.json
if ! git diff --cached --quiet; then
  git commit -m "berita: kemas kini $(date '+%Y-%m-%d %H:%M %Z')"
  git push origin main >> "$LOG" 2>&1
  print "[$(date '+%Y-%m-%d %H:%M:%S %Z')] Deploy ke GitHub selesai" >> "$LOG"
else
  print "[$(date '+%Y-%m-%d %H:%M:%S %Z')] Tiada perubahan berita, deploy dilangkau" >> "$LOG"
fi

print "[$(date '+%Y-%m-%d %H:%M:%S %Z')] Selesai" >> "$LOG"
