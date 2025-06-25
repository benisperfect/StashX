import { defineEventHandler, readBody, setCookie } from "h3";
import { readFile } from "fs/promises";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password } = body;

  try {
    const storage = useStorage("assets:server");
    const users = (await storage.getItem("users.json")) as {
      username: string;
      password: string;
    }[];

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
