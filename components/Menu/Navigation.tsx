import React from 'react'
import { motion } from "framer-motion";
import { MenuItem } from './MenuItem';
import styled from 'styled-components'


const NavigationList = styled.div`
    padding-top: 0px;
    margin: 25px 65px;

    @media (max-width: 900px) {
        margin: 25px 55px;
    }

    @media (max-width: 712px) {
        margin: 25px 25px;
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
  

  const itemIds = [0, 1, 2, 3, 4, 1];

function Navigation() {
    return (
        <NavigationList as={motion.div} variants={variants}>
            <div>
                {itemIds.map((i, index) => (
                    <MenuItem i={i} key={index} />
                ))}
            </div>
        </NavigationList>
    )
}


export default Navigation
