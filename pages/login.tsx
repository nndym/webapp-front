import React from 'react'

import Menu from '../components/Menu'
import LoadingScreen from '../components/Loading'

import styled from 'styled-components'

const Main = styled.div`
    background: rgb(85,198,234);
    background: linear-gradient(45deg, rgba(85,198,234,1) 0%, rgba(20,138,255,1) 100%);
    height: 100vh;
    width: 100%;
`;

const Container = styled.div`
    max-width: 1200px;
    margin: auto;

    @media(max-width: 1230px) {
        padding:30px;
        padding-bottom:0px;
    }
`;

const Header = styled.div`

    padding-top:200px;

    color:white;

    h5{
        margin:0;
        font-size: 1rem;
        margin-bottom:10px;
        font-weight: 300;
    }

    h2{
        margin: 0;
        font-size: 4rem;
        line-height: 60px;
    }

    @media(max-width: 660px) {

        padding-top:180px;

        h2 {
            font-size: 3rem;
            line-height: 50px;
        }
    }

    @media(max-width: 360px) {

        padding-top:140px;

        h2 {
            font-size: 2rem;
            line-height: 40px;
        }
    }

    @media(max-height: 420px) {

        padding-top:120px;

        h2 {
            font-size: 2rem;
            line-height: 40px;
        }
    }
`;

const ClipArt = styled.div`
    width: 100%;
    height: 70vh;
    background: white;
    position: absolute;
    z-index:0;
    clip-path: polygon(0% 100%, 0 24%, 45% 8%, 48% 30%, 100% 11%, 100% 100%);


`;

const Border = styled.div`
    background: rgb(150,11,242);
    background: linear-gradient(45deg, rgba(150,11,242,1) 0%, rgba(0,34,255,1) 100%);
    margin-top:80px;
    position: relative;
    z-index:1;
    padding: 10px;
    border-radius: 10px;

    @media(max-width: 1230px) {

        margin-top:20px;
    }

    @media(max-width: 710px) {

        margin-top:0px;
    }
`;

const Content = styled.div`
    background:white;
    border-radius: 10px;
    display:grid;
    grid-template-columns: 1fr 1fr;
    padding: 50px;
    z-index:2;

    @media(max-width: 750px) {
        padding: 30px;
        grid-template-columns: 1fr;
    }

    @media(max-width: 650px) {
        padding: 20px;
    }
`;

export default function login() {
    return (
        <>
            <LoadingScreen/>
            <Menu/>
            <Main>
                <Container>
                    <Header>
                        <h5>Login</h5>
                        <h2>Jump back into the action</h2>
                    </Header>
                </Container>
                <ClipArt></ClipArt>
                <Container>
                    <Border>
                        <Content>
                            <div>
                                <div>
                                    <label>Email</label>
                                    <input />
                                </div>
                                <div>
                                    <label>Password</label>
                                    <input />
                                </div>
                            </div>
                            <div>
                                Sign in with Service here
                            </div>
                        </Content>
                    </Border>
                </Container>
            </Main>   
        </>
    )
}
