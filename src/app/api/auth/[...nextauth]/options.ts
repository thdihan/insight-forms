// import { getUserByEmail } from "@/data/users";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")

            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                if (credentials == null) return null;
                try {
                    console.log("Auth Function called");

                    const user = {
                        id: "1", // Add a unique identifier for the user
                        email: "",
                        password: "",
                    };

                    console.log(credentials, user);

                    if (user) {
                        const isMatch = user?.password === credentials.password;

                        if (isMatch) {
                            return user;
                        } else {
                            throw new Error("Email or Password is not correct");
                        }
                    } else {
                        throw new Error("User not found");
                    }
                } catch (error: unknown) {
                    console.log(error);
                    throw new Error(String(error).split("Error:")[1].trim());
                }
            },
        }),
    ],
};
