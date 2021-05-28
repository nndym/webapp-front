import React from 'react'
import Menu from '../components/Menu'
import Logo from '../components/Logo'
import styled from 'styled-components'
import { Background, Container, Content, Divider, Floater, Header } from '../styles/Page'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

export const Slice = styled.div`
    background: white;
    width: 100%;
    clip-path: polygon(40% 0%, 0 90%, 0% 100%, 100% 100%, 100% 0);
    height: 100%;

    
    @media (max-width: 1415px) {
        clip-path: polygon(40% 0%, 0 100%, 0% 100%, 100% 100%, 100% 0);
    }

    @media (max-width: 900px) {
        clip-path: polygon(60% 0%, 0 100%, 0% 100%, 100% 100%, 100% 0);
    }

    @media (max-width: 711px) {
        padding: 0px 25px;
    }
`;

function About() {


    return (
        <>
          <Logo/>  
          <Menu/>
          <Background page>
                <Slice/>
           </Background>
           <Content>
               <Container>
                   <Header page>
                    <h5>Back</h5>
                    <h2>About Us</h2>
                   </Header>
                   <h2>Coming soon...</h2>
               </Container>
           </Content>
        </>
    )
}

export default About
