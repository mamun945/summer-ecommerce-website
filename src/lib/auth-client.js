import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://summer-ecommerce-website.vercel.app"
})
export const { signIn, signUp, useSession } = createAuthClient()