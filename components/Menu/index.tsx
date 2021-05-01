import { useState } from 'react'
import styled, {keyframes} from 'styled-components'

const slideIn = keyframes`
  from {
    left:100%
  }

  to {
    left:0;
  }
`;

const slideOut = keyframes`
  from {
    left:0
  }

  to {
    left:100%;
  }
`;

const MenuButton = styled.div`
    position: fixed;
    right: 0px;
    top: 70px;
    padding: 20px;
    cursor: pointer;
    width: 90px;

    &::before{
		transition: all 0.55s cubic-bezier(0.65, 0.05, 0.36, 1);
		content: '';
		width: 10%;
		height: 100%;
		background: ${({ theme }) => theme.colors.primary};
		position: absolute;
		top: 0;
		right: 0;
	}

    &:hover {
        &::before{
			background: ${({ theme }) => theme.colors.primary};
			width: 100%;
		}

        
        span{
            color: white;
            mix-blend-mode: difference;
        }
    }

    background: white;
`

const Menu = styled.div`
    display: ${props => props.hideDeply ? "flex" : "none"};
    background: white;
    width: calc(100% - 100px);
    top: 0;
    animation: ${props => props.show ? slideIn : slideOut} 0.8s cubic-bezier(0.65, 0.05, 0.36, 1) ;
    left: 0;
    height: 100%;
    position: fixed;
    padding:50px;
`;

const Header = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
`;

const CloseButton = styled.a`
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

function index() {

    const [open, setOpen] = useState(true)
    const [hideDelay, setHideDelay] = useState(true)

    const handleClose = () => {
        setOpen(false);
        
        setTimeout(() => {
            setHideDelay(false);
        }, 800);
    }

    const handleOpen = () => {
        setOpen(true);
        setHideDelay(true);
    }

    return (
        <>
            <MenuButton onClick={handleOpen}>
                <span>Menu</span>
            </MenuButton>
            <Menu hideDeply={hideDelay} show={open}>
                <div style={{width:"100%"}}>
                    <Header>
                        <h1>NNDYM</h1>
                        <CloseButton onClick={handleClose}><i className="las la-times"></i></CloseButton>
                    </Header>
                </div>
            </Menu>
        </>
    )
}

export default index
