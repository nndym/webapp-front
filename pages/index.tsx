import styled from 'styled-components'

const Holder = styled.div`
  padding: 50px;
`

const Title = styled.h1`
  font-size: 50px;
  margin:0px;
  color: ${({ theme }) => theme.colors.primary};
`

const SubTitle = styled.h3`
  font-size: 30px;
  margin:0px;
  color: ${({ theme }) => theme.colors.secondary};
`

export default function Home() {
  return (
    <Holder>
      <Title>NNDYM</Title>
      <SubTitle>Be Human First, Then Religious</SubTitle>
    </Holder>
  )
}
