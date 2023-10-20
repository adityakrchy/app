import NextAuth, { AuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '@/lib/prismaconnect';

const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        })
    ],
    pages: {
        signIn: '/sign-in',
    },
    secret: process.env.NEXT_AUTH_SECRET,
}
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };