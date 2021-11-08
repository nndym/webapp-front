import React from 'react'
import { getSession, signIn, signOut } from 'next-auth/client'

function Account({session}) {

    if(!session) {
        signIn();
        return <p>Loading...</p> // Fix this
    }

    return (
        <div>
            <button
                onClick={()=>signOut()}
            >Sign out</button>
        </div>
    )
}

export async function getServerSideProps(ctx){
    const session = await getSession(ctx)

    return {
        props: {
            session
        }
    }
}

export default Account
