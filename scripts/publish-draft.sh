#!/usr/bin/env bash
# Promote a reviewed agent-drafts/<slug>.md into src/content/blog/, stamp
# pubDate, and commit — the one manual step that turns an agent's draft into
# something deploy.sh can ship. Never run automatically by an agent; you run
# this yourself after reading the draft.
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
sed "s/^pubDate: TODO # set on publish\$/pubDate: ${TODAY}/" "$SRC" > "$DEST"
if ! grep -q "^pubDate: ${TODAY}\$" "$DEST"; then
  echo "warning: pubDate placeholder not found/replaced — check $DEST by hand" >&2
fi
rm "$SRC"

git add "$DEST" "$SRC" 2>/dev/null || git add "$DEST"
TITLE=$(grep '^title:' "$DEST" | head -1 | sed 's/^title: *//; s/^"//; s/"$//')
git commit -m "publish: ${TITLE:-$SLUG}"

echo "==> committed. Review with: git show --stat HEAD"
echo "==> when ready: npm run build && bash scripts/deploy.sh"
