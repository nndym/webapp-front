import styled from 'styled-components'
import Menu from '../components/Menu'
import Logo from '../components/Logo'
import Button from '../components/Input/Button';

const Background = styled.div`
  background: rgb(85,198,234);
  background: linear-gradient(45deg, rgba(85,198,234,1) 0%, rgba(20,138,255,1) 100%);
  height: 100vh;
  width: 100%;
`;

const Divider = styled.svg`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 150px;
  transform: rotate(180deg);
  path {
    fill: #fff
  }

  @media (max-width: 1415px) {
    height: 130px;
  }

  @media (max-width: 900px) {
    height: 80px;
  }

  @media (max-width: 711px) {
    height: 50px;
  }
`;

const Content = styled.div`
  position: absolute;
  width: 100%;
`;

const Container = styled.div`
  max-width: 1065px;
  margin: auto;

  @media (max-width: 1415px) {
    padding: 0px 70px;
  }

  @media (max-width: 900px) {
    padding: 0px 55px;
  }

  @media (max-width: 711px) {
    padding: 0px 25px;
  }
`;

const Header = styled.div`
  padding: 240px 0px;
  color: white;

  h5 {
    margin: 0;
    font-weight: 300;
    font-size: 1.4em;
  }

  h2 {
    margin: 0;
    font-weight: 700;
    font-size: 4.2em;
    line-height: 4.2rem;
  }

  @media (max-width: 900px) {

    padding: 200px 0px;

    h5 {
      font-size: 1em;
    }
  
    h2 {
      font-size: 3.7em;
      line-height: 3.7rem;
    }
  }

  @media (max-width: 711px) {

    padding: 240px 0px;

    h2 {
      font-size: 2.8em;
      line-height: 2.8rem;
    }
  }

  @media (max-height: 375px) {

    padding: 140px 0px;

    h2 {
      font-size: 2.8em;
      line-height: 2.8rem;
    }
  }
`;

const ButtonHolder = styled.div`
  display: inline-flex;
  gap: 10px;
  margin: 25px 0px;
  justify-content: flex-start;

  @media (max-width: 414px) {
      flex-direction: column;
      width: 100%;
  }
`;



export default function Home() {
  return (
    <>
      <Logo/>
      <Menu/>
      <Background>
      <Divider xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" ></path>
      </Divider>
        <Content>
          <Container>
            <Header>
              <h5>Camp 2021</h5>
              <h2>Beyond the Limits, Beyond you!</h2>
              <ButtonHolder>
                <Button primary href="/camp/2021">Sign Up</Button>
                <Button href="/camp/2021">Learn More</Button>
              </ButtonHolder>
            </Header>
          </Container>
        </Content>
      </Background>
      {/* <Title>NNDYM</Title>
      <SubTitle>Be Human First, Then Religious</SubTitle> */}
    </>
  )
}
