import React from 'react'
import styled from 'styled-components'
import NextLink from 'next/link'
import { motion } from 'framer-motion';


const LinkA = styled.a`
    margin-right: 20px;
    position: relative;
    text-decoration:none;
    font-weight: 600;
    font-size: 20px;
    padding-bottom: 3px;
    color: black;

    &::before{
		transition: all 0.85s cubic-bezier(0.26, 0.01, 0.47, 1.1);
		content: '';
		width: 25px;
		height: 3px;
		background: ${({ theme }) => theme.colors.primary};
		position: absolute;
		bottom: 0;
		left: 0;
	}

    &:hover {
        &::before{
          background: ${({ theme }) => theme.colors.secondary};
          width: 100%;
        }
    }


    @media (max-width: 712px) {
        display: block;

        margin: 10px 0px;

        &:hover {
          &::before{
            width: 10%;
          }
        }
    }

`;

const variants = {
    open: {
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      }
    },
    closed: {
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };
  

function Link({children, link}) {
    return (
        
        <NextLink href={link} passHref>
            <LinkA
                as={motion.a}
                variants={variants}
            >{children}</LinkA>
        </NextLink>
    )
}

export default Link
