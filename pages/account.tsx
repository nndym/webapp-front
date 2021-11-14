import React from 'react'
import { getSession, signIn, signOut } from 'next-auth/client'
import Loading from '@components/Loading';

function Account({session}) {

    if(!session) {
        signIn();
        return <Loading/> // Fix this
    }

    return (
        <div>
            <button
                onClick={()=>signOut({ callbackUrl: '/' })}
            >Sign out</button>
            <br/>
            {session.confirmed ? "Email confirmed" : "Email not confirmed"}
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
