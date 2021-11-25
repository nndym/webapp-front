import PageHeader from '@components/Header/Page'
import MainLayout from '@components/Layout/Main'
import Navigation from '@components/Navigation'
import Head from 'next/head'
import React from 'react'
import teams_world from '@images/teams_earth.png'
import JoinTheTeamSnippet from '@components/Snippets/JoinTheTeam'
import PageContainer from '@components/Page/Container'
import Tiles from '@components/Tiles'

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
                <PageContainer>
                    <Tiles
                        title="Opperating World Wide"
                        data={[
                            {
                                title: 'India',
                                text: 's soante mollis sollicitudin. lis sollicitudin. Cras ut mauris Cras ut mauris eleifend, vehiculalandit augue',
                                link: "/team/india"
                            },
                            {
                                title: 'Europe',
                                text: 'ante mollis sollicitudin. Cras ut mauris eleifend, vehiculalandit augue',
                                link: "/team/europe"
                            },
                            {
                                title: 'Africa',
                                text: 's soante mollis sollicitudin. lis sollicitudin. Cras ut mauris Cras ut mauris eleifend, vehiculalandit augue',
                                link: "/team/africa"
                            },
                            {
                                title: 'United States',
                                text: 'n eget nisl eu ante mollis sollicitudin.udin. Cras ut mauris Cras ut mauri udin. Cras ut mauris Cras ut mauri Cras ut mauris eleifend, vehicula neque vel, blandit augue',
                                link: "/team/usa"
                            },
                            {
                                title: 'Australia',
                                text: 'n eget nisl eu ante mollis sollicitudin. Cras ut mauris eleifend, vehicula neque vel, blandit augue',
                                link: "/team/australia"
                            },
                            {
                                title: 'New Zealand',
                                text: 'ante mollis sollicitudin. Cras ut mauris eleifend, vehiculalandit augue',
                                link: "/team/newzealand"
                            },
                            
                        ]}
                    />
                </PageContainer>
                <JoinTheTeamSnippet/>
            </MainLayout>
        </>
    )
}

export default Team
