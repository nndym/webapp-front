import React, { useEffect, useState } from 'react'

import styled, {keyframes} from 'styled-components'

export const slideIn = keyframes`
  from {
    bottom:0
  }

  to {
    bottom:100%;
  }
`;


const Backdrop = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background: white;
    display: ${props => props.hide ? "none": "auto"};
    z-index: 99;
    animation: ${slideIn} 0.8s cubic-bezier(0.65, 0.05, 0.36, 1) ;
`;

export default function LoadingScreen() {

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 600);
        return () => {
            //
        }
    }, [])

    return (
        <Backdrop hide={loaded}>
            
        </Backdrop>
    )
}
