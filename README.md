# @vedhae/cms-schema

Canonical CMS schema for Vedhae projects.

Used by:
- vedhae-website (Astro frontend)
- vedhae-admin (React CMS)
- vedhae-worker (Cloudflare Worker)

This package contains **types only** and has no runtime code.

STEPS:
npm run build
git add . 
git commit -m "message"
git push

npm version patch

npm login
npm publish --access public


go to root folder and run the following command to make the new package available to all 3 repos :

./scripts/install-cms-schema.sh 
