import Link from 'next/link';
import styled, {keyframes} from 'styled-components'


export const slideIn = keyframes`
  from {
    left:100%
  }

  to {
    left:0;
  }
`;

export const slideDown = keyframes`
  0% {
    opacity:0;
  }

  100% {
    opacity:1;
  }
`;

export const slideOut = keyframes`
  from {
    left:0
  }

  to {
    left:100%;
  }
`;

export const MenuButton = styled.div`
    position: fixed;
    right: 0px;
    top: 70px;
    padding: 20px;
    cursor: pointer;
    width: 90px;
    transition: 0.5s;

    z-index:45;

    &::before{
		transition: all 0.55s cubic-bezier(0.65, 0.05, 0.36, 1);
		content: '';
		width:  3px;
		height: 100%;
		background: ${({ theme }) => theme.colors.secondary};
		position: absolute;
		top: 0;
		right: 0;
	}

    &:hover {

        transform: scale(1.1);

        &::before{
			background: ${({ theme }) => theme.colors.secondary};
			width: 100%;
		}

        
        span{
            color: white;
            mix-blend-mode: difference;
        }
    }

    background: white;
`

export const Menu = styled.div`
    display: ${props => props.hideDeply ? "flex" : "none"};
    background: white;
    width: calc(100% - 100px);
    top: 0;
    animation: ${props => props.show ? slideIn : slideOut} 0.8s cubic-bezier(0.65, 0.05, 0.36, 1) ;
    left: 0;
    height: 100%;
    position: fixed;
    padding:50px;

    z-index:50;

    @media(max-height: 375px) {
        padding:10px 50px;
    }
`;

export const Header = styled.div`
    display:flex;
    align-items: center;
    padding-top:30px;
    justify-content: space-between;

    @media(max-height: 500px) {
        
        padding-top:0px;
    }
`;

export const CloseButton = styled.a`
    font-weight: 800;
    font-size: 30px;
    transition: 0.5s;
    cursor: pointer;


    i {
        transition: 0.5s;
        
        border-radius: 54px;
        padding: 5px;
    }

    &:hover{

        

        i{
            transform: scale(1.1);
            background: ${({ theme }) => theme.colors.primary};
            color:white;
        }
    }
`;

export const Logo = styled.svg`
    width: 50px;
    height: auto;
    fill: ${({ theme }) => theme.colors.secondary};
`;

export const Main = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media(max-width: 812px) {
        grid-template-columns: 1fr 1fr;

        height: 70vh;
        overflow: auto;

    }

    @media(max-height: 500px) {
        
        overflow: auto;
    }

    @media(max-width: 441px) {
        padding-top:25px;
        height: 70vh;
        grid-template-columns: 1fr;
        overflow: auto;
    }
`;

export const NavSection = styled.nav`
    display:flex;
    padding-top:30px;
    flex-direction: column;

    

    span {
        display:none;
        width:100%;
        height: 2px;
        background: ${({ theme }) => theme.colors.primary};
    }

    @media(max-width: 441px) {
        padding-top:0px;

        span {
            display:block;
        }
    }

    a {
        text-decoration: none;
        font-weight: 600;
        font-size: 1.5rem;
        margin-top: 8px;
        margin-bottom: 8px;
        transition: 0.2s;
        padding-left: 5px;
        border-left: ${({ theme }) => theme.colors.secondary} 4px solid;
        color: ${({ theme }) => theme.colors.primary};
        animation: ${slideDown} 0.8s 0.1s cubic-bezier(0.65, 0.05, 0.36, 1);
        &:hover{ 
            border-left: ${({ theme }) => theme.colors.primary} 8px solid;
        }
    }
`;