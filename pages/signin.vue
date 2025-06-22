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
import { Label } from "@/components/ui/label";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const createAccount = reactive({
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  username: "",
});

const router = useRouter();

const sumbitSignIn = async () => {
  const res = await fetch("api/auth/signin", {
    method: "POST",
    body: JSON.stringify(createAccount),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await res.json();
  if (result.success) {
    alert("Login successful!");
    router.push("/");
  } else {
    alert(result.massage || "Something went wrong. Please try again.");
  }
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-black">
    <Card class="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle class="text-xl"> Sign Up </CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid gap-4">
          <div class="grid grid-cols-2 gap-4">
            <div class="grid gap-2">
              <Label for="first-name">First name</Label>
              <Input
                id="first-name"
                placeholder="Max"
                required
                v-model="createAccount.firstName"
              />
            </div>
            <div class="grid gap-2">
              <Label for="last-name">Last name</Label>
              <Input
                id="last-name"
                placeholder="Robinson"
                required
                v-model="createAccount.lastName"
              />
            </div>
          </div>
          <div class="grid gap-2">
            <Label for="username">Username</Label>
            <Input
              id="username"
              placeholder="johndoe!23"
              required
              v-model="createAccount.username"
            />
          </div>
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              v-model="createAccount.email"
              required
            />
          </div>
          <div class="grid gap-2">
            <Label for="password">Password</Label>
            <Input
              id="password"
              type="password"
              v-model="createAccount.password"
            />
          </div>
          <Button @click="sumbitSignIn" type="submit" class="w-full">
            Create an account
          </Button>
          <Button variant="outline" class="w-full">
            Sign up with GitHub
          </Button>
        </div>
        <div class="mt-4 text-center text-sm">
          Already have an account?
          <NuxtLink to="/login">
            <a href="#" class="underline"> Sign in </a>
          </NuxtLink>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
