import formidable from "formidable";
import { writeFile } from "fs/promises";

export default defineEventHandler(async (event) => {
  const form = formidable({ multiples: false });

  const [fields, files] = await form.parse(event.node.req);

  if (!files.file || files.file.length === 0) {
    throw new Error("No file uploaded");
  }

  const savePath:string[] = [];

  for (const file of files.file) {
    const data = await import('fs/promises').then(fs => fs.readFile(file.filepath));
    const path = `./public/uploads/${file.originalFilename}`;
    await writeFile(path, data);
    savePath.push(`/uploads/${file.originalFilename}`);
}
return { success: true, paths: savePath };
});

