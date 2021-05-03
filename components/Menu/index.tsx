import { motion, useCycle } from 'framer-motion';
import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  position: fixed;
  top: 40px;
  padding: 20px;
  right: 0px;
  width: 120px;
  height: 65px;
  background: transparent;
  display: flex;
  align-items: center;
  background: white;
  border-radius: 10px 0px 0px 10px;
  z-index:51;

  p {
    padding-left: 10px;
    font-weight: 800;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    margin: 0;
  }
`;

const Background = styled.div`
    position: fixed;
    width:100%;
    height: 100%;
    left: 100%;
    background:white;
    z-index:50;
`;

const Path = props => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...props}
    />
  );


function Menu() {

    const [isOpen, toggleOpen] = useCycle(false, true);

    return (
        <>
            <motion.div
                animate={isOpen ? "open" : "closed"}
            >
                <Button 
                    as={motion.button} 
                    onClick={()=>toggleOpen()}
                    whileHover={{ 
                        scale: 1.1
                    }}
                    whileTap={{ scale: 1.0 }}
                    transition={{ duration: 0.2 }}
                >
                    <svg width="23" height="23" viewBox="0 0 23 23">
                        <Path
                            variants={{
                                closed: { d: "M 2 2.5 L 20 2.5" },
                                open: { d: "M 3 16.5 L 17 2.5" }
                            }}
                        />
                        <Path
                            d="M 2 9.423 L 20 9.423"
                            variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 }
                            }}
                            transition={{ duration: 0.1 }}
                        />
                        <Path
                            variants={{
                            closed: { d: "M 2 16.346 L 20 16.346" },
                            open: { d: "M 3 2.5 L 17 16.346" }
                            }}
                        />
                    </svg>
                    <p>Menu</p>
                </Button>
            </motion.div>
            <motion.div
                animate={isOpen ? "open" : "closed"}
            >
                <Background as={motion.div}
                    variants={{
                        closed: { left: '100%' },
                        open: { left: '0%' }
                    }}
                    transition={{ duration: 0.8, ease: [0.65, 0.05, 0.36, 1] }}
                >
                </Background>
            </motion.div>
        </>
    )
}

export default Menu
