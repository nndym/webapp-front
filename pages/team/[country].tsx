import PageHeader from '@components/Header/Page'
import MainLayout from '@components/Layout/Main'
import Navigation from '@components/Navigation'
import api from 'lib/api'
import Head from 'next/head'
import React from 'react'

function Country({country, team_members}) {

    const getName = () => {
        switch(country){ 
            case 'new_zealand': return 'New Zealand'
            case 'australia': return 'Australia'
            case 'usa': return 'USA'
            case 'africa': return 'Africa'
            case 'europe': return 'Europe'
            case 'india': return 'India'
            default: return ''
        }
    }

    return (
        <>
            <Head>
                <title>NNDYM {getName()} - Team</title>
            </Head>   
            <Navigation/>
            <MainLayout>
                <PageHeader
                    title={getName()}
                    breadcrumbs={{
                        title: 'Team',
                        link: "/team"
                    }}
                    half
                    cta={"The NNDYM team of " + getName() + "."}                    
                />
            </MainLayout>
        </>
    )
}


export async function getStaticPaths() {
    return {
        paths: [
            { params: { country: 'newzealand' } },
            { params: { country: 'australia' } },
            { params: { country: 'africa' } },
            { params: { country: 'europe' } },
            { params: { country: 'india' } },
            { params: { country: 'usa' } },
        ],
        fallback: false
    }
}

export async function getStaticProps({ params }) {

    let team_members:Array<any>;
    let country:string = params.country;

    if(country === 'newzealand') country = "new_zealand"

    await api.get("/team-members")
        .then(res => {
            team_members = res.data;
        })

    return {
        props: {
            country: country,
            team_members: team_members.filter(member => member.team === country)
        }
    }
}

export default Country
