import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { getAllUsers, userSignIn } from "../utils/auth/action";
import axios from "axios";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,

            authorization: {
                params: {
                    access_type: "offline",
                    prompt: "consent",
                    include_granted_scopes: "true",
                    response_type: "code",
                },
            },
        }),
    ],
    callbacks: {
        async signIn({ user }) {
            const { name, email } = user;

            const userName = name?.replace(/\s+/g, "");

            try {
                const users = await getAllUsers();

                const userExists = users.some((existingUser) => existingUser.email === email);

                const userData: {
                    username?: string | null | undefined;
                    email: string | null | undefined;
                    loginType?: string;
                    registrationType?: string;
                } = {
                    email: email,
                };

                if (userExists) {
                    userData["email"] = email;
                    userData["loginType"] = "google";
                } else {
                    userData["username"] = userName;
                    userData["email"] = email;
                    userData["registrationType"] = "google";
                }

                if (userExists) {
                    await userSignIn(userData);
                } else {
                    console.log(userData);
                    const response = await axios.post(
                        "https://biletebi-back-end.onrender.com/Users/register",

                        userData,
                        {
                            headers: {
                                "Content-Type": "application/json",
                                Accept: "application/json",
                            },
                            withCredentials: true,
                        },
                    );
                    return response.data;
                }
            } catch (error) {
                console.error("Error during sign-in:", error);
                return false;
            }
        },
        async session({ session }) {
            return session;
        },
    },
});
