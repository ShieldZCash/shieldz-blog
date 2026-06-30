#!/usr/bin/env bash
# Build the Astro blog and rsync to the OVH static root (served at shieldz.cash/blog
# via nginx location ^~ /blog/). Key auth, no password.
set -euo pipefail
HOST="ubuntu@51.38.141.59"
KEY="${SHIELDZ_SSH_KEY:-$HOME/.ssh/shieldz-deploy}"
RSH="ssh -i $KEY -o StrictHostKeyChecking=no"
cd "$(dirname "$0")/.."
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
