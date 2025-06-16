import formidable from 'formidable'
import { writeFile } from 'fs/promises'

export default defineEventHandler(async (event) => {
  const form = formidable({ multiples: false })

  const [fields, files] = await form.parse(event.node.req)

  if (!files.file || !files.file[0]) {
    throw new Error('No file uploaded');
  }
  const file = files.file[0]
  const data = await import('fs/promises').then(fs => fs.readFile(file.filepath))
  await writeFile(`./public/uploads/${file.originalFilename}`, data)

  return { success: true, path: `/uploads/${file.originalFilename}` }
})
