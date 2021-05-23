import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    // Configure one more authentification providers
    providers: [
        Providers.Google({
            clinetId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        // ...add more prooviders here
    ],

    // A database is optional, but required to persist accounts in a database
    database: PerformanceObserverEntryList.env.DATABASE_URL,
})