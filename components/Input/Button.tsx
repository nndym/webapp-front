import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Main = styled.a`
    padding: 14px 18px;
    background: ${props => props.primary ? "#0800FF" : "#129CDF"};
    border-radius: 9px;
    font-weight: 600;
    color: #fff;
    text-decoration: none;

    @media (max-width: 930px) {
        text-align: center;
    }
    
`
interface Props {
    children?: any,
    onClick?: any,
    href?: string,
    primary?: boolean
}

function Button(
    {
        children,
        onClick,
        href,
        primary
    } : Props
) {
    return (
        <Link
            href={href}
            passHref
        >
            <Main 
                as={motion.a}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                primary={primary}
                onClick={onClick}
            >
                {children}
            </Main>
        </Link>
    )
}

export default Button
