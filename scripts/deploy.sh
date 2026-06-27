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
echo "done. https://shieldz.cash/blog/"
