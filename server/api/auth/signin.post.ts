import { defineEventHandler, readBody } from 'h3';
import { writeFile, mkdir, readFile } from 'fs/promises';

const userPath = './server/data/users.json';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password } = body;

  try {
    await mkdir('./server/data', { recursive: true });
    let users: { username: string; password: string }[] = [];

    try {
      const file = await readFile(userPath, 'utf-8');
      users = JSON.parse(file);
    } catch {}

    if (users.find(u => u.username === username)) {
      return { success: false, message: 'Username already exists' };
    }

    users.push({ username, password });
    await writeFile(userPath, JSON.stringify(users, null, 2));

    return { success: true };
  } catch (err) {
    return { success: false, message: 'Failed to create account' };
  }
});
