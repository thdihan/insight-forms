// import { getUserByEmail } from "@/data/users";
import { login } from "@/app/actions.ts/login";
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

                    let user = {
                        id: "",
                        email: "",
                        password: "",
                    };
                    await login(credentials.email).then((data) => {
                        if (data) {
                            user = { ...data, id: String(data.id) };
                        }
                    });

                    console.log("Auth options: ", credentials, user);

                    if (user) {
                        const isMatch = user?.password === credentials.password;

                        if (isMatch) {
                            return { ...user, id: String(user.id) };
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
