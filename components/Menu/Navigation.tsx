import React from 'react'
import { motion } from "framer-motion";
import { MenuItem } from './MenuItem';
import styled from 'styled-components'
import { NavListCat } from '../../static_data/menu';
import Button from '../Input/Button';


const Holder = styled.div`
    padding-top: 0px;
    margin: 25px 65px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 25px;

    @media (max-width: 900px) {
        margin: 25px 55px;
    }

    @media (max-width: 750px) {
        margin: 25px 25px;
        grid-gap: 15px;
        grid-template-columns: 1fr;

    }
`

const NavigationList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;

    @media (max-width: 1200px) {
        grid-template-columns: 1fr;
    }
`

const Member = styled.div`

    background: linear-gradient(287deg,#ffffff 0%,#f3f3f3 100%);
    border-radius: 10px;

    padding: 40px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    
    @media (max-width: 1200px) {
        padding: 30px;
    }

    @media (max-width: 750px) {
        padding: 20px;
    }

    h2 {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 800;
        font-size: 38px;
        margin:0;
        margin-bottom: 10px;
    }

    ul {
        padding: 0;
        list-style: none;
        margin:0;
        font-size: 20px;
        margin-bottom: 10px;

        li {
            margin-top: 6px;
        }
    }

    h4 {
        font-weight: 800;
        font-size: 26px;
        margin:0;
        margin-bottom: 10px;
    }
`


const ButtonHolder = styled.div`
    display: inline-flex;
    gap: 10px;
    width: 100%;
    justify-content: flex-start;

    @media (max-width: 930px) {
        flex-direction: column;

    }
`

const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };
  
function Navigation() {
    return (
        <Holder>
            <NavigationList as={motion.div} variants={variants}>
                {NavListCat.map((i, index) => (
                    <MenuItem item={i} key={index} />
                ))}
            </NavigationList>
            <Member 
                as={motion.div} 
                variants={{
                    open:{
                        opacity: 1,
                        scale: 1,
                        transition: {
                            delay: 0.7,
                        },
                    },
                    closed: {
                        opacity: 0,
                        scale: 0.2,
                    }
                }}
            >
                <h2>Are you a Member?</h2>
                <ul>
                    <li>Exclusive Content</li>
                    <li>Early Sign Up's</li>
                    <li>Seva Oppturnites</li>
                    <li>Exclusive Events</li>
                </ul>
                <h4>100% Free</h4>
                <ButtonHolder>
                    <Button primary href="/login">Login</Button>
                    <Button primary href="/register">Register</Button>
                    <Button href="/account">Learn More</Button>
                </ButtonHolder>
            </Member>
        </Holder>
    )
}




export default Navigation
