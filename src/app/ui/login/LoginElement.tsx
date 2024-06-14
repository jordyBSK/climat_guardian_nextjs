"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function LoginElement() {
  return (
      <div className="flex justify-center mt-80">
        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                  id="password"
                  type="password"
                  placeholder="*****************"
                  required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-5">
            <Button className="w-full">Sign in</Button>
            <a
                href="/dashboard"
                className="border-2 border-gray-800 rounded-[7px] w-full text-center p-2 hover:bg-gray-800 hover:text-white"
            >
              Go to dashboard
            </a>
          </CardFooter>
        </Card>
      </div>
  );
}

export default LoginElement;