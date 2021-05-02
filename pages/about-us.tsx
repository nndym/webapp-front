import styled from 'styled-components'
import Menu from '../components/Menu'
import LoadingScreen from '../components/Loading'
import { Background, Container, Header } from '../styles/Global';
import Image from 'next/image'


const ClipArt = styled.div`
    width: 100%;
    height: 70vh;
    background: white;
    position: absolute;
    z-index:0;
    clip-path: polygon(0% 19%, 17% 3%, 43% 38%, 60% 33%, 79% 47%, 100% 14%, 100% 100%, 0 100%);
`;

const Absolute = styled.div`
    position: absolute;
    margin-top: 20px;
`;


function about() {
    return (
        <>
            <LoadingScreen/>
            <Menu/> 
            <Background>
                <Container>
                    <Header>
                        <h5>About Us</h5>
                        <h2>Learn about the past, present and future of NNDYM</h2>
                    </Header>
                </Container>
                <ClipArt/>
                <Container>
                    <Absolute>
                        <Image
                            src="/v1619918495/DSC_0672_cpjhjw.jpg"
                            alt="Picture of the author"
                            width="1200"
                            height="800"
                            layout="responsive"
                        />
                    </Absolute>
                </Container>
            </Background>
        </>
    )
}

export default about;