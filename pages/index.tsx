import styled from 'styled-components'

import Menu from '../components/Menu'

import {SubTitle} from '../styles/Global'

const Holder = styled.div`
  padding: 50px;
`

const Title = styled.h1`
  font-size: 50px;
  margin:0px;
  color: ${({ theme }) => theme.colors.primary};
`


export default function Home() {
  return (
    <Holder>
      <Menu/>
      {/* <Title>NNDYM</Title>
      <SubTitle>Be Human First, Then Religious</SubTitle> */}
    </Holder>
  )
}
