// server/api/data/users.get.ts
import { defineEventHandler } from 'h3';
import { readFile } from 'fs/promises';

const filePath = './server/data/users.json';

export default defineEventHandler(async () => {
  try {
    const fileData = await readFile(filePath, 'utf-8');
    const users = JSON.parse(fileData);

    return {
      success: true,
      users
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to read users file',
      error: error instanceof Error ? error.message : String(error)
    };
  }
});
