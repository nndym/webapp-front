import React from 'react'
import Menu from '../components/Menu'
import LoadingScreen from '../components/Loading'
import styled from 'styled-components'
import { Background, Container, Header } from '../styles/Global';

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
            <Background>
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
                            <h2>This feature is not currently available in your area, please check back again later!</h2>
                        </Content>
                    </Border>
                </Container>
            </Background>
            
        </>
    )
}
