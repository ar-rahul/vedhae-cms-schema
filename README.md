# @vedhae/cms-schema

Canonical CMS schema for Vedhae projects.

Used by:
- vedhae-website (Astro frontend)
- vedhae-admin (React CMS)
- vedhae-worker (Cloudflare Worker)

This package contains **types only** and has no runtime code.

STEPS:
npm run build
npm version patch
git add . 
git commit -m "message"
git push
npm login
npm pubish --access public
