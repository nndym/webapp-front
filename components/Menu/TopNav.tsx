import { motion } from 'framer-motion';
import React from 'react'

import styled from 'styled-components'
import Link from './Link';

const links = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "About Us",
        link: "/about-us"
    },
    {
        name: "Events",
        link: "/events"
    },
    {
        name: "Contact Us",
        link: "/contact-us"
    },
    {
        name: "Donate",
        link: "/donate"
    },
    {
        name: "Legal",
        link: "/legal"
    }
]

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};
  

const TopNavHolder = styled.div`
    margin: 55px 160px;

    @media (max-width: 900px) {
        margin: 138px 55px 10px;
    }

    @media (max-width: 750px) {
        margin: 138px 25px 10px;
    }
`;

function TopNav() {
    return (
        <TopNavHolder as={motion.div} variants={variants}>
            <nav>
                {links.map((item, index)=>(
                    <Link link={item.link} key={index}>{item.name}</Link>
                ))}
            </nav>
        </TopNavHolder>
    )
}

export default TopNav
