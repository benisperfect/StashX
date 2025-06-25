import { defineEventHandler, readBody, setCookie } from "h3";
import { readFile } from "fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const userPath = join(process.cwd(), "server", "data", "users.json");
console.log("User data path:", userPath)

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password } = body;

  try {
    const file = await readFile(userPath, "utf-8");
    const users: { username: string; password: string }[] = JSON.parse(file);

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      setCookie(event, "username", user.username, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24,
      });
    }

    if (!user) {
      return {
        success: false,
        message: "Invalid username or password",
      };
    }

    return {
      success: true,
      message: "Login successful",
    };
  } catch (err) {
    console.error("Error reading user data:", err);
    return {
      success: false,
      message: "Error reading user data",
    };
  }
});
