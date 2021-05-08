import * as React from "react";
import { motion } from "framer-motion";
import styled from 'styled-components'


const variants = {
  open: {
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const Item = styled.div`
    background: ${({ theme }) => theme.colors.primary};
    color: white;
`;

export const MenuItem = ({ i }) => {
  return (
    <Item
      as={motion.div}
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <h1 style={{padding: 5}}>Menu Item</h1>
    </Item>
  );
};
