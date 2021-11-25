import PageHeader from '@components/Header/Page'
import MainLayout from '@components/Layout/Main'
import Navigation from '@components/Navigation'
import Head from 'next/head'
import React from 'react'
import teams_world from '@images/teams_earth.png'
import JoinTheTeamSnippet from '@components/Snippets/JoinTheTeam'

function Team() {
    return (
        <>
            <Head>
                <title>The NNDYM Team</title>
            </Head>   
            <Navigation/>
            <MainLayout>
                <PageHeader
                    title="Team"
                    cta="The group of wonderful people keeping the engine running."
                    subtitle='Our team brings the passion, leadership and drive that is needed to keep NNDYM running all over the globe. '
                    alt="Earth"
                    image={teams_world}
                />
                <JoinTheTeamSnippet/>
            </MainLayout>
        </>
    )
}

export default Team
