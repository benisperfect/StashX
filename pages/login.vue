<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const loginInfo = reactive({
  username: "",
  password: "",
});

const router = useRouter();

const submitLogin = async (e: Event) => {
  e.preventDefault();
  const res = await fetch("/api/auth/login", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginInfo),
  });

  const result = await res.json();
  if (result.success) {
    alert("Login successful!");
    router.push("/");
  } else {
    alert(result.message || "Login failed");
  }
};
</script>

<template>
  <div
    class="min-h-screen flex flex-col justify-center items-center bg-background px-4"
  >
    <Card class="w-full max-w-md shadow-lg">
      <CardHeader class="text-center">
        <CardTitle class="text-2xl font-bold"> Welcome back </CardTitle>
        <CardDescription>
          Login with your Apple or Google account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form class="space-y-6" @submit="submitLogin">
          <div class="flex flex-col gap-4">
            <Button
              variant="outline"
              class="w-full flex items-center gap-2 justify-center"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="h-5 w-5"
              >
                <path
                  d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                  fill="currentColor"
                />
              </svg>
              Login with Apple
            </Button>
            <Button
              variant="outline"
              class="w-full flex items-center gap-2 justify-center"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="h-5 w-5"
              >
                <path
                  d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                  fill="currentColor"
                />
              </svg>
              Login with Google
            </Button>
          </div>
          <div class="relative flex items-center">
            <div class="flex-grow border-t border-border"></div>
            <span class="mx-4 bg-background px-2 text-muted-foreground text-sm">
              Or continue with
            </span>
            <div class="flex-grow border-t border-border"></div>
          </div>
          <div class="space-y-4">
            <div class="space-y-2">
              <label for="email" class="block text-sm font-medium text-gray-700"
                >Username</label
              >
              <Input
                id="username"
                type="username"
                placeholder="Robinson"
                required
                v-model="loginInfo.username"
                autocomplete="username"
              />
            </div>
            <div class="space-y-2">
              <label
                for="password"
                class="block text-sm font-medium text-gray-700"
                >Password</label
              >
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
                v-model="loginInfo.password"
                autocomplete="current-password"
              />
              <a
                href="#"
                class="text-sm underline-offset-4 hover:underline ml-2 block mt-1"
              >
                Forgot your password?
              </a>
            </div>
            <Button type="submit" class="w-full"> Login </Button>
          </div>
          <div class="text-center text-sm">
            Don't have an account?
            <NuxtLink to="/signin" class="underline underline-offset-4">
              Sign up
            </NuxtLink>
          </div>
        </form>
      </CardContent>
    </Card>
    <div
      class="mt-6 text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary"
    >
      By clicking continue, you agree to our
      <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
    </div>
  </div>
</template>
