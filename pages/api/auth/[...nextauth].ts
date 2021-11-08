import axios from "axios"
import NextAuth from "next-auth"
import Providers from "next-auth/providers"

const options = {
    // Configure one or more authentication providers
    providers: [
      Providers.Credentials({
          name: "Credentials",
          credentials: {
              email: {label:"Email", type:"email", placeholder:"your_email@example.com"},
              password: {label:"Password", type:"password"}
          },
          async authorize(credentials) {
              try {
                  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/local`, {
                        identifier: credentials.email,
                        password: credentials.password
                  });
                  if(data) {
                      return data
                  }
                  else {
                      return null;
                  }
                } catch (error) {
                  console.error(error);
                  return null;
                }
          }
      })
    ],
    session: {
        jwt: true,
    },
    callbacks: {
        jwt: async (token, user:any, account) => {
            const isSignIn = user ? true : false;
            if(isSignIn) {
                token.jwt = user.jwt;
                token.id = user.user.id;
                token.email = user.user.email;
                token.name = user.user.first_name + " " + user.user.last_name;
            }
            return Promise.resolve(token); 
        },

        session: async (session, user) => {
            session.jwt = user.jwt;
            session.id = user.id;
            return Promise.resolve(session);
        }
    },
    pages: {
        signIn: "/login",
    }
}

const exp = (req, res) => NextAuth(req, res, options)

export default exp

