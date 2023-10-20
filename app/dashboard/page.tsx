"use client"
import { Button } from '@/components/ui/button'
import { signIn, signOut } from 'next-auth/react'
import React from 'react'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
const page = () => {
    const { status } = useSession()
    return (
        <>
            {status === 'authenticated' ? (
                <Button onClick={() => signOut()}>
                    Sign Out
                </Button>
            ):(
                <Button>
                    Sign In
                </Button>
            
            )}

        </>
    )
}

export default page