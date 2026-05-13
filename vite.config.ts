import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * GitHub Pages URLs:
 * - Project site: https://<user>.github.io/<repo>/  → base must be "/<repo>/"
 * - User/org site: repo named "<user>.github.io" → served at domain root → base "/"
 *
 * Override anytime: GITHUB_PAGES_BASE=/my-repo/ npm run build
 */
function pagesBase(): string {
  const manual = process.env.GITHUB_PAGES_BASE?.trim()
  if (manual) {
    let b = manual.startsWith('/') ? manual : `/${manual}`
    return b.endsWith('/') ? b : `${b}/`
  }

  if (process.env.GITHUB_ACTIONS !== 'true') return '/'

  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
  if (!repo) return '/'
  if (repo.endsWith('.github.io')) return '/'

  return `/${repo}/`
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: pagesBase(),
})
