# Magicshoes · magicshoes.ro

Official Magicshoes website in Oradea. Simple HTML, CSS and JavaScript, with no build step.

## Change the website

- **Text and opening hours:** edit index.html. Hours also appear in the JSON-LD near the top; update both places.
- **Photos and logo:** upload replacements in assets/ using the same filenames, or update their paths in index.html. Use compressed WebP photos.
- **Colours and layout:** edit styles.css.
- **Menu and photo comparisons:** edit app.js.

Open the file in GitHub, click the pencil, edit, then choose **Commit changes**. Changes on **main** publish automatically after a successful run in the **Actions** tab. For review first, create a branch and pull request; merging into main publishes it. Pull requests are not deployed by this workflow.

## Hosting

- Live site: https://magicshoes.ro/
- Cloudflare Pages project: magicshoes-oradea
- Backup address: https://magicshoes-oradea.pages.dev/
- Publishing workflow: .github/workflows/deploy.yml

GitHub Actions publishes to the existing Direct Upload project through Wrangler, preserving its domains and deployment history. The Actions secret **CLOUDFLARE_API_TOKEN** needs Account → Cloudflare Pages → Edit, limited to the Magicshoes Cloudflare account. Never commit this token to a file. The account ID in the workflow is an identifier, not a secret.

## Preview and recovery

For local preview, run python3 -m http.server 4173 in this folder and visit http://localhost:4173. Stop with Ctrl+C.

Revert an unwanted GitHub commit to publish the previous content again. Previous deployments can also be rolled back in Cloudflare. Keep a separate copy of original photos.

Website photographs, logo and brand materials belong to Magicshoes. This repository does not grant a licence for third-party reuse.
