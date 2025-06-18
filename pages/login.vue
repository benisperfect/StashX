<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Separator } from "../components/ui/separator";
</script>

<template>
  <Card>
    <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Please enter your credentials to login.
        </CardDescription>
    </CardHeader>
    <CardContent></CardContent>
    <CardFooter></CardFooter>
  </Card>
</template>
