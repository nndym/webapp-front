import React from 'react'
import { motion } from "framer-motion";
import { MenuItem } from './MenuItem';
import styled from 'styled-components'
import { NavListCat } from '../../static_data/menu';


const Holder = styled.div`
    padding-top: 0px;
    margin: 25px 65px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 25px;

    @media (max-width: 900px) {
        margin: 25px 55px;
    }

    @media (max-width: 712px) {
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

    @media (max-width: 712px) {

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
            <div>
                <h1>Member perks</h1>
            </div>
        </Holder>
    )
}


export default Navigation
