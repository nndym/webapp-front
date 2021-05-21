import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'


const Main = styled.a`
    padding: 15px;

`


function Button(
    {
        children,
        onClick
    }
) {
    return (
        <Link
            href="https://isso.org.nz/"
            passHref
        >
            <Main 
                onClick={onClick}
            >
                {children}
            </Main>
        </Link>
    )
}

export default Button
