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
import Link from 'next/link'

export function LoginElement() {

    return (
        <div className="flex justify-center items-center min-h-screen">
            <Card className="w-96">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>
                        Login to your account.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" placeholder="Username" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" placeholder="Password" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Link href="/dashboard">
                        <Button>Save changes</Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}

export default LoginElement;
