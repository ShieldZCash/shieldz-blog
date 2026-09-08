#!/usr/bin/env bash
# Promote a reviewed agent-drafts/<slug>.md into src/content/blog/, stamp
# pubDate, build (as a gate, not a deploy), and only commit if the build
# passes — a bad post never gets committed, it comes right back as a draft.
# This is safe to call from local-mcp's prepare_publish tool (an agent can
# trigger this) precisely BECAUSE it stops at a commit, never at deploy.sh:
# the live site is untouched either way, that step stays manual.
set -euo pipefail
cd "$(dirname "$0")/.."

SLUG="${1:-}"
if [ -z "$SLUG" ]; then
  echo "usage: scripts/publish-draft.sh <slug>" >&2
  echo "available drafts:" >&2
  ls agent-drafts/*.md 2>/dev/null | xargs -n1 basename | sed 's/\.md$//' >&2 || echo "  (none)" >&2
  exit 1
fi

SRC="agent-drafts/${SLUG}.md"
DEST="src/content/blog/${SLUG}.md"
[ -f "$SRC" ] || { echo "no draft at $SRC" >&2; exit 1; }
[ -f "$DEST" ] && { echo "refusing to overwrite existing post at $DEST" >&2; exit 1; }

TODAY=$(date +%Y-%m-%d)
sed \
  -e "s/^pubDate: TODO # set on publish\$/pubDate: ${TODAY}/" \
  -e "/^<!-- draft via shieldz-local-mcp/d" \
  "$SRC" > "$DEST"
if ! grep -q "^pubDate: ${TODAY}\$" "$DEST"; then
  echo "warning: pubDate placeholder not found/replaced — check $DEST by hand" >&2
fi
rm "$SRC"

echo "==> build (gate before commit)"
BUILD_LOG=$(mktemp)
if ! npm run build >"$BUILD_LOG" 2>&1; then
  echo "==> BUILD FAILED — rolling back, nothing committed, draft restored" >&2
  mv "$DEST" "$SRC"
  tail -60 "$BUILD_LOG" >&2
  rm -f "$BUILD_LOG"
  exit 1
fi
rm -f "$BUILD_LOG"

git add "$DEST"
TITLE=$(grep '^title:' "$DEST" | head -1 | sed 's/^title: *//; s/^"//; s/"$//')
git commit -m "publish: ${TITLE:-$SLUG}"

echo "==> committed + build verified. Live site NOT touched."
echo "==> review: git show --stat HEAD"
echo "==> when ready: bash scripts/deploy.sh"
