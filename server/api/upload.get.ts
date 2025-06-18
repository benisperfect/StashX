import { readdir } from 'fs/promises'
import path from 'path'

export default defineEventHandler(async () => {
  const uploadsDir = path.resolve('./public/uploads')
  const files = await readdir(uploadsDir)
  return files
})
 