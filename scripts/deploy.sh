#!/usr/bin/env bash
# Build the Astro blog and rsync to the OVH static root (served at shieldz.cash/blog
# via nginx location ^~ /blog/). Key auth, no password.
set -euo pipefail
HOST="ubuntu@51.38.141.59"
KEY="${SHIELDZ_SSH_KEY:-$HOME/.ssh/shieldz-deploy}"
RSH="ssh -i $KEY -o StrictHostKeyChecking=no"
cd "$(dirname "$0")/.."

# Deploy ships whatever's on disk (build reads the working tree, not git), so
# an uncommitted post/edit can go live while the repo silently doesn't know
# about it. Refuse by default; ALLOW_DIRTY_DEPLOY=1 to override deliberately.
if [ -n "$(git status --porcelain)" ] && [ "${ALLOW_DIRTY_DEPLOY:-}" != "1" ]; then
  echo "==> refusing to deploy: uncommitted changes present" >&2
  git status --short >&2
  echo "==> commit first, or re-run with ALLOW_DIRTY_DEPLOY=1 to deploy anyway" >&2
  exit 1
fi

echo "==> build"
npm run build
echo "==> rsync dist -> /var/www/shieldz-blog/blog/"
rsync -az --delete -e "$RSH" dist/ "$HOST:/var/www/shieldz-blog/blog/"

# Auto-submit every blog URL to IndexNow (Bing/Yandex/Seznam/Naver, which also
# feed ChatGPT/Copilot search). Enumerates the built post slugs from dist/.
echo "==> IndexNow ping (blog)"
URLS='"https://shieldz.cash/blog/",'
for d in dist/*/; do s=$(basename "$d"); [ "$s" = "assets" ] && continue; URLS="${URLS}\"https://shieldz.cash/blog/${s}/\","; done
URLS="${URLS%,}"
curl -s -m 15 -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json" \
  -d "{\"host\":\"shieldz.cash\",\"key\":\"f3cc02eb1f512852fb85a51adca5ef20\",\"keyLocation\":\"https://shieldz.cash/f3cc02eb1f512852fb85a51adca5ef20.txt\",\"urlList\":[${URLS}]}" \
  -w " (HTTP %{http_code})\n" || echo " (indexnow ping skipped)"

echo "done. https://shieldz.cash/blog/"
