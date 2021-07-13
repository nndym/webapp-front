import styled from 'styled-components'
import Menu from '../components/Menu'
import Logo from '../components/Logo'
import Button from '../components/Input/Button';
import MemberPerks from '../components/MemberPerks';
import { Background, Floater, Divider, Content, Container, Header } from '../styles/Page';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import Navigation from '../components/Navigation';

const ButtonHolder = styled.div`
`;




export default function Home() {

  return (
    <>
      <Background/>
      <Navigation/>
      <div style={{paddingBottom:800}}/>
    </>
  )
}
