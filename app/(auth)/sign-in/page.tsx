
"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import { signIn, signOut } from 'next-auth/react'
import React from 'react'
import { BsGithub, BsGoogle } from 'react-icons/bs'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
const page = () => {
    const { status } = useSession()
    return (
        <div>
            <Card>
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Create an account</CardTitle>
                    <CardDescription>
                        Enter your email below to create your account
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid grid-cols-2 gap-6">
                        <Button onClick={() => signIn("github")} variant="outline">
                            <BsGithub />
                            Github
                        </Button>
                        <Button onClick={() => signIn('google')} variant="outline">
                            <BsGoogle />
                            Google
                        </Button>
                    </div>

                </CardContent>
                <CardFooter>
                    {status === 'authenticated' ? (
                        <Button onClick={() => signOut()}>Sign Out</Button>
                    ) : (
                        <Button>Sign In</Button>
                    )}
                </CardFooter>
            </Card>
        </div>
    )
}

export default page