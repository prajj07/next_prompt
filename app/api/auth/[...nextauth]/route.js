import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers";


const handler = NextAuth ({
    providers: [
        GoogleProvider({
            clientid: '',
            clientSecret: '',
        })
    ],
    async session({ session }){

    },
    async  signIn({ profile }) {
        
    }
})