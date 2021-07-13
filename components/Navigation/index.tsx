import { motion, useTransform, useViewportScroll } from 'framer-motion';
import Link from 'next/link';
import React from 'react'
import styled from 'styled-components'
import { Container } from '../../styles/Global';
import Button from '../Input/Button';
import Logo from '../Logo';

const Body = styled.div`
    position: fixed;
    top: 50px;
    left: 0;
    width:100%;
`;

const Holder = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 815px) {
        ul {
            ${props => props.inner ? "display: none;" : ""}
        }
    }
`;

const Nav = styled.ul`
    display: inline-flex;
    list-style: none;
    color: #fff;
    font-weight: 500;

    a {
        color: #fff;
        text-decoration: none;
        margin: 0px 40px 0px 0px;
        transition: 0.5s;

        &:after { 
            display: block;
            content: '';
            border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
            transform: scaleX(0);
            transition: all 250ms ease-in-out;
        }

        &:hover {
            color: ${({ theme }) => theme.colors.secondary};

            &:after {
                transform: scaleX(1);
            }
        }
    }
`;

function Navigation() {

    const { scrollY } = useViewportScroll();

    const yRange = [-200, -100, 100, 200]
    const opacityRange = [0, 1, 1, 0]

    const opacity = useTransform(scrollY, yRange, opacityRange)

    const y = useTransform(scrollY, [0,20], [0, -1], {
        clamp: false
    });    

    return (
        <Body>
            <Container>
                <Holder 
                    as={motion.div} 
                    style={{opacity:opacity, y:y}}
                >
                    <Holder inner>
                        <Logo/>
                        <Nav>
                            <Link href="/blog">Blog</Link>
                            <Link href="/events">Events</Link>
                            <Link href="/about">About Us</Link>
                            <Link href="/contact">Contact Us</Link>
                            <Link href="/donate">Donate</Link>
                        </Nav>
                    </Holder>
                    <Button
                        href="/account"
                        primary
                    >
                        Account
                    </Button>
                </Holder>
            </Container>
        </Body>
    )
}

export default Navigation
