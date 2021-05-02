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

const Relative = styled.div`
    position: relative;
    margin: 80px 0px;

    @media(max-width: 1230px) {
        margin: 60px 0px;
    }

    @media(max-width: 650px) {
        margin: 40px 0px;
    }

    @media(max-width: 400px) {
        margin: 20px 0px;
    }
`;

const CoverImage = styled.div`
    width:100%;
    height: 500px;

    @media(max-width: 1230px) {
        height: 450px;
    }

    @media(max-width: 650px) {
        height: 300px;
    }

    @media(max-width: 400px) {
        height: 250px;
    }
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
                    <Relative>
                        <CoverImage>
                            <Image
                                src="/v1619918495/DSC_0672_cpjhjw.jpg"
                                alt="Picture of the author"
                                layout="fill"
                                objectFit="cover"
                            />
                        </CoverImage>
                    </Relative>
                </Container>
            </Background>
        </>
    )
}

export default about;