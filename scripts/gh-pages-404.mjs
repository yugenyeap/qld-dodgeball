import { copyFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist')
const index = join(root, 'index.html')
const notFound = join(root, '404.html')

if (existsSync(index)) {
  copyFileSync(index, notFound)
}
