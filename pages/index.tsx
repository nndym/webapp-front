import styled from 'styled-components'

import Menu from '../components/Menu'

import LoadingScreen from '../components/Loading'


const Title = styled.h1`
  font-size: 50px;
  margin:0px;
  color: ${({ theme }) => theme.colors.primary};
`

const Background = styled.div`
  background: rgb(85,198,234);
  background: linear-gradient(45deg, rgba(85,198,234,1) 0%, rgba(20,138,255,1) 100%);
  height: 100vh;
  width: 100%;
`;


export default function Home() {
  return (
    <>
      <LoadingScreen/>
      <Menu/>
      <Background>
        hello
      </Background>
      {/* <Title>NNDYM</Title>
      <SubTitle>Be Human First, Then Religious</SubTitle> */}
    </>
  )
}
