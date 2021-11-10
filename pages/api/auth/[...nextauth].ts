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
                  let data = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/local`, {
                        identifier: credentials.email,
                        password: credentials.password
                  }).then(res=>{
                      return res.data
                  }).catch(err=>{
                      if(err.response.data.statusCode === 400) {
                          throw err.response.data.data[0].messages[0].id
                      }
                  })
                  return data
                  
                } catch (error) {
                  throw new Error(error)
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
                token.confirmed = user.user.confirmed;
                token.blocked = user.user.blocked;
                token.role = user.user.role.id;
                token.role_name = user.user.role.name;
                token.country = user.user.country;
            }
            return Promise.resolve(token);
        },

        session: async (session, user) => {
            session.jwt = user.jwt;
            session.id = user.id;
            session.confirmed = user.confirmed;
            session.blocked = user.blocked;
            session.role = user.role;
            session.role_name = user.role_name;
            session.country = user.country;
            return Promise.resolve(session);
        }
    },
    pages: {
        signIn: "/login",
    }
}

const exp = (req, res) => NextAuth(req, res, options)

export default exp

