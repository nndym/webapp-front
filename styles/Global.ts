import styled from 'styled-components'

export const SubTitle = styled.h3`
    font-size: 30px;
    margin:0px;
    color: ${({ theme }) => theme.colors.secondary};
`


export const Container = styled.div`
    max-width: 1200px;
    margin: auto;

    @media(max-width: 1230px) {
        padding:30px;
        padding-bottom:0px;
    }
`;

export const Header = styled.div`

    padding-top:200px;

    color:white;

    h5{
        margin:0;
        font-size: 1rem;
        margin-bottom:10px;
        font-weight: 300;
    }

    h2{
        margin: 0;
        font-size: 4rem;
        line-height: 70px;
    }

    @media(max-width: 660px) {

        padding-top:180px;

        h2 {
            font-size: 3rem;
            line-height: 50px;
        }
    }

    @media(max-width: 360px) {

        padding-top:140px;

        h2 {
            font-size: 2rem;
            line-height: 40px;
        }
    }

    @media(max-height: 420px) {

        padding-top:120px;

        h2 {
            font-size: 2rem;
            line-height: 40px;
        }
    }
`;


export const Background = styled.div`
    background: rgb(85,198,234);
    background: linear-gradient(45deg, rgba(85,198,234,1) 0%, rgba(20,138,255,1) 100%);
    height: 100vh;
    width: 100%;
`;
