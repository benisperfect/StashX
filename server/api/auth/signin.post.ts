import { defineEventHandler, readBody } from 'h3';
import { writeFile, mkdir, readFile } from 'fs/promises';

const userPath = './server/data/users.json';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password, firstName, lastName, username } = body;

  try {
    await mkdir('./server/data', { recursive: true });
    let users: { email: string; password: string, firstName: string, lastName: string, username: string }[] = [];

    try {
      const file = await readFile(userPath, 'utf-8');
      users = JSON.parse(file);
    } catch {}

    if (users.find(u => u.email === email)) {
      return { success: false, message: 'Email already exists' };
    }

    if(users.find(u => u.username === username)) {
      return { success: false, message: 'Username already exists' };
    }

    users.push({ email, password, firstName, lastName, username});
    await writeFile(userPath, JSON.stringify(users, null, 2));

    return { success: true };
  } catch (err) {
    return { success: false, message: 'Failed to create account' };
  }
});
