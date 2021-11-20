import PageHeader from '@components/Header/Page'
import MainLayout from '@components/Layout/Main'
import Navigation from '@components/Navigation'
import Head from 'next/head'
import React from 'react'
import about_us_bal_mandal from '@images/about_us_bal_mandal.jpg'
import AccountSnippet from '@components/Snippets/Account'
import PageContainer from '@components/Page/Container'
import CenterPointHeader from '@components/Header/CenterPoint'
import Tiles from '@components/Tiles'
import BasicTiles from '@components/Tiles/Basic'
import QuoteSnippet from '@components/Snippets/Quote'

function BalMandal() {
    return (
        <>
            <Head>
                <title>Bal Mandal Classes</title>
            </Head>   
            <Navigation/>
            <MainLayout>
                <PageHeader
                    image={about_us_bal_mandal}
                    title="Bal Mandal Classes" 
                    breadcrumbs={{
                        title: 'About Us',
                        link: "/about"
                    }}
                    cta="These classes cultivate cultural, spiritual, and social development for the pre-teen youths of our future."                    
                />
                <PageContainer>
                    <CenterPointHeader
                        title="What happens?"
                        text="NNDYM conducts weekly educational Bal Mandal classes for the enrichment and personal development of youths. "
                        pushTop
                    />
                    <Tiles
                        title="We do activities such as"
                        data={[
                            {
                                title: "Arts and Crafts",
                                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet tempor ex. Pellentesque eget tempor tellus. In sed tristique purus. Maecenas sit amet commodo mi,",
                            },
                            {
                                title: "Plays & Skits",
                                text: "Proin at elit dictum velit faucibus viverra sed sed magna. Nunc non porttitor urna, eu rutrum elit.",
                            },
                            {
                                title: "Field Trips",
                                text: "In eget nisl eu ante mollis sollicitudin. Cras ut mauris eleifend, vehicula neque vel, blandit augue. Nulla eleifend urna massa, in ultricies tellus interdum non. Duis sed fringilla est. Proin at congue libero. Integer id nulla et lacus suscipit sollicitudin in sit amet magna. Phasellus nec ligula gravida, gravida sapien eget,",
                            },
                            {
                                title: "Gujarati Classes",
                                text: "Etiam non rhoncus odio. Morbi non neque rhoncus, consequat turpis sit amet, placerat magna. Morbi condimentum hendrerit tellus sed tempor. Quisque id sollicitudin dolor, quis pharetra odio. Nullam laoreet felis nulla. Sed placerat v",
                            },
                            {
                                title: "Spiritual Development",
                                text: "Duis posuere nisl non ipsum consectetur mollis. Fusce sed nulla sit amet felis volutpat fermentum. Aliquam vitae urna tristique, efficitur velit et, sagittis elit. Ut sit amet sem risus. Maecenas risus ipsum, porttitor",
                            },
                            {
                                title: "Tabla and Harmonium",
                                text: "Ut tempor eros ac pretium viverra. Quisque tempor, purus eget maximus ultrices, urna nulla viverra nunc, ",
                            },
                            {
                                title: "Indian Classical Dances",
                                text: "Etiam non rhoncus odio. Morbi non neque rhoncus, consequat turpis sit amet, placerat magna. Morbi condimentum hendrerit tellus sed tempor. Quisque id sollicitudin dolor, quis pharetra odio. Nullam laoreet felis nulla. Sed placerat velit tortor, ac bibendum justo viverra vel. Duis posuere nisl non ",
                            }
                        ]}
                    />
                    <CenterPointHeader
                        title="Opperating World Wide"
                        text="NNDYM Bal Mandal classes are span the whole globe."
                        pushTop
                    />
                    <BasicTiles
                        data={[
                            {
                                title: "India",
                                text: "Original started here and been going strong ever since",
                            },
                            {
                                title: "United States",
                                text: "Operating since 1994 these classes have raised many generations.",
                            },
                            {
                                title: "Europe",
                                text: "With the many families living on this side of planet it was a no brainer",
                            },
                            {
                                title: "Africa",
                                text: "amet, placerat magna. Morbi condimentum hendrerit tellus sed tempor. Quisque id sollicitudin dolor, quis pharetra odio. Nullam laoreet felis nulla. Sed placerat v",
                            },
                            {
                                title: "Australia",
                                text: "Etiam non rhoncus odio. Morbi non neque rhoncus, consequat turpis sit amet, placer",
                            },
                            {
                                title: "New Zealand",
                                text: "Kiwis...",
                            },
                        ]}
                    />
                </PageContainer>
                <QuoteSnippet/>
                <AccountSnippet/>
            </MainLayout>
        </>
    )
}

export default BalMandal
