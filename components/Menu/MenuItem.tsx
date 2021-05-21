import * as React from "react";
import { motion } from "framer-motion";
import styled from 'styled-components'
import Link from "next/link";


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
    background: ${ props  => props.background};
    color: white;
    padding: 20px;
    font-size: 22px;
    display: flex;
    border-radius: 4px;
    align-items: center;
    height: 58%;
`;

const MyLink = styled.a`
    text-decoration: none;
    font-weight: 600;

    i {
      padding-right: 8px;
      font-size: 35px;
    }
`;

export const MenuItem = ({ item }) => {
  return (
    
      <Link passHref href={item.link}>
        <MyLink>
          <Item
            as={motion.div}
            variants={variants}
            whileHover={{ scale: 1.05 }}
            background={item.bg}
            whileTap={{ scale: 0.95 }}
          >
          <i className={item.icon}></i> {item.title}
          </Item>
        </MyLink>
      </Link>
    
  );
};
